function addNums(a,b){
    var c = a + b;

    console.log(c);
}

addNums(3220,48);
addNums(322,480);
addNums(32,4802);
addNums(3,48022);
addNums(3220,48022);
//console.log(c);  jab var use hoga toh vo sirf function ke andr hi work krega bahar nahi

const getAvg = function ( m1, m2, m3){
    const avg =( m1 + m2 + m3 )/3;
    //console.log(avg);
    return avg; //return ka use isly hota hai takki hm kahi bahar value print kr sake
}
//getAvg(80,56,29);
const r = getAvg(52,60,20);
console.log(r);



const factorial = (n) => {
    let f = 1;
    for (let i = 2; i <= n; i++) {
        f = f * i; //f*=i
    }
    return f;
}
const ans = factorial(5);
console.log(ans);



//Create a function to check if a number id ever or odd

const checkEven = (n) =>{
    if ( n % 2 ===0) {
        return 'even';
    }else{
        return 'odd'
    }
}
const res = checkEven();
console.log(res);


//Create a function to take time of day greet accordingly

const greet = (time) =>{
    if (time === 'morning'){
        return 'Good Morning'
    }else if (time === 'noon'){
        return 'Good Noon'
    }else if (time === 'afternoon'){
        return 'Good Afternoon'
    }else if (time === 'evening'){
        return 'Good Evening'
    }else if (time === 'night'){
        return 'Good Night'
    }        
}
const greeting = greet('morning');
console.log(greeting);

//Create a function to check if a number is prime or not
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true; 
    if (num % 2 === 0) return false;
    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) return false;
    }
    return true; 
}
console.log(isPrime(11)); 
console.log(isPrime(4)); 
