document.addEventListener('DOMContentLoaded', () => {
    
    // Faculty Slider Logic
    const slider = document.getElementById('facultyGrid');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if(slider && prevBtn && nextBtn) {
        nextBtn.addEventListener('click', () => {
            slider.scrollBy({
                left: 320, // Approximate width of a card + gap
                behavior: 'smooth'
            });
        });

        prevBtn.addEventListener('click', () => {
            slider.scrollBy({
                left: -320,
                behavior: 'smooth'
            });
        });
    }

    // Optional: Add simple feature tab switching logic if needed
    const featureItems = document.querySelectorAll('.f-item');
    featureItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all
            featureItems.forEach(f => f.classList.remove('active'));
            // Add to clicked
            this.classList.add('active');
            
            // Note: In a real app, you would also change the image on the right here
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const featureObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const features = entry.target.querySelectorAll('.feature');
            
            if (entry.isIntersecting) {
                // Add the class to start animations
                features.forEach(f => f.classList.add('animate-up'));
            } else {
                // Remove the class so it can play again next time you scroll
                features.forEach(f => f.classList.remove('animate-up'));
            }
        });
    }, { threshold: 0.2 });

    const targetSection = document.querySelector('.features');
    if (targetSection) {
        featureObserver.observe(targetSection);
    }
});


document.querySelectorAll('.f-item').forEach(item => {
    item.addEventListener('click', function() {
        // 1. Manage Active Classes
        document.querySelectorAll('.f-item').forEach(el => el.classList.remove('active'));
        this.classList.add('active');

        // 2. Update Video
        const videoPlayer = document.getElementById('featureVideo');
        const newVideoPath = this.getAttribute('data-video');
        
        // Change the source directly
        videoPlayer.src = newVideoPath;
        
        // CRITICAL: Reload the player to fetch the new file
        videoPlayer.load(); 
        
        // Ensure it plays immediately
        videoPlayer.play();

        // 3. Update Description (Optional but recommended)
        const descContainer = this.querySelector('.f-description');
        const descText = this.getAttribute('data-desc');
        if (descContainer && descText) {
            descContainer.textContent = descText;
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const text = entry.target.querySelector('.founder-text');
            const img = entry.target.querySelector('.founder-img');

            if (entry.isIntersecting) {
                // Add classes when section enters view
                text.classList.add('animate-left');
                img.classList.add('animate-right');
            } else {
                // Remove classes when section leaves view so it can restart
                text.classList.remove('animate-left');
                img.classList.remove('animate-right');
            }
        });
    }, { threshold: 0.1 }); // Lower threshold makes it feel more responsive

    // Target the founder section
    const target = document.querySelector('.founder-section');
    if (target) {
        observer.observe(target);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Reveal
    const facultyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const cards = entry.target.querySelectorAll('.faculty-card');
            if (entry.isIntersecting) {
                cards.forEach(card => card.classList.add('reveal'));
            } else {
                cards.forEach(card => card.classList.remove('reveal'));
            }
        });
    }, { threshold: 0.15 });

    const facultyContainer = document.querySelector('.faculty-slider-container');
    if (facultyContainer) facultyObserver.observe(facultyContainer);

    // 2. Slider Navigation
    const grid = document.getElementById('facultyGrid');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    if (grid && nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            grid.scrollBy({ left: 300, behavior: 'smooth' });
        });
        prevBtn.addEventListener('click', () => {
            grid.scrollBy({ left: -300, behavior: 'smooth' });
        });
    }
});
