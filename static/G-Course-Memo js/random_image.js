document.addEventListener('DOMContentLoaded', function() {
    // Get all <td> elements with the class 'random-course-image'
    const tdElements = document.querySelectorAll('.random-course-image');
    
    // Check if any elements are found
    if (tdElements.length === 0) {
        console.warn('No <td> elements found with class "random-course-image".');
        return;
    }
    
    // Fetch the JSON file containing the course and image data
    fetch("/static/G-Course-Memo json/all_course_image_list.json")
        .then(function(response) {
            if (!response.ok) {
                console.error(`Failed to load JSON data: ${response.status}`);
                return;
            }
            console.log("JSON data loaded successfully.");
            return response.json();
        })
        .then(function(data) {
            if (!data) {
                console.error("No data returned from JSON.");
                return;
            }

            const courses = data.courses;

            // Iterate over each <td> element
            tdElements.forEach(tdElement => {
                // Get the course code from the data attribute of each <td>
                const courseCode = tdElement.getAttribute('data-course-code');
                console.log(`Course code from data attribute: ${courseCode}`);

                // Find the course object for the given courseCode
                const course = courses.find(course => course.course_code === courseCode);
                if (!course) {
                    console.warn(`No course found for course code: ${courseCode}`);
                    tdElement.innerHTML = 'No course found.';
                    return;
                }

                const courseId = course.course_id;
                const courseImages = course.images;
                console.log(`Course found: ${courseCode} with ID: ${courseId}, Images: ${courseImages.length}`);

                // Check if there are any images for the course
                if (courseImages.length === 0) {
                    console.warn(`No images found for course code: ${courseCode}`);
                    tdElement.innerHTML = 'No image available';
                    return;
                }

                // Randomly select an image from the course's image list
                const randomImage = courseImages[Math.floor(Math.random() * courseImages.length)];
                const randomImageFile = randomImage.file;
                const activityId = randomImage.activity_id;
                console.log(`Random image selected: ${randomImageFile}, Activity ID: ${activityId}`);

                // Get the image path
                const imageUrl = `/static/G-Course-Memo image/${randomImageFile}`;
                console.log(`Image URL: ${imageUrl}`);

                // Generate the static link URL
                const linkUrl = `/734/g-course-memo/course/${courseId}/activity_id/${activityId}.html`;
                console.log(`Link URL: ${linkUrl}`);

                // Update the td element with the image and link
                tdElement.innerHTML = `
                    <a href="${linkUrl}" target="_blank">
                        <img src="${imageUrl}" alt="${randomImageFile}" class="academic-image">
                    </a>
                `;
                console.log("Image and link added to the DOM.");
            });
        })
        .catch(function(error) {
            console.error("Error loading course image list:", error);
        });
});
