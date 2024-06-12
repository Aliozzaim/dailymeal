# DailyMeal

## Description

DailyMeal is a web application built with Vue.js, Vuex, and Vuetify that allows users to explore and discover various meals. Users can search for meals by different criteria such as name, ingredient, and the first letter of the meal. The application also includes user authentication, allowing registered users to share their own meals and cooking methods. The project leverages HTML, CSS, and JavaScript, and includes a responsive design with a focus on user experience.

## Features

- **Random Meal Fetching**: Display a list of random meals on the home page.
- **Meal Search**: Search for meals by name, ingredient, or the first letter of the meal.
- **Meal Details**: View detailed information about a selected meal, including ingredients, measures, and instructions.
- **YouTube Integration**: Watch related YouTube videos for meals.
- **User Authentication**: Register and log in to share your own meals and recipes.
- **Responsive Design**: A modern and responsive UI built with Vuetify and Tailwind CSS.
- **Loading Spinner**: Displays a loading spinner while fetching data.

## Technologies

- **Vue.js**: JavaScript framework for building user interfaces.
- **Vuex**: State management library for Vue.js applications.
- **Vuetify**: Material Design component framework for Vue.js.
- **Axios**: Promise-based HTTP client for making API requests.
- **Tailwind CSS**: Utility-first CSS framework for custom designs.
- **JavaScript**: Core programming language for the application logic.
- **HTML**: Markup language for structuring the web pages.
- **CSS**: Style sheet language for designing the web pages.

## Usage
- **Home Page**: Displays a list of random meals. Click "Refresh Meals" to fetch a new set of random meals.
- **Meal Search**: Navigate to search pages to find meals by name, ingredient, or letter.
- **Meal Details**: Click on a meal to view its detailed information, including ingredients, measures, and cooking instructions.
- **User Authentication**: Register or log in to share your own meals and recipes.

## Components
- **Home.vue**: Fetches and displays random meals.
- **MealDetails.vue**: Displays detailed information about a selected meal.
- **Ingredients.vue**: Displays meals containing a specific ingredient.
- **MealsByLetter.vue**: Allows users to search for meals by the first letter.
- **MealsByName.vue**: Provides a search bar to find meals by name.
- **Auth.vue**: Handles user registration and login.

## State Management
The application uses Vuex for state management, with actions, getters, mutations, and state organized in the store directory. The state includes meal data, search results, user authentication status, and more.

## API Integration
The application uses Axios to fetch data from the MealDB API. The `axiosClient.js` file is configured to handle API requests.

## Installation
1. Clone this repository.
2. Navigate to the project directory.


## Installation

1. **Install dependencies**:
   ```sh
   npm install

   npm run dev
   
   npm run build



