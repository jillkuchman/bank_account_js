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

        // toFixed later....
        var initial_deposit = parseFloat($('input#initial-deposit').val());

        var newBankAccount = Object.create(BankAccount);
        newBankAccount.username = inputted_name;
        newBankAccount.deposit(initial_deposit);

        //Displays user name in header
        $('#account-name').text(', ' + newBankAccount.username + "!");

        // Shows deposit or withdraw form section
        $('#deposit-withdraw').show();

        // Shows account balance section
        $('#account-balance').show();

        $('#current-balance').text('Your bank account\'s balance is: $' + newBankAccount.balance);

        // Hides and resets sign up form section
        $('#splash-page').hide();
        $('input#user-name').val('');
        $('input#initial-deposit').val('');


        $('form#change-amount').submit(function(event) {
            event.preventDefault();

            // declare variables for deposit and withdraw
            var deposit_amount = parseFloat($('input#deposit').val());
            var withdraw_amount = parseFloat($('input#withdraw').val());

            // call methods deposit and withdraw on newBankAccount object
            newBankAccount.deposit(deposit_amount);
            newBankAccount.withdraw(withdraw_amount);

            // Display updated amount in bank account
            $('#current-balance').text('Your bank account\'s balance is: $' + newBankAccount.balance.toFixed(2));

        });

    });
});
