let li = document.querySelectorAll("li");
let links = document.querySelectorAll("a");
let ul = document.querySelector("ul");
ul.style = "padding:0";
li.forEach((l) => {
	l.style = "list-style:none";
});
links.forEach((link) => {
	link.style = "text-decoration:none;font-size:25px;color:#e86";
	link.addEventListener("mouseover", function (e) {
		e.preventDefault();
		link.style =
			"text-decoration:none;font-size:25px;color:rgba(0, 0, 0, 1);transition:all 0.3s ease-out";
	});
	link.addEventListener("mouseleave", function (e) {
		link.style = "text-decoration:none;font-size:25px;color:#e86;transition:all 0.2s ease-out";
	});
});
