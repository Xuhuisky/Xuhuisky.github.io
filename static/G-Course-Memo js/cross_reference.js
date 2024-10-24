document.addEventListener('DOMContentLoaded', function() {
    // Define the container element where the links will be inserted
    const container = document.querySelector('.activity-links');

    // Check if the container element exists
    if (!container) {
        console.warn('No container element found for activity links.');
        return;
    }

    // Get the course_id and activity_id from data attributes in the container
    const courseId = parseInt(container.getAttribute('data-course-id'), 10);
    const activityId = parseInt(container.getAttribute('data-activity-id'), 10);

    // Validate course_id and activity_id
    if (isNaN(courseId) || isNaN(activityId)) {
        console.warn('Invalid course_id or activity_id in data attributes.');
        return;
    }

    // Function to fetch and display cross links based on course_id and activity_id
    function displayActivityCrossLinks(courseId, activityId) {
        console.log(`Fetching JSON data for course_id: ${courseId}, activity_id: ${activityId}`);

        // Fetch the JSON file containing the course and activity data
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

                // Find the course object for the given course_id
                const course = courses.find(course => course.course_id === courseId);
                if (!course) {
                    console.warn(`No course found for course_id: ${courseId}`);
                    container.innerHTML = 'No course found.';
                    return;
                }

                // Find the activity for the given activity_id within the course
                const activity = course.activities.find(activity => activity.activity_id === activityId);
                if (!activity) {
                    console.warn(`No activity found for activity_id: ${activityId}`);
                    container.innerHTML = 'No activity found.';
                    return;
                }

                console.log(`Activity found: ${activityId}, Cross Links: ${activity.cross_links.length-1}`);

                // Check if there are any cross links
                if (activity.cross_links && activity.cross_links.length > 1) {
                    // Add the "Links:" heading
                    const headingElement = document.createElement('p');
                    headingElement.textContent = 'Links:';
                    container.appendChild(headingElement);

                    // Iterate through the cross_links and display them
                    activity.cross_links.forEach(([name, url]) => {
                        if (name || url) {
                            // Create a <p> element with a link
                            const linkElement = document.createElement('p');
                            const anchorElement = document.createElement('a');
                            anchorElement.href = url;
                            anchorElement.textContent = name;
                            anchorElement.target = '_blank'; // Add target='_blank'
                            
                            linkElement.appendChild(anchorElement);
                            
                            // Add the link to the container
                            container.appendChild(linkElement);
                        }
                    });
                }
            })
            .catch(function(error) {
                console.error("Error loading course activity data:", error);
            });
    }

    // Call the function with the course_id and activity_id from data attributes
    displayActivityCrossLinks(courseId, activityId);
});
