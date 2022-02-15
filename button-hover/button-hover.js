// "use strict";
// document.querySelector('.button').addEventListener('mousemove' = e => {

//     const x = e.pageX - e.target.offsetLeft;
//     const y = e.pageY - e.target.offsetTop

//     e.target.style.setprorety('--x', `${x}px`);
//     e.target.style.setprorety('--y', `${y}px`);
// });



"use strict";
document.querySelector('.button').addEventListener('mousemove', e => {

    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;


    e.target.style.setProperty('--x', `${x}px`);
    e.target.style.setProperty('--y', `${y}px`);


});



