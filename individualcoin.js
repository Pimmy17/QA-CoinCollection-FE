const coinURL = "http://localhost:8080/home";


const readCoinById = (id) => {

    fetch(`${coinURL}/coins/${id}`)
       .then(response => response.json())
            .catch(err => 
            console.error(`error ${err}`));
        };