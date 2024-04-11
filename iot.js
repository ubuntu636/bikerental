
// var slide = document.getElementById("slider");
// var btn1 = document.getElementById('btn1');
// var btn2 = document.getElementById('btn2');
// var btn3 = document.getElementById('btn3');
// var btn4 = document.getElementById('btn4');
// var btn5 = document.getElementById('btn5');
// var btn6 = document.getElementById('btn6');
// var btn7 = document.getElementById('btn7');
// var btn8 = document.getElementById('btn8');

// btn1.onclick = function () {
//     slide.style.transform = "translateX(0px)";
//     btn1.classList.add('active');
//     btn2.classList.remove('active');
//     btn3.classList.remove('active');
//     btn4.classList.remive('active');
// };
// btn2.onclick = function () {
//     slide.style.transform = "translateX(-100%)";
//     btn1.classList.remove('active');
//     btn2.classList.add('active');
//     btn3.classList.remove('active');
//     btn4.classList.remove('active');
// };
// btn3.onclick = function () {
//     slide.style.transform = "translateX(-200%)";
//     btn1.classList.remove('active');
//     btn2.classList.remove('active');
//     btn3.classList.add('active');
//     btn4.classList.remove('active');
// };
// btn4.onclick = function () {
//     slide.style.transform = "translateX(-300%)";
//     btn1.classList.remove('active');
//     btn2.classList.remove('active');
//     btn3.classList.remove('active');
//     btn4.classList.add('active');
// };

// // 
// btn5.onclick = function () {
//     slide.style.transform = "translateX(0px)";
//     btn1.classList.add('active');
//     btn2.classList.remove('active');
//     btn3.classList.remove('active');
//     btn4.classList.remive('active');
// };
// btn6.onclick = function () {
//     slide.style.transform = "translateX(-100%)";
//     btn1.classList.remove('active');
//     btn2.classList.add('active');
//     btn3.classList.remove('active');
//     btn4.classList.remove('active');
// };
// btn7.onclick = function () {
//     slide.style.transform = "translateX(-200%)";
//     btn1.classList.remove('active');
//     btn2.classList.remove('active');
//     btn3.classList.add('active');
//     btn4.classList.remove('active');
// };
// btn8.onclick = function () {
//     slide.style.transform = "translateX(-300%)";
//     btn1.classList.remove('active');
//     btn2.classList.remove('active');
//     btn3.classList.remove('active');
//     btn4.classList.add('active');
// };

var slide = document.getElementById("slider");
var indicators = document.querySelectorAll('.indicators span');

// Add click event listeners to all indicator buttons
indicators.forEach(function(btn, index) {
    btn.onclick = function() {
        var translateValue = index * -100 + '%';
        slide.style.transform = "translateX(" + translateValue + ")";

        // Remove 'active' class from all buttons
        indicators.forEach(function(btn) {
            btn.classList.remove('active');
        });

        // Add 'active' class to the clicked button
        btn.classList.add('active');
    };
});