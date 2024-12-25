"use strict";
var resumeForm = document.getElementById("resumeForm");
var resumeContent = document.getElementById("resumeContent");
var generateButton = document.getElementById("generateButton");
var downloadButton = document.getElementById("downloadButton");
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var summary = document.getElementById("summary").value;
    var experience = document.getElementById("experience").value;
    var education = document.getElementById("education").value;
    if (!name || !email || !phone || !summary || !experience || !education) {
        alert("Please fill out all fields.");
        return false;
    }
    return true;
}
function generateResume() {
    if (!validateForm())
        return;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var summary = document.getElementById("summary").value;
    var experience = document.getElementById("experience").value;
    var education = document.getElementById("education").value;
    resumeContent.innerHTML = "\n    <h3>".concat(name, "</h3>\n    <p><strong>Email:</strong> ").concat(email, "</p>\n    <p><strong>Phone:</strong> ").concat(phone, "</p>\n    <h4>Summary</h4>\n    <p>").concat(summary, "</p>\n    <h4>Experience</h4>\n    <p>").concat(experience, "</p>\n    <h4>Education</h4>\n    <p>").concat(education, "</p>\n  ");
}
function downloadPDF() {
    window.print();
}
// Event listeners for the buttons
generateButton.addEventListener("click", generateResume);
downloadButton.addEventListener("click", downloadPDF);
