# Inventsys Challenge

This project was developed based on the code challenge requirements.

## Apêndice

Running the folllowing steps, you'll be able to run the project locally:

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
  - Used React navigation, although there is only a single page, it's already structured to add more pages if necessary
- Fetching data and Listing posts
  - Used axios and react-query to fetch the data and created a component to list all the posts. The user can pull down and refetch the current list.
- Caching posts
  - The list of posts are fetched and have 2 minutes of cache.
- Filtering posts
  - It was applied 4 post filters and they can be accessed by the tabs component, they are: New, Top, Controversial, Hot
- Post content, a post contain the following structure:
  - Author and date of creation of the post
  - A thumbnail (if exists)
  - Title
  - Number of votes
  - Number of comments
- Opening the post in a Webview
  - When a post is pressed, a webview will open and show all the information inside of that
