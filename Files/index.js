const aboutbtn = document.getElementById("aboutBtn");
const contactbtn = document.getElementById("ContactBtn");
const homebtn = document.getElementById("HomeBtn");
const gallerybtn = document.getElementById("GalleryBtn");
const menubtn = document.getElementById("Menubtn");
const btn = document.getElementById("btn");

btn.onclick = function () {
  if (btn === "") {
    alert("please select the menu");
  } else {
    window.location.href = "menu.html";
  }
};

aboutbtn.addEventListener("click", () => {
  window.location.href = "about.html";
});

contactbtn.addEventListener("click", () => {
  window.location.href = "Contact.html";
});
gallerybtn.addEventListener("click", () => {
  window.location.href = "Gallery.html";
});
homebtn.addEventListener("click", () => {
  window.location.href = "Home.html";
});
menubtn.addEventListener("click", () => {
  window.location.href = "Menu.html";
});
