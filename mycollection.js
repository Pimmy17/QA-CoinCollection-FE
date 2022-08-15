const coinURL = "http://localhost:8080/home";


//Read All Coins in Collection
const readCoinsInCollection = () => {
    fetch(`${coinURL}/coins`)
       .then(response => response.json())
       .then(model => model.forEach(e => {
        if (e.inCollection === true){
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
        let newText = document.createTextNode(e.country);
        let newText2 = document.createTextNode(e.year);
        let checkbox = document.createElement("input");
    
        //Remove Coin to Collection
        const removeFromCollection = () => {
            if (e.inCollection === true){
            const coin = {
                'inCollection' : false,
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
        checkbox.addEventListener("click", removeFromCollection);
        newCell0.appendChild(newText);
        newCell1.appendChild(link1);
        newCell2.appendChild(newText2);
        newCell3.appendChild(checkbox);
    
      }
      addRow('coin-collection-database');
     } }))
        .catch(err => 
        console.error(`error ${err}`));
    };
    readCoinsInCollection();