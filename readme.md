# Sample React + Redux + Webpack app
This is small commenting app, mimicking user registration, login and comment feature. Once logged in user can edit/remove his owen comments. This app is built with React js and Redux, webpack as bundler. This is totally browser based app, doesn't have any backend implemented. I am willing add backend as well. But for now its like this :). All data are persisted on local storage.

To run this do, first checkout the code, then do

```
$ npm install
```

and then do

```
$ npm run dev
```

This will serve the app on `http:://localhost:8000`

If you need to create a distribution run,

```
$ npm run dist
```

## Directory structure

```
src
  - app
    - action
    - component
    - helpers
    - reducers
    - service
    - app.jsx
    - index.jsx
  - style
- index.html
```

Directory structures are labelled as so that they are easy to related with a React + Redux app. `action` and `reducers` contains Redux actions and reducers. `component` contains React components. `helper` and `service` contains customs components. `index.jsx` is the entry point for React app. `style` contains corresponding custom styles.
