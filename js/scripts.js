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

        if (isNaN(initial_deposit)) {
            initial_deposit = 0;
        }

        var newBankAccount = Object.create(BankAccount);
        newBankAccount.username = inputted_name;
        newBankAccount.deposit(initial_deposit);

        //Displays user name in header
        $('#account-name').text(', ' + newBankAccount.username + "!");

        // Shows deposit or withdraw form section
        $('#deposit-withdraw').show();

        // Shows account balance section
        $('#account-balance').show();

        // Sets the color of account balance
        if (newBankAccount.balance >= 5) {
            var balance_color = 'green';
        }
        else if (newBankAccount.balance < 5 && newBankAccount.balance > 1) {
            var balance_color = 'orange';
        }
        else if (newBankAccount.balance <= 1){
            var balance_color = 'red';
        }


        $('#current-balance').html('Your bank account\'s balance is: <span id=\'balance-color\' style= color:' + balance_color + '>$' + newBankAccount.balance.toFixed(2) + '</span>');


        // Hides and resets sign up form section
        $('#splash-page').hide();
        $('input#user-name').val('');
        $('input#initial-deposit').val('');


        $('form#change-amount').submit(function(event) {
            event.preventDefault();

            // declare variables for deposit and withdraw
            var deposit_amount = parseFloat($('input#deposit').val());
            var withdraw_amount = parseFloat($('input#withdraw').val());

            // if user inputs nothing, this will assume zero is being deposited or withdrawn
            if (isNaN(deposit_amount)) {
                deposit_amount = 0;
            }

            if (isNaN(withdraw_amount)) {
                withdraw_amount = 0;
            }

            // if user inputs nothing for both fields, user gets a rude message
            if (deposit_amount === 0 && withdraw_amount === 0) {
                alert('You\'re wasting your time, ya jabroni!');
            }

            // Magical things happen here...
            newBankAccount.deposit(deposit_amount);
            newBankAccount.withdraw(withdraw_amount);

            $('input#deposit').val('');
            $('input#withdraw').val('');

            // Sets the color of account balance
            if (newBankAccount.balance >= 5) {
                var balance_color = 'green';
            }
            else if (newBankAccount.balance < 5 && newBankAccount.balance > 1) {
                var balance_color = 'orange';
            }
            else if (newBankAccount.balance <= 1){
                var balance_color = 'red';
            }


            // Display updated amount in bank account
            $('#current-balance').html('Your bank account\'s balance is: <span id=\'balance-color\' style= color:' + balance_color + '>$' + newBankAccount.balance.toFixed(2) + '</span>');

        });

    });
});
