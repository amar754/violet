function validatePassword() {
    var password = document.getElementById("password").value;
    var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if (!passwordPattern.test(password)) {
        alert("يجب أن تحتوي كلمة المرور على الأقل 8 أحرف وتحتوي على حرف كبير وحرف صغير ورقم واحد على الأقل.");
        return false;
    }
    return true;
    
    }
    function togglePasswordVisibility() {
        var passwordInput = document.getElementById('password');
        if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    document.getElementById('toggle-password-btn').textContent = 'إخفاء';
        } else {
    passwordInput.type = 'password';
    document.getElementById('toggle-password-btn').textContent = 'اظهار';
    }
}