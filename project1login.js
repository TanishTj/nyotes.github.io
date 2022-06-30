let sub = document.getElementById("subm");
sub.addEventListener("click", () => {
  console.log("send");
  let name = document.getElementById("inpname");
  let pass = document.getElementById("inppass");
  let emai = document.getElementById("inpemail");
  let users = localStorage.getItem("users");
  usersobj = JSON.parse(users);
  let ind = -1;
  usersobj.forEach(function (element, index) {
    if (
      element[0] == name.value &&
      element[2] == pass.value &&
      element[1] == emai.value
    ) {
      ind = index;
    }
  });
  if (ind != -1) {
    // console.log(ind);
    localStorage.setItem("userno",ind);
  }
  else{
    alert("No such user Registered");
  }

  //usersobj.push(ju);
  //localStorage.setItem("users",JSON.stringify(usersobj));
  name.value = "";
  pass.value = "";
  emai.value = "";
});
