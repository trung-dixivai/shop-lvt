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
        name: name,
        email: email,
        ho: ho,
        phone: phone,
        pass:pass
    }; 

    var json = JSON.stringify(user);
    localStorage.setItem(email, json);
    alert("Đăng Kí Thành Công")
}
}
function login(e) {
    event.preventDefault();
    var email1 = document.getElementById("hi").value;
    var pass = document.getElementById("pass").value;
    var user =localStorage.getItem(email1);
    var data=JSON.parse(user)
    if (email1 === '' || pass === '') {
        alert("Vui lòng nhập đầy đủ thông tin!");
    }
    else {
    
        alert(" Đăng Nhập Thành Công!");
        window.location.href = "accout.html"; // Điều hướng đến trang khác


    }
}