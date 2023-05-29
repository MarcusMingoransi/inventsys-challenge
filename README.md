# Inventsys Challenge

This project was created in response to the coding challenge guidelines.

## Instructions

After completing the steps below, you will be able to run the project locally:

Clone the repository:

```bash
git clone https://github.com/MarcusMingoransi/inventsys-challenge.git
```

Navigate into the project folder:

```bash
cd inventsys-challenge
```

Intall the dependencies, using:

```bash
yarn
```

or

```bash
npm install
```

If you're going to run in an IOS device:

```bash
cd ios
```

Then:

```bash
npx pod-install
```

Go back to root folder, to run the application:

```bash
cd ..
yarn ios
```

or

```bash
yarn android
```

## Project structure

```bash
root/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── ...
│   ├── components/
│   │   ├── error
│   │   |   └── ...
│   │   ├── icons
│   │   |   └── ...
│   │   ├── loading
│   │   |   └── ...
│   │   ├── tabs
│   │   |   └── ...
│   │   └── index.js
│   ├── screens/
│   │   ├── post-list
│   │   |   └── post-list.js
│   │   |   └── styles.js
│   │   |   └── index.js
│   │   └── ...
│   ├── services/
│   │   ├── api.js
│   │   └── ...
│   ├── utils/
│   │   ├── constants.js
│   │   ├── handle-date.js
│   │   ├── handle-general.js
│   │   ├── handle-image.js
│   │   ├── handle-request.js
│   │   ├── index.js
│   │   ├── utils.test.js
│   │   └── ...
|
├── App.js
├── index.js
└── ...
```

## Functionalities

- Navigation
  - Although there is just one page, it is already designed to allow for the addition of extra pages if necessary.
- Fetching data and Listing posts
  - To retrieve the data, I used `axios` and `react-query`, then I constructed a component to display all of the posts. The user can retrieve and reload the current list.
- Caching posts
  - The list of posts is retrieved and cached for 2 minutes.
- Filtering posts
  - It was applied four post filters, which can be accessible via the tabs component, and they are as follows: New, Top, Controversial, and Hot.
- Post content, a post contain the following structure:
  - Author and date of creation of the post
  - A thumbnail (if exists)
  - Title
  - Number of votes
  - Number of comments
- Opening the post in a Webview
  - When a post is clicked, a webview opens and displays all of the information included inside it.

## Demo
<img width="399" alt="image" src="https://github.com/MarcusMingoransi/inventsys-challenge/assets/8353673/3cea306a-6a11-4b56-a817-8bc4dd6b2734">

