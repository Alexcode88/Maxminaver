function fizzBuzz( limit ){
    if (limit < 0){
        console.log('Please enter a number greater than 0');
    }
    else {
        for( let i = 1; i <= limit; i ++ ){
            if( i % 5 === 0 && i % 3 === 0 ){
                console.log( "FizzBuzz" );
            }
            else{
                if( i % 5 === 0 ){
                    console.log( "Buzz" );
                }
                else{
                    if( i % 3 === 0 ){
                        console.log( "Fizz" );
                    }
                    else{
                        console.log( i );
                   }
                }
        
    }

        }
    }
}
fizzBuzz( -2 );