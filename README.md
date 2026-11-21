# 🛡️ Proctify — Real-Time Proctoring Solution

Proctify is a real-time proctored examination platform designed to maintain the integrity and security of online examinations.

The solution combines an **admin website, student website, custom ElectronJS examination browser, real-time monitoring, and machine-learning-based cheating detection** to create a controlled examination environment.

Developed as a team project for the **Smart India Hackathon** problem statement:

> **Develop a Proctored Exam Tool for shortlisting the candidates for national and international level hackathons.**

---

## 🎯 Problem Statement

Online examinations make it difficult to maintain examination integrity when students can switch applications, use keyboard shortcuts, access unauthorized resources, or attempt to impersonate another candidate.

A conventional browser-based examination system has limited control over operating-system-level interactions.

Proctify addresses these challenges through a combination of:

- A dedicated student examination platform
- A custom-built desktop examination browser
- Real-time webcam and screen monitoring
- Face verification
- Computer-vision-based suspicious activity detection
- Audio monitoring
- Administrative examination management

---

# 💡 Solution Overview

The Proctify ecosystem consists of multiple components working together to provide a secure examination experience.

```text
                         PROCTIFY
                            │
          ┌─────────────────┼─────────────────┐
          │                 │                 │
          ▼                 ▼                 ▼
     Admin Website     Student Website    Electron Browser
          │                 │                 │
          │                 │                 │
          ▼                 ▼                 ▼
   Exam Management      Exam Access      Secure Environment
   Student Monitoring   Registration     Shortcut Blocking
   Question Management  Face Verification Application Control
   Results & Logs       Exam Results     Hardware Checks
          │                 │                 │
          └─────────────────┼─────────────────┘
                            │
                            ▼
                   Backend & Data Layer
                            │
                            ▼
                  AI / Computer Vision
                            │
                            ▼
                 Suspicious Activity Detection
```

---

# 🧩 System Components

## 1. Admin / Proctor Website

The administrative platform provides proctors with tools to create, manage, monitor, and review examinations.

### Features

- Create examinations
- Reschedule examinations
- Generate questions
- View questions
- Edit questions
- Delete questions
- View upcoming examinations
- View previous examinations
- Review examination logs
- View student details
- Monitor ongoing examinations
- Publish examination results
- View performance information
- Edit administrator profile

During an ongoing examination, administrators can view candidate webcam and screen feeds to help identify suspicious behavior.

---

## 2. Student Website

The student-facing platform manages the participant's examination workflow.

### Features

- Student registration
- Face verification
- Browse available examinations
- Register for examinations
- Access registered examinations
- Start examinations
- Face verification before examinations
- View examination results
- Report problems
- Edit profile
- Password reset

### Student Workflow

```text
Student Registration
        ↓
Face Verification
        ↓
Browse Examinations
        ↓
Register for Examination
        ↓
Face Verification
        ↓
Start Examination
        ↓
Attempt Questions
        ↓
Submit Examination
        ↓
View Results
```

---

# 🖥️ 3. Custom ElectronJS Examination Browser

A key component of Proctify is the **self-created desktop examination browser built using ElectronJS**.

Instead of allowing students to take examinations in a conventional browser, the system provides a controlled environment specifically designed for examinations.

### Secure Browser Features

- Blocks keyboard combinations such as `Ctrl+C`
- Blocks `Alt+Tab`
- Blocks `Win+D`
- Restricts unwanted application usage
- Detects HDMI ports
- Provides a controlled examination environment
- Prevents students from using unauthorized software during examinations

```text
                 Student
                    │
                    ▼
            Proctify Browser
                    │
        ┌───────────┼───────────┐
        ▼           ▼           ▼
    Keyboard      System      Hardware
    Controls      Controls      Checks
        │           │           │
        └───────────┼───────────┘
                    ▼
          Controlled Examination
                Environment
```

The custom browser addresses a limitation of conventional web-based examinations: websites cannot provide the same level of control over operating-system-level interactions.

---

# 🔐 Secure Examination Environment

The custom browser forms the controlled student-side environment of the platform.

```text
Traditional Browser
        │
        ▼
General-Purpose Environment
        │
        ├── Application Switching
        ├── Keyboard Shortcuts
        ├── External Applications
        └── Other System Interactions


                 VS.


Proctify Browser
        │
        ▼
Controlled Examination Environment
        │
        ├── Shortcut Restrictions
        ├── Application Restrictions
        ├── Hardware Checks
        └── Exam-Focused Interface
```

