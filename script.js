let students = JSON.parse(localStorage.getItem("students")) || [];


function login(){

let user=document.getElementById("username").value;
let pass=document.getElementById("password").value;

if(user==="admin" && pass==="1234"){

document.getElementById("loginPage").style.display="none";
document.getElementById("adminPanel").style.display="flex";

displayStudents();

}else{

document.getElementById("loginMsg").innerText="Invalid Login";

}

}


function logout(){

location.reload();

}


function addStudent(){

let name=document.getElementById("name").value;
let course=document.getElementById("course").value;
let age=document.getElementById("age").value;
let year=document.getElementById("year").value;

if(name==""||course==""||age==""){
alert("Fill all fields");
return;
}

students.push({name,course,age,year});

localStorage.setItem("students",JSON.stringify(students));

displayStudents();

document.getElementById("name").value="";
document.getElementById("course").value="";
document.getElementById("age").value="";
}


function displayStudents(){

let table=document.querySelector("#studentTable tbody");

table.innerHTML="";

students.forEach((student,index)=>{

let row=`

<tr>

<td>${student.name}</td>
<td>${student.course}</td>
<td>${student.age}</td>
<td>${student.year}</td>

<td>

<button onclick="editStudent(${index})">Edit</button>
<button onclick="deleteStudent(${index})">Delete</button>

</td>

</tr>

`;

table.innerHTML+=row;

});

}


function deleteStudent(index){

students.splice(index,1);

localStorage.setItem("students",JSON.stringify(students));

displayStudents();

}


function editStudent(index){

let student=students[index];

let name=prompt("Edit Name",student.name);
let course=prompt("Edit Course",student.course);
let age=prompt("Edit Age",student.age);
let year=prompt("Edit Year",student.year);

students[index]={name,course,age,year};

localStorage.setItem("students",JSON.stringify(students));

displayStudents();

}


function searchStudent(){

let input=document.getElementById("search").value.toLowerCase();

let rows=document.querySelectorAll("#studentTable tbody tr");

rows.forEach(row=>{

let name=row.children[0].textContent.toLowerCase();

if(name.includes(input)){
row.style.display="";
}else{
row.style.display="none";
}

});

}
