let  arr = [1, 2, 3, 1, 2, 3, 1, 2, 3];
let count = 0;
for(let i = 0; i<arr.length;i++){
    if(arr[i]=== 1) count++;
}
console.log(count);

// 2번째 문제

let arr = ["A", "E", "W", "Q", "A"];
let flag = false;

for(let i = 0; i < arr.length; i++){
    if(arr[i]==="A"){
        flag = true;
        break;
    }
}

if(flag===true){
    console.log("0")
}
else{
    console.log("X")
}