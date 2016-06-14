function userDatabase(userName, totalBal) {
  this.userName = userName;
  this.totalBal = totalBal;
}


$(document).ready(function()  {
  // $("#deposit").click(function(){
  //   // alert("hi");
  //   // var deposit = parseInt($("#deposit").val());
  //   // var withdrawal = parseInt($("#withdrawal").val());
  //   // var acctTotal = new userDatabase(userName, totalBal);
  //   // event.preventDefault();
  // });
  $("#acctFunc").hide();
  $("#acctCreate").submit(function(event){
    var userName = $("#userName").val();
    var totalBal = parseInt($("#inDepositAmt").val());
    var user = new userDatabase(userName, totalBal);
    debugger;
    $("#acctFunc").show();
    $("#signUp").hide();
    $("#total").text(user.totalBal);

    event.preventDefault();
  });
})

userDatabase.prototype.deposit = function(deposit){
  return this.totalBal + deposit;
}
