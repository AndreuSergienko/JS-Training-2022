///// Receiving Current Rates
async function getRates() {
    const response = await fetch('https://www.nbrb.by/api/exrates/rates?periodicity=0');
    const json = await response.json();
    const data = json;
    const rates = [
        data[5],
        data[6],
        data[17],
    ];

    function getOutput(num) {
        return document.querySelector('.output' + num)
    }

    let input = document.querySelector('.converter-input')

    input.oninput = function () {
        for (let i = 0; i < rates.length; i++) {
            if (i === 2) {
                getOutput(i).innerHTML = (input.value / rates[i].Cur_OfficialRate / 10).toFixed(3);
                break
            }
            getOutput(i).innerHTML = (input.value / rates[i].Cur_OfficialRate).toFixed(3);
        }
    }
}

getRates()


///// Receiving Old Rates

async function getOldRates() {
    const response = await fetch('https://www.nbrb.by/api/exrates/rates?ondate=2016-7-6&periodicity=0');
    const json = await response.json();
    const data = json;
    const oldRates = [
        data[5],
        data[6],
        data[17],
    ];

    function getOutput(num) {
        return document.querySelector('.output-old' + num)
    }

    let input = document.querySelector('.converter-input-old')

    input.oninput = function () {
        for (let i = 0; i < oldRates.length; i++) {
            if (i === 2) {
                getOutput(i).innerHTML = (input.value / oldRates[i].Cur_OfficialRate / 10).toFixed(3);
                break
            }
            getOutput(i).innerHTML = (input.value / oldRates[i].Cur_OfficialRate).toFixed(3);
        }
    }
}

getOldRates()





//// /Dark-Light Theme

let themeBtns = document.querySelectorAll('.theme-btn')

themeBtns.forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault()
        if (button.classList.contains('light')) {
            document.body.classList.remove('dark')
            document.body.classList.add('light')
        } else if (button.classList.contains('dark')) {
            document.body.classList.remove('light')
            document.body.classList.add('dark')
        }
    })
})
