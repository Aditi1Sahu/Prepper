# Prepper — AI-Powered Interview Preparation

Prepper is a full-stack web application that helps candidates prepare for job interviews using generative AI.

Users can upload their resumes, provide a self-description, and enter a target job description to receive personalized interview reports powered by Google's Gemini AI. The application also supports interview report history and AI-generated, role-tailored resume PDFs.

## Features

* **User Authentication:** Register and log in with password hashing and JWT-based authentication.
* **Resume Analysis:** Upload PDF resumes for text extraction and AI-powered analysis.
* **AI-Generated Interview Reports:** Generate personalized reports based on resume content, self-description, and job descriptions.
* **Job Match Score:** Get an AI-generated score estimating how closely a candidate's profile matches a target role.
* **Technical Interview Questions:** Explore potential technical questions, interviewer intentions, and suggested answer guidance.
* **Behavioral Interview Questions:** Prepare for behavioral interviews with explanations of interviewer intent and answer guidance.
* **Skill Gap Analysis:** Identify potential skill gaps and their severity.
* **Personalized Preparation Plan:** Get a day-wise preparation plan with suggested focus areas and tasks.
* **Interview Report History:** Access previously generated interview reports.
* **Resume PDF Generation:** Generate and download a resume tailored to a target role.

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

* Google Gemini
* Google Gen AI SDK
* Zod for structured response validation

## Project Structure

```text
Prepper/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js
│   │   ├── controllers/
│   │   │   ├── auth.controller.js
│   │   │   └── interview.controller.js
│   │   ├── middlewares/
│   │   │   ├── auth.middleware.js
│   │   │   └── file.middleware.js
│   │   ├── models/
│   │   │   ├── blacklist.model.js
│   │   │   ├── interviewreport.model.js
│   │   │   └── user.model.js
│   │   ├── routes/
│   │   │   ├── auth.routes.js
│   │   │   └── interview.routes.js
│   │   ├── services/
│   │   │   └── ai.service.js
│   │   └── app.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   │   ├── components/
│   │   │   │   ├── hooks/
│   │   │   │   ├── pages/
│   │   │   │   ├── services/
│   │   │   │   ├── auth.context.jsx
│   │   │   │   └── auth.form.scss
│   │   │   └── interview/
│   │   │       ├── hooks/
│   │   │       ├── pages/
│   │   │       ├── services/
│   │   │       ├── style/
│   │   │       └── interview.context.jsx
│   │   ├── style/
│   │   ├── App.jsx
│   │   ├── app.routes.jsx
│   │   └── main.jsx
│   └── package.json
│
├── .gitignore
└── README.md
```

## Getting Started

Follow these steps to run Prepper locally.

### Prerequisites

Make sure you have the following:

* [Node.js and npm](https://nodejs.org/)
* A MongoDB database, either local or hosted
* A Google Gemini API key

### 1. Clone the Repository

```bash
git clone https://github.com/Aditi1Sahu/Prepper.git
cd Prepper
```

### 2. Configure the Backend

Navigate to the backend directory and install the dependencies:

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_long_random_secret
GOOGLE_GENAI_API_KEY=your_gemini_api_key
```

Replace the placeholder values with your own credentials.

| Environment Variable   | Description                               |
| ---------------------- | ----------------------------------------- |
| `MONGO_URI`            | MongoDB connection string                 |
| `JWT_SECRET`           | Secret used to sign authentication tokens |
| `GOOGLE_GENAI_API_KEY` | API key for Google Gemini                 |

Start the backend server:

```bash
npm run dev
```

The backend runs on port `3000`.

### 3. Configure the Frontend

Open a **second terminal** in the project root directory.

Navigate to the frontend directory and install the dependencies:

```bash
cd frontend
npm install
```

Start the frontend development server:

```bash
npm run dev
```

Vite will display the local development URL in the terminal. By default, it is typically:

```text
http://localhost:5173
```

Open the displayed URL in your browser.

### 4. Use Prepper

1. Register a new account.
2. Log in to the application.
3. Upload your resume in PDF format.
4. Provide your self-description and target job description.
5. Generate and review your personalized interview report.
6. Access previously generated reports or generate a tailored resume PDF.

## How It Works

1. **User Input:** The user submits a resume PDF, self-description, and target job description through the frontend.
2. **Resume Processing:** The backend extracts text from the uploaded PDF.
3. **AI Analysis:** The extracted resume content and user-provided details are sent to Gemini for analysis.
4. **Report Generation:** Gemini generates a structured interview report containing a job match score, technical questions, behavioral questions, skill gap analysis, and a personalized preparation plan.
5. **Data Storage:** The generated report is stored in MongoDB and can be retrieved later.
6. **Resume Generation:** The user can generate a role-tailored resume PDF using information from a saved report.

## Security

* Keep API keys, database credentials, and JWT secrets private.
* Never commit your `.env` file to version control.
* Use your own credentials when running the application locally.
* Never expose private credentials in frontend code or public documentation.

## Author

**Aditi Sahu**

A full-stack project exploring React, Node.js, authentication, MongoDB, and generative AI.
