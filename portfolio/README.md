Portfolio Website
Show Image
A sleek and modern developer portfolio homepage, crafted with precision to showcase your skills and projects. This site is a pixel-perfect implementation of a Figma design, built using cutting-edge technologies to ensure a responsive and reusable component-based architecture.
🚀 Live Demo
Visit the live site: https://portfolio-developme.vercel.app/
🛠️ Built With

⚛️ Next.js 15 (App Router) - For a fast and scalable React framework with server-side rendering
🎨 Tailwind CSS - For utility-first CSS, enabling rapid and responsive styling
🔧 TypeScript - For type-safe development and better code maintainability
📱 Responsive Design - Mobile-first approach ensuring compatibility across all devices
🔧 Modern JavaScript - ES6+ features for clean, maintainable code

✨ Features

✅ 1:1 Figma Design Implementation - Faithfully replicates the original design with pixel-perfect accuracy
✅ Mobile-First Responsive Layout - Optimized for all screen sizes, from mobile to desktop
✅ Reusable Component Architecture - Modular components for easy maintenance and scalability
✅ Smooth Page Transitions - Enhanced user experience with seamless navigation

📝 Description
This portfolio website serves as a personal showcase for a developer, highlighting their expertise through a clean, professional design. Built with Next.js app router and Tailwind CSS, it offers a mobile-first approach with smooth transitions and a fully responsive layout. The project emphasizes reusability and fidelity to the original Figma design, making it an excellent example of modern web development practices.
🚀 Getting Started
Prerequisites
Make sure you have the following installed:

Node.js (version 18 or higher)
npm or yarn package manager
TypeScript knowledge (recommended)

Installation

Clone the Repository
bashgit clone https://github.com/AbhikThosan/raintor.git
cd raintor/portfolio

Install Dependencies
bashnpm install

# or

yarn install

Run the Development Server
bashnpm run dev

# or

yarn dev

Open Your Browser
Navigate to http://localhost:3000 to see the portfolio in action.

📁 Project Structure
portfolio/
├── public/ # Static assets (images, favicon, etc.)
│ ├── favicon.ico # Favicon for the site
│ └── images/ # Images used in the portfolio (e.g., project screenshots)
├── src/ # Source code directory
│ ├── app/ # Next.js App Router pages and layouts
│ │ ├── layout.tsx # Root layout with Tailwind CSS and metadata
│ │ ├── page.tsx # Homepage component
│ │ └── globals.css # Global styles (Tailwind directives)
│ ├── components/ # Reusable React components
│ │ ├── ButtonWithIcon.tsx # Button with icon component
│ │ ├── ButtonExp.tsx # Experience button component
│ │ ├── SocialNavLink.tsx # Social/navigation link component
│ │ ├── SocialNavLinkGroup.tsx # Group of social/navigation links
│ │ ├── WorkExp.tsx # Work experience section
│ │ └── ... # Other components (e.g., ContactForm)
│ ├── constants/ # Constant data files
│ │ ├── experienceInfo.ts # Experience data (e.g., EXPERIENCE array)
│ │ ├── socialLinks.ts # Social link data (e.g., SOCIALLINK array)
│ │ └── navItems.ts # Navigation item data (e.g., NAVITEMS array)
│ ├── hooks/ # Custom hooks
│ │ └── useContactForm.ts # Hook for form handling
│ ├── styles/ # Additional custom styles (optional)
│ └── ... # Other utilities or pages
├── tailwind.config.js # Tailwind CSS configuration
├── next.config.js # Next.js configuration
├── package.json # Project dependencies and scripts
├── tsconfig.json # TypeScript configuration
├── README.md # This file
└── ... # Other config files (e.g., .eslintrc, .gitignore)
