# Leafy Server

A Node.js backend server for the Leafy application, providing RESTful API endpoints for managing gardeners and gardening tips. Built with Express.js and MongoDB.

## 🚀 Features

- **Gardeners Management**: API endpoints for retrieving gardener information
- **Tips Management**: Full CRUD operations for gardening tips
- **User-specific Tips**: Get tips by user email
- **Public/Private Tips**: Support for public and private tip availability
- **Like System**: Update likes on tips
- **MongoDB Integration**: Robust database operations with MongoDB Atlas

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB Atlas
- **Middleware**: CORS, dotenv
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account
- Git

## 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Leafy-server
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory with the following variables:

   ```env
   PORT=3000
   DB_USER=your_mongodb_username
   DB_PASS=your_mongodb_password
   ```

4. **Start the server**
   ```bash
   npm start
   ```

The server will start on `http://localhost:3000`

## 📚 API Endpoints

### Gardeners

| Method | Endpoint            | Description                         |
| ------ | ------------------- | ----------------------------------- |
| GET    | `/gardeners`        | Get all gardeners                   |
| GET    | `/active-gardeners` | Get active gardeners (limited to 6) |

### Tips

| Method | Endpoint          | Description                     |
| ------ | ----------------- | ------------------------------- |
| GET    | `/tips`           | Get all tips                    |
| GET    | `/tip/:id`        | Get a single tip by ID          |
| POST   | `/tips`           | Create a new tip                |
| PUT    | `/tip/:id`        | Update a tip                    |
| PATCH  | `/tip/:id`        | Update tip likes                |
| DELETE | `/tip/:id`        | Delete a tip                    |
| GET    | `/my-tips/:email` | Get tips by user email          |
| GET    | `/public-tips`    | Get all public tips             |
| GET    | `/home-tips`      | Get 6 public tips for home page |

## 🗄️ Database Schema

### Gardeners Collection

```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  status: String, // "active" or "inactive"
  // ... other fields
}
```

### Tips Collection

```javascript
{
  _id: ObjectId,
  title: String,
  content: String,
  userEmail: String,
  availability: String, // "Public" or "Private"
  likes: Number,
  // ... other fields
}
```

## 🚀 Deployment

This project is configured for deployment on Vercel. The `vercel.json` file contains the necessary configuration for:

- Build settings
- Route handling
- HTTP methods support

### Deploy to Vercel

1. Install Vercel CLI:

   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

## 🔒 Environment Variables

Make sure to set the following environment variables in your deployment platform:

- `PORT`: Server port (default: 3000)
- `DB_USER`: MongoDB Atlas username
- `DB_PASS`: MongoDB Atlas password

## 📝 Scripts

- `npm start`: Start the development server
- `npm test`: Run tests (currently not implemented)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 📞 Support

For support and questions, please open an issue in the repository.

---

**Note**: Make sure to replace `<repository-url>` with the actual repository URL when cloning the project.
