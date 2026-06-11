document.addEventListener('DOMContentLoaded', () => {

    // 1. Hero Image Fading Slider
    const heroBackgrounds = ['bg-1', 'bg-2', 'bg-3'];
    let currentBgIndex = 0;

    setInterval(() => {
        // Hide current image
        const currentElement = document.getElementById(heroBackgrounds[currentBgIndex]);
        if (currentElement) currentElement.style.opacity = '0';
        
        // Move to next image
        currentBgIndex = (currentBgIndex + 1) % heroBackgrounds.length;
        
        // Show next image
        const nextElement = document.getElementById(heroBackgrounds[currentBgIndex]);
        if (nextElement) nextElement.style.opacity = '1';
    }, 4000); // Changes image every 4 seconds


    // 2. Flash Sale Countdown Timer
    function startTimer(duration, display) {
        let timer = duration, hours, minutes, seconds;
        setInterval(function () {
            hours = parseInt(timer / 3600, 10);
            minutes = parseInt((timer % 3600) / 60, 10);
            seconds = parseInt(timer % 60, 10);

            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            if (display) {
                display.textContent = hours + ":" + minutes + ":" + seconds;
            }

            if (--timer < 0) {
                timer = duration; // restart for demo purposes
            }
        }, 1000);
    }

    let fiveHours = 60 * 60 * 5; // 5 hours in seconds
    let timerDisplay = document.querySelector('#timer');
    if (timerDisplay) {
        startTimer(fiveHours, timerDisplay);
    }


    // 3. Add to Cart Interactivity (Beautiful Top Toast & Cart Badge)
    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    const toast = document.getElementById('toast');
    const cartBadge = document.querySelector('.nav-icons .badge');

    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Show Beautiful Top Toast
            if (toast) {
                toast.classList.add('show');
                
                // Hide Toast after 3 seconds
                setTimeout(() => {
                    toast.classList.remove('show');
                }, 3000);
            }
            
            // Update Cart Badge Number
            if (cartBadge) {
                let currentCount = parseInt(cartBadge.innerText);
                cartBadge.innerText = currentCount + 1;
                
                // Add bounce animation to badge
                cartBadge.style.transform = 'scale(1.5)';
                cartBadge.style.transition = 'transform 0.2s ease';
                setTimeout(() => { cartBadge.style.transform = 'scale(1)'; }, 200);
            }
        });
    });

    // 4. Back to Top Button Functionality
    const backToTopBtn = document.getElementById('backToTopBtn');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
            backToTopBtn.style.transform = 'translateY(0)';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
            backToTopBtn.style.transform = 'translateY(20px)';
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

});