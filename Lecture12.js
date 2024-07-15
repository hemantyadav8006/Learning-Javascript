
// map
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.map((item) => {
//     return item + 10;
// })
// console.log(newNums);


// chaining (map and filter)

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.map((item) => item * 10).map((item) => item + 1)
// const newNums = myNums.map((item) => item * 10).map((item) => item + 1).filter((item) => item >= 40)
// console.log(newNums);



// reduce

// const myNums = [1, 2, 3, 4];

// const myTotal = myNums.reduce((acc, currentVal) => { // normally use in items total in shopping cart or courses
//     // console.log(`Accumilator ${acc} and CurrentVal ${currentVal}`);
//     return acc + currentVal;
// }, 0);

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "JavaScript Course",
        Price: 2999
    },
    {
        itemName: "Java Course",
        Price: 1999
    },
    {
        itemName: "WebDev Course",
        Price: 12999
    },
    {
        itemName: "Mobile Course",
        Price: 12999
    },
    {
        itemName: "AI/ML Course",
        Price: 12999
    }
]

const itemTotal = shoppingCart.reduce((acc, item) => {
    console.log(`Accumilator ${acc} and CurrentVal ${item.Price}`);
    return acc + item.Price;
}, 0);

console.log(itemTotal);