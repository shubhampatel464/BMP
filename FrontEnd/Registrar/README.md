
# Project Strucuture

## Directory and File Organization:


## File Structure
```
└── 📁Registrar
    └── .DS_Store
    └── .eslintrc.cjs
    └── .gitignore
    └── README.md
    └── index.html
    └── package-lock.json
    └── package.json
    └── postcss.config.js
    └── 📁public
        └── vite.svg
    └── 📁src
        └── App.jsx
        └── 📁Assets
            └── LoginImg.png
            └── Logo.png
            └── building.svg
            └── qr-frame.svg
        └── 📁Components
            └── Button.jsx
            └── InputField.jsx
            └── Navbar.jsx
            └── ProfileCard.jsx
            └── QrCodeComponent.jsx
            └── QrStyles.css
            └── StickyFooterMobile.jsx
        └── 📁Services
            └── Api.js
            └── AuthContext.jsx
            └── CommonRequest.js
            └── Helpers.js
        └── 📁Views
            └── Login.jsx
            └── 📁Records
                └── Parent.jsx
                └── ParentRecordsList.jsx
                └── Staff.jsx
                └── StaffRecordsList.jsx
                └── Student.jsx
                └── StudentRecordsList.jsx
                └── Visitors.jsx
                └── VisitorsRecordsList.jsx
                └── index.jsx
            └── ResetPassword.jsx
        └── index.css
        └── main.jsx
    └── tailwind.config.js
    └── vite.config.js
```

## Directory Structure:
### Assets: 
Contains the static files like images.
### Views: 
Contains the main views/components of the webApp such as Login, Records (Parent, Staff, Student, Visitors), and ResetPassword.
### Components: 
Contains the core components used in the webApp such as Button, InputField, Navbar, ProfileCard, QrCodeComponent, StickyFooterMobile.
### Services: 
Includes service files like API for handling authentication and other common requests.

## Critical Directories and Files:
#### App.jsx: 
The main entry point for the React web-app.
#### package.json: 
Lists dependencies and scripts necessary for building and running the project.
#### Views Directory: 
Contains key component files for the different pages/views of the web-app.
#### Services: 
Contains all critical things like API-URL, etc.

## Main Entry Point of the Application:
App.jsx is the main entry point, setting up routing and providing authentication context.

# Key Technologies and Libraries:
## State Management Solution and Overview:

### Routing Mechanism:
React Router: 
`react-router-dom` is used for client-side routing. The main routes are defined in `App.jsx` using `Routes` and `Route` components.

### Styling Approach:
Tailwind CSS: Utilized for styling the web-app, as indicated by the dependency in `package.json`.

### APIs and Services Used:
#### axios: 
For making HTTP requests.
#### js-cookie: 
For handling cookies, specifically for storing authentication tokens.
#### qrcode.react: 
For generating QR codes in the web-app.
#### ag-grid-react: 
For displaying and managing data in a grid format.
#### react-hook-form: 
For managing form state and validation.

# Component Structure:
## Component Hierarchy and Key Components:

#### App.jsx: 
The root component.

### Routes:
#### Login: 
Public route for the login page.

#### PrivateRoutes: 
Wrapper for routes that require authentication.

#### RecordsDashBoard: 
Protected route for displaying records dashboard.

#### StudentRecords: 
Protected route for displaying student records.

#### VisitorRecords: 
Protected route for displaying visitor records.

#### StaffRecords: 
Protected route for displaying staff records.

#### ParentRecords: 
Protected route for displaying parent records.

#### ResetPassword: 
Public route for resetting passwords.

## Reusable Components and Their Usage:

### PrivateRoutes: 
A component used to protect routes that require authentication. It checks for a token in cookies and either renders the requested component or redirects to the login page.

### Button:
A reusable button component that can be customized with different styles and text.

### InputField:
A reusable input field component that can be customized with different styles and placeholder text.

### Navbar:
A reusable navigation bar component that can be customized with different styles and links.

### ProfileCard:
A reusable profile card component that displays user information.

### QrCodeComponent:
A reusable QR code component that generates QR codes based on the input data.

### StickyFooterMobile:
A reusable sticky footer component that is displayed at the bottom of the page on mobile devices.

# Services and APIs:
## API Service:
The API service is used to make HTTP requests to the backend server. It includes methods for handling authentication, fetching data, and sending data to the server.

## AuthContext:
Provides context and hooks for authentication within the application, managing user sessions and tokens.

## CommonRequest:
The CommonRequest module includes common methods for making HTTP requests using axios. It includes methods for handling request headers, error handling, and response data.

## Helpers:
The Helpers module includes helper functions for common tasks like parsing dates, generating random strings, and formatting data.

# Views and Components:
## Login:
The Login view is the main entry point for the web-app. It includes a form for users to enter their credentials and submit them for authentication.

## Records:
### StudentRecords:
The StudentRecords view displays a list of student records and their details.

### VisitorRecords:
The VisitorRecords view displays a list of visitor records and their details.

### StaffRecords:
The StaffRecords view displays a list of staff records and their details.

### ParentRecords:
The ParentRecords view displays a list of parent records and their details.

### RecordsDashBoard:
The RecordsDashBoard view serves as a summary page that links to the various records views (Student, Visitor, Staff, Parent).

## ResetPassword:
The ResetPassword view allows users to reset their passwords. It includes a form for entering a new password and submitting it for validation.

# Important Files and Code Sections:

## Key configuration files and their purposes
### package.json:
Contains the project dependencies, scripts, and metadata.

### App.jsx:
The main entry point for the React web-app. It sets up routing and provides authentication context.

### tailwind.config.js:
The configuration file for Tailwind CSS. It includes settings for customizing the design system.

### vite.config.js:
The configuration file for Vite. It includes settings for customizing the build process.

### postcss.config.js:
The configuration file for PostCSS. It includes settings for customizing the CSS processing.

### .eslintrc.cjs:
The configuration file for ESLint. It includes settings for customizing the linting rules.

## Management and definition of environment variables
[Helper.js](./src/Services/Helpers.js) includes environment variables and other common tasks.
