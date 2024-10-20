function copyCitation() {
    // Prevent the default link behavior
    event.preventDefault();
    
    // Select the citation content
    var citationText = document.getElementById("citation-content").innerText;

    // Create a temporary text area element to hold the text
    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = citationText;

    // Append the text area to the document body (it has to be in the DOM to copy)
    document.body.appendChild(tempTextArea);

    // Select the text and copy it to clipboard
    tempTextArea.select();
    document.execCommand("copy");

    // Remove the temporary text area
    document.body.removeChild(tempTextArea);

    // Provide user feedback (optional)
    alert("Citation copied to clipboard!");
}