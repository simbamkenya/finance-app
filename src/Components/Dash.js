import React, { useState, useEffect, useContext } from "react";
import Chart from './Chart'
import socketIOClient from "socket.io-client";
import { select} from 'd3'
import Candle from "./Candle";
import { StockContext } from "../StockContext";


function Dash({data, setCandle, candle}) {   
  const dataa = useContext(StockContext)
  console.log('dataa',dataa[0])
const ENDPOINT = "wss://stream.binance.com:9443/ws/btcusdt@trade";
const END= "http://127.0.0.1:3001";
// const sock = socketIOClient("wss://stream.binance.com:9443/ws/btcusdt@trade");


const [response, setResponse] = useState("");

useEffect(() => {
    const socket = socketIOClient(END);
    socket.on("message", data => {
    //   setResponse(data);
    console.log(data)

    });
   console.log(socket)
   socket.on('open', () => {
      console.log('l')
   })

  }, []);

  

  return (
    <div className='min-h-screen bg-[#181818]'>
        <div className='bg-[#060606]  text-white'>
           <div className='container mx-auto flex justify-between items-center py-2'>
               <div className='w-2/3'>
                   <div className=' flex items-center uppercase'>
                      <div className='rounded-full bg-white'>
                      <svg className="svg-icon h-12 w-12 text-white" viewBox="0 0 20 20">
                            <path d="M10,1.75c-4.557,0-8.25,3.693-8.25,8.25c0,4.557,3.693,8.25,8.25,8.25c4.557,0,8.25-3.693,8.25-8.25C18.25,5.443,14.557,1.75,10,1.75 M10,17.382c-4.071,0-7.381-3.312-7.381-7.382c0-4.071,3.311-7.381,7.381-7.381c4.07,0,7.381,3.311,7.381,7.381C17.381,14.07,14.07,17.382,10,17.382 M7.612,10.869c-0.838,0-1.52,0.681-1.52,1.519s0.682,1.521,1.52,1.521c0.838,0,1.52-0.683,1.52-1.521S8.45,10.869,7.612,10.869 M7.612,13.039c-0.359,0-0.651-0.293-0.651-0.651c0-0.357,0.292-0.65,0.651-0.65c0.358,0,0.651,0.293,0.651,0.65C8.263,12.746,7.97,13.039,7.612,13.039 M7.629,6.11c-0.838,0-1.52,0.682-1.52,1.52c0,0.838,0.682,1.521,1.52,1.521c0.838,0,1.521-0.682,1.521-1.521C9.15,6.792,8.468,6.11,7.629,6.11M7.629,8.281c-0.358,0-0.651-0.292-0.651-0.651c0-0.358,0.292-0.651,0.651-0.651c0.359,0,0.651,0.292,0.651,0.651C8.281,7.988,7.988,8.281,7.629,8.281 M12.375,10.855c-0.838,0-1.521,0.682-1.521,1.52s0.683,1.52,1.521,1.52s1.52-0.682,1.52-1.52S13.213,10.855,12.375,10.855 M12.375,13.026c-0.358,0-0.652-0.294-0.652-0.651c0-0.358,0.294-0.652,0.652-0.652c0.357,0,0.65,0.294,0.65,0.652C13.025,12.732,12.732,13.026,12.375,13.026 M12.389,6.092c-0.839,0-1.52,0.682-1.52,1.52c0,0.838,0.681,1.52,1.52,1.52c0.838,0,1.52-0.681,1.52-1.52C13.908,6.774,13.227,6.092,12.389,6.092 M12.389,8.263c-0.36,0-0.652-0.293-0.652-0.651c0-0.359,0.292-0.651,0.652-0.651c0.357,0,0.65,0.292,0.65,0.651C13.039,7.97,12.746,8.263,12.389,8.263"></path>
                        </svg>
                      </div>
                        <span className='ml-2'>Crypto</span>
                   </div>
               </div>
                <nav className='flex items-center w-1/3 justify-between py-2 flex-shrink-0'>
                    <div className='uppercase'>stock market</div>
                    <button className='bg-green-500 px-6 rounded-xl'>BUY</button>
                    <div>Tom Cruise</div>
                    <button className="p-1 bg-gray-200 rounded-full focus:outline-none focus:ring">
                        <img
                            className="object-cover w-8 h-8 rounded-full"
                            src="https://avatars0.githubusercontent.com/u/57622665?s=460&u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&v=4"
                            alt="Ahmed Kamel"
                        />
                     </button>
                </nav>
           </div>

           <div className='container mx-auto'>
            <div className='mb-6 bg-gray-800 flex'>
               <div className="w-1/3 bg-gray-700 rounded mr-2">
                 <table className="table-auto">
                    <thead>
                      <tr className="bg-gray-800 hover:bg-gray-600 text-sm">
                        <th scope="col" className="px-6 py-3">Low</th>
                        <th scope="col" className="px-6 py-3">High</th>
                        <th scope="col" className="px-6 py-3">Open</th>
                        <th scope="col" className="px-6 py-3">Close</th>
                        <th scope="col" className="px-6 py-3">Volume</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b bg-gray-800 hover:bg-gray-600 text-xs">
                        <td className="px-2 py-2">57505.22</td>
                        <td className="px-2 py-2">54626.55</td>
                        <td className="px-2 py-2">55887.33</td>
                        <td className="px-2 py-2">56099.51</td>
                        <td className="px-2 py-2">68145460026</td>
                      </tr>
                      <tr className="border-b bg-gray-800 hover:bg-gray-600 text-xs">
                        <td className="px-2 py-2">57505.22</td>
                        <td className="px-2 py-2">54626.55</td>
                        <td className="px-2 py-2">55887.33</td>
                        <td className="px-2 py-2">56099.51</td>
                        <td className="px-2 py-2">68145460026</td>
                      </tr>
                      <tr className="border-b bg-gray-800 hover:bg-gray-600 text-xs">
                        <td className="px-2 py-2">57505.22</td>
                        <td className="px-2 py-2">54626.55</td>
                        <td className="px-2 py-2">55887.33</td>
                        <td className="px-2 py-2">56099.51</td>
                        <td className="px-2 py-2">68145460026</td>
                      </tr>
                      <tr className="border-b bg-gray-800 hover:bg-gray-600 text-xs">
                        <td className="px-2 py-2">57505.22</td>
                        <td className="px-2 py-2">54626.55</td>
                        <td className="px-2 py-2">55887.33</td>
                        <td className="px-2 py-2">56099.51</td>
                        <td className="px-2 py-2">68145460026</td>
                      </tr>
                      <tr className="border-b bg-gray-800 hover:bg-gray-600 text-xs">
                        <td className="px-2 py-2">57505.22</td>
                        <td className="px-2 py-2">54626.55</td>
                        <td className="px-2 py-2">55887.33</td>
                        <td className="px-2 py-2">56099.51</td>
                        <td className="px-2 py-2">68145460026</td>
                      </tr>
                      <tr className="border-b bg-gray-800 hover:bg-gray-600 text-xs">
                        <td className="px-2 py-2">57505.22</td>
                        <td className="px-2 py-2">54626.55</td>
                        <td className="px-2 py-2">55887.33</td>
                        <td className="px-2 py-2">56099.51</td>
                        <td className="px-2 py-2">68145460026</td>
                      </tr>
                      <tr className="border-b bg-gray-800 hover:bg-gray-600 text-xs">
                        <td className="px-2 py-2">57505.22</td>
                        <td className="px-2 py-2">54626.55</td>
                        <td className="px-2 py-2">55887.33</td>
                        <td className="px-2 py-2">56099.51</td>
                        <td className="px-2 py-2">68145460026</td>
                      </tr>
                      <tr className="border-b bg-gray-800 hover:bg-gray-600 text-xs">
                        <td className="px-2 py-2">57505.22</td>
                        <td className="px-2 py-2">54626.55</td>
                        <td className="px-2 py-2">55887.33</td>
                        <td className="px-2 py-2">56099.51</td>
                        <td className="px-2 py-2">68145460026</td>
                      </tr>
                      <tr className="border-b bg-gray-800 hover:bg-gray-600 text-xs">
                        <td className="px-2 py-2">57505.22</td>
                        <td className="px-2 py-2">54626.55</td>
                        <td className="px-2 py-2">55887.33</td>
                        <td className="px-2 py-2">56099.51</td>
                        <td className="px-2 py-2">68145460026</td>
                      </tr>
                      <tr className="border-b bg-gray-800 hover:bg-gray-600 text-xs">
                        <td className="px-2 py-2">57505.22</td>
                        <td className="px-2 py-2">54626.55</td>
                        <td className="px-2 py-2">55887.33</td>
                        <td className="px-2 py-2">56099.51</td>
                        <td className="px-2 py-2">68145460026</td>
                      </tr>
                      <tr className="border-b bg-gray-800 hover:bg-gray-600 text-xs">
                        <td className="px-2 py-2">57505.22</td>
                        <td className="px-2 py-2">54626.55</td>
                        <td className="px-2 py-2">55887.33</td>
                        <td className="px-2 py-2">56099.51</td>
                        <td className="px-2 py-2">68145460026</td>
                      </tr>
                      <tr className="border-b bg-gray-800 hover:bg-gray-600 text-xs">
                        <td className="px-2 py-2">57505.22</td>
                        <td className="px-2 py-2">54626.55</td>
                        <td className="px-2 py-2">55887.33</td>
                        <td className="px-2 py-2">56099.51</td>
                        <td className="px-2 py-2">68145460026</td>
                      </tr>
                      <tr className="border-b bg-gray-800 hover:bg-gray-600 text-xs">
                        <td className="px-2 py-2">57505.22</td>
                        <td className="px-2 py-2">54626.55</td>
                        <td className="px-2 py-2">55887.33</td>
                        <td className="px-2 py-2">56099.51</td>
                        <td className="px-2 py-2">68145460026</td>
                      </tr>
                      
                    </tbody>
                 </table>
               </div>
               <div className="w-2/3 rounded bg-gray-500">
                  {/* <Chart data={data}/>  */}
                  <Candle  setCandle={setCandle} candle={candle}/>
               </div>
            </div>
        </div>

        </div>
        
    </div>
  )
}

export default Dash