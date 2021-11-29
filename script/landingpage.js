// const firstContainer = document.querySelector(`.card-container1`);
// const secondContainer = document.querySelector(`.card-container2`);
// const firstCard = document.querySelector(`.card1`);
// const secondCard = document.querySelector(`.card2`);

// const drumImg = document.querySelector(`.drum-img`);
// const metronomeImg = document.querySelector(`.metronome-img`);


// //moving animation event
// firstContainer.addEventListener(`mousemove`,(e)=>{
//     let xAxis = (window.innerWidth/2 - e.pageX)/20;
//     let yAxis = (window.innerHeight/2 - e.pageY)/20;

//     firstCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
// });

// //Animate In
// firstContainer.addEventListener(`mouseenter`,e=>{
//     firstCard.style.transition="none";
//     drumImg.style.transform=` scale(1.2) translateX(10px) translateZ(500px) rotateZ(-10deg)`;

// });


// //Animate Out
// firstContainer.addEventListener(`mouseleave`,e=>{
//     firstCard.style.transition="all 0.5s ease-in-out";
//     firstCard.style.transform = `rotateY(0deg) rotateX(0deg)`;
//     drumImg.style.transform=`translateZ(0px) rotateZ(0deg)`;
// });


// //moving animation event
// secondContainer.addEventListener(`mousemove`,(e)=>{
//     let xAxis = (window.innerWidth/2 - e.pageX)/20;
//     let yAxis = (window.innerHeight/2 - e.pageY)/20;

//     secondCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
// });

// //Animate In
// secondContainer.addEventListener(`mouseenter`,e=>{
//     secondCard.style.transition="none";
//     metronomeImg.style.transform=`scale(1.2) translateX(10px) translateZ(500px) rotateZ(-10deg)`;

// });


// //Animate Out
// secondContainer.addEventListener(`mouseleave`,e=>{
//     secondCard.style.transition="all 0.5s ease-in-out";
//     secondCard.style.transform = `rotateY(0deg) rotateX(0deg)`;
//     metronomeImg.style.transform=`translateZ(0px) rotateZ(0deg)`;
// });
