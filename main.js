//document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('contact-form');

//     form.addEventListener('submit', (e) => {
//         e.preventDefault();

//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;
//         const message = document.getElementById('message').value;

//         // Here you can add code to handle the form submission, such as sending the data to a server
//         console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
        
//         alert('Message sent successfully!');
//     });
// });

let slideIndex = 0;
showSlide(slideIndex);

function nextSlide() {
  showSlide(slideIndex += 1);
}

function prevSlide() {
  showSlide(slideIndex -= 1);
}

function showSlide(n) {
  const slides = document.querySelectorAll('.slides img');
  if (n >= slides.length) { slideIndex = 0 }
  if (n < 0) { slideIndex = slides.length - 1 }
  slides.forEach(slide => slide.style.display = 'none');
  slides[slideIndex].style.display = 'block';
}
