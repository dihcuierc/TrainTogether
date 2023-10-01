<h1 align="center">Train Together</h1>

<h2 align = "center"> Table Of Contents </h2>

- [Background](#Background)
- [Functionalities](#Functionalities)
- [Extras](#Extras)

<h2 id = "Background">Background</h2>

TrainTogether: The app is a web-based application that allows users to customise an exercise plan to their needs. It is the ultimate fitness corner companion designed to help users achieve their fitness goals. Users can also create an account and log in to the app to interact with various features and functionalities. Users can use TrainTogether to find the nearest fitness corner and access a wide range of pre-designed workout programs that are tailored to users’ fitness level, goals and the facilities at the fitness corner. At the same time, users can also use this web application to find restaurants that suit their fitness goals.

The app is built using React, a JavaScript library for creating user interfaces.

This project is a module taken in NTU: `SC2006 Software Engineering.`

<h2 id = "Functionalities">Functionalities</h2>

### `Register a user`

Our register page requires our users to enter their username, name, email address, password and confirm password, DOB, phone number, height, weight, gender and a profile picture.

- Username must be at least 6 characters long.
- Password must contain at least 8 characters, consisting of one number, one uppercase, one lowercase and one number and a special character.
- DOB must be in DD/MM/YYYY format.
- Height must be in cm and Weight must be in kgs.

### `Login`

The login page requires users to input their email address and password. TrainTogether will check if the email address and password provided is accurate, and direct the user to our main landing page, which is the dashboard.

Users who do not have an account can click the Sign Up to be directed to the Register Page. Users who selected Forgot Password will be directed to the Forgot Password page.

### `Retrieve Password`

Users are able to input their email address so that a link will be sent to the user's email to prompt a change of password.

### `Dashboard Display`

The Dashboard Page displays:

- Calories burnt by the user for the day.
- Bar chart showing the calories burnt throughout the month.
- Body Mass Index (BMI) Calculator.
  - Users can input their height and weight to calculate their BMI.
- Fitness Goal Dashboard.
  - Users will be directed to the Fitness Goals page upon clicking the "+" icon.

### `Add Fitness Goals`

Fitness Goal item includes:

- Goal name
- Target Valule
- Current value
- Deadline for the goal

Once the user has entered the required details, the user can click Submit.

### `Schedule Exercise`

Users can add, edit or delete a scheduled exercise plan.

Each scheduled exercise plan consist of a name, location and a date and time. The three dots provide users the option to edit or delete the scheduled exercise plan.

Users will be reminded of their scheduled exercise 1 hour in advance.

### `Exercise Plan`

Users can create their own customised set of exercise plans. To An exercise plan includes:

- Name of the exercise plan
- A list of exercises each consisting of:
  - Number of reps
  - Number of sets
  - Rest time

Total calories burnt will be calculated based on the exercise plan.

### `Exercise`

Users are able to view the list of exercises available. Exercises include:

- Arms
- Back
- Cardio
- Core
- Legs

There are instructions and remarks for each of the exercises.
Each exericse has an average rating out of 5 stars and users are able to view the reviews.

### `Review Exercise`

Users are able view the reviews of the exercise and are also able to add, edit or delete their own review of an exercise.

### `Exercise Facilities`

Google Map API is fetched together with Data.Gov.sg Api for the details of the fitness park available in Singapore. Users can make use of the search bar in the Google Map to search for the nearest fitness corner.
Park details include:

- Address
- Postal code
- Opening hours
- Website of the park

### `Food Facilities`

'Hungry Go Where' page consists of a Google Map API and the details of various food facility. Users can make use of the search bar in the Google Map to search for the nearest healthy food facility.

- Users are able to filter the food facilities based on:
  - Health Category
  - Food Type
  - Dining Guidelines
  - Venue
  - Region
- Food facility details include:

  - Location address
  - Category of food
  - Type (Halal/Non-halal)
  - Mode (Cafe etc)

### `Settings`

Users are able to access the settings page which gives allows them to:

- Rename their username, update mobile number and email address.
- Change their password.
- Delete account.
- Edit notifications settings.

<h2 id = "Extras">Extras</h2>

More details can be found in the `Software Requirement Specification.pdf` file.

- Purpose, Intended Audience, Product Scope
- Assumptions and Dependencies
- User Interface
- Functional & Non-Functional Requirements
- Data Dictionary
- Appendix
  - Use-Case Diagram
  - Use-Case Description
  - Class Diagram
  - Dialog Map
  - System Architecture
  - Sequence Diagram
  - Unit Testing
    - Black Box Testing
    - White Box Testing

Google Drive: https://drive.google.com/drive/folders/1me8wf4neM3R423cxSGECxchb918PBpNq?usp=sharing
