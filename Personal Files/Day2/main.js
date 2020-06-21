function addStyles(h_angle,m_angle,s_angle){
    var h_hand = document.getElementById('hour-hand');
    h_hand.style.transform = `rotate(${h_angle}rad)`;
    var m_hand = document.getElementById('minute-hand');
    m_hand.style.transform = `rotate(${m_angle}rad)`;
    var s_hand = document.getElementById('second-hand');
    s_hand.style.transform = `rotate(${s_angle}rad)`;

}

function setAngles(){
    var date = new Date();
    var hr = date.getHours(), min = date.getMinutes(), sec = date.getSeconds();
    //console.log(sec);
    const ang = Math.PI/6;
    var h_angle = (hr*ang)+(min*ang/60)+(sec*ang/3600);
    var m_angle = (min*ang/5)+(sec*ang/300);
    var s_angle = (sec*ang/5);
    addStyles(h_angle+Math.PI/2,m_angle+Math.PI/2,s_angle+Math.PI/2);
}


    setInterval(setAngles,1000);

