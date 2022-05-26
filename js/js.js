// let text0 ="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quisquam quo eius quod architecto, aut fuga maiores reiciendis officia voluptates animi facere! Accusamus, perspiciatis. Facilis magnam totam amet fugit eum?";

// let text ="Lorem";
// console.log(text[0]);
// console.log(text[1]);
// console.log(text[2]);
// console.log(text[3]);
// console.log(text[4]);


// console.log(text0.slice(10,16));
// console.log(text0.slice(-15,-3));


// let text1 ="quo eius quod architecto";
// console.log(text1.indexOf("s"));
// console.log(text1.indexOf("S"));
// console.log(text1.split(""));

// (a>=0)?document.write('數字為正數'):document.write('數字為負數');

let score = prompt('請輸入分數','0');
if (score>=60 && score<70){
    document.write('丙等')
}else if(score>=70 && score<80){
    document.write('乙等')
}else if(score>=80 && score<90){
    document.write('甲等')
}else if(score>=90 && score<=100){
    document.write('優等')
}else{
    document.write('不及格')
}


