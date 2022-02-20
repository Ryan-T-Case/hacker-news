# Hacker News

By [Ryan Case](mailto:Ryan_Case@outlook.com)

[Deployed app](https://hacker-news-react-redux.herokuapp.com/)

## Instructions

1. Navigate to [repo](https://github.com/Ryan-T-Case/hacker-news)
2. Clone locally using
   `git clone https://github.com/Ryan-T-Case/hacker-news.git`
3. Navigate to the client directory using `cd client`
3. Install dependencies using `yarn install`
4. Run tests using `yarn test`
5. Start your server using `yarn start`
6. Starting the server will automatically run the app in [browser](http://localhost:3000)
7. Enjoy!


## Discussion

I used the following technologies: HTML, CSS, React, and Redux.

#### Packages / Additional Libraries Used

- I used [create-react-app](https://goo.gl/26jfy4) to start building this application.
- I used [redux-thunk](https://yarnpkg.com/en/package/redux-thunk) middleware to assist with handling asynchronous calls by allowing my action creator to return functions instead of an action.
- I used [axios](https://yarnpkg.com/en/package/axios) to make AJAX calls to the [HN Search API](https://hn.algolia.com/api) and display the response data to the user based on their search terms.
- I used [Bootstrap](https://getbootstrap.com/) to make establishing a grid system easier, as well as simplify some of the styling.

## Features

#### Build an application that lets the user search the Hacker News Algolia API and displays a list of results.

I created a simple article search form within a navbar that will take user queries on submit and pass them to an AJAX call to the Algolia API. The response is then held in the Redux store, which is mapped through to display the search results to the user. When a new search is made by the user, the previous results are cleared and only the current results relevant to the current search terms are displayed.

#### Save the user's search terms in the Redux state.

When the article search form is submitted, the Redux store is updated. I saved all search history to an array in the Redux store, and it is mapped through to display previous searches to the user as buttons. When clicked,these buttons will perform the original AJAX call they are associated with and return those results again for the user.