---

# 📹 4. Real-Time Proctoring

Proctify supports real-time monitoring of candidates during examinations.

Administrators can access:

- Candidate webcam feeds
- Candidate screen feeds
- Examination activity
- Examination logs
- Student information
- Suspicious activity indicators

```text
Student
   │
   ├──────────► Webcam Feed
   │
   ├──────────► Screen Feed
   │
   └──────────► Audio
                  │
                  ▼
             Proctoring System
                  │
          ┌───────┴───────┐
          ▼               ▼
     Live Monitoring   AI Analysis
          │               │
          └───────┬───────┘
                  ▼
          Suspicious Activity
             Detection
```

---

# 🤖 5. Machine Learning & Computer Vision

The solution incorporates machine-learning-based monitoring to reduce the manual effort required to supervise candidates.

The system includes capabilities for detecting:

- Face recognition
- Eye tracking
- Mobile phone usage
- Suspicious behavior
- Low-light conditions
- Multiple persons in the frame
- Unauthorized materials
- Books

The system also processes student audio for human-voice detection.

```text
                 Candidate
                     │
        ┌────────────┼────────────┐
        ▼            ▼            ▼
      Video        Audio        Screen
        │            │            │
        ▼            ▼            ▼
   CV / ML Model  Voice Model  Monitoring
        │            │            │
        └────────────┼────────────┘
                     ▼
             Suspicious Activity
                 Detection
```

---

# 🔎 6. Cheating Detection

The machine-learning component is designed to identify behaviors that may indicate examination violations.

Examples include:

- Looking away from the examination environment
- Mobile phone usage
- Multiple people appearing in the camera frame
- Suspicious objects or materials
- Books or unauthorized resources
- Voice activity
- Low-light conditions

These signals can assist the proctor during examination monitoring and reduce the need for entirely manual supervision.

---

# 👤 7. Face Verification

Face verification is incorporated into important stages of the student workflow.

It is used during:

1. Student registration
2. Examination registration/access
3. Examination start

This helps reduce the possibility of impersonation.

```text
Student
   ↓
Registration
   ↓
Face Verification
   ↓
Exam Registration
   ↓
Exam Start
   ↓
Face Verification
   ↓
Examination
```

---

# 📝 8. Examination Management

Administrators can create and manage examinations through the platform.

## Create Examination

Administrators can specify examination information such as:

- Examination name
- Date
- Time
- Duration
- Other examination parameters

## Question Management

Questions can be:

- Created
- Viewed
- Edited
- Deleted

The platform supports different question formats, including image-based and standard questions.

---

# 📊 9. Examination History & Results

The platform maintains information about previous examinations for auditing and analysis.

Administrators can review:

- Previous examinations
- Student performance
- Examination logs
- Suspicious activity information
- Results

Students can access their examination results through the student platform.

---

# 🧑‍💼 Complete Proctor Workflow

```text
Admin Login
     ↓
Create Examination
     ↓
Generate Questions
     ↓
Publish Examination
     ↓
Students Register
     ↓
Face Verification
     ↓
Students Take Examination
     ↓
Live Webcam / Screen / Audio
     ↓
AI-Assisted Monitoring
     ↓
Examination Completed
     ↓
Review Logs & Performance
     ↓
Publish Results
```

---

# 🏗️ System Architecture

```text
                         ┌─────────────────────┐
                         │    Admin Website    │
                         │                     │
                         │ Exam Management     │
                         │ Monitoring          │
                         │ Results             │
                         └──────────┬──────────┘
                                    │
                                    │
                                    ▼
┌─────────────────────┐    ┌─────────────────────┐
│ Student Website     │───►│      Backend        │
│                     │    │                     │
│ Registration        │    │ Node.js / Express   │
│ Face Verification   │    │ WebRTC              │
│ Exams               │    │ APIs                │
│ Results             │    │                     │
└──────────┬──────────┘    └──────────┬──────────┘
           │                          │
           │                          ▼
           │                 ┌─────────────────┐
           │                 │   PostgreSQL    │
           │                 └─────────────────┘
           │
           ▼
┌─────────────────────┐
│ Electron Browser    │
│                     │
│ Secure Exam Mode    │
│ Shortcut Blocking   │
│ Application Control │
│ Hardware Checks     │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ AI / Computer       │
│ Vision Pipeline     │
│                     │
│ Face Detection      │
│ Eye Tracking        │
│ Mobile Detection    │
│ Multiple Faces      │
│ Behavior Detection  │
└─────────────────────┘
```

