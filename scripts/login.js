if(localStorage.getItem('id')!=null&&localStorage.getItem('id')!=undefined){
    window.location.href='/home.html';
}
window.onload=function(){
    let loginBtn = document.getElementById("login");
    loginBtn.onclick=login;
}
function login(){
    let userName=document.getElementById('uEmail').value;
    let password=document.getElementById('name').value;
    let isChecked= document.getElementById('remMe').checked;
    if(userName==''||userName==null||userName==undefined){
       
        document.getElementById('uError').innerHTML="User Name should not be empty";
        document.getElementById('uError').style.color="red";
        
    }
    else if(password==''||password==null||password==undefined){
        
        document.getElementById('pwdError').innerHTML="Password should not be empty";
        document.getElementById('pwdError').style.color="red";
        
    }
    else{
        fetch('http://localhost:8083/api/users',{
            method:"get",
        }).then(response=>response.json())
          .then(data=>{
                for (const [key, value] of Object.entries(data)) {
                 if(value.username==userName){
                    if(isChecked==true){
                        localStorage.setItem("id",value.id);
                        localStorage.setItem("name",value.name);
                    }
                    else{
                        sessionStorage.setItem("id",value.id);
                        sessionStorage.setItem("name",value.name);
                    }
                    window.location.href="/home.html";
                    break;
                 }
                 else{
                    document.getElementById('uError').innerHTML="Invalid User Name or password";
                    document.getElementById('uError').style.color="red";
                 }
            }
            
          });
    }
   
}