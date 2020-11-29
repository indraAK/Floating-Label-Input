document.getElementById('toggleIcon').addEventListener('click', function () {
   const inputPassword = this.closest('form').querySelector('#password');

   if (inputPassword.type == 'password') {
      inputPassword.setAttribute('type', 'text');
      this.classList.replace('fa-eye', 'fa-eye-slash');
   } else {
      inputPassword.setAttribute('type', 'password');
      this.classList.replace('fa-eye-slash', 'fa-eye');
   }
})