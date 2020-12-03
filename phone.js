function createPhoneNumber(numbers){
    let phoneNumber = "";
    for (let num of numbers) {
        phoneNumber += num;
    }
    function formatPhoneNumber(phoneNumber){ // transform a array or a number in a phoneNumber formated string.
        let out = "";
        for (let i = 0; i < phoneNumber.length; i++) {
            if( i === 0 ) { // add the first (
                out += "(";
                out += phoneNumber[i];
            }
            else if ( i === 1 ) { // add the secound (
                out += phoneNumber[i];
                out += ") ";
            }
            else if ( i === 2 ) { // add space to one number
                out += phoneNumber[i];
                out += " ";
            }
            else if ( i === 6) { // add the "-" to separate the last 4 numbers
                out += phoneNumber[i];
                out += "-";
            } else {
                out += phoneNumber[i];
            }
        }
        return out;
    }
    return console.log(formatPhoneNumber(phoneNumber));
}
createPhoneNumber([14996251564]);

