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

// let score = prompt('請輸入分數','0');
// score = Number(score);
// // (score = NaN) 下面語法可以寫成這樣
// if(isNaN(score)){  
//     alert('請輸入阿拉伯數字')
// }else{
//     if (score<0){
//         alert('請輸入大於0的數字');
//     }else if(score>=0 && score<60){
//         document.write('不及格');
//     }else if(score>=60 && score<70){
//         document.write('丙等');
//     }else if(score>=70 && score<80){
//         document.write('乙等');
//     }else if(score>=80 && score<90){
//         document.write('甲等');
//     }else if(score>=90 && score<=100){
//         document.write('優等');
//     }else{
//         alert('請輸入小於100的數字');
//     }
// }


let payway = prompt('請輸入付款方式:1.ATM 2.刷卡 3.貨到付款','1');

switch (payway){
    case "1" :
        document.write('付款方式為ATM匯款');
        break;
    case "2" :
        document.write('付款方式為刷卡');
        break;
    case "3" :
        document.write('付款方式為貨到付款');
        break;
    default :
        document.write('請選擇正確的付款方式');
}