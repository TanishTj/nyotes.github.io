let sub=document.getElementById("subm");
sub.addEventListener("click",()=>{
    console.log("send");
    let name=document.getElementById("inpname");
    let pass=document.getElementById("inppass");
    let emai=document.getElementById("inpemail");
    let users=localStorage.getItem("users");
    if(users==null){
        usersobj=[];
    }
    else{
        usersobj=JSON.parse(users);
    }
    ju=[];
    ju.push(name.value);
    ju.push(emai.value);
    ju.push(pass.value);
    usersobj.push(ju);
    final=usersobj;
    localStorage.setItem("users",JSON.stringify(usersobj));
    name.value="";
    pass.value="";
    emai.value="";
    //alert(`You have signed up sucessfully and your user no is ${Object.keys(final).length} `);
})