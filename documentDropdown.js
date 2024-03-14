const dropdown = document.getElementById('redirect-dropdown');
    dropdown.addEventListener('change', function() {
      const selectedURL = this.value;
      if (selectedURL) { // Don't redirect on default option
        window.location.href = selectedURL; 
      }
});
const form = document.getElementById('frm');

form.addEventListener('submit', function(e) {

    const hCaptcha = form.querySelector('textarea[name=h-captcha-response]').value;

    if (!hCaptcha) {
        e.preventDefault();
        alert("Please fill out captcha field")
        return
    }
});