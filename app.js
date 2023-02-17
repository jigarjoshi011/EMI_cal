function calculation() {
    console.log("I am here ")
    let amount = document.querySelector("#input1").value
    let IR = document.querySelector("#input2").value
    let time = document.querySelector("#input3").value
    // console.log(typeof (amount),IR,time);
    let arr = [amount, IR, time];
    console.log(arr);
    let itischecked = true;
    for (let i = 0; i < arr.length; i++) {
        function check() {
            if (arr[i] == "") {
                document.getElementById(`msg${i + 1}`).innerText = "Please Enter Something..."
                itischecked = false;
            }
            else {
                document.getElementById(`msg${i + 1}`).innerText = ""
            }

        }
        check();

    }
    if (itischecked) {
        let loanamount = parseInt(amount)
        let interest = parseInt(IR)
        let duration = parseInt(time)
        var interestPerYear = (loanamount * interest) / 100;
        var monthlyInterest = duration / 12;
        console.log(interestPerYear, monthlyInterest);
        var monthlyPayment = monthlyInterest + (loanamount / duration);
        var totalInterestCost = monthlyInterest * duration;
        var totalRepayment = monthlyPayment * duration;
        // emi = ((amount / time) + interest).toFixed(2);
        const total = ((loanamount / duration) + interest).toFixed(2);
        console.log(monthlyPayment, totalInterestCost, totalRepayment);
        const interesti = (amount * (interest * 0.01)) / duration;

        
        let content = ` 
        <div id="emi-output">
        <div class="result">Monthly Interest:${monthlyInterest}</span>
        </div>
        <div class="result">Monthly Installment: ${total}</span>
        </div>
        <div class="result">Total Repaid Amount: ${totalRepayment}</span>
        </div>
        <div class="result">Total Interest Cost: ${totalInterestCost}</span>
        </div>`
        
        document.getElementById('results').insertAdjacentHTML('beforeend',content)


    }

}