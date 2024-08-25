# Cuisine & Code Chronicles

## Overview

**Cuisine & Code Chronicles** is a dynamic blog website focused on travel, food, and technology. Developed using Next.js, HTML, CSS, and a range of modern technologies, this project provides a rich and interactive experience for users interested in exploring diverse topics.

## Technologies Used

- **Next.js**: A web development framework used for building the frontend and server-side rendering.
- **HTML & CSS**: For structuring and styling the web pages.
- **MongoDB**: A NoSQL database used for storing blog content and user data.
- **Prisma ORM**: An Object-Relational Mapping tool used for efficient database operations and management with MongoDB.
- **Firebase**: Used for image storage, enabling seamless and secure handling of media files.
- **NextAuth**: Implemented for robust authentication, ensuring secure user accounts and personal data.

## Features

- **Dynamic Blog Content**: Provides articles and posts on travel, food, and technology.
- **Efficient Data Handling**: Utilizes Prisma ORM for effective management and scalability of database operations.
- **Media Management**: Integrates Firebase for secure and efficient image storage.
- **Secure Authentication**: Employs NextAuth for user authentication and data protection.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Achala-Nayak/Cuisine-Code-Chronicles.git
   ```

2. Navigate to the project directory:
   ```bash
   cd cuisine-code-chronicles
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables by creating a `.env` file in the root directory with the following variables:
   ```env
   GOOGLE_ID=your-google-id
   GOOGLE_SECRET=your-google-secret
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-nextauth-secret
   DATABASE_URL=your-database-url
   FIREBASE=your-firebase-key
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:3000` to view the website.

