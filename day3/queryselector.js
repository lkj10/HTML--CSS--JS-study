// console.log(document)

// "원시값 재할당이 필요한 경우만 let 사용"

const i = document.getElementById("i");
console.log(i);
const c = document.getElementsByClassName("c");
console.log(c);

const a = document.getElementsByClassName("c");

const b = document.querySelector("#i");

const aa = document.querySelector(".c");


b.before("before");

const d = document.querySelector("#ol");
d.after("end");

let liFirst = document.createElement("li");
liFirst.innerHTML = "prepend";
d.prepend(liFirst);

let liLast = document.createElement("li");
liLast.innerHTML = "append";

d.append(liLast)