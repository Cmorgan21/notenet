# Notenet

![Responsive Mockup](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719952316/Screenshot_2024-07-02_213139_zxqenc.png)

## Project Objective

**Notenet** is a online application that allows users to create, update and delete notes. This is to keep everything within your day to day life noted. This means everything you need to keep on top of in your day to day is at the click of a finger

Live Website: [Notenet](https://notenet-7107311aceb5.herokuapp.com)

## Table Of Contents

- [Project Objective](#project-objective)
- [Full Stack Architecture Overview](#full-stack-architecture-overview)
- [API Overview](#api-overview)
- [UX](#ux)
- [The Strategy Plane](#the-strategy-plane)
  - [Project Objective](#project-objective)
  - [Agile Management](#agile-management)
  - [User Stories](#user-stories)
- [The Structure Plane](#the-structure-plane)
  - [Project Structure](#project-structure)
  - [Database Structure](#database-structure)
- [Features](#features)
- [Future Features](#future-features)
- [The Skeleton Plane](#the-skeleton-plane)
  - [Wireframes](#wireframes)
- [Frontend Component Documentation](#frontend-component-documentation)
- [API Endpoints Summary](#api-endpoints-summary)
- [The Surface Plane](#the-surface-plane)
  - [Design](#design)
    - [Colour Scheme](#colour-scheme)
    - [Typography](#typography)
    - [Imagery](#imagery)
  - [Testing](#testing)
- [Technologies Used](#technologies-used)
  - [Languages](#languages)
  - [Frameworks, Software and Web Applications](#frameworks-software-and-web-applications)
  - [Software](#software)
  - [Libraries](#libraries)
- [Deployment Frontend](#deployment-frontend)
- [Deployment Backend](#deployment-backend)
- [Cloning And Setting Up This Project](#cloning-and-setting-up-this-project)
- [Credits](#credits)
- [Acknowledgments](#acknowledgments)

## Full Stack Architecture Overview

**Frontend:**

- React with Tailwind and Bootstrap
- Axios for API requests
- JWT-based token authentication
- Protected routes via route guards
- Component-based architecture

**Backend:**

- Django REST Framework
- Token-based authentication using JWT (SimpleJWT)
- PostgreSQL via ElephantSQL
- Media storage with Cloudinary
- Modular app design: `notes`, `categories`, `profiles`

## API Overview

All endpoints are protected using JWT Authentication unless otherwise noted.

| Method | Endpoint                        | Description                               | Access        |
| ------ | ------------------------------- | ----------------------------------------- | ------------- |
| POST   | `/api/users/`                   | Register a new user                       | Public        |
| POST   | `/api/token/`                   | Obtain JWT access and refresh tokens      | Public        |
| POST   | `/api/token/refresh/`           | Refresh JWT token                         | Public        |
| GET    | `/api/notes/`                   | List all notes for the authenticated user | Authenticated |
| POST   | `/api/notes/create/`            | Create a new note                         | Authenticated |
| GET    | `/api/notes/<id>/`              | Retrieve a specific note                  | Authenticated |
| PUT    | `/api/notes/<id>/update/`       | Update a specific note                    | Authenticated |
| DELETE | `/api/notes/<id>/delete/`       | Delete a specific note                    | Authenticated |
| GET    | `/api/categories/`              | List all categories for the user          | Authenticated |
| POST   | `/api/categories/`              | Create a new category                     | Authenticated |
| GET    | `/api/categories/<id>/`         | Retrieve a category                       | Authenticated |
| PUT    | `/api/categories/<id>/`         | Update a category                         | Authenticated |
| DELETE | `/api/categories/<id>/`         | Delete a category                         | Authenticated |
| GET    | `/api/profile/`                 | Retrieve current user's profile           | Authenticated |
| PATCH  | `/api/profile/upload/<id>/`     | Update profile image                      | Authenticated |
| PUT    | `/api/profile/change-password/` | Change password                           | Authenticated |

## UX

## The Strategy Plane

### Project Objective

The objective of this project is to create a user friendly platform for any user to be able to create an account and start making notes. This allows users to write amy kind of note and to edit and update them as they need.

### The Strategy Plane

### Agile Management

This project was managed through the application of agile methodologies, establishing an efficient workflow by implementing a board using GitHub Projects, which served as a pivotal project management tool. The board played a crucial role in visualizing tasks, maintaining optimal work-in-progress limits, and enhancing overall workflow efficiency and time scaling.

The development process was anchored in a step-by-step approach. It commenced by focusing on fulfilling the must-have requirements to ensure the delivery of core functionalities.

This was designated through labels of 'high priority', 'medium priority' and 'low priority'

### User Stories

You can view the user stories board here: [User Stories Board](https://github.com/users/Cmorgan21/projects/7)

All Project User stories have been referenced using a number within the table to the number within the project board. User stories have been used as a guide line to ensure all content is use friendly and all criteria is met.

| #   | User Story          | Description                                                                                                                                               |
| --- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **Sign up**         | As a new user I can sign up and create an account to receive the benefit of personalizing my note-taking experience.                                      |
|     |                     | - User can navigate to sign up page                                                                                                                       |
|     |                     | - User can input username, email and password within a form                                                                                               |
|     |                     | - User is notified of success or errors                                                                                                                   |
|     |                     | - User is redirected to the sign in page                                                                                                                  |
| 2   | **Sign in**         | As a user I can sign in to have the ability to check previously created notes and have access to authenticated only features.                             |
|     |                     | - User is presented with a sign in form to input username and email                                                                                       |
|     |                     | - User is notified when sign in has been successful or if there has been an error                                                                         |
| 3   | **Sign out**        | As an authenticated user I can sign out of my account to restrict anyone else from having access to my account and all information protected.             |
|     |                     | - Clearly display logout button for user to navigate                                                                                                      |
|     |                     | - Clear tokens so there is no risk of account being accessed unless the specific user                                                                     |
|     |                     | - Notify user that they have logged out                                                                                                                   |
| 4   | **Navigation**      | As a user, I can navigate through the links and find what I need to receive the benefit of easily accessing different features and information.           |
|     |                     | - User can access a clearly visible navigation menu from any page                                                                                         |
|     |                     | - Current page is indicated in the navigation menu (e.g., highlighted or underlined)                                                                      |
|     |                     | - All navigation links are functional and responsive on different devices (desktop, tablet, mobile)                                                       |
| 5   | **Creating a Note** | As an authenticated user I want to create a note by providing a title and body content so that I can save important information.                          |
|     |                     | - Allow users to input content in a clear form                                                                                                            |
|     |                     | - Clear submit button for submitting note                                                                                                                 |
|     |                     | - Clear button for opening form to create note                                                                                                            |
| 6   | **View Notes**      | As an authenticated user I can view all notes so I can seamlessly scroll and access all created notes easily.                                             |
|     |                     | - Make newest notes display first                                                                                                                         |
|     |                     | - Create a list display of notes so user can scroll and easily navigate through notes                                                                     |
| 7   | **Edit Notes**      | I can edit an existing note to update its title or content to receive the ability to correct or enhance my notes.                                         |
|     |                     | - Each note has an "Edit" or clear icon that opens a form pre-filled with existing title and content                                                      |
|     |                     | - After editing, changes are saved and reflected in the note details                                                                                      |
| 8   | **Delete Notes**    | As a user I can delete a note that I no longer need to receive a clear and tidy application.                                                              |
|     |                     | - Each note has a "Delete" option that prompts for confirmation                                                                                           |
|     |                     | - The note is permanently removed from the list and met with a notification on confirmation                                                               |
| 9   | **View Profile**    | As a user I can view my profile information including username, email, and profile picture to receive confirmation and management of my personal details. |
|     |                     | - The profile page displays username, email, and optionally a profile picture                                                                             |
|     |                     | - Information is presented in a clear and organized manner                                                                                                |
| 10  | **Change Username** | As a user I can change my username to update account information.                                                                                         |
|     |                     | - There is an option to edit the username in the profile settings                                                                                         |
|     |                     | - After changing, the updated username is displayed in the profile                                                                                        |
| 11  | **Change Password** | As a user I can change my password to receive enhanced security and control over my account.                                                              |
|     |                     | - There is an option to update the password in the profile settings                                                                                       |
|     |                     | - Password change requires inputting new password twice                                                                                                   |
| 12  | **Profile Picture** | As a user I can upload a profile picture to receive personalization and visual identification within the app.                                             |
|     |                     | - Profile settings include an option to upload and save a profile picture                                                                                 |
|     |                     | - Uploaded picture is displayed alongside profile information                                                                                             |
|     |                     | - Display profile picture in navigation for personalization                                                                                               |
| 13  | **Introduction**    | As a new user I can view an introduction on how to get started to receive guidance on using the app effectively.                                          |
|     |                     | - The home page includes an introductory section or tutorial on creating the first note                                                                   |
|     |                     | - Instructions are clear and easy to follow                                                                                                               |
|     |                     | - Images and videos to adapt to all users                                                                                                                 |
|     |

## The Structure Plane

### Project Structure

Notenet exhibits two user experiences contingent upon the user's authentication status. Whether logged in or logged out, these states dictate varying content accessibility and user capabilities.

For logged-out users, the navigation bar provides access to the Home, About, Sign In, and Sign Up pages. Upon logging in, the user gains access to additional features being able to create notes and customize their profile

The transition to a logged-in state empowers users with the ability to perform actions beyond the scope of logged-out users:
Logged-in users can create notes and add to their profile and logged out users can't.

### Database Structure

#### Models Overview

#### User

- Provided by Django with JWT auth integration
- One-to-One relationship with Profile

#### Profile

- Linked to User
- Includes name, email, profile image
- Auto-created on user registration

#### Note

- Title: CharField
- Body: TextField
- Author: ForeignKey to User
- Category: Optional ForeignKey to Category
- Auto timestamps: `created_on`, `updated_at`

#### Category

- Name, color, description
- Owner (user-specific)
- Used to tag and filter notes

## Features

### Web Title and Logo

The Web Url contains a favicon and a specific name called 'notenet'. This is to further customize the website to look more professional and enhance the user experience

![Web title and logo](https://res.cloudinary.com/dbjm35bjd/image/upload/v1720041413/Screenshot_2024-07-03_221613_ozhsv1.png)

### Navigation

The navigation bar boasts an elegant and minimalist design, ensuring an exceptional user experience. Its appearance dynamically adapts based on your authentication status. On tablets and mobile devices, the navigation bar transforms into a user-friendly hamburger menu.

![Notenet Logged out](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719872169/Screenshot_2024-07-01_223447_qtpw3w.png)

#### Not Authenticated

- **Notenet Text** The text provides a clear and concise reminder to the user what the application is called and allows the user to remember for future reference
- **Home:** Users can navigate to the "Home" section, where a intro to how to get started is displayed upon the user
- **Notes** When the user is not authenticated the user will be directed to the sign-in page.
- **Authentication:** the 'sign-in' page is displayed for the user to log in, but also the sign-up page is nested within the sign-in page for users to create an account.

#### Authenticated

![Notenet Logged in](https://res.cloudinary.com/dbjm35bjd/image/upload/v1750218965/Screenshot_2025-06-18_043552_kddc0d.png)

- **Notes:** The user can start creating, editing and deleting notes.

- **Profile:** The user view their image, username, and email and also change their username, password and profile picture.

- **Categories:** The use can create a category to store their notes into for easier filtering and searching

- **Authentication:** The authentication icons transform as well. This changes to then display logout and when this is pressed the user is logged out

### Home Page

- **Greeting Text** One feature within the home page is the greeting text that is a clear and concise. This welcomes the user to the page.

![Home Page text](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719872170/Screenshot_2024-07-01_223645_skfmst.png)

- **Instructions** This feature includes images and numbers to give the user instructions on how to get started and images to follow the process for different kinds of users.

![Home Page Instructions](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719872170/Screenshot_2024-07-01_223645_skfmst.png)

- **Animated Background** The animated background brings the home page to life and gives it less of a simplistic feel.

### Notes

- **Notes** On this notes page the main feature is the notes that are displayed when a user creates notes. These will be stored in a list like fashion for users to scroll down and view all their notes.

![Notes Page](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719872169/Screenshot_2024-07-01_223929_ewmnyr.png)

- **Most Recent at the top** This allows the most recent notes a user has created to be viewed first. This is more convinient for a user as it allows them to view their new created note

- **No Notes found** The no notes found indicates to the user that no notes have been created as of yet. Furthermore this also gives a call to action on how to create your first note.

![No notes found](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719872170/Screenshot_2024-07-01_223806_rcmkln.png)

- **Create a note** Another feature of the note page is the adding note icon. This will display a form which will allow a user to create one and submit it. This will contain the title and content.

![Create a note icon](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719600955/Screenshot_2024-06-28_195545_s87yro.png)

![Create a note form](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719872169/Screenshot_2024-07-01_223952_hg8bqq.png)

- **Edit Note** Another feature of the note page is editing icon within the Individual Note viewing page. This is accessed through the icon at the bottom right of the page

![Edit Note Icon](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719873391/Screenshot_2024-07-01_233615_dh0rhr.png)

![Edit Note Form](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719873391/Screenshot_2024-07-01_233304_dtqowe.png)

- **Delete Note** A delete button is included on each note to give the user the ability to erase unwanted notes seemlessly and affectively

![Delete Note](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719873080/Screenshot_2024-07-01_233026_ye8byl.png)

- **View Note** Viewing the note allows you to view the full content of an individual note. This is accessed through another icon

![View Note](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719873077/Screenshot_2024-07-01_233021_dgouuc.png)

![View Note Page](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719873078/Screenshot_2024-07-01_233037_hec7vt.png)

### Categories

- **Categories Overview**  
  The categories feature allows users to create and manage custom tags for their notes. This enhances organization and filtering, letting users group similar notes together for easier access.

![Categories Page](https://res.cloudinary.com/dbjm35bjd/image/upload/v1750218965/Screenshot_2025-06-18_043558_amg2gs.png)

- **Add Category**  
  Users can create a new category by entering a name, selecting a color, and providing an optional description. A form is toggled by clicking the "Add" icon.

![Add Category Form](https://res.cloudinary.com/dbjm35bjd/image/upload/v1750218965/Screenshot_2025-06-18_043627_mzbi9j.png)

- **Edit Category**  
  Categories can be edited to change the name, description, or color. Clicking the edit icon opens a form with pre-filled values for easy updates.

![Edit Category Icon](https://res.cloudinary.com/dbjm35bjd/image/upload/v1750218966/Screenshot_2025-06-18_043647_aeywuv.png)

- **Delete Category**  
  Each category has a delete icon, which prompts a confirmation before removal. This ensures users don't accidentally delete important groupings.

![Delete Category Icon](https://res.cloudinary.com/dbjm35bjd/image/upload/v1750218965/Screenshot_2025-06-18_043605_sc5rtv.png)

- **Display Categories**  
  Created categories are displayed in a card-like structure, showing the category name, color tag, and description. This layout allows users to visually distinguish between different categories.

- **Filter Notes by Category**  
  On the notes page, users can filter their notes by selecting a category from a dropdown or list, allowing quick access to relevant notes.

![Filter by Category](https://res.cloudinary.com/dbjm35bjd/image/upload/v1750219329/Screenshot_2025-06-18_050133_hnkhzh.png)

- **Edit Category**  
  Within the detailed note page, as you edit the details. There is a function to change the category of the note

![EditCategory](https://res.cloudinary.com/dbjm35bjd/image/upload/v1750218967/Screenshot_2025-06-18_043939_bkh5jc.png)

- **Success Messages**  
  Once a user has created a category they will be updated with a success message. This is also for editing and deleting one. A message when a note has changed category will also raise a success message

![Category Created](https://res.cloudinary.com/dbjm35bjd/image/upload/v1750218966/Screenshot_2025-06-18_043637_zm3bqg.png)

![Category Deleted](https://res.cloudinary.com/dbjm35bjd/image/upload/v1750218967/Screenshot_2025-06-18_043712_qvae2m.png)

![Category Updated](https://res.cloudinary.com/dbjm35bjd/image/upload/v1750218965/Screenshot_2025-06-18_043655_dovn23.png)

### Profile

-**Profile Image** This feature holds the default or uploaded image of the users profile. Allowing the user to customize their profile. This is done my pressing the icon then pressing the upload button below

![Change Image Icon](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719873600/Screenshot_2024-07-01_233935_k0l74y.png)

![Upload Button](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719873600/Screenshot_2024-07-01_233940_grph33.png)

-**Username, Email and Created at Date** This is a feature which allows the user to view their information and change it. The only content a user can not change is the email. However users can change their username (dependent if the username isn't taken) and password

![Profile Page](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719872709/Screenshot_2024-07-01_230828_b1tpm3.png)

![Change username and password icon](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719872902/Screenshot_2024-07-01_232733_csnw3g.png)

![Change username and password form](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719872901/Screenshot_2024-07-01_232744_jfusyx.png)

### Authentication

-**Sign in** Allows users to sign-in to their created account and access specific features only an authenticated user can view

![Sign in](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719872704/Screenshot_2024-07-01_230851_xw71z6.png)

-**Sign up** Allows users to sign-up to create an account with notenet and after signing up are redirected to the sign in page

![Sign up](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719872703/Screenshot_2024-07-01_230901_vbtkqk.png)

-**Sign out** This feature is accessed within the navigation and users will be able to logout by pressing the nav link

![Sign out](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719872703/Screenshot_2024-07-01_230934_qgkuz9.png)

### Success Messages

These were used throughout the whole project to ensure te user was informed of anything that is submitted and correct. This is also used for errors.

Green has been used for successful messages and Red has been used for errors.

![Success Message](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719955677/Screenshot_2024-07-02_221922_xm9r63.png)

![Error Message](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719955677/Screenshot_2024-07-02_222708_vq2kiz.png)

### Website Responsiveness

This section demonstrates the mobile responsiveness of the website, showcasing how the content adapts seamlessly to Desktop, Tablet, and Phone screens. Below are screenshots of all pages with mobile responsiveness, highlighting the user-friendly UX across different devices.

#### Home

![Home Mobile](https://res.cloudinary.com/dbjm35bjd/image/upload/v1720042067/Screenshot_2024-07-03_222545_kwk7xs.png)

#### Profile

![Profile Mobile](https://res.cloudinary.com/dbjm35bjd/image/upload/v1720042067/Screenshot_2024-07-03_222627_stbasj.png)

#### Notes

![Notes Mobile](https://res.cloudinary.com/dbjm35bjd/image/upload/v1720042066/Screenshot_2024-07-03_222612_jhej4d.png)

#### Notes Detail

![Notes Detail Mobile](https://res.cloudinary.com/dbjm35bjd/image/upload/v1720042066/Screenshot_2024-07-03_222730_ru9c6f.png)

#### Sign In

![Sign in Mobile](https://res.cloudinary.com/dbjm35bjd/image/upload/v1720042066/Screenshot_2024-07-03_222640_asktuo.png)

#### Sign Up

![Sign up Mobile](https://res.cloudinary.com/dbjm35bjd/image/upload/v1720042066/Screenshot_2024-07-03_222648_vcwrma.png)

### API Endpoints Summary

| Endpoint                    | Method | Description                  | Auth Required |
| --------------------------- | ------ | ---------------------------- | ------------- |
| `/api/token/`               | POST   | Obtain JWT access/refresh    | No            |
| `/api/token/refresh/`       | POST   | Refresh access token         | No            |
| `/notes/`                   | GET    | List notes for user          | Yes           |
| `/notes/`                   | POST   | Create note                  | Yes           |
| `/notes/<id>/`              | GET    | Retrieve single note         | Yes           |
| `/notes/<id>/`              | PUT    | Update note                  | Yes           |
| `/notes/<id>/`              | DELETE | Delete note                  | Yes           |
| `/categories/`              | GET    | List categories              | Yes           |
| `/categories/`              | POST   | Create category              | Yes           |
| `/categories/<id>/`         | PUT    | Update category              | Yes           |
| `/categories/<id>/`         | DELETE | Delete category              | Yes           |
| `/profile/`                 | GET    | Get profile                  | Yes           |
| `/profile/`                 | PATCH  | Update profile name or image | Yes           |
| `/profile/change-password/` | PATCH  | Change user password         | Yes           |

### Future Features

1. **Real-time User Interactions**
   - Enjoy real-time chat, notifications, and user-to-user messaging for seamless communication.
2. **Personalized User Profiles**
   - Customize your profile further, adding new sections and options to make it uniquely yours.
3. **Mobile App Development**
   - Stay tuned for the mobile app, extending accessibility to your favorite social platform.
4. **Adding real-time reminders**
   - Allowing notifications or emails update the user when a specified date has been made for the notes to remind them

## The Skeleton Plane

### Wireframes

All wireframes have been used as a guideline to creating notenet. All wireframes include a desktop and a mobile version to ensure solid guidelines to a fully user friendly and responsive website

#### Home Page

![Home Page](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719872171/Screenshot_2024-07-01_122049_s9xkqg.png)

#### Notes Page

![Notes](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719872170/Screenshot_2024-07-01_122107_sfldev.png)

#### Profile Page

![Profile Page](https://res.cloudinary.com/dbjm35bjd/image/upload/v1750219865/categorywireframepage.png)

#### Category Page

![Profile Page](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719872171/Screenshot_2024-07-01_122117_wmf1yr.png)

#### Authentication Pages

![Authentication Pages](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719872171/Screenshot_2024-07-01_122127_rff9mm.png)

### Database Structure

I've crafted the database structure for the Notenet Backend API. Here are the core models:

- **User:** These are slightly customized from Django's standard User model to align with our requirements.
- **Profile:** Automatically generated upon user registration, these profiles are tailored to encompass essential information.
- **Notes** Notes related to the user so when a user makes a note it is tailored to them

Here is a relational Diagram to better understand the relationship between the tables.

![Entity Relationship Diagram](https://res.cloudinary.com/dbjm35bjd/image/upload/v1750219656/entityrelationshipdiagram.png)

## Frontend Component Documentation

### 1. **`Categories` Page (`/categories`)**

The `Categories` page allows users to manage categories for their notes. It includes functionality to add, edit, and delete categories.

#### **Key Features:**

- **Fetching Categories:** Retrieves the list of categories from the backend API.
- **Add New Category:** Users can add a new category by filling out a form with a name, description, and color.
- **Edit Category:** If a user selects a category, they can edit its name, description, and color.
- **Delete Category:** Categories can be deleted after confirmation, and the list is updated accordingly.
- **Category List:** Displays all categories with their details (name, description, and color).

#### **Code Overview:**

- The component uses the `useState` and `useEffect` hooks to manage state and side effects like fetching categories.
- Users can add or update categories through POST and PUT requests to the backend API.
- Categories are displayed in a list with interactive buttons for editing or deleting.

---

### 2. **`Home` Page (`/`)**

The `Home` page serves as the landing page for the application. It provides an introduction to the Notenet app, including instructions for first-time users.

#### **Key Features:**

- **Welcome Section:** Displays a heading and subheading to welcome users.
- **Instructions:** Step-by-step guide on how to use the app, with images for visual aid.
- **Video Tutorial:** An embedded video demonstrating how to use the app.
- **Animated Background:** A dynamic background animation that adds visual appeal to the page.

#### **Code Overview:**

- The component provides an overview of the Notenet app with instructional images and a video embedded for user guidance.
- The background is styled using Tailwind CSS, and the `Home.module.css` is used for custom animations.

---

### 3. **`Notes` Page (`/notes`)**

The `Notes` page allows users to create, view, filter, and delete notes. It integrates category filtering, note creation, and CRUD operations for managing notes.

#### **Key Features:**

- **Fetch Notes:** Loads the list of notes from the backend API.
- **Create Note:** A floating button opens a form to create a new note, including a title, body, and category.
- **Note List:** Displays notes with their title, body (truncated), and creation date. Notes can be filtered by category.
- **Delete Note:** Notes can be deleted, and the list is updated after each deletion.
- **Category Filter:** Users can filter notes by category.

#### **Code Overview:**

- The component uses `useState` to manage note data and `useEffect` to fetch notes and categories when the component mounts.
- A floating button toggles the form for creating new notes.
- The filtering is handled using `useMemo`, which optimizes the process of filtering notes by category.

---

### 4. **`Profile` Page (`/profile`)**

The `Profile` page allows users to view and edit their profile information, including their username, password, and profile image.

#### **Key Features:**

- **Profile Display:** Displays the user's profile image, name, email, and account creation date.
- **Image Upload:** Users can upload a new profile image.
- **Username Update:** A modal allows users to change their username.
- **Password Change:** A modal allows users to change their password.
- **Success/Error Messages:** Notifications are displayed to inform users of successful or failed actions.

#### **Code Overview:**

- The component uses `useState` to store user profile data and manage modal visibility for editing username and password.
- `useEffect` is used to fetch the profile data from the API when the page loads.
- The component includes modals (`EditUsernameModal`, `EditPasswordModal`) for updating the user's credentials.
- The profile image can be uploaded using an `<input type="file" />` element and the file is uploaded via a `PATCH` request to the backend.

---

### 5. **`Signin` Page (`/signin`)**

The `Signin` page allows users to log into the application with their credentials (username and password).

#### **Key Features:**

- **Login Form:** A form for entering the username and password.
- **Authentication:** Submits credentials to the backend API to obtain access and refresh tokens.
- **Success/Error Handling:** Displays success or error messages depending on the result of the login attempt.
- **Redirect:** After a successful login, users are redirected to the homepage.

#### **Code Overview:**

- The component uses `useState` to manage the form fields (`username`, `password`).
- Upon form submission, a POST request is made to the `/api/token/` endpoint to retrieve a JWT token for the user.
- On success, the user is redirected to the homepage, and a success message is displayed.

---

### 6. **`Signup` Page (`/signup`)**

The `Signup` page allows new users to create an account by providing their username, email, and password.

#### **Key Features:**

- **Registration Form:** A form where users can enter their username, email, and password.
- **Account Creation:** Submits the registration data to the backend API to create a new account.
- **Success/Error Handling:** Displays success or error messages based on the result of the signup attempt.
- **Redirect:** After successful signup, users are redirected to the Sign In page.

#### **Code Overview:**

- The component uses `useState` to manage the form data (`username`, `email`, `password`).
- Upon form submission, the component makes a POST request to the `/api/user/register/` endpoint to create a new user.
- If successful, the user is redirected to the sign-in page, and a success message is displayed.

## API Overview

All endpoints are protected using JWT Authentication unless otherwise noted. Below is a list of the main API endpoints and their descriptions:

| Method | Endpoint                        | Description                               | Access        |
| ------ | ------------------------------- | ----------------------------------------- | ------------- |
| POST   | `/api/users/`                   | Register a new user                       | Public        |
| POST   | `/api/token/`                   | Obtain JWT access and refresh tokens      | Public        |
| POST   | `/api/token/refresh/`           | Refresh JWT token                         | Public        |
| GET    | `/api/notes/`                   | List all notes for the authenticated user | Authenticated |
| POST   | `/api/notes/create/`            | Create a new note                         | Authenticated |
| GET    | `/api/notes/<id>/`              | Retrieve a specific note                  | Authenticated |
| PUT    | `/api/notes/<id>/update/`       | Update a specific note                    | Authenticated |
| DELETE | `/api/notes/<id>/delete/`       | Delete a specific note                    | Authenticated |
| GET    | `/api/categories/`              | List all categories for the user          | Authenticated |
| POST   | `/api/categories/`              | Create a new category                     | Authenticated |
| GET    | `/api/categories/<id>/`         | Retrieve a category                       | Authenticated |
| PUT    | `/api/categories/<id>/`         | Update a category                         | Authenticated |
| DELETE | `/api/categories/<id>/`         | Delete a category                         | Authenticated |
| GET    | `/api/profile/`                 | Retrieve current user's profile           | Authenticated |
| PATCH  | `/api/profile/upload/<id>/`     | Update profile image                      | Authenticated |
| PUT    | `/api/profile/change-password/` | Change password                           | Authenticated |

### Endpoint Details

1. **POST `/api/users/`** - Register a new user.

   - **Description:** Creates a new user in the system by providing a username, email, and password.
   - **Request Body:**
     ```json
     {
       "username": "john_doe",
       "email": "john@example.com",
       "password": "securePassword123"
     }
     ```
   - **Response:** Returns a message confirming the successful registration of the user.

2. **POST `/api/token/`** - Obtain JWT access and refresh tokens.

   - **Description:** Authenticates the user by verifying their username and password, and returns a JWT access token and refresh token for subsequent requests.
   - **Request Body:**
     ```json
     {
       "username": "john_doe",
       "password": "securePassword123"
     }
     ```
   - **Response:**
     ```json
     {
       "access": "access_token_string",
       "refresh": "refresh_token_string"
     }
     ```

3. **POST `/api/token/refresh/`** - Refresh JWT token.

   - **Description:** Refreshes the JWT access token using the refresh token.
   - **Request Body:**
     ```json
     {
       "refresh": "refresh_token_string"
     }
     ```
   - **Response:** Returns a new JWT access token.

4. **GET `/api/notes/`** - List all notes for the authenticated user.

   - **Description:** Retrieves a list of notes created by the authenticated user.
   - **Response:**
     ```json
     [
       {
         "id": 1,
         "title": "Note 1",
         "body": "This is note 1",
         "category": "Work",
         "created_on": "2024-06-15T14:25:00Z",
         "updated_at": "2024-06-16T12:30:00Z"
       },
       ...
     ]
     ```

5. **POST `/api/notes/create/`** - Create a new note.

   - **Description:** Allows authenticated users to create a new note with a title, body, and optional category.
   - **Request Body:**
     ```json
     {
       "title": "New Note",
       "body": "This is the content of the note.",
       "category_id": 1
     }
     ```
   - **Response:** Returns the created note.

6. **GET `/api/notes/<id>/`** - Retrieve a specific note.

   - **Description:** Retrieves the details of a specific note by its `id`.
   - **Response:**
     ```json
     {
       "id": 1,
       "title": "New Note",
       "body": "This is the content of the note.",
       "category": "Work",
       "created_on": "2024-06-15T14:25:00Z",
       "updated_at": "2024-06-16T12:30:00Z"
     }
     ```

7. **PUT `/api/notes/<id>/update/`** - Update a specific note.

   - **Description:** Allows authenticated users to update the content or category of a note by its `id`.
   - **Request Body:**
     ```json
     {
       "title": "Updated Note",
       "body": "Updated content",
       "category_id": 2
     }
     ```
   - **Response:** Returns the updated note.

8. **DELETE `/api/notes/<id>/delete/`** - Delete a specific note.

   - **Description:** Deletes a specific note by its `id`.
   - **Response:** Returns a success message upon deletion.

9. **GET `/api/categories/`** - List all categories for the user.

   - **Description:** Retrieves all categories available to the authenticated user.
   - **Response:**
     ```json
     [
       {
         "id": 1,
         "name": "Work",
         "description": "Work-related tasks",
         "color": "#FF6347"
       },
       ...
     ]
     ```

10. **POST `/api/categories/`** - Create a new category.

    - **Description:** Creates a new category for notes, allowing users to organize them.
    - **Request Body:**
      ```json
      {
        "name": "Personal",
        "description": "Personal notes",
        "color": "#32CD32"
      }
      ```
    - **Response:** Returns the created category.

11. **GET `/api/categories/<id>/`** - Retrieve a category.

    - **Description:** Retrieves the details of a specific category by its `id`.
    - **Response:**
      ```json
      {
        "id": 1,
        "name": "Work",
        "description": "Work-related tasks",
        "color": "#FF6347"
      }
      ```

12. **PUT `/api/categories/<id>/`** - Update a category.

    - **Description:** Updates the name, description, or color of an existing category.
    - **Request Body:**
      ```json
      {
        "name": "Updated Category",
        "description": "Updated description",
        "color": "#4682B4"
      }
      ```
    - **Response:** Returns the updated category.

13. **DELETE `/api/categories/<id>/`** - Delete a category.

    - **Description:** Deletes a specific category by its `id`.
    - **Response:** Returns a success message upon deletion.

14. **GET `/api/profile/`** - Retrieve the current user's profile.

    - **Description:** Retrieves the profile information of the authenticated user.
    - **Response:**
      ```json
      {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com",
        "created_at": "2024-06-15T14:25:00Z"
      }
      ```

15. **PATCH `/api/profile/upload/<id>/`** - Update profile image.

    - **Description:** Allows the user to upload a new profile image.
    - **Request Body:** Form-data containing the image file.

16. **PUT `/api/profile/change-password/`** - Change user password.
    - **Description:** Allows the user to change their password.
    - **Request Body:**
      ```json
      {
        "password": "newPassword123"
      }
      ```
    - **Response:** Returns a success message upon password change.

---

### Notes:

- All endpoints requiring authentication should include a valid JWT token in the `Authorization` header as `Bearer <your-token-here>`.
- Error responses are typically returned with an appropriate HTTP status code (e.g., 400 for bad requests, 404 for not found).

This section explains the API endpoints in detail, including request/response formats, expected behavior, and required authentication.

## The Surface Plane

### Design

#### Colour Scheme

Notenet has used very neutral but effective color scheme to keep the website simple but consistent. Here are the colors that have been used.

- **Color 1:** #404040
- **Color 2:** ##525252
- **Color 3:** #F97316

![Colour Pallette](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719872169/Screenshot_2024-07-01_222624_axfoxb.png)

#### Typography

In the "Notenet" project, the fonts "Cabin" and "Arimo" have been thoughtfully chosen to enhance the visual aesthetics and readability of the platform.

- **Cabin**, sans-serif
- **Arimo**, sans-serif

These fonts are sourced from [Google Fonts](https://fonts.google.com/).

**Cabin** is a modern and highly legible font. Its clean, geometric design offers exceptional clarity and readability, making it accessible to a wide audience. This also gives a very sophisticated look and makes the website look professional.
This is used for the Navigation Menu

**Arimo** This provides a distinctive, but simplistic look that enhances the overall aesthetic appeal of the platform.

#### Imagery

- The images for the profile pictures were used from [Unsplash](https://unsplash.com/)

- The icons were imported from [Font Awesome](https://fontawesome.com/).

- The no notes found maskot that was made and the notenet logo - was created from [canva](https://canva.com)

## Testing

Notenets testing all done [here](TESTING.md)

## Technologies Used

### Languages

- **HTML**
- **CSS**
- **Javascript**
- **Python**

### Frameworks, Software and Web Applications

#### Frameworks

- React
- Django (REST)
- [React Bootstrap](https://react-bootstrap.github.io/) - A CSS framework that helps build solid, responsive, mobile-first sites
- [Tailwind](https://tailwindcss.com/) A css framework that helps build applications

#### Applications

- [Balsamiq](https://balsamiq.com/) - Used to create the wireframes
- [Colors.co](https://coolors.co/) - For Colour Pallette
- [Logo](https://canva.com) - Used to generate the Animal Gram logo
- [Favicon](https://favicon.io/) - Used to create the favicon
- [Font Awesome](https://fontawesome.com/) - Used for icons across UI
- [Google Fonts](https://fonts.google.com/specimen/DM+Sans) - Used to import the website font

#### Software

- [Github](https://github.com/) - Used to host the repository, store the commit history and manage the project board containing user stories
- [Heroku](https://en.wikipedia.org/wiki/Heroku) - A cloud platform that the application is deployed to
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) - Used to test site performance
- [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/) - Used to debug and test responsiveness
- [Cloudinary](https://cloudinary.com/) - A service that hosts image and video files in the project.
- [HTML Validation](https://validator.w3.org/) - Used to validate HTML code
- [CSS Validation](https://jigsaw.w3.org/css-validator/) - Used to validate CSS code
- [JSHint Validation](https://jshint.com/) - Used to validate JavaScript code
- JEST - For unit testing of all forms and code
- [Unsplash](https://unsplash.com/) - Free stock image provider for posts and avatars that were uploaded

## Libraries

The libraries used in this project are located in the requirements.txt file and have been documented below:

- [asgiref](https://pypi.org/project/asgiref/) - ASGI is a standard for Python asynchronous web apps and servers to communicate with each other, and positioned as an asynchronous successor to WSGI.
- [cloudinary](https://pypi.org/project/cloudinary/) - The Cloudinary Python SDK allows you to quickly and easily integrate your application with Cloudinary.
- [dj-database-url](https://pypi.org/project/dj-database-url/0.5.0/) - This simple Django utility allows you to utilize the 12factor inspired DATABASE_URL environment variable to configure your Django application.
- [dj-rest-auth](https://pypi.org/project/dj-rest-auth/) - Drop-in API endpoints for handling authentication securely in Django Rest Framework.
- [Django](https://pypi.org/project/Django/) - Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.
- [django-allauth](https://pypi.org/project/django-allauth/) - Integrated set of Django applications addressing authentication, registration, account management as well as 3rd party (social) account authentication.
- [django-cloudinary-storage](https://pypi.org/project/django-cloudinary-storage/) - Django Cloudinary Storage is a Django package that facilitates integration with Cloudinary by implementing Django Storage API.
- [django-cors-headers](https://pypi.org/project/django-cors-headers/) - A Django App that adds Cross-Origin Resource Sharing (CORS) headers to responses. This allows in-browser requests to your Django application from other origins.
- [django-filter](https://pypi.org/project/django-filter/) - Django-filter is a reusable Django application allowing users to declaratively add dynamic QuerySet filtering from URL parameters.
- [django-taggit](https://pypi.org/project/django-taggit/) - Django-taggit a simpler approach to tagging with Django.
- [django-rest-framework](https://pypi.org/project/djangorestframework/) - Web-browsable Web APIs.
- [djangorestframework-simplejwt](https://pypi.org/project/djangorestframework-simplejwt/) - Simple JWT is a JSON Web Token authentication plugin for the Django REST Framework.
- [gunicorn](https://pypi.org/project/gunicorn/) - Gunicorn ‘Green Unicorn’ is a Python WSGI HTTP Server for UNIX. It’s a pre-fork worker model ported from Ruby’s Unicorn project. The Gunicorn server is broadly compatible with various web frameworks, simply implemented, light on server resource usage, and fairly speedy.
- [oauthlib](https://pypi.org/project/oauthlib/) - OAuthLib is a framework which implements the logic of OAuth1 or OAuth2 without assuming a specific HTTP request object or web framework.
- [pillow](https://pypi.org/project/Pillow/8.2.0/) - The Python Imaging Library adds image processing capabilities to your Python interpreter.
- [psycopg2](https://pypi.org/project/psycopg2/) - Psycopg is the most popular PostgreSQL database adapter for the Python programming language.
- [PyJWT](https://pypi.org/project/PyJWT/) - A Python implementation of RFC 7519.
- [python3-openid](https://pypi.org/project/python3-openid/) - OpenID support for modern servers and consumers.
- [pytz](https://pypi.org/project/pytz/) - This is a set of Python packages to support use of the OpenID decentralized identity system in your application, update to Python 3.
- [requests-oauhlib](https://pypi.org/project/requests-oauthlib/) - Provides first-class OAuth library support for Requests.
- [sqlparse](https://pypi.org/project/sqlparse/) - sqlparse is a non-validating SQL parser for Python.
- [tailwind](https://tailwindcss.com/) - used as a framework for styling css content

## Deployment Frontend

### Deployment to Heroku

1. In your Heroku account, select Create New App, and give it a unique name related to your project.
2. Select a region corresponding to where you live and click 'Create App'.
3. Head into the 'Deploy' tab, select GitHub as the 'deployment method', find your project repository and click 'Connect' your Heroku app to the GitHub repository.
4. Fill out config vars needed.
5. Click 'Deploy branch' to trigger Heroku to start building the application.
6. Once you see the message saying 'build succeeded', you can click 'Open App' to see your application in the browser.

### Clone this Project Repository

Go into local IDE and within the terminal

```
git clone https://github.com/linkofrepository
```

## Deployment Backend

The project was deployed to [Heroku](https://www.heroku.com/).

1. To begin with we need to create a GitHub repository
2. Fill in the details for the new repository and then click 'Create Repository'.
3. When the repository has been created
4. Go into local IDE and within the terminal and

```
git clone https://github.com/linkofrepository
```

4. Install Django and the supporting libraries that are needed, using the following commands:

```
- `pip3 install 'django<4' gunicorn`
- `pip3 install 'dj_database_url psycopg2`
- `pip3 install 'dj3-cloudinary-storage`
```

5. When Django and the libraries are installed we need to create a requirements file.

```
pip3 freeze --local > requirements.txt - This will create and add required libraries to requirements.txt
```

6. Create the project.

```
django-admin startproject YOUR_PROJECT_NAME
```

Cd into project

7. When the project is created we can now create the applications. My project consists of the following apps; Profiles, Comments, Followers, Likes, and Posts and Messaging.

```
python3 manage.py startapp APP_NAME
```

This will create an application

8. We now need to add the applications to settings.py in the INSTALLED_APPS list.

9. Now it is time to do our first migration and run the server to test that everything works as expected. This is done by writing the commands below.

```
python3 manage.py makemigrations
```

This will prepare the migrations

```
python3 manage.py migrate
```

This will migrate the changes

```
python3 manage.py runserver
```

This runs the server. To test it, click the open browser button that will be visible after the command is run.

10. Now it is time to create our application on Heroku, attach a database, prepare our environment and settings.py file and setup the Cloudinary storage for our static and media files.

- Once signed into your [Heroku](https://www.heroku.com/) account, click on the button labeled 'New' to create a new app.

11. Choose a unique app name, choose your region and click 'Create app".

12. Next we need to connect an external PostgreSQL database to the app from [ElephantSQL](https://customer.elephantsql.com/login). Once logged into your ElephantSQL dashboard, you click 'Create New Instance' to create a new database. Give the database a:

- Name
- Tiny Turtle Free Plan
- Selected data center near you

and click 'Create Instance'. Return to your ElephantSQL Dashboard, and click into your new database instance. Copy the Database URL and head back to Heroku.

13. Back in your Heroku app settings, click on the 'Reveal Config Vars' button. Create a config variable called DATABASE_URL and paste in the URL you copied from ElephantSQL. This connects the database into the app.

14. Go back to GitPod and create a new env.py in the top level directory. Then add these rows.

- `import os` - This imports the os library
- `os.environ["DATABASE_URL"]` - This sets the environment variables.
- `os.environ["SECRET_KEY"]` - Here you can choose whatever secret key you want.

14. Back in the Heroku Config Vars settings, create another variable called SECRET_KEY and copy in the same secret key as you added into the env.py file. Don't forget to add this env.py file into the .gitignore file so that it isn't committed to GitHub for other users to find.

15. Now we have to connect to our environment and settings.py file. In the settings.py, add the following code:

```
`import os`

`import dj_database_url`

`if os.path.isfile("env.py"):`

`import env`
```

16. In the settings file, remove the insecure secret key and replace it with:
    `SECRET_KEY = os.environ.get('SECRET_KEY')`

17. Now we need to comment out the old database settings in the settings.py file (this is because we are going to use the postgres database instead of the sqlite3 database).

Instead, we add the link to the DATABASE_URL that we added to the environment file earlier.

18. Save all your fields and migrate the changes again.

`python3 manage.py migrate`

19. Now we can set up [Cloudinary](https://cloudinary.com/users/login?RelayState=%2Fconsole%2Fmedia_library%2Ffolders%2Fhome%3Fconsole_customer_external_id%3Dc-95a4cb26371c4a6bc47e19b0f130a1#gsc.tab=0) (where we will store our static files). First you need to create a Cloudinary account and from the Cloudinary dashboard copy the API Environment Variable.

20. Go back to the env.py file in Gitpod and add the Cloudinary url (it's very important that the url is correct):

`os.environ["CLOUDINARY_URL"] = "cloudinary://************************"`

21. Let's head back to Heroku and add the Cloudinary url in Config Vars. We also need to add a disable collectstatic variable to get our first deployment to Heroku to work.

22. Back in the settings.py file, we now need to add our Cloudinary Libraries we installed earlier to the INSTALLED_APPS list. Here it is important to get the order correct.

- cloudinary_storage
- django.contrib.staticfiles
- cloudinary

23. For Django to be able to understand how to use and where to store static files we need to add some extra rows to the settings.py file.

24. To be able to get the application to work through Heroku we also need to add our Heroku app and localhost to the ALLOWED_HOSTS list:

`ALLOWED_HOSTS = ['name.herokuapp.com', 'localhost']`

25. Now we just need to create the basic file directory in Gitpod.

- Create a file called \*_Procfile_ and add the line `web: gunicorn PROJ_NAME.wsgi?` to it.

26. Now you can save all the files and prepare for the first commit and push to Github by writing the lines below.

```
- `git add .`
- `git commit -m "Deployment Commit`
- `git push`
```

27. Now it's time for deployment. Scroll to the top of the settings page in Heroku and click the 'Deploy' tab. For deployment method, select 'Github'. Search for the repository name you want to deploy and then click connect.

28. Scroll down to the manual deployment section and click 'Deploy Branch'. Hopefully the deployment is successful!

### Cloning And Setting Up This Project

To clone and set up this project you need to follow the steps below.

1. When you are in the repository, find the code tab and click it.
2. To the left of the green GitPod button, press the 'code' menu. There you will find a link to the repository. Click on the clipboard icon to copy the URL.
3. Use an IDE and open Git Bash. Change directory to the location where you want the cloned directory to be made.
4. Type 'git clone', and then paste the URL that you copied from GitHub. Press enter and a local clone will be created.
5. To be able to get the project to work you need to install the requirements. This can be done by using the command below:

- `pip3 install -r requirements.txt` - This command downloads and installs all required dependencies that is stated in the requirements file.

6. The next step is to set up the environment file so that the project knows what variables that needs to be used for it to work. Environment variables are usually hidden due to sensitive information. It's very important that you don't push the env.py file to Github (this can be secured by adding env.py to the .gitignore-file). The variables that are declared in the env.py file needs to be added to the Heroku config vars. Ensure to do migrations before trying to run the server.

- `python3 manage.py migrate` - This will do the necessary migrations.
- `python3 manage.py runserver` - If everything i setup correctly the project is now live locally.

## Credits

- [React Bootstrap documentation](https://react-bootstrap.netlify.app/) - Documentation used for styling and to build responsive web pages.
- [Code Institute](https://codeinstitute.net/) - Walkthrough modules for the Moments app and Django Rest API walkthrough
- [React documentation](https://legacy.reactjs.org/docs/getting-started.html) - Everything you need to know about React.
- [Stack Overflow](https://stackoverflow.com/) - For troubleshooting and FAQ.
- [W3Schools](https://www.w3schools.com/) - Online Web Tutorials.
- [YouTube](https://www.youtube.com) - Extensive in-depth tutorials for React and Django Rest to reiterate the principles and using both languages together.
- [Map function error](https://stackoverflow.com/questions/30803168/data-map-is-not-a-function) for the understanding of the .map function error
- [Cloudinary](https://cloudinary.com/) for the video tutorials of how to upload saves images to a database and the different configurations for doing it

## Acknowledgments

- I'd like to thank Code Institute for the foundation of Django Rest and React fundamentals for the foundation knowledge and project.
- Slack community for bugs and errors that I struggled to find on the internet.
