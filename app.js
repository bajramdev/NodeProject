const timeStrGet = date => {
    const milliSecsStr = date.getMilliseconds().toString().padStart(3, '0') ;
    return `${date.toLocaleTimeString('it-US')}.${milliSecsStr}`;
};



var time = (timeStrGet(new Date()))

function log(input){
    console.log(time + " " + input)
}

log("Successfull Checkout")