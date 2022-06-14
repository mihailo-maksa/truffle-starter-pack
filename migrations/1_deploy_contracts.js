const Greeter = artifacts.require('Greeter');

module.exports = (deployer) => {
  deployer.deploy(Greeter, 'Hello, world!');
};
