import axios from 'axios';

const myCoinCollection = axios.create({
    baseURL: 'https://localhost:8080/'
})

export function getCoins() {
    return myCoinCollection.get("/coins").then(({ data }) => {
      return data.coins;
    });
  }