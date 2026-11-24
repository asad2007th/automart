# AutoMart – Used Car Marketplace

## Project Overview

AutoMart is a frontend-based used car marketplace developed using Next.js. It allows users to explore used cars, search and filter listings, view car details, save favourite cars, and submit demo forms.

The main purpose of this project is to provide a simple and user-friendly platform for browsing used cars in Pakistan.

## Group Members

| No. | Student Name | Roll Number |
|---|---|---|
| 1 | Asad Ali | 24i-2072 |
| 2 | M.Usman | 24i-2119 |
| 3 | M.Mateen | 24i-2072 |

**Section:** BCY-5A
**Course:** CS4032 – Web Programming  
**Project:** Assignment 3

## Technologies Used

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- HTML
- CSS
- JavaScript
- Git and GitHub
- Vercel (Deployment)

## Main Features

1. **Homepage:** Introduction to AutoMart and featured car listings.
2. **Browse Cars:** View all available sample car listings.
3. **Search:** Search cars by company, model, or location.
4. **Filtering:** Filter cars by company.
5. **Sorting:** Sort cars by newest, lowest price, or highest price.
6. **Dynamic Car Details:** View individual car information using dynamic routes.
7. **Favourites:** Add and remove cars from the favourites list.
8. **Contact Form:** Submit a demo contact form with input validation.
9. **Sell Your Car:** Submit sample car information through a form.
10. **Responsive Design:** Website layout adapts to desktop, tablet, and mobile screens.
11. **404 Page:** Display a custom page when a requested page or car listing does not exist.

## Project Routes

| Route | Description |
|---|---|
| `/` | Homepage |
| `/cars` | Browse all cars |
| `/cars/[id]` | Dynamic car details |
| `/favourites` | Saved favourite cars |
| `/about` | About AutoMart |
| `/contact` | Contact form |
| `/sell-car` | Sell your car form |

## Project Structure

```text
automart/
│
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── cars/
│   │   ├── [id]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── favourites/
│   │   └── page.tsx
│   ├── sell-car/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   └── page.tsx
│
├── components/
│   ├── CarBrowser.tsx
│   ├── CarCard.tsx
│   ├── ContactForm.tsx
│   ├── FavoritesList.tsx
│   ├── FavoritesProvider.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── SectionTitle.tsx
│   └── SellCarForm.tsx
│
├── data/
│   └── cars.ts
│
├── public/
├── next.config.ts
├── postcss.config.mjs
├── package.json
└── README.md
```

## Installation and Setup

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

### 2. Open the Project Folder

```bash
cd automart
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Open in Browser

Visit:

```text
http://localhost:3000
```

### 6. Build the Project

To check the production build:

```bash
npm run build
```

## Data and Functionality

This project uses sample car data stored locally in TypeScript files.

The website is a frontend demonstration and does not currently use a backend, database, or real authentication system.

- Favourite cars are managed using React Context and browser local storage.
- Search, filtering, and sorting are handled on the frontend.
- Contact and car submission forms use client-side validation and display confirmation messages.
- Car details are displayed using dynamic Next.js routes.

## Group Contributions

| Member | Contribution |
|---|---|
| Asad Ali | Core Next.js project, homepage, car listings, dynamic routes, reusable components, and favourites functionality |
| M.Usman  | Testing, bug checking, form validation testing, screenshots, and documentation |
| M.Mateen | Responsive design improvements, deployment, UI review, and presentation preparation |

*Update this table to accurately reflect the work each member actually completes.*

## Project Links

- **GitHub Repository:** YOUR_GITHUB_REPOSITORY_LINK
- **Live Website (Vercel):** YOUR_VERCEL_LINK
- **Demo Video:** YOUR_DEMO_VIDEO_LINK

## AI Tools Usage

AI tools were used as learning and development assistance for understanding Next.js concepts, generating code suggestions, debugging, and improving project documentation.

All group members are responsible for understanding and explaining the code they contribute.

## Conclusion

AutoMart demonstrates the use of Next.js, React, TypeScript, and Tailwind CSS to build a responsive used car marketplace frontend. It includes reusable components, dynamic routes, client-side state management, forms, and interactive features.