const TodloLists = artifacts.require("../contracts/TodoList.sol");

module.exports = function(deployer) {
  deployer.deploy(TodloLists);
};
