$(document).ready(function(){
  $("#acctCreate").click(function(){
    event.preventDefault();
    var userName = $("#userName").val();
    var totalBal = parseInt($("#inDepositAmt").val());
    var user = new userDatabase(userName, totalBal);
  });
});

function userDatabase(userName, totalBal){
  this.userName = userName;
  this.totalBal = totalBal;
}
