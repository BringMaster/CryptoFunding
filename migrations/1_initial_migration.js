const Cfm = artifacts.require("Cfm");
const SafeMath = artifacts.require("SafeMath");

module.exports = function (deployer) {
  deployer.deploy(Cfm, "0xe4EcDae2949429fe12b327e47164dD5E210BA9FA", "0x3B5Fb2A84C66b602F8CCB35235D3ad456B7C2154", "0x9C3aCdB7aB21e31E18eD795B6Ae1e2fe8d17FbEe");
  deployer.deploy(SafeMath);
};
