//Methos that compute amount of interest that the user will earn
function compute()
{   
    //Get the data needed for the calculation
    var principal = document.getElementById("principal").value;
    //Verify the amount of money is positive
    if(principal <= 0) {
        alert("Enter a positive number");
        principal.focus();
    }
    else {
    //Get the data needed for the calculation
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;

    //Make the calculation and show it on the page.
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML = `If you deposit <span class="keyword">${principal}</span> </br> at an interest rate of <span class="keyword">${rate}</span>. </br> You will receive an amount of <span class="keyword">${interest}</span></br> in the year <span class="keyword">${year}</span> `;
    }
    
}
//Method to show the rate that the user selected
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        