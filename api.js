const coinEl = document.querySelector('#coins');
const yearEl = document.querySelector('#year');
const thirdEl = document.querySelector('#third');
const mainURL = "http://localhost:8080/home";

//Home Page
axios.get(`${mainURL}`).then((response) => {
    response.data
}).catch((err) => {
    console.log(err)
});


//Get List of Coins
axios.get(`${mainURL}/coins`).then((response) => {
    console.log(response.data)
    response.data.data.forEach(e => printToScreen(e))
}).catch((err) => {
    console.log(err)
});


const printToScreen = (info) => {
    const p = document.createElement("p");
    const text = document.createTextNode(`${info}`);
    p.appendChild(text);
    coinEl.appendChild(p);
}

const createCoin= () => {
    const coinName = coinArray[0];
    const denomination = denominationEl.value;
    const year = yearEl.value;
    const coin = {
        'coin_name' : coinName,
        'denomination' : denomination,
        'year' : year    }
    axios        .post("https://reqres.in/api/users", user)
        .then((res) => {
            console.log(res)
            printToScreen(res.data);
        }).catch((err) => {
            console.error(err);
        })
    console.log(user)
}
