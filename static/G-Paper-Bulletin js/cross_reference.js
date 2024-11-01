document.addEventListener('DOMContentLoaded', function() {
    // Define the container element where the links will be inserted
    const container = document.querySelector('.paper-links');

    // Check if the container element exists
    if (!container) {
        console.warn('No container element found for paper links.');
        return;
    }

    // Get the topic_id and paper_id from data attributes in the container
    const topicId = parseInt(container.getAttribute('data-topic-id'), 10);
    const paperId = parseInt(container.getAttribute('data-paper-id'), 10);

    // Validate topic_id and paper_id
    if (isNaN(topicId) || isNaN(paperId)) {
        console.warn('Invalid topic_id or paper_id in data attributes.');
        return;
    }

    // Function to fetch and display cross links based on topic_id and paper_id
    function displayPaperCrossLinks(topicId, paperId) {
        console.log(`Fetching JSON data for topic_id: ${topicId}, paper_id: ${paperId}`);

        // Fetch the JSON file containing the topic and paper data
        fetch("/static/G-Paper-Bulletin json/all_topic_list.json")
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

                const topics = data.topics;

                // Find the topic object for the given topic_id
                const topic = topics.find(topic => topic.topic_id === topicId);
                if (!topic) {
                    console.warn(`No topic found for topic_id: ${topicId}`);
                    container.innerHTML = 'No topic found.';
                    return;
                }

                // Find the paper for the given paper_id within the topic
                const paper = topic.papers.find(paper => paper.paper_id === paperId);
                if (!paper) {
                    console.warn(`No paper found for paper_id: ${paperId}`);
                    container.innerHTML = 'No paper found.';
                    return;
                }

                console.log(`Paper found: ${paperId}, Cross Links: ${paper.cross_links.length-1}`);

                // Check if there are any cross links
                if (paper.cross_links && paper.cross_links.length > 1) {
                    // Add the "Links:" heading
                    const headingElement = document.createElement('p');
                    headingElement.textContent = 'Links:';
                    container.appendChild(headingElement);

                    // Iterate through the cross_links and display them
                    paper.cross_links.forEach(([name, url]) => {
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
                console.error("Error loading topic paper data:", error);
            });
    }

    // Call the function with the topic_id and paper_id from data attributes
    displayPaperCrossLinks(topicId, paperId);
});
