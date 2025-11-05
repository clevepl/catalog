
<script>
// create div, 
const clevnetDIV = document.createElement("div");
clevnetDIV.style.textAlign = "center";

// create the img element and set the stylign
const clevnetIMG = document.createElement("img");
clevnetIMG.setAttribute("alt", "Clevnet");
clevnetIMG.setAttribute("src", "https://search.cpl.org/WebBuilder/ViewImage?size=small&id=160");
clevnetIMG.style.marginTop = "45px";
clevnetIMG.style.height = "50px";

// place img as child inside my div
clevnetDIV.append(clevnetIMG);

const installInfoColumn = document.querySelector("#install-info");
// place div as last-item in that columns
installInfoColumn.append(clevnetDIV);

</script>