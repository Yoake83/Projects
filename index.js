const output_year=document.querySelector(".output-years");
const output_month=document.querySelector(".output-months");
const output_day=document.querySelector(".output-days");

const submit_btn=document.querySelector(".submit-btn");
let isvalid=false;
const input_year=document.querySelector("#Years");
const input_month=document.querySelector("#months");
const input_day=document.querySelector("#days");

//const submit_btn=document.querySelector(".submit-btn");
//error element//
const error_year=document.querySelector(".error-years");
const error_month=document.querySelector(".error-months");
const error_day=document.querySelector(".error-days");
submit_btn.addEventListener('click',calculator)
input_day.addEventListener('input',(e)=>{
    if(+input_day.value>31){
        error_day.textContent='Must be a valid data';
        isvalid=false;
        return;
    }
    else{
        isvalid=true;
        error_day.textContent="";
    }
if(+input_day.value===0){
    isvalid=false;
    error_day.textContent="This field is required";
    isvalid=false;
    return;
}
else{
    error_day.textContent="";
}
});
input_month.addEventListener('input',(e)=>{
    if(+input_month.value>12){
        error_month.textContent='Must be a valid data';
        isvalid=false;
        return;
    }
    else{
        isvalid=true;
        error_month.textContent="";
    }
if(+input_month.value===0){
    isvalid=false;
    error_month.textContent="This field is required";
    isvalid=false;
    return;
}
else{
    error_month.textContent="";
}
})
input_year.addEventListener('input',(e)=>{
    if(+input_year.value>2024){
        error_year.textContent='Must be a valid data';
        isvalid=false;
        return;
    }
    else{
        isvalid=true;
        error_year.textContent="";
    }
if(+input_year.value===0){
    isvalid=false;
    error_year.textContent="This field is required";
    isvalid=false;
    return;
}
else{
    error_year.textContent="";
}
})
function calculator(){
    if(isvalid){
        let birthday=`${input_month.value}/${input_day.value}/${input_year.value}`
        console.log(birthday);
        let birthdayobj=new Date(birthday);
       let agediffmill =Date.now()-birthdayobj;
let agedate =new Date(agediffmill);
let ageyears =agedate.getUTCFullYear()-1970;
let agemonth =agedate.getUTCMonth();
let ageday=agedate.getUTCDate()-1;
output_day.textContent=ageday;
output_month.textContent=agemonth;
output_year.textContent=ageyears;
    }
    else{
        alert("Error");
    }
}