---

# 🔄 End-to-End Examination Flow

```text
                         Student
                            │
                            ▼
                    Student Website
                            │
                            ▼
                     Face Verification
                            │
                            ▼
                    Exam Registration
                            │
                            ▼
                   Proctify Browser
                            │
                 ┌──────────┴──────────┐
                 ▼                     ▼
          Secure Browser          Exam Platform
                 │                     │
                 └──────────┬──────────┘
                            ▼
                       Give Exam
                            │
               ┌────────────┼────────────┐
               ▼            ▼            ▼
            Webcam        Screen       Audio
               │            │            │
               └────────────┼────────────┘
                            ▼
                       AI Analysis
                            │
                            ▼
                  Suspicious Activity
                       Detection
                            │
                            ▼
                    Proctor Monitoring
                            │
                            ▼
                      Exam Results
```

---

# 🛠️ Technology Stack

## Frontend

- ReactJS

## Desktop Application

- ElectronJS

## Backend

- Node.js
- Express.js
- WebRTC

## Database

- PostgreSQL

## Computer Vision & Machine Learning

- YOLO
- Facial Recognition
- Eye Tracking
- Object Detection
- Multiple-Face Detection
- Audio / Voice Detection

## AWS

- AWS EC2
- AWS S3
- AWS Rekognition
- AWS RDS

---

# 📁 Repository Structure

```text
Proctor/
│
├── Backend/
│   └── Backend services and APIs
│
├── Frontend/
│   └── user-website/
│       └── Student-facing web application
│
├── Browser/
│   └── Electron-based examination browser
│
├── .gitignore
├── package-lock.json
└── README.md
```

---

# 👨‍💻 My Contribution

I contributed to Proctify across three core areas: **Backend API development**, the **custom ElectronJS examination browser**, and **AWS cloud infrastructure**.

### Key Contributions

#### Backend & API Development
- Built and maintained backend services and REST APIs using **Node.js**, **Express.js**, and **PostgreSQL**
- Implemented API endpoints supporting examination management, question handling, student registration, examination workflows, logs, and results
- Contributed to real-time proctoring data flow and **WebRTC** integration between the student, browser, and admin platforms

#### Custom ElectronJS Examination Browser
- Developed the custom desktop examination browser using **ElectronJS** to create a controlled examination environment
- Implemented OS-level restrictions to block keyboard shortcuts (`Ctrl+C`, `Alt+Tab`, `Win+D`) and prevent unauthorized application usage
- Added hardware-level checks, including HDMI port detection
- Integrated the custom browser with the student examination workflow

#### AWS Cloud Infrastructure & Services
- Set up and managed cloud infrastructure using **AWS EC2** for hosting and **AWS RDS** for the PostgreSQL database
- Configured **AWS S3** for storing examination assets and proctoring media
- Integrated **AWS Rekognition** to support face verification and monitoring workflows

---

# 🏆 Smart India Hackathon

Proctify was developed for the Smart India Hackathon problem statement:

> **Develop a Proctored Exam Tool for shortlisting the candidates for national and international level hackathons.**

### Team

**The Googlers**

### Role

**Team Leader — Kandarp Shah**

### Institution

**G. H. Patel College of Engineering and Technology**

### Theme

**Smart Automation**

---

# 🧑‍🤝‍🧑 Team

The project was developed as a team-based Smart India Hackathon solution.

The submitted project documentation identifies **Kandarp Shah as the Team Leader** and lists the team members from G. H. Patel College of Engineering and Technology.

---

# 💭 Why a Custom Browser?

A conventional web application cannot fully control operating-system-level interactions such as:

```text
Ctrl+C / Ctrl+V
Alt+Tab
Windows Shortcuts
External Applications
Hardware Interfaces
Screen-Sharing Utilities
```

The custom Electron browser was therefore developed to provide a more controlled examination environment.

