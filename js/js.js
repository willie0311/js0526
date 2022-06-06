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


// for( i=2 ; i<10 ; i++ ){
//     for( j=1 ; j<10 ; j++ ){
//         console.log('i='+i,'j='+j,'相乘得'+i*j)
//     }
// }

// //宣告函式
// function myname(myid){
//     document.write('姓名:'+ myid)
// }

// //執行
// myname('willie');

//參數的dc不等於變數的pdc
// function convertDF(dc){
//     return dc *1.8+32;
// }
// //pdc是變數
// let pdc = prompt('請輸入攝氏溫度:','25');
// document.write('華氏溫度為:'+ convertDF(pdc))

// function sort(nums){
//     //找出未排序中最小值
// function minIndex(left,right){
// if(right === nums.length){
//     return left;
// }else if(nums[right] < nums[left]){
//     return minIndex(right,right+1);
// }else{
//     return minIndex(left,right+1);
// }
// } 



// for(let i= 0;i<nums.length;i++){
//     let selected = minIndex(i,i+1);
//     if(i !== selected){
//         //交換i與selected處的元素
//         //換位子的程式
//         let tmp = nums[i];
//         nums[i] = nums[selected];
//         nums[selected] = tmp;
//     }
// }
// }

// let nums = [10 ,3 ,5 ,2 ,4 ];
// sort(nums);
// console.log(nums);


//array

// let student = ["willie","siang","abby"];
// document.write('<table border="1"><tr><td>編號</td><td>姓名</td></tr>');
// // for (let i = 0;i <student.length;i++){
// for(i in student){
//     document.write('<tr><td>'+(Number(i)+1)+'</td><td>'+student[i]+'</td></tr>');
// }
// document.write('</table>');

// //for in 要注意 i會變成字串 要轉換成數字 

//多維陣列

// let student = new Array();
// student[0]=["willie","99","96"];
// student[1]=["willie","97","92"];
// student[2]=["willie","86","80"];

// document.write("<table border='1'><tr><td>姓名</td><td>國文</td><td>英文</td></tr>");
// for(let i=0; i<student.length;i++){
//     document.write("<tr>");
//     for(let j=0 ; j<student[i].length;j++){
//         document.write('<td>'+student[i][j]+"</td>");
//     }
//     document.write('</tr>');
// }
// document.write('</table>');


// let x = [100,78,69,85,33,99,78,88];
// x.push(99);
// console.log(x);
// x.pop();
// console.log(x);
// x.unshift(99);
// console.log(x);
// x.shift();
// console.log(x);

//刪減區域0開始~位置
// console.log(x);

// x.splice(2,5)
// console.log(x);

// //增加
// x.splice(2,5,23,32)
// console.log(x);

// //後面增加
// x.splice(-1,2)
// console.log(x);

// //接著增加
// x.splice(2,4,22,33)
// console.log(x);


//Object

// function person(name ,age ,weight, height){
//     this.name = name;
//     this.age = age;
//     this.weight = weight;
//     this.height = height;
//     this.sayHello = function(){
//         return "你好，我是 "+ name + " 今年 " + age + " 歲，身高 " + height + " 公分 , "+ weight +" 體重 。<br>"; 
//     }

// }

// person1 = new person('willie',40,70,180);
// person2 = new person('siang',31,63,158);
// person3 = new person('abby',2,18,90);
// document.write(person1.sayHello());
// document.write(person2.sayHello());
// document.write(person3.sayHello());

//DOM
// function sayHi(){
//     console.log('Hi');
// }

// let myInterval = setInterval(sayHi,1000);

// function stop(){
//     clearInterval(myInterval);
// }

// console.log('Hi');

// console.error('Hi');

// console.warn('Hi');


// let myH1 = document.getElementById('first');
// let myP = document.getElementsByClassName('second');
// console.log(myH1);
// console.log(myP);

// let first = document.querySelector('#text');
// console.log(first);
// let second = document.querySelectorAll('.second');
// console.log(second);

// 箭頭函式
// sayHi();

// function sayHi(){
//     console.log('Hi');
// }

// let sayHi = () => {
//     console.log('Hi');
// }

// sayHi();


// let TCNR = {
//     Name:"中彰投分屬",
//     myName(){
//         console.log("TCNR是"+ this.Name + "。");
//     },
//     address: () =>{
//         console.log("TCNR的地址是台中市西屯區工業區一路100號");
//     }
// }

// TCNR.myName();
// TCNR.address();

let Numbers = [15,3,25,10,27,35];

// for (let i=0;i<Numbers.length;i++){
//     if (Numbers[i] >20){
//         console.log(Numbers[i]);
//     }
// };

Numbers.forEach(n => {
    if(n >20){
        console.log(n);
    }     
});