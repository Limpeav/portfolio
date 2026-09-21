import foodDeliveryImage from '../assets/food_delivery.jpg';

export const portfolioData = {
  personal: {
    name: "Hour Limpeav",
    role: "Backend Developer",
    secondaryRole: "Spring Boot / Java · Node.js · REST APIs · PostgreSQL & MongoDB",
    tagline: "Fourth-year Software Development student at Norton University with a strong interest in Flutter and mobile app development, building beautiful, responsive, and user-friendly applications. Passionate about creating real-world solutions and continuously learning new technologies to grow as a Flutter developer.",
    bio: "I'm a passionate software development student at Norton University with experience building RESTful APIs and backend applications using Java, Spring Boot, Node.js, Express.js, React.js, Flutter, MongoDB, and PostgreSQL. I have developed e-commerce applications involving authentication, product management, order processing, database integration, and REST APIs. I am currently strengthening my skills in Spring Boot, JPA/Hibernate, PostgreSQL, JWT authentication, and backend architecture. I am looking for a Backend Developer Internship where I can apply my knowledge, learn from experienced developers, and contribute to building reliable and scalable applications.",
    location: "Krong Ta Khmao, Kandal, Cambodia",
    phone: "+855 16 568 335",
    status: "Available for Backend Developer Internship",
    avatar: `${import.meta.env.BASE_URL}images/avatar.jpg`,
    email: "limpeavhour@gmail.com",
    github: "https://github.com/Limpeav",
    telegram: "https://t.me/lim_peav",
    telegramHandle: "@lim_peav",
    portfolioUrl: "https://limpeav-portfolio.lovable.app/",
    resumeUrl: `${import.meta.env.BASE_URL}Hour_Limpeav_CV.pdf`,
    resumeFileName: "Hour_Limpeav_CV.pdf",
    stats: [
      { label: "Opportunity Focus", value: "Backend Developer Internship" },
      { label: "Completed Projects", value: "8+" },
      { label: "Technologies Mastered", value: "12+" },
      { label: "Code Commits", value: "350+" }
    ]
  },

  skills: {
    flutterMobile: [
      { name: "Flutter & Dart", level: 85, popular: true },
      { name: "BLoC / Cubit", level: 82, popular: true },
      { name: "REST API Integration", level: 85, popular: true },
      { name: "Firebase", level: 80, popular: false },
      { name: "Authentication", level: 82, popular: false },
      { name: "Responsive UI", level: 85, popular: false },
      { name: "State Management", level: 82, popular: false },
      { name: "Google Maps Integration", level: 75, popular: false }
    ],
    backend: [
      { name: "Java / Spring Boot", level: 75, popular: false },
      { name: "Node.js / Express.js", level: 78, popular: false },
      { name: "RESTful API Design", level: 80, popular: false },
      { name: "JWT Authentication", level: 78, popular: false },
      { name: "API Integration", level: 85, popular: false }
    ],
    databases: [
      { name: "PostgreSQL", level: 75, popular: false },
      { name: "MongoDB", level: 78, popular: false },
      { name: "SQL & Relational DBs", level: 75, popular: false },
      { name: "Firebase Firestore", level: 75, popular: false }
    ],
    toolsWorkflow: [
      { name: "Git & GitHub", level: 85, popular: true },
      { name: "Postman", level: 85, popular: false },
      { name: "Figma", level: 78, popular: false },
      { name: "VS Code", level: 90, popular: false },
      { name: "Android Studio", level: 80, popular: false }
    ]
  },

  projects: [
    {
      id: "ecommerce-platform",
      title: "Cherish Baby Store - E-Commerce Platform",
      category: "Full Stack",
      tags: ["Node.js", "Express.js", "React.js", "Flutter", "MongoDB", "Tailwind CSS", "Bakong KHQR"],
      image: `${import.meta.env.BASE_URL}images/ecommerce-combined-banner.jpg`,
      description: "An omnichannel e-commerce platform for a baby product store with dedicated portals for Admins, Sellers, and Delivery staff — plus a customer web store and Flutter mobile app. Supports real-time order management, NBC Bakong KHQR payments, Google Maps delivery pinning, and AI-powered sentiment analysis on customer reviews in both Khmer and English.",
      highlights: [
        "Admin Portal on Laptop: Real-time revenue analytics ($507.09+), 17+ orders, sales trends, supplier management, and automated stock alerts",
        "Seller Role on Laptop: High-volume web order fulfillment for 317+ orders ($33,884.94 revenue), thermal receipt printing, and daily cash reports",
        "Delivery Fleet on Mobile Safari: Responsive driver web app for Today's Runs, route stops, interactive location mapping, and one-tap delivery handoff",
        "Customer Web Store on Laptop: Modern shopping experience with AI-inspired recommendations, category filtering, dual-currency (USD/KHR), and wishlist",
        "Customer Mobile App on iPhone: High-performance native Flutter iOS client with flash deals countdown, search, and persistent cart",
        "Integrated Bakong KHQR national digital payment gateway, JWT authentication, and MongoDB database"
      ],
      metrics: "5 Dedicated Devices & Roles · Web, Desktop & Mobile Flutter",
      liveUrl: "https://cherishbabykhstore.store/customer",
      adminUrl: "https://e-commerce-l77z.onrender.com/admin",
      sellerUrl: "https://e-commerce-l77z.onrender.com/seller/orders",
      deliveryUrl: "https://e-commerce-l77z.onrender.com/delivery/orders",
      githubUrl: "https://github.com/Limpeav/e-commerce",
      featured: true,
      devices: [
        {
          id: "admin",
          role: "Admin Portal",
          label: "Admin",
          device: "Laptop",
          deviceName: "MacBook Pro",
          icon: "laptop",
          badge: "Business Intelligence",
          image: `${import.meta.env.BASE_URL}images/ecommerce-admin-laptop.jpg`,
          rawImage: `${import.meta.env.BASE_URL}images/ecommerce-admin-raw.png`,
          route: "e-commerce-l77z.onrender.com/admin",
          description: "Full visibility and governance over platform performance. Monitors net revenue ($507.09+), order throughput (17 orders), average order value ($56.34), stock reorders, user permissions, and financial controls.",
          keyFeatures: [
            "Real-time revenue & sales trend charts",
            "Supplier & Purchase Order workflows",
            "Inventory depletion alerts & stock replenishing",
            "Role-based staff & security access control"
          ]
        },
        {
          id: "seller",
          role: "Seller Role",
          label: "Seller",
          device: "Laptop",
          deviceName: "MacBook Pro",
          icon: "laptop",
          badge: "Order Processing",
          image: `${import.meta.env.BASE_URL}images/ecommerce-seller-laptop.jpg`,
          rawImage: `${import.meta.env.BASE_URL}images/ecommerce-seller-raw.png`,
          route: "e-commerce-l77z.onrender.com/seller/orders",
          description: "Optimized web application for seller order fulfillment and packaging. Oversees 317 total orders with $33,884.94 in revenue, instant status transitions (Pending to Delivered), thermal receipt generation, and cash reconciliations.",
          keyFeatures: [
            "Daily grouped order batch processing (317+ orders)",
            "One-click 'Print Receipt' for physical orders",
            "Cash on delivery tracking & revenue audit ($33,884.94)",
            "Real-time order hand-off to delivery fleet"
          ]
        },
        {
          id: "delivery",
          role: "Delivery Fleet",
          label: "Delivery",
          device: "Mobile Phone (Safari)",
          deviceName: "iPhone (Mobile Safari)",
          icon: "smartphone",
          badge: "Courier Web App",
          image: `${import.meta.env.BASE_URL}images/ecommerce-delivery-safari.jpg`,
          rawImage: `${import.meta.env.BASE_URL}images/ecommerce-delivery-raw.png`,
          route: "e-commerce-l77z.onrender.com/delivery/orders",
          description: "Fast-loading, mobile Safari-optimized driver portal. Displays 'Today's Runs', processing and accepted delivery queues, customer drop-off addresses, phone dial shortcuts, and 'View Map' navigation.",
          keyFeatures: [
            "Optimized for Apple Safari on iPhone mobile web",
            "Active stop tracking & customer contact shortcuts",
            "Integrated route mapping for Phnom Penh addresses",
            "Instant 'Accept Run' and proof-of-delivery status"
          ]
        },
        {
          id: "customer-web",
          role: "Customer Website",
          label: "Customer Web",
          device: "Laptop",
          deviceName: "MacBook Pro",
          icon: "laptop",
          badge: "E-Commerce Storefront",
          image: `${import.meta.env.BASE_URL}images/ecommerce-customer-laptop.jpg`,
          rawImage: `${import.meta.env.BASE_URL}images/ecommerce-customer-web-raw.png`,
          route: "cherishbabykhstore.store/customer",
          description: "Sophisticated customer-facing storefront for Cherish Baby Store. Features curated 'Recommended For You' collections, category filters (Clothing, Toys, Nursing, Diapers), wishlist, and dual USD/KHR pricing.",
          keyFeatures: [
            "Product search with real-time query suggestions",
            "Category filters & product quick-view details",
            "Dynamic cart with real-time stock sync",
            "Seamless Bakong KHQR QR-code checkout"
          ]
        },
        {
          id: "customer-mobile",
          role: "Customer Mobile",
          label: "Customer App",
          device: "Mobile Phone (App)",
          deviceName: "iPhone (Flutter App)",
          icon: "smartphone",
          badge: "Native Flutter Client",
          image: `${import.meta.env.BASE_URL}images/ecommerce-customer-mobile.jpg`,
          rawImage: `${import.meta.env.BASE_URL}images/ecommerce-customer-mobile-raw.png`,
          route: "Cherish Baby Store (Flutter iOS/Android)",
          description: "Crafted with Flutter & Dart for ultra-smooth 60fps mobile performance. Features Dynamic Island integration, dark/light mode toggle, Flash Deals with live countdown timers, and bottom navigation.",
          keyFeatures: [
            "Cross-platform Flutter / Dart native architecture",
            "Flash deals banner with live countdown timer",
            "Bottom navigation (Home, Explore, Bag, Saved, Profile)",
            "Fluid 60fps touch gestures & animated cart"
          ]
        },
        {
          id: "ecosystem",
          role: "All Devices Ecosystem",
          label: "All Devices",
          device: "Multi-Device",
          deviceName: "MacBooks (Web Portals) + iPhones",
          icon: "layers",
          badge: "Unified Architecture",
          image: `${import.meta.env.BASE_URL}images/ecommerce-combined-banner.jpg`,
          rawImage: `${import.meta.env.BASE_URL}images/ecommerce-combined-banner.jpg`,
          route: "Node.js · MongoDB · React · Flutter",
          description: "The complete unified omnichannel ecosystem connecting administrators, warehouse sellers, on-the-road couriers, and omnichannel customers across web and mobile.",
          keyFeatures: [
            "Centralized RESTful API backend on Node.js & Express",
            "MongoDB Atlas cluster with real-time inventory updates",
            "Bakong KHQR instant Cambodian digital payments",
            "End-to-end order lifecycle: Cart → Payment → Pack → Deliver"
          ]
        }
      ]
    },
    {
      id: "student-management-system",
      title: "Student Management System — Spring Boot & Next.js",
      category: "Full Stack",
      tags: ["Spring Boot", "Spring Security", "JPA/Hibernate", "PostgreSQL", "Next.js", "TypeScript", "Tailwind CSS", "RESTful API"],
      image: `${import.meta.env.BASE_URL}images/student-management-system.jpg`,
      description: "A full-stack student management platform with secure admin authentication and a responsive dashboard for managing student records. Built with Spring Boot, Spring Security, JPA/Hibernate, and PostgreSQL on the backend, and Next.js, TypeScript, and Tailwind CSS on the frontend — featuring RESTful API integration and complete student CRUD operations.",
      highlights: [
        "Secure Admin Authentication: Spring Security-powered login with JWT-based session management and role-based access control",
        "Responsive Dashboard: Modern Next.js & TypeScript admin UI built with Tailwind CSS for managing all student records at a glance",
        "Complete Student CRUD: Create, read, update, and delete student records via clean RESTful API endpoints",
        "Spring Data JPA / Hibernate: Robust ORM layer with PostgreSQL for reliable, scalable relational data persistence",
        "RESTful API Integration: Well-structured API consumed by the Next.js frontend for seamless full-stack communication",
        "Type-Safe Frontend: Fully typed TypeScript codebase on the Next.js client for maintainable and error-free UI development"
      ],
      metrics: "Spring Boot · Next.js · PostgreSQL · Full CRUD",
      githubUrl: "https://github.com/Limpeav",
      featured: true
    },
    {
      id: "cravery-food-delivery",
      title: "Cravery — Food Delivery App",
      category: "Mobile",
      tags: ["Flutter", "Spring Boot", "Google Authentication", "Maps", "Payments", "Notifications"],
      image: foodDeliveryImage,
      description: "Cravery is a Flutter-based food delivery customer app integrated with a Spring Boot backend. It features Google authentication, Cambodian phone validation, restaurant and food discovery, cart and checkout, payments, real-time order tracking, maps, notifications, and customer reviews.",
      highlights: [
        "Flutter customer app connected to a Spring Boot backend",
        "Google authentication and Cambodian phone validation",
        "Restaurant and food discovery with cart and checkout",
        "Payments, real-time order tracking, maps, notifications, and customer reviews"
      ],
      metrics: "Flutter · Spring Boot · Real-Time Tracking",
      featured: true
    },
    {
      id: "foodpanda-flutter-clone",
      title: "FoodPanda UI Clone — Flutter & Dart",
      category: "Mobile",
      tags: ["Flutter", "Dart", "Material Design", "Bottom Navigation", "UI/UX"],
      image: `${import.meta.env.BASE_URL}images/project-foodpanda-flutter.jpg`,
      description: "A pixel-perfect Flutter & Dart UI clone of the FoodPanda mobile app, replicating the full 4-tab navigation experience: Food (home with pink hero banner, category shortcuts & restaurant cards), Grocery (shop listings with delivery times), Search (recent & popular chips), and Account (profile menu & sign-up flow).",
      highlights: [
        "Food tab: Pink header with live delivery address, promotional 'Free Delivery' hero banner, Offers / New / Pick-up / pandasends / Vouchers icon row, and horizontally scrollable restaurant cards",
        "Grocery tab: Popular Shops section with branded shop tiles (AEON, MeanMean, K Ground, Lay Kong), delivery time badges, and promotional deal banners",
        "Search tab: Functional search bar, dismissible 'Recent searches' chips, and 'Popular searches in Restaurants & Shops' chip grids",
        "Account tab: 'Ready to satisfy your cravings?' CTA, Perks & General settings list, Version footer, and pink 'Sign up or login' flow with Facebook, Google, Email & Phone auth buttons",
        "Consistent FoodPanda brand system: #FF2B85 pink primary, Panda mascot, custom bottom nav bar with active-state highlighting"
      ],
      metrics: "4 Screens · Full Bottom Nav · FoodPanda Brand System",
      githubUrl: "https://github.com/Limpeav",
      featured: true
    },
    {
      id: "hotel-operations-dashboard",
      title: "Hotel Operations Dashboard — PHP & PostgreSQL",
      category: "Full Stack",
      tags: ["PHP", "PostgreSQL", "JavaScript", "HTML/CSS", "Role-Based Access", "Dark UI"],
      image: `${import.meta.env.BASE_URL}images/hotel-combined-banner.jpg`,
      description: "A full-stack hotel operations dashboard built with PHP & PostgreSQL. Features role-based access control for Admins and Front-Desk staff, a live room availability matrix, guest check-in/check-out workflows, booking management, and a daily revenue report — all wrapped in a modern dark UI.",
      highlights: [
        "Role-Based Access Control: Admin portal with full operations visibility (revenue analytics, room management, guest list, daily reports) and a streamlined Front-Desk dashboard for check-ins and new bookings",
        "Live Room Status Matrix: Real-time 24-room availability grid with instant filtering by All / Available / Booked status and per-room type & nightly rate display",
        "Guest Check-In / Check-Out: One-click check-in and check-out flows with in-house guest tracking and occupancy rate monitoring (50% occupancy demonstrated)",
        "Booking Management: Full reservation lifecycle — create, view, and manage bookings with today's bookings counter and guest scheduling overview",
        "Daily Revenue Report: Automated daily revenue tracking with estimated room-charge summaries and active revenue KPI cards ($1,840 demonstrated)",
        "Modern Dark UI: Glassmorphism-inspired dark theme with stat cards, gradient accents, animated sidebar navigation, and responsive layout"
      ],
      metrics: "2 Roles · 24 Rooms · Live Matrix · Daily Revenue Report",
      githubUrl: "https://github.com/Limpeav/Hotel-Mangement",
      featured: true
    },
    {
      id: "elearning-platform",
      title: "E-Learning & Course Portal",
      category: "Full Stack",
      tags: ["PHP", "MySQL", "JavaScript", "CSS"],
      image: `${import.meta.env.BASE_URL}images/project-ai.jpg`,
      description: "Interactive online learning platform facilitating student enrollment, modular course curriculums, video lesson streaming, and automated quiz scoring.",
      highlights: [
        "Student dashboard for course enrollment, progress tracking, and interactive quiz evaluations",
        "Instructor management portal for curriculum authoring, lesson publishing, and assignment grading",
        "Normalized MySQL relational schema for high-performance student query retrieval"
      ],
      metrics: "Interactive Lessons & Quizzes",
      githubUrl: "https://github.com/Limpeav",
      featured: true
    }
  ],

  experience: [
    {
      type: "experience",
      label: "Academic Research Project · PCHUNCHANACSAMAI CO., LTD.",
      period: "2025 — 2026",
      role: "Full-Stack Developer — Cherish Baby E-Commerce Platform",
      company: "PCHUNCHANACSAMAI CO., LTD.",
      location: "Phnom Penh, Cambodia",
      description: "Designed and developed a full-stack e-commerce platform for baby products as an applied research thesis, combining web, mobile, AI-powered sentiment analysis, real-time payments, and delivery management.",
      achievements: [
        "Built a full-stack e-commerce platform using React, Node.js, Express.js, MongoDB, and Flutter, supporting customer web, admin dashboard, and mobile applications.",
        "Developed a bilingual Khmer/English sentiment analysis system to classify customer reviews as Positive, Neutral, or Negative.",
        "Integrated Bakong KHQR payments with payment verification and Telegram transaction notifications.",
        "Implemented Google Maps delivery features, including interactive location pinning and reverse geocoding for address management.",
        "Developed the Flutter mobile application using BLoC architecture, with offline caching, GPS location, QR payments, and dark/light theme support.",
        "Built a real-time admin dashboard using Socket.io with sales analytics, inventory management, batch tracking, and product expiry alerts."
      ],
      technologies: ["React 19", "Node.js", "Express.js", "MongoDB", "Flutter", "Dart", "BLoC", "Socket.io", "Tailwind CSS", "Bakong KHQR", "Google Maps API", "JWT", "Cloudinary", "Vite"]
    },
    {
      type: "education",
      label: "Studied",
      period: "2016 — 2022",
      role: "Houn Sean Koh Along Chen Primary School, Sovanaphumi Secondary School, Sovanaphumi High School",
      company: "",
      location: "Cambodia",
      description: "",
      achievements: [
        "2016 : Graduated Primary School at Houn Sean Koh Along Chen Primary School",
        "2019 : Graduated Secondary School at Sovanaphumi Secondary School",
        "2022 : Graduated High School at Sovanaphumi High School"
      ],
      technologies: []
    },
    {
      type: "education",
      label: "Currently studying",
      period: "2022 — Present",
      role: "NORTON UNIVERSITY",
      company: "",
      location: "Phnom Penh, Cambodia",
      description: "",
      achievements: [
        "Fourth-year student in Semester II, specializing in (Software Development) at NORTON UNIVERSITY."
      ],
      technologies: []
    }
  ],

  reference: {
    name: "Prof. Sek Socheat",
    role: "Lecturer of Software Development",
    institution: "Norton University",
    phone: "017 879 967",
    email: "socheat.sek@gmail.com"
  },

  testimonials: [
    {
      quote: "Hour Limpeav demonstrates exceptional dedication, strong logical reasoning, and a clear mastery of backend concepts, Spring Boot, and database architectures.",
      author: "Prof. Sek Socheat",
      role: "Lecturer of Software Development",
      company: "Norton University",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "Hour's ability to design clean RESTful APIs and bridge them smoothly with Flutter and React made our multiplatform project development fast and reliable.",
      author: "Academic Colleague",
      role: "Software Engineering Peer",
      company: "Norton University",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    }
  ]
};
