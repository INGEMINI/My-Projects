console.log("Welcome to Spotify");

let progress;

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myprocessbar');
let gif = document.getElementById('gif');

let songItems = Array.from(document.getElementsByClassName('songitem'));

let songs = [
  { songname: "BAD GIRLS LIKE U", filepath: "songs/1.mp3", coverpath: "covers/1.jpg" },
  { songname: "TU RU RUU", filepath: "songs/2.mp3", coverpath: "covers/2.jpg" },
  { songname: "Samjho-na", filepath: "songs/3.mp3", coverpath: "covers/3.jpg" },
  { songname: "PERFECT", filepath: "songs/4.mp3", coverpath: "covers/4.jpg" },
  { songname: "CLOSER", filepath: "songs/5.mp3", coverpath: "covers/5.jpg" },
  { songname: "SIGMA BOY", filepath: "songs/7.mp3", coverpath: "covers/7.jpg" },
  { songname: "LOVE ME LIKE YOU DO", filepath: "songs/8.mp3", coverpath: "covers/8.jpg" },
  { songname: "AAYA TU", filepath: "songs/9.mp3", coverpath: "covers/2.jpg" },
  { songname: "SANAM RE", filepath: "songs/5.mp3", coverpath: "covers/5.jpg" },
  { songname: "BEGINNING OF ENDINGS", filepath: "songs/3.mp3", coverpath: "covers/3.jpg" },
];

// Populate song items
songItems.forEach((element, i) => {
  
  element.getElementsByTagName("img")[0].src = songs[i].coverpath;
  element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
});

// Play/Pause functionality
masterPlay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');
    gif.style.opacity = 0;
  }
});

// Update progress bar as song plays
audioElement.addEventListener('timeupdate', () => {
  console.log('timeupdate');
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  console.log(progress);
  myProgressBar.value = progress;
});

// Seek song using progress bar
myProgressBar.addEventListener('change', () => {
  audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})


const makeallplays=()=>{
 

  Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{

    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
  })


}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
  element.adEventListener('click',(e)=>{
    makeallplays();
    index=parseInt(e.target.id);


    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');

  audioElement.src=`songs/${index+1}.mp3`;


  audioElement.currentTime=0;
  audioElement.play();
   masterPlay.classList.remove('fa-circle-play');
   masterPlay.classList.add('fa-circle-pause');
  })
})