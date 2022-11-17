//script for index.html to run button

// window.onload = () => {
    const body = document.querySelector('body');
    const displayBox = document.getElementById('displayBox')
    const completeRandom = document.getElementById('completeRandom')

    console.log('im loaded from server.js')

    function getCompleteRandom(string){
        console.log(string)
        console.log('i got clicked')
        fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({howMuch: string})
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
                document.getElementById('1').innerText= data.phrase
            console.log('amount returned?', data.amount)
            }
        })
        .catch(err => console.log(err))
    }


    // completeRandom.onClick(getCompleteRandom)

//}