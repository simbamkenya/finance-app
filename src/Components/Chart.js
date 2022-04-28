import React, { useState, useEffect} from 'react'
import { csv } from 'd3'

function Chart() {
    const [data, setData ] = useState() 

    useEffect(() => {
        csv('https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv')
        .then(dat => setData(dat))
        console.log(data)

    }, [])

  return (
    <div></div>
  )
}

export default Chart