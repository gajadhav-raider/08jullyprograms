// (function()   //() this Grouping operator and ();is the immediate fun call
// {//This Function Mechanism Called IIFE-Invoke Immidiate Funtion Expression 
//     console.log("My Hobiees are watching south indian Movies");
// })();//IIFE used when our exression is independent and Protect from out side
(function(name)
{//This Function Mechanism Called IIFE-Invoke Immidiate Funtion Expression 
    console.log("My Hobiees are watching south indian Movies"+name);
})(" My Name is Gaurav");
console.log(__dirname);
console.log(__filename);
console.log(exports);
/* (funtion(exports,require,module,__dirname,__filename){
    var c="ravi";
    console.log(c);//In Node js  each file Acts as a module .this module is Wrap into this annonemous Funtion
    //all variable and funstion scope is within file 
})*/