pragma solidity ^0.4.17;
import "./Grant.sol";

//factory used for creating grant proposals
contract GrantFactory {

    //event emission for web3 to track
    event GrantCreated(
        address indexed _creatorAddress,
        address _grantAddress,
        string _grantTitle,
        string _grantTopic
    );


    function createGrantProposal(
        string _grantTitle,
        string _grantTopic,
        uint _amountNeeded,
        string _summary,
        string _ipfsDescriptionHash
    ) public returns (Grant _grantAddress)
    {
        Grant newGrant = (new Grant)(msg.sender, _grantTitle, _grantTopic,  _amountNeeded, _summary, _ipfsDescriptionHash);
        GrantCreated(msg.sender, newGrant, _grantTitle, _grantTopic);
        return newGrant;
    }
}