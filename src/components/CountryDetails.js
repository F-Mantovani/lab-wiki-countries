import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = ({ countries }) => {

  const code = useParams();

  let filtered = countries.filter((country) => country.alpha3Code === code.id);

  return (
    <>
      {filtered.map((country) => (
        <div key={country.alpha2Code} className= {`row col-12 ${country.alpha2Code}`}>
          <div className="card m-1">
            <div className="card-body d-flex flex-column">
             <div className="d-flex">
              <img style={{height: "25px", width: "auto", marginRight: "8px"}} src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
              <h5 className="card-title d-flex justify-content-start"> {country.name.official} </h5>
             </div> 
              <hr></hr>
              <h6 className="card-subtitle mb-2 text-muted d-flex justify-content-start">Capital: {country.capital} </h6>
              <hr></hr>
              <h6 className="card-subtitle mb-2 text-muted d-flex justify-content-start">Area: {country.area} km² </h6>
              <hr></hr>
              <div className="d-flex ">
                <p className="d-flex justify-content-start">Borders:</p>
                <div className="d-flex flex-column px-3">
                  {country.borders.map((border) => (
                    <p className="card-text">{border} </p>
                  ))}
                </div>
              </div>
            </div>
          </div> 
        </div>
      ))}
    </>
  )
};

export default CountryDetails;
