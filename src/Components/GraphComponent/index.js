import React from 'react'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
    {
      "name": "mon",
      "pv": 0,
    },
    {
      "name": "tue",
      "pv": 1.5,
    },
    {
      "name": "wed",
      "pv": 2.5,
    },
    {
      "name": "thu",
      "pv": 1,
    },
    {
      "name": "fri",
      "pv": 4,
    },
    {
      "name": "sat",
      "pv": 3,
    },
    {
      "name": "sun",
      "pv": 2,
    }
  ]
  
                    

export default function GraphComponent() {
    return (
        <>
            <LineChart width={400} height={250} data={data}
                margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDashArray="4 1 2" />
                <XAxis dataKey="name" />
                <YAxis ticks={[0,1,2,3,4,5]} />
                {/* <Tooltip /> */}
                {/* <Legend /> */}
                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            </LineChart>
        </>
    )
}
