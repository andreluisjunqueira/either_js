import { left, right } from '@andrejunqueira/either_js';

async function getUser() {
    try {
        const response = await axios.get('https://apiurl.com')

        //Your request validations...
        if (response.status === '400') {
            return left("Something went wrong");
        } else {
            return right("Success !");
        }
        //Everithing is ok...

    } catch (error) {
        //Something went wrong...
        return left(error);
    }
}


class User {
    name;
    constructor(name) {
        this.name = name;
    }

    printName() {
        console.log(this.name);
    }
}

/// USAGE
const myUser = await getUser();

function whenLeft(data) {
    //Do something when go wrong
}

function whenRight(data) {
    // Do somethisn when go right !
}

myUser.fold(whenLeft, whenRight);

//OR

myUser.fold((error) => console.log(error),
    (user) => console.log(user));


const x = myUser.getOrElse((failure) => {
    console.error('Failure + ', failure);
});

const test1 = myUser.getOrDefault('Default')
const test2 = myUser.getOrNull()

console.log('TEST 1 ---->', test1);

console.log('TEST 2 ---->', test2);

const test = myUser.map((value) => new User(value));

const testError = myUser.mapError((value) => new Error(value));

testError.fold((error) => { console.log('ERROR', error) }, (success) => { console.log('Success map', success) });

test.fold((error) => {
    console.log('Error', error);
}, (success) => {
    console.log('Success', success);
});

// You can do checks if needed

if (myUser.isLeft()) {
    //Do something
}

if (myUser.isRight()) {
    //Do something
}




