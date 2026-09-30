/* =========================================================
   PROJECT DATA
   ---------------------------------------------------------
   Every project card and case-study page is built from this
   list. To add a new project, copy one object, give it a
   unique `id`, and fill in the fields.

   category: "ux" | "web" | "software" | "media"
   featured: true  -> shows on the home page
   ========================================================= */
window.PROJECTS = [
  {
    id: "jpr-storefront",
    title: "JPR Storefront",
    subtitle: "A full-stack e-commerce app with a Node/Express API, MongoDB, and an AngularJS front end",
    category: "web",
    featured: true,
    course: "IST 411 · Distributed-Object Computing",
    date: "Summer 2026",
    role: "Solo developer",
    tools: ["Node.js", "Express", "MongoDB", "Mongoose", "AngularJS", "jQuery", "Bootstrap", "Jasmine", "HTTPS/TLS"],
    thumb: "assets/img/storefront/products.png",
    summary: "An online store with seven connected features: products, users, cart, billing, shipping, returns, and more. I deployed it on a Linux server and tested every API endpoint with automated tests.",
    sections: [
      {
        heading: "Overview",
        html: `<p>JPR Storefront was my final project for IST 411. It's a working online store split into two halves: a <strong>REST API</strong> built with Node.js, Express, and MongoDB, and a set of <strong>front-end pages</strong> built with AngularJS, jQuery, and Bootstrap that call that API over HTTPS.</p>
               <p>The store is organized into seven features. Each one has its own database schema, API route, automated test file, and web page. They include product listings, user login, a shopping cart, billing, shipping, and returns.</p>`
      },
      {
        heading: "What I built",
        html: `<ul>
                 <li><strong>Data layer:</strong> seven Mongoose schemas that map to MongoDB collections, sharing one database connection module.</li>
                 <li><strong>API:</strong> seven Express route files with full create, read, update, and delete (CRUD) endpoints, served over HTTPS on a dedicated port, with CORS enabled so the web pages could call it.</li>
                 <li><strong>Front end:</strong> seven HTML pages, each with its own AngularJS controller, that use AJAX to send and receive data.</li>
                 <li><strong>Testing:</strong> seven Jasmine test files that call each endpoint and check the responses.</li>
                 <li><strong>Documentation:</strong> a deployment guide that covers the systems, packages, folder structure, networking, and permissions.</li>
               </ul>`
      },
      {
        heading: "How it's structured",
        html: `<p>The API and database run on a Linux server that I managed over SSH. The front-end pages are hosted separately on Penn State's web space. I set up the project so every feature follows the same pattern (schema → route → test → page). That made it easy to add features one at a time and fix bugs in each one on its own.</p>`
      },
      {
        heading: "What I learned",
        html: `<p>This was the first project where I owned every layer: server setup, database design, API design, security (TLS certificates, database login, file permissions), testing, and the interface. Writing the deployment documentation showed me how much of shipping software happens after the code is written.</p>
               <!-- TODO(Jah): add one or two sentences about the hardest bug you hit and how you solved it. -->`
      }
    ],
    gallery: [
      { src: "assets/img/storefront/products.png", alt: "Products page listing a T-shirt, hoodie, coffee mug, and cap with prices, SKUs, and stock counts", caption: "Product catalog loaded from MongoDB" },
      { src: "assets/img/storefront/cart.png", alt: "Shopping cart page with fields for SKU, name, price, and quantity, and a subtotal", caption: "Shopping cart with a running subtotal" },
      { src: "assets/img/storefront/login.png", alt: "User login page with forms to create a login and read an existing login", caption: "Creating and reading user records" }
    ]
  },

  {
    id: "pulsego-content-strategy",
    title: "PulseGo Pro: Content Strategy",
    subtitle: "A UX content strategy for a concept fitness app, from stakeholders and empathy maps to user journeys",
    category: "ux",
    featured: true,
    course: "IST 402 · Special Topics",
    date: "June 2026",
    role: "UX / content strategist (individual)",
    tools: ["Stakeholder mapping", "Empathy mapping", "Audience segmentation", "Scenarios & user journeys", "Content requirements"],
    thumb: "assets/img/pulsego-1.png",
    summary: "A full content strategy for a mock AI fitness-coaching app. It defines who the users are, what they need, and how the product's content should meet those needs.",
    sections: [
      {
        heading: "The brief",
        html: `<p>PulseGo Pro is a concept mobile app that works as a personal fitness coach. It adapts workouts to each user's body, schedule, and progress. My job was to plan the content strategy before any screens were designed: who the product serves, what success looks like, and what content each type of user needs at each step.</p>`
      },
      {
        heading: "Stakeholders & goals",
        html: `<p>I grouped stakeholders into three tiers: <strong>executive leadership</strong>, the <strong>product and development team</strong>, and <strong>users and community</strong> (fitness enthusiasts, trainers, influencers). Then I turned the vague business goals into measurable targets:</p>
               <ul>
                 <li>45,000+ downloads within 90 days of launch</li>
                 <li>A rating of 4.5 stars or higher in the app stores</li>
                 <li>20–25% of users on a paid plan within six months</li>
                 <li>30% growth in social media followers within six months</li>
               </ul>`
      },
      {
        heading: "Understanding the audience",
        html: `<p>I defined three audiences: <strong>busy active adults ages 18–40</strong> (primary), <strong>fitness beginners</strong> (secondary), and <strong>personal trainers and coaches</strong> (tertiary). For the primary audience I built an empathy map covering what they think and feel, see, hear, say and do, and their pains and gains.</p>
               <div class="callout"><p><strong>Key insight:</strong> these users are motivated but overwhelmed. They're frustrated by generic plans and cluttered features, and they want to see measurable progress and know when to push harder and when to rest.</p></div>
               <p>Three factors narrowed the target further: a <strong>busy schedule</strong>, <strong>relying on their phone</strong> to manage their day, and a <strong>desire for customization</strong>.</p>`
      },
      {
        heading: "Scenarios & user journeys",
        html: `<p>I mapped three core scenarios, each with its own content needs:</p>
               <ul>
                 <li><strong>New user onboarding:</strong> from seeing an influencer's post, to downloading the app, to building a fitness profile and getting a first personalized plan.</li>
                 <li><strong>Daily workout session:</strong> seeing today's plan, logging sets and reps in real time, and getting feedback and a recovery score.</li>
                 <li><strong>Weekly progress review:</strong> a progress dashboard, recovery recommendations, and an automatically adjusted plan for next week.</li>
               </ul>`
      },
      {
        heading: "Reflection",
        html: `<p>This project changed how I start design work. Setting measurable goals and describing each user's situation first made every later decision, like what goes on the home page or which testimonials to show, easier to defend.</p>
               <!-- TODO(Jah): if you made wireframes or a prototype from this strategy, add them here. -->`
      }
    ],
    links: [
      { label: "Read the full report (PDF)", href: "assets/docs/PulseGo-Pro-Content-Strategy-Report.pdf" }
    ]
  },

  {
    id: "jpr-fitness",
    title: "JPR Fitness & Nutrition",
    subtitle: "A multi-page website that teaches readers how to build a workout split",
    category: "web",
    featured: true,
    course: "IST 250 · New Media Design for the Web",
    date: "Spring 2025",
    role: "Designer & developer (individual)",
    tools: ["HTML", "CSS", "Responsive layout", "Content writing"],
    thumb: "assets/img/shots/fitness-home.jpg",
    summary: "My IST 250 final project: a four-page fitness site based on my own 3.5 years of lifting, with an illustrated workout split, an about page, and a feedback form.",
    sections: [
      {
        heading: "Overview",
        html: `<p>JPR Fitness & Nutrition is a four-page website (Home, About, Workouts, Contact) for people who want to move past just "staying in shape" and follow a structured program. The content comes from my own experience lifting for 3.5 years.</p>`
      },
      {
        heading: "Design decisions",
        html: `<ul>
                 <li><strong>Showing, not just telling:</strong> the Workouts page pairs every exercise with an animated illustration of the muscles it works, so beginners can see the correct movement.</li>
                 <li><strong>Organized by muscle group:</strong> exercises are grouped into Push, Pull, and Legs days, which is how lifters actually plan their week.</li>
                 <li><strong>Consistent navigation:</strong> every page shares the same header and navigation so readers always know where they are.</li>
                 <li><strong>A feedback form:</strong> the Contact page asks readers what they think, so the content can be improved over time.</li>
               </ul>`
      },
      {
        heading: "Reflection",
        html: `<p>This was one of my first complete websites. Looking back, I would add a clearer visual hierarchy on the home page, stronger text contrast, and a mobile-first layout. That's the kind of improvement I now look for with the UX skills I've built since.</p>
               <!-- TODO(Jah): link to the live version if it is still on GitHub Pages (rjah27FinalProject). -->`
      }
    ],
    gallery: [
      { src: "assets/img/shots/fitness-home.jpg", alt: "JPR Fitness & Nutrition home page with a purple header and a photo of Jericho bench pressing", caption: "Home page" },
      { src: "assets/img/shots/fitness-workouts.jpg", alt: "Workouts page showing exercise cards with muscle illustrations for Smith machine incline press, chest press, and cable flies", caption: "Workouts page: exercises grouped by muscle group" }
    ]
  },

  {
    id: "barnard-rugby",
    title: "Barnard Rugby",
    subtitle: "A single-page club website with a roster, season schedule, and a recruitment sign-up form",
    category: "web",
    featured: false,
    course: "Personal / practice project",
    date: "Dec 2025",
    role: "Designer & developer",
    tools: ["HTML", "CSS", "JavaScript", "Form validation"],
    thumb: "assets/img/shots/barnard-home.jpg",
    summary: "A concept website for a college rugby team that switches between five sections without reloading the page, with a player roster, match schedule, and a validated sign-up form.",
    sections: [
      {
        heading: "Overview",
        html: `<p>A concept website for a college rugby club. It's built as a single page: JavaScript swaps between Home, About, Roster, Schedule, and Sign Up without reloading, and the current section is highlighted in the navigation.</p>
               <!-- TODO(Jah): say where this project came from (a class, a friend's team, practice). -->`
      },
      {
        heading: "Features",
        html: `<ul>
                 <li><strong>Roster:</strong> a card grid showing each player's number, position, and class year.</li>
                 <li><strong>Schedule:</strong> match cards with date, opponent, location, time, and status labels.</li>
                 <li><strong>Sign-up form:</strong> required fields, dropdowns for class year and experience level, and a confirmation message after submitting.</li>
                 <li><strong>Clear calls to action:</strong> the home page's "Join Our Team" button leads straight to the sign-up section.</li>
               </ul>`
      },
      {
        heading: "Design notes",
        html: `<p>I kept the look calm and consistent: one navy color for the brand, white cards, and plenty of space. The content is organized around the two things a visitor usually wants: seeing who's on the team and when they play, or joining the team.</p>`
      }
    ],
    gallery: [
      { src: "assets/img/shots/barnard-home.jpg", alt: "Barnard Rugby home page with a welcome message, a Join Our Team button, and three value cards", caption: "Home: value statement and a Join button" },
      { src: "assets/img/shots/barnard-roster.jpg", alt: "Team roster grid with numbered player cards showing name, position, and class year", caption: "Roster" },
      { src: "assets/img/shots/barnard-schedule.jpg", alt: "Season schedule with match cards showing date, opponent, location, and time", caption: "Season schedule" },
      { src: "assets/img/shots/barnard-signup.jpg", alt: "Sign-up form with fields for name, email, class year, experience, and a reason for joining", caption: "Sign-up form" }
    ]
  },

  {
    id: "drupal-site",
    title: "Drupal 11 Content Site",
    subtitle: "Building content types and Views in a Drupal 11 CMS",
    category: "web",
    featured: false,
    course: "Self-directed + coursework",
    date: "Summer 2026",
    role: "Site builder",
    tools: ["Drupal 11", "Views", "Content types", "Taxonomy"],
    thumb: "assets/img/drupal-poster.jpg",
    summary: "A walkthrough of a Drupal 11 site I set up, covering content creation and Views that pull and display that content.",
    sections: [
      {
        heading: "Overview",
        html: `<p>Alongside three Drupal 9 Essential Training courses, I built a Drupal 11 site and recorded a walkthrough of adding content and setting up <strong>Views</strong>, Drupal's tool for querying content and showing it as lists and pages.</p>
               <!-- TODO(Jah): add the course name and one sentence about what the site was for. -->`
      },
      {
        heading: "Walkthrough video",
        html: `<div class="media-wide"><video controls preload="metadata" poster="assets/img/drupal-poster.jpg"><source src="assets/video/drupal-11-views.mp4" type="video/mp4">Your browser does not support embedded video.</video></div>`
      }
    ]
  },

  {
    id: "rcv-simulator",
    title: "Ranked-Choice Voting Simulator",
    subtitle: "A Java Swing app that runs a ranked-choice election round by round",
    category: "software",
    featured: false,
    course: "IST 261 · Application Development Design Studio",
    date: "Spring 2026",
    role: "Developer (individual)",
    tools: ["Java", "Swing", "MVC architecture", "Collections (Map, Set, Iterator)"],
    thumb: "",
    summary: "A desktop app that reads a file of ranked ballots and counts them round by round, following Maine's ranked-choice voting law, until there's a winner.",
    sections: [
      {
        heading: "Overview",
        html: `<p>This app simulates a ranked-choice election. It reads ballots from a data file, counts first-choice votes, removes the last-place candidate, moves those voters' votes to their next choice, and repeats until one candidate wins. The counting rules follow Maine's ranked-choice voting statute.</p>`
      },
      {
        heading: "Architecture",
        html: `<ul>
                 <li><strong>Model:</strong> <code>RCVSimulator</code> and <code>RCVDataReader</code> handle parsing ballots, counting votes, and eliminating candidates.</li>
                 <li><strong>View:</strong> <code>RCVView</code>, a Swing window that shows the results of each round.</li>
                 <li><strong>Controller:</strong> <code>RCVController</code> connects button clicks to the model.</li>
               </ul>
               <p>Ties for last place are handled on purpose: tied candidates are shuffled and one is picked to be eliminated, so the program always makes progress.</p>`
      },
      {
        heading: "Iteration",
        html: `<p>I revised this project more than seven times over the semester. Each version tightened the counting logic, especially around ties and the final round, and separated the Model, View, and Controller more cleanly.</p>
               <!-- TODO(Jah): add a screenshot of the Swing window and, if you like, a link to the code on GitHub. -->`
      }
    ]
  },

  {
    id: "ubud-podcast",
    title: "Jalan Raya, the Heart of Ubud",
    subtitle: "A narrative profile podcast with recorded voiceover and layered ambient sound",
    category: "media",
    featured: false,
    course: "ENGL 15 · Rhetoric & Composition",
    date: "Feb 2024",
    role: "Writer, narrator & editor",
    tools: ["Adobe Premiere Rush", "Premiere Pro", "Voiceover recording", "Sound design"],
    thumb: "",
    summary: "An audio profile of the central market town of Ubud, Bali, based on my own trip. I scripted, narrated, and edited it with ambient sound and music.",
    sections: [
      {
        heading: "Overview",
        html: `<p>This podcast profiles Jalan Raya, the central market street of Ubud, Bali, based on my own time there. It moves between the busy markets and the quiet rice fields, and it pushes back on a common assumption that poverty defines life in towns like Ubud.</p>`
      },
      {
        heading: "Listen",
        html: `<div class="audio-card"><h3 style="color:#fff">Jalan Raya, the Heart of Ubud</h3><p>Profile podcast · about 7 minutes</p><audio controls preload="none" src="assets/video/podcast-ubud.mp3">Your browser does not support embedded audio.</audio></div>`
      },
      {
        heading: "Production",
        html: `<p>I recorded 15 separate voiceover takes and edited them in Adobe Premiere Rush, layering in sound effects (crowds, wind, jungle, an airliner) and traditional Balinese dance music to put the listener in the scene. Before recording, I wrote a full rough-draft script with notes on where each sound would go.</p>
               <p class="muted">I also edit my own fitness videos in Premiere Pro, such as a channel intro, training-day videos, and "full day of eating" videos.</p>`
      }
    ]
  }
];

/* Categories shown as filter buttons on the Work page */
window.CATEGORIES = {
  ux: "UX & Content",
  web: "Web Development",
  software: "Software",
  media: "Media"
};
