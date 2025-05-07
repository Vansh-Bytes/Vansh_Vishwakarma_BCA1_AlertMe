PROJECT TITLE : ALERT ME : AN AUTOMATED NOTIFICATION SYSTEM
TEAM MEMBERS : 
VANSH (TEAM LEADER )
ANIKET (FRONTEND DEVELOPER )
ANISHH (BACKEND DEVELOPER )

PROJECT DESCRIPTION : Alert Me is an automated notification system designed to monitor user data on critical websites. Users register their names and IDs, and the system continuously tracks this data. If any user data disappears due to technical issues, errors, or manual changes, Alert Me instantly notifies all affected users via email and WhatsApp. Built with a user-friendly front-end and a robust back-end powered by Node.js, Express, and MongoDB, this solution ensures data security, user trust, and quick response to data inconsistencies."
LINK TO VIDEO EXPLATION : https://drive.google.com/file/d/1z6L3Mb1B3Qz-YV6LvQ-dyTVoExjARfZE/view?usp=sharing
TECHNOLOGIES USED : 
Frontend (Client-Side)
Technology	Purpose
HTML5	Structure of the web pages (e.g., index.html)
CSS3	Styling (gradients, responsive design via styles.css)
JavaScript (ES6+)	Dynamic interactions (form handling, API calls in app.js)
Font Awesome	Icons (used via CDN in index.html)
Live Server (VSCode Extension)	Local development server for frontend
⚙️ Backend (Server-Side)
Technology	Purpose
Python	Core backend language
Flask	Micro web framework (handles HTTP requests, routes)
Flask-CORS	Enables Cross-Origin Resource Sharing (CORS) for frontend-backend communication
SQLite	Lightweight database (alertme.db stores user emails/OTPs)
SMTP (via smtplib)	Sends emails (OTPs, alerts via Gmail)
SSL/TLS	Secures email transmission (Gmail’s SMTP)
🔧 Development Tools
Technology	Purpose
Visual Studio Code (VSCode)	Primary code editor
GitHub/Git	Version control (if used)
PowerShell/Command Prompt	Running Flask server and commands
SQLite Browser (Optional)	GUI to inspect alertme.db
🔐 Security & Best Practices
Technology	Purpose
Environment Variables (Recommended)	Hide sensitive data (e.g., EMAIL_PASSWORD)
CORS Policies	Restricts API access to trusted frontend origins
OTP (One-Time Password)	Email-based verification
SSL/TLS	Encrypts email traffic

