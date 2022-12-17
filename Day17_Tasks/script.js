let div=document.createElement('div');
div.setAttribute("class","container");
let num=10;
let h1 = document.createElement('h1');

const animateAll = (animate) => {
       setTimeout(()=>{
        const myInterval= setInterval(() => {
            h1.innerText=num--;
            if(num<0){
                h1.innerHTML="Happy Indepence Day!!"
                clearInterval(myInterval)   
             }
        }, 1000)
       }, 1000)
     
    }
       
   

const animate = (word) => {
    h1.classList.add("animate");
}

animateAll(animate);


div.append(h1);
document.body.append(div);