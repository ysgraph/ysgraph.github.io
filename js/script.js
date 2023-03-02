const
    btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    document.querySelector('#html').classList.toggle('light');
});

// styleElem = document.getElementById('style');

// btn.addEventListener('click', () => {
//     if(styleElem.href === 'css/dark.css'){
//         styleElem.href = 'css/light.css';
//     } else {
//         styleElem.href = 'css/dark.css';
//     }
// });

// btn.addEventListener('click', () => {
//     // document.body.classList.toggle('light-bg');
//     styleElem.href = 'css/light.css';
// });

// btn.addEventListener('click', () => {
//     function changeStyleSheet() {
//         var elem = document.getElementById("style");
//         elem.href = "light.css";
//       }
// });

// var styleElem = document.getElementById('style'),
//     btnElem   = document.getElementById('btn');

// btnElem.addEventListener('click', () => {
// 	styleElem.href.toggle('css/light.css');
// });