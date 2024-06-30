# Bookless-GateSystem Backend

## Technologies Used
- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for building APIs and web applications.
- **Azure Blob Storage**: Cloud storage solution for large amounts of unstructured data.
- **Handlebars (HBS)**: Templating engine for dynamic HTML and email templates.
- **MongoDB**: NoSQL database for storing application data.
- **JSON Web Tokens (JWT)**: Standard for securely transmitting information between parties.
- **Nodemailer**: Library for sending emails from Node.js applications.
- **dotenv**: Module for loading environment variables from a `.env` file.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing.
- **express-fileupload**: Middleware for handling file uploads in Express applications.
- **bcryptjs**: Library for hashing passwords.
- **dates-in-js**: Utility library for working with dates.
- **exceljs**: Library for reading, manipulating, and writing Excel spreadsheets.
- **node-cron**: Library for scheduling tasks in Node.js.
- **uuid**: Library for generating unique identifiers.
- **xlsx**: Library for parsing and creating Excel files.

## Installation
1. **Clone the repository:**
    ```bash
    git clone https://github.com/BT-SRI-DAIICT-2024-002/SRI-002-GateSystem.git
    cd backEND
    ```
2. **Install dependencies:**
    ```bash
    npm install
    ```

## Configuration
1. **Create a `.env` file in the root directory and add the following environment variables:**
    ```plaintext
    PORT=7000
    MONGO_URI=your_mongodb_uri
    AZURE_STORAGE_CONNECTION_STRING=your_azure_storage_connection_string
    BLOB_NAME_STAFF=your_blob_name_staff
    BLOB_NAME_STUDENT=your_blob_name_student
    BLOB_NAME_VISITOR=your_blob_name_visitor
    BLOB_NAME_PARENT=your_blob_name_parent
    BASE_URL=your_base_url
    JWT_SECRET=your_jwt_secret
    SMTP_PASSWORD=your_smtp_password
    SMTP_EMAIL=your_smtp_email
    ATTENDENCE_EMAIL=your_attendance_email
    LATE_EMAIL=your_late_email
    ```
   
## Running the Application
1. **Start the server:**
    ```bash
    npm start
    ```
2. **Access the application:**
    - The server will be running on `http://127.0.0.1:7000`.
    - update the CORS policy accordingly.
    
## Folder Structure

### Routes
All routes are defined in the `routes` folder, organized by user role:
- **`faculty_adminBlock.js`**: Route for faculty admin block functionalities.
- **`hostelWarden.js`**: Route for hostel warden functionalities.
- **`itAdmin.js`**: Route for IT admin functionalities.
- **`registrar.js`**: Route for registrar functionalities.
- **`resetPassword.js`**: Route for password reset functionalities.
- **`security.js`**: Route for security functionalities.
- **`securityManager.js`**: Route for security manager functionalities.
- **`staff.js`**: Route for staff functionalities.
- **`student.js`**: Route for student functionalities.
- **`test.js`**: Route for test functionalities.

### Controllers
Controllers handle the business logic for each route. They are organized similarly to the routes:

- **`dataTables/`**: Routes for records data (logs).
  - `getCurrentVisitors.js`: Retrieves the list of visitors currently inside the campus.
  - `getParentLogs.js`: Retrieves the logs of parent visits.
  - `getStaffLogs.js`: Retrieves the logs of staff movements.
  - `getStudentLogs.js`: Retrieves the logs of student movements.
  - `getVisitorsLogs.js`: Retrieves the logs of visitor movements.
- **`faculty_adminBlock/`**
  - `addVisitor.js`: Adds a visitor with date, time, and reason.
  - `getVisitors.js`: Retrieves visitors for the faculty admin block, user-wise.
  - `login.js`: Handles login for faculty admin block users.
- **`hostelWarden/`**
  - `addParentVisit.js`: Adds a parent visit.
  - `addVehicle.js`: Adds a student's vehicle to the system.
  - `getStudentData.js`: Retrieves data of students.
  - `getVehicle.js`: Retrieves vehicle list with student data.
  - `login.js`: Handles login for hostel wardens.
  - `removeVehicle.js`: Removes a vehicle from the system.
- **`IT-Admin/`**
  - `addBulkStudents.js`: Adds multiple students in bulk.
  - `addStudent.js`: Adds a single student.
  - `addUser.js`: Adds a new user (faculty admin, registrar, staff, security manager, hostel warden).
  - `deleteStudent.js`: Deletes a student record.
  - `deleteUser.js`: Deletes a user (faculty admin, registrar, staff, security manager, hostel warden).
  - `deleteWholeBatch.js`: Deletes an entire batch of students.
  - `getStudentData.js`: Retrieves student data.
  - `getUsers.js`: Retrieves user information (faculty admin, registrar, staff, security manager, hostel warden).
  - `login.js`: Handles login for IT admin.
