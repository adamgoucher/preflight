// Generate random text for a variable
// Possible options:
//   length      number indicating how long to make the string (defaults to 8)
//
//   type        string indicating what type of string to create alpha, numeric
//               or alphanumeric (defaults to alphanumeric)
//
//   length|type pipe delimited option list

// from the openqa wiki - http://wiki.openqa.org/display/SIDE/Contributed+Extensions+and+Formats

Selenium.prototype.doRandomString = function( options, varName ) {

    var length = 8;
    var type   = 'alphanumeric';

    var o = options.split( '|' );

    for ( var i = 0 ; i < 2 ; i ++ ) {
        if ( o[i] && o[i].match( /^\d+$/ ) )
            length = o[i];

        if ( o[i] && o[i].match( /^(?:alpha)?(?:numeric)?$/ ) )
            type = o[i];
    }

    switch( type ) {
        case 'alpha'        : storedVars[ varName ] = randomAlpha( length ); break;
        case 'numeric'      : storedVars[ varName ] = randomNumeric( length ); break;
        case 'alphanumeric' : storedVars[ varName ] = randomAlphaNumeric( length ); break;
        default             : storedVars[ varName ] = randomAlphaNumeric( length );
    };
};

function randomNumeric ( length ) {
    return generateRandomString( length, '0123456789'.split( '' ) );
}

function randomAlpha ( length ) {
    var alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split( '' );
    return generateRandomString( length, alpha );
}

function randomAlphaNumeric ( length ) {
    var alphanumeric = '01234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split( '' );
    return generateRandomString( length, alphanumeric );
}

function generateRandomString( length, chars ) {
    var string = '';
    for ( var i = 0 ; i < length ; i++ )
        string += chars[ Math.floor( Math.random() * chars.length ) ];
    return string;
}