/*
    Tax rates as per 2020
----------------------------------------------------
0-24000                   |        10%
----------------------------------------------------
On the next 16,666.67     |        15%
----------------------------------------------------
On the next 16,666.67     |        20%
----------------------------------------------------
Over 57,333.33            |        25%
----------------------------------------------------

Personal Relief = 2400

*/

function PayeCalculator(grossSalary, NHIF, NSSF, Others){

    //initialization of variables
    let PersonalRelief = 2400.00;
    let PAYE;
    let netPay;
    let deductions;
    let taxPayable;
 
    //Error checking : the conditions only execute if the parameters entered are positive values.
    if(grossSalary >= 0 && NHIF >= 0 && NSSF >= 0 && Others >= 0){
        if(grossSalary <= 24000){
            PAYE = (grossSalary * 0.1);
        }
        if(grossSalary > 24000 && grossSalary < 40666.68){
            PAYE = ((24000 * 0.1) + ((grossSalary - 24000) * 0.15));
        }
        if(grossSalary > 40666.67 && grossSalary <= 57333.33){
            PAYE = ((24000 * 0.1) + ((40666.67 - 24000) * 0.15) + ((grossSalary - 40666.67) * 0.2));
        }
        if(grossSalary > 57333.33){
            PAYE = ((24000 * 0.1) + ((40666.67 - 24000) * 0.15) + ((57333.32 - 40666.67) * 0.2) + ((grossSalary - 57333.33) * 0.25));
        }

        deductions = (NHIF + NSSF + Others + PAYE)
        netPay = grossSalary - deductions;
        taxPayable = PAYE + PersonalRelief;
        console.log("Your gross salary is: KSH " + grossSalary.toFixed(2) +"\n"+ "Your PAYE is : KSH " + PAYE.toFixed(2) + "\n" + "Your net pay is: KSH " + netPay.toFixed(2) + "\n" +
         "Tax Payable: KSH " + taxPayable.toFixed(2) + "\n" + "NHIF: KSH " + NHIF.toFixed(2) + "\n" + "NSSF: KSH " + NSSF.toFixed(2) + "\n" + "Other deductions: KSH " + Others.toFixed(2));

    }else{
        alert("Values cannot be negative");
    }

}

// The function accepts 4 parameters gross Salary, NHIF, NSSF, Others(Other deductions).

PayeCalculator(44001, 0, 0, 0);