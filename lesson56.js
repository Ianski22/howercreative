
function toggleText() {
  const extraText = document.getElementById("extraText");
  if (extraText.style.display === "none" || extraText.style.display === "") {
    extraText.style.display = "block";  // Show the FAQs
  } else {
    extraText.style.display = "none";  // Hide the FAQs
  }
}
