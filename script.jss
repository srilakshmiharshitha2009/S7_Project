function updateclock(){
    const clock=document.getElementById("clock");
    if(clock)
        clock.textContent=new Date().toLocaleTimeString();
}
updateclock();
setInterval(updateclock,1000);