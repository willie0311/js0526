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


// let score = prompt('請輸入分數',);
// score = Number(score);
// switch (true){
//     case score<0 :
//         alert('請輸入大於0的數字');
//         break;
//     case score>=0 && score<60 :
//         document.write('不及格');
//         break;
//     case score>=60 && score<70 :
//         document.write('丙等');
//         break;
//     case score>=70 && score<80 :
//         document.write('乙等');
//         break;
//     case score>=80 && score<90 :
//         document.write('甲等');
//         break;
//     case score>=90 && score<=100 :
//         document.write('優等');
//         break;
//     default :
//         alert('請輸入小於100的數字');
// }


// let i= 0;
// while (i<10){
//     i++;
//     document.write(i + ' ');
// }

// 最少程式會執行一次
// let i = 0;
// do {
//     i++;
//     document.write(i + ' ');
// }while(i<10)

let countI = 0;
for( i=1 ; i<=10 ; i++ ){
    countI = countI + i;
    
    // 1  =  0  1次
    // 3  =  1  2次
    // 6  =  3  3次
    // 10 =  6  4次
    // 15 = 10  5次
    // 21 = 15  6次
    // 28 = 21  7次
    // 36 = 28  8次
    // 45 = 36  9次
    // 55 = 45  10次
}
document.write(countI);