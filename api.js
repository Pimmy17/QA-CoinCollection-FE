const coinURL = "http://localhost:8080/home";

const coinEl = document.querySelector('#coins');
const denominationEl = document.querySelector('#denomination');
const yearEl = document.querySelector('#year');
const coinNameEl = document.querySelector('#coin_name');
const inCollectionEl = document.querySelector('#incollection');
const countryEl = document.querySelector('#country');
const coinDescEl = document.querySelector('#description')
const currentDatabaseElement = document.querySelector("#current-database");


const readAllCoins = () => {
    console.log('Here');
    fetch(`${coinURL}/coins`)
        .then(response => response.json())
        .then(coins => {
            
            if (coins.length != 0) {
                for (let i = 0; i < coins.length; i++) {
                    
                    let li = document.createElement("li");
                    li.textContent = `${coins[i].coin_name} ${coins[i].year} ${coins[i].country}`;
                    addcurrentDatabaseElement.appendChild(li);
                }
            } else {
                console.log("No Coins");
                currentDatabaseElement.innerHTML = `<p class="text-black-50 text-center"><em>No tasks to show!</em></p>`;
            }

        })
        .catch(err => console.error(`error ${err}`));
};



const printToScreen = (information) => {
    const p = document.createElement("p");
    const text = document.createTextNode(`${information.coinName} ${information.year}, ${information.denomination} ${information.country}`);
    p.appendChild(text);
    coinEl.appendChild(p);
}

const createCoin = () => {

    let coinName = coinNameEl.value;
    let denomination = denominationEl.value;
    let year = yearEl.value;
    let country = countryEl.value;
    let description = coinDescEl.value;
    let inCollection = inCollectionEl.value;

    const coin = {
        'coin_name' : coinName,
        'denomination' : denomination,
        'year' : year,
        'incollection' : inCollection,
        'coin_description' : description,
        'country' : country
        }


        fetch(`${coinURL}/createCoin`, {
            method: "POST",
            body: JSON.stringify(coin),
            headers: {
                "Content-Type": "application/json"
            }
            
        }).then(response => response.json())
        .then(model => {
            console.log(model);
            readAllCoins();
        })
        .catch(err => console.error(`error ${err}`));

    console.log(coin)
}
