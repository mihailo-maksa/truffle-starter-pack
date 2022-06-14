const Greeter = artifacts.require('Greeter.sol');

contract('Greeter', () => {
  it("should update the greeting once it's changed", async () => {
    const greeter = await Greeter.new('Hello, world!');
    await greeter.setGreeting('Hola, mundo!');
    const greeting = await greeter.getGreeting();
    assert(greeting.toString() === 'Hola, mundo!');
  });
});
