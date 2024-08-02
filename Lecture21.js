// Promises

/*
A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.
*/

// creating promises

const promise1 = new Promise((resolve, reject) => {
    // Do an async
    // DataBase call, cryptography, network

    setTimeout(() => {
        console.log('Async task is completed!');
        resolve();
    }, 1000)
});


// consuming the promise
promise1.then(() => {
    console.log("Promise Consumed!");
}); // then is direct relation with resolve


new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Task 2 completed");
        resolve();
    }, 1000); // first this function will log then it will call the resolve (everytime)
}).then(() => {
    console.log("Async 2 resolved");
})


const Promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ userName: "Hemant", Email: "hemantyadav8006@gmail.com" })
    }, 1000);
})

Promise3.then((user) => {
    console.log(user);
})


const Promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ userName: "Hemant", Password: "123" });
        } else {
            reject("ERROR! SOMETHING WENT WRONG");
        }
    }, 1000);
})

Promise4.then((user) => {
    console.log(user);
    return user.userName;
}).then((userName) => {
    console.log(userName);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Process either done or rejected");
})



const Promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ userName: "JavaScript", Password: "123" });
        } else {
            reject("ERROR! SOMETHING WENT WRONG");
        }
    }, 1000);
})

// async await : it will wait a bit then it will proceed

async function ConsumePrimise5() {
    try {
        const response = await Promise5
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

ConsumePrimise5()



async function getAllUsers() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(res);
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers();



// fetch in js


// fetch('https://jsonplaceholder.typicode.com/users')
fetch('https://api.github.com/users/hemantyadav8006')
    .then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log("E: ", error);
    })