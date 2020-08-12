import React ,{useEffect,useState}from 'react'
import {Charts} from './components/Charts/Charts';
import {Cards} from './components/Cards/Cards';
import {CountryPicker} from './components/CountryPicker/CountryPicker';
import styles from './App.module.css';
import {fetchdata} from './api';
import DenseAppBar from './components/Bar/AppBar';

function App(){
    let [data, setData] =useState({});
    let [country, setCountry] = useState("");
    useEffect(() => {
        async function callfetch(){
        const response =  await fetchdata();
        setData(response);
        
        
        return () => {
        
        }
    }
    callfetch();
    }, [])
    const handleCountryChange = async (country)=>{
        const response =  await fetchdata(country);
        setCountry(country);
        setData(response);
    }
    return(
        <div className={styles.container}>
            <DenseAppBar></DenseAppBar>
            <Cards data={data}></Cards>
            <CountryPicker handleCountryChange={handleCountryChange}></CountryPicker>
            <Charts data={data} country = {country}></Charts>
           
        </div>
    )
}
export default App;