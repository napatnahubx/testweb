function criticalCode(){
    throw "throwing an exception";
}

function logError(theException){
    console.log(theException);
}


console.log("\n*******Try..Catch*******");

try{
    criticalCode();
} catch (ex){
    console.log("Got an error");
    logError(ex);
}


console.log("\n*******Throwing in Try..Catch*******\n")

try{
    throw "An exception that is thrown every time";
} catch (ex){
    console.log("Got an error");
    logError(ex);
}


console.log("\n*******Try..Catch..Finally*******\n");

try{
    criticalCode();
} catch (ex){
    console.log("Got an eorror");
    logError(ex);
} finally {
    console.log("Code that alawys will run");
}
function hello(){
    console.log("\n*******Throwing Exception*******\n");
}