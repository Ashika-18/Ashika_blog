const picArray = [
    {src: './images/朝日.jpg'},
    {src: './images/昼.jpg'},
    {src: './images/夕焼け.jpg'},
    {src: './images/ポセイドン.jpg'}
];

let counter = 0;

const changePic = () => {
    if (counter < picArray.length) {
        document.getElementById('pics').src = picArray[counter].src;
        counter++
    } else {
        document.getElementById('pics').src = picArray[0].src;
        counter = 1;
    }
}

let playId = 0;

const slideShow = () => {
    if (playId === 0) {
        document.getElementById('play').innerHTML = 'STOP';
        playId = setInterval(changePic, 2000);
    } else {
        document.getElementById('play').innerHTML = 'START';
        clearInterval(playId);
        playId = 0;
    }
}