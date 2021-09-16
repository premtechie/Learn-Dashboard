import React from 'react'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis,LabelList } from 'recharts'
import styles from './styles.module.css';
import { Select } from 'antd';
import { style } from 'dom-helpers';
// import Select from '@material-ui/core/Select';
// import { makeStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';



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
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const { Option } = Select;
  const [age, setAge] = React.useState('Weekly');

    return (
        <div className={styles.graphContainer}>
          <div className={styles.graphHeader} >
              Your statistics
          </div>
          <div className={styles.tab}>
            <div className={styles.tabContainer}>
              <div className={styles.active}>Learning Hours</div>
              <div className={styles.tabList} >My Courses</div>
            </div>
            <div className={styles.selectContainer}>
                <Select defaultValue='weekly' style={{ width: "130px",borderRadius:'10px',outline:'none',backgroundColor:'gray' }} onChange={handleChange}>
                    <Option value="weekly">Weekly</Option>
                    <Option value="monthly">Monthly</Option>  
                </Select>
            </div>
            
        {/* <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select> */}
          </div>
          <div className={styles.lineChart}>
          <LineChart width={480} height={250} data={data}
                margin={{ top: 20, right: 20, left: 0, bottom: 5 }}
                style={{width:'100%'}}
            >
                <CartesianGrid
                    vertical={false}
                />
                <XAxis 
                    dataKey="name"
                    tickLine={false}
                    tickMargin={20}
                    style={{fontSize:'12', fill:'black', fontWeight:"800"}}
                 />
                <YAxis
                      ticks={[0,1,2,3,4,5]} 
                      tickCount={6}
                      tickMargin={30}
                      axisLine={false} 
                      tickLine={false}
                      style={{fontSize:'12', fill:'black', fontWeight:"800"}}
                 />
                <Line type="monotone" 
                  dataKey="pv" stroke="black"
                  dot={{ stroke: 'black',fill:'black', strokeWidth: 4 }}
                >
                  <LabelList style={{fontSize:'12', fill:'black', fontWeight:'800'}} offset={15} dataKey="pv" position="top" angle="0" />
                </Line>
            </LineChart>
          </div>
            
        </div>
    )
}
