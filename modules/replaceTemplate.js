
module.exports = (htmlStr, loan)=>{ // fat arrow function or lambda
    let output = htmlStr.replace(/{%CUSTOMERNAME%}/g, loan.customerName);
    output = output.replace(/{%PHONENUMBER%}/g, loan.phoneNumber);
    output = output.replace(/{%ADDRESS%}/g, loan.address);
    output = output.replace(/{%LOANAMOUNT%}/g, loan.loanAmount);
    output = output.replace(/{%INTEREST%}/g, loan.interest);
    output = output.replace(/{%LOANTERMSYEARS%}/g, loan.loanTermYears);
    output = output.replace(/{%LOANTYPE%}/g, loan.loanType);
    output = output.replace(/{%DESCRIPTION%}/g, loan.description);
    let ans = loan.loanAmount*loan.loanTermYears
    output = output.replace(/{%ANS%}/g, loan.ans);
    return output;
}