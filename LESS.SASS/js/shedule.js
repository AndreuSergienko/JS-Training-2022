if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
} else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

for (let i = 0; i < 5; i++) {
    xmlhttp.open("GET", "Events.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    document.getElementById("NAME" + i).innerHTML =
        xmlDoc.getElementsByTagName("NAME")[i].childNodes[0].nodeValue;
    document.getElementById("DATE" + i).innerHTML =
        xmlDoc.getElementsByTagName("DATE")[i].childNodes[0].nodeValue;
    document.getElementById("TIME" + i).innerHTML =
        xmlDoc.getElementsByTagName("TIME")[i].childNodes[0].nodeValue;
    document.getElementById("SPEAKER" + i).innerHTML =
        xmlDoc.getElementsByTagName("SPEAKER")[i].childNodes[0].nodeValue;
    document.getElementById("DURATION" + i).innerHTML =
        xmlDoc.getElementsByTagName("DURATION")[i].childNodes[0].nodeValue;
}

let radioButtons = document.querySelector(".radio-buttons");
let radioBlocks = document.querySelectorAll(".radio-block");
let table = document.querySelector("#table");
radioButtons.style = "display:inline-flex;flex-direction:column;cursor:pointer";
let labels = document.querySelectorAll(".input-label");
let inputs = document.querySelectorAll(".input");
let spans = document.querySelectorAll(".cell");
radioBlocks.forEach((radioBlock) => {
    radioBlock.addEventListener("click", function (e) {
        radioBlocks.forEach((item) => {
            item.childNodes[1].checked = false;
            item.childNodes[3].style = "font-weight:normal";
            item.childNodes[3].classList.remove('flicker');
            item.classList.remove("active");
        });
        radioBlock.classList.add("active");
        if (e.target.closest(".radio-block")) {
            radioBlock.childNodes[1].checked = true;
            radioBlock.childNodes[3].style = "font-weight:600";
            radioBlock.childNodes[3].classList.add('flicker');
        }
        if (radioButtons.childNodes[1].classList.contains("active")) {
            table.style = "border: 3px dotted rgb(195, 195, 6) ";
            spans.forEach((cell) => {
                cell.style = "padding:4px;font-size:18px";
            });
        } else if (radioButtons.childNodes[3].classList.contains("active")) {
            table.style = "border: 5px dashed #e86e ";
            spans.forEach((cell) => {
                cell.style = "padding:7px;font-size:20px";
            });
        } else if (radioButtons.childNodes[5].classList.contains("active")) {
            table.style = "border:1px solid #000";
            spans.forEach((cell) => {
                cell.style = "padding:0;font-size:16px";
            });
        }
    });
});
