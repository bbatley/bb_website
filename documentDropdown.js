const dropdown = document.getElementById('redirect-dropdown');
    dropdown.addEventListener('change', function() {
      const selectedURL = this.value;
      if (selectedURL) { // Don't redirect on default option
        window.location.href = selectedURL; 
      }
});