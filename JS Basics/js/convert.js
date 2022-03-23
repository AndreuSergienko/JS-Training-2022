
async function getRates() {
    const response = await fetch('https://www.nbrb.by/api/exrates/rates?periodicity=0');
    const json = await response.json();
    const data = json;
    rates = [
        data[5],
        data[6],
        data[17],
    ];

    let o0 = document.querySelector('.output1');
    let o1 = document.querySelector('.output2');
    let o2 = document.querySelector('.output3');

    let input = document.querySelector('.converter-input')

    input.oninput = function () {
        for (let i = 0; i < rates.length; i++) {
            // o + [i].innerHTML = input.value * rates[i].Cur_OfficialRate;
        }
    }
}














getRates()

