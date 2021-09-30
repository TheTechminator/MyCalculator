let keys = document.getElementsByClassName( "key" );
let screen = document.getElementById( "idScreen" );

for(let i = 0; i<keys.length; i++) {
    keys[i].addEventListener( "click", ( e ) => {
        calculator( e.target.innerHTML );
    } );
}

const calculator = function ( text ) {
    if( text == "C" ) {
        screen.innerHTML = "";
    } else if( text == "=" ) {
        try {
            let result = eval( screen.innerHTML );
            screen.innerHTML = result;
        } catch( exception ) {
            screen.innerHTML = "ERROR";
        }
        
    } else if( text.includes( "svg" ) ) {
        screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length-1);
    } else {
        if( screen.innerHTML == "ERROR" ) {
            screen.innerHTML = text;
        } else {
            screen.innerHTML += text;
        }
    }
}