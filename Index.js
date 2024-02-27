
function fun()
{
    // var s ="hello";
    var s = document.getElementById("name").value;
     console.log(s);
    var s2 = document.getElementById("pass").value;
    if(/\d/.test(s))
    {
        document.getElementById("name_s").innerText = "*should not contain numbers"
    }
    else{
        document.getElementById("name_s").innerHTML = "";
    }

    if(s2.length<8)
    {
        document.getElementById("pass_s").innerText = "*Must contain more than 8 characters"
    }
    else{
        document.getElementById("pass_s").innerHTML = "";
    }
    // alert("hello world");
}
function reset_btn(){
    document.getElementById("pass").value= "";
    document.getElementById("name").value = "";
}