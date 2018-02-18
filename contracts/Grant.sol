pragma solidity ^0.4.17;

contract Grant {

    address public owner;
    string public grantTitle;
    string public grantTopic;
    uint public amountNeeded;
    uint public amountGranted = 0;
    string public summary;
    string public ipfsDescriptionHash;
    bytes32[] public progressIPFSHashes;
    bool public funded;
    bool public withdrawn;
    bool public completed;

    function Grant(
        address _owner,
        string _grantTitle,
        string _grantTopic,
        uint _amountNeeded,
        string _summary,
        string _ipfsDescriptionHash

    ) public {
        owner = _owner;
        grantTitle = _grantTitle;
        grantTopic = _grantTopic;
        amountNeeded = _amountNeeded;
        summary = _summary;
        ipfsDescriptionHash = _ipfsDescriptionHash;
        funded = false;
        withdrawn = false;
        completed = false;
    }

    function addProgressData(bytes32 _ipfsHash) public {
        progressIPFSHashes.push(_ipfsHash);
    }

    function getAllProgressHashes() public view returns (bytes32[] hashes) {
        bytes32[] memory tempArray = new bytes32[](progressIPFSHashes.length);
        for (uint i = 0; i < progressIPFSHashes.length; i++) {
            tempArray[i] = progressIPFSHashes[i];
        }
        return tempArray;
    }

    function fundGrant() public payable {
        require(msg.value > 0);
        require(msg.value + amountGranted <= amountNeeded);
        amountGranted = amountGranted + msg.value;
        if(amountGranted == amountNeeded) {
            funded = true;
        }
    }

    function withdrawFunds() external {
        require(owner == msg.sender);
        require(funded == true);
        require(withdrawn == false);
        owner.transfer(this.balance);
        withdrawn = true;
    }

}