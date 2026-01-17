const myadmision=document.getElementById("myadmision");
myadmision.addEventListener("click",function(){
    




    let inputnumber=Number(prompt("enter your marks"));
   if(inputnumber>=60){
         console.log("you are admision done");
  alert("Admission form submitted successfully!");
  
        }else{console.log("sorry you are not admision done")
     
        alert("sorry you dont get admision this time");}
   
   
     });
  