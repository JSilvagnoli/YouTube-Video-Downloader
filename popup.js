// Wait for the current tab to load
document.addEventListener('DOMContentLoaded', function () {
    // Add an event listener and wait for the download button to be clicked
    document.getElementById('downloadButton').addEventListener('click', function () {
        // Using the Chrome extension API get the current active tab in the current window
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            // Get the current tab's url
            const currentTab = tabs[0];
            const currentUrl = currentTab.url;
            console.log('Current Tab URL:', currentUrl);

            // Send a POST request to the Flask backend point /api/downloadVideo (function in the python script)
            fetch('http://127.0.0.1:5000/api/downloadVideo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ url: currentUrl })
            })
            // Handles the response
                .then(response => response.json())
                .then(data => {
                    document.getElementById('response').innerText = data.message;
                })
                .catch(error => console.error('Error:', error));
        });
    });
});

