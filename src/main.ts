
const endAndPoint = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'
async function getCrypto() {
    await fetch(`${endAndPoint}`)
        .then(response => response.json())
        .then(cryptoDati => render(cryptoDati))
}
getCrypto()

function render(dati: any[]) {
    const divTitle: HTMLElement = document.querySelector('.divTitle') as HTMLElement
    

    dati.map((cpt) => {
        const card = document.createElement('div');
        card.classList.add('card', cpt.id);
        card.insertAdjacentHTML('afterbegin', `
        <h3>${cpt.name} - ${cpt.symbol}</h3>
        <img src="${cpt.image} height="50px" width="50px" />
        <p><strong>Valore attuale: </strong>${cpt.current_price} €</p>
        <p><strong>Min 24h: </strong>${cpt.low_24h} - <strong>Max 24h: </strong>${cpt.high_24h}</p>
        `)
        divTitle.insertAdjacentElement('afterend', card)

    })
}