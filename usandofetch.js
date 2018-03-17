// usando get para obtener informacion

var url = 'http://date.jsontest.com',
    params = {
        method: 'GET', 
        mode: 'cors', 
        redirect: 'follow',
        headers: new Headers( {
            'Content-Type': 'application/json'
        } )
    };     
 
var request = new Request( url, params );
 
fetch( request ).then( r => r.json() )
    .then( data => console.dir( data ) )
    .catch( e => console.error( 'Something went wrong' ) );