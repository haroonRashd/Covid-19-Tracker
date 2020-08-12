import React,{useState, useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import {fetchCountries} from '../../api';
import styles from './CountryPicker.module.css';

export const  CountryPicker = ({handleCountryChange}) => {
    let [data, setData] =useState({});
    useEffect(() => {
        async function callfetch(){
        const response =  await fetchCountries();// this is recieved as array of countries
        setData(response);
       // console.log(response);
        
        return () => {
        
        }
    }
    callfetch();
    }, []);
    
    //console.log(handleCountryChange);
    if(data[0])
    return (
       <FormControl className={styles.formControl}>
           <NativeSelect defaultValue="Global" onChange={(e)=>handleCountryChange(e.target.value)}>
               <option value="">Global</option>
           {data.map((country, i)=>(<option key={i} value={country}>{country}</option>))}
           </NativeSelect>
           
       </FormControl>
    )
    else
    return "";
}
