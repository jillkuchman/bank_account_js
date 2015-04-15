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

        $('#deposit-withdraw').show();


        // Hides and resets sign up form section
        $('#splash-page').hide();
        $('input#user-name').val('');
        $('input#initial-deposit').val('');

    });
});
