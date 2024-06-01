function uuu() {
    var user = String(document.getElementById("userName").value);
        
    localStorage.setItem("username",user);
}


function uueue(){
    var usernam = localStorage.getItem("username");
        
    window.alert(usernam);
}