- **`registrar/`**
  - `login.js`: Handles login for the registrar.
- **`resetPassword/`**
  - `initResetPassword.js`: Initiates the password reset process.
  - `resetPassword.js`: Resets the user's password.
  - `resetPasswordHBS.js`: Manages the Handlebars template for password reset emails.
- **`security/`**
  - `getParentList.js`: Retrieves the list of parents visiting today.
  - `getVisitorList.js`: Retrieves the list of visitors visiting today.
  - `login.js`: Handles login for security personnel.
  - `parentEntryExit.js`: Manages parent entry and exit.
  - `staffEntryExit.js`: Manages staff entry and exit.
  - `studentEntryExit.js`: Manages student entry and exit.
  - `verifyUser.js`: Verifies user existence in the database.
  - `visitorEntry.js`: Manages visitor entry.
  - `visitorExit.js`: Manages visitor exit.
- **`securityManager/`**
  - `addShift.js`: Adds a new security shift.
  - `getAllSecurities.js`: Retrieves all security personnel.
  - `getShiftLogs.js`: Retrieves logs of security shifts.
  - `getTodaysShift.js`: Retrieves today's shift schedule.
  - `login.js`: Handles login for the security manager.
- **`staff/`**
  - `getData.js`: Retrieves staff (current user) data.
  - `login.js`: Handles login for staff.
- **`students_alumni/`**
  - `getData.js`: Retrieves student and alumni data.
  - `login.js`: Handles login for students and alumni.

### Models
Data models are defined in the `models` folder, organized by their purpose:
- **`attendence/`**
  - `staff.js`: Schema for staff attendance records.
- **`logs/`**
  - `parent.js`: Schema for parent visit logs.
  - `staff.js`: Schema for staff movement logs.
  - `student.js`: Schema for student movement logs.
  - `visitor.js`: Schema for visitor logs.
- **`resetPassword/`**
  - `reset.js`: Schema for password reset requests.
- **`securityShifts/`**
  - `currentShift.js`: Schema for current security shifts.
  - `shiftLogs.js`: Schema for security shift logs.
- **`static/`**
  - **`faculty_adminBlock/`**
    - `faculty_adminBlock.js`: Schema for static data related to the faculty admin block.
  - **`hostelWarden/`**
    - `hostelWarden.js`: Schema for data related to hostel wardens.
  - **`IT-Admin/`**
    - `IT-Admin.js`: Schema for data related to IT admins.
  - **`parent/`**
    - `parent.js`: Schema for data related to parents.
  - **`registrar/`**
    - `registrar.js`: Schema for data related to the registrar.
  - **`security/`**
    - `security.js`: Schema for data related to security personnel.
  - **`securityManager/`**
    - `securityManager.js`: Schema for data related to the security manager.
  - **`staff/`**
    - `staff.js`: Schema for data related to staff.
  - **`students_alumni/`**
    - `student.js`: Schema for data related to students and alumni.
  - **`visitor/`**
    - `visitor.js`: Schema for data related to visitors.
- **`transactional/`**
  - `parent.js`: Schema for parent transactional records.
  - `staff.js`: Schema for staff transactional records.
  - `student.js`: Schema for student transactional records.
  - `visitor.js`: Schema for visitor transactional records.

### Middleware
Middleware functions are located in the `middleware` folder, handling authentication and authorization:
- `dataAuth.js`: Middleware for data authorization.
- `faculty_adminBlock.js`: Middleware for faculty admin block authorization.
- `hostelWardenAuth.js`: Middleware for hostel warden authorization.
- `itAdminAuth.js`: Middleware for IT admin authorization.
- `registrarAuth.js`: Middleware for registrar authorization.
- `securityAuth.js`: Middleware for security authorization.
- `securityManagerAuth.js`: Middleware for security manager authorization.
- `staffAuth.js`: Middleware for staff authorization.
- `studentAuth.js`: Middleware for student authorization.

### Templates
Email templates are stored in the `hbsTemplates` folder:
- `attendence.hbs`: Template for attendance emails.
- `Late.hbs`: Template for late report emails.
- `reset-password.handlebars.json`: JSON template for password reset email.
- `reset-password.hbs`: Handlebars template for password reset email.
- `resetPasswordMailTemplate.hbs`: Template for password reset email notification.

### Triggers
Automated triggers are stored in the `triggers` folder:
- **`attendence/`**
  - `monthlyUpdate.js`: Trigger for monthly attendance updates.
- **`lateReport/`**
  - `lateReport.js`: Trigger for sending late reports.
- **`parent/`**
  - `deleteParent.js`: Trigger for deleting parent records.
- **`visitor/`**
  - `visitor.js`: Trigger for visitor management.
- **`controller.js`**: Main trigger controller.

