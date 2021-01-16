const clockNum = document.getElementById('clock_num');
positionClockNum();
function positionClockNum(){
    clockNumArr = clockNum.children;
    for(let i = 0 ; i < clockNumArr.length ; i++){
        const deg = ((360 /12) * (i -3))/180 * Math.PI;
        const degx = Math.cos(deg) * 245;
        const degy = Math.sin(deg) * 245;
        
        clockNumArr.item(i).style.transform = `translate(${degx}px,${degy}px)`;

        if((i-3) % 3 === 0){
            clockNumArr.item(i).style.fontSize = '42px';
            clockNumArr.item(i).style.fontWeight ='900';
        }
    }
}

function moveHand(){
    const hour = document.getElementById('hour-hand');
    const min = document.getElementById('min-hand');
    const sec = document.getElementById('sec-hand');

    let date = new Date();
    let Hdeg = (360/12) * date.getHours() + (360 /12 /60) * date.getMinutes();
    let Mdeg = (360 /60) * date.getMinutes();
    let Sdeg = (360 /60) * date.getSeconds();

    hour.style.transform = `rotate(${Hdeg}deg)`;
    min.style.transform = `rotate(${Mdeg}deg)`;
    sec.style.transform = `rotate(${Sdeg}deg)`;
}

setInterval(moveHand,50);