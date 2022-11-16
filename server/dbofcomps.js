//what requires do i need?

//what paths?

//what exports?

//create bigass object to hold all the stuff

const dbOfWords = {
    firstWord: ['Champ ', 'Fact: ', 'Everybody says ', 'Dang...', 'Check it: ',
                'Just saying...', 'Superstar, ', 'Tiger, ', 'Self, ', 'Know this: ',
                'News alert: ', 'Girl, ', 'Ace, ', 'Excuse me but ', 'Experts agree: ',
                'In my opinion, ', 'Hear ye, hear ye:', 'Okay, listen up:'],
    secondWord: ['the mere idea of you, ', 'your soul ', 'your hair today ', 'everything you do ', 'your personal style ',
                'every thought you have ', 'that sparkle in your eye ', 'your presence here ', 'what you got going on, ', 'the essential you ',
                'your life\'s journey ', 'that saucy personality ', 'your DNA ', 'that brain of yours ', 'your choice of attire ',
                'the way you roll ', 'whatever your secret is ', 'all of y\'all '],
    thirdWord: ['has serious game, ', 'rains magic, ', 'deserves the Nobel Prize, ', 'raises the roof', 'breeds miracles, ',
                'is paying off big time, ', 'shows mad skills, ', 'just shimmers, ', 'is a national treasure, ', 'gets the party hopping, ',
                'is the next big thing, ', 'roars like a lion, ', 'is a rainbow factory, ', 'is made of diamonds, ', 'makes birds sing, ',
                'should be taught in school, ', 'makes my world go \'round, ', 'is 100% legit, '],
    lastWord: ['24/7.', 'can I get an amen?', 'and that\'s a fact.', 'so treat yourself.', 'you feel me?',
                'that\'s just science.', 'would I lie?', 'for reals.', 'mic drop.', 'you hidden gem.',
                'snuggle bear.', 'period.', 'can I get a whoop whoop?', 'now let\'s dance.', 'high five.',
                'say it again!', 'according to CNN.', 'so get used to it.'],
}
//get length of each property
console.log(dbOfWords.firstWord.length)
console.log(dbOfWords.secondWord.length)
console.log(dbOfWords.thirdWord.length)
console.log(dbOfWords.lastWord.length)

function getRandomPhrase() {
    const oneWord = Math.floor(Math.random() * dbOfWords.firstWord.length) 
    const twoWord = Math.floor(Math.random() * dbOfWords.secondWord.length)
    const threeWord = Math.floor(Math.random() * dbOfWords.thirdWord.length)
    const fourWord =  Math.floor(Math.random() * dbOfWords.lastWord.length)
    const phrase = dbOfWords.firstWord[oneWord].concat(dbOfWords.secondWord[twoWord]).concat(dbOfWords.thirdWord[threeWord]).concat(dbOfWords.lastWord[fourWord])
    return phrase
}

console.log(getRandomPhrase())
console.log(getRandomPhrase())
console.log(getRandomPhrase())
console.log(getRandomPhrase())
console.log(getRandomPhrase())
console.log(getRandomPhrase())







//module exports? any exports?