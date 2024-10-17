//WAP to print Fibonacci series.
let a=0, b=1;
console.log(a);
console.log(b);
for (let i = 0; i < 8; i++) {
    let c= a+b;
    console.log(c);
    [a,b]=[b,c]  
}

//WAP to print the reverse of the number.
console.log('-------------------');
let num=57439;
let reverse=0;
while (num>0) {
    console.log(num,reverse);
    
    let d = num%10;
    reverse = reverse*10+d;
    num = parseInt(num/10);
}
console.log(reverse);
