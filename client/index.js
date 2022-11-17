//script for index.html to run button

// window.onload = () => {
    const body = document.querySelector('body');
    const displayBox = document.getElementById('displayBox')
    const completeRandom = document.getElementById('completeRandom')
    // const savedPhraseee = document.getElementById('displayBox').innerText

    console.log('im loaded from server.js')

    function getCompleteRandom(string){
        console.log(string)
        console.log('i got clicked')
        fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({howMuch: string, savedPhrase: document.getElementById('displayBox').innerText, savedSections: document.getElementById('1').innerText.concat('_').concat(document.getElementById('2').innerText).concat('_').concat(document.getElementById('3').innerText).concat('_').concat(document.getElementById('4').innerText)})
        })
        // .then(data => console.log(data))
        // .then(data => console.log(data.phrase))
        .then(res => res.json())
        // .then(data => console.log(data))
        // .then(data => console.log(typeof data === 'undefined'))
        // // .then(data => JSON.parse(data))
        // .then(data => console.log(data))
        .then(data => {
            // console.log(displayBox)
            if(data.amount === 'full') {
            document.getElementById('displayBox').innerText= data.phrase
            console.log('amount returned?', data.amount)
            // displayBox.innerText = data.phrase;
            } else if (data.amount === 'one') {
                document.getElementById('1').innerText= `${data.phrase}` + ` `
            console.log('amount returned?', data.amount)
            } else if (data.amount === 'two') {
                document.getElementById('2').innerText= `  ${data.phrase}  ` + " ";
                document.getElementById('2').style.color = '#a5da9f';
            console.log('amount returned?', data.amount)
            } else if (data.amount === 'three') {
                document.getElementById('3').innerText= data.phrase
            console.log('amount returned?', data.amount)
            } else if (data.amount === 'four') {
                document.getElementById('4').innerText= data.phrase
                document.getElementById('4').style.color = '#a5da9f';
            console.log('amount returned?', data.amount)
            } else if (data.amount === 'new saved phrase') {
                document.getElementById('displayBoxSaved').innerText= data.phrase.concat('\n').concat(document.getElementById('displayBoxSaved').innerText)
            console.log('amount returned?', data.amount)
            } else if (data.amount === 'new saved Section phrase') {
                document.getElementById('displayBoxSaved').innerText= data.phrase.concat('\n').concat(document.getElementById('displayBoxSaved').innerText)
            console.log('amount returned?', data.amount)
            }
        })
        .catch(err => console.log(err))
    }


    // completeRandom.onClick(getCompleteRandom)

//}