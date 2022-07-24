
let container=document.createElement('div')
container.setAttribute("class","container")
let calculator=document.createElement('div')
calculator.setAttribute("class","calculator")
let screen=document.createElement('div')
screen.setAttribute("class","screen")
let type=document.createElement('div')
type.setAttribute("id","type")
let result=document.createElement('div')
result.setAttribute("id","result")
result.innerText="00"
screen.append(type,result)

let write_me=document.querySelectorAll('type')

let numpad=document.createElement('div')
numpad.setAttribute("class","numpad")
let erase=document.createElement('button')
erase.setAttribute("id","erase")
erase.innerText="AC"

let clear=document.createElement('button')
clear.setAttribute("id","clear")
clear.innerText="C"
let equal=document.createElement('button')
equal.setAttribute("id","ans")
equal.innerText="="
let button7=document.createElement('button')
button7.setAttribute("id","se")
button7.innerText="7"
let button8=document.createElement('button')
button8.setAttribute("id","ei")
button8.innerText="8"
let button9=document.createElement('button')
button9.setAttribute("id","ni")
button9.innerText="9"
let button4=document.createElement('button')
button4.setAttribute("id","fo")
button4.innerText="4"
let button5=document.createElement('button')
button5.setAttribute("id","fi")
button5.innerText="5"
let button6=document.createElement('button')
button6.setAttribute("id","si")
button6.innerText="6"
let button1=document.createElement('button')
button1.setAttribute("id","on")
button1.innerText="1"
let button2=document.createElement('button')
button2.setAttribute("id","tw")
button2.innerText="2"
let button3=document.createElement('button')
button3.setAttribute("id","th")
button3.innerText="3"
let button0=document.createElement('button')
button0.setAttribute("id","ze")
button0.innerText="0"
let button00=document.createElement('button')
button00.setAttribute("id","db_ze")
button00.innerText="00"
let button_plus=document.createElement('button')
button_plus.setAttribute("id","plus")
button_plus.innerHTML="<i class='fa fa-plus'></i>"
let button_min=document.createElement('button')
button_min.setAttribute("id","min")
button_min.innerHTML="<i class='fa fa-minus'></i>"
let button_multi=document.createElement('button')
button_multi.setAttribute("id","multi")
button_multi.innerHTML="<i class='fa fa-times'></i>"
let button_div=document.createElement('button')
button_div.setAttribute("id","div")
button_div.innerHTML="<i class='fa fa-divide'></i>"
let button_per=document.createElement('button')
button_per.setAttribute("id","per")
button_per.innerHTML="<i class='fa fa-percent'></i>"
let button_point=document.createElement('button')
button_point.setAttribute("id","point")
button_point.innerHTML="<i class='fa fa-circle' style='font-size:7px'></i>"

numpad.append(erase,clear,equal,button7,button8,button9,button4,button5,button6,button1,button2,button3,button0,button00,button_plus,button_min,button_multi,button_div,button_per,button_point)
calculator.append(screen,numpad)
container.append(calculator)
document.body.append(container)

button0.onclick=()=>{
    type_to(0);
}
button00.onclick=()=>{
    type_to("00");
}
button1.onclick=()=>{
    type_to(1);
}
button2.onclick=()=>{
    type_to(2);
}
button3.onclick=()=>{
    type_to(3);
}
button4.onclick=()=>{
    type_to(4);
}
button5.onclick=()=>{
    type_to(5);
}
button6.onclick=()=>{
    type_to(6);
}
button7.onclick=()=>{
    type_to(7);
}
button8.onclick=()=>{
    type_to(8);
}
button9.onclick=()=>{
    type_to(9);
}
button_plus.onclick=()=>{
    type_to("+");
}
button_min.onclick=()=>{
    type_to("-");
}
button_multi.onclick=()=>{
    type_to("X");
}
button_div.onclick=()=>{
    type_to("/");
}
button_point.onclick=()=>{
    type_to(".");
}
button_per.onclick=()=>{
    type_to("%");
}

clear.onclick=()=>{
    clear_screen()
}

erase.onclick=()=>{
    erase_screen()
}
equal.onclick= () =>{
    calculate();
}

document.onkeyup=e=>{
    if(e.key=="0" || e.key=="Num0"){
        type_to(0)
    }else if(e.key=="1" || e.key=="Num1"){
        type_to(1)
    }else if(e.key=="2" || e.key=="Num2"){
        type_to(2)
    }else if(e.key=="3" || e.key=="Num3"){
        type_to(3)
    }else if(e.key=="4" || e.key=="Num4"){
        type_to(4)
    }else if(e.key=="5" || e.key=="Num5"){
        type_to(5)
    }else if(e.key=="6" || e.key=="Num6"){
        type_to(6)
    }else if(e.key=="7" || e.key=="Num7"){
        type_to(7)
    }else if(e.key=="8" || e.key=="Num8"){
        type_to(8)
    }else if(e.key=="9" || e.key=="Num9"){
        type_to(9)
    }else if(e.key=="." || e.key=="Num."){
        type_to(".")
    }
    else if(e.key=="Enter" || e.key=="Numenter"){
        calculate()
    }else if(e.key=="Delete"){
        clear_screen()
    }else if(e.key=="Backspace"|| e.key=="Escape"){
        erase_screen()
    }else{
        alert("Only numbers are allowed")
    }
}
var type_to=text=>{
    if(type.innerText==""){
        type.innerText= text;
    }else if(type.innerText.length<=23){
        type.innerText=type.innerText + text
    }else{
        alert("Digit limit reached")
    }
}

var calculate=()=>{
    var res=type.innerText;
    if(res.indexOf("%")== -1){
        if(res.indexOf("X")!= -1){
            res=res.replace("X","*");
        }
        else{
            result.innerText=eval(res)
        }
    }
    else{
        res=res.replace("%","X")
        if(res.indexOf("X")!= -1){
            res_ar=res.split("X");
            var total=eval(res_ar[0])
            var need=eval(res_ar[1])
            res=(need/100)*total
        }
    }
    result.innerText=eval(res)
}

var clear_screen=()=>{
    type.innerText="";
}

var erase_screen=()=>{
    type.innerText= type.innerText.slice(0,type.innerText.length-1);
    result.innerText="00"
}
