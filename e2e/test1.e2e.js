import { Selector } from 'testcafe'; // first import testcafe selectors

fixture `Getting Started`// declare the fixture
    .page `localhost:3000`;  // specify the start page


//then create a test and place your code there
test('My first test', async t => {
    await t
        .click('.details')
        // Use the assertion to check if the actual header text is equal to the expected one
        .expect(Selector('.example-header').innerText).eql('web3 test');
});