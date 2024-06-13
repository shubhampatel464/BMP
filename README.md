<!-- analyze the project and Give me professional markdown file template with complete overview and folder structure and documents links -->

# Project Title
Gate Entry-Exit Management System

## Overview
It is a web application used to manage the entry and exit of the visitors in the organization. It is a simple and easy to use application that can be used by the security guards to manage the entry and exit of the visitors. The application is designed to be user-friendly and easy to use. It is a simple and easy to use application that can be used by the security guards to manage the entry and exit of the visitors. The application is designed to be user-friendly and easy to use.

## DOCUMENTS
- [UserStories](https://docs.google.com/document/d/1BnwIvm1IeVc2Mx0BGaNPOSitWMWqSzl7jZWe9w-mNgc/edit?usp=drive_link)
- [Project Timeline](https://docs.google.com/spreadsheets/d/1QikrTqDUWh9kQCsSMkloB8jMPWgqTqy0ItaOK5NfYyk/edit?usp=drive_link)

## Figma Design
- [Hostel Warden](https://www.figma.com/design/iu1buiEJsrbfDEPXyy44e4/Hostel-Warden?t=tEp5l6UQhNu1MVEU-1)
- [Security](https://www.figma.com/design/DC92AvTStVBNf8tnGVjBTf/Security?t=tEp5l6UQhNu1MVEU-1)
- [Student / Alumni / Staff](https://www.figma.com/design/DC92AvTStVBNf8tnGVjBTf/Security?t=tEp5l6UQhNu1MVEU-1)
- [IT_ADMIN](https://www.figma.com/design/cJQWy0kaw3OBrMAULFy0Ap/IT-ADMIN?t=tEp5l6UQhNu1MVEU-1)
- [Security Admin](https://www.figma.com/design/9WkF4I8UWuIjwbNNCXR4C2/Security-ADMIN?t=tEp5l6UQhNu1MVEU-1)
- [Registrar](https://www.figma.com/design/tW9duVlcPLEf2hMZl9Ddu4/Registrar?t=tEp5l6UQhNu1MVEU-1)


## Folder Structure
```
backEND 
    ├───blob   
        ├───azureBlob.js
    ├───connection
        ├───connect.js
        ├───connection.js
    ├───controllers
        ├───dataTables
            ├───getCurrentVisitors.js
            ├───getStaffLogs.js
            ├───getStudentLogs.js
            ├───getVisitorLogs.js
        ├───hostelWarden
            ├───addParentVisit.js
            ├───addVehicle.js
            ├───getStudentData.js
            ├───getVehicle.js
            ├───login.js
            ├───removeVehicle.js
        ├───IT-ADMIN
            ├───addBulkStudents.js
            ├───addUser.js
        ├───resetPassword
            ├───initResetPassword.js
            ├───resetPassword.js
            ├───resetPasswordHBS.js 
    ├───hbsTemplates
        ├───late.hbs
        ├───reset-password.hbs
    ├───middleware
        ├───hostelWardenAuth.js
        ├───securityAuth.js
        ├───staffAuth.js
        ├───studentAuth.js
    ├───models
        ├───attendence
            ├───staff.js
        ├───logs
            ├───staff.js
            ├───student.js
            ├───visitor.js
            ├───parent.js
        ├───resetPassword
            ├───reset.js
        ├───static
            ├───hostelWarden.js
        ├───parent
            ├───parent.js
        ├───staff
            ├───staff.js
        ├───security
            ├───security.js
        ├───student_alumni
            ├───student.js
        ├───transactional
            ├───parent.js
            ├───staff.js
            ├───student.js
            ├───visitor.js
    ├───routes
    ├───SMTP
    ├───triggers
    ├───app.js
    ├───package.json
    ├───package-lock.json
    ├───README.md
    ├───.env
    ├───.gitignore


frontEND
    userType
        ├───src
            ├───Assets
            ├───Components
            ├───Services
            ├───Views
            ├───App.jsx
            ├───App.css
            ├───index.css
            ├───main.jsx
        ├───vite.config.js
        ├───tailwind.config.js
        ├───package.json
        ├───package-lock.json
        ├───README.md
        

