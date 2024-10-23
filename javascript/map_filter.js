const nums = [3, 7, 9, 4, 1, 8];

const newNums = nums.map((n) => { return n * 10 });// map me element change ho jayega true false me answer dega
console.log(newNums);

const prices = [33, 45.99, 270, 2300, 120];
// add 18% GST to all prices

console.log(50 * 1.18);
console.log(50 * 0.18 + 50);
const newPrices = prices.map((p) => { return p * 1.18 });
console.log(newPrices);

const evenNums = nums.filter((n) => { return n % 2 === 0 });//filter me element change nhi hoga kn
console.log(evenNums);

const prices2 = [ '₹34.56', '₹123.99', '₹89.7', '₹77.228' ]
//[34,123,89,77]

console.log('₹34.56'.slice(1));
console.log(parseInt('₹34.56'.slice(1)));//agr parseInt use kregye toh hme value integer me milegi

const intPrices = prices2.map( (p) => {return parseInt(p.slice(1))});