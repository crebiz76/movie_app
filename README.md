# Movie App
## React Javascript Fundamentals Course(from Nomad Coders)
# Initialize project using Create React App
## install node.js
- node.js(14.15.4 LTS)
    ```bash
        $ node -v
        v14.15.4
        $ npm -v
        6.14.10
        $ npx -v
        6.14.10
    ```
- facebook/create-react-app

- npx create-react-app my-app
    ```bash
    $ npx create-react-app movie_app
    ```
## PropTypes 유효성 검사(Validator)
- Installation
    ```bash
        npm i prop-types
    ```
- 이용방법: 실제 propTypes의 사용과 무관하게 Warning 또는 Error 메시지는 없음

## Component Life Cycle
- Mounting
    - constructor()
    - render()
    - componentDidMount()

- Updating
    - render()
    - componentDidUpdate()

- Unmounting
    - componentWillUnmount()

## fetch vs. axios
- Installation: npm install axios

## Install gh-pages
- Installation
    ```bash
    npm i gh-pages
    ```
- gh-pages는 웹사이트를 github page 도메인에 표시
- package.json 수정
    - "homepage" 추가
        - "homepage": "https://crebiz76.github.io/movie_app/"
- Build
    - build 폴더 생성
        ```bash
        npm run build
        ```
- package.json 수정
    - "deploy": "gh-pages -d build" 추가
        - deploy는 build 폴더를 업로드(여기서 build는 폴더명)
    - "predeploy": "npm run build" 추가
        - predeploy는 build 폴더를 만들기 위해 빌드를 수행
        - 수행순서: predeploy > build > deploy
- Deployment
    ```bash
    npm run deploy
    ```

# Getting Started with Create React App

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

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
