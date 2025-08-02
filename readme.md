# ADVANCED ONLINE QUIZ CALLED QUIZVERSE

Advanced Online Quiz is a modern, accessible web app for testing and sharpening your general knowledge. Designed for students, lifelong learners, and anyone who loves a challenge, it features a responsive, mobile-friendly interface and a fun, interactive quiz experience. The site is a single-page application that works on all devices and is easy to use for everyone, including keyboard and screen reader users.

The primary audience includes students, quiz enthusiasts, and anyone looking to learn or test their general knowledge in a friendly, accessible environment.

<!-- TODO: Replace these with your own screenshots -->
![Mock-ups Across Devices](assets/screenshots/mockups-across-devices.png)
![Quiz In Progress](assets/screenshots/quiz-in-progress.png)

[View deployed Website "Advanced Online Quiz"](https://YOUR-DEPLOYED-LINK-HERE)

# Contents
1. [User Experience (UX)](#1-user-experience-ux)
    - [User Stories](#user-stories)
        - [Quiz Takers](#quiz-takers)
        - [Site Owner](#site-owner)
2. [Features](#2-features)
    - [Current Features](#current-features)
    - [Future Features](#features-which-could-be-implemented-in-the-future)
3. [Design](#3-design)
4. [Technologies Used](#4-technologies-used)
5. [Testing](#5-testing)
6. [Deployment and Local Development](#6-deployment-and-local-development)
7. [Credits](#7-credits)

---

# 1. User Experience (UX)

## User Stories

### Site Users
As a quiz taker:
- I want to easily start a quiz and enter my name, so I feel personally engaged.
- I want to take high-quality general knowledge quizzes that cover a wide range of topics like TV, history, geography, science, etc, so that I can
test and improve my trivia skills and get ready for pub quizzes or quiz show.
- I want to see instant feedback after each question, so I know if I was correct.
- I want a timer for each question, so the quiz feels challenging and fun.
- I want to see my score at the end, so I can measure my performance.
- If I get a perfect score, I want a special congratulations message and effect.
- I want to be able to restart the quiz and try again.
- I want the quiz to be accessible and usable on any device.

### Site Owner
As the site owner:
- I want the quiz to be easy to use and visually appealing, so users enjoy the experience.
- I want the site to be accessible to all users, including those using assistive technology.
- I want to retain users 
- I want to store the user's last score for future visits.
- I want to provide good quality questions.
- I want user to have fun as tehy quiz 
- I want users to learn as they go
- I want 

---

# 2. Features
## Current Features
- **Responsive Design:** Works on all screen sizes and devices.
- **Accessible UI:** Keyboard navigable, screen reader friendly, visible focus indicators.
- **Welcome Screen:** Users enter their name to start the quiz.
- **Timed Questions:** Each question has a countdown timer.
- **Instant Feedback:** Users see if their answer was correct or not.
- **Progress Tracking:** Shows current question out of total.
- **Animated Congratulations:** Special effect for perfect scores.
- **Restart Option:** Users can retake the quiz.
- **Skip Link:** For quick keyboard navigation.
Encouragemnt messages 

### Screenshots
| Welcome Screen | Quiz In Progress 1 | Quiz In Progress 2 | Result Screen 1 | Result Screen 2|
|:-------------:|:---------------:|:-------------:|:-------------:|
| ![Welcome](assets/images/mockup-homepage.png) | ![Quiz](assets/images/mockup-page-2.png) | ![Quiz Progress 1](assets/images/mockup-3.png) | ![Quiz progress 2](assets/images/mockup-congrates-1.png) | ![Congrats](assets/images/mockup-congrates-2.png) |

### Features which could be implemented in the future
- More question categories and difficulty levels
- Offer engaging quizzes that encourage repeat visits.
- High score leaderboard
- User authentication for saving progress
- Enhanced accessibility features e.g., color & themes.
- Audio feedback and sound effects
- Ensure accuracy and clarity of questions and answers.
- Regularly update quizzes to keep them fresh and relevant.
- Monitor how many quizzes are taken, scores, and retention.
- Track which topics are most popular or need improvement.
- Encourage users to share and recommend the platform.




---

# 3. Design
## Structure
The app is a single-page application with three main views: Welcome, Quiz, and Results. All views are accessible and responsive.

## Wireframes
- [Welcome Screen Wireframe](assets/images/wireframe-home-page.png)
- [Quiz Screen Wireframe](assets/images/wireframe-page-2.png)
- [Quiz Progress 1 Screen Wireframe](assets/images/wireframe-page-3.png)
- [Quiz Progress 2 Screen Wireframe](assets/images/wireframe-progress-result.png)
- [Result Screen Wireframe](assets/images/wireframe-results-page.png)


## Colour Scheme
![Colour Palette](assets/images/colour-primary.png)
![Colour Palette](assets/images/colour-secondary.png)

The color palette was chosen for high contrast and readability, ensuring accessibility for all users.

## Typography
- Uses system fonts for fast loading and readability.
- Large, clear headings and buttons for easy navigation.
- Primary Font: 'Lato', sans-serif
- Headings Font: 'Playfair Display', serif (h1, h2, h3, h4, h5, h6, p)
- Button/Choice Font: 'Roboto', sans-serif

## Imagery
<!-- TODO: Add your own screenshots and update alt text -->
All images and icons are designed to be clear and accessible. Replace placeholder images with your own screenshots.
![Images] 

---

# 4. Technologies Used
- HTML5
- CSS3
- JavaScript
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [Git](https://git-scm.com/)
- [GitHub](https://github.com/)
- [coolors](https://coolors.co/)
- [W3schools](https://www.w3schools.com/)
- [Canva](https://www.canva.com/en_gb/)
- [Figma](https://www.figma.com/)
- [GoogleFonts](https://fonts.google.com/)
---

# 5. Testing

This project was tested for:
- Functionality and usability on Chrome, Firefox, Safari, and Edge
- Accessibility using keyboard navigation and screen readers
- Responsiveness on mobile, tablet, and desktop
- HTML and CSS validation using W3C tools

## HTML Validation
All HTML validation issues have been resolved:
- ✅ Removed trailing slashes from void elements (`<meta>`, `<link>`, `<input>`, `<img>`, `<line>`)
- ✅ Removed unnecessary `role="region"` from `<section>` elements
- ✅ Fixed invalid `role="group"` on form elements
- ✅ Added content to empty heading elements
- ✅ Removed potentially misused `aria-label` attributes

| Test | Screenshot |
|------|------------|
| HTML Validation | ![HTML Errors](assets/screenshots//html-validation-errors.png) |
| HTML Validation | ![HTML Erros fixed](assets/screenshots/html-validation-complete.png) |

## CSS Validation
- ✅ All CSS validation passed without errors:


| Test | Screenshot |
|------|------------|
| CSS Validation | ![CSS Valid](assets/screenshots/css-valid.png) |

---

# 6. Deployment and Local Development

## Deployment
The site is deployed on GitHub Pages.

[View deployed site](https://YOUR-DEPLOYED-LINK-HERE)

## Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/Alumsdesigns/quiz-project.git
   cd quiz-project
   ```
2. Open `index.html` in your browser. No build step required.

---

# 7. Credits

## Code
- Custom code by Damaris Alum.

## Content
- All quiz questions and content written by Damaris Alum.

## Media
<!-- TODO: Replace with your own image sources if needed -->
- All screenshots and images are original or sourced from free resources.
- Quiz hero image by Kohji Asakawa from Pixabay.  
  [Pixabay profile](https://pixabay.com/users/kohjiasakawa-1203821/)  
  [Original image link](https://pixabay.com/illustrations/question-mark-question-symbol-2492009/)

## Acknowledgements
- Thanks to MDN, W3Schools, and WebAIM for accessibility guidance.

---

# 8. Best Practices

## 🎯 Development Standards

### Accessibility
- **ARIA Compliance**: All interactive elements include proper ARIA attributes
- **Screen Reader Support**: Error messages and progress updates are announced
- **Keyboard Navigation**: Full keyboard accessibility with visible focus indicators
- **Semantic HTML**: Proper use of roles, labels, and semantic elements

### Security
- **Input Validation**: Comprehensive client-side validation with security patterns
- **XSS Prevention**: HTML entity encoding and tag removal
- **SQL Injection Protection**: Pattern detection for malicious input
- **Input Sanitization**: All user input is sanitized before processing

### User Experience
- **Real-time Feedback**: Immediate validation without page reloads
- **Progressive Enhancement**: Works without JavaScript, enhanced with it
- **Responsive Design**: Mobile-first approach with desktop enhancements
- **Performance**: Optimized animations and efficient DOM manipulation

### Code Architecture
- **Modular Design**: Separated concerns with reusable functions
- **Configuration-Driven**: Easy to modify validation rules and messages
- **Error Handling**: Comprehensive error catching and user feedback
- **Maintainable Code**: Clear structure with consistent patterns

### Browser Compatibility
- **Cross-Browser Support**: Tested on Chrome, Firefox, Safari, Edge
- **Mobile Responsive**: Optimized for all screen sizes
- **Progressive Web App Ready**: Can be easily converted to PWA

## 🔧 Technical Implementation

### Validation System
- **Configuration object** for easy maintenance
- **Modular validation functions** for testability
- **Real-time feedback** with smooth animations
- **Security-first approach** with comprehensive threat prevention

### Responsive Design
- **Desktop-first** with mobile optimizations
- **Flexible layouts** that adapt to screen size
- **Touch-friendly** interface elements
- **Performance optimized** for mobile devices

### Accessibility Features
- **Focus management** for keyboard users
- **Screen reader announcements** for dynamic content
- **High contrast** error messages
- **Semantic structure** for assistive technology

This approach ensures the quiz is **secure**, **accessible**, **user-friendly**, and **maintainable** - following industry best practices for modern web development! 🚀