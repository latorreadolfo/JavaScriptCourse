//                                                  -> Example of how lexic scope works
const var1 = 'Fizz';

function sayFizz() {
    console.log(var1);
}

function useLastFunction() {
    const var1 = 'Buzz';
    sayFizz();
}

useLastFunction();