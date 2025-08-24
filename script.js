// Initialize AOS
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 1000, once: true, offset: 100 });
    }
}

// Smooth scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// Scroll to top button
function initScrollToTop() {
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (scrollTopBtn) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });
    }
}

// Newsletter subscription
function initNewsletter() {
    const newsletterBtn = document.querySelector('.btn-primary');
    if (newsletterBtn) {
        newsletterBtn.addEventListener('click', function () {
            const emailInput = document.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            }
        });
    }
}

// Contact form
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you within 24 hours.');
            this.reset();
        });
    }
}

// General forms
function initForms() {
    document.querySelectorAll('form').forEach(form => {
        if (!form.id || form.id !== 'contactForm') {
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
            });
        }
    });
}

// Navbar scroll effect
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        });
    }
}

// Carousel functionality
function initCarousel() {
    const carousel = document.getElementById('heroCarousel');
    const progressBar = document.querySelector('.carousel-progress .progress-bar');
    
    if (carousel && progressBar) {
        let progressInterval;
        
        function startProgress() {
            const duration = 5000;
            const interval = 50;
            const increment = (interval / duration) * 100;
            let progress = 0;
            
            progressInterval = setInterval(() => {
                progress += increment;
                if (progress <= 100) {
                    progressBar.style.width = progress + '%';
                } else {
                    clearInterval(progressInterval);
                }
            }, interval);
        }
        
        function resetProgress() {
            clearInterval(progressInterval);
            progressBar.style.width = '0%';
            startProgress();
        }
        
        startProgress();
        
        carousel.addEventListener('slid.bs.carousel', resetProgress);
        carousel.addEventListener('mouseenter', () => clearInterval(progressInterval));
        carousel.addEventListener('mouseleave', startProgress);
    }
}

// Testimonial carousel
function initTestimonialCarousel() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (testimonialCards.length === 0) return;
    
    let currentIndex = 0;
    
    function showTestimonial(index) {
        testimonialCards.forEach(card => {
            card.classList.remove('active');
            card.style.display = 'none';
        });
        
        if (testimonialCards[index]) {
            testimonialCards[index].classList.add('active');
            testimonialCards[index].style.display = 'block';
        }
        
        if (prevBtn && nextBtn) {
            prevBtn.disabled = index === 0;
            nextBtn.disabled = index === testimonialCards.length - 1;
        }
    }
    
    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonialCards.length;
        showTestimonial(currentIndex);
        
        // Synchronize video carousel
        if (window.videoCarouselNextSlide) {
            window.videoCarouselNextSlide();
        }
    }
    
    function prevTestimonial() {
        currentIndex = (currentIndex - 1 + testimonialCards.length) % testimonialCards.length;
        showTestimonial(currentIndex);
        
        // Synchronize video carousel
        if (window.videoCarouselPrevSlide) {
            window.videoCarouselPrevSlide();
        }
    }
    
    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', nextTestimonial);
        prevBtn.addEventListener('click', prevTestimonial);
    }
    
    // Remove auto-advancement - testimonials will be controlled by video carousel
    // setInterval(nextTestimonial, 5000);
    showTestimonial(0);
    
    // Expose functions globally for video carousel synchronization
    window.showTestimonial = showTestimonial;
    window.nextTestimonial = nextTestimonial;
    window.prevTestimonial = prevTestimonial;
}

// Package filtering
function initPackageFiltering() {
    const categoryTabs = document.querySelectorAll('.packagespage_category-tab');
    const packages = document.querySelectorAll('.packagespage_package-item');
    
    console.log('Found category tabs:', categoryTabs.length); // Debug log
    console.log('Found packages:', packages.length); // Debug log
    
    // Initialize all packages as visible
    packages.forEach(package => {
        package.classList.add('show');
        package.style.display = 'block';
    });
    
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function (e) {
            e.preventDefault();
            console.log('Tab clicked:', this.textContent); // Debug log
            
            document.querySelectorAll('.packagespage_category-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            filterPackages(this.textContent.toLowerCase());
        });
    });
}

