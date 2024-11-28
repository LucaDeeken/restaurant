export function getStart() {

    const deleteContainer = document.getElementById("content");
    deleteContainer.remove();
    const contentDiv = document.createElement("div");
    contentDiv.id = "content";
    contentDiv.classList.add("contentGridStart");
    const header = document.getElementById("header");
    header.insertAdjacentElement("afterend", contentDiv);
    contentDiv.textContent ="";
}