// you can create variable and accress any where 

const prevEl = document.getElementById('prev');
const nextEl = document.getElementById('next');
const playEl = document.getElementById('play');
const mainContainer = document.getElementById('music-container');
console.log(mainContainer);
const audioEl = document.querySelector('audio');
const tittle = document.getElementById('tittle');
const coverImg = document.getElementById('cover');
const progressEl = document.getElementById('progress');
const progressContainer = document.getElementById('progressContainer');
console.log(progressEl)
// console.log(playEl);




// songs tittle array
const songs = ['hey' , 'summer' , 'ukulele' , 'Rihanna - Diamond' , 'Save Your Tears (Remix)', ]

// console.log(songs);
// console.log(prevEl, nextEl, playEl);


// keep track on songs
let songIndex = 2;

// console.log(songIndex);


// init loader songs
loadSong(songs[songIndex]);






// HERE OUR LOADSONG FUNCTION
function loadSong(song){
    tittle.innerText = song;
    // console.log(tittle.innerText);
   audioEl.src = `music/${song}.mp3`;
   coverImg.src = `images/${song}.jpg`;


}






// PLAY BTN EVENTLISTNER
playEl.addEventListener('click' , RUN);


function RUN(){
    const isPlaying = mainContainer.classList.contains('play');
    
    if(isPlaying){
        pausedSong()
        
        
    }else{
       
        playSong()
       
    }
}



function playSong(){
    mainContainer.classList.add('play');
    playEl.querySelector('i.fas').classList.remove('fa.play');
    playEl.querySelector('i.fas').classList.add('fa-pause');
    
    audioEl.play();

}

function pausedSong(){
    mainContainer.classList.remove('play');
    playEl.querySelector('i.fas').classList.add('fa.play');
    playEl.querySelector('i.fas').classList.remove('fa-pause');

    audioEl.pause();

}


function prevSong(){
    songIndex --
    if(songIndex < 0){
       songIndex = songs.length - 1;
    
    }loadSong(songs[songIndex])
    playSong();
    
}


function nextSong(){
    songIndex ++

    if(songIndex > songs.length - 1){
        songIndex = 0
        
 
     }loadSong(songs[songIndex])
     playSong();
    
}


function updateProgress(e){
    // console.log(e.srcElement.duration)
    // console.log(e.srcElement.currentTime);
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime/duration) * 100;
    progressEl.style.width = `${progressPercent}%`

}

function setProgress(e){
   const width = this.clientWidth;
   const clickX = e.offsetX;
   console.log(width);
const duration = audioEl.duration;
audioEl.currentTime = (clickX / width) * duration



}

// here our change songs events
prevEl.addEventListener('click' ,prevSong)
nextEl.addEventListener('click' , nextSong)
audioEl.addEventListener('timeupdate' , updateProgress);
progressContainer.addEventListener('click' , setProgress)

audioEl.addEventListener('ended' , nextSong)

