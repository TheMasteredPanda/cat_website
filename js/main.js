function next() {
    let element = document.getElementById("catimg");
    let splitSrc = element.src.split('/');
    let number = splitSrc[splitSrc.length - 1].split("-")[1].split(".")[0];
    let nextNumber = "";

    if (number === "1") {
        nextNumber = "2";
    }

    if (number === "2") {
        nextNumber = "3";
    }

    if (number === "3") {
        nextNumber = "4"
    }

    if (number === "4") {
        nextNumber = "5";
    }

    if (number === "5") {
        nextNumber = "1";
    }

    element.src = "/cats/cat-" + nextNumber + ".jpeg";
    let title = document.getElementById("title");
    title.innerHTML = "Cat Picture No. " + nextNumber + ".";
}

function previous() {
    let element = document.getElementById("catimg");
    let splitSrc = element.src.split("/");
    let number = splitSrc[splitSrc.length - 1].split("-")[1].split(".")[0];
    let nextNumber = ""

    if (number === "1") {
        nextNumber = "5";
    }

    if (number === "2") {
        nextNumber = "1"
    }

    if (number === "3") {
        nextNumber = "2";
    }

    if (number === "4") {
        nextNumber = "3";
    }

    if (number === "5") {
        nextNumber = "4"
    }

    element.src = "/cats/cat-" + nextNumber + ".jpeg";
    let title = document.getElementById("title");
    title.innerHTML = "Cat Picture No. " + nextNumber + ".";
}

window.onload = function () {
    document.getElementById("previous").addEventListener("click", previous, false);
    document.getElementById("next").addEventListener("click", next, false);
}