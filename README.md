# ReactJS BMI Calculator

Welcome to the ReactJS BMI Calculator! This project showcases the implementation of core React concepts to create a Body Mass Index (BMI) calculator. The BMI calculator allows users to input their height and weight to calculate their BMI.

## Introduction
This ReactJS BMI Calculator enables users to determine their BMI based on their height and weight. It uses React hooks such as `useState` and `useMemo` to manage state and compute the BMI efficiently.

## Features
- Input weight and height using sliders
- Real-time BMI calculation
- Simple and intuitive user interface

## Setup Instructions
To get started with this project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/react-bmi-calculator.git
   cd react-bmi-calculator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the app:**
   ```bash
   npm start
   ```

## Core Concepts
This project covers several core concepts of React, including:

- **State Management:** Using the `useState` hook to manage the state of height and weight inputs.
- **Memoization:** Using the `useMemo` hook to optimize the BMI calculation.
- **Component Structure:** Organizing the application into reusable and maintainable components.
- **Styling:** Custom styles for a clean and user-friendly interface.

## Code Explanation

### App.js

The main component of the application, `App.js`, is responsible for rendering the BMI calculator and handling user interactions.

#### App Component
The `App` component manages the state of the height and weight inputs and calculates the BMI.

- **State Management**
  Using `useState` to manage the height and weight states.

- **Event Handlers**
  Functions to handle changes in weight and height inputs.

- **BMI Calculation**
  Using `useMemo` to memoize the BMI calculation for performance optimization.

- **Rendering the Component**
  Returning the JSX that represents the BMI calculator UI.