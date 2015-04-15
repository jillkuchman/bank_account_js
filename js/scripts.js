var BankAccount = {
    balance: 0,
    withdraw: function(amount) {
        this.balance -= amount;
    },
    deposit: function(amount) {
        this.balance += amount;
    }
};

$(document).ready(function() {
    $('form#create-account').submit(function(event) {
        event.preventDefault();

        var inputted_name = $('input#user-name').val();
        var initial_deposit = parseFloat($('input#initial-deposit').val());

        var newBankAccount = Object.create(BankAccount);
        newBankAccount.username = inputted_name;
        newBankAccount.deposit(initial_deposit);

        // Shows deposit or withdraw form section
        $('#deposit-withdraw').show();

        // Shows account balance section
        $('#account-balance').show();

        $('#current-balance').text(newBankAccount.balance);

        // Hides and resets sign up form section
        $('#splash-page').hide();
        $('input#user-name').val('');
        $('input#initial-deposit').val('');

    });
});
