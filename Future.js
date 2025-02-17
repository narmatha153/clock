const buttonstart=document.querySelector(".start")
const buttonstop=document.querySelector(".stop")
const buttonreset=document.querySelector(".reset")
let hours=minutes=seconds=ms=0;
//start button
buttonstart.addEventListener("click",()=>{
    buttonstart.classList.add("start-active");
    buttonstop.classList.remove("stop-active")
timmer=setInterval(()=>{
      ms++;
      if(ms==60){
        seconds++;
        ms=0;
      }
      if(seconds==60){
        minutes++;
        seconds=0;
      }
      if(minutes==60){
        hours++;
        minutes=0;
      }
      
      display()
},10)
});
//stop button
buttonstop.addEventListener("click",()=>{
    clearInterval(timmer);
    buttonstart.classList.remove("start-active");
    buttonstop.classList.add("stop-active")
    display()
});
//reset button
    buttonreset.addEventListener("click",()=>{
        let hours=minutes=seconds=ms=0;
        clearInterval(timmer);
        buttonstart.classList.remove("start-active");
        buttonstop.classList.remove("stop-active")
        display()
});
//output
function display(){
   ahours=hours<10?"0"+hours:hours
   aminutes=minutes<10?"0"+minutes:minutes
    aseconds=seconds<10?"0"+seconds:seconds
    ams=ms<10?"0"+ms:ms
    document.querySelector("#hours").innerText=ahours
    document.querySelector("#minutes").innerText=aminutes
    document.querySelector("#seconds").innerText=aseconds
    document.querySelector("#ms").innerText=ams
}