const mobileBtn = document.querySelector(".mobile-buttons");
const menu = document.querySelector(".menu-container");
const overlay = document.querySelector(".overlay");
const list1 = document.querySelector(".list1");
const list2 = document.querySelector(".list2");
const feat = document.querySelector(".feat");
const comp = document.querySelector(".comp");
const arrow1 = document.querySelector(".arrow-icon1");
const arrow2 = document.querySelector(".arrow-icon2");

mobileBtn.addEventListener("click", () => {
	menu.classList.toggle("menu-active");
	mobileBtn.classList.toggle("clicked");
	overlay.classList.toggle("bg-active");
});

feat.addEventListener("click", () => {
	list1.classList.toggle("active");
	arrow1.classList.toggle("a-active");
});

comp.addEventListener("click", () => {
	list2.classList.toggle("active");
	arrow2.classList.toggle("a-active");
});
