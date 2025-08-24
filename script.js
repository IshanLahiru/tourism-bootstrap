// Tour Packages Data
const tourPackages = {
    "Sri Lanka Highlights": {
        title: "Sri Lanka Highlights",
        subtitle: "Discover the best of Sri Lanka in this comprehensive tour covering ancient temples, cultural sites, and breathtaking landscapes.",
        heroImage: "img/sigir.png",
        duration: "4 Nights 5 Days",
        price: "$799",
        category: "cultural",
        overview: "Experience the essence of Sri Lanka in this comprehensive highlights tour. Visit UNESCO World Heritage sites, explore ancient temples, and discover the rich cultural heritage of this beautiful island nation. Perfect for first-time visitors who want to see the best of Sri Lanka in a short time.",
        highlights: [
            "UNESCO World Heritage Sites",
            "Ancient temples and cultural sites",
            "Professional English-speaking guide",
            "Comfortable accommodation and transportation"
        ],
        features: [
            "4 Nights 5 Days",
            "UNESCO World Heritage Sites",
            "Professional English Guide",
            "Comfortable Accommodation"
        ],
        accommodations: [
            {
                name: "Colombo Grand Hotel",
                image: "img/5.jpg",
                description: "Modern 4-star hotel in the heart of Colombo with city views and excellent amenities.",
                features: ["City center location", "Modern amenities", "Restaurant & bar", "Free WiFi"],
                rating: 4.5,
                ratingText: "Very Good"
            },
            {
                name: "Cultural Triangle Resort",
                image: "img/heritage.jpg",
                description: "Comfortable resort in the cultural triangle with traditional architecture and cultural experiences.",
                features: ["Traditional architecture", "Cultural experiences", "Swimming pool", "Garden views"],
                rating: 4.3,
                ratingText: "Very Good"
            },
            {
                name: "Kandy Heritage Hotel",
                image: "img/heritage.jpg",
                description: "Historic hotel in Kandy with mountain views and proximity to cultural sites.",
                features: ["Mountain views", "Historic building", "Cultural proximity", "Traditional design"],
                rating: 4.4,
                ratingText: "Very Good"
            }
        ],
        journeyHighlights: [
            {
                title: "Cultural Heritage",
                image: "img/heritage.jpg",
                description: "Explore ancient temples, historical sites, and UNESCO World Heritage locations that showcase Sri Lanka's rich cultural heritage.",
                features: ["Temple visits", "Historical sites", "Cultural workshops", "Heritage tours"]
            },
            {
                title: "Ancient Architecture",
                image: "img/sigir.png",
                description: "Marvel at the architectural wonders of ancient Sri Lanka, including the iconic Sigiriya Rock Fortress and ancient kingdoms.",
                features: ["Sigiriya Rock", "Ancient kingdoms", "Architectural tours", "Historical insights"]
            },
            {
                title: "Natural Beauty",
                image: "img/5.jpg",
                description: "Discover the stunning natural landscapes, from misty mountains to pristine beaches and lush forests.",
                features: ["Mountain views", "Beach experiences", "Forest walks", "Scenic photography"]
            }
        ],
        faqs: [
            {
                question: "What is the best time to visit Sri Lanka for this cultural tour?",
                answer: "The best time is during the dry season from January to April and July to September. These months offer pleasant weather for exploring outdoor sites and comfortable temperatures for temple visits."
            },
            {
                question: "Are the entrance fees to UNESCO sites included in the tour price?",
                answer: "Yes, all entrance fees to UNESCO World Heritage sites including Sigiriya, Dambulla, and the Cultural Triangle are included in your tour package."
            },
            {
                question: "What should I wear when visiting temples and religious sites?",
                answer: "Modest clothing is required. Shoulders and knees should be covered. It's recommended to wear lightweight, breathable clothing as you'll be removing shoes at many sites."
            },
            {
                question: "How physically demanding is the Sigiriya Rock climb?",
                answer: "The climb involves approximately 1,200 steps and takes about 1-2 hours. While not extremely difficult, it requires moderate fitness. Alternative viewing options are available for those who prefer not to climb."
            },
            {
                question: "Is transportation between sites included?",
                answer: "Yes, all transportation between sites, including airport transfers, is included. You'll travel in comfortable, air-conditioned vehicles with professional drivers."
            }
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival & Cultural Introduction",
                image: "img/sigir.png",
                description: "Begin your Sri Lankan adventure with a warm welcome. Transfer to your hotel and enjoy an orientation about the cultural highlights you'll experience.",
                activities: ["Airport pickup and transfer", "Hotel check-in", "Cultural orientation", "Welcome dinner"],
                highlights: ["First glimpse of Sri Lanka", "Cultural introduction", "Hotel comfort", "Local welcome"],
                meals: "Dinner",
                stay: "Comfortable Hotel in Colombo"
            },
            {
                day: 2,
                title: "Ancient Sigiriya & Dambulla",
                image: "img/sigiriya.jpg",
                description: "Visit the iconic Sigiriya Rock Fortress, a UNESCO World Heritage site, and explore the ancient cave temples of Dambulla.",
                activities: ["Sigiriya Rock climb", "Dambulla cave temples", "Historical tour", "Cultural photography"],
                highlights: ["UNESCO heritage site", "Ancient architecture", "Historical insights", "Cultural significance"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Comfortable Hotel in Cultural Triangle"
            },
            {
                day: 3,
                title: "Cultural Triangle Exploration",
                image: "img/heritage.jpg",
                description: "Explore the ancient cities of Anuradhapura and Polonnaruwa, discovering the rich history of Sri Lanka's ancient kingdoms.",
                activities: ["Anuradhapura tour", "Polonnaruwa exploration", "Cultural workshops", "Historical insights"],
                highlights: ["Ancient kingdoms", "Cultural heritage", "Historical learning", "Traditional practices"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Comfortable Hotel in Cultural Triangle"
            },
            {
                day: 4,
                title: "Kandy Cultural Experience",
                image: "img/heritage.jpg",
                description: "Visit the sacred Temple of the Tooth Relic in Kandy, experience traditional dance performances, and explore the Royal Botanical Gardens.",
                activities: ["Temple of the Tooth visit", "Traditional dance show", "Botanical gardens tour", "Cultural workshops"],
                highlights: ["Sacred temple", "Traditional performances", "Botanical beauty", "Cultural immersion"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Comfortable Hotel in Kandy"
            },
            {
                day: 5,
                title: "Departure & Farewell",
                image: "img/5.jpg",
                description: "Enjoy your final morning in Sri Lanka with a leisurely breakfast and transfer to the airport for your departure flight.",
                activities: ["Leisurely breakfast", "Hotel check-out", "Airport transfer", "Farewell"],
                highlights: ["Final memories", "Cultural reflection", "Smooth departure", "Last impressions"],
                meals: "Breakfast",
                stay: "Departure"
            }
        ]
    },
    "Wedded Bliss": {
        title: "Wedded Bliss",
        subtitle: "Perfect romantic getaway for newlyweds with private beaches, luxury resorts, and intimate experiences.",
        heroImage: "img/Honeymoon-Tours.jpg",
        duration: "10 Nights 11 Days",
        price: "$1,299",
        category: "honeymoon",
        overview: "Experience the ultimate romantic escape in Sri Lanka with this specially curated honeymoon package. From private beach access to intimate dining experiences, every moment is designed to create lasting memories for newlyweds. Discover pristine beaches, luxury accommodations, and romantic activities that will make your honeymoon truly unforgettable.",
        highlights: [
            "Private beach access and exclusive experiences",
            "Luxury resort accommodation with ocean views",
            "Couple spa treatments and wellness sessions",
            "Romantic sunset dinners and private dining"
        ],
        features: [
            "10 Nights 11 Days",
            "Private Beach Access",
            "Couple Spa Treatments",
            "Romantic Sunset Dinners"
        ],
        accommodations: [
            {
                name: "Luxury Beachfront Resort",
                image: "img/Mirissa-Beach-South-Coast-of-Sri-Lanka-Sri-Lanka-Asia.jpg",
                description: "Exclusive 5-star beachfront resort with private beach access and romantic amenities.",
                features: ["Private beach access", "Ocean view rooms", "Couple spa", "Romantic dining"],
                rating: 5.0,
                ratingText: "Exceptional"
            },
            {
                name: "Romantic Villa Suite",
                image: "img/Honeymoon-Tours.jpg",
                description: "Private villa with infinity pool, personal chef, and stunning ocean views.",
                features: ["Private villa", "Infinity pool", "Personal chef", "Ocean views"],
                rating: 5.0,
                ratingText: "Exceptional"
            },
            {
                name: "Mountain Retreat Lodge",
                image: "img/nuwaraeliya.jpg",
                description: "Secluded mountain lodge with tea plantation views and romantic atmosphere.",
                features: ["Mountain views", "Tea plantation", "Secluded location", "Romantic setting"],
                rating: 4.8,
                ratingText: "Exceptional"
            }
        ],
        journeyHighlights: [
            {
                title: "Romantic Beaches",
                image: "img/Mirissa-Beach-South-Coast-of-Sri-Lanka-Sri-Lanka-Asia.jpg",
                description: "Enjoy private beach access with pristine sands, crystal clear waters, and breathtaking sunsets perfect for romantic moments.",
                features: ["Private beach access", "Sunset views", "Beachside dining", "Water activities"]
            },
            {
                title: "Luxury Accommodation",
                image: "img/Honeymoon-Tours.jpg",
                description: "Stay in luxurious resorts with private pools, ocean views, and world-class amenities for the perfect romantic getaway.",
                features: ["Luxury resorts", "Private pools", "Ocean views", "Premium amenities"]
            },
            {
                title: "Couple Experiences",
                image: "img/5.jpg",
                description: "Create unforgettable memories with specially designed couple activities and romantic experiences.",
                features: ["Couple spa treatments", "Romantic dinners", "Private tours", "Intimate experiences"]
            }
        ],
        faqs: [
            {
                question: "Is this package suitable for newlyweds?",
                answer: "Absolutely! This package is specifically designed for newlyweds and couples seeking a romantic getaway. We include special touches like rose petals, champagne, and private dining experiences."
            },
            {
                question: "Can we customize the romantic experiences?",
                answer: "Yes, we offer customization options for romantic experiences. You can choose from various activities like private beach dinners, couple spa treatments, or exclusive sunset cruises."
            },
            {
                question: "Are the beach resorts private and secluded?",
                answer: "Yes, we select resorts with private beach access and secluded locations to ensure maximum privacy and intimacy for couples. Many resorts offer exclusive beach areas for guests."
            },
            {
                question: "What romantic activities are included?",
                answer: "The package includes private beach access, couple spa treatments, romantic sunset dinners, private dining experiences, and exclusive romantic activities tailored to your preferences."
            },
            {
                question: "Can we extend our stay at any location?",
                answer: "Yes, you can extend your stay at any location for an additional cost. We recommend extending at the beach resorts for maximum relaxation and romantic atmosphere."
            }
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival & Romantic Welcome",
                image: "img/Honeymoon-Tours.jpg",
                description: "Begin your romantic journey with a warm welcome to Sri Lanka. Transfer to your luxury beachfront resort and enjoy a romantic welcome dinner with ocean views.",
                activities: ["Airport pickup and transfer", "Luxury resort check-in", "Romantic welcome dinner", "Resort orientation"],
                highlights: ["First glimpse of paradise", "Luxury accommodation", "Romantic atmosphere", "Ocean views"],
                meals: "Dinner",
                stay: "Luxury Beachfront Resort"
            },
            {
                day: 2,
                title: "Private Beach Day",
                image: "img/Mirissa-Beach-South-Coast-of-Sri-Lanka-Sri-Lanka-Asia.jpg",
                description: "Spend a romantic day on your private beach with water activities, beachside dining, and breathtaking sunset views.",
                activities: ["Private beach access", "Water sports", "Beachside lunch", "Sunset viewing"],
                highlights: ["Private beach experience", "Water activities", "Romantic sunset", "Beachside dining"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Luxury Beachfront Resort"
            },
            {
                day: 3,
                title: "Couple Spa & Wellness",
                image: "img/5.jpg",
                description: "Rejuvenate together with couple spa treatments, yoga sessions, and wellness activities designed for two.",
                activities: ["Couple spa treatments", "Yoga sessions", "Wellness activities", "Relaxation time"],
                highlights: ["Couple wellness", "Spa relaxation", "Health activities", "Quality time together"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Luxury Beachfront Resort"
            },
            {
                day: 4,
                title: "Romantic Sunset Cruise",
                image: "img/Mirissa-Beach-South-Coast-of-Sri-Lanka-Sri-Lanka-Asia.jpg",
                description: "Embark on a private sunset cruise along the coast, enjoying champagne and canapés while watching the sun set over the ocean.",
                activities: ["Private sunset cruise", "Champagne service", "Ocean views", "Romantic atmosphere"],
                highlights: ["Private cruise", "Sunset romance", "Ocean adventure", "Luxury experience"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Luxury Beachfront Resort"
            },
            {
                day: 5,
                title: "Cultural Day Trip",
                image: "img/heritage.jpg",
                description: "Explore nearby cultural sites and traditional villages, experiencing local customs and traditional crafts together.",
                activities: ["Cultural village tour", "Traditional crafts", "Local customs", "Cultural photography"],
                highlights: ["Cultural immersion", "Local experiences", "Traditional learning", "Shared discovery"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Luxury Beachfront Resort"
            },
            {
                day: 6,
                title: "Adventure & Romance",
                image: "img/5.jpg",
                description: "Combine adventure with romance through activities like snorkeling, kayaking, and beachside picnics.",
                activities: ["Snorkeling adventure", "Kayaking", "Beachside picnic", "Adventure sports"],
                highlights: ["Adventure romance", "Water activities", "Beach picnic", "Active couple time"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Luxury Beachfront Resort"
            },
            {
                day: 7,
                title: "Wellness & Relaxation",
                image: "img/Honeymoon-Tours.jpg",
                description: "Focus on wellness with couple yoga sessions, meditation, and spa treatments in a serene setting.",
                activities: ["Couple yoga", "Meditation sessions", "Spa treatments", "Wellness activities"],
                highlights: ["Wellness focus", "Mind-body connection", "Spa relaxation", "Health consciousness"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Luxury Beachfront Resort"
            },
            {
                day: 8,
                title: "Romantic Mountain Escape",
                image: "img/nuwaraeliya.jpg",
                description: "Take a day trip to the cool mountains, visiting tea plantations and enjoying the scenic beauty together.",
                activities: ["Mountain day trip", "Tea plantation tour", "Scenic photography", "Mountain views"],
                highlights: ["Mountain escape", "Tea culture", "Scenic beauty", "Climate change"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Luxury Beachfront Resort"
            },
            {
                day: 9,
                title: "Private Dining Experience",
                image: "img/5.jpg",
                description: "Enjoy a private dining experience on the beach, with a personal chef preparing a romantic meal under the stars.",
                activities: ["Private beach dining", "Personal chef", "Stargazing", "Romantic atmosphere"],
                highlights: ["Private dining", "Personal service", "Starry night", "Romantic setting"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Luxury Beachfront Resort"
            },
            {
                day: 10,
                title: "Final Beach Day",
                image: "img/Mirissa-Beach-South-Coast-of-Sri-Lanka-Sri-Lanka-Asia.jpg",
                description: "Spend your last full day enjoying the beach, water activities, and creating final memories of your romantic getaway.",
                activities: ["Beach activities", "Water sports", "Memory making", "Final sunset"],
                highlights: ["Last beach day", "Final memories", "Sunset viewing", "Romantic closure"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Luxury Beachfront Resort"
            },
            {
                day: 11,
                title: "Departure & Farewell",
                image: "img/Honeymoon-Tours.jpg",
                description: "Enjoy a romantic breakfast together before transferring to the airport, taking with you memories of an unforgettable honeymoon.",
                activities: ["Romantic breakfast", "Hotel check-out", "Airport transfer", "Farewell"],
                highlights: ["Final breakfast", "Romantic farewell", "Memory reflection", "Smooth departure"],
                meals: "Breakfast",
                stay: "Departure"
            }
        ]
    },
    "Beach Paradise": {
        title: "Beach Paradise",
        subtitle: "Unwind on pristine beaches with water sports, dolphin watching, and stunning sunsets along the southern coast.",
        heroImage: "img/Mirissa-Beach-South-Coast-of-Sri-Lanka-Sri-Lanka-Asia.jpg",
        duration: "6 Nights 7 Days",
        price: "$899",
        category: "beach",
        overview: "Escape to the pristine beaches of Sri Lanka's southern coast with this beach paradise package. Enjoy water sports, whale watching, and stunning sunsets in a relaxed beachfront setting. Perfect for beach lovers and adventure seekers looking for a tropical getaway.",
        highlights: [
            "Beachfront resort stay with ocean views",
            "Exciting water sports and beach activities",
            "Whale and dolphin watching experiences",
            "Stunning coastal landscapes and sunsets"
        ],
        features: [
            "6 Nights 7 Days",
            "Beachfront Resort",
            "Water Sports Activities",
            "Whale & Dolphin Watching"
        ],
        accommodations: [
            {
                name: "Beachfront Paradise Resort",
                image: "img/Mirissa-Beach-South-Coast-of-Sri-Lanka-Sri-Lanka-Asia.jpg",
                description: "Direct beachfront resort with water sports facilities and stunning ocean views.",
                features: ["Direct beach access", "Water sports", "Ocean views", "Beach restaurant"],
                rating: 4.6,
                ratingText: "Excellent"
            },
            {
                name: "Island View Hotel",
                image: "img/mirissa.jpg",
                description: "Comfortable hotel with island views and easy access to marine activities.",
                features: ["Island views", "Marine activities", "Comfortable rooms", "Local cuisine"],
                rating: 4.4,
                ratingText: "Very Good"
            },
            {
                name: "Coastal Adventure Lodge",
                image: "img/5.jpg",
                description: "Adventure-focused lodge perfect for water sports enthusiasts and nature lovers.",
                features: ["Adventure focus", "Water sports", "Nature setting", "Local guides"],
                rating: 4.3,
                ratingText: "Very Good"
            }
        ],
        journeyHighlights: [
            {
                title: "Beach Activities",
                image: "img/Mirissa-Beach-South-Coast-of-Sri-Lanka-Sri-Lanka-Asia.jpg",
                description: "Enjoy a variety of water sports and beach activities in the crystal clear waters of the Indian Ocean.",
                features: ["Water sports", "Beach activities", "Swimming", "Beach volleyball"]
            },
            {
                title: "Marine Life",
                image: "img/mirissa.jpg",
                description: "Experience the thrill of whale and dolphin watching in their natural habitat along the southern coast.",
                features: ["Whale watching", "Dolphin spotting", "Marine tours", "Ocean photography"]
            },
            {
                title: "Coastal Beauty",
                image: "img/5.jpg",
                description: "Immerse yourself in the stunning coastal landscapes and breathtaking sunsets of southern Sri Lanka.",
                features: ["Coastal views", "Sunset watching", "Beach walks", "Photography"]
            }
        ],
        faqs: [
            {
                question: "What water sports are included in the package?",
                answer: "The package includes snorkeling, kayaking, paddleboarding, and beach volleyball. Additional activities like jet skiing and parasailing are available at extra cost."
            },
            {
                question: "When is the best time for whale watching?",
                answer: "The best time for whale watching is from November to April, with peak season from December to March. Dolphins can be spotted year-round along the southern coast."
            },
            {
                question: "Are the beach resorts family-friendly?",
                answer: "Yes, our beach resorts are family-friendly with facilities for all ages. We offer family rooms, children's activities, and safe swimming areas with lifeguards."
            },
            {
                question: "What should we bring for the beach activities?",
                answer: "We recommend swimwear, beach towels, sunscreen, water shoes, and waterproof camera equipment. The resorts provide basic beach equipment and safety gear."
            },
            {
                question: "Can we customize our water sports activities?",
                answer: "Yes, you can customize your water sports activities based on your skill level and preferences. Our instructors will assess your abilities and recommend appropriate activities."
            }
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival & Beach Introduction",
                image: "img/Mirissa-Beach-South-Coast-of-Sri-Lanka-Sri-Lanka-Asia.jpg",
                description: "Welcome to the beach paradise! Transfer to your beachfront resort and enjoy your first sunset over the Indian Ocean.",
                activities: ["Airport pickup and transfer", "Beach resort check-in", "Resort orientation", "Sunset viewing"],
                highlights: ["First beach experience", "Ocean views", "Resort amenities", "Tropical welcome"],
                meals: "Dinner",
                stay: "Beachfront Resort"
            },
            {
                day: 2,
                title: "Water Sports & Beach Activities",
                image: "img/mirissa.jpg",
                description: "Start your day with exciting water sports and beach activities, followed by a relaxing afternoon on the beach.",
                activities: ["Water sports", "Beach activities", "Beachside lunch", "Sunset beach walk"],
                highlights: ["Water sports adventure", "Beach relaxation", "Ocean activities", "Coastal beauty"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Beachfront Resort"
            },
            {
                day: 3,
                title: "Whale & Dolphin Watching",
                image: "img/5.jpg",
                description: "Embark on an exciting marine adventure to spot whales and dolphins in their natural habitat.",
                activities: ["Marine tour", "Whale watching", "Dolphin spotting", "Ocean photography"],
                highlights: ["Marine wildlife", "Ocean adventure", "Wildlife photography", "Marine conservation"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Beachfront Resort"
            },
            {
                day: 4,
                title: "Island Hopping Adventure",
                image: "img/mirissa.jpg",
                description: "Explore nearby islands and hidden beaches, discovering secluded spots perfect for snorkeling and relaxation.",
                activities: ["Island hopping", "Hidden beaches", "Snorkeling", "Beach exploration"],
                highlights: ["Island discovery", "Secluded spots", "Marine exploration", "Adventure day"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Beachfront Resort"
            },
            {
                day: 5,
                title: "Cultural Beach Experience",
                image: "img/heritage.jpg",
                description: "Visit local fishing villages, learn about traditional fishing methods, and experience authentic coastal culture.",
                activities: ["Fishing village tour", "Traditional fishing", "Local culture", "Cultural photography"],
                highlights: ["Local culture", "Traditional methods", "Cultural learning", "Authentic experience"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Beachfront Resort"
            },
            {
                day: 6,
                title: "Adventure Sports Day",
                image: "img/5.jpg",
                description: "Get your adrenaline pumping with advanced water sports like jet skiing, parasailing, and deep-sea fishing.",
                activities: ["Jet skiing", "Parasailing", "Deep-sea fishing", "Adventure sports"],
                highlights: ["Adventure sports", "Adrenaline rush", "Ocean adventure", "Skill development"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Beachfront Resort"
            },
            {
                day: 7,
                title: "Departure & Farewell",
                image: "img/Mirissa-Beach-South-Coast-of-Sri-Lanka-Sri-Lanka-Asia.jpg",
                description: "Enjoy your final beach morning with a leisurely breakfast and transfer to the airport, taking with you memories of paradise.",
                activities: ["Leisurely breakfast", "Final beach time", "Hotel check-out", "Airport transfer"],
                highlights: ["Final beach moments", "Memory reflection", "Smooth departure", "Beach farewell"],
                meals: "Breakfast",
                stay: "Departure"
            }
        ]
    },
    "Animal Instinct": {
        title: "Animal Instinct",
        subtitle: "Experience the thrill of spotting leopards, elephants, and exotic birds in their natural habitat across multiple national parks.",
        heroImage: "img/yala.jpg",
        duration: "12 Nights 13 Days",
        price: "$1,599",
        category: "wildlife",
        overview: "Discover the mystical beauty of Sri Lanka's ancient forests and cultural heritage sites. This 12-day adventure takes you through the heart of the island's most enchanting landscapes, from dense rainforests to ancient temples. Experience thrilling wildlife safaris and immerse yourself in the rich biodiversity of Sri Lanka.",
        highlights: [
            "Multiple national park safari experiences",
            "Expert wildlife guides and naturalists",
            "Luxury safari lodge accommodations",
            "Cultural heritage site visits"
        ],
        features: [
            "12 Nights 13 Days",
            "Multiple Safari Experiences",
            "Expert Wildlife Guide",
            "Luxury Safari Lodge"
        ],
        accommodations: [
            {
                name: "Yala Safari Lodge",
                image: "img/yala.jpg",
                description: "Luxury lodge in Yala National Park with wildlife viewing decks and safari experiences.",
                features: ["Wildlife viewing decks", "Safari experiences", "Luxury amenities", "Expert guides"],
                rating: 4.8,
                ratingText: "Exceptional"
            },
            {
                name: "Udawalawe Wildlife Resort",
                image: "img/udawalawa-header-one.webp",
                description: "Wildlife resort overlooking Udawalawe reservoir with elephant viewing opportunities.",
                features: ["Reservoir views", "Elephant viewing", "Wildlife photography", "Nature walks"],
                rating: 4.7,
                ratingText: "Excellent"
            },
            {
                name: "Sinharaja Eco Lodge",
                image: "img/3.jpg",
                description: "Eco-friendly lodge in the heart of Sinharaja rainforest with guided nature tours.",
                features: ["Rainforest setting", "Eco-friendly", "Nature tours", "Bird watching"],
                rating: 4.5,
                ratingText: "Excellent"
            },
            {
                name: "Horton Plains Mountain Lodge",
                image: "img/3.jpg",
                description: "Mountain lodge in Horton Plains with highland views and unique ecosystem access.",
                features: ["Mountain views", "Highland ecosystem", "Unique species", "Cool climate"],
                rating: 4.6,
                ratingText: "Excellent"
            }
        ],
        journeyHighlights: [
            {
                title: "Wildlife Safari",
                image: "img/yala.jpg",
                description: "Experience thrilling wildlife safaris in Yala and Udawalawe national parks, home to elephants, leopards, and diverse bird species.",
                features: ["Guided safari tours", "Wildlife photography", "Bird watching", "Nature walks"]
            },
            {
                title: "Cultural Heritage",
                image: "img/heritage.jpg",
                description: "Visit ancient temples, historical sites, and experience traditional Sri Lankan culture and customs.",
                features: ["Temple visits", "Cultural workshops", "Traditional dance", "Local market tours"]
            },
            {
                title: "Adventure Activities",
                image: "img/3.jpg",
                description: "Get your adrenaline pumping with exciting wildlife tracking, nature walks, and survival skills workshops.",
                features: ["Wildlife tracking", "Nature walks", "Survival skills", "Night safaris"]
            }
        ],
        faqs: [
            {
                question: "What wildlife can we expect to see on this tour?",
                answer: "You can expect to see leopards, elephants, sloth bears, crocodiles, various species of deer, and over 400 species of birds. The exact sightings depend on the season and wildlife activity."
            },
            {
                question: "Are the safari experiences safe?",
                answer: "Yes, all safaris are conducted by experienced guides in safe, open vehicles. We follow strict safety protocols and maintain appropriate distances from wildlife for both your safety and the animals' well-being."
            },
            {
                question: "What should we bring for the wildlife safaris?",
                answer: "We recommend bringing neutral-colored clothing, comfortable walking shoes, binoculars, camera equipment, sunscreen, and insect repellent. We'll provide a detailed packing list before your tour."
            },
            {
                question: "What is the best time for wildlife viewing?",
                answer: "The best time is during the dry season from January to April and July to September. Early morning and late afternoon safaris offer the best wildlife activity and photography opportunities."
            },
            {
                question: "Are the safari vehicles comfortable?",
                answer: "Yes, we use comfortable, open-top safari vehicles with cushioned seats and safety features. Each vehicle accommodates 6-8 guests for optimal wildlife viewing and photography."
            }
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival & Wildlife Introduction",
                image: "img/yala.jpg",
                description: "Begin your adventure with a warm welcome to Sri Lanka. After airport pickup, we'll head to the wildlife sanctuary and settle into your luxury lodge.",
                activities: ["Airport pickup and transfer", "Wildlife sanctuary orientation", "Luxury lodge check-in", "Welcome dinner"],
                highlights: ["First glimpse of wildlife", "Luxury accommodation", "Sunset views", "Wildlife introduction"],
                meals: "Dinner",
                stay: "Luxury Lodge in Wildlife Sanctuary"
            },
            {
                day: 2,
                title: "Yala National Park Safari",
                image: "img/yala.jpg",
                description: "Wake up early for your first safari experience in Yala National Park, known for its leopards and diverse wildlife.",
                activities: ["Morning safari", "Wildlife photography", "Bird watching", "Evening safari"],
                highlights: ["Leopard spotting", "Elephant herds", "Bird species", "Sunset safari"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Luxury Lodge in Yala"
            },
            {
                day: 3,
                title: "Udawalawe National Park",
                image: "img/udawalawa-header-one.webp",
                description: "Explore Udawalawe National Park, famous for its large elephant population and scenic landscapes.",
                activities: ["Elephant safari", "Nature walks", "Photography session", "Cultural village visit"],
                highlights: ["Elephant herds", "Scenic landscapes", "Local culture", "Traditional crafts"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Luxury Lodge in Udawalawe"
            },
            {
                day: 4,
                title: "Wilpattu National Park",
                image: "img/yala.jpg",
                description: "Discover Wilpattu National Park, known for its natural lakes and diverse wildlife including leopards and sloth bears.",
                activities: ["Wilpattu safari", "Lake exploration", "Wildlife tracking", "Nature photography"],
                highlights: ["Natural lakes", "Leopard spotting", "Sloth bear chance", "Wildlife diversity"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Luxury Lodge in Wilpattu"
            },
            {
                day: 5,
                title: "Minneriya National Park",
                image: "img/minneriya-elephant.jpg",
                description: "Experience the famous elephant gathering at Minneriya, where hundreds of elephants gather around the reservoir.",
                activities: ["Elephant gathering safari", "Reservoir views", "Elephant photography", "Wildlife observation"],
                highlights: ["Elephant gathering", "Large herds", "Reservoir beauty", "Photography opportunity"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Luxury Lodge in Cultural Triangle"
            },
            {
                day: 6,
                title: "Cultural Heritage Sites",
                image: "img/heritage.jpg",
                description: "Visit ancient temples and cultural sites, experiencing the rich heritage of Sri Lanka alongside wildlife experiences.",
                activities: ["Temple visits", "Cultural tours", "Historical learning", "Cultural photography"],
                highlights: ["Ancient temples", "Cultural heritage", "Historical insights", "Cultural immersion"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Luxury Lodge in Cultural Triangle"
            },
            {
                day: 7,
                title: "Bundala National Park",
                image: "img/yala.jpg",
                description: "Explore Bundala National Park, a wetland sanctuary perfect for bird watching and crocodile spotting.",
                activities: ["Bird watching", "Wetland safari", "Crocodile spotting", "Nature walks"],
                highlights: ["Bird diversity", "Wetland ecosystem", "Crocodile sightings", "Nature photography"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Luxury Lodge in Southern Coast"
            },
            {
                day: 8,
                title: "Sinharaja Forest Reserve",
                image: "img/3.jpg",
                description: "Venture into the UNESCO World Heritage Sinharaja Forest, home to endemic species and ancient rainforest.",
                activities: ["Forest trekking", "Endemic species spotting", "Rainforest exploration", "Nature photography"],
                highlights: ["UNESCO forest", "Endemic species", "Rainforest beauty", "Biodiversity learning"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Eco Lodge in Sinharaja"
            },
            {
                day: 9,
                title: "Kumana National Park",
                image: "img/yala.jpg",
                description: "Discover Kumana National Park, famous for its birdlife and seasonal bird migrations.",
                activities: ["Bird watching", "Migration observation", "Nature photography", "Wildlife tracking"],
                highlights: ["Bird migration", "Seasonal species", "Photography opportunity", "Wildlife diversity"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Luxury Lodge in Eastern Province"
            },
            {
                day: 10,
                title: "Gal Oya National Park",
                image: "img/udawalawa-header-one.webp",
                description: "Experience boat safaris in Gal Oya, offering unique perspectives on wildlife and scenic landscapes.",
                activities: ["Boat safari", "Water-based wildlife", "Scenic boat rides", "Wildlife photography"],
                highlights: ["Boat safari", "Water wildlife", "Scenic landscapes", "Unique perspective"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Luxury Lodge in Gal Oya"
            },
            {
                day: 11,
                title: "Horton Plains National Park",
                image: "img/3.jpg",
                description: "Explore the misty highlands of Horton Plains, home to unique highland species and stunning viewpoints.",
                activities: ["Highland trekking", "Viewpoint visits", "Highland species", "Mountain photography"],
                highlights: ["Highland ecosystem", "Misty landscapes", "Unique species", "Mountain views"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Luxury Lodge in Hill Country"
            },
            {
                day: 12,
                title: "Final Safari Experience",
                image: "img/yala.jpg",
                description: "Enjoy your final safari experience, combining all the skills and knowledge gained throughout your wildlife adventure.",
                activities: ["Final safari", "Wildlife photography", "Skill demonstration", "Memory making"],
                highlights: ["Final safari", "Skill showcase", "Memory creation", "Wildlife farewell"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Luxury Lodge in Wildlife Sanctuary"
            },
            {
                day: 13,
                title: "Departure & Farewell",
                image: "img/5.jpg",
                description: "Reflect on your incredible wildlife adventure over breakfast before transferring to the airport for departure.",
                activities: ["Reflection breakfast", "Memory sharing", "Hotel check-out", "Airport transfer"],
                highlights: ["Adventure reflection", "Memory sharing", "Smooth departure", "Wildlife farewell"],
                meals: "Breakfast",
                stay: "Departure"
            }
        ]
    },
    "Wildlife Paradise": {
        title: "Wildlife Paradise",
        subtitle: "Immerse yourself in Sri Lanka's rich biodiversity with guided tours through pristine wildlife sanctuaries.",
        heroImage: "img/c1.jpg",
        duration: "7 Nights 8 Days",
        price: "$999",
        category: "wildlife",
        overview: "Discover the peaceful side of Sri Lanka with visits to ancient temples, tea plantations, and spiritual retreats. This 7-day adventure focuses on wildlife and nature experiences, perfect for nature enthusiasts and wildlife photographers.",
        highlights: [
            "Guided nature walks and forest treks",
            "Bird watching and wildlife photography",
            "Eco-friendly lodge accommodations",
            "Sustainable tourism practices"
        ],
        features: [
            "7 Nights 8 Days",
            "Guided Nature Walks",
            "Bird Watching Tours",
            "Eco-Friendly Accommodation"
        ],
        accommodations: [
            {
                name: "Sinharaja Eco Lodge",
                image: "img/3.jpg",
                description: "Eco-friendly lodge in the heart of Sinharaja rainforest with guided nature tours.",
                features: ["Rainforest setting", "Eco-friendly design", "Nature tours", "Bird watching"],
                rating: 4.5,
                ratingText: "Excellent"
            },
            {
                name: "Forest Canopy Lodge",
                image: "img/2.jpg",
                description: "Unique lodge with canopy walk access and elevated views of the forest.",
                features: ["Canopy access", "Elevated views", "Forest immersion", "Unique experience"],
                rating: 4.6,
                ratingText: "Excellent"
            },
            {
                name: "Wildlife Conservation Center",
                image: "img/c1.jpg",
                description: "Conservation-focused accommodation with educational programs and wildlife experiences.",
                features: ["Conservation focus", "Educational programs", "Wildlife experiences", "Expert guides"],
                rating: 4.4,
                ratingText: "Very Good"
            }
        ],
        journeyHighlights: [
            {
                title: "Nature Exploration",
                image: "img/3.jpg",
                description: "Immerse yourself in the mystical rainforest with ancient trees and diverse wildlife.",
                features: ["Guided forest treks", "Wildlife spotting", "Bird watching", "Plant identification"]
            },
            {
                title: "Cultural Heritage",
                image: "img/heritage.jpg",
                description: "Experience the rich cultural heritage of Sri Lanka through ancient temples, traditional ceremonies, and local customs.",
                features: ["Temple visits", "Cultural workshops", "Traditional dance", "Local market tours"]
            },
            {
                title: "Adventure Activities",
                image: "img/2.jpg",
                description: "Get your adrenaline pumping with exciting canopy walks, wildlife tracking, and survival skills workshops.",
                features: ["Canopy walks", "Wildlife tracking", "Survival skills", "Night forest walks"]
            }
        ],
        faqs: [
            {
                question: "What types of wildlife can we see in the nature reserves?",
                answer: "You can expect to see various species of birds, butterflies, reptiles, and small mammals. The reserves are home to endemic species and migratory birds, making it a paradise for nature enthusiasts."
            },
            {
                question: "Are the nature walks suitable for all fitness levels?",
                answer: "We offer walks of varying difficulty levels. Our guides will assess your fitness and recommend appropriate trails. We also provide alternative options for those who prefer easier walks."
            },
            {
                question: "What should we bring for the nature tours?",
                answer: "We recommend comfortable walking shoes, lightweight clothing, binoculars, camera equipment, water bottle, and insect repellent. We'll provide a detailed packing list before your tour."
            },
            {
                question: "How eco-friendly are the accommodations?",
                answer: "Our eco-lodges follow sustainable practices including solar power, water conservation, organic gardens, and minimal environmental impact. They're certified by local eco-tourism organizations."
            },
            {
                question: "Can we participate in conservation activities?",
                answer: "Yes, we offer optional conservation activities like tree planting, wildlife monitoring, and educational programs about local ecosystems and conservation efforts."
            }
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival & Nature Introduction",
                image: "img/c1.jpg",
                description: "Begin your adventure with a warm welcome to Sri Lanka. After airport pickup, we'll head to the nature reserve and settle into your eco-lodge.",
                activities: ["Airport pickup and transfer", "Nature reserve orientation", "Eco-lodge check-in", "Welcome dinner"],
                highlights: ["First glimpse of nature", "Eco-friendly accommodation", "Sunset views", "Nature introduction"],
                meals: "Dinner",
                stay: "Eco Lodge in Nature Reserve"
            },
            {
                day: 2,
                title: "Deep Nature Exploration",
                image: "img/2.jpg",
                description: "Wake up to the sounds of nature and embark on your first guided trek through the pristine wilderness.",
                activities: ["Morning nature trek", "Bird watching session", "Plant identification walk", "Evening nature walk"],
                highlights: ["Rare plant species", "Endemic birds", "Biodiversity learning", "Sunset nature views"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Eco Lodge in Nature Reserve"
            },
            {
                day: 3,
                title: "Wildlife Photography",
                image: "img/c1.jpg",
                description: "Focus on wildlife photography with expert guidance, capturing the beauty of Sri Lanka's diverse wildlife.",
                activities: ["Wildlife photography", "Expert guidance", "Photo workshops", "Wildlife observation"],
                highlights: ["Professional photography", "Wildlife moments", "Skill development", "Nature appreciation"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Eco Lodge in Nature Reserve"
            },
            {
                day: 4,
                title: "Bird Watching Special",
                image: "img/3.jpg",
                description: "Dedicated day for bird watching, identifying endemic species and learning about Sri Lanka's avian diversity.",
                activities: ["Bird watching", "Species identification", "Bird photography", "Ornithology learning"],
                highlights: ["Bird diversity", "Endemic species", "Photography opportunity", "Learning experience"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Eco Lodge in Nature Reserve"
            },
            {
                day: 5,
                title: "Canopy Walk Adventure",
                image: "img/2.jpg",
                description: "Experience the forest from above with canopy walks, offering unique perspectives on the ecosystem.",
                activities: ["Canopy walks", "Tree-top exploration", "Aerial photography", "Ecosystem learning"],
                highlights: ["Canopy perspective", "Tree-top views", "Unique photography", "Ecosystem understanding"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Eco Lodge in Nature Reserve"
            },
            {
                day: 6,
                title: "Night Safari Experience",
                image: "img/c1.jpg",
                description: "Explore the nocturnal side of nature with guided night walks and wildlife spotting.",
                activities: ["Night nature walks", "Nocturnal wildlife", "Night photography", "Wildlife tracking"],
                highlights: ["Nocturnal wildlife", "Night adventure", "Unique experience", "Wildlife diversity"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Eco Lodge in Nature Reserve"
            },
            {
                day: 7,
                title: "Conservation & Learning",
                image: "img/heritage.jpg",
                description: "Learn about conservation efforts and sustainable tourism practices while contributing to local initiatives.",
                activities: ["Conservation workshop", "Local initiatives", "Sustainable practices", "Community interaction"],
                highlights: ["Conservation learning", "Local community", "Sustainable tourism", "Positive impact"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Eco Lodge in Nature Reserve"
            },
            {
                day: 8,
                title: "Departure & Farewell",
                image: "img/5.jpg",
                description: "Reflect on your nature adventure over breakfast before transferring to the airport for departure.",
                activities: ["Reflection breakfast", "Memory sharing", "Hotel check-out", "Airport transfer"],
                highlights: ["Nature reflection", "Memory sharing", "Smooth departure", "Nature farewell"],
                meals: "Breakfast",
                stay: "Departure"
            }
        ]
    },
    "Serene Sri Lanka": {
        title: "Serene Sri Lanka",
        subtitle: "Discover the peaceful side of Sri Lanka with visits to ancient temples, tea plantations, and spiritual retreats.",
        heroImage: "img/knls.jpg",
        duration: "9 Nights 10 Days",
        price: "$1,199",
        category: "cultural",
        overview: "Discover the peaceful side of Sri Lanka with visits to ancient temples, tea plantations, and spiritual retreats. This 9-day journey focuses on cultural and spiritual experiences, perfect for those seeking inner peace and cultural enrichment.",
        highlights: [
            "Ancient temple visits and meditation sessions",
            "Tea plantation tours and cultural experiences",
            "Wellness and spa treatments",
            "Spiritual guidance and cultural workshops"
        ],
        features: [
            "9 Nights 10 Days",
            "Temple & Meditation Tours",
            "Tea Plantation Visits",
            "Wellness & Spa Sessions"
        ],
        accommodations: [
            {
                name: "Spiritual Retreat Center",
                image: "img/knls.jpg",
                description: "Peaceful retreat center with meditation halls and spiritual guidance programs.",
                features: ["Meditation halls", "Spiritual guidance", "Peaceful setting", "Cultural programs"],
                rating: 4.7,
                ratingText: "Excellent"
            },
            {
                name: "Tea Estate Lodge",
                image: "img/nuwaraeliya.jpg",
                description: "Charming lodge in the heart of tea plantations with mountain views and tea experiences.",
                features: ["Tea plantation views", "Mountain setting", "Tea experiences", "Traditional charm"],
                rating: 4.6,
                ratingText: "Excellent"
            },
            {
                name: "Wellness Resort",
                image: "img/5.jpg",
                description: "Luxury wellness resort with Ayurvedic treatments and spa facilities.",
                features: ["Ayurvedic treatments", "Spa facilities", "Wellness programs", "Luxury amenities"],
                rating: 4.8,
                ratingText: "Exceptional"
            },
            {
                name: "Mountain Retreat",
                image: "img/nuwaraeliya.jpg",
                description: "Secluded mountain retreat with meditation spaces and panoramic views.",
                features: ["Secluded location", "Meditation spaces", "Panoramic views", "Tranquil atmosphere"],
                rating: 4.5,
                ratingText: "Excellent"
            }
        ],
        journeyHighlights: [
            {
                title: "Spiritual Journey",
                image: "img/knls.jpg",
                description: "Visit ancient temples and meditation centers to experience the spiritual side of Sri Lanka.",
                features: ["Temple visits", "Meditation sessions", "Spiritual guidance", "Cultural ceremonies"]
            },
            {
                title: "Tea Culture",
                image: "img/nuwaraeliya.jpg",
                description: "Explore the beautiful tea plantations of Nuwara Eliya and learn about the tea-making process.",
                features: ["Tea plantation tours", "Tea tasting", "Traditional methods", "Scenic views"]
            },
            {
                title: "Wellness & Relaxation",
                image: "img/5.jpg",
                description: "Rejuvenate your mind and body with traditional Ayurvedic treatments and spa sessions.",
                features: ["Ayurvedic treatments", "Spa sessions", "Yoga classes", "Meditation retreats"]
            }
        ],
        faqs: [
            {
                question: "What types of meditation sessions are included?",
                answer: "We offer various meditation styles including mindfulness, Vipassana, and guided meditation. Sessions are suitable for beginners and experienced practitioners, with instructors available for guidance."
            },
            {
                question: "Are the temple visits suitable for all religions?",
                answer: "Yes, we welcome visitors of all faiths. Our temple visits focus on cultural and historical significance rather than religious practice. We respect all religious beliefs and provide appropriate guidance."
            },
            {
                question: "What should we wear for temple visits?",
                answer: "Modest clothing is required - shoulders and knees should be covered. We recommend lightweight, comfortable clothing as you'll be removing shoes at many sites. We provide sarongs if needed."
            },
            {
                question: "Are the wellness treatments included in the package?",
                answer: "Basic wellness treatments are included. Premium treatments like specialized Ayurvedic therapies and extended spa sessions are available at additional cost. We'll provide a detailed treatment menu."
            },
            {
                question: "Can we participate in tea plantation activities?",
                answer: "Yes, you can participate in tea picking, tea processing demonstrations, and tea tasting sessions. These activities are included in the package and provide hands-on experience with Sri Lankan tea culture."
            }
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival & Spiritual Introduction",
                image: "img/knls.jpg",
                description: "Begin your spiritual journey with a warm welcome to Sri Lanka. After airport pickup, we'll head to the spiritual retreat center.",
                activities: ["Airport pickup and transfer", "Spiritual center orientation", "Retreat center check-in", "Welcome meditation"],
                highlights: ["First spiritual experience", "Meditation introduction", "Peaceful environment", "Spiritual atmosphere"],
                meals: "Dinner",
                stay: "Spiritual Retreat Center"
            },
            {
                day: 2,
                title: "Temple & Meditation",
                image: "img/heritage.jpg",
                description: "Visit ancient temples and participate in guided meditation sessions to begin your spiritual journey.",
                activities: ["Temple visits", "Meditation sessions", "Spiritual guidance", "Cultural workshops"],
                highlights: ["Ancient temples", "Meditation practice", "Cultural learning", "Spiritual growth"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Spiritual Retreat Center"
            },
            {
                day: 3,
                title: "Tea Plantation Experience",
                image: "img/nuwaraeliya.jpg",
                description: "Explore the beautiful tea plantations of Nuwara Eliya and learn about traditional tea-making methods.",
                activities: ["Tea plantation tour", "Tea tasting", "Traditional methods", "Scenic photography"],
                highlights: ["Tea culture", "Mountain views", "Traditional learning", "Cultural experience"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Tea Estate Lodge"
            },
            {
                day: 4,
                title: "Ayurvedic Wellness",
                image: "img/5.jpg",
                description: "Experience traditional Ayurvedic treatments and wellness sessions designed to rejuvenate mind and body.",
                activities: ["Ayurvedic consultation", "Wellness treatments", "Health assessment", "Wellness planning"],
                highlights: ["Traditional medicine", "Health focus", "Wellness assessment", "Holistic approach"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Wellness Resort"
            },
            {
                day: 5,
                title: "Yoga & Meditation Retreat",
                image: "img/knls.jpg",
                description: "Immerse yourself in daily yoga and meditation practices in a serene mountain setting.",
                activities: ["Morning yoga", "Meditation sessions", "Breathing exercises", "Mindfulness practice"],
                highlights: ["Yoga practice", "Meditation focus", "Breathing techniques", "Mindfulness"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Wellness Resort"
            },
            {
                day: 6,
                title: "Cultural Village Experience",
                image: "img/heritage.jpg",
                description: "Visit traditional villages and learn about local customs, traditional crafts, and cultural practices.",
                activities: ["Village tour", "Traditional crafts", "Local customs", "Cultural interaction"],
                highlights: ["Local culture", "Traditional crafts", "Cultural learning", "Community interaction"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Cultural Village Lodge"
            },
            {
                day: 7,
                title: "Spiritual Pilgrimage",
                image: "img/knls.jpg",
                description: "Embark on a spiritual pilgrimage to sacred sites and ancient temples across the region.",
                activities: ["Sacred site visits", "Pilgrimage rituals", "Spiritual ceremonies", "Meditation practice"],
                highlights: ["Sacred sites", "Pilgrimage experience", "Spiritual ceremonies", "Deep meditation"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Spiritual Retreat Center"
            },
            {
                day: 8,
                title: "Mountain Serenity",
                image: "img/nuwaraeliya.jpg",
                description: "Experience the tranquility of the mountain regions with peaceful walks and meditation in nature.",
                activities: ["Mountain walks", "Nature meditation", "Scenic photography", "Peaceful reflection"],
                highlights: ["Mountain tranquility", "Nature meditation", "Scenic beauty", "Peaceful reflection"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Mountain Retreat"
            },
            {
                day: 9,
                title: "Wellness & Spa Day",
                image: "img/5.jpg",
                description: "Focus on final wellness treatments and spa sessions to complete your rejuvenation journey.",
                activities: ["Spa treatments", "Wellness therapies", "Relaxation sessions", "Final wellness"],
                highlights: ["Spa relaxation", "Wellness completion", "Final treatments", "Complete rejuvenation"],
                meals: "Breakfast, Lunch, Dinner",
                stay: "Wellness Resort"
            },
            {
                day: 10,
                title: "Departure & Spiritual Farewell",
                image: "img/knls.jpg",
                description: "Reflect on your spiritual journey over breakfast before transferring to the airport for departure.",
                activities: ["Spiritual reflection", "Memory sharing", "Hotel check-out", "Airport transfer"],
                highlights: ["Spiritual reflection", "Memory sharing", "Smooth departure", "Spiritual farewell"],
                meals: "Breakfast",
                stay: "Departure"
            }
        ]
    }
};

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

// Contact page scroll to top button
function initContactScrollToTop() {
    const contactScrollTopBtn = document.querySelector('.contactpage_scroll-top');
    if (contactScrollTopBtn) {
        // Show/hide button on scroll
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                contactScrollTopBtn.classList.add('show');
            } else {
                contactScrollTopBtn.classList.remove('show');
            }
        });

        // Smooth scroll to top on click
        contactScrollTopBtn.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
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
    initContactScrollToTop();
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

// Tour Package Details Page - Scroll to Top functionality
document.addEventListener('DOMContentLoaded', function() {
    const scrollTopBtn = document.querySelector('.scroll-top');
    
    if (scrollTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });
        
        scrollTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// ===== TOUR PACKAGE FUNCTIONS =====

// Function to get package details by name
function getPackageDetails(packageName) {
    return tourPackages[packageName] || null;
}

// Function to handle package selection from packages page
function viewPackageDetails(packageName) {
    window.location.href = `tourPackageDetails.html?package=${encodeURIComponent(packageName)}`;
}

// Function to load package details on the details page
function loadPackageDetails() {
    console.log('Loading package details...');
    const urlParams = new URLSearchParams(window.location.search);
    const packageName = urlParams.get('package');
    console.log('Package name from URL:', packageName);
    
    if (!packageName) {
        console.log('No package specified, redirecting...');
        // Redirect to packages page if no package specified
        window.location.href = 'tourPackages.html';
        return;
    }
    
    const packageData = getPackageDetails(packageName);
    console.log('Package data found:', packageData);
    if (!packageData) {
        console.log('Package not found, redirecting...');
        // Redirect to packages page if package not found
        window.location.href = 'tourPackages.html';
        return;
    }
    
    // Update page title
    document.title = `${packageData.title} - Manon Lanka Tours`;
    
    // Update hero section
    const heroSection = document.querySelector('.package-details-hero');
    if (heroSection) {
        heroSection.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${packageData.heroImage}')`;
    }
    
    // Update hero content
    const heroTitle = document.querySelector('.package-details-hero h1');
    if (heroTitle) {
        heroTitle.textContent = packageData.title;
    }
    
    const heroSubtitle = document.querySelector('.package-details-hero .hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = packageData.subtitle;
    }
    
    // Update package info
    const packageInfo = document.querySelector('.package-info');
    if (packageInfo) {
        const durationElement = packageInfo.querySelector('.info-item:first-child span');
        if (durationElement) {
            durationElement.textContent = packageData.duration;
        }
        
        const priceElement = packageInfo.querySelector('.current-price');
        if (priceElement) {
            priceElement.textContent = packageData.price;
        }
    }
    
    // Update sidebar package details
    const packageDuration = document.getElementById('package-duration');
    if (packageDuration) {
        packageDuration.textContent = packageData.duration;
    }
    
    const packageCategory = document.getElementById('package-category');
    if (packageCategory) {
        // Capitalize first letter and add " Tours" for better display
        const category = packageData.category.charAt(0).toUpperCase() + packageData.category.slice(1) + ' Tours';
        packageCategory.textContent = category;
    }
    
    const packageCurrentPrice = document.getElementById('package-current-price');
    if (packageCurrentPrice) {
        packageCurrentPrice.textContent = packageData.price;
    }
    
    // Calculate and set original price (20% higher than current price for discount display)
    const packageOriginalPrice = document.getElementById('package-original-price');
    if (packageOriginalPrice) {
        const currentPrice = parseFloat(packageData.price.replace('$', '').replace(',', ''));
        const originalPrice = Math.round(currentPrice * 1.2);
        packageOriginalPrice.textContent = `$${originalPrice.toLocaleString()}`;
    }
    
    // Update package overview
    const overviewTitle = document.querySelector('.package-overview h2');
    if (overviewTitle) {
        overviewTitle.textContent = 'Tour Package Overview';
    }
    
    const overviewText = document.querySelector('.package-overview .lead');
    if (overviewText) {
        overviewText.textContent = packageData.overview;
    }
    
    // Update package highlights
    const highlightsList = document.querySelector('.highlights-list');
    if (highlightsList) {
        try {
            highlightsList.innerHTML = packageData.highlights.map(highlight => 
                `<li><i class="fas fa-check-circle text-success"></i> ${highlight}</li>`
            ).join('');
            console.log('Package highlights updated successfully');
        } catch (error) {
            console.error('Error updating package highlights:', error);
        }
    } else {
        console.warn('Highlights list container not found');
    }
    
    // Update package features
    const featuresList = document.querySelector('.package-features');
    if (featuresList) {
        try {
            featuresList.innerHTML = packageData.features.map(feature => 
                `<li><i class="fas fa-check"></i> ${feature}</li>`
            ).join('');
            console.log('Package features updated successfully');
        } catch (error) {
            console.error('Error updating package features:', error);
        }
    } else {
        console.warn('Features list container not found');
    }
    
    // Update journey highlights
    const journeyHighlightsContainer = document.querySelector('.journey-highlights .row');
    if (journeyHighlightsContainer) {
        try {
            journeyHighlightsContainer.innerHTML = packageData.journeyHighlights.map((highlight, index) => `
                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="${(index + 1) * 100}">
                    <div class="packagespage_package-card highlight-card">
                        <img src="${highlight.image}" alt="${highlight.title}">
                        <div class="card-body">
                            <h3>${highlight.title}</h3>
                            <p>${highlight.description}</p>
                            <ul class="packagespage_package-features">
                                ${highlight.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            `).join('');
            console.log('Journey highlights updated successfully');
        } catch (error) {
            console.error('Error updating journey highlights:', error);
        }
    } else {
        console.warn('Journey highlights container not found');
    }
    
    // Update itinerary title
    const itineraryTitle = document.getElementById('itinerary-title');
    if (itineraryTitle) {
        itineraryTitle.textContent = `${packageData.itinerary.length}-Day ${packageData.title} Itinerary`;
        console.log('Itinerary title updated successfully');
    } else {
        console.warn('Itinerary title container not found');
    }
    
    // Update itinerary
    const itineraryContainer = document.querySelector('.itinerary-timeline');
    if (itineraryContainer) {
        try {
            itineraryContainer.innerHTML = packageData.itinerary.map((day, index) => `
                <div class="itinerary-day" data-aos="fade-up">
                    <div class="day-number">${day.day}</div>
                    <div class="day-left-content">
                        <div class="day-header">
                            <h3 class="day-title">${day.title}</h3>
                            <div class="day-header-bottom">
                                <span class="day-type"><i class="fas fa-calendar"></i> Full Day</span>
                                <div class="day-info">
                                    <span><i class="fas fa-utensils"></i> ${day.meals}</span>
                                    <span><i class="fas fa-bed"></i> ${day.stay}</span>
                                </div>
                            </div>
                        </div>
                        <div class="day-details">
                            <p>${day.description}</p>
                            <div class="detail-section">
                                <h4><i class="fas fa-tasks text-success"></i> Key Activities</h4>
                                <ul>
                                    ${day.activities.map(activity => `<li>${activity}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="day-right-content">
                        <div class="day-image">
                            <img src="${day.image}" alt="${day.title}">
                        </div>
                        <div class="day-image-secondary">
                            <img src="${day.image}" alt="${day.title} - Secondary">
                        </div>
                    </div>
                </div>
            `).join('');
            console.log('Itinerary updated successfully');
        } catch (error) {
            console.error('Error updating itinerary:', error);
        }
    } else {
        console.warn('Itinerary container not found');
    }
    
    // Update accommodation section
    const accommodationTitle = document.getElementById('accommodation-title');
    if (accommodationTitle) {
        accommodationTitle.textContent = 'Places You\'ll Stay';
    }
    
    const accommodationSubtitle = document.getElementById('accommodation-subtitle');
    if (accommodationSubtitle) {
        accommodationSubtitle.textContent = `Experience comfort and luxury in carefully selected accommodations that complement your ${packageData.category} adventure.`;
    }
    
    const accommodationContainer = document.getElementById('accommodation-container');
    if (accommodationContainer && packageData.accommodations) {
        try {
            accommodationContainer.innerHTML = packageData.accommodations.map((accommodation, index) => `
                <div class="col-xl-4 col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="${(index + 1) * 100}">
                    <div class="packagespage_package-card accommodation-card">
                        <img src="${accommodation.image}" alt="${accommodation.name}">
                        <div class="card-body">
                            <h3>${accommodation.name}</h3>
                            <p>${accommodation.description}</p>
                            <ul class="packagespage_package-features">
                                ${accommodation.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
                            </ul>
                            <div class="accommodation-rating">
                                <span class="rating-stars">
                                    ${generateStarRating(accommodation.rating)}
                                </span>
                                <span class="rating-text">${accommodation.rating} - ${accommodation.ratingText}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
            console.log('Accommodation section updated successfully');
        } catch (error) {
            console.error('Error updating accommodation section:', error);
        }
    } else {
        console.warn('Accommodation container not found or no accommodation data');
    }
    
    // Update FAQ section
    const faqContainer = document.querySelector('.faq-container');
    if (faqContainer && packageData.faqs) {
        try {
            faqContainer.innerHTML = packageData.faqs.map((faq, index) => `
                <div class="faq-item" data-aos="fade-up" data-aos-delay="${(index + 1) * 100}">
                    <div class="faq-question" onclick="toggleFaq(${index})">
                        <h4>${faq.question}</h4>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <div class="faq-answer" id="faq-answer-${index}">
                        <p>${faq.answer}</p>
                    </div>
                </div>
            `).join('');
            console.log('FAQ section updated successfully');
        } catch (error) {
            console.error('Error updating FAQ section:', error);
        }
    } else {
        console.warn('FAQ container not found or no FAQ data');
    }
    
    console.log('Package details loading completed successfully');
}

// Helper function to generate star ratings
function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let stars = '';
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    // Add half star if needed
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Function to populate tour packages page dynamically
function populateTourPackages() {
    console.log('Populating tour packages page...');
    
    // Get all package items
    const packageItems = document.querySelectorAll('.packagespage_package-item');
    
    packageItems.forEach(item => {
        // Find the package name from the onclick attribute
        const clickableCard = item.querySelector('.clickable-package');
        if (clickableCard) {
            const onclickAttr = clickableCard.getAttribute('onclick');
            const packageNameMatch = onclickAttr.match(/viewPackageDetails\('([^']+)'\)/);
            
            if (packageNameMatch) {
                const packageName = packageNameMatch[1];
                const packageData = getPackageDetails(packageName);
                
                if (packageData) {
                    console.log('Updating package:', packageName);
                    
                    // Update package features
                    const featuresList = item.querySelector('.packagespage_package-features');
                    if (featuresList) {
                        featuresList.innerHTML = packageData.features.map(feature => 
                            `<li><i class="fas fa-check"></i> ${feature}</li>`
                        ).join('');
                    }
                    
                    // Update package price
                    const priceElement = item.querySelector('.packagespage_package-price');
                    if (priceElement) {
                        priceElement.textContent = packageData.price;
                    }
                    
                    // Update package description if it exists
                    const descriptionElement = item.querySelector('.card-body p');
                    if (descriptionElement) {
                        descriptionElement.textContent = packageData.subtitle;
                    }
                }
            }
        }
    });
    
    console.log('Tour packages page populated successfully');
}



// Initialize tour packages page
if (window.location.pathname.includes('tourPackages.html')) {
    document.addEventListener('DOMContentLoaded', function() {
        console.log('Tour packages page loaded, initializing...');
        populateTourPackages();
    });
}

// ===== TOUR PACKAGE DETAILS PAGE FUNCTIONS =====

// Function to get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Function to update page content based on package parameter
function updatePackageContent() {
    const packageName = getUrlParameter('package');

    if (packageName) {
        // Update the page title
        document.title = packageName + ' - Manon Lanka Tours';

        // Update the hero section title
        const heroTitle = document.querySelector('.package-details-hero h1');
        if (heroTitle) {
            heroTitle.textContent = packageName;
        }

        // Update the page heading
        const pageHeading = document.querySelector('.package-main-content h2');
        if (pageHeading) {
            pageHeading.textContent = packageName + ' Overview';
        }

        // You can add more dynamic content updates here based on the package
        console.log('Package selected:', packageName);
    }
}

// Function to toggle FAQ answers
function toggleFaq(index) {
    const faqAnswer = document.getElementById(`faq-answer-${index}`);
    const faqQuestion = event.currentTarget;
    const icon = faqQuestion.querySelector('i');

    if (faqAnswer.style.display === 'block') {
        faqAnswer.style.display = 'none';
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    } else {
        faqAnswer.style.display = 'block';
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    }
}

// Initialize tour package details page
if (window.location.pathname.includes('tourPackageDetails.html')) {
    document.addEventListener('DOMContentLoaded', function() {
        console.log('Tour package details page loaded, initializing...');
        updatePackageContent();
        loadPackageDetails();
    });
}