// Make filterPackages globally accessible for testing
window.filterPackages = function(category) {
    const packages = document.querySelectorAll('.packagespage_package-item');
    const container = document.getElementById('packages-container');
    
    console.log('Found packages:', packages.length); // Debug log
    console.log('Found container:', container); // Debug log
    
    if (!container) return;
    
    // Category mapping
    const categoryMap = {
        'all packages': 'all',
        'cultural tours': 'cultural',
        'wildlife': 'wildlife',
        'beach': 'beach',
        'honeymoon': 'honeymoon'
    };
    
    const selectedCategory = categoryMap[category] || category;
    
    // Debug: Log all package categories
    packages.forEach(package => {
        const packageCategory = package.getAttribute('data-category');
        const packageTitle = package.querySelector('h3')?.textContent || 'Unknown';
        console.log(`Package: ${packageTitle}, Category: ${packageCategory}`);
    });
    
    console.log('Filtering for category:', category, '->', selectedCategory); // Debug log
    
    container.style.opacity = '0.7';
    container.style.transform = 'scale(0.98)';
    
    setTimeout(() => {
        let visibleCount = 0;
        
        packages.forEach(package => {
            const packageCategory = package.getAttribute('data-category');
            console.log('Package category:', packageCategory); // Debug log
            
            package.classList.remove('show', 'hidden');
            
            if (selectedCategory === 'all' || packageCategory === selectedCategory) {
                package.classList.add('show');
                package.style.display = 'block';
                visibleCount++;
                console.log('Showing package:', package.querySelector('h3').textContent); // Debug log
            } else {
                package.classList.add('hidden');
                package.style.display = 'none';
                console.log('Hiding package:', package.querySelector('h3').textContent); // Debug log
            }
        });
        
        console.log('Total visible packages:', visibleCount); // Debug log
        
        container.style.opacity = '1';
        container.style.transform = 'scale(1)';
        
        if (typeof AOS !== 'undefined') AOS.refresh();
    }, 200);
}

// Attraction data
const attractionsData = {
    'temple-of-the-tooth': {
        name: 'Temple of the Tooth',
        location: 'Kandy, Sri Lanka',
        image: 'img/toothrlic.jpg',
        description: 'The Temple of the Sacred Tooth Relic, commonly known as the Temple of the Tooth, is a Buddhist temple in Kandy, Sri Lanka. It is located in the royal palace complex of the former Kingdom of Kandy, which houses the relic of the tooth of the Buddha. Since ancient times, the relic has played an important role in local politics because it is believed that whoever holds the relic holds the governance of the country. The temple is a UNESCO World Heritage site and is one of the most sacred places of worship in the Buddhist world.',
        info: {
            location: 'Kandy, Central Province',
            time: 'Year-round, best during Esala Perahera (July/August)',
            fee: 'Foreigners: LKR 1,500, Locals: LKR 100',
            hours: 'Daily: 5:30 AM - 8:00 PM'
        }
    },
    'galle-fort': {
        name: 'Galle Fort',
        location: 'Galle, Sri Lanka',
        image: 'img/mirissa.jpg',
        description: 'Galle Fort, in the Bay of Galle on the southwest coast of Sri Lanka, was built first in 1588 by the Portuguese, then extensively fortified by the Dutch during the 17th century from 1649 onwards. It is a historical, archaeological and architectural heritage monument, which even after more than 432 years maintains a polished appearance, due to extensive reconstruction work done by Archaeological Department of Sri Lanka. The fort has a colorful history, and today has a multi-ethnic and multi-religious population.',
        info: {
            location: 'Galle, Southern Province',
            time: 'Year-round, best from November to April',
            fee: 'Free entry to the fort',
            hours: 'Open 24 hours'
        }
    },
    'ella-rock': {
        name: 'Ella Rock',
        location: 'Ella, Sri Lanka',
        image: 'img/train2.jpg',
        description: 'Ella Rock is a popular hiking destination in the Badulla District of Sri Lanka. It is situated at an elevation of 1,041 meters above sea level and offers panoramic views of the surrounding countryside, including the Ella Gap, Little Adam\'s Peak, and the Ella railway station. The hike to Ella Rock takes approximately 2-3 hours and passes through tea plantations, forests, and rural villages. The trail is moderately challenging and offers a great opportunity to experience the natural beauty of Sri Lanka\'s hill country.',
        info: {
            location: 'Ella, Uva Province',
            time: 'Early morning (6-8 AM) for best views',
            fee: 'Free (guide recommended)',
            hours: 'Best during daylight hours'
        }
    },
    'yala-national-park': {
        name: 'Yala National Park',
        location: 'Yala, Sri Lanka',
        image: 'img/yala.jpg',
        description: "Yala National Park is the most visited and second largest national park in Sri Lanka, bordering the Indian Ocean. The park consists of five blocks, two of which are now open to the public, and also adjoining parks. The blocks have individual names such as Ruhuna National Park (Block 1) and Kumana National Park or 'Yala East' for the adjoining area. It is situated in the southeast region of the country, and lies in Southern Province and Uva Province. The park is best known for its variety of wild animals. It is important for the conservation of Sri Lankan elephants, Sri Lankan leopards and aquatic birds.",
        info: {
            location: 'Yala, Southern Province',
            time: 'February to July (dry season)',
            fee: 'Foreigners: LKR 4,500, Locals: LKR 500',
            hours: '6:00 AM - 6:00 PM'
        }
    },
    'anuradhapura': {
        name: 'Anuradhapura',
        location: 'Anuradhapura, Sri Lanka',
        image: 'img/galviharaya.jpg',
        description: 'Anuradhapura is a major city in Sri Lanka. It is the capital city of North Central Province, Sri Lanka and the capital of Anuradhapura District. Anuradhapura is one of the ancient capitals of Sri Lanka, famous for its well-preserved ruins of an ancient Sinhalese civilization. It was the third capital of the kingdom of Rajarata, following the kingdoms of Tambapanni and Upatissa Nuwara. The city, now a UNESCO World Heritage site, was the center of Theravada Buddhism for many centuries.',
        info: {
            location: 'Anuradhapura, North Central Province',
            time: 'Year-round, best from May to September',
            fee: 'Foreigners: LKR 4,500, Locals: LKR 100',
            hours: '6:00 AM - 6:00 PM'
        }
    },
    'mirissa-beach': {
        name: 'Mirissa Beach',
        location: 'Mirissa, Sri Lanka',
        image: 'img/Fishermen_in_Sri_Lanka.jpg',
        description: 'Mirissa is a small town on the south coast of Sri Lanka, located in the Matara District of the Southern Province. It is approximately 150 kilometers south of Colombo and is situated at an elevation of 4 meters above sea level. Mirissa is the largest fishing port on the south coast and is known for its tuna, mullet, snapper and butterfish. In 1980 the first tourist accommodation was built, however it wasn\'t until the mid-1990s that tourism to the town started to dramatically increase. Today Mirissa is one of the main beach destinations on the south coast of the island.',
        info: {
            location: 'Mirissa, Southern Province',
            time: 'November to April (whale watching season)',
            fee: 'Free access to beach',
            hours: 'Open 24 hours'
        }
    }
};

