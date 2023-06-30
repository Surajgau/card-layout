

    function formValidate() {
        document.getElementById("h2").innerHTML="PLEASE vbvbvENTER";
      
        let name=document.getElementById("name").value;
        let pass=document.getElementById("pass").value;
        let Cpass=document.getElementById("Cpass").value;
        let mail=document.getElementById("mail").value;
        let ph=document.getElementById("ph").value;

        if(name == "")
        {
            document.getElementById("fname").innerHTML="** Please fill the field **";
            document.getElementById("fname").style.color="red";
        }
if((name.length <= 3) || (name.length > 20))
{
    document.getElementById("fname").innerHTML="** length must be between 3 to 20**";
 }
if(!isNaN(name))
{
    document.getElementById("fname").innerHTML="Number not allow";
}

// ph Number Valiation

if(pass == "")
{
    document.getElementById("fpass").innerHTML="** Please Enter password **";
    document.getElementById("fpass").style.fontSize="10px";
    document.getElementById("fpass").style.color="red";
}
if((pass.length <= 3) || (pass.length > 20))
{
    document.getElementById("fpass").innerHTML="** length must be between 3 to 20**";
 }
 if(Cpass == "")
{
    document.getElementById("fcpass").innerHTML="** Please Enter confirm password **";
    document.getElementById("fcpass").style.fontSize="20px";
    document.getElementById("fcpass").style.color="red";
}
if(pass != Cpass)
{
    document.getElementById("fcpass").innerHTML="** Password Not Matched**";
    document.getElementById("fcpass").style.color="red";
    document.getElementById("fcpass").style.backgroundColor="green";
}


// mail Number Valiation

if(mail == "")
{
    document.getElementById("fmail").innerHTML="** Please Enter mail**";
    document.getElementById("fmail").style.backgroundColor="green";
    document.getElementById("fmail").style.color="red";
}  
if(mail.indexOf('@') <= 0)
{
    document.getElementById("fmail").innerHTML="** @ Invalid position **";
    document.getElementById("fmail").style.backgroundColor="green";
    document.getElementById("fmail").style.color="red";
} 
if((mail.charAt(mail.length-4)!=".")&&(mail.charAt(mail.length-3)!="."))
{
    document.getElementById("fmail").innerHTML="** . Invalid position **";
    document.getElementById("fmail").style.backgroundColor="green";
    document.getElementById("fmail").style.color="red";
 }  

// phone Number Valiation

if(ph == "")
{
    document.getElementById("fph").innerHTML="** Please Enter mobile number**";
    document.getElementById("fph").style.backgroundColor="yellow";
    document.getElementById("fph").style.color="black";
}   
if(isNaN(ph))
{
    document.getElementById("fph").innerHTML="** char no allow**";
    document.getElementById("fph").style.backgroundColor="yellow";
    document.getElementById("fph").style.color="black";
} 
if(ph.length!=10)
{
    document.getElementById("fph").innerHTML="** Please Enter 10 digit number**";
    document.getElementById("fph").style.backgroundColor="brown";
    document.getElementById("fph").style.color="black";
} 
}
let popup=document.getElementById("form");
function openForm(){
    popup.classList.add("open-popUp");
}
function closeForm(){
    popup.classList.remove("open-popUp");
}

