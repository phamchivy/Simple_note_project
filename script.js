let notes = [];
//localStorage.setItem('j', '0');

const noteList = document.getElementById('sidebar_noteList');
function addNote() {
    var input = document.getElementById("noteInput");
    var inputValue = input.value;
    if (inputValue !== "") {
                let ul = document.getElementById("noteList");
                let li = document.createElement("li");
                li.appendChild(document.createTextNode("- "));
                li.appendChild(document.createTextNode(inputValue));   
                ul.appendChild(li);
                input.value = "";
            }
}
function displayNotes() {
    noteList.innerHTML = '';
    notes.forEach(note => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = "#"; // Đặt href tùy ý
        a.textContent = note.title;
        li.appendChild(a);
        noteList.appendChild(li);
    });
}
function createNote(){
    var userInput=prompt("Nhập tiêu đề ghi chú");
    if (userInput !== null) {
        if (userInput !== "") {
            const note = { title: userInput} ;
            notes.push(note);
            displayNotes();
            alert("Complete");
            window.open("index.html","_blank");
        } else {
            alert("Vui lòng nhập thông tin hợp lệ!");
            createNote();
        }
}
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
function changePage() {
/**
 *     let storedNumber = localStorage.getItem('j');
    let j = parseInt(storedNumber);
    j++;
 */
//var n=notes.length;
var m = getRandomInt(9, 10);
    var stateObj = { page: "index" };
    var url="Note"+m.toString()+".html";
    history.pushState(stateObj, "Page "+m, url);
}
let input = document.getElementById("noteInput");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("addNote").click();
  }
});
function changeColor(){
    let select=document.getElementById("mySelect");
    let selectValue=select.value;
    let li=document.getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {
        li[i].onclick = function() {
            switch(selectValue){
                case "Red":
                   this.style.color="red";
                   break;
                case "Blue":
                   this.style.color="blue";
                   break;
                case "Green":
                   this.style.color="green";
                   break;
            }
        
    }
    
   
}
}
function select(){
    let li=document.getElementsByTagName("li");
    var arr=[];
    for(let i=0;i<li.length;i++){
        li[i].onclick=function(){
        this.style.color="yellow";
        arr.push(i);
        }
    }

}

/**
 * if(confirm("Do you want to delete note?")){
            li[i].remove();
        }
 */


function deleteAll(){
    var ul = document.getElementById('noteList');
    if(confirm("Do you want to delete all notes?")){
        while (ul.firstChild) {
            ul.removeChild(ul.firstElementChild);
        }
}
}

/**
 * `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trang HTML mới</title>
</head>
<body>
    <h1>Đây là trang HTML mới</h1>
    <p>Xin chào, đây là nội dung của trang HTML mới được tạo bằng JavaScript.</p>
</body>
</html>
`;
 */

/**
              var htmlContent = ``;
            // Tạo đối tượng Blob từ mã HTML
            var blob = new Blob([htmlContent], { type: 'text/html' });
            
            // Tạo URL cho Blob
            var url = URL.createObjectURL(blob);
            
            
            // Chuyển hướng trình duyệt tới URL của trang mới
            window.open(url,"_blank");
            //window.open('index.html', '_blank');
  
 */