// Load attraction details
function loadAttractionDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const attractionId = urlParams.get('attraction');
    const attraction = attractionsData[attractionId];
    
    if (!attraction) {
        const loading = document.getElementById('loading');
        if (loading) loading.innerHTML = '<h2>Attraction not found</h2><p>Please go back and select a valid attraction.</p>';
        return;
    }
    
    document.title = `${attraction.name} - Manon Lanka Tours`;
    
    const elements = {
        'hero-section': () => document.getElementById('hero-section').style.backgroundImage = `url('${attraction.image}')`,
        'hero-title': () => document.getElementById('hero-title').textContent = attraction.name,
        'hero-subtitle': () => document.getElementById('hero-subtitle').textContent = attraction.location,
        'attraction-image': () => {
            const img = document.getElementById('attraction-image');
            img.src = attraction.image;
            img.alt = attraction.name;
        },
        'attraction-title': () => document.getElementById('attraction-title').textContent = attraction.name,
        'attraction-location': () => document.getElementById('attraction-location').textContent = attraction.location,
        'attraction-description': () => document.getElementById('attraction-description').textContent = attraction.description,
        'info-location': () => document.getElementById('info-location').textContent = attraction.info.location,
        'info-time': () => document.getElementById('info-time').textContent = attraction.info.time,
        'info-fee': () => document.getElementById('info-fee').textContent = attraction.info.fee,
        'info-hours': () => document.getElementById('info-hours').textContent = attraction.info.hours
    };
    
    Object.values(elements).forEach(fn => {
        try { fn(); } catch (e) {}
    });
    
    const loading = document.getElementById('loading');
    const content = document.getElementById('attraction-content');
    if (loading) loading.style.display = 'none';
    if (content) content.style.display = 'block';
}

