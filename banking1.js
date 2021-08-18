function getInputValue(inputID) {
    const inputField = document.getElementById(inputID);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    inputField.value = ''
    return amountValue;
}

function getUpdateValue(totalField, amount) {
    const totalElement = document.getElementById(totalField)
    const totalText = totalElement.innerText;
    const previousAmount = parseFloat(totalText);
    totalElement.innerText = amount + previousAmount;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;

}
function upDateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance()
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}

document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input')
    if (depositAmount > 0) {
        getUpdateValue('deposit-total', depositAmount)
        upDateBalance(depositAmount, true)
    }

})

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withDrawAmount = getInputValue('withdraw-input')
    const currentBalance = getCurrentBalance()
    if (withDrawAmount > 0 && withDrawAmount < currentBalance) {
        getUpdateValue('withdraw-total', withDrawAmount)
        upDateBalance(withDrawAmount, false)
    }
})
