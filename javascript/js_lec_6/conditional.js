
function isPass(num){

    if(num>33){
        console.log(" pass ")
    }else{
        console.log(" fail ")
    }
    
}

// isPass(94)
// isPass(30)
//  90<num<=100 A++
function gradingSystem(num){

    if(num>90 && num<=100){
        console.log(" Grade is A++ ")
    }
    else if(num>80 && num<=90){
        console.log(" Grade is A+ ")
    }
    else if(num>70 && num<=80){
        console.log(" Grade is A ")
    }
    else if(num>60 && num<=70){
        console.log(" Grade is B+ ")
    }
    else{
        console.log(" Fail ")
    }
    
}

// gradingSystem(80)
// gradingSystem(80.1)

// function isTrue(value){
//     return  value;
// }

// if(isTrue('0')){
//     console.log("this is true")
// }else{
//     console.log("this is false")
// }

function orderHandler(order_status){

    switch(order_status){

        case 'ORDER_PLACE':
            console.log("order placed");
            break;

        case 'ORDER_COMPLETE':
            console.log("order completed");   
            break;             

        case 'ORDER_DISPATCH':
            console.log("order dispatched");
            break;

        case 'ORDER_RECIEVED':
            console.log("order recieved");
            break;

        case 'ORDER_CANCELLED':
        case 'ORDER_FAILED':
            console.log("refund the payment");
            break;

        default:
            console.log("Not handle this event")
    }


}

orderHandler("ORDER_CANCELLED")