// Package filtering functionality
function initPackageFiltering() {
    const categoryTabs = document.querySelectorAll('.packagespage_category-tab');
    if (categoryTabs.length > 0) {
        categoryTabs.forEach(tab => {
            tab.addEventListener('click', function (e) {
                e.preventDefault();

                // Remove active class from all tabs
                document.querySelectorAll('.packagespage_category-tab').forEach(t => t.classList.remove('active'));
                this.classList.add('active');

                // Get the selected category
                const category = this.textContent.toLowerCase();

                // Filter packages
                filterPackages(category);
            });
        });
    }
}

// Package filtering function
function filterPackages(category) {
    const packages = document.querySelectorAll('.packagespage_package-item');
    const container = document.getElementById('packages-container');

    if (container) {
        // Add loading effect to container
        container.style.opacity = '0.7';
        container.style.transform = 'scale(0.98)';

        setTimeout(() => {
            packages.forEach(package => {
                const packageCategory = package.getAttribute('data-category');

                // Remove existing classes
                package.classList.remove('show', 'hidden');

                // Check if package matches category or if "all packages" is selected
                if (category === 'all packages' || packageCategory === category) {
                    package.classList.add('show');
                    package.style.display = 'block';
                } else {
                    package.classList.add('hidden');
                    setTimeout(() => {
                        package.style.display = 'none';
                    }, 300);
                }
            });

            // Restore container
            container.style.opacity = '1';
            container.style.transform = 'scale(1)';

            // Reinitialize AOS for new elements
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }

        }, 200);
    }
}

// Gallery item click effects
function initGalleryEffects() {
    const galleryItems = document.querySelectorAll('.thingstodopage_gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function () {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
}

// Global video manager - ensures only one video plays at a time across the entire page
let globalVideoManager = {
    currentPlayingVideo: null,
    
    pauseAllVideos: function() {
        const allVideos = document.querySelectorAll('video');
        allVideos.forEach(video => {
            if (video !== this.currentPlayingVideo) {
                // Don't pause testimonial carousel videos to allow natural progression
                const testimonialCarousel = video.closest('.testimonial-video-carousel');
                if (!testimonialCarousel) {
                    video.pause();
                    video.muted = true;
                }
            }
        });
    },
    
    setCurrentVideo: function(video) {
        this.currentPlayingVideo = video;
        this.pauseAllVideos();
    }
};

// Helper function to check if element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Scroll-based video player
function initScrollVideoPlayer() {
    const videoContainers = document.querySelectorAll('.about-hero-video, .testimonial-video-carousel');
    
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const container = entry.target;
            const videos = container.querySelectorAll('video');
            
            if (entry.isIntersecting) {
                // Video container is in view
                if (container.classList.contains('testimonial-video-carousel')) {
                    // For carousel, ensure first video is playing
                    const activeSlide = container.querySelector('.video-slide.active');
                    if (activeSlide) {
                        const video = activeSlide.querySelector('video');
                        if (video && video.paused) {
                            globalVideoManager.setCurrentVideo(video);
                            video.muted = false;
                            video.play().catch(e => {
                                console.log('Autoplay prevented:', e);
                            });
                        }
                    }
                } else {
                    // For single video, play it if not already playing
                    if (videos.length > 0) {
                        const video = videos[0];
                        if (video.paused) {
                            globalVideoManager.setCurrentVideo(video);
                            video.muted = false;
                            video.play().catch(e => {
                                console.log('Autoplay prevented:', e);
                            });
                        }
                    }
                }
            } else {
                // Video container is out of view - pause all videos in this container
                // But don't pause testimonial carousel videos to allow natural progression
                if (!container.classList.contains('testimonial-video-carousel')) {
                    videos.forEach(video => {
                        video.pause();
                        video.muted = true;
                    });
                }
            }
        });
    }, {
        threshold: 0.5, // Trigger when 50% of the video container is visible
        rootMargin: '0px 0px -100px 0px' // Trigger slightly before the video comes into view
    });
    
    // Observe all video containers
    videoContainers.forEach(container => {
        videoObserver.observe(container);
    });
}

