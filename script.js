const input = document.getElementById('hero-text-input');
const defaultTexts = ["Welcome to the site!", "Discover amazing content!", "Start your journey here!"];
let currentTextIndex = 0;
let currentIndex = 0;
let typingInterval;
let animationComplete = false; // Flag to check if animation is done

// Function to type text from the array
function typeText() {
    if (currentIndex < defaultTexts[currentTextIndex].length) {
        input.placeholder += defaultTexts[currentTextIndex][currentIndex];
        currentIndex++;
    } else {
        clearInterval(typingInterval); // Clear interval for current text
        currentTextIndex++; // Move to the next text in the array

        if (currentTextIndex < defaultTexts.length) {
            // Start typing the next text after a short delay
            setTimeout(() => {
                currentIndex = 0;
                input.placeholder = ""; // Clear placeholder for the next text
                typingInterval = setInterval(typeText, 150);
            }, 1000); // 1 second delay between texts
        } else {
            // Animation complete after typing all texts
            animationComplete = true;
        }
    }
}

// Start typing animation when input is not focused
function startTypingAnimation() {
    if (!animationComplete) {
        currentIndex = 0;
        input.placeholder = ""; // Clear placeholder text
        typingInterval = setInterval(typeText, 50); // 150ms delay between characters
    }
}

// Stop typing animation when input is focused
function stopTypingAnimation() {
    clearInterval(typingInterval);
    input.placeholder = "Type here...";
}

// Listen for focus and blur events
input.addEventListener('blur', () => {
    if (!animationComplete) startTypingAnimation(); // Start typing when input is not active, unless animation is done
});

input.addEventListener('focus', stopTypingAnimation); // Stop typing when input is active

// Initially start typing when page loads
window.onload = function() {
    startTypingAnimation();
};



const images = document.querySelectorAll('.decor');
const interval = 500; // Set interval time in milliseconds

images.forEach((img, index) => {
    // Fade in two images for each timeout
    setTimeout(() => {
        img.style.opacity = 1; // Fade in the current image
        if (index + 1 < images.length) {
            images[index + 1].style.opacity = 1; // Fade in the next image if it exists
        }
    }, Math.floor(index / 2) * interval); // Adjust delay to fade in two images at once
});

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");

//HIT Carousel
//     var swiper = new Swiper('.hit-wrapper', {
//         slidesPerView: 1,
//         spaceBetween: 10,
//         loop: false,  // Enables continuous loop mode
//         breakpoints: {
//             768: {
//                 slidesPerView: 1,
//             },
//             1024: {
//                 slidesPerView: 3,  // Show 3 cards on screens 1024px and above
//                 spaceBetween: 30,
//             }
//         },
//         // Disable pagination, navigation if not needed
//         pagination: false,
//         navigation: false,
//     });


        // Initialize Swiper for the first slider in '.hit-wrapper'
        var swiper1 = new Swiper('.hit-wrapper', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: false,
        pagination: false,
        navigation: false,
        breakpoints: {
        768: {
        slidesPerView: 1,  // No change for medium screens
    },
        1024: {
        slidesPerView: 2,  // Show 3 slides on larger screens
        spaceBetween: 30,
    }
    }
    });

        // Initialize Swiper for the second slider in '.hit-wrapper2'
        var swiper2 = new Swiper('.hit-wrapper2', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: false,
        pagination: false,
        navigation: false,
        breakpoints: {
        768: {
        slidesPerView: 1,  // No change for medium screens
        },
        1024: {
        slidesPerView: 2,  // Show 3 slides on larger screens
        spaceBetween: 30,
        }
    }
    });



});





    document.addEventListener('DOMContentLoaded', function() {
    const features = document.querySelectorAll('.feature');
    const infoContents = document.querySelectorAll('.info-content');
    const desktopInfoBox = document.querySelector('#desktopInfoBox');

    features.forEach((feature) => {
    feature.addEventListener('click', function() {
    const infoToShow = feature.getAttribute('data-info');
    const infoContent = document.getElementById(infoToShow);

    // Desktop view logic
    if (window.innerWidth > 768) {
    // Remove 'active' class from all features and add it to the clicked one
    features.forEach(f => f.classList.remove('active'));
    feature.classList.add('active');

    // Hide all info contents and show the relevant one
    infoContents.forEach(info => info.classList.remove('active'));
    infoContent.classList.add('active');

    // Show the info box (for desktop)
    desktopInfoBox.style.display = 'block';
}

    // Mobile view logic
    if (window.innerWidth <= 768) {
    // Select the parent feature-wrapper
    const featureWrapper = feature.closest('.feature-wrapper');
    let mobileInfoBox = featureWrapper.querySelector('.mobile-info-box');

    // If the info-box for mobile doesn't exist yet, populate it with content
    if (!mobileInfoBox.innerHTML) {
    mobileInfoBox.innerHTML = infoContent.innerHTML;
}

    // Toggle the mobile info box visibility
    if (featureWrapper.classList.contains('active')) {
    featureWrapper.classList.remove('active');
    mobileInfoBox.style.display = 'none';
} else {
    // Collapse any other active feature
    document.querySelectorAll('.feature-wrapper.active').forEach(fw => {
    fw.classList.remove('active');
    const currentMobileInfo = fw.querySelector('.mobile-info-box');
    currentMobileInfo.style.display = 'none';
});

    // Expand the clicked feature
    featureWrapper.classList.add('active');
    mobileInfoBox.style.display = 'block';
}
}
});
});
});



