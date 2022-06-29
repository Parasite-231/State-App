import classes from "../../styles/FetchStyle.module.css";
import FetchingErrorMessage from './FetchingErrorMessage';
import GetCountryData from './GetCountryData';
import LoadingImage from './LoadingImage';


export default function FetchCountryData() {

  const urlForFetchingData = "https://restcountries.com/v3.1/all";
  const {data , loading , error } = GetCountryData(urlForFetchingData);

  if(loading){

    return(

      <LoadingImage />

  

    )
  }

  if(error){

    return(

      <FetchingErrorMessage />


    )
  }

  return (
    <>
    <div className={classes.container}>
      
    

    <div class="album py-5 bg-light">
			
 <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {
            data && data.map( record => {

                return (
                 
                  <div class="col" >
                    <div class="card shadow-sm">
                       <img src = {record.flags.png} className="card-img-top" style={{height:"200px"}}  alt=""/>
                       <div className={classes["card-body"]}>
                        <h3 className={classes["card-text"]}>State Name : {record.name.common}</h3>
                        <p className={classes["card-text"]}>Official Name: {record.name.official}</p>
                        <p className={classes["card-text"]}>Capital : {record.capital}</p>
                        <p className={classes["card-text"]}>Sub-region : {record.subregion}</p>
                        <p className={classes["card-text"]}>Region : {record.region}</p>
                        </div>
                        
                       
                        {/* <iframe src = {record.maps.openStreetMaps} ></iframe> */}

                       

                    </div>
                    </div>
                  
                )

            })
        }
          </div>
          </div>
          </div>
          


  
    </>
  )
}
