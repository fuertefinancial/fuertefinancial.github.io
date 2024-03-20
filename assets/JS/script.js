// HERO 

//1, White BG Fuerte in Stars
var video = document.querySelector("video");
if (window.matchMedia('(prefers-reduced-motion)').matches) {
    video.removeAttribute("autoplay");
    video.pause();
}
//1, White BG Fuerte in Stars


// HERO


// VIDEOS

// VIDEOS


// Contact 
document.getElementById('emailForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    const email = "fuertefintech@icloud.com";
    const nameOrg = document.getElementById('nameOrgInput').value;
    const subject = document.getElementById('subjectInput').value;
    const message = document.getElementById('messageInput').value;

    // Create the mailto link with subject and body
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    // Open the default email client with the mailto link
    window.location.href = mailtoLink;

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
});
// Contact