import { left, right } from '@andrejunqueira/either_js';

async function getUser() {
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



// You can do checks if needed

if (myUser.isLeft()) {
    //Do something
}

if (myUser.isRight()) {
    //Do something
}




