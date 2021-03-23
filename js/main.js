    function PayeCalculator(grossSalary, NHIF, NSSF, Others){

        //initialization of variables
        let PersonalRelief = 2400.00;
        let firstRate = 0.1;
        let secondRate = 0.25;
        let thirdRate = 0.3;
        let PAYE;
        let netPay;
        let deductions;
        let taxPayable;
     
        //Error checking : the conditions only execute if the parameters entered are positive values.
        if(grossSalary >= 0 && NHIF >= 0 && NSSF >= 0 && Others >= 0){
            if(grossSalary <= 24000){
                PAYE = (grossSalary * firstRate);
            }
            if(grossSalary > 24000 && grossSalary < 32334){
                PAYE = ((24000 * firstRate) + ((grossSalary - 24000) * secondRate));
            }
            if(grossSalary > 32333){
                PAYE = ((24000 * firstRate) + ((32333 - 24000) * secondRate) + ((grossSalary - 32333) * thirdRate));
            }
    
            deductions = (NHIF + NSSF + Others + PAYE)
            netPay = grossSalary - deductions;
            taxPayable = PAYE + PersonalRelief;

            //Placing the results within the div with id("result_footer")
            let result_footer = document.getElementById("result_footer");
            let result_para = document.createElement("p");
            result_para.innerText = "Your gross salary is: KSH " + grossSalary.toFixed(2) +"\n"+ "Your PAYE is : KSH " + PAYE.toFixed(2) + "\n" + "Your net pay is: KSH " + netPay.toFixed(2) + "\n" + "Tax Payable: KSH " + taxPayable.toFixed(2) + "\n" + "NHIF: KSH " + NHIF.toFixed(2) + "\n" + "NSSF: KSH " + NSSF.toFixed(2) + "\n" + "Other deductions: KSH " + Others.toFixed(2);
            result_footer.appendChild(result_para);
    
        }else{
            alert("Please enter positive values in ALL the provided fields");
        }
    
    }

    function calculate(){
        
        //Capturing data from the input fields
        const grossSalary = parseFloat(document.getElementById("gross_salary").value);
        const NHIF = parseFloat(document.getElementById("NHIF").value);
        const NSSF = parseFloat(document.getElementById("NSSF").value);
        const Others = parseFloat(document.getElementById("other").value);

        PayeCalculator(grossSalary, NHIF, NSSF, Others);
        
    }