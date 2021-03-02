function alphanumerique(ch)
   {
		ch=ch.toUpperCase();
		i=0;
		verife=true;
		do
		  {
			if (     ((ch.charAt(i)>="A")&& (ch.charAt(i)<="Z")) ||  ((ch.charAt(i)>="0")&& (ch.charAt(i)<="9"))      )
			   {i++;}
			else
			   { verife=false;}
		  }
		while (   (verife) && (i<ch.length)   );
		return verife;
	}
    function alphabetique(ch)
    {
         ch=ch.toUpperCase();
         i=0;
         verife=true;
         do
           {
             if (     (ch.charAt(i)>="A")&& (ch.charAt(i)<="Z")      )
                {i++;}
             else
                { verife=false;}
           }
         while (   (verife) && (i<ch.length)   );
         return verife;
     }


function CheckBoxCheck(){
Check = false;
if ( (document.getElementById("CBN1").checked) || (document.getElementById("CBN2").checked) ||
 (document.getElementById("CBN3").checked) || (document.getElementById("CBN4").checked) ) {
    Check= true;}
    return Check;
     }

function test()                                    
{ 
 var re = /\d+/;
 var be = /[a-zA-Z]/;
 var mail = document.getElementById("email").value ;
 var ch1 = mail.substr(0,mail.indexOf("@"));
 var ch2 = mail.substring(mail.indexOf("@")+1, mail.indexOf("."));
 var ch3 = mail.substr(mail.indexOf(".")+1);
 var score = 0 ;
 cbcheck = false ;
Check = CheckBoxCheck() ;
 AD=new Date();
 AY=AD.getFullYear() ;
 DB=new Date(document.getElementById('date').value) ;
 BY=DB.getFullYear();
 Age = Number(AY)- Number(BY) ;
 Month = (DB.getMonth());
 Day = (DB.getDate());


if ( (re.test(document.getElementById("name").value)) ||  (document.getElementById("name").value.length<=3 ) ){
       alert('Invalid Name.');
       return false;
}
       
if ( (re.test(document.getElementById("pname").value)) ||  (document.getElementById("pname").value.length<=3 ) ) {
       alert('Invalid Last Name.');
       return false;
}

if (( Month.isNaN)  || (Day.isNaN) || (BY.isNan) ){
    alert("Please input a valid date of birth.")
    return false;
}

if (document.getElementById("address").value.length<=10 ) {
    alert('Invalid Address.');
    return false;
}

if ( (be.test(document.getElementById("number").value)) || (document.getElementById("number").value.length != 8 ) || 
( document.getElementById("number").value.charAt(1) < 2) ) {
    alert("Invalid phone Number.");
    return false;
}

if (  (mail.length>50) || (mail.indexOf("@")==-1) || (mail.indexOf(".")==-1)	||  ((mail.indexOf("."))< (mail.indexOf("@"))) ) {
    alert("Invalid Email.");
     return false;
}

if (  (ch1.length < 3) || (! alphanumerique(ch1)) ) {
    alert("Part 1 of the email is Invalid.");
     return false;
}
if  (  (ch2.length < 3) || (! alphanumerique(ch2)) )  {
    alert("Part 2 of the email is Invalid.");
     return false;
}

if (( (ch3.length > 4) || ( ch3.length < 2) ) || (! alphabetique(ch3)) ) {
     alert("Part 3 of the email is Invalid.");
     return false;
 }

if (document.getElementById("default").selected) {
    alert("Please Select a country.");
     return false;
}

if (   (document.getElementById("RB1").checked) == false  && (document.getElementById("RB2").checked)== false   )  {
    alert("Select one of radio buttons in **Fièvre** options.  ");
    return false;
}
else if (document.getElementById("RB1").checked)  {
 score+= 3 ; 
 
}

if (   (document.getElementById("RB3").checked) == false  && (document.getElementById("RB4").checked)== false   )  {
    alert("Select one of radio buttons in **Fatigue** options.  ");
    return false;
}
else if (document.getElementById("RB3").checked)  {
 score+= 2 ; 
}


if (   (document.getElementById("RB5").checked) == false  && (document.getElementById("RB6").checked)== false && (document.getElementById("RB7").checked)== false  )  {
    alert("Select one of radio buttons in **Toux** options.  ");
    return false;
}
else if (document.getElementById("RB5").checked)  {
score+= 3 ; 
}
else if (document.getElementById("RB6").checked)  {
score+= 2 ; 
}

if (   (document.getElementById("RB8").checked) == false  && (document.getElementById("RB9").checked)== false   )  {
    alert("Select one of radio buttons in **Avez-vous eu des difficultés à respirer ou un essoufflement?** question.  ");
    return false;
}
else if (document.getElementById("RB8").checked)  {
 score+= 5 ; 
}

if (   (document.getElementById("RB10").checked) == false  && (document.getElementById("RB11").checked)== false   )  {
    alert("Select one of radio buttons in **Avez-vous eu des douleurs ou pressions thoraciques ?** question.  ");
    return false;
}
else if (document.getElementById("RB8").checked)  {
 score+= 5 ; 
}

if (   (document.getElementById("RB12").checked) == false  && (document.getElementById("RB13").checked)== false   )  {
    alert("Select one of radio buttons in **Avez-vous eu perte de la parole ou du mouvement ?** question.  ");
    return false;
}
else if (document.getElementById("RB12").checked)  {
 score+= 5 ; 
}

if (   (document.getElementById("RB14").checked) == false  && (document.getElementById("RB15").checked)== false   )  {
    alert("Select one of radio buttons in **Avez-vous eu une perte du goût de l’odorat ?** question.  ");
    return false;
}
else if (document.getElementById("RB14").checked)  {
 score+= 2 ; 
}

if (   (document.getElementById("RB16").checked) == false  && (document.getElementById("RB17").checked)== false   )  {
    alert("Select one of radio buttons in **Avez-vous des maux de gorge ?** question.  ");
    return false;
}
else if (document.getElementById("RB16").checked)  {
 score+= 2 ; 
}

if (   (document.getElementById("RB18").checked) == false  && (document.getElementById("RB19").checked)== false   )  {
    alert("Select one of radio buttons in **Avez-vous des maux de tête ?** question.  ");
    return false;
}
else if (document.getElementById("RB18").checked)  {
 score+= 1 ; 
}

if ( ( 0<score) && ( score< 7) && (Age<65) ){
    message= "Vous devirez aller bien, mais faites attention à vous, et n’oubliez pas de respecter les gestes barrières.";
    
}

if ( ( 0<score) && ( score< 7) && (Age>65) ){
   message = "Vous devirez aller bien, mais vous devriez rester confiné chez vous.";
    }


if ( ( 8<score) && ( score< 18) && (CheckBoxCheck()== false) ){
    message= "Vous avez des majeurs symptômes du COVID-19. Vous devriez vous confiner au plus vite, et faire un test de dépistage.";    
    }

if ( ( 8<score) && ( score< 18) && (CheckBoxCheck()== true)  ){
    message ="Précipitez-vous au centre COVID le plus proche pour être pris en charge.";
 }

 if ( score> 18){
    message = "Précipitez-vous au centre COVID le plus proche pour être pris en charge."; 
   }

   
   LocalS = window.localStorage ;
   LocalS.setItem("message",message);
   
   


}
