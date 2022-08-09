import * as api from '../Api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Coins() {
    const [coins, setCoins] = useState([])
    const [error, setError] = useState(null)
    const [loading, isLoading] = useState(true)
    
    useEffect(() => {
        isLoading(true)
        setCoins([])
        api.getCoins()
        .then((coins) => {
            setCoins(coins)
            isLoading(false)
            setError(null)
        })
        .catch(( {
            response: {data: {msg}, status}
        }) => {
            console.log('catch block')
            setError({status, msg})
        })
    }, [])

    if (loading) return <h3>Fetching Coins...</h3>
    if (error) return (<>
        <h3><strong>{error.status}: {error.msg} </strong></h3>
        <h5>
        <br />
        I am so, so sorry...but there are no coins here!
        </h5>
        </>)
    return (
        <section className='list'>
        {coins.map(({id, coin_name, denomination, year, in_collection}) => {
       return (
           <div key={id} className='coins'>
               <Link to={`/home/coins/${id}`} className='list-text'> 
               {coin_name} <br />
               {in_collection}
               <br />
               {year} <br/>
               {denomination}
           </Link>
           </div>

       )
    })}</section>
    )
}