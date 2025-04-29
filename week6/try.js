
    // Display current date and time
function updateDateTime() {
  const now = new Date();
  const datetimeElement = document.getElementById('datetime');
  datetimeElement.textContent = now.toLocaleString();
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Evaluate calculation when user presses "Enter"
document.getElementById('display').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    try {
      this.value = eval(this.value);
    } catch {
      this.value = 'Error';
    }
  }
});