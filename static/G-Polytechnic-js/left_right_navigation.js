document.addEventListener('keydown', function (event) {
    // These variables will be passed from the Flask template
    const previousUrl = window.previousUrl;
    const nextUrl = window.nextUrl;

    if (event.key === 'ArrowLeft' && previousUrl) {
        window.location.href = previousUrl;
    } else if (event.key === 'ArrowRight' && nextUrl) {
        window.location.href = nextUrl;
    }
});