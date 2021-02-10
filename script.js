function calculate(){
    var bill = Number(document.getElementById("billAmount").value);

    var tip = Number(document.getElementById("tipAmount").value);  

    console.log(bill, tip);

    var finalTip = bill*(tip/100);
    
    var finalBill = bill + finalTip;

    var tipNode = document.querySelector(".tip-amount");
    tipNode.innerHTML = "<p>Total tip: $ <small>" + finalTip.toFixed(2) + "</small></p>"

    var billNode = document.querySelector(".bill-amount");
    billNode.innerHTML = "<p>Total bill with tip: $ <small>" + finalBill.toFixed(2) + "</small></p>"

}