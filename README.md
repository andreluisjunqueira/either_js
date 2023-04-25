### This package is created to handle returns and errors in a better way, using functional concept Either.

#### it facilitates the manner that you handle the api responses 

### Usage:

```js
import { left, right } from '@andrejunqueira/either_js';

async function getUser() {
    //You can return left or right to be hanled

    try {
        const response = await axios.get('https://apiurl.com')

        //Your request validations...
        if (response.status === '400') {
            return left("Something went wrong");
        }
        //Everithing is ok...
        return right(response.data);

    } catch (error) {
        //Something went wrong...
        return left(error);
    }
}

```
### fold
```js
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

myUser.fold(
    (error) => console.log(error),
    (success) => console.log(success)
);



// You can do checks if needed

if(myUser.isLeft()){
    //Do something
}

if(myUser.isRight()){
    //Do something
}


```
### getOrElse

```ts
const myUser = await getUser();

const successValue = myUser.getOrElse((failure) => {
    console.error('Failure + ', failure);
});

```
### getOrNull

```ts
const myUser = await getUser();

const successValue = myUser.getOrNull();

console.log(successValue)
//if something go wrong the successValue will be null
```

### getOrDefault

```ts
const myUser = await getUser();

const successValue = myUser.getOrDefault('Default data !');

console.log(successValue)
//if something go wrong the successValue will be ["Default data !]"

```
### map

```ts

class User {
    name;
    constructor(name) {
        this.name = name;
    }

    printName() {
        console.log(this.name);
    }
}


const myUser = await getUser();

//the success value will be mapped to anything you return from it
const value = myUser.map((value) => new User(value));

//after to be mapped you can use any other methods like fold for example
value.fold(
    (error) => console.log(),
    (user) => user.printName(),
);
```
### mapError

```ts
const myUser = await getUser();

//the same as map, but the error value will be mapped
const value = myUser.mapError((value) => new Error(value));


//after to be mapped you can use any other methods like fold for example
value.fold(
    (error) => console.log(error.message),
    (success) => console.log(success),
);

```

#### Thats it !!