# Setup

### Backend

The backend is from : https://github.com/RochMoreau/secure-web-dev-backend

It should run on http://localhost:3000/

### Run the app
To run locally, run ```npm run dev```

Then go to : http://localhost:5173/

# Basic features

### One login page (containing a link to the register page)
The login page is available with a link to the register page at : http://localhost:5173/login

### One register page
The register page is available at : http://localhost:5173/register

### One “Location” page in which all locations are listed in a paginated array
To see the list of locations you must be logged in and access this page: http://localhost:5173/locations

A pagination system has been added but it does not update the data at the moment.

# User stories

### US1: As a random visitor, I want to be able to register an account or log-in, so I can access all features
The pages /login and /register are available only if you're not logged in, else you will be redirected to /locations.

### US2: As a random visitor, I want to be redirected to the login/register page when I click on “location" tab, so that I know I must log-in to see its content
When you login to the main page (http://localhost:5173/), you will be redirected to /login if you are not logged in or /locations if you are logged in.

The button to the /locations page is hidden if you are not logged in, and if you access the URL directly you will be redirected to the /login page

### US3: As a logged-in user, I want to see locations and be able to click on one location to open a modal containing details, so that the website is useful
You can click on the row in the table, or on the "Afficher" button on the right to see all the information about the location

### US4: As an "admin" user, I want to see an "Add Location" button in the location page, so that I can create a new location
If you are an "admin" user, the "Ajouter une location" button will be visible, otherwise it will be hidden

### US5: As an "admin" user, I want to see a button to edit locations in the array of locations, so that I can edit existing locations
If you are an "admin" user, the "Modifier" button will be visible in the information panel of a location, otherwise it will be hidden

### US6: As an "admin" user, I want to see a button to delete locations in the array of locations so that I can delete existing locations
If you are an "admin" user, the "Supprimer" button will be visible in the information panel of a location, otherwise it will be hidden
