// camp input-value function start
function getInputValueById(id){
    let inputValue = document.getElementById(id).value;
    let inputValueNum = parseFloat(inputValue);
    return inputValueNum;
}
// camp input-value function end

// balance function start
function getInnerTextById(id){
    let balanceAmount = document.getElementById(id).innerText;
    let balanceAmountNum = parseFloat(balanceAmount);
    return balanceAmountNum;
}
// balance function end