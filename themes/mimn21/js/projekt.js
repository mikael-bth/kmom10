(function () {

    const body = document.querySelector("body");
    const projektDivs = document.querySelectorAll(".projekt-container");
    projektDivs.forEach(function (div) {
        div.addEventListener("click", onClick);
        function onClick () {
            expandDiv(div);
        }
        function expandDiv (div) {
            const expandBackground = document.createElement("div");
            expandBackground.classList.add("expand-background");
            div.removeEventListener("click", onClick)
            const expandedDiv = div.cloneNode(true);
            expandedDiv.classList.remove("projekt-container")
            expandedDiv.classList.add("expand");
            body.appendChild(expandBackground);
            body.appendChild(expandedDiv);
            expandBackground.addEventListener("click", clearExpand)
            expandedDiv.addEventListener("click", clearExpand)

            function clearExpand () {
                body.removeChild(expandBackground);
                body.removeChild(expandedDiv);
                div.addEventListener("click", onClick);
            }
        }
    });
})();