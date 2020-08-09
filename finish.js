var finish = document.getElementById("finishboard");
var loopaudio = document.getElementById("loopaudio");
var newgame = document.getElementById("newgame");
var cancel = document.getElementById("cancel");
var volume = document.getElementById("volume")
var volumeOn = true

function newgameFunc(){
    window.location = '/'
    // alert('Hello world');
}
function cancelFunc(){
    loopaudio.pause()
    finish.style.display='none'
    // alert('Hello world');
    return
}

function volumeToggle(){
    if(volumeOn){
     loopaudio.pause()
     volume.innerHTML="volume_off"
     volumeOn=false
    }
    else{
        volume.innerHTML="volume_up"
        volumeOn=true 
        loopaudio.play()   
    }
}

newgame.addEventListener('click',newgameFunc)
cancel.addEventListener('click',cancelFunc)
volume.addEventListener('click', volumeToggle)