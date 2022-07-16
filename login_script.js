document.getElementsByClassName("sign-in")[0].onclick=()=>{
    console.log("enetered");
    var text_match=/@zoho.com/
    var text_password=/nithish/
    var user_name=document.getElementsByClassName("user")[0].value;
    var user_password=document.getElementsByClassName("password")[0].value;
    if(validate(user_name,text_match)!==true || validate(user_password,text_password)!==true)
        document.getElementsByClassName("invalid")[0].setAttribute("style","visibility:visible;color:red");
    else
    {
        console.log("else part");
        document.getElementsByClassName("link_to_button")[0].href="index.html"
    }
}
function validate(user_name,text_match){
    console.log(user_name);
    console.log(text_match);
    if(user_name.match(text_match))
        return true;
    return false;
}