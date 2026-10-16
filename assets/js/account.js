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
