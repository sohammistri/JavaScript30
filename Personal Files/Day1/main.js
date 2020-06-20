function playAudio(i){
    var audios = document.querySelectorAll('audio');
    audios[i].currentTime = 0;
    audios[i].play()
}

function removeTransition(event){
    event.target.classList.remove('playing');
}

function validate(event){
    var key_value = event.key;
    key_value = key_value.toUpperCase();
    var keys = document.querySelectorAll('.keys');
    var i;
    for(i=0;i<keys.length;i++){
        var val = keys[i].getAttribute('data-key');
        if(val==key_value){
            keys[i].classList.add('playing');
            playAudio(i);
            keys[i].addEventListener('transitionend',removeTransition)
            return;
        }
    }
}

document.addEventListener('keydown',validate);

