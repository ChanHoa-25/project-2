// Login Form
const loginForm = document.querySelector("#login-form");
if (loginForm) {
  const validator = new JustValidate(loginForm);
  validator
    .addField("#email", [
      {
        rule: "required",
        errorMessage: "Vui lòng nhập email của bạn!",
      },
      {
        rule: "email",
        errorMessage: "Email không đúng định dạng",
      },
    ])

    .addField("#password", [
      {
        rule: "required",
        errorMessage: "Vui lòng nhập mật khẩu!",
      },
      {
        rule: "password",
        errorMessage: "Mật khẩu không hợp lệ!",
      },
    ])
    .onSuccess((event) => {
      const email = event.target.email.value;
      const password = event.target.password.value;
      const remeberPassword = event.target.remeberPassword.checked;
      console.log(email);
      console.log(password);
      console.log(remeberPassword);
    });
}
//End Form Login
const registerForm = document.querySelector("#register-form");
if (registerForm) {
  const validator = new JustValidate(registerForm);
  validator
    .addField("#fullName", [
      {
        rule: "required",
        errorMessage: "Vui lòng nhập họ và tên!",
      },
      {
        rule: "minLength",
        value: 5,
        errorMessage: "Họ và tên phải có ít nhất 5 ký tự!",
      },
      {
        rule: "maxLength",
        value: 50,
        errorMessage: "Họ và tên không được vượt quá 50 ký tự!",
      },
    ])
    .addField("#email", [
      {
        rule: "required",
        errorMessage: "Vui lòng nhập email của bạn!",
      },
      {
        rule: "email",
        errorMessage: "Email không đúng định dạng",
      },
    ])

    .addField("#password", [
      {
        rule: "required",
        errorMessage: "Vui lòng nhập mật khẩu!",
      },
      {
        validator: (value) => value.length >= 8,
        errorMessage: "Mật khẩu phải chứa ít nhất 8 ký tự!",
      },
      {
        validator: (value) => /[A-Z]/.test(value),
        errorMessage: "Mật khẩu phải chứa ít nhất 1 chữ cái in hoa!",
      },
      {
        validator: (value) => /[a-z]/.test(value),
        errorMessage: "Mật khẩu phải chứa ít nhất 1 chữ cái thường!",
      },
      {
        validator: (value) => /\d/.test(value),
        errorMessage: "Mật khẩu phải chứa ít nhất 1 chữ số!",
      },
      {
        validator: (value) => /[@$!%*?&]/,
        errorMessage: "Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt1",
      },
    ])
    .addField("#agree", [
      {
        rule: "required",
        errorMessage: "Bạn phải đồng ý với các điều khoản và điều kiện!",
      },
    ])
    .onSuccess((event) => {
      const fullName = event.target.fullName.value;
      const email = event.target.email.value;
      const password = event.target.password.value;
      const agree = event.target.agree.checked;
      console.log(fullName);
      console.log(email);
      console.log(password);
      console.log(agree);
    });
}
//Form forget password
const forgotPasswordForm = document.querySelector("#forgot-password-form");

if (forgotPasswordForm) {
  const validator = new JustValidate(forgotPasswordForm);

  validator
    .addField("#email", [
      {
        rule: "required",
        errorMessage: "Vui lòng nhập email của bạn!",
      },
      {
        rule: "email",
        errorMessage: "Email không đúng định dạng",
      },
    ])
    .onSuccess((event) => {
      const email = event.target.email.value;
      console.log(email);
    });
}

//Form OTP
const otpPasswordForm = document.querySelector("#otp-password-form");

if (otpPasswordForm) {
  const validator = new JustValidate(otpPasswordForm);
  validator
    .addField("#otp", [
      {
        rule: "required",
        errorMessage: "Vui lòng nhập mã OTP!",
      },
    ])
    .onSuccess((event) => {
      const otp = event.target.otp.value;
      console.log(otp);
    });
}
