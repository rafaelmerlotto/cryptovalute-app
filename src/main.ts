


const endAndPoint = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'

async function getCrypto() {
    await fetch(`${endAndPoint}`)
        .then(response => response.json())
        .then(cryptoDati => {
          cryptoDati
        })
}

function render(){
    const div : HTMLElement = document.querySelector('div') as HTMLElement;


}