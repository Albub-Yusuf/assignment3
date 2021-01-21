
// https://github.com/Albub-Yusuf/assignment3

// Kilometers to Meters conversion

function kilometerToMeter(km){

    //check if the input is negative
    if(km < 0){
        return 'unit must be in positive number!!!';
    }else{
        var meters = km * 1000; // as 1000m = 1km
        return meters;
    } 
}


// Budget Calculator

function budgetCalculator(watches,phones,laptops){

    //check if the inputs are negatives or not
    if((watches < 0) || (phones < 0) || (laptops < 0)){
        return 'please insert positive values!!!';
    }else{
        var total = 0;
        var watchesPrice = 50 * watches;
        var phonesPrice  = 100 * phones;
        var laptopsPrice = 500 * laptops;
        total = watchesPrice + phonesPrice + laptopsPrice;
        return total;
    }

}


//Hotel Cost

function hotelCost(days){

    // check if the days are negatives or not
    if(days < 0){
        return 'Days cannot be negative please insert positive value!!!';
    }else{

        var rent = 0;

        if(days <=10){
            console.log('inside 10');
            rent = days * 100;
        }else if(days <=20){
            var upto10Days = 100 * 10;
            var remainingDays = days - 10;
            console.log(remainingDays);
            var upto20Days = 80 * remainingDays;
            console.log(upto20Days);
            rent = upto10Days + upto20Days;
        }else{
            var upto10Days = 100 * 10;
            var upto20Days = 80 * 10;
            var remainingDays  = days - 20;
            var after20Days = 50 * remainingDays;
            rent = upto10Days + upto20Days + after20Days;
        }

    }
    return rent;
}


// Mega Friend

function megaFriend(friends){

    var megaName = friends[0];
    
    for(var i=0; i<friends.length; i++){
        
        if((friends[i].length) > megaName.length){
            megaName = friends[i];
        }

    }
    return megaName;

}


