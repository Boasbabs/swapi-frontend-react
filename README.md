#  Swapi Frontend React


## Objective
This task is designed to provide an opportunity to demonstrate general
JavaScript and UI development knowledge :

- write clean, structured, readable and maintainable code
- create simple application components and building blocks
- understand fetching, transforming and aggregating data from external APIs
- maintain a well designed application state
- craft a pleasant user experience

### Deployment

The project is deployed here: https://swapi-frontend-react.netlify.com/

### Task

Create a small app using any of Angular, Vue or React that lists the names of Star
Wars movies in a dropdown and the opening crawl of the selected movie below
the selection along with a list of the characters that appear in that movie.

### General requirements

- The UI should have a basic theme of black and yellow; visual design is low in the priority list
- Movie names in the dropdown to be sorted by release date from earliest to
newest
- There should be no movie selected initially and the app should show the Star
Wars logo instead of movie information
- The opening crawl of the selected movie should be animated, a simple
scrolling marquee text would be sufficient
- Keep your application source code on a public Github repository
- Provide a live demo url (Codesandbox, Glitch, Netlify, Zeit Now, Heroku and
Github Pages are good options).

### Data requirements

- The data should be fetched online from https://swapi.co
- Loading indicators should be shown in proper places while fetching data
- Error messages should be shown if there are any errors

### Character list requirements

- All characters that appear in that movie should be listed showing name,
gender, and height in the form of a table.
- Gender can be shown as an icon or abbreviation to save horizontal space.
- Character list can be sorted by clicking on the table headers.
- Clicking on the same header twice toggles the sort order by the field between
ascending and descending.
- There should also be a gender filter selection right above the list so that either
all characters are listed or only the selected gender are listed.
- The last row of the table should show the total number of characters currently
visible on the list.
- The last row should also show the sum of the heights of the characters
currently visible.
- The sum of heights should be shown both in cm and in feet/inches in
parenthesis, for example, 170 cm (5ft/6.93in)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Extras

### Deployment

The project is deployed here: https://swapi-frontend-react.netlify.com/

### License

MIT License