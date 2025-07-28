/**
 * Page Management Module
 * Handles page loading, content rendering, and page-specific functionality
 */
class PageManager {
    constructor(cartManager) {
        this.cartManager = cartManager;
        this.mainContent = document.getElementById('main-content');
        this.dynamicHeaderContent = document.getElementById('dynamic-header-content');
    }

    /**
     * Load and render a specific page
     */
    async loadPage(page) {
        // Store the initial hero section from index.html on first load
        if (!this.initialHeroSection) {
            const heroSection = document.querySelector('section.hero-section');
            if (heroSection) {
                this.initialHeroSection = heroSection.outerHTML;
            }
        }
        if (this.dynamicHeaderContent) {
            this.dynamicHeaderContent.innerHTML = '';
        }

        // Render header with logos
        this.renderHeader(page);

        // Get page content
        const content = this.getPageContent(page);
        
        // Create a temporary container to hold the new content
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = content;
        
        // Remove any hero section from the new content
        const newHeroSection = tempDiv.querySelector('.hero-section');
        if (newHeroSection) {
            tempDiv.removeChild(newHeroSection);
        }
        
        // Clear the main content
        this.mainContent.innerHTML = '';
        
        // Add the hero section only for the home page
        if (page === 'home' && this.initialHeroSection) {
            this.mainContent.innerHTML = this.initialHeroSection;
        }
        
        // Initialize Swiper if we're on the home page
        if (page === 'home') {
            this.initializeSwiper();
        }
        
        // Add the rest of the content
        while (tempDiv.firstChild) {
            this.mainContent.appendChild(tempDiv.firstChild);
        }

        // Setup page-specific functionality
        this.setupPageFunctionality(page);
        
        // Initialize Swiper after content is loaded
        setTimeout(() => {
            this.initializeSwipers();
            
            // Force scroll to top after all content is rendered
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Additional scroll reset for mobile browsers
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }, 100);
    }

    /**
     * Render the header with the Dirty Myrtle Wing Company logo and contact info
     */
    renderHeader() {
        // Only proceed if dynamicHeaderContent exists
        if (!this.dynamicHeaderContent) {
            console.warn('dynamicHeaderContent element not found');
            return;
        }

        const headerHTML = `
            <div class="flex flex-col items-center justify-center py-3 bg-gradient-to-b from-green-800 to-green-900 shadow-md">
                <div class="flex flex-col items-center">
                    <div class="flex items-center space-x-2 mb-2">
                        <div class="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <span class="text-black text-lg font-black">🌱</span>
                        </div>
                        <h1 class="text-2xl font-black text-white">EARTH CAFE</h1>
                    </div>
                    <div class="flex items-center space-x-4">
                        <a href="tel:555-012-3456" class="text-white text-sm md:text-base font-medium hover:text-yellow-300 transition-colors flex items-center">
                            <svg class="w-4 h-4 md:w-5 md:h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                            (252) 555-0123
                        </a>
                        <span class="text-white/60 hidden md:inline">|</span>
                        <a href="#" onclick="window.PierogiApp.getNavigationManager().navigateToPage('contact')" class="text-white text-sm md:text-base font-medium hover:text-yellow-300 transition-colors hidden md:flex items-center">
                            <svg class="w-4 h-4 md:w-5 md:h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            Find Us
                        </a>
                    </div>
                </div>
            </div>
        `;
        
        this.dynamicHeaderContent.innerHTML = headerHTML;
    }

    /**
     * Get content for a specific page
     */
    getPageContent(page) {
        if (page === 'menu') {
            return this.renderMenuPage();
        }
        
        return PageContent[page] || PageContent.home;
    }

    /**
     * Render the menu page with dynamic content
     */
    renderMenuPage() {
        // Get all section names from MenuData
        const menuSections = Object.keys(MenuData);
        
        let menuHTML = `
            <div id="menu-content" class="container mx-auto px-4 py-8">
                <div class="text-center mb-8">
                    <h1 class="text-4xl font-bold text-[var(--text-dark)] mb-2">Our Menu</h1>
                    <p class="text-lg text-[var(--text-medium)]">Fresh, organic, and delicious food at Earth Cafe</p>
                </div>
                
                <nav class="mb-8">
                    <div class="overflow-x-auto">
                        <div class="flex space-x-4 pb-2">
                            ${menuSections.map(section => 
                                `<a href="#${section.replace(/\s+/g, '-').toLowerCase()}" 
                                    class="px-4 py-2 border-b-2 border-b-transparent text-[var(--text-medium)] font-medium hover:text-[var(--text-dark)] whitespace-nowrap transition-colors">
                                    ${section}
                                </a>`
                            ).join('')}
                        </div>
                    </div>
                </nav>
        `;

        // Add each menu section
        menuSections.forEach(section => {
            const sectionId = section.replace(/\s+/g, '-').toLowerCase();
            menuHTML += `
                <div id="${sectionId}" class="mb-16 scroll-mt-16">
                    <h2 class="text-3xl font-bold text-[var(--text-dark)] mb-8 pb-2 border-b border-gray-200">${section}</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        ${MenuData[section].map(item => this.createMenuItemHTML(item)).join('')}
                    </div>
                </div>
            `;
        });

        menuHTML += '</div>';
        return menuHTML;
    }
    
