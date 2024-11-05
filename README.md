# Real Estate Listings Application

This project is a Real Estate Listings application built with React, TypeScript, and Vite. The application allows users to browse and view details of various real estate listings.

## Key Components

- Header, Main, Footer: These components form the basic layout of the application.
- Grid: Displays individual house listings in a grid format.
- Details: Shows detailed information about a selected house.
- Contact Form: Displays the agent's contact form
- Modal: Displays a modal with the saved houses

### State Management

The application uses Zustand to manage the state of house listings and the selected house and modal.

### Schemas

The project uses zod for schema validation. The houseSchema defines the structure of a house listing.

### Utilities

Utility functions are defined in the utils/helpers.ts file.

### Styling

The project uses Tailwind CSS for styling, with configurations defined in tailwind.config.js and index.css.

## Getting Started

To get started with the project, follow these steps:

1. Install dependencies:
   `pnpm install`

2. Run the development server:
   `pnpm dev`

3. Build the project for production:
   `pnpm build`

### Linting

The project uses ESLint for linting. The configuration is defined in eslint.config.js.

### License

This project is licensed under the MIT License.
