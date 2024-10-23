// document.addEventListener('DOMContentLoaded', function() {
//     // Get the <td> element with the class 'random-course-image'
//     const tdElement = document.querySelector('.random-course-image');
    
//     // Check if the element exists
//     if (!tdElement) return;
    
//     // Get the course code from the data attribute
//     const courseCode = tdElement.getAttribute('data-course-code');

//     // Function to display a random course image based on the course code
//     function displayRandomCourseImage(courseCode) {
//         // Fetch the JSON file containing the image data
//         fetch("/static/G-Course-Memo json/all_course_image_list.json")
//             .then(function(response) {
//                 return response.json();
//             })
//             .then(function(data) {
//                 const courses = data.courses;
//                 const images = data.images; // Get the images array from the JSON

//                 // Find the course_id for the given courseCode
//                 const course = courses.find(course => course.course_code === courseCode);
//                 if (!course) {
//                     console.warn(`No course found for course code: ${courseCode}`);
//                     tdElement.innerHTML = 'No course found.';
//                     return;
//                 }
//                 const courseId = course.course_id;

//                 // Filter images by the given courseCode
//                 const filteredImages = images.filter(image => image.startsWith(courseCode));

//                 // Check if there are any matching images
//                 if (filteredImages.length === 0) {
//                     console.warn(`No images found for course code: ${courseCode}`);

//                     // Display "No image available" message
//                     tdElement.innerHTML = 'No image available';
//                     return;
//                 }

//                 // Randomly select an image from the filtered array
//                 const randomImageFile = filteredImages[Math.floor(Math.random() * filteredImages.length)];

//                 // Get the image path
//                 const imageUrl = `/static/G-Course-Memo image/${randomImageFile}`;

//                 // Extract course_id, event_id, and image_name from the filename
//                 const [courseCodePart, courseId, eventId, ...restParts] = randomImageFile.split('_');
//                 const imageName = restParts.join(' ').replace('.png', '');

//                 // Generate the static link URL
//                 const linkUrl = `/734/g-course-memo/course/${courseId}/event_id/${eventId}.html`;

//                 // Update the td element with the image and link
//                 tdElement.innerHTML = `
//                     <a href="${linkUrl}" target="_blank">
//                         <img src="${imageUrl}" alt="${imageName}" class="academic-image">
//                     </a>
//                 `;
//             })
//             .catch(function(error) {
//                 console.error("Error loading course image list:", error);
//             });
//     }

//     // Call the function with the courseCode from the data attribute
//     displayRandomCourseImage(courseCode);
// });


// document.addEventListener('DOMContentLoaded', function() {
//     // Get the <td> element with the class 'random-course-image'
//     const tdElement = document.querySelector('.random-course-image');
    
//     // Check if the element exists
//     if (!tdElement) {
//         console.warn('No <td> element found with class "random-course-image".');
//         return;
//     }
    
//     // Get the course code from the data attribute
//     const courseCode = tdElement.getAttribute('data-course-code');
//     console.log(`Course code from data attribute: ${courseCode}`);

//     // Function to display a random course image based on the course code
//     function displayRandomCourseImage(courseCode) {
//         // Fetch the JSON file containing the course and image data
//         console.log("Fetching JSON data...");

//         fetch("/static/G-Course-Memo json/all_course_image_list.json")
//             .then(function(response) {
//                 if (!response.ok) {
//                     console.error(`Failed to load JSON data: ${response.status}`);
//                     return;
//                 }
//                 console.log("JSON data loaded successfully.");
//                 return response.json();
//             })
//             .then(function(data) {
//                 if (!data) {
//                     console.error("No data returned from JSON.");
//                     return;
//                 }

//                 const courses = data.courses;
//                 const images = data.images;

//                 console.log(`Number of courses found: ${courses.length}`);
//                 console.log(`Number of images found: ${images.length}`);

//                 // Find the course_id for the given courseCode
//                 const course = courses.find(course => course.course_code === courseCode);
//                 if (!course) {
//                     console.warn(`No course found for course code: ${courseCode}`);
//                     tdElement.innerHTML = 'No course found.';
//                     return;
//                 }

//                 const courseId = course.course_id;
//                 console.log(`Course found: ${courseCode} with ID: ${courseId}`);

//                 // Filter images by the given courseCode
//                 const filteredImages = images.filter(image => image.startsWith(courseCode));
//                 console.log(`Number of images filtered for course code "${courseCode}": ${filteredImages.length}`);

//                 // Check if there are any matching images
//                 if (filteredImages.length === 0) {
//                     console.warn(`No images found for course code: ${courseCode}`);
//                     tdElement.innerHTML = 'No image available';
//                     return;
//                 }

//                 // Randomly select an image from the filtered array
//                 const randomImageFile = filteredImages[Math.floor(Math.random() * filteredImages.length)];
//                 console.log(`Random image selected: ${randomImageFile}`);

//                 // Get the image path
//                 const imageUrl = `/static/G-Course-Memo image/${randomImageFile}`;
//                 console.log(`Image URL: ${imageUrl}`);

//                 // Extract event_id from the filename
//                 const [courseId_skip, eventId, ...restParts] = randomImageFile.split('_');
//                 const imageName = restParts.join(' ').replace('.png', '');
//                 console.log(`Event ID: ${eventId}, Image Name: ${imageName}`);

//                 // Generate the static link URL
//                 const linkUrl = `/734/g-course-memo/course/${courseId}/event_id/${eventId}.html`;
//                 console.log(`Link URL: ${linkUrl}`);

//                 // Update the td element with the image and link
//                 tdElement.innerHTML = `
//                     <a href="${linkUrl}" target="_blank">
//                         <img src="${imageUrl}" alt="${imageName}" class="academic-image">
//                     </a>
//                 `;
//                 console.log("Image and link added to the DOM.");
//             })
//             .catch(function(error) {
//                 console.error("Error loading course image list:", error);
//             });
//     }

//     // Call the function with the courseCode from the data attribute
//     displayRandomCourseImage(courseCode);
// });

document.addEventListener('DOMContentLoaded', function() {
    // Get the <td> element with the class 'random-course-image'
    const tdElement = document.querySelector('.random-course-image');
    
    // Check if the element exists
    if (!tdElement) {
        console.warn('No <td> element found with class "random-course-image".');
        return;
    }
    
    // Get the course code from the data attribute
    const courseCode = tdElement.getAttribute('data-course-code');
    console.log(`Course code from data attribute: ${courseCode}`);

    // Function to display a random course image based on the course code
    function displayRandomCourseImage(courseCode) {
        // Fetch the JSON file containing the course and image data
        console.log("Fetching JSON data...");

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
                const eventId = randomImage.event_id;
                console.log(`Random image selected: ${randomImageFile}, Event ID: ${eventId}`);

                // Get the image path
                const imageUrl = `/static/G-Course-Memo image/${randomImageFile}`;
                console.log(`Image URL: ${imageUrl}`);

                // Generate the static link URL
                const linkUrl = `/734/g-course-memo/course/${courseId}/event_id/${eventId}.html`;
                console.log(`Link URL: ${linkUrl}`);

                // Update the td element with the image and link
                tdElement.innerHTML = `
                    <a href="${linkUrl}" target="_blank">
                        <img src="${imageUrl}" alt="${randomImageFile}" class="academic-image">
                    </a>
                `;
                console.log("Image and link added to the DOM.");
            })
            .catch(function(error) {
                console.error("Error loading course image list:", error);
            });
    }

    // Call the function with the courseCode from the data attribute
    displayRandomCourseImage(courseCode);
});

