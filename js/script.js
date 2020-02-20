var numeri = [];


for (var i = 1; i < 101; i++) {
    var numero = parseInt(i);
    numeri.push(numero);

    if ( i % 3 === 0  && i % 5 === 0 ) {
        console.log('FlizzBuzz');
    }
    else if (i % 3 === 0) {
        console.log('Flizz');

    }
    else if (i % 5 === 0 ) {
        console.log('Buzz');

    }

    else {
        console.log(i);

    }

}
