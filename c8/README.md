### DESCRIPTION

Create the back end side of an application that allows users to store information about their favorite movies,
both in MongoDB (its description) and as a pdf file (its summary). Everything should follow and have the multitenancy
software arhitecture, and users should log in using their username and password (that will be encrypted)

Each movie should have the following model schema:

Movie {
    title - required
    genre - required
    releaseYear - required
    account_id (which account it belongs to) - required
    director - optional
    createdAt - optional
    updatedAt - optional
}

### Requirements

    1. Create the bussiness logic and handling for the user actions
    2. Populate the model for movies
    3. Add validation for the fields
    4. Make handlers for the movies
    5. Make access from index.js to the handler functions
    6. Make storage handler upload txt, pdf (at least, prefferably pdf) files for movie summaries

### Path to follow:

    1. Create and test if the user functions work properly (auth service, handler and bussiness logic for register, 
    login, resetPassword, for forgetting password we will work one week from now with mailgun on the Third party API module).
    2. Create and test the logic for the movies functions (CRUD and handler), check if everything is ok in your MongoDB Cloud 
    cluster.
    3. Create and test the logic for the storage of the pdf summaries, let it be locally in a folder "uploads" in the project,
    where each user will have its own movie summaries in a separate folder that will be created only if there are movie summaries inside
    (if empty, it should be deleted).