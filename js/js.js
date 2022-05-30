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

function sort(nums){
    //找出未排序中最小值
function minIndex(left,right){
if(right === nums.length){
    return left;
}else if(nums[right] < nums[left]){
    return minIndex(right,right+1);
}else{
    return minIndex(left,right+1);
}
} 



for(let i= 0;i<nums.length;i++){
    let selected = minIndex(i,i+1);
    if(i !== selected){
        //交換i與selected處的元素
        //換位子的程式
        let tmp = nums[i];
        nums[i] = nums[selected];
        nums[selected] = tmp;
    }
}
}

let nums = [10 ,3 ,5 ,2 ,4 ];
sort(nums);
console.log(nums);