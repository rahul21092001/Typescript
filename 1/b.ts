let num = 1;
let str = "Rahul ";
let bool = true;

let arr = ["Rahul",true,1];

const obj : {name:string,age:number}= {
    name : "Rahul",
    age : 22,
}

type objType = {name:string,age:number}
const obj2 : objType = {
    name : "Rahul",
    age : 22,
};

let string :any = "Rahul";
let len = (string as string).length;
console.log(len);

