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
    } else if (currentPath.includes('/posts/') || currentPath.match(/\/\d{4}\/\d{2}\/\d{2}\//)) {
        // Extract post slug from path for blog posts
        const pathSegments = currentPath.split('/');
        const postSlug = pathSegments[pathSegments.length - 2] || pathSegments[pathSegments.length - 1];
        tag = postSlug.replace('.html', '').replace('/', '');
    } else {
        // For other pages, use the path as tag (cleaned)
        tag = currentPath.replace(/^\/|\/$/g, '').replace(/\//g, '-') || 'unknown';
    }
    
    // API endpoint and payload
    const apiUrl = 'https://oux9el92lj.execute-api.eu-west-1.amazonaws.com/production/counter';
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
