function BankAccount(name, balance){
  this.name = name;
  this.balance = balance;

}

BankAccount.prototype.deposit = function(balance) {
   this.balance = this.balance + balance;
  return this.balance;
}
BankAccount.prototype.withdraw = function(withdraw){
  this.balance = this.balance - withdraw;
  return this.balance;
}




$(document).ready(function() {

  $("#bankForm").submit(function(event){
    event.preventDefault();
  var userName = $("#name").val();
  var userBalance = $("#deposit").val();
  console.log(userName, userBalance);
   newResults = new BankAccount(userName, userBalance);
   $("#depositForm").click(function(){
     var depositInput = parseFloat($("#funds").val());
     console.log(depositInput);
   })
});
});