```text
Conventional Web Application
             │
             ▼
     Limited OS Control
             │
             ▼
   Browser-Based Examination


                ↓


       Custom Electron Browser
                │
                ▼
       Controlled Environment
                │
       ┌────────┼────────┐
       ▼        ▼        ▼
    Keyboard  Apps    Hardware
    Controls  Control   Checks
```

---

# 📉 Reducing Manual Proctoring Effort

Monitoring every candidate's webcam and screen manually becomes increasingly difficult as the number of candidates increases.

Proctify combines live monitoring with automated analysis to assist the proctor.

```text
              Multiple Candidates
                       │
                       ▼
              Live Video / Audio
                       │
                       ▼
                   AI Analysis
                       │
            ┌──────────┴──────────┐
            ▼                     ▼
      Normal Activity      Suspicious Activity
            │                     │
            │                     ▼
            │               Proctor Attention
            │                     │
            └──────────────┬──────┘
                           ▼
                   Examination Review
```

---

# 🌐 Integrated Platform

Proctify is more than a browser-locking mechanism.

It combines several layers into one examination ecosystem:

```text
┌──────────────────────────────────────────┐
│             Student Experience           │
│                                          │
│        Student Website + Browser         │
└────────────────────┬─────────────────────┘
                     │
┌────────────────────▼─────────────────────┐
│            Examination Layer             │
│                                          │
│ Registration • Questions • Exams         │
│ Results • Examination Logs               │
└────────────────────┬─────────────────────┘
                     │
┌────────────────────▼─────────────────────┐
│             Proctoring Layer             │
│                                          │
│ Webcam • Screen • Audio • Monitoring     │
└────────────────────┬─────────────────────┘
                     │
┌────────────────────▼─────────────────────┐
│             AI / CV Layer                │
│                                          │
│ Face • Eyes • Objects • Behavior         │
└──────────────────────────────────────────┘
```

---

# ⭐ Project Highlights

- 🛡️ Custom ElectronJS examination browser
- 🖥️ Controlled desktop examination environment
- 🔐 Keyboard and application restrictions
- 👤 Face verification
- 📹 Real-time webcam monitoring
- 🖥️ Screen monitoring
- 🎙️ Audio monitoring
- 🤖 AI-assisted cheating detection
- 👁️ Eye and behavior monitoring
- 📱 Mobile phone detection
- 👥 Multiple-person detection
- 📚 Unauthorized material detection
- 📝 Complete examination management
- 📊 Examination history and results
- ☁️ AWS-backed infrastructure
- 🏆 Smart India Hackathon project
- 👨‍💻 Team leadership experience

---

# 📚 Project Documentation

The project documentation describes the complete Proctify solution, including the admin website, student website, self-created browser, secure examination environment, and machine-learning-based cheating detection.

The documentation specifically describes the Electron-based browser as a mechanism for creating a controlled examination environment by restricting keyboard/system interactions and unauthorized applications.

---

# 🔮 Future Scope

Potential improvements include:

- More advanced behavioral analysis
- Improved real-time anomaly detection
- More comprehensive browser security controls
- Better automated proctor alerts
- Improved examination analytics
- More robust candidate identity verification
- Scalable multi-candidate monitoring
- Enhanced AI-assisted examination review

---

# ⚠️ Project Status

This repository represents an academic and hackathon project containing the prototype components of the Proctify examination system.

The project demonstrates an approach to combining **desktop application security, real-time communication, cloud infrastructure, computer vision, and AI-assisted monitoring** for online examinations.

---

# 📚 Documentation

Additional project documentation is available in the [`docs/`](docs/) directory.

- [Proctify Project Documentation](docs/Proctify-Project-Documentation.pdf)
- [Smart India Hackathon Submission](docs/Smart-India-Hackathon-Submission.pdf)

# 👨‍💻 Author

## Kandarp Shah

**Team Leader — Proctify**

**B.E. Computer Engineering**  
G. H. Patel College of Engineering & Technology

---

# ⭐ Key Takeaway

Proctify brings together **software engineering, desktop application development, real-time communication, cloud infrastructure, computer vision, and AI-assisted monitoring** to create a controlled environment for online examinations.

The custom ElectronJS browser is a central part of the solution, providing the controlled student-side environment that complements the web-based examination and real-time proctoring components.
