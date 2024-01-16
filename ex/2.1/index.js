alert(adddatetime(" SALUT "));

function adddatetime(message){
    const dateTimeNow = new Date();
    return(dateTimeNow.toLocaleDateString()  + dateTimeNow.toLocaleTimeString() + message );

}
