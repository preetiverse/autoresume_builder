function addnewWEfield() {
    // console.log("Adding new field")   ;

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("wefield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");


    let weob = document.getElementById("we");
    let weaddbuttonob = document.getElementById("weaddbutton");

    weob.insertBefore(newNode, weaddbuttonob);

}

function addnewAQfield() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");


    let aqob = document.getElementById("aq");
    let aqaddbuttonob = document.getElementById("aqaddbutton");

    aqob.insertBefore(newNode, aqaddbuttonob);

}
//generating cv
function generateCV() {
    // console.log("generating cv");
    let namefield = document.getElementById("namefield").value;
    let nameT1 = document.getElementById('nameT1');
    nameT1.innerHTML = namefield;
    document.getElementById("nameT2").innerHTML = namefield;
    //contact
    document.getElementById("contactT").innerHTML = document.getElementById("contactfield").value;
    //address
    document.getElementById("adressT").innerHTML = document.getElementById("addressfield").value;
    document.getElementById("fbT").innerHTML = document.getElementById("fbfield").value;
    document.getElementById("instaT").innerHTML = document.getElementById("instafield").value;
    document.getElementById("linkedT").innerHTML = document.getElementById("linkedfield").value;
    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

    let wes = document.getElementsByClassName("wefield");
    let str = "";
    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML = str;


    let aqs = document.getElementsByClassName('aqfield');
    let str1 = '';
    for (let e of aqs) {
        str1 += `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML = str1;


    document.getElementById("cv-form").style.display = "none";
    document.getElementById("image").style.display = "none";
    document.getElementById("title").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
}