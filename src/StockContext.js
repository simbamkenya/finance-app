import React, { useState, createContext, useContext, useEffect} from 'react';
import { timeParse, NumberValue, timeFormat, csv } from 'd3';

export const StockContext = createContext()

export function StockProvider({children}){
   
    const [data, setData] = useState([]) 
    useEffect(() => {
        csv('BTC-USD.csv').then(dat => {   
           const cryptoData=  dat.map(item => {
                return {
                    open: +item['Open'],
                    close: +item['Close'],
                    high: +item['High'],
                    low: +item['Low'],
                    volume: +item['Volume'],
                    date: item['Date'],
                    adjvol: +item['Adj Close']
                    
                }
            })
            setData(cryptoData.slice(0,100))
            console.log('p', cryptoData[0])
        })
        
    }, [])
    
   

    return (
        <StockContext.Provider value={data}>
            {children}
        </StockContext.Provider>
    )

}