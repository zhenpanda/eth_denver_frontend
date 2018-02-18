pragma solidity ^0.4.18;


import "./ERC20Basic.sol";
import "./SafeMath.sol";
import "./Grant.sol";

contract FEATToken is ERC20Basic {
    using SafeMath for uint256;

    struct Proposal {
        uint proposalVotes;
        uint amountToFund;
    }

    string public name;
    string public symbol;
    uint8 public decimals;
    mapping(address => uint256) balances;
    uint256 totalSupply_;
    uint8 public percentCut;
    uint public poolGrantFund = 0;
    uint public poolRewardsFund = 0;
    mapping(address => Proposal) public proposals;
    //this is used to keep track of the proposals an invididual has voted on
    mapping(address => mapping(address => uint)) public votes;

    function FEATToken(address _creator, string _name, string _symbol, uint _totalSupply, uint8 _percentCut) public {
        require(_percentCut <= 50);
        name = _name;
        symbol = _symbol;
        decimals = 0;
        totalSupply_ = _totalSupply;
        balances[_creator] = _totalSupply;
        percentCut = _percentCut;
    }

    function fundFEATPool() public payable {
        uint grantPercent = (msg.value).mul(percentCut).div(100);
        uint rewardsPercent = (msg.value).mul(100 - percentCut).div(100);
        poolGrantFund = poolGrantFund + (grantPercent);
        poolRewardsFund = poolRewardsFund + (rewardsPercent);

        //NEXT STEP IS TO INTEGRATE THE REWARDS ALLOCATING AND WITHDRAWING;
    }

    function voteToFundProposal(address _grantAddress) public {
        require(votes[msg.sender][_grantAddress] == 0);
        uint votingPower = balanceOf(msg.sender);
        proposals[_grantAddress].proposalVotes = proposals[_grantAddress].proposalVotes + votingPower;
        votes[msg.sender][_grantAddress] = votingPower;
    }

    event GrantProposed(
        address indexed proposer,
        address indexed FEATAddress,
        address indexed grantAddress,
        uint amountToFund
    );

    function firstProposeProposal(address _grantAddress, uint _amountToFund) public {
        require(proposals[_grantAddress].amountToFund == 0);
        voteToFundProposal(_grantAddress);
        proposals[_grantAddress].amountToFund = _amountToFund;
        GrantProposed(msg.sender, address(this), _grantAddress, _amountToFund);
    }

    function fundProposal(address _grantAddress) public {
        //SECURITY -- HERE WE NEED TO PREVENT DOUBLE VOTING
        require(proposals[_grantAddress].proposalVotes > (totalSupply_).div(2));
        Grant deployedGrant = Grant(_grantAddress);
        uint fundingAmount = proposals[_grantAddress].amountToFund;
        deployedGrant.fundGrant.value(fundingAmount)();
        poolGrantFund = poolGrantFund - fundingAmount;
    }

    /**
    * @dev total number of tokens in existence
    */
    function totalSupply() public view returns (uint256) {
        return totalSupply_;
    }

    /**
    * @dev transfer token for a specified address
    * @param _to The address to transfer to.
    * @param _value The amount to be transferred.
    */
    function transfer(address _to, uint256 _value) public returns (bool) {
        require(_to != address(0));
        require(_value <= balances[msg.sender]);

        //SECURITY -- WE NEED TO PREVENT TRANSFERING COINS IF SOMEBODY HAS VOTES OUT
        //OR WE NEED TO CLEAR ALL VOTES UPON TRANSFERING

        // SafeMath.sub will throw if there is not enough balance.
        balances[msg.sender] = balances[msg.sender].sub(_value);
        balances[_to] = balances[_to].add(_value);
        Transfer(msg.sender, _to, _value);
        return true;
    }

    /**
    * @dev Gets the balance of the specified address.
    * @param _owner The address to query the the balance of.
    * @return An uint256 representing the amount owned by the passed address.
    */
    function balanceOf(address _owner) public view returns (uint256 balance) {
        return balances[_owner];
    }

}