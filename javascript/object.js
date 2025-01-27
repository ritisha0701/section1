const user = { name: 'Raju', email: 'raju@gmail.com', address: 'lucknow' };

console.log(user);

console.log(user.name);
console.log(user['email']);

user.password = 'abc123'
user.address = 'mumbai'

console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));

const smartphone = {
    brand: 'Samsung',
    model: 'Galaxy s23',
    price: 50000,
    colors: ['black', 'white', 'grey']
};
console.log(smartphone);

//access price of the smartphone4
console.log(smartphone['price']);

//change price of the smartphone to 42000
smartphone.price = 42000
console.log(smartphone);

//acess 2nd color of the smartphone

console.log(smartphone.colors[1]);


//update 1st color to 'red'
smartphone.colors[0] = 'red';
console.log(smartphone.colors);

//add a new color
smartphone.colors.push('green');
console.log(smartphone.colors);

const smartphoneArray = [
    {
        brand: 'Samsung',
        model: 'Galaxy s23',
        price: 50000,
        colors: ['black', 'white', 'grey']
    },
    {
        brand: 'Apple',
        model: 'Iphone 16',
        price: 70000,
        colors: ['white', 'grey']
    },
    {
        brand: 'Oneplus',
        model: 'Nord CE',
        price: 20000,
        colors: ['black', 'grey']
    },
    {
        brand: 'Mi',
        model: 'Note 10',
        price: 24000,
        colors: ['white', 'blue']
    },
    {
        brand: 'Motorola',
        model: 'Edge 50 Fusion',
        price: 25000,
        colors: ['orange', 'blue']
    }
];

//access price of 2nd smartphone
console.log(smartphoneArray[1].price);

//access 2nd color of last smartphone
console.log(smartphoneArray[4].colors[1]);

//add new color in third smartphone
smartphoneArray[2].colors.push('red');
console.log(smartphoneArray[2].colors);

//replace 1st color of 2nd smartphone
console.log(smartphoneArray[1].colors[0] = 'pink');
console.log(smartphoneArray[1].colors);
console.log(smartphoneArray[1]);

//filter all smartphones with price less than 50000

const budgetPhone = smartphoneArray.filter((phone) => {
    return phone.price < 50000;
});
console.log(budgetPhone);

//filter all phones with blue color

//  console.log(['a', 'b', 'c'].includes('d'));

const bluePhones = smartphoneArray.filter( (phone) => {
    return phone.colors.includes('blue');
});
console.log(bluePhones);

const brands = smartphoneArray.map( (phone) => {
    return phone.brand;
});
console.log(brands);

const keyword = 'Samsung';//agar hm model ka name lower case mei rkhegye toh kase match hoga
//hm  tb hm dono trf lower case apply krdegye like this return phone.brand.toLowerCase === keyword.toLowerCase; 
const results = smartphoneArray.filter( (phone) => {
    return phone.brand === keyword; 
});
console.log(results);

const kd = 'app';
const result = smartphoneArray.filter( (phone) => {
    return phone.brand.toLowerCase().includes(kd.toLocaleLowerCase());
});
console.log(result);
