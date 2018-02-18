pragma solidity ^0.4.17;
import "./FEATToken.sol";

//factory used for creating grant proposals
contract FEATFactory {

    //event emission for web3 to track
    event FEATCreated(
        address indexed creatorAddress,
        address FEATAddress,
        string FEATName,
        string FEATSymbol,
        uint totalSupply,
        uint8 percentCut
    );

    function createFEATToken(
        string _name,
        string _symbol,
        uint _totalSupply,
        uint8 _percentCut
    ) public returns (FEATToken _FEATTokenAddress)
    {
        FEATToken newFEAT = (new FEATToken)(msg.sender, _name, _symbol, _totalSupply, _percentCut);
        FEATCreated(msg.sender, newFEAT, _name, _symbol, _totalSupply, _percentCut);
        return newFEAT;
    }
}