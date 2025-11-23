// Page visit counter for spuccia blog
document.addEventListener('DOMContentLoaded', function() {
    // Get current page information
    const currentPath = window.location.pathname;
    
    // Determine the tag based on the current page
    let tag = 'home'; // default
    
    if (currentPath === '/' || currentPath === '/index.html') {
        tag = 'home';
    } else if (currentPath.startsWith('/about')) {
        tag = 'about';
    } else {
        tag = currentPath.replace('.html', '').replace('/', '');
    }
    
    // API endpoint and payload
    const apiUrl = 'https://gndb8jrozc.execute-api.eu-west-1.amazonaws.com/production/counter';
    const payload = {
        id: 'spuccia-blog',
        tag: tag
    };
    
    // Send the counter request
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (!response.ok) {
            console.warn('Page counter request failed:', response.status);
        } else {
            console.log('Page visit recorded for tag:', tag);
        }
    })
    .catch(error => {
        console.warn('Page counter error:', error);
    });
});
