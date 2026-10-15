# Prepper — AI-Powered Interview Preparation

Prepper is a full-stack web application that helps candidates prepare for job interviews using generative AI.

Users can submit their resume, self-description, and target job description to receive a personalized interview report powered by Google's Gemini AI. The application also supports report history and AI-generated resume PDFs tailored to a target role.

## Features

* **User Authentication:** User registration and login with password hashing and JWT-based authentication.
* **Resume Analysis:** Upload a PDF resume for text extraction and AI-powered analysis.
* **AI-Generated Interview Reports:** Generate personalized reports using resume content, self-description, and job description.
* **Job Match Score:** Receive an AI-generated score indicating how closely a candidate's profile matches the target role.
* **Technical Interview Questions:** Explore potential technical questions, interviewer intentions, and suggested answer guidance.
* **Behavioral Interview Questions:** Prepare for behavioral questions with explanations of interviewer intent and answer guidance.
* **Skill Gap Analysis:** Identify potential skill gaps and their severity.
* **Personalized Preparation Plan:** Get a day-wise preparation plan with suggested focus areas and tasks.
* **Interview Report History:** Retrieve previously generated interview reports.
* **Resume PDF Generation:** Generate and download a role-tailored resume PDF.

## Tech Stack

### Frontend

* React
* Vite
* React Router
* Axios
* Sass (SCSS)

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Tokens (JWT)
* bcryptjs
* cookie-parser
* Multer
* pdf-parse
* Puppeteer

### AI Integration

* Google Gemini through the Google Gen AI SDK
* Zod for structured AI response validation

## Project Structure

```text
Prepper/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── src/
│       ├── app.js
│       ├── config/
│       │   └── database.js
│       ├── controllers/
│       │   ├── auth.controller.js
│       │   └── interview.controller.js
│       ├── middlewares/
│       │   ├── auth.middleware.js
│       │   └── file.middleware.js
│       ├── models/
│       │   ├── blacklist.model.js
│       │   ├── interviewreport.model.js
│       │   └── user.model.js
│       ├── routes/
│       │   ├── auth.routes.js
│       │   └── interview.routes.js
│       └── services/
│           └── ai.service.js
├── frontend/
│   ├── package.json
│   └── src/
│       ├── App.jsx
│       ├── app.routes.jsx
│       ├── components/
│       ├── context/
│       ├── hooks/
│       ├── pages/
│       └── services/
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

* Node.js and npm
* A MongoDB database, either local or hosted
* A Google Gemini API key

### 1. Clone the Repository

```bash
git clone https://github.com/Aditi1Sahu/Prepper.git
cd Prepper
```

### 2. Configure and Start the Backend

Navigate to the backend directory:

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory with the following variables:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_long_random_secret
GOOGLE_GENAI_API_KEY=your_gemini_api_key
```

Replace the placeholder values with your own credentials.

| Variable               | Purpose                                   |
| ---------------------- | ----------------------------------------- |
| `MONGO_URI`            | MongoDB connection string                 |
| `JWT_SECRET`           | Secret used to sign authentication tokens |
| `GOOGLE_GENAI_API_KEY` | API key for Google Gemini                 |

Start the backend:

```bash
npm run dev
```

The backend runs on port `3000`.

### 3. Configure and Start the Frontend

Open a **second terminal** in the project root, then run:

```bash
cd frontend
npm install
npm run dev
```

Vite will display the local development URL in the terminal. By default, this is typically `http://localhost:5173`.

Open the displayed URL in your browser.

### 4. Use Prepper

Once the frontend and backend are running and your database and API credentials are configured:

1. Register a new account.
2. Log in to the application.
3. Provide your resume PDF, self-description, and target job description.
4. Generate and review your personalized interview report.
5. Retrieve previous reports or generate a tailored resume PDF.

## How It Works

1. The user submits a resume PDF, self-description, and job description through the frontend.
2. The backend extracts text from the uploaded PDF.
3. The extracted resume text and supplied details are sent to Gemini.
4. Gemini generates a structured interview report containing a match score, technical questions, behavioral questions, skill gaps, and a preparation plan.
5. The report is saved in MongoDB and can be retrieved later.
6. The user can generate a tailored resume PDF using information from a saved report.

## Security

* Keep API keys, database credentials, and JWT secrets private.
* Do not commit your `.env` file.
* Use your own credentials when running the application locally.
* Never place private credentials in frontend code or public documentation.

## Author

**Aditi Sahu**

A full-stack project exploring React, Node.js, authentication, MongoDB, and generative AI.
