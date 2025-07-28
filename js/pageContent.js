/**
 * Page Content Configuration
 * Contains all page templates and content data
 */
const PageContent = {
    home: `
        <div id="home-content" class="pb-8">
            <!-- Business Description -->
            <section class="py-16 bg-white">
                <div class="container mx-auto px-4">
                    <div class="flex flex-col lg:flex-row items-center max-w-6xl mx-auto">
                        <div class="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
                            <h2 class="text-4xl font-black text-gray-900 mb-6">Welcome to VieTea Boba</h2>
                            <div class="w-24 h-1 bg-pink-500 mb-8"></div>
                            <p class="text-lg text-gray-700 mb-6">Nestled in the heart of Myrtle Beach, VieTea Boba is your go-to destination for authentic bubble tea and refreshing beverages. We're passionate about bringing the traditional boba tea experience to the Grand Strand with a modern twist.</p>
                            <p class="text-lg text-gray-700 mb-8">Using only premium tea leaves, fresh ingredients, and house-made boba pearls, we craft each drink with care and precision. Whether you're a boba aficionado or trying it for the first time, our friendly staff will help you find your perfect drink.</p>
                            <div class="flex flex-col sm:flex-row gap-4">
                                <a href="#" onclick="window.PierogiApp.getNavigationManager().navigateToPage('about')" class="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full transition-colors text-center">Our Story</a>
                                <a href="#" onclick="window.PierogiApp.getNavigationManager().navigateToPage('contact')" class="border-2 border-pink-600 text-pink-600 hover:bg-pink-50 font-bold py-3 px-8 rounded-full transition-colors text-center">Visit Us</a>
                            </div>
                        </div>
                        <div class="lg:w-1/2">
                            <div class="rounded-2xl overflow-hidden shadow-xl">
                                <img src="./assets/images/boba1.webp" alt="Delicious boba tea with tapioca pearls" class="w-full h-auto object-cover">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Featured Drinks -->
            <section class="py-16 bg-pink-50">
                <div class="container mx-auto px-4">
                    <div class="text-center mb-12">
                        <span class="text-pink-600 font-bold text-lg">CUSTOMER FAVORITES</span>
                        <h2 class="text-4xl font-black text-gray-900 mt-2">Most Popular Drinks</h2>
                        <div class="w-24 h-1 bg-pink-500 mx-auto mt-4 mb-12"></div>
                    </div>
                    
                    <!-- Swiper Container -->
                    <div class="relative max-w-6xl mx-auto">
                        <div class="swiper drinks-swiper">
                            <div class="swiper-wrapper">
                                <!-- Slide 1 -->
                                <div class="swiper-slide">
                                    <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all h-full mx-2">
                                        <div class="h-64 bg-pink-100 flex items-center justify-center">
                                            <span class="text-8xl">🧋</span>
                                        </div>
                                        <div class="p-6">
                                            <h3 class="text-xl font-bold text-gray-900 mb-2">Brown Sugar Boba Milk</h3>
                                            <p class="text-gray-600 mb-4">Creamy milk tea with our signature brown sugar boba pearls, caramelized to perfection.</p>
                                            <div class="flex justify-between items-center">
                                                <span class="text-pink-600 font-bold text-lg">$5.99</span>
                                                <button class="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Slide 2 -->
                                <div class="swiper-slide">
                                    <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all h-full mx-2">
                                        <div class="h-64 bg-pink-100 flex items-center justify-center">
                                            <span class="text-8xl">🍓</span>
                                        </div>
                                        <div class="p-6">
                                            <h3 class="text-xl font-bold text-gray-900 mb-2">Strawberry Matcha Latte</h3>
                                            <p class="text-gray-600 mb-4">Fresh strawberry puree layered with premium matcha and creamy milk.</p>
                                            <div class="flex justify-between items-center">
                                                <span class="text-pink-600 font-bold text-lg">$6.49</span>
                                                <button class="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Slide 3 -->
                                <div class="swiper-slide">
                                    <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all h-full mx-2">
                                        <div class="h-64 bg-pink-100 flex items-center justify-center">
                                            <span class="text-8xl">🥭</span>
                                        </div>
                                        <div class="p-6">
                                            <h3 class="text-xl font-bold text-gray-900 mb-2">Mango Green Tea</h3>
                                            <p class="text-gray-600 mb-4">Refreshing green tea with fresh mango puree and mango popping boba.</p>
                                            <div class="flex justify-between items-center">
                                                <span class="text-pink-600 font-bold text-lg">$5.99</span>
                                                <button class="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Slide 4 - Additional drink -->
                                <div class="swiper-slide">
                                    <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all h-full mx-2">
                                        <div class="h-64 bg-pink-100 flex items-center justify-center">
                                            <span class="text-8xl">🍫</span>
                                        </div>
                                        <div class="p-6">
                                            <h3 class="text-xl font-bold text-gray-900 mb-2">Taro Milk Tea</h3>
                                            <p class="text-gray-600 mb-4">Creamy taro milk tea with chewy boba pearls and a hint of vanilla.</p>
                                            <div class="flex justify-between items-center">
                                                <span class="text-pink-600 font-bold text-lg">$5.99</span>
                                                <button class="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Navigation buttons -->
                            <div class="swiper-button-prev text-pink-600"></div>
                            <div class="swiper-button-next text-pink-600"></div>
                            
                            <!-- Pagination -->
                            <div class="swiper-pagination mt-8"></div>
                        </div>
                    </div>
                </div>
            </section>


            </div>

            <!-- Testimonials -->
            <div class="bg-pink-50 backdrop-blur-sm rounded-xl p-8 mx-4 mb-12 border border-pink-100 shadow-lg">
                <div class="text-center w-full mb-12">
                    <span class="text-pink-600 font-bold text-lg">TESTIMONIALS</span>
                    <h2 class="text-4xl font-black text-gray-900 mt-2">What Our Customers Say</h2>
                    <div class="w-24 h-1 bg-pink-500 mx-auto mt-4"></div>
                </div>
                <div class="swiper max-w-4xl mx-auto">
                    <div class="swiper-wrapper items-stretch">
                        <div class="swiper-slide">
                            <div class="bg-white rounded-2xl p-8 shadow-lg h-full">
                                <div class="flex items-center mb-6">
                                    <div class="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center text-2xl mr-4">
                                        👩‍🦰
                                    </div>
                                    <div>
                                        <h3 class="text-xl font-bold text-gray-900">Sarah M.</h3>
                                        <div class="flex items-center text-yellow-400">
                                            ★★★★★
                                        </div>
                                    </div>
                                </div>
                                <p class="text-gray-600 italic">"The Brown Sugar Boba Milk is absolutely divine! Perfectly sweet with the most amazing chewy boba. This is my new go-to spot in town!"</p>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="bg-white rounded-2xl p-8 shadow-lg h-full">
                                <div class="flex items-center mb-6">
                                    <div class="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center text-2xl mr-4">
                                        👨‍💼
                                    </div>
                                    <div>
                                        <h3 class="text-xl font-bold text-gray-900">Michael T.</h3>
                                        <div class="flex items-center text-yellow-400">
                                            ★★★★★
                                        </div>
                                    </div>
                                </div>
                                <p class="text-gray-600 italic">"I'm obsessed with their Matcha Latte! The balance of flavors is perfect, and the boba is always fresh. Great spot to get some work done too!"</p>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="bg-white rounded-2xl p-8 shadow-lg h-full">
                                <div class="flex items-center mb-6">
                                    <div class="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center text-2xl mr-4">
                                        👩‍🎓
                                    </div>
                                    <div>
                                        <h3 class="text-xl font-bold text-gray-900">Jessica K.</h3>
                                        <div class="flex items-center text-yellow-400">
                                            ★★★★★
                                        </div>
                                    </div>
                                </div>
                                <p class="text-gray-600 italic">"The Mango Green Tea with popping boba is my absolute favorite! The tea is so refreshing and the boba has the perfect texture. Highly recommend!"</p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-pagination mt-8"></div>
                </div>
            </div>
        </div>
    `,

    // Menu page content is handled dynamically by PageManager

    order: `
        <div id="order-content" class="pt-12">
            <div class="text-center mb-6">
                <h1 class="text-3xl font-bold text-[var(--text-dark)] mb-2">My Order</h1>
                <p class="text-[var(--text-medium)]">Review your items</p>
            </div>
            
            <div class="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 class="text-xl font-bold text-[var(--text-dark)] mb-4">Cart Items</h2>
                <div id="cart-items-list"></div>
            </div>
            
            <div class="bg-white rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-4">
                    <span class="text-xl font-bold text-[var(--text-dark)]">Total:</span>
                    <span id="cart-total" class="text-xl font-bold text-[var(--primary-color)]">$0.00</span>
                </div>
                <button class="w-full bg-[var(--primary-color)] text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    `,

    about: `
                <div class="pt-12 mb-12">
                    <div class="bg-white rounded-xl shadow-lg p-8 border-l-4 border-pink-600">
                        <div class="flex items-center mb-6">
                            <div class="w-1 h-8 bg-pink-600 mr-4"></div>
                            <h1 class="text-3xl md:text-4xl font-bold text-gray-900">Our Boba Journey</h1>
                        </div>
                        <p class="text-lg text-gray-700 leading-relaxed mb-6">
                            Welcome to Vietea, where every cup tells a story of passion, tradition, and modern refreshment. 
                            Our journey began with a deep appreciation for authentic boba tea and a mission to bring the vibrant 
                            flavors of Asia to the heart of Myrtle Beach. What started as a dream has blossomed into a beloved 
                            destination for tea enthusiasts and boba lovers alike.
                        </p>
                        <p class="text-lg text-gray-700 leading-relaxed mb-6">
                            We source only the finest tea leaves and premium ingredients, carefully selected for their exceptional 
                            quality and authentic flavors. Our commitment to excellence means you'll never find artificial powders 
                            or pre-made mixes—just freshly brewed teas, real fruit purees, and house-made boba pearls that create 
                            the perfect balance of taste and texture in every sip.
                        </p>
                        <p class="text-lg text-gray-700 leading-relaxed">
                            More than just a drink, boba tea represents a lifestyle of joy, connection, and cultural celebration. 
                            We're proud to be part of your daily ritual, whether you're starting your morning, taking a break, 
                            or treating yourself to something sweet. Thank you for making us your go-to boba destination in Myrtle Beach.
                        </p>
                    </div>
                </div>

                <!-- Why Vietea Section -->
                <div class="mb-12">
                    <div class="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl shadow-lg p-8">
                        <div class="flex items-center mb-6">
                            <div class="w-1 h-8 bg-pink-500 mr-4"></div>
                            <h2 class="text-2xl font-bold text-[var(--text-dark)]">Why Choose Vietea?</h2>
                        </div>
                        <p class="text-[var(--text-medium)] leading-relaxed text-lg mb-4">
                            At Vietea, we're passionate about creating the perfect boba tea experience. What sets us apart is our 
                            dedication to quality at every step—from sourcing premium tea leaves to crafting each drink with care. 
                            Our boba is made fresh daily, ensuring that perfect chewy texture that boba lovers crave. We never use 
                            artificial powders or pre-made mixes—just real, high-quality ingredients in every cup.
                        </p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div class="bg-white rounded-lg p-4 shadow-sm">
                                <div class="w-8 h-1 bg-pink-400 mb-3 mx-auto"></div>
                                <h3 class="font-bold text-[var(--text-dark)] mb-2">Premium Ingredients</h3>
                                <p class="text-[var(--text-medium)] text-sm">Only the finest tea leaves, fresh fruits, and house-made boba pearls in every drink</p>
                            </div>
                            <div class="bg-white rounded-lg p-4 shadow-sm">
                                <div class="w-8 h-1 bg-purple-400 mb-3 mx-auto"></div>
                                <h3 class="font-bold text-[var(--text-dark)] mb-2">Authentic Recipes</h3>
                                <p class="text-[var(--text-medium)] text-sm">Traditional recipes with a modern twist, crafted to perfection</p>
                            </div>
                        </div>
                </div>

                <!-- Our Mission & Values -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div class="w-12 h-1 bg-pink-600 mb-6 mx-auto"></div>
                        <h2 class="text-xl font-bold text-gray-900 mb-4 text-center">Our Mission</h2>
                        <p class="text-gray-700 leading-relaxed">
                            To bring the authentic boba tea experience to Myrtle Beach through handcrafted drinks made with premium ingredients 
                            and served with genuine hospitality. We're committed to creating a welcoming space where every sip takes you on 
                            a journey of flavor and every visit feels like coming home.
                        </p>
                    </div>
                    <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div class="w-12 h-1 bg-pink-600 mb-6 mx-auto"></div>
                        <h2 class="text-xl font-bold text-gray-900 mb-4 text-center">Our Values</h2>
                        <ul class="space-y-2 text-gray-700">
                            <li class="flex items-start">
                                <span class="text-pink-600 mr-2">✓</span>
                                <span>Premium, authentic ingredients in every drink</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-purple-600 mr-2">✓</span>
                                <span>Freshly brewed teas and house-made boba daily</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-purple-600 mr-2">✓</span>
                                <span>No artificial flavors or preservatives</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-purple-600 mr-2">✓</span>
                                <span>Supporting Amazonian communities</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Our Commitment -->
                <div class="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl shadow-lg p-8 mb-12">
                    <div class="text-center mb-6">
                        <div class="w-16 h-1 bg-pink-500 mb-6 mx-auto"></div>
                        <h2 class="text-2xl font-bold text-gray-900 mb-2">Our Boba Promise</h2>
                        <p class="text-pink-600 font-semibold">"From Tea Leaf to Perfect Sip"</p>
                        <p class="text-purple-600 font-semibold">"Fresh. Flavorful. Perfectly Brewed."</p>
                    </div>
                    <div class="bg-white rounded-lg p-6 shadow-sm">
                        <p class="text-gray-700 leading-relaxed text-lg text-center">
                            Every cup of our boba tea represents our dedication to quality, tradition, and your satisfaction. We're committed to bringing you the most authentic boba experience in Myrtle Beach, featuring premium teas, house-made boba pearls, and the perfect balance of flavors. Whether you're starting your morning, taking an afternoon break, or treating yourself to something sweet, our boba teas are crafted to refresh your spirit and delight your taste buds. Join us in celebrating the joy of this beloved drink!
                        </p>
                    </div>
                </div>


            </div>
        </div>
    `,

    contact: `
        <div id="contact-content" class="max-w-2xl mx-auto pt-12">
            <div class="text-center mb-8">
                <h1 class="text-3xl font-bold text-[var(--text-dark)] mb-4">Contact Us</h1>
                <p class="text-lg text-[var(--text-medium)]">We'd love to hear from you!</p>
            </div>
            
            <div class="space-y-6">
                <div class="bg-white rounded-lg shadow-md p-6">
                    <h2 class="text-xl font-bold text-[var(--text-dark)] mb-4">Get in Touch</h2>
                    <div class="space-y-4">
                        <div class="flex items-baseline gap-x-3">
                            <span class="text-[var(--primary-color)] font-semibold whitespace-nowrap">Phone:</span>
                            <a href="tel:843-516-6867" class="text-[var(--text-medium)] hover:text-yellow-400 transition-colors">(843) 516-6867</a>
                        </div>
                        <div class="flex items-center gap-x-3">
                            <span class="text-[var(--primary-color)] font-semibold whitespace-nowrap">Email:</span>
                            <button onclick="navigator.clipboard.writeText('Troy.dirtymyrtlewingcompany@gmail.com').then(() => { const btn = event.target; const originalText = btn.innerHTML; btn.innerHTML = '✓ Copied to clipboard!'; btn.classList.add('text-green-500'); setTimeout(() => { btn.innerHTML = originalText; btn.classList.remove('text-green-500'); }, 2000); })" 
                                    class="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--primary-color)] text-white rounded-md hover:bg-yellow-600 transition-colors"
                                    title="Click to copy email">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Copy Email
                            </button>
                        </div>
                        <div class="flex items-baseline gap-x-3">
                            <span class="text-[var(--primary-color)] font-semibold whitespace-nowrap">Address:</span>
                            <span class="text-[var(--text-medium)]">1223 38th Ave N, Myrtle Beach, SC 29577</span>
                        </div>
                </div>
                
                <div class="bg-white rounded-lg shadow-md p-6">
                    <h2 class="text-xl font-bold text-[var(--text-dark)] mb-4">Hours</h2>
                    <div class="space-y-2">
                        <div class="flex justify-between">
                            <span class="text-[var(--text-medium)]">Monday:</span>
                            <span class="text-[var(--text-dark)] font-medium">10:00 AM - 7:00 PM</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-[var(--text-medium)]">Tuesday:</span>
                            <span class="text-[var(--text-dark)] font-medium">10:00 AM - 7:00 PM</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-[var(--text-medium)]">Wednesday:</span>
                            <span class="text-[var(--text-dark)] font-medium">10:00 AM - 7:00 PM</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-[var(--text-medium)]">Thursday:</span>
                            <span class="text-[var(--text-dark)] font-medium">10:00 AM - 7:00 PM</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-[var(--text-medium)]">Friday:</span>
                            <span class="text-[var(--text-dark)] font-medium">10:00 AM - 7:00 PM</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-[var(--text-medium)]">Saturday:</span>
                            <span class="text-[var(--text-dark)] font-medium">10:00 AM - 7:00 PM</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-[var(--text-medium)]">Sunday:</span>
                            <span class="text-[var(--text-dark)] font-medium">12:00 PM - 10:00 PM</span>
                        </div>
                </div>
            </div>
        </div>
    `,

};
