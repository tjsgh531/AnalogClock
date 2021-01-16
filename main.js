const clockNum = document.getElementById('clock_num');
positionClockNum();
function positionClockNum(){
    clockNumArr = clockNum.children;
    console.log(clockNumArr);
    for(let i = 0 ; i < clockNumArr.length ; i++){
        console.log('실행?');
        const deg = ((360 /12) * i)/180 * Math.PI;
        const degx = Math.cos(deg) * 270;
        const degy = Math.sin(deg) * 270;
        console.log(degx);
        clockNumArr.item(i).style.left =`calc(50%  -12px + ${degx})`;
        clockNumArr.item(i).style.bottom =`calc(50% - 12px + ${degy});`;
    }
}