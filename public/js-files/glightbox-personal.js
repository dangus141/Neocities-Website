const lightbox = GLightbox({
    selector: '.glightbox',    // Targets your buttons
    hrefAttribute: 'data-href', // Tells GLightbox to use data-href instead of href
    touchNavigation: true,      // Enables swipe on mobile
    loop: true,                 // Allows gallery to loop back to start
    autoplayVideos: true        // Useful if you mix in videos later
    
});