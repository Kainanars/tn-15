function transformToFarenheit(Celsius){
    let Farenheit  =  Celsius * 1.8 + 32;
    console.log(`The temperature is ${Math.round(Farenheit)} °F`)
    return Farenheit;
}

function transformToCelsius(Farenheit){
    let Celsius = (5 * (Farenheit -32) / 9)
    console.log(`The temperature is ${Math.round(Celsius)} °C`)
    return Celsius
}
transformToFarenheit(31)
transformToCelsius(87)