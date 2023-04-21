
var dayInput = document.querySelector("#day");
var monthInput = document.querySelector("#month");
var yearInput = document.querySelector("#year");
var submit = document.querySelector("#btn");
var error = document.querySelectorAll(".error-display")




var outputYr = document.getElementById("yr")
var outputMonth = document.getElementById("mth")
var outputDay = document.getElementById("days")


var dayTitle = document.getElementById("day-title")
var monthTitle = document.getElementById("month-title")
var yearTitle = document.getElementById("year-title")



submit.addEventListener("click", function(){
    dayError()
    monthError()
    yearError()
  
    
})

function dayError(){
    if (dayInput.value === ""){
        error[0].textContent = "This field is required";
        dayTitle.style.color = "red";
        dayInput.style.border = "red solid 1px";

    }
    else if(dayInput.value>=31){
            error[0].textContent = "Must be a valid date";
            dayTitle.style.color = "red";
            dayInput.style.border = "red solid 1px";
           
    }
    else if(dayInput.value>=31){
        if(monthInput.value == 4 ||monthInput.value == 06 || monthInput.value == 09 || monthInput.value == 11 ){
            error[0].textContent = "Must be a valid date";
            dayTitle.style.color = "red";
            dayInput.style.border = "red solid 1px";
           
        }
    }
    else{
        error[0].textContent = "";
        outputDay.textContent = dayInput.value;
        outputMonth.textContent = 12 - monthInput.value
        dayTitle.style.color = "hsl(0, 1%, 44%)";
        dayInput.style.border = "hsl(0, 1%, 44%) solid 1px";

    }
}


function monthError() {
    if(monthInput.value == 04 || monthInput.value == 06 || monthInput.value == 09 || monthInput.value == 11 && dayInput.value>=31){
     
        error[0].textContent = "Must be a valid date";
        dayTitle.style.color = "red";
        dayInput.style.border = "red solid 1px";

        error[1].textContent = "Must be a valid Month";
        monthTitle.style.color = "red";
        monthInput.style.border = "red solid 1px";


    }else if(monthInput.value===""){
        if(dayInput.value === ""){
            error[0].textContent = "This field is required";
            dayTitle.style.color = "red";
            dayInput.style.border = "red solid 1px";

            error[1].textContent = "this field is required";
            monthTitle.style.color = "red";
            monthInput.style.border = "red solid 1px";


        }else{
            error[1].textContent = "this field is required";
            monthTitle.style.color = "red";
            monthInput.style.border = "red solid 1px";
        }
   
    }
    else if (monthInput.value>12 || monthInput.value == 00 ){
        if(dayInput.value >= 31){
            error[0].textContent = "Must be a valid date";
            dayTitle.style.color = "red";
            dayInput.style.border = "red solid 1px";
            error[1].textContent = "Must be a valid Month";
            monthTitle.style.color = "red";
            monthInput.style.border = "red solid 1px";
        }else{
            error[1].textContent = "Must be a valid Month";
            monthTitle.style.color = "red";
            monthInput.style.border = "red solid 1px";
        }
    

}   else{
        error[1].textContent = "";
        outputMonth.textContent = 12 - monthInput.value
        monthTitle.style.color = "hsl(0, 1%, 44%)";
        monthInput.style.border = "hsl(0, 1%, 44%) solid 1px";
    }
}


function yearError(){
    if (yearInput.value>=2023){
        error[2].textContent = "Must be a valid Year";
        yearTitle.style.color = "red";
        yearInput.style.border = "red solid 1px";
       
    }else{
        error[0].textContent = "";
        dayTitle.style.color = "hsl(0, 1%, 44%)";
        dayInput.style.border = "hsl(0, 1%, 44%) solid 1px";
        error[1].textContent = "";
        monthTitle.style.color = "hsl(0, 1%, 44%)";
        monthInput.style.border = "hsl(0, 1%, 44%) solid 1px";
        error[2].textContent = "";
        outputYr.textContent = 2023 - yearInput.value
        yearTitle.style.color = "hsl(0, 1%, 44%)";
        yearInput.style.border = "hsl(0, 1%, 44%) solid 1px";
    }
}


/*  

         

*/