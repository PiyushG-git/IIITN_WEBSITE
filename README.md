# IIIT Nagpur Website Redesign

This project is a redesign of the Indian Institute of Information Technology, Nagpur (IIIT Nagpur) website, built with modern web technologies to improve user experience, accessibility, and visual design while maintaining all essential functionality.

> **DISCLAIMER: This website is only for education and learning purposes.**
> 
> **This project was created as part of a college hackathon where redesigning the IIIT Nagpur website was my assigned task.**

## ✨ Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean and intuitive interface following latest design principles
- **Dynamic Content Management**: Easy content updates through admin dashboard
- **User Authentication**: Secure login for students, faculty, and administrators
- **Course Management System**: Information about academic programs and courses
- **Event Calendar**: Upcoming college events, seminars, and deadlines
- **News & Announcements**: Latest updates from the institute
- **Faculty & Staff Directory**: Faculty profiles with contact information
- **Student Portal**: Access to academic records, timetables, and resources
- **Research Showcase**: Highlighting research projects and publications
- **Gallery**: Media showcasing campus life and facilities
- **Online Application System**: For prospective students
- **Contact & Feedback Forms**: For inquiries and suggestions
- **Interactive Campus Map**: Navigate the campus virtually

## 🛠️ Technologies Used

### Frontend
- HTML5, CSS3, JavaScript
- Bootstrap/Custom CSS for responsive design
- AJAX for asynchronous requests
- Various JS libraries for animations and interactive elements

### Backend
- Node.js runtime environment
- Express.js framework
- EJS (Embedded JavaScript) templating
- MongoDB database
- Mongoose ODM for database interactions

### Tools & Utilities
- NPM for package management
- Git for version control
- JWT for authentication
- Multer for file uploads
- Nodemailer for email functionality

## 📁 Project Structure

```
iiit-nagpur-website/
├── config/                 # Configuration files
│   ├── database.js         # MongoDB connection setup
│   ├── passport.js         # Authentication configuration
│   └── config.js           # Environment variables
├── controllers/            # Route controllers
├── middleware/             # Custom middleware functions
├── models/                 # MongoDB schema models
├── public/                 # Static assets
│   ├── css/                # Stylesheets
│   ├── js/                 # Client-side JavaScript
│   ├── images/             # Images and graphics
│   └── uploads/            # User uploaded content
├── routes/                 # Express routes
├── views/                  # EJS templates
│   ├── partials/           # Reusable template parts
│   ├── layouts/            # Template layouts
│   ├── pages/              # Individual page templates
│   └── admin/              # Admin panel templates
├── utils/                  # Helper functions and utilities
├── app.js                  # Main application file
├── package.json            # Project dependencies
└── README.md               # Project documentation
```

## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/iiit-nagpur-website.git
   cd iiit-nagpur-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add the following variables:
     ```
     PORT=3000
     MONGODB_URI=mongodb://localhost:27017/iiit_nagpur
     SESSION_SECRET=your_session_secret
     EMAIL_USER=your_email@gmail.com
     EMAIL_PASS=your_email_password
     ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## ⚙️ Configuration

### Database Setup
1. Install MongoDB on your system or use MongoDB Atlas
2. Update the connection string in the `.env` file
3. Initial data can be seeded using:
   ```bash
   npm run seed
   ```

### Email Configuration
- Configure SMTP settings in the `.env` file for email notifications
- Test the email functionality using:
  ```bash
  npm run test-email
  ```

## 📝 Usage

### Development
```bash
npm run dev
```

### Production
```bash
npm start
```

### Testing
```bash
npm test
```

## 📚 API Documentation

The application provides a RESTful API for various functionalities:

### Authentication Endpoints
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/register` - New user registration (admin only)

### Content Endpoints
- `GET /api/news` - Fetch all news items
- `POST /api/news` - Create news item (admin only)
- `GET /api/events` - Fetch all events
- `POST /api/events` - Create event (admin only)
- `GET /api/departments` - Fetch all departments
- `GET /api/faculty` - Fetch faculty directory

### User Management Endpoints
- `GET /api/users` - Fetch all users (admin only)
- `PUT /api/users/:id` - Update user details
- `DELETE /api/users/:id` - Delete user (admin only)

## 💾 Database Schema

### User Collection
```javascript
{
  email: String,
  password: String (hashed),
  name: String,
  role: String (admin, faculty, student),
  department: String,
  profilePicture: String,
  joinDate: Date,
  lastLogin: Date
}
```

### News Collection
```javascript
{
  title: String,
  content: String,
  author: ObjectId (ref: User),
  date: Date,
  featured: Boolean,
  attachments: [String]
}
```

### Event Collection
```javascript
{
  title: String,
  description: String,
  startDate: Date,
  endDate: Date,
  location: String,
  organizer: String,
  contactEmail: String,
  registrationLink: String
}
```

### Department Collection
```javascript
{
  name: String,
  description: String,
  hod: ObjectId (ref: User),
  courses: [ObjectId] (ref: Course),
  contactInfo: {
    email: String,
    phone: String,
    office: String
  }
}
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a pull request

---

## 🔗 Contact

For any questions or suggestions, please contact:
- **Project Lead**: Your Name - piyushg251004@gmail.com

*This project is not officially affiliated with IIIT Nagpur and is created for educational purposes.*
