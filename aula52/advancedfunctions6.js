// IIFE -> Immediately Invoked Function Expression  -   This class of function has its own scope range, doen't affect global scope
(function(age, weight, height) {

    const lastname = 'Gomez';
    function createName(name)   {
        return name + ' ' + lastname;
    }

    function sayName() {
        console.log(createName('Marina'));
    }

    sayName();
    console.log(age, weight, height)
})(35, 60, 1.70);

/*                  //      -> example of non-threating var declaration outside of the function
(function() {
    const name = 'John';
    console.log(name);
})();

const name = 'Something';

*/