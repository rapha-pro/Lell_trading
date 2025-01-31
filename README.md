# **Lell Trading Portfolio Website**

This is a modern, responsive trading portfolio website built with **Next.js**, **TypeScript**, and **Tailwind CSS** for a seamless developer and user experience.

---

## **Table of Contents**
1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Features](#features)
4. [Getting Started](#getting-started)
5. [Folder Structure](#folder-structure)
6. [Contributing](#contributing)
7. [License](#license)

---

## **Project Overview**
This project aims to create an engaging portfolio website for a Customer, showcasing trading services, market insights, and portfolio performance. 

### **Live Demo** (Not operational yet)
[Website Link](#) *(link to be added once deployed)*

---

## **Technologies Used**
- **Framework**: [Next.js](https://nextjs.org/)
- **Programming Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Chakra UI](https://www.chakra-ui.com/)
- **Linting**: [ESLint](https://eslint.org/)

---

## **Features**
- Fully responsive design for mobile and desktop users.
- Interactive components built with Chakra-ui
- Dynamic data fetching and rendering.
- SEO-optimized pages with Next.js.
- Clean, maintainable, and well-documented codebase.

---

## **Getting Started**

### Prerequisites
Make sure you have the following installed:
- **Node.js** (v16+)
- **pnpm** 

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/rapha-pro/Lell_trading.git
   cd trading-portfolio
   ```

2. Install dependencies:
   ```bash
   - pnpm install
   - pnpm i @chakra-ui/react @emotion/react
   - pnpx @chakra-ui/cli snippet add
   - pnpm add react-icons @chakra-ui/icons
   - pnpm add next react react-dom (if nextjs not installed)
   ```

3. Run the development server:
   ```bash
   pnpm dev
   ```

4. Open the application in your browser:
   ```
   http://localhost:3000
   ```

---

## **Folder Structure**
```plaintext
trading-portfolio/
├── ui/
|     ├── components/    # Reusable React components
│        ├── navbar      # Site navbar
│        ├── Footer.tsx  # Site footer
│        ├── TradingCard # Trading card component
|     ├── logo/          # pretty descriptive
      ├── styles/        # Styling files
│        ├── globals.css # Global styles
│        ├── tailwind    # Tailwind base styles
├── pages/               # Next.js pages
│   ├── index.tsx        # Homepage
│   ├── about.tsx        # About page
│   ├── service.tsx      # Service page
│   ├── contact.tsx      # Contact page
├── utils/               # Utility/helper functions
│   ├── fetcher.ts       # API fetcher
├── public/              # Static assets (images, icons)
├── .eslintrc.json       # ESLint configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
├── package.json         # Project metadata and scripts
```

---

## **Contributing**
To contribute:
1. Fork this repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Create a Pull Request.

---

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
