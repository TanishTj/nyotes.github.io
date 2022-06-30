let use = localStorage.getItem("userno");
console.log(use);
let head=document.getElementById("heading");
let userrr=localStorage.getItem("users");
let userr=JSON.parse(userrr);
head.innerText=`Welcome to Nyotes ${userr[use][0]} !! `;
class display {
  show() {
    let me = document.getElementById("msg");
    me.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
    </symbol>
    <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
    </symbol>
    <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
      <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </symbol>
  </svg><div class="alert alert-success d-flex align-items-center" role="alert">
    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
    <div>
      Note Added Sucessfully
    </div>
  </div>`;
    setTimeout(() => {
      me.innerHTML = "";
    }, 3000);
  }
  showdel() {
    let me = document.getElementById("msg");
    me.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
    </symbol>
    <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
    </symbol>
    <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
      <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </symbol>
    <div class="alert alert-danger d-flex align-items-center" role="alert">
    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
    <div>
      Note  Deleted Sucessfully
    </div>
  </div>`;
    setTimeout(() => {
      me.innerHTML = "";
    }, 3000);
  }
}
shownotes();
let adb = document.getElementById("addbtn");
adb.addEventListener("click", addingnote);
function addingnote() {
  let tex = document.getElementById("addtxt");
  let texy = document.getElementById("addtxti");
  let notes = localStorage.getItem("notes");
  if(notes==null)
  notesobj=[];
  else
  notesobj = JSON.parse(notes);
  let arr1=[];
  if (notesobj[use] == null) {
    arr1 = [];
  } else {
    arr1 = notesobj[use];
  }
  arr2 = [];
  arr2.push(tex.value);
  arr2.push(texy.value);
  arr1.push(arr2);
  notesobj[use] = arr1;
  localStorage.setItem("notes", JSON.stringify(notesobj));
  tex.value = "";
  texy.value = "";
  shownotes();
  let arr3 = new display();
  arr3.show();
}
function shownotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  let mp = "";
  if(notesobj[use]==null){
    finalobj=[];
  }
  else
  finalobj = notesobj[use];
  finalobj.forEach(function (element, index) {
    mp += `
      <div class="my-2 mx-2 notecard card" style="width: 18rem">
        <div class="card-body">
          <h3 class="card-title"> ${element[1]}</h3>
          <p class="card-text">${element[0]}</p>
          <button class="btn btn-primary" id="${index}" onclick="deletingnote(this.id)">Delete Note</button>
          <div id="checky" ><input type="checkbox" name="checkbox" onclick="impo(${index})" style="margin-right:4px">Mark as important</div>
          
        </div>
      </div>
    </div>`;
  });
  let ku = document.getElementById("notes");
  let kk = "";
  if (notesobj[use] == null) {
    //ku.innerHTML = mp;
    kk += `<h5>Nothing to show you yet ....</h5>`;
    ku.innerHTML = kk;
  } else {
    //ku.innerHTML='Nothing';
    ku.innerHTML = mp;
  }
}

function deletingnote(index) {
  let notes = localStorage.getItem("notes");
  notesobj = JSON.parse(notes);
  finalobj=notesobj[use];
  finalobj.splice(index, 1);
  notesobj[use]=finalobj;
  localStorage.setItem("notes", JSON.stringify(notesobj));
  //if (notesobj[use]) localStorage.clear();
  shownotes();
  let dis = new display();
  dis.showdel();
}
searchtxt = document.getElementById("searchtxt");
searchtxt.addEventListener("input", inputing);
function inputing() {
  let texr = searchtxt.value.toLowerCase();
  let notecard = document.getElementsByClassName("notecard");
  Array.from(notecard).forEach(function (element) {
    if (
      element
        .getElementsByTagName("p")[0]
        .innerText.toLowerCase()
        .includes(texr)
    ) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}
searchtxti = document.getElementById("searchtxti");
searchtxti.addEventListener("input", inputingy);
function inputingy() {
  let texri = searchtxti.value.toLowerCase();
  let notecard = document.getElementsByClassName("notecard");
  Array.from(notecard).forEach(function (element) {
    if (
      element
        .getElementsByTagName("h3")[0]
        .innerText.toLowerCase()
        .includes(texri)
    ) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}

function impo(index) {
  let notecard = document.getElementsByClassName("notecard")[index];
  let chr = notecard.getElementsByTagName("input")[0];
  if (chr.checked) {
    notecard.setAttribute(
      "style",
      "width:18rem;background: linear-gradient(to top left, magenta, white);"
    );
  } else {
    notecard.setAttribute("style", "width:18rem");
  }
}

