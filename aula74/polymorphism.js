// Superclass
function Account(agency, account, balance) {
    this.agency = agency;
    this.account = account;
    this.balance = balance;
}

Account.prototype.withdraw = (function (value) {
    if (this.balance < value) {
        console.log(`I'm Sorry! :( Insufficient Funds.`)
        this.showBalance();
        return;
    }

    this.balance -= value;
    this.showBalance();
});


Account.prototype.deposit = (function (value) {
    this.balance += value;
    this.showBalance();
});


Account.prototype.showBalance = (function () {
    console.log(`Ag./Acc.: ${this.agency}/${this.account}. Your balance is ${this.balance.toFixed(2)} U$D`);
});


function checkingAccount(agency, account, balance, limit) {
    Account.call(this, agency, account, balance);
    this.limit = limit;
}
checkingAccount.prototype = Object.create(Account.prototype);
checkingAccount.prototype.constructor = checkingAccount;
// editing the Superclass method to use differently here (This is a Polymorphism)
checkingAccount.prototype.withdraw = function (value) {
    if (value > (this.balance + this.limit)) {
        console.log(`I'm Sorry! :( Insufficient Funds.`)
        this.showBalance();
        return;
    }

    this.balance -= value;
    this.showBalance();
};

function savingsAccount(agency, account, balance) {
    Account.call(this, agency, account, balance);
}
savingsAccount.prototype = Object.create(Account.prototype);
savingsAccount.prototype.constructor = savingsAccount;




const checkingAccountDemo = new checkingAccount(826, 93763, 0, 100);
checkingAccountDemo.deposit(10);
checkingAccountDemo.withdraw(110);
checkingAccountDemo.withdraw(1);

const savingsAccountDemo = new savingsAccount(826, 93526, 0);
savingsAccountDemo.deposit(10);
savingsAccountDemo.withdraw(10);
savingsAccountDemo.withdraw(1);
