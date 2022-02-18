// total income 
function incomeAlert() {
    const incomeAlertText = document.getElementById('income-warning');
    return incomeAlertText;
}

function getTotalIncome() {
    const totalIncome = document.querySelector("#income");
    const totalIncomeValue = parseFloat(totalIncome.value);
    if (typeof (totalIncomeValue) == "number" && totalIncomeValue >= 0) {
        incomeAlert().style.display = "none";
        return totalIncomeValue;
    }
    else {
        incomeAlert().style.display = "block";
        incomeAlert().innerText = "Please enter a valid income amount";
    }
}

// expense item

function expensiveItem(warning, input) {
    const warningText = document.querySelector(warning);
    const item = document.querySelector(input).value;
    const itemValue = parseFloat(item);
    if (typeof (itemValue) == "number" && itemValue >= 0) {
        warningText.style.display = "none";
        return itemValue;

    }
    else {

        warningText.style.display = "block";
        warningText.innerText = "Please enter a valid amount";
    }
}

// total expenses 

function getTotalExpenses() {
    const food = expensiveItem("#food-warning", "#food");
    const rent = expensiveItem("#rent-warning", "#rent");
    const clothes = expensiveItem("#clothes-warning", "#clothes");

    if (typeof (food) == "number" && typeof (rent) == "number" && typeof (clothes) == "number") {
        const totalCost = food + rent + clothes;
        return totalCost;
    }
}

// balance 

function balance() {
    const balanceText = document.querySelector(".balance");
    return balanceText;
}

// expenses and balance calculate

document.querySelector(".calculate-btn").addEventListener("click", function () {
    const expensesAlert = document.querySelector("#expense-alert")
    const totalIncome = getTotalIncome();
    const totalExpenses = getTotalExpenses();
    const expensesText = document.querySelector(".total-expenses")
    if (typeof (totalIncome) == "number" && typeof (totalExpenses) == "number" && totalIncome > totalExpenses) {
        expensesText.innerText = totalExpenses;
        expensesAlert.style.display = "none";
        balance().innerText = totalIncome - totalExpenses;
        savingBalance().innerText = "0";
        remainingBalance().innerText = "0";
        percentage().value = "";
        savingAlert().style.display = "none";

    }
    else if (totalIncome < totalExpenses) {
        expensesAlert.style.display = "block";
        expensesAlert.innerText = "Balance is negative. Input again!";
        expensesText.innerText = "0";
        balance().innerText = "0";
        savingBalance().innerText = "0";
        remainingBalance().innerText = "0";
        percentage().value = "";
        savingAlert().style.display = "none";

    }
    else {
        expensesAlert.style.display = "block";
        // expensesAlert.innerText="Please enter a valid amount"
        expensesText.innerText = "0";
        balance().innerText = "0";
        savingBalance().innerText = "0";
        remainingBalance().innerText = "0";
        percentage().value = "";
        savingAlert().style.display = "none";
    }

});

// saving 

function savingBalance() {
    const savingText = document.querySelector(".saving-amount");
    return savingText;
}
function remainingBalance() {
    const remainingText = document.querySelector(".remaining-balance");
    return remainingText;
}
function percentage() {
    const percentageInput = document.querySelector("#percentage");
    return percentageInput;
}

// saving alert 

function savingAlert() {
    const savingAlertText = document.querySelector("#save-alert");
    return savingAlertText;
}

// saving percentage

document.querySelector(".save-button").addEventListener("click", function () {
    const percentageValue = parseFloat(percentage().value);
    const savingBalanceValue = getTotalIncome() * (percentageValue / 100);

    if (typeof (getTotalExpenses()) == "number" && parseFloat(balance().innerText) >= savingBalanceValue) {

        if (percentageValue >= 0 && percentageValue <= 100) {
            savingBalance().innerText = Math.round(savingBalanceValue);

            remainingBalance().innerText = getTotalIncome() - getTotalExpenses() - parseFloat(savingBalance().innerText);
            savingAlert().style.display = "none";
        }
        else {
            savingAlert().style.display = "block";
            savingAlert().innerText = "Please input a number between 0 to 100";
        }
    }
    else if (parseInt(balance().innerText) < savingBalanceValue) {
        savingAlert().style.display = "block";
        savingAlert().innerText = "Your balance is insufficient for Saving";
    }
    else {
        savingAlert().style.display = "block";
        savingAlert().innerText = "Error!";
    }
});
