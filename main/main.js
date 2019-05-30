module.exports = function main(inputs) {
    var fee = 6.0;

    if(inputs.distance>2){
    	fee += (inputs.distance - 2) * 0.8;
    	if(inputs.distance > 8) fee += (inputs.distance - 8) * 0.4;
    }

    fee += 0.25 * inputs.parkTime;

    if(fee - parseInt(fee) >= 0.5) fee = parseInt(fee) + 1;
    else fee = parseInt(fee);
    
    return fee;
};
