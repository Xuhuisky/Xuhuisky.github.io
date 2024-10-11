function displayRandomImage() {
    // Fetch the JSON file containing the image data
    fetch("/static/G-GRE-Verbal json/image_list.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(images) {
            // Randomly select an image from the array
            const randomImageFile = images[Math.floor(Math.random() * images.length)];

            // Extract the instance_id and image_name from the filename
            const [instanceId, ...nameParts] = randomImageFile.split('_');
            const imageName = nameParts.join(' ').replace('.png', '');

            // Get the image path and link URL
            const imageUrl = `/static/G-GRE-Verbal image/${randomImageFile}`;
            const linkUrl = `/instance/${instanceId}`;

            // Update all elements with the class '.random-image'
            document.querySelectorAll('.random-image').forEach(function(element) {
                element.innerHTML = `
                <li>
                    <a href="/g-gre-verbal${linkUrl}.html">
                        <img src="${imageUrl}" alt="Image for ${imageName}" style="width: 600px; height: auto;">
                    </a>
                    <p>${imageName}</p>
                </li>
                `;
            });
        })
        .catch(function(error) {
            console.error("Error loading image list:", error);
        });
}

// Run the function after the DOM content is loaded
document.addEventListener('DOMContentLoaded', displayRandomImage);