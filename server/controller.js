//what requires do i need?

//what paths?

//what exports?

//create bigass object to hold all the stuff

const options = {
    firstWord: ['Champ, ', 'Fact: ', 'Everybody says ', 'Dang...', 'Check it: ',
        'Just saying...', 'Superstar, ', 'Tiger, ', 'Self, ', 'Know this: ',
        'News alert: ', 'Girl, ', 'Ace, ', 'Excuse me but ', 'Experts agree: ',
        'In my opinion, ', 'Hear ye, hear ye:', 'Okay, listen up:'],
    secondWord: ['the mere idea of you, ', 'your soul ', 'your hair today ', 'everything you do ', 'your personal style ',
        'every thought you have ', 'that sparkle in your eye ', 'your presence here ', 'what you got going on, ', 'the essential you ',
        'your life\'s journey ', 'that saucy personality ', 'your DNA ', 'that brain of yours ', 'your choice of attire ',
        'the way you roll ', 'whatever your secret is ', 'all of y\'all '],
    thirdWord: ['has serious game, ', 'rains magic, ', 'deserves the Nobel Prize, ', 'raises the roof ', 'breeds miracles, ',
        'is paying off big time, ', 'shows mad skills, ', 'just shimmers, ', 'is a national treasure, ', 'gets the party hopping, ',
        'is the next big thing, ', 'roars like a lion, ', 'is a rainbow factory, ', 'is made of diamonds, ', 'makes birds sing, ',
        'should be taught in school, ', 'makes my world go \'round, ', 'is 100% legit, '],
    lastWord: ['24/7.', 'can I get an amen?', 'and that\'s a fact.', 'so treat yourself.', 'you feel me?',
        'that\'s just science.', 'would I lie?', 'for reals.', 'mic drop.', 'you hidden gem.',
        'snuggle bear.', 'period.', 'can I get a whoop whoop?', 'now let\'s dance.', 'high five.',
        'say it again!', 'according to CNN.', 'so get used to it.'],
}
//get length of each property
// console.log(options.firstWord.length)
// console.log(options.secondWord.length)
// console.log(options.thirdWord.length)
// console.log(options.lastWord.length)

const controller = {
    makeRandomPhrase: function () {
        const oneWord = Math.floor(Math.random() * options.firstWord.length)
        const twoWord = Math.floor(Math.random() * options.secondWord.length)
        const threeWord = Math.floor(Math.random() * options.thirdWord.length)
        const fourWord = Math.floor(Math.random() * options.lastWord.length)
        const phrase = options.firstWord[oneWord].concat(options.secondWord[twoWord]).concat(options.thirdWord[threeWord]).concat(options.lastWord[fourWord])
        return phrase;
    },
    makeOnePhrase: function() {
        const oneWord = Math.floor(Math.random() * options.firstWord.length)
        const phrase = options.firstWord[oneWord]
        return phrase;
    },
    getRandomPhrase: (req, res, next) => {

        const { howMuch } = req.body;
        console.log(howMuch)
        // console.log(req.params)
        //pull anything from request?
        if (howMuch === 'full') {
            const newRandomPhrase = controller.makeRandomPhrase();
            // if (err) {
            //     return next({
            //         //error message like global:
            //         log: 'Express error handler caught in controller.getRandomPhrase middlware',
            //         status: 400,
            //         message: { err: 'An error has occured in controller.getRandomPhrase'},
            //     });
            // }
            console.log('sending back a random phrase?!?!!?', newRandomPhrase);
            res.locals.phrase = {
                phrase: newRandomPhrase,
                amount: 'full'
            };
            return next();
        } else if (howMuch === 'one') {
            const new1Phrase = controller.makeOnePhrase();
            res.locals.phrase = {
                phrase: new1Phrase,
                amount: 'one'
            }; 
            return next();
        }
    }
}

//add semicolon to test LOL;;;;
// console.log(controller.makeRandomPhrase())
// console.log(controller.makeRandomPhrase())
// console.log(controller.makeRandomPhrase())
// console.log(controller.makeRandomPhrase())
// controller.getRandomPhrase();







//module exports? any exports?
module.exports = controller;