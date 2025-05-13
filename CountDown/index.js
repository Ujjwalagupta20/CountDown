const endDate= "8 February, 2025 10:00 PM"
document.getElementById("end-date").innerText=endDate;
const inputs=document.querySelectorAll("input")
function clock(){
    const end=new Date(endDate)
    const now=new Date()
    console.log(end);
    console.log(now);
    const diff=(end-now)/1000;    //conversion of miliseconds into seconds
    
    //  1 day=24 hrs
    //  1 hr=60 min
    // 60 min=3600 sec

    if(diff<0)
        return;
    const days=(Math.floor(diff/3600/24));   //convert into days
    inputs[0].value =days;
    console.log(days);

    const hours=(Math.floor(diff/3600)%24);  //convert into hours
    inputs[1].value=hours;
    console.log(hours);

    const minutes=(Math.floor(diff/60)%60);  //convert into minutes
    inputs[2].value=minutes;
    console.log(minutes);

    const seconds=(Math.floor(diff % 60));  //convert into seconds
    inputs[3].value=seconds;
    console.log(seconds);
}
// initial call
clock()
setInterval(
    () =>{
        clock()
    },
    1000
)

