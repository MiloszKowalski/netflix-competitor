# Łonflix - the true Netflix competitor

...well, with a really low budget. In fact so low, that even the logo looks somewhat familiar...

P.S. If you don't get the reference, take look at [this clip](https://www.youtube.com/watch?v=fXLKWoLnTdk) - 0:32 to be precise.

# Tech stack

The project was bootstrapped using Create React App, with the additional configuration for including Tailwind CSS and SCSS - this included installing `craco` to gain access to configuration files.
I've also used `axios` for handling data fetching and `react-dynamic-swiper` for performant and accessible carousel.

I've chosen the hardest possible difficulty - I'll let you judge if I met the requirements.

## Features

This app includes a basic layout from the PSD file (nearly pixel perfect), with some extras.

### Search box

When you start typing into the search box, you'll immediately see movies filtering on the 'Top 100' slider.

### Filters

There are also filters available, dynamically fetched from the iTunes API. When none of them are selected, all of the movies will be shown.

### Movie details

When you click any of the movies, a modal will pop up and show you the details of the movie, such as its title, author, or release date. There is also a link that will take you to the iTunes details page of the movie.

### Favorites

When you hover over the movies at the slider or when you open the details modal, you'll see a little heart icon. When you click it, the selected movie will be added to your favorites and placed in a newly created slider.
Moreover, it persists between sessions - it's stored in `localStorage`.
Favorites' slider is affected by neither the search nor the genre filters.

### Responsive design

It'll probably be worth noting that all of the design is responsive.
The only problem is that when you resize the window, the slider may glitch. Quick refresh will solve the problem.
I would probably be able to solve this issue, but it would take some time - as it was an issue on the library side of things - probably too much time for a demo project to be worth it.

# Installation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