    /**
     * Initialize Swiper instances after content is loaded
     */
    initializeSwipers() {
        console.log('Initializing Swipers...');
        console.log('Swiper available:', typeof Swiper !== 'undefined');
        
        if (typeof Swiper !== 'undefined') {
            // Game Day Favorites Swiper
            const gameDayElement = document.querySelector('.game-day-swiper');
            console.log('Game Day Swiper element found:', !!gameDayElement);
            
            if (gameDayElement) {
                const slides = gameDayElement.querySelectorAll('.swiper-slide');
                console.log('Game Day slides found:', slides.length);
                
                try {
                    const gameSwiper = new Swiper('.game-day-swiper', {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        allowTouchMove: true, // Enable touch/swipe
                        grabCursor: true, // Show grab cursor
                        pagination: {
                            el: '.game-day-swiper-pagination',
                            clickable: true,
                            dynamicBullets: true
                        },
                        breakpoints: {
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            }
                        },
                        on: {
                            init: function() {
                                console.log('Game Day Swiper initialized successfully!');
                            },
                            slideChange: function() {
                                console.log('Game Day slide changed to:', this.activeIndex);
                            }
                        }
                    });
                    console.log('Game Day Swiper instance:', gameSwiper);
                } catch (error) {
                    console.error('Error initializing Game Day Swiper:', error);
                }
            }

            // Fans Say Swiper
            const fansElement = document.querySelector('.fans-say-swiper');
            console.log('Fans Say Swiper element found:', !!fansElement);
            
            if (fansElement) {
                const slides = fansElement.querySelectorAll('.swiper-slide');
                console.log('Fans Say slides found:', slides.length);
                
                try {
                    const fansSwiper = new Swiper('.fans-say-swiper', {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        allowTouchMove: true, // Enable touch/swipe
                        grabCursor: true, // Show grab cursor
                        pagination: {
                            el: '.fans-say-swiper-pagination',
                            clickable: true,
                            dynamicBullets: true
                        },
                        breakpoints: {
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            }
                        },
                        on: {
                            init: function() {
                                console.log('Fans Say Swiper initialized successfully!');
                            }
                        }
                    });
                    console.log('Fans Say Swiper instance:', fansSwiper);
                } catch (error) {
                    console.error('Error initializing Fans Say Swiper:', error);
                }
            }
        } else {
            console.error('Swiper library not loaded!');
        }
    }

    /**
     * Initialize Swiper for the drinks carousel
     */
    initializeSwiper() {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
            const swiperEl = document.querySelector('.drinks-swiper');
            if (swiperEl && !swiperEl.swiper) {
                new Swiper(swiperEl, {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    loop: true,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    breakpoints: {
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    },
                });
            }
        }, 100);
    }

    /**
     * Get an appropriate food emoji based on the item name
     */
    getFoodEmoji(name) {
        const nameLower = name.toLowerCase();
        
        // Check for specific food types
        if (nameLower.includes('burger')) return '🍔';
        if (nameLower.includes('salad')) return '🥗';
        if (nameLower.includes('pizza') || nameLower.includes('flatbread')) return '🍕';
        if (nameLower.includes('taco') || nameLower.includes('burrito')) return '🌮';
        if (nameLower.includes('sushi')) return '🍣';
        if (nameLower.includes('soup')) return '🍲';
        if (nameLower.includes('sandwich') || nameLower.includes('wrap')) return '🥪';
        if (nameLower.includes('pasta')) return '🍝';
        if (nameLower.includes('chicken')) return '🍗';
        if (nameLower.includes('pork') || nameLower.includes('bacon')) return '🥓';
        if (nameLower.includes('steak') || nameLower.includes('beef')) return '🥩';
        if (nameLower.includes('fish')) return '🐟';
        if (nameLower.includes('rice')) return '🍚';
        if (nameLower.includes('noodle')) return '🍜';
        if (nameLower.includes('fries') || nameLower.includes('tots')) return '🍟';
        if (nameLower.includes('ice cream') || nameLower.includes('gelato')) return '🍨';
        if (nameLower.includes('cake') || nameLower.includes('cupcake')) return '🍰';
        if (nameLower.includes('donut') || nameLower.includes('doughnut')) return '🍩';
        if (nameLower.includes('cookie')) return '🍪';
        if (nameLower.includes('bread') || nameLower.includes('toast')) return '🍞';
        if (nameLower.includes('cheese')) return '🧀';
        if (nameLower.includes('pancake') || nameLower.includes('waffle')) return '🥞';
        if (nameLower.includes('egg')) return '🍳';
        if (nameLower.includes('pizza')) return '🍕';
        if (nameLower.includes('taco')) return '🌮';
        if (nameLower.includes('burrito')) return '🌯';
        if (nameLower.includes('sushi')) return '🍣';
        if (nameLower.includes('sashimi')) return '🍣';
        if (nameLower.includes('ramen')) return '🍜';
        if (nameLower.includes('curry')) return '🍛';
        if (nameLower.includes('soup')) return '🍲';
        if (nameLower.includes('salad')) return '🥗';
        if (nameLower.includes('popcorn')) return '🍿';
        if (nameLower.includes('coffee')) return '☕';
        if (nameLower.includes('tea')) return '🍵';
        if (nameLower.includes('sake')) return '🍶';
        if (nameLower.includes('wine')) return '🍷';
        if (nameLower.includes('beer') || nameLower.includes('ale') || nameLower.includes('lager')) return '🍺';
        if (nameLower.includes('cocktail') || nameLower.includes('martini') || nameLower.includes('margarita')) return '🍸';
        if (nameLower.includes('juice')) return '🧃';
        if (nameLower.includes('smoothie')) return '🥤';
        if (nameLower.includes('milkshake')) return '🥤';
        if (nameLower.includes('soda') || nameLower.includes('pop') || nameLower.includes('cola')) return '🥤';
        if (nameLower.includes('water')) return '💧';
        if (nameLower.includes('wine')) return '🍷';
        if (nameLower.includes('champagne')) return '🍾';
        if (nameLower.includes('whiskey') || nameLower.includes('whisky')) return '🥃';
        if (nameLower.includes('vodka')) return '🥃';
        if (nameLower.includes('rum')) return '🥃';
        if (nameLower.includes('gin')) return '🥃';
        if (nameLower.includes('tequila')) return '🥃';
        if (nameLower.includes('brandy')) return '🥃';
        if (nameLower.includes('cognac')) return '🥃';
        if (nameLower.includes('liqueur')) return '🥃';
        if (nameLower.includes('vermouth')) return '🍸';
        if (nameLower.includes('sherry') || nameLower.includes('port')) return '🍷';
        if (nameLower.includes('cider')) return '🍺';
        if (nameLower.includes('mead')) return '🍯';
        if (nameLower.includes('kombucha')) return '🍵';
        
        // Check for general food categories
        if (nameLower.includes('vegan') || nameLower.includes('vegetarian')) return '🌱';
        if (nameLower.includes('spicy') || nameLower.includes('hot')) return '🌶️';
        if (nameLower.includes('sweet') || nameLower.includes('candy') || nameLower.includes('chocolate')) return '🍫';
        if (nameLower.includes('fruit') || nameLower.includes('berry') || nameLower.includes('apple') || nameLower.includes('banana') || nameLower.includes('orange') || nameLower.includes('grape')) return '🍓';
        if (nameLower.includes('vegetable') || nameLower.includes('lettuce') || nameLower.includes('tomato') || nameLower.includes('carrot') || nameLower.includes('broccoli')) return '🥦';
        
        // Default food emoji
        return '🍽️';
    }

    /**
     * Create HTML for a menu item
     */
    createMenuItemHTML(item) {
        // Create dietary tags if they exist
        const dietaryTags = [];
        if (item.isVegan) dietaryTags.push('<span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Vegan</span>');
        if (item.isGlutenFree) dietaryTags.push('<span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">GF</span>');
        
        return `
            <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <div class="h-48 bg-gray-100 flex items-center justify-center">
                    ${item.image && item.image !== 'assets/images/placeholder.jpg' ? 
                        `<img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">` : 
                        `<span class="text-4xl text-gray-400">${this.getFoodEmoji(item.name)}</span>`}
                </div>
                <div class="p-5 flex-1 flex flex-col">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="text-xl font-bold text-gray-900">${item.name}</h3>
                        <span class="text-lg font-bold text-green-700">$${item.price.toFixed(2)}</span>
                    </div>
                    
                    ${dietaryTags.length > 0 ? 
                        `<div class="flex gap-2 mb-3">${dietaryTags.join('')}</div>` : ''}
                    
                    <p class="text-gray-600 mb-4 flex-1">${item.description}</p>
                    
                    <button class="add-to-cart-btn w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                            data-item-id="${item.id}" 
                            data-item-name="${item.name}" 
                            data-item-price="${item.price}">
                        Add to Order
                    </button>
                </div>
            </div>
        `;
    }

    /**
     * Setup page-specific functionality after content is loaded
     */
    setupPageFunctionality(page) {
        switch (page) {
            case 'menu':
                this.setupMenuPageFunctionality();
                break;
            case 'order':
                this.setupOrderPageFunctionality();
                break;
            default:
                // No specific setup needed for other pages
                break;
        }
    }

    /**
     * Setup menu page functionality
     */
    setupMenuPageFunctionality() {
        // Attach add-to-cart event listeners
        setTimeout(() => {
            document.querySelectorAll('.add-to-cart-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const itemId = e.currentTarget.dataset.itemId;
                    const itemName = e.currentTarget.dataset.itemName;
                    const itemPrice = parseFloat(e.currentTarget.dataset.itemPrice);
                    this.cartManager.addItem(itemId, itemName, itemPrice);
                });
            });
        }, 100);
    }

    /**
     * Setup order page functionality
     */
    setupOrderPageFunctionality() {
        // Render cart items when order page loads
        setTimeout(() => {
            this.cartManager.renderCart();
        }, 100);
    }
}
