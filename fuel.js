function fuelEconomy(Ethanol,gasoline){
    let difference = Ethanol/gasoline 
    if (difference <= 0.7){
        console.log(`The most advantageous fuel to supply is Ethanol, costing R$${Ethanol} per liter.`)
    }
    else {
        console.log(`The most advantageous fuel to supply is Gasoline, costing R$${gasoline} per liter.`)
    }
}

fuelEconomy(3.10,4.15)