// let count = 0;
// function plusCount() {
//     count++;
//     const div = document.getElementById("counter");
//     let elem = document.createElement("p");
//     elem.innerHTML = count;
//     div.appendChild(elem);
// }
// const btn = document.getElementById("second");
// // btn.onclick = plusCount;
// function test() {
//     plusCount();
//     // if (count > 5) {
//     //     btn.removeEventListener('click', function () { })
//     // }
//     let interval = setInterval(() => {
//         if (count > 5) {
//             btn.removeEventListener('click', test)
//             clearInterval(interval);
//         }
//     })
// }
// btn.addEventListener('click', test);

// function stop(event){
//     event.preventDefault();
//     console.log(event.which);
// }

// link.onclick=stop;
// link.addEventListner('click', stop);

// function enable(event) {
//     console.log(event.target);
//     if (event.target.children[0]) {
//         event.target.children[0].removeAttribute('disabled')
//     }
// }

const div = document.getElementById('block');

document.body.onscroll = function(event){
console.log(event);
}