// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
// HAME BAS LIKHE HUE FUNCTION CODE KO BAS PARANTHESIS ME BAND KARNA H VAHI IIFE KEH LAYEGA. AUR CALL FUNCTION KE PEHLE HI CODE KO PARANTHESIS KE ANDAR BLOVK KARDO

// function chai(){
//     console.log('DB CONNECTED')//normal tareeke se call karvana code ko
// }
// chai()

//jo function immedidiately invoked ho jaye aur global scope kepollution se problem hoti h kayi baar uss pollution ko hatane ke liye ham iife use karte h 

( function aur(){ //yaha par 'aur' likha h usse ham names IIFE bolte h kyuki iska naam h 
    console.log('DS CONNECTED TWO')//iife ko use karke call karvaya gaya h iss code ko 
})();//last me semi colon use karenge vo hamare code ko end karega


( (name) => { //yaha par koi name nhi h to isko ham simple 'iife' bolte h 
    console.log(`DB CONNECTED THREE ${name}`)
} )("REHAN") //simple hame isko function ke tarah hi samajhna h 
Z  
//AGAR HAME DO IIFE LIKHNA H TO HAMNE BAS SEMI-COLON HATANA H (,) AUR VO DO IIFE BAN JAYEGA

//thank you