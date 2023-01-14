setInterval(()=>{
    d= new Date();
    hours= d.getHours();
    minutetime= d.getMinutes();
    secondtime= d.getSeconds();
    hrot= 30*hours+ minutetime/2;
    mrot= 6*minutetime;
    srot=6*secondtime;
    hour.style.transform= `rotate(${hrot}deg)`;
    minutes.style.transform= `rotate(${mrot}deg)`;
    seconds.style.transform= `rotate(${srot}deg)`;
}, 100);