// const item1 = document.querySelector(".item1");
// const item2 = document.querySelector(".item2");
// const item3 = document.querySelector(".item3");

// function click1(){
//     console.log('hi1')
// }
// function click2(){
//     console.log('hi2')
// }
// function click3(){
//     console.log('hi3')
// }

// item1.addEventListener('click', click1)
// item2.addEventListener('click', click2)
// item3.addEventListener('click', click3)

// const item1 = document.querySelector(".item1");
// const item2 = document.querySelector(".item2");
// const item3 = document.querySelector(".item3");

function click(){
    console.log("Hi")
}
// item1.addEventListener('click', click)
// item2.addEventListener('click', click)
// item3.addEventListener('click', click)

// 이벤트 버블링

// 이벤트 위임
const body = document.querySelector("body");

body.addEventListener("click", click); //한번만 눌림