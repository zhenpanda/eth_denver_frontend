var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var GrantFactory = artifacts.require("./GrantFactory.sol");
var SafeMath = artifacts.require("./SafeMath.sol");
var FEATToken = artifacts.require("./FEATFactory.sol");
var FEATFactory = artifacts.require("./FEATFactory.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(GrantFactory);
  deployer.deploy(SafeMath);
  deployer.deploy(FEATToken);
  deployer.deploy(FEATFactory);
};