### SMTP
SMTP configurations and scripts for sending emails are in the `SMTP` folder:
- **`attendence/`**
  - `sendMail.js`: Script to send attendance emails.
- **`lateReport/`**
  - `lateReport.js`: Script to send late report emails.
- **`resetPassword/`**
  - `resetPassword.js`: Script to send password reset emails.
- **`utils/`**
  - `setup.js`: Setup script for SMTP configuration.


## File Structure

```
└── 📁backEND
    └── .env
    └── app.js
    └── 📁blob
        └── azureBlob.js
    └── 📁connection
        └── azureBlob.js
        └── connect.js
    └── 📁controllers
        └── 📁dataTables
            └── getCurrentVisitors.js
            └── getParentLogs.js
            └── getStaffLogs.js
            └── getStudentLogs.js
            └── getVisitorsLogs.js
        └── 📁faculty_adminBlock
            └── addVisitor.js
            └── getVisitors.js
            └── login.js
        └── 📁hostelWarden
            └── addParentVisit.js
            └── addVehicle.js
            └── getStudentData.js
            └── getVehicle.js
            └── login.js
            └── removeVehicle.js
        └── 📁IT-Admin
            └── addBulkStudents.js
            └── addStudent.js
            └── addUser.js
            └── deleteStudent.js
            └── deleteUser.js
            └── deleteWholeBatch.js
            └── getStudentData.js
            └── getUsers.js
            └── login.js
        └── 📁registrar
            └── login.js
        └── 📁resetPassword
            └── initResetPassword.js
            └── resetPassword.js
            └── resetPasswordHBS.js
        └── 📁security
            └── getParentList.js
            └── getVisitorList.js
            └── login.js
            └── parentEntryExit.js
            └── staffEntryExit.js
            └── studentEntryExit.js
            └── verifyUser.js
            └── visitorEntry.js
            └── visitorExit.js
        └── 📁securityManager
            └── addShift.js
            └── getAllSecurities.js
            └── getShiftLogs.js
            └── getTodaysShift.js
            └── login.js
        └── 📁staff
            └── getData.js
            └── login.js
        └── 📁students_alumni
            └── getData.js
            └── login.js
        └── 📁test
            └── updatePassword.test.js
            └── whatsApp.test.js
    └── 📁hbsTemplates
        └── attendence.hbs
        └── Late.hbs
        └── reset-password.handlebars.json
        └── reset-password.hbs
        └── resetPasswordMailTemplate.hbs
    └── 📁middleware
        └── dataAuth.js
        └── faculty_adminBlock.js
        └── hostelWardenAuth.js
        └── itAdminAuth.js
        └── registrarAuth.js
        └── securityAuth.js
        └── securityManagerAuth.js
        └── staffAuth.js
        └── studentAuth.js
    └── 📁models
        └── 📁attendence
            └── staff.js
        └── 📁logs
            └── parent.js
            └── staff.js
            └── student.js
            └── visitor.js
        └── 📁resetPassword
            └── reset.js
        └── 📁securityShifts
            └── currentShift.js
            └── shiftLogs.js
        └── 📁static
            └── 📁faculty_adminBlock
                └── faculty_adminBlock.js
            └── 📁hostelWarden
                └── hostelWarden.js
            └── 📁IT-Admin
                └── IT-Admin.js
            └── 📁parent
                └── parent.js
            └── 📁registrar
                └── registrar.js
            └── 📁security
                └── security.js
            └── 📁securityManager
                └── securityManager.js
            └── 📁staff
                └── staff.js
            └── 📁students_alumni
                └── student.js
            └── 📁visitor
                └── visitor.js
        └── 📁transactional
            └── parent.js
            └── staff.js
            └── student.js
            └── visitor.js
    └── package-lock.json
    └── package.json
    └── 📁routes
        └── 📁data
            └── dataAPI.js
        └── 📁faculty_adminBlock
            └── faculty_adminBlock.js
        └── 📁hostelWarden
            └── hostelWarden.js
        └── 📁IT-Admin
            └── itAdmin.js
        └── 📁registrar
            └── registrar.js
        └── 📁resetPassword
            └── resetPassword.js
        └── 📁security
            └── security.js
        └── 📁securityManager
            └── securityManager.js
        └── 📁staff
            └── staff.js
        └── 📁student
            └── student.js
        └── 📁test
            └── test.js
    └── 📁SMTP
        └── 📁attendence
            └── sendMail.js
        └── 📁lateReport
            └── lateReport.js
        └── 📁resetPassword
            └── resetPassword.js
        └── 📁utils
            └── setup.js
    └── 📁triggers
        └── 📁attendence
            └── monthlyUpdate.js
        └── controller.js
        └── 📁lateReport
            └── lateReport.js
        └── 📁parent
            └── deleteParent.js
        └── 📁visitor
            └── visitor.js
```