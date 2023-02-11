function checkCashRegister(price,cash,cid){
    let changeDue = cash - price;
    let change = [];
    let currencyUnits = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20 ,100]
    let totalCid = 0;

    //calculate the total amount of cid in the register

    for (let i =  0; i < cid.length; i++){
        totalCid += cid[i][1];
    }

    //check if the cash register has enough money   

    if (changeDue > totalCid ){
        return {status: "INSUFFICIENT_FUNDS", change: []}
    }

    //check if the exact change is aviable

    if (changeDue === totalCid){
        return {status: "CLOSED", change: cid}
    }

    //calculate the change to be returned
    for (let i = cid.length - 1; i >= 0; i--){
        let unitName = cid[i][0]
        let unitValue = currencyUnits[i]
        let unitCount = 0;

        while(changeDue >= unitValue && cid[i][1] >= unitValue){
            changeDue -= unitValue;
            cid[i][1] -= unitValue;
            unitCount++;
            changeDue = Math.round(changeDue * 100) / 100
        }

        if (unitCount > 0){
            change.push([unitName, unitValue * unitCount])
        }
    }

    //check if there is still some change due
    
    if (changeDue > 0){
        return {status: "INSUFFICIENT_FUNDS", change: []}
    }else {
        return {status: 'OPEN', change: change }
    }
}



checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])  