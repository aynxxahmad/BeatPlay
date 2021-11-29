class Drumkit{
    constructor(){
        this.pads=document.querySelectorAll(`.pad`); //returns a nodelist of all 24 pads
       
        this.plyBtn=document.querySelector(`.play`);
        this.kickSound=document.querySelector(`.kick-sound`);
        this.snareSound=document.querySelector(`.snare-sound`);
        this.hihatSound=document.querySelector(`.hihat-sound`);
       
        this.index=0; //index and bpm are for creating the beats in a bar
        this.bpm=120;
       
        this.intervalId=0;
       
        this.selects=document.querySelectorAll(`select`);
        
        this.muteBtns=document.querySelectorAll(`.mute`);
       
        this.tempoSlider=document.querySelector(`.tempo-slider`)
        this.temponum=document.querySelector(`.tempo-number`)
    }

    start(){
        let interval = (60/this.bpm)*1000;
        if(this.intervalId===0){ //means the drumkit was clicked when drumkit was stopped 
            this.intervalId = setInterval(() => {
            this.looper();
            }, interval);
        }
        else{ //means the button was clicked when drumkit was being played
            clearInterval(this.intervalId);
            this.intervalId=0;
        }
    }

    looper(){
        let beat = this.index % 8;
        let activePad=document.querySelectorAll(`.b${beat}`);

        activePad.forEach(selected=>{

            //creating the animation
            selected.style.animation=`playTrack 0.3s alternate ease-in-out 2`;
            //here 2 is iteration count : it tells how many time the animation should run on each activePad for given 
            //0.5s so the animation will occur in an alternate manner i.e from-to and to-from for 2 iteration count.
       
       
                //playing the sound 
            if(selected.classList.contains(`active`)){
                if(selected.classList.contains(`kick-pad`)){
                    this.kickSound.currentTime=0; //clears the audio when looper is invoked again so the next doesnt wait for previous to finish implicitly
                    this.kickSound.play();
                }
                if(selected.classList.contains(`snare-pad`)){
                    this.snareSound.currentTime=0;
                    this.snareSound.play();
                }
                if(selected.classList.contains(`hihat-pad`)){
                    this.hihatSound.currentTime=0;
                    this.hihatSound.play();
                }
            }

        });
        this.index++;
    }

    activate(){
        this.classList.toggle(`active`); //here this is pad
    }

    updateBtnText(){
        if(this.intervalId===0) //if button was clicked when drumkit is not playing
            this.plyBtn.innerText=`Play`;
        else //if button was clicked when drumkit was playing
            this.plyBtn.innerText=`Stop`;
    }

    changeSound(e){
        const selectionTrack = e.target.name;
        const selectionName = e.target.value;

        console.log(selectionTrack);
        console.log(selectionName);
        
        if(selectionTrack===`kick-select`)
            this.kickSound.src = selectionName;
        else if(selectionTrack===`snare-select`)
            this.snareSound.src = selectionName;
        else if(selectionTrack===`hihat-select`)
            this.hihatSound.src = selectionName;
        
    }

    muteFunction(e){

        const muteIndex = e.target.getAttribute(`data-track`); //returns a string and not a number
        console.log(muteIndex);
        console.log(typeof(muteIndex));
        e.target.classList.toggle(`active`);

        if(e.target.classList.contains(`active`)){
            if(muteIndex==0) //0,1,2 here are string and not numbers .. == checks equality excluding data-type
                this.kickSound.volume=0;
                
            else if(muteIndex==1)
                this.snareSound.volume=0;
            
            else if(muteIndex==2)
                this.hihatSound.volume=0;
        }

        else{
            if(muteIndex==0)
                this.kickSound.volume=1;
            
            else if(muteIndex==1)
                this.snareSound.volume=1;
        
            else if(muteIndex==2)
                this.hihatSound.volume=1;
        }

        
    }

    changeTempo(e){ //change the value but do not update it
        this.temponum.innerText=e.target.value;
    }
    updateTempo(e){
        this.bpm = e.target.value;
        clearInterval(this.intervalId); //drumkit has been stopped
        this.intervalId = 0;
        if(this.plyBtn.innerText===`Stop`) //if drumkit was in playing condition when tempo was being changed
            this.start();
    }
}

//creating our object

const drumkit = new Drumkit(); //creates drumkit object




//Event Listeners


drumkit.pads.forEach(pad=>{
    pad.addEventListener(`click`,drumkit.activate); //here this refers to pad
    pad.addEventListener(`animationend`,()=>{
        pad.style.animation="none";
         //removing the animation attribute after the previous animation ends on the last pad so that animation can be applied again.
    });
});

drumkit.plyBtn.addEventListener(`click`,()=>{
    drumkit.start(); //here this is drumkit
    drumkit.updateBtnText();
});


drumkit.selects.forEach(select=>{
    select.addEventListener(`change`,function(e){
        drumkit.changeSound(e);
    });
});


drumkit.muteBtns.forEach(muteBtn => {
    muteBtn.addEventListener(`click`,function(e){
        drumkit.muteFunction(e);
    });
});


drumkit.tempoSlider.addEventListener(`input`,(e)=>{
    drumkit.changeTempo(e);
});

drumkit.tempoSlider.addEventListener(`change`,function(e){
    drumkit.updateTempo(e);
})