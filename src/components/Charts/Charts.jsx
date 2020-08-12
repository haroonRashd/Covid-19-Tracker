import React,{useEffect, useState} from 'react'
import {fetchDailydata } from '../../api';
import {Line, Bar} from 'react-chartjs-2';
import styles from './Charts.module.css';

export const Charts = ({data, country}) => {
    const [mydata, setData] = useState({});
    
    
    useEffect(() => {
        async function callfetch(){
        const response =  await fetchDailydata();
        setData(response);
       
        
        
        return () => {
        
        }
    }
    
    
    callfetch();
    
    

    }, []);
    //console.log(data, country);
   const lineChart = (
      mydata.length ?( <Line
       data = {{
           labels: mydata.map(({reportDate})=>reportDate),
           datasets: [{
               data: mydata.map(({confirmed})=>confirmed),
               label: 'infected',
               borderColor: '#3333ff',
               //borderColor: '#1C2833',  
               fill: true,
           },{
               data: mydata.map(({deaths})=>deaths),
               label: 'Deaths',
               borderColor: 'red',
               backgroundColor: 'rgb(255, 0, 0, 0.5)',
               fill: true,
           }],
       }}
       />): null
   );
   const barChart=(
       data.confirmed?
       (<Bar data = {{
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [{
                label: 'People',
                backgroundColor : ['rgb(0, 0, 255, 0.5)','rgb(0, 255, 0, 0.5)','rgb(255, 0, 0, 0.5)'],
                data : [data.confirmed.value, data.recovered.value, data.deaths.value]
            }]
       }}
       options={{
            legend: {display: false},
            title :  {display: true, text: `currnet state in ${country}`}
       }}
       ></Bar>):null
   )
    return (
        <div className={styles.container}>
            {country? barChart:lineChart}
        </div>
    )
}
