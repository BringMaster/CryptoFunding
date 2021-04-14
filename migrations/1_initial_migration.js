const Cfm = artifacts.require("Cfm");
const SafeMath = artifacts.require("SafeMath");

module.exports = function (deployer) {
  deployer.deploy(Cfm, "0x2126EC768915d5A539Fb7463EB6450DBa68fd759", "0x2126EC768915d5A539Fb7463EB6450DBa68fd759", "0x2126EC768915d5A539Fb7463EB6450DBa68fd759");
  deployer.deploy(SafeMath);
};
