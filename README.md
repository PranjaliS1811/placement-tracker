# 🎯 PlacePilot – Placement Preparation & Tracking Platform

**PlacePilot** is a React-based web application designed to help students manage and organize their placement preparation in one place. It provides a centralized dashboard to track Data Structures and Algorithms (DSA) practice, set daily study goals, manage job applications, and prepare for technical interviews.

The platform aims to make placement preparation more structured by allowing students to monitor their progress and maintain their preparation activities through a simple, interactive interface.

## ✨ Features

### 📊 1. Interactive Dashboard

* Displays the total number of tracked DSA questions.
* Shows the number of solved questions and overall DSA progress.
* Displays the total number of tracked job applications.
* Shows the number of shortlisted applications.
* Provides a visual progress indicator.
* Displays company-specific preparation focus areas for TCS, Infosys, Accenture, and Cognizant.

###  2. DSA Practice Tracker

* Add custom coding questions.
* Categorize questions by topic, including Arrays, Strings, Linked Lists, Stack, Searching, and Dynamic Programming.
* Assign difficulty levels: Easy, Medium, and Hard.
* Mark questions as solved or pending.
* Automatically calculate the percentage of completed questions.
* View updated DSA progress on the dashboard.

### 3. Daily Goals

* Set daily targets for DSA practice.
* Set aptitude practice targets.
* Define daily study time in minutes.
* Mark daily goals as completed.
* View the number of completed goals.

###  4. Aptitude Preparation

* Organizes preparation into three categories:

  * Quantitative Aptitude
  * Logical Reasoning
  * Verbal Ability
* Allows students to set and update daily practice targets for each category.

### 📝 5. Job Application Tracker

* Add company names and job roles.
* Maintain a list of job applications.
* Update application statuses using a dropdown menu.
* Track applications through the following stages:

  * Applied
  * Shortlisted
  * Interview
  * Selected
  * Rejected
* View recent applications on the dashboard.

###  6. Interview Preparation

Provides topic-wise preparation guidance for:

* **Java and OOP:** Inheritance, polymorphism, abstraction, interfaces, and exception handling.
* **DBMS and SQL:** Joins, normalization, keys, subqueries, and aggregate functions.
* **Web Development:** React, JavaScript, REST APIs, HTTP methods, and frontend fundamentals.
* **HR and Situational Questions:** Self-introduction, teamwork, project explanations, and problem-solving scenarios.

###  7. Local Data Persistence

* Uses browser `localStorage` to save DSA questions, job applications, study goals, and goal completion status.
* Retains saved data when the page is refreshed in the same browser.
* Does not require a backend server or database for the current implementation.

## 🛠️ Technologies Used

| Technology           | Purpose                                                            |
| -------------------- | ------------------------------------------------------------------ |
| React.js             | Building reusable UI components                                    |
| JavaScript (ES6+)    | Application logic and interactivity                                |
| HTML5                | Web application structure                                          |
| CSS3                 | Styling and responsive layouts                                     |
| Vite                 | Development server and build tool                                  |
| React Hooks          | State management and side effects using `useState` and `useEffect` |
| Browser localStorage | Persisting application data locally                                |
| Git and GitHub       | Version control and project hosting                                |

## ⚙️ Installation and Setup

### Prerequisites

* Node.js and npm installed on your computer.
* Git installed on your computer.

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual GitHub repository URL.

### 2. Navigate to the Project Directory

```bash
cd placement-platform
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Open the Application

Open the local URL displayed in your terminal. With the default Vite configuration, it is usually:

```text
http://localhost:5173/
```

## 📁 Project Structure

```text
placement-platform/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

*Note: Your actual folder structure may vary depending on your Vite project configuration.*

##  Key React Concepts Used

* **Functional Components:** Organize the application into reusable UI components.
* **useState:** Manage application data and interactive interface state.
* **useEffect:** Synchronize application state with browser local storage.
* **Props:** Pass application data and callback functions to components such as `StatCard` and `ApplicationsTable`.
* **Event Handling:** Handle form submissions, checkboxes, dropdown changes, and navigation.
* **Array Methods:** Use `map()` and `filter()` to render lists and calculate progress.
* **Conditional Rendering:** Display different pages and application states based on user interactions.

## 🎯 Project Objectives

* Provide students with a centralized placement preparation workspace.
* Encourage consistent DSA and aptitude practice.
* Simplify the process of tracking job applications.
* Help students organize technical and HR interview preparation.
* Demonstrate practical frontend development and React programming skills.

## 🚀 Future Enhancements

The following features can be added in future versions:

* User registration, login, and authentication.
* Backend APIs using Java and Spring Boot.
* Database integration using MySQL or MongoDB.
* Cloud-based storage and synchronization across devices.
* A dedicated aptitude question bank with practice sessions and scores.
* Company-wise coding questions and preparation roadmaps.
* Interview scheduling and application deadline reminders.
* More detailed preparation statistics and progress reports.

## Current Project Status

PlacePilot currently implements the frontend using React, JavaScript, and CSS. It uses browser local storage to persist supported application data.