// Video carousel functionality
function initVideoCarousel() {
    const videoSlides = document.querySelectorAll('.video-slide');
    const videoDots = document.querySelectorAll('.video-dot');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        // Hide all slides and mute/pause all videos
        videoSlides.forEach(slide => {
            slide.classList.remove('active');
            const video = slide.querySelector('video');
            if (video) {
                video.pause();
                video.muted = true;
                video.currentTime = 0;
            }
        });

        // Remove active class from all dots
        videoDots.forEach(dot => dot.classList.remove('active'));

        // Show current slide and unmute/play the video
        if (videoSlides[index]) {
            videoSlides[index].classList.add('active');
            const video = videoSlides[index].querySelector('video');
            if (video) {
                globalVideoManager.setCurrentVideo(video);
                video.muted = false;
                video.currentTime = 0;
                video.play().catch(e => {
                    console.log('Error playing video:', e);
                });
            }
        }

        // Activate current dot
        if (videoDots[index]) {
            videoDots[index].classList.add('active');
        }

        currentSlide = index;
        
        // Synchronize text testimonial with video slide
        if (window.showTestimonial) {
            window.showTestimonial(index);
        }
    }

    function nextSlide() {
        const nextIndex = (currentSlide + 1) % videoSlides.length;
        showSlide(nextIndex);
    }

    function startAutoPlay() {
        // Videos will auto-advance when they end via the 'ended' event listener
        // This function is called when the carousel becomes visible
        console.log('Video carousel auto-play started');
    }

    function stopAutoPlay() {
        if (slideInterval) {
            clearInterval(slideInterval);
        }
    }

    // Expose functions globally for scroll observer and testimonial synchronization
    window.videoCarouselAutoPlay = startAutoPlay;
    window.videoCarouselStopAutoPlay = stopAutoPlay;
    window.videoCarouselNextSlide = nextSlide;
    window.videoCarouselPrevSlide = () => {
        const prevIndex = (currentSlide - 1 + videoSlides.length) % videoSlides.length;
        showSlide(prevIndex);
    };

    // Initialize
    if (videoSlides.length > 0) {
        // Mute all videos initially
        videoSlides.forEach(slide => {
            const video = slide.querySelector('video');
            if (video) {
                video.muted = true;
            }
        });
        
        showSlide(0);
        // Start auto-play immediately
        startAutoPlay();

        // Dot click events
        videoDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                stopAutoPlay();
                showSlide(index);
                // Only start auto-play if the carousel is visible
                const carousel = document.querySelector('.testimonial-video-carousel');
                if (carousel && isElementInViewport(carousel)) {
                    startAutoPlay();
                }
            });
        });

        // Handle video events
        videoSlides.forEach(slide => {
            const video = slide.querySelector('video');
            if (video) {
                video.addEventListener('play', () => {
                    globalVideoManager.setCurrentVideo(video);
                });
                
                video.addEventListener('ended', () => {
                    // Wait 2 seconds after video ends, then go to next slide
                    setTimeout(() => {
                        // Always advance to next slide when video ends
                        nextSlide();
                    }, 2000);
                });
                
                // Remove loop attribute to allow natural ending
                video.removeAttribute('loop');
                
                // Add a fallback timer in case the 'ended' event doesn't fire
                // This ensures the carousel keeps moving even if there are video issues
                video.addEventListener('loadedmetadata', () => {
                    const duration = video.duration;
                    if (duration && duration > 0) {
                        // Set a timer to advance after video duration + 2 seconds
                        setTimeout(() => {
                            // Only advance if this is still the current video
                            if (video.parentElement.classList.contains('active')) {
                                nextSlide();
                            }
                        }, (duration * 1000) + 2000);
                    }
                });
            }
        });
    }
}

// Handle About section video
function initAboutVideo() {
    const aboutVideo = document.querySelector('.about-hero-video video');
    if (aboutVideo) {
        // Start muted to prevent auto-play issues
        aboutVideo.muted = true;
        
        // When user interacts with the video, make it the current playing video
        aboutVideo.addEventListener('play', () => {
            globalVideoManager.setCurrentVideo(aboutVideo);
        });
        
        // When video starts playing, unmute it
        aboutVideo.addEventListener('playing', () => {
            aboutVideo.muted = false;
        });
    }
}

// Initialize everything
function initWebsite() {
    initAOS();
    initSmoothScrolling();
    initScrollToTop();
    initNewsletter();
    initContactForm();
    initForms();
    initNavbarScroll();
    initCarousel();
    initTestimonialCarousel();
    initAboutVideo();
    initVideoCarousel();
    initScrollVideoPlayer();
    initPackageFiltering();
    initGalleryEffects();
    
    if (window.location.pathname.includes('attractionDetail.html')) {
        loadAttractionDetails();
    }
}

// Start when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWebsite);
} else {
    initWebsite();
}

// Handle window resize
window.addEventListener('resize', initCarousel);
