// Bank Account Prototype
var BankAccount = {
    balance: 0,
    withdraw: function(amount) {
        this.balance -= amount;
    },
    deposit: function(amount) {
        this.balance += amount;
    }
};


// jQuery
$(document).ready(function() {

    var newBankAccount = Object.create(BankAccount);

    var balance_color;
    function balanceColor() {
        // Sets the color of account balance
        if (newBankAccount.balance >= 5) {
            balance_color = 'green';
        }
        else if (newBankAccount.balance < 5 && newBankAccount.balance > 1) {
            balance_color = 'orange';
        }
        else if (newBankAccount.balance <= 1){
            balance_color = 'red';
        }
    }

    function viewUpdateBalance() {
        $('#current-balance').html('Your bank account\'s balance is: <span id=\'balance-color\' style= color:' + balance_color + '>$' + newBankAccount.balance.toFixed(2) + '</span>');
        $('#yen-converter').html('In Yen, your account balance is: &#65509;' + (newBankAccount.balance.toFixed(2) * 119.15).toFixed(2));
    }


    // SUBMIT FORM FOR CREATING ACCOUNT WITH INITIAL BALANCE
    $('form#create-account').submit(function(event) {
        event.preventDefault();

        var inputted_name = $('input#user-name').val();

        var initial_deposit = parseFloat($('input#initial-deposit').val());

        if (isNaN(initial_deposit)) {
            initial_deposit = 0;
        }

        newBankAccount.username = inputted_name;
        newBankAccount.deposit(initial_deposit);

        //Displays user name in header
        $('#account-name').text(', ' + newBankAccount.username + "!");

        // Shows deposit or withdraw form section
        $('#deposit-withdraw').show();

        // Shows account balance section
        $('#account-balance').show();

        // Shows log out button
        $('#logout-btn').show();

        // Sets initial balance color
        balanceColor();

        viewUpdateBalance();

        // Hides and resets sign up form section
        $('#splash-page').hide();
        $('input#user-name').val('');
        $('input#initial-deposit').val('');
    });


    // SUBMIT FORM TO CHANGE ACCOUNT BALANCE
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

        // Sets balance color from deposit/withdraw form
        balanceColor();

        viewUpdateBalance();
    });
});
