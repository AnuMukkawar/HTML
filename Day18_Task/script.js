//https://countryflagsapi.com/png/ae
let countryUrl="https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
var country=document.getElementById('countryContainer')


async function getCountries(){
    let Data=await fetch(countryUrl)
    let getData=await Data.json()
    console.log(getData)
   
    
    getData.map((ele)=>{
        let div1=document.createElement('div')
        let countryimg=`https://countryflagsapi.com/png/${ele.name}`
        div1.innerHTML=` <div class="card">
        <h5 class="card-header" id="country">${ele.name}</h5>
        <img src=${countryimg} class="card-img-top" alt="">
        <div class="card-body text-center">
          <p class="card-text mb-0">Capital: ${ele.capital}</p>
          <p class="card-text mb-0">Region: ${ele.region}</p>
          <p class="card-text mb-0">Country code: ${ele.cioc}</p>
          <p class="card-text">Latlng: ${ele.latlng}</p>

          <button class="btn btn-dark" type="button" onclick="${getWeatherData(ele.name)}">Click for weather</button>
        </div>`

        country.append(div1)

    })
}

getCountries()

let weatherContainer=document.getElementById('weatherContainer')
async function getWeatherData(country){
  console.log(country)
    let data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=68efa0885519a6f01d76917c463ada68&units=metric`)
    let res=await data.json()
   
    let div2=document.createElement('div')
div2.innerHTML=`<div class="row g-0">
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Weather Update ${country}</h5>
              <p class="card-text m-0"><small class="text-muted">Humidity: ${data.main.humidity}</small></p>
              <p class="card-text m-0"><small class="text-muted">Wind Speed: ${data.wind.speed}</small></p>
              <p class="card-text m-0"><small class="text-muted">Temperature: ${data.main.temp}</small></p>
              <p class="card-text m-0"><small class="text-muted">Description: ${data.weather[0].description}</small></p>

            </div>
          </div>
        </div>
`
weatherContainer.append(div2)
}

