# **React Goodreads App**

This application uses [goodreads api](https://www.goodreads.com/api/) to search specific books by title, author or isbn code.

This project was bootstrapped with `create-react-app` and can be accessed live at https://react-goodreads.herokuapp.com/

This project uses the following tools & packages:

`React`
`Zurb Foundation 6`
`Apollo`
`GraphQL`
`Express`
`xml2json`
`Heroku`

# Steps to run the application locally

**Prerequisites:**
The Application was executed using the following versions: NODE (v11.6.0) + NPM (6.9.0).
Recommended to have these installed before running the application.
Also the application uses foundation 6 CDN CSS and the goodreads api for fetching the data. So internet connection is mandatory.

**Required Environment Variables:**

`KEY` : Get the goodreads developer api key from [here](https://www.goodreads.com/api/keys).

To run the application locally in development mode, please follow the below steps:

**Clone the repo:**

    git clone https://github.com/amoljagtap17/react-goodreads.git

**Install dependencies in Root and client folders:**

    npm install

**Starting the application in development mode using the following command ran in terminal:**

    SET KEY=<YOUR_KEY> && npm run dev

# Features In Current Version:

1. Search books by title only.
2. Display searched book results upto 20 books on a single page.
3. Navigate to the book details page by clicking on the 'title' displayed.

# Future Implementation:

1. Currently when on the details page, we try to navigate back to the home page, there are no books displayed. This is an existing problem with the 'ApolloProvider' component which is used with the 'BrowserRouter' component. Will do research to fix this issue.
2. Add some animation effects to main page when the results is displayed and when navigating to the details page.
3. Add react-spinners component instead of displaying the 'loading' texts.
4. Extend the application by adding paginations to display all searched results.
5. Extend the application by adding functionality to search for author and isbn as well instead of just by title.
6. Extend the application by displaying the reviews on the book display page.
7. Add test suite to the application. :)
8. Optimize the current code.
