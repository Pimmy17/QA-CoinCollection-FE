const coinURL = "http://localhost:8080/home";

const coinEl = document.querySelector('#coins');
const denominationEl = document.querySelector('#denomination');
const yearEl = document.querySelector('#year');
const coinNameEl = document.querySelector('#coin_name');
const inCollectionEl = document.querySelector('#incollection');
const countryEl = document.querySelector('#country');
const coinDescEl = document.querySelector('#description')
const currentDatabaseEl = document.querySelector("#current-database");
const coinDBEl = document.querySelector('#coin-database');

//Read All Coins in Database
const readAllCoins = () => {
fetch(`${coinURL}/coins`)
   .then(response => response.json())
   .then(model => model.forEach(e => {
function addRow(tableID) {

    let tableRef = document.getElementById(tableID);
    let newRow = tableRef.insertRow(-1);
    let link1 = document.createElement("a");
    link1.setAttribute("href", "./individualcoin.html")
    link1.className = "link";
    let linkText = document.createTextNode(e.coin_name);
    link1.appendChild(linkText);
  
    let newCell0 = newRow.insertCell(0);
    let newCell1 = newRow.insertCell(1);
    let newCell2 = newRow.insertCell(2);
    let newCell3 = newRow.insertCell(3);
    let newCell4 = newRow.insertCell(4);
    let newCell5 = newRow.insertCell(5);
    let newText = document.createTextNode(e.country);
    let newText2 = document.createTextNode(e.year);
    let checkbox = document.createElement("input");

    //Add Coin to Collection
    const addToCollection = () => {
        if (e.inCollection === false){
        const coin = {
            'inCollection' : true,
            }
            console.log(e.inCollection)
        fetch(`${coinURL}/updateCoin/${e.id}`, {
            method: "PATCH",
            body: JSON.stringify(coin),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
        .then(model => {
            console.log(model);
        })
        .catch(err => console.error(`error ${err}`))
    } 
    }
    checkbox.type = "checkbox";
    checkbox.addEventListener("click", addToCollection);

    //Delete A Coin from Database
    let deleteButton = document.createElement("button");
    deleteButton.type = "button"
    deleteButton.className = "deleteButton"

    const deleteCoin = () => {
        fetch(`${coinURL}/deleteCoin/${e.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => console.log(response))
        .then(model => {
            console.log(model);
        })
        .catch(err => console.error(`error ${err}`))
    }

    deleteButton.addEventListener("click", deleteCoin);


    //Add In Collection Flag
        const inCollectionFlag = document.createTextNode("IN");
        const notInCollectionFlag = document.createTextNode("");

        let collectionFlag = (e.inCollection ? inCollectionFlag : notInCollectionFlag);
    

    newCell0.appendChild(newText);
    newCell1.appendChild(link1);
    newCell2.appendChild(newText2);
    newCell3.appendChild(checkbox);
    newCell4.appendChild(collectionFlag);
    newCell5.appendChild(deleteButton);

  }
  addRow('coin-database');
 } ))
    .catch(err => 
    console.error(`error ${err}`));
};


// //View an Individual Coin
// const readCoinById = () => {
//     console.log('Here');
// fetch(`${coinURL}/coins/${id}`)
//    .then(response => response.json())
//    .then(model => {
//     console.log(model)

//      } )
//         .catch(err => 
//         console.error(`error ${err}`));
//     };

//Create a Coin
const createCoin = () => {
    let coinName = coinNameEl.value;
    let denomination = denominationEl.value;
    let year = yearEl.value;
    let country = countryEl.value;
    let description = coinDescEl.value;

    const coin = {
        'coin_name' : coinName,
        'denomination' : denomination,
        'year' : year,
        'inCollection' : false,
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
            
        })
        .catch(err => console.error(`error ${err}`));
}

readAllCoins();