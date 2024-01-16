/// <reference path="driver.js"/>

let teamArray = ["redBull", "mercedes", "ferrari", "mcLaren", "astonMartin", "alpine", "williams", "alphaTauri", "alfaRomeo", "haas"]
let championArray = ["redBull", "mercedes", "ferrari", "mcLaren", "williams", "alfaRomeo"]
let ContString = ''

console.log(driver)

let test = driver[0][0].dateBirth
console.log(test);

//ALL DRIVER
playerCount();
function playerCount(){
    document.getElementById('content').innerHTML = ''
    ContString = ''
    for(let i = 0; i < driver.length; i++){
        console.log(i)
        let teamName = teamArray[i]
        
        ContString += `<section id="teamDriver" class="${teamName}">`
        ContString += `<div><h3>${teamName}</h3></div><br>`
        for (let j = 0; j < driver[i].length; j++) {
            console.log(i + "&" + j)  
            loadPlayers(i,j);  
        }
        // GIF
        if(teamArray[i] == "ferrari"){
            ContString += `<div class="gif">`
            ContString += `<img id="FerrariGifCar" src="./Pic/Gifs/ferrariCar.png" alt="Car">`
            ContString += `</div>`
        }
        // 
        ContString += `</section>`
    }
    document.getElementById('content').innerHTML += ContString;
}
//CHAMPIONS
function loadfilter(){
    document.getElementById('content').innerHTML = ''
    ContString = ''
    for(let i = 0; i < championArray.length; i++){
        console.log(i)
        let teamName = championArray[i]
        
        ContString += `<section id="teamDriver" class="${teamName}">`
        ContString += `<div><h3>${teamName}</h3></div><br>`
        for (let j = 0; j < driver[i].length; j++) {
            console.log(i + "&" + j)  
            loadPlayers(i,j);  
        }
        ContString += `</section>`
    }
    document.getElementById('content').innerHTML += ContString;
}
//Load stuff
function loadPlayers(team, fahrer){
    ContString += `
    <div class="gsap_scrollReveal">
    <div id="driverCard">
            <div class="headlineCard">
                <p>${driver[team][fahrer].nr}</p>
                <h4>${driver[team][fahrer].name}</h4>
            </div>
            <div class="picCard">
                <img src="${driver[team][fahrer].img}" alt="" width="">
            </div>
            <div class="infosCard">
                <p><span class="impP">Birth:</span>${driver[team][fahrer].dateBirth}</p>
                <p><span class="impP">Birthplace:</span>${driver[team][fahrer].placeBirth}</p>
                <p><span class="impP">Grand Prix:</span>${driver[team][fahrer].grandPrix}</p>
                <p><span class="impP">Wins:</span>${driver[team][fahrer].wins}</p>
                <p><span class="impP">World Champion:</span>${driver[team][fahrer].worldChampion}</p>
            </div>
            </div>
        </div>
        `
}


// Scroll
// INIT GSAP SCROLL PLUGIN
gsap.registerPlugin(ScrollTrigger);

// SHOW CONTENT
window.onload = ()=>{
    document.querySelector('body').style.opacity = 1;
}

// ITERATE ALL ELEMENTS
let sections = document.querySelectorAll('.gsap_scrollReveal');
for (let i = 0; i < sections.length; i++) {
    generateScrollAnimation(i);
}

// REGISTER ANIMATION
function generateScrollAnimation(i){

    let element = sections[i];

    /* SET START KEY FRAME */
    if(i%2 == 0) {
        gsap.set(element, {
            x: '-40%',
            y: '30%',
            scale: 0,
            opacity: 0
        });
    } else {
        gsap.set(element, {
            x: '40%',
            y: '30%',
            scale: 0,
            opacity: 0
        });
    }
    
    /* SET END KEY FRAME */
    gsap.to(element, {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 0.6,
        scrollTrigger: {
            trigger: element,
            start: '120% 120%',  /* 'Ankerpunkt Offset' */
        }
    });
    
}

//Ferrari gif
let gif = document.querySelectorAll('.gif');
for (let i = 0; i < gif.length; i++) {
    gifAnimation(i);
}
function gifAnimation(i){

    let element = gif[i];

    /* SET START KEY FRAME */

    gsap.set(element, {
        x: '200%',
        y: '-20vw',
        scale: 0,
        opacity: 0
    });
    
    
    /* SET END KEY FRAME */
    gsap.to(element, {
        x: '140%',
        y: '-6vw',
        scale: 1,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
            trigger: element,
            start: '80% 80%',  /* 'Ankerpunkt Offset' */
        }
    });
    
}