function singup(e) {
    event.preventDefault();
    var name = document.getElementById("ten").value;
    var ho = document.getElementById("ho").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var pass=document.getElementById("pass1").value;
    if (ho === '' || email === '' || phone === '' || name === ''|| pass === '') {
        alert("Vui lòng nhập đầy đủ thông tin!");
    }
else {
    var user = {
        email: email,
        pass:pass
    }; 

    var json = JSON.stringify(user);
    localStorage.setItem(email, json);
    alert("Đăng Kí Thành Công")
    console.log(user)

}
}
function login(e) {
    event.preventDefault();
    var email = document.getElementById("hi").value;
    var pass = document.getElementById("pass").value;
    const user=localStorage.getItem(email);
    const data=JSON.parse(user);

    if (user==null ) {
        alert("Tài Khoản Không Tồn Tại!");
    }
    if( email==''|| pass==''){
        alert("Vui lòng nhập đầy đủ thông tin!");
    }
        
    
    else if(email==data.email && pass==data.pass){
        
        alert(" Đăng Nhập Thành Công!");
        window.location.href = "accout.html"; 

    }
   
}