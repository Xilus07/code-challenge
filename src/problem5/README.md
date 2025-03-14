### Project Setup and Usage

1. Setup
    ## Install Dependencies
        - npm install
    ## Run below command if using PostgreSQL, else no need to run it
        - npm run db:create

2. API Requests in cURL
    - Create
        curl --location 'http://localhost:3000/users' \
        --header 'Content-Type: application/json' \
        --data-raw '{"name": "Luis Santos", "email": "luis_santos_test@gmail.com"}'
    
    - Fetch All
        curl --location 'http://localhost:3000/users'

    - Fetch with Filters
        # Filter by Name
        curl -X GET "http://localhost:3000/users?name=luis"
        # Filter by Email
        curl --location 'http://localhost:3000/users?email=luis'
        # Filter by Name and Email
        curl --location 'http://localhost:3000/users?name=Luis&email=luis'
        # Filter by ID
        curl --location 'http://localhost:3000/users/1'

    - Update
        curl --location --request PUT 'http://localhost:3000/users/1' \
        --header 'Content-Type: application/json' \
        --data-raw '{"name": "Luis Santos", "email": "luis_santos@example.com"}'

    - Delete
        curl --location --request DELETE 'http://localhost:3000/users/1'

3. Start the Project
    - npm run start