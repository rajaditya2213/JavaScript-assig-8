//Q1. Create a BankAccount class in JavaScript using Object-Oriented Programming (OOP) principles. The class
//should have methods for depositing, withdrawing, and checking the account balance. Ensure that account
//balances cannot go below zero and that both deposit and withdrawal amounts must be positive.


class BankAccount{

     constructor(accountHolder, initBalance){
          this.accountHolder=accountHolder;
          this.initBalance=initBalance;
     }

     deposit(amount){
          if(amount>0){
             this.initBalance+=amount;
             console.log(`Deposit Rs: ${amount}. New balance Rs:${this.initBalance}`);
          }
          else{
               console.log(`Invalid Deposit amount.Please enter Positive amount Balance`);
          }
     }

     
     withdraw(amount){
          if(amount > 0){
               if(amount <= this.initBalance){
                    this.initBalance-=amount;
                    console.log(`Withdraw Rs:${amount}. New Balance Rs:${this.initBalance}`);
               }else{
                    console.log(`Insufficient funds for widthdrawl`);
               }
          }else{
               console.log(`Invalid widthdraw amount. Please enter Positive amount Balance`);
          }
     }

     checkBalnce(){
          console.log(`Acoount Balance for :${this.accountHolder}
          Rs.${this.initBalance}`);
     }
}


const myAccount=new BankAccount("Aditya raj", 2000);

myAccount.checkBalnce();        //Account Balance for: Aditya Raj Rs:2000

myAccount.deposit(500);       //Deposit Rs: 500. New balance Rs:2500
myAccount.deposit(-400);     //Invalid deposit amount. Please enter Positive amount Balance

myAccount.withdraw(200);     //Withdraw Rs:200. New balance Rs:2300
myAccount.withdraw(1600);    //Widthdraw Rs:1600. new balance Rs:700 

myAccount.withdraw(-7000);  //Invalid withdraw amount.Plese enter Positive amount balance




