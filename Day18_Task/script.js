
//https://countryflagsapi.com/png/ae
let container=document.createElement('div')
container.setAttribute("class","flex-container")

let cardDeck=document.createElement('div')
cardDeck.classList.add("card-deck","row","row-cols-1","row-cols-md-3","row-cols-xl-4","row-cols-sm-2","g-4","m-1")
cardDeck.setAttribute("id","countryContainer")


let countryUrl="https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"

var country
let card =document.createElement('div')
card.setAttribute("class","card")

    let request=new XMLHttpRequest();
    request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    request.send();
    request.onload=function(){
        var getData=JSON.parse(this.response);


    // let Data=await fetch(countryUrl)
    // let getData=await Data.json()
   
    getData.map((ele)=>{
        let countryimg=`https://countryflagsapi.com/png/${ele.name}`
       
        let header=document.createElement('h5')
        header.setAttribute("class","card-header")
        header.setAttribute("id","country")
        header.innerText=ele.name
        let img=document.createElement('img')
        img.src=countryimg
        img.setAttribute("class","card-img-top")

        let cardBody=document.createElement('div')
        cardBody.classList.add("card-body","text-center")
        
        let  p1=document.createElement('p')
        p1.classList.add("card-text", "mb-0")
        p1.innerText=`Capital: ${ele.capital}`
        let  p2=document.createElement('p')
        p2.classList.add("card-text", "mb-0")
        p2.innerText=`Region: ${ele.region}`
        let  p3=document.createElement('p')
        p3.classList.add("card-text", "mb-0")
        p3.innerText=`Country code: ${ele.cioc}`
        let  p4=document.createElement('p')
        p4.setAttribute("class","card-text")
        p4.innerText=`Latlng: ${ele.latlng}`

        // let button=document.createElement('button')
        // button.classList.add("btn","btn-dark")
        // button.innerText="Click for Weather"

       
    //     let div2=document.createElement('div')
    // div2.innerHTML=`<p class="card-title">Weather Update</p>
    //               <p class="card-text m-0"><small class="text-muted">Humidity: ${res.main.humidity}</small></p>
    //               <p class="card-text m-0"><small class="text-muted">Wind Speed: ${res.wind.speed}</small></p>
    //               <p class="card-text m-0"><small class="text-muted">Temperature: ${res.main.temp}</small></p>
    //               <p class="card-text m-0"><small class="text-muted">Description: ${res.weather[0].description}</small></p>
    let request1=new XMLHttpRequest();
    
    request1.open("GET",`https://api.openweathermap.org/data/2.5/weather?q=${ele.name}&appid=68efa0885519a6f01d76917c463ada68`);
    request1.send();
    request1.onload=function(){
        var res=JSON.parse(this.response);

        let a=document.createElement('a')
        a.tabindex="0"
        a.classList.add("btn","btn-info")
        a.role="button"
        a.toggle="popover"
        a.trigger="focus"
        a.title="MoreInfo"
        a.content="Humidity"+res.main.humidity
        // a.content=""Humidity: ${res.main.humidity} Wind Speed: ${res.wind.speed} Temperature: ${res.main.temp} Description: ${res.weather[0].description}`
        a.innerText="Click for Weather"
      
        $('.btn-info').popover({
            trigger: 'focus'
         })
         cardBody.append(a)
        }
        // div1.innerHTML=`<h5 class="card-header" id="country">${ele.name}</h5>
        // <img src=${countryimg} class="card-img-top" alt="">
        // <div class="card-body text-center">
        //   <p class="card-text mb-0"></p>
        //   <p class="card-text mb-0">Region: ${ele.region}</p>
        //   <p class="card-text mb-0">Country code: ${ele.cioc}</p>
        //   <p class="card-text">Latlng: ${ele.latlng}</p>
        //   <button class="btn btn-dark" type="button" onclick="getWeatherData(${ele.name})">Click for weather</button>
        // </div>`
     

        // country.append(div1)
        cardBody.append(p1,p2,p3,p4)
        card.append(header,img,cardBody)
        
    })
    
    
}

cardDeck.append(card)
container.append(cardDeck)
document.body.append(container)

