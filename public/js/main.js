const backdrop = document.querySelector('.backdrop');
const sideDrawer = document.querySelector('.mobile-nav');
const menuToggle = document.querySelector('#side-menu-toggle');

function backdropClickHandler() {
  backdrop.style.display = 'none';
  sideDrawer.classList.remove('open');
}

function menuToggleClickHandler() {
  backdrop.style.display = 'block';
  sideDrawer.classList.add('open');
}

backdrop.addEventListener('click', backdropClickHandler);
menuToggle.addEventListener('click', menuToggleClickHandler);


function openCV() {
  console.log("Function is called");
  var pdfUrl = "../Sarthak_Agarwal.pdf";
  window.open(pdfUrl, '_blank')
}

window.onscroll = function () {
  if (pageOffset >= 1000) {
    document.getElementById('backToTop').style.visibility = "visible"
  } else {
    document.getElementById('backToTop').style.visibility = "hidden";
  }
};

function formSubmit() {
  console.log('cyujt fcyc fcycfyvkht');
  var frm = document.getElementById('contact-form');
  frm.submit();
  frm.reset();
}