const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  rl.question('What\'s an activity you like doing? ', (answer2) => {
    rl.question('What do you listen to while doing that? ', (answer3) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer4) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
          rl.question('Which sport is your absolute favourite? ', (answer6) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
  console.log(`Heres you new profile!: My name is ${answer}!\nI enjoy activities such as: ${answer2} and while I do that I just love listening to ${answer3}.\nMy favourite meal of the day is ${answer4}, because I just love ${answer5}!\nWhen it comes to sports I would have to say my favourite would be ${answer6}.\nLast but not least, I would say that my superpower would be ${answer7}.`);
// TODO: Log the answer in a database
  rl.close();
            });
          });
        });
      });
    });
  });
});
