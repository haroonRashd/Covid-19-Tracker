

const url =   "https://covid19.mathdro.id/api" ;

 
export  const fetchdata = async(country)=>{
    let changebleUrl = url;
    if(country){
         changebleUrl = `${url}/countries/${country}`;
    }
   
    try {
 
       const response = await fetch(changebleUrl);
       
        let data = await response.json();
        
    
       // console.log(data);
        
        //console.log(country);
        const modifiedData = {
            confirmed : data.confirmed,
            recovered : data.recovered,
            deaths : data.deaths,
            lastupdate : data.lastUpdate
        }
       return modifiedData;
    } catch (error) {
        
    }
}

export  const fetchDailydata = async()=>{
    
    try {
    
       const response = await fetch(`${url}/daily`);
        
        const dailyData = await response.json();
       const modifiedData2 = dailyData.map(({confirmed, deaths, reportDate})=>({confirmed:confirmed.total,deaths:deaths.total,reportDate}));
        //console.log(modifiedData2);
        
      
      return modifiedData2; 
    } catch (error) {
        
    }
}

export  const fetchCountries = async()=>{
    try {
 
       const response = await fetch(`${url}/countries`);
        
        let data = await response.json();
        console.log(data);
        const data2 = data.countries;
        const countries = data2.map(({name})=>name);
       
       return countries;
    } catch (error) {
        
    }
}