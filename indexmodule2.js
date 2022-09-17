//*************     REQ 1    ****************

/*
    This cunstructor takes the id, name, phonenumber, address,
    loanamount, interest, loantermyears, loantype, description.
    
    The custom method in this calculatedLoanAmount gives the loan amount
*/
function Customer(id,customerName,phoneNumber,address,loanAmount,interest,loanTermYears,loanType,description){
    this.id = id;
    this.customerName = customerName;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.loanAmount = loanAmount;
    this.interest = interest;
    this.loanTermYears = loanTermYears;
    this.loanType = loanType;
    this.description = description;

    /*
        This method calculates the finalloanamount.
        This is calculated based on 3 factors.
        a. loanamount you want to pay per month
        b. interest bank will charge you per month
        c. loantermyears in months

        When these 3 values are given the final loan amount is given
    */
    this.calculatedLoanAmount = function(){
        let pmt = this.loanAmount;
        let i = this.interest/(12*100);
        let n = this.loanTermYears*12;
        let finalAmount = (pmt/i)*(1-1/(1+i)**n);
        return finalAmount;
    }
};


//************************ REQ 2   *****************


/*
    Use this syntax to create new customers and append those objects to loans
*/

let customer1 = new Customer(001,"Abid",8728885542,"Tempe",250,6,48,"Personal","Clean");
let customer2 = new Customer(002,"Alan",8728885543,"Tempe",2000,6,60,"Education","Clean");
let customer3 = new Customer(003,"Mike",8728885545,"Tempe",2250,9,240,"Education","Clean");
let customer4 = new Customer(004,"George",8728885546,"Tempe",18,2,10,"Credit Card","Clean");
let customer5 = new Customer(005,"Sally",8728885547,"Tempe",2,6,6,"Credit Card","Clean");

const loans = [
    customer1,
    customer2,
    customer3,
    customer4,
    customer5
];

//*************    REQ 3     *************************

for(const cus in loans){
    console.log(`The grand total amount for ${loans[cus].customerName} is ${loans[cus].calculatedLoanAmount()}`);
};
