# Movies Website

This is a simple movie listing website that allows users to search for movies, view movie details, and explore top-rated movies. The website uses the [The Movie Database (TMDb)](https://www.themoviedb.org/) API to fetch movie data, including posters, titles, and overviews.

## Features

- **Search Movies**: Users can search for movies by title and view their details, including poster images and descriptions.
- **Top Rated Movies**: The website displays a list of top-rated movies fetched from TMDb.
- **Responsive Layout**: The website is designed to be responsive and works well on both desktop and mobile devices.

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **API**: The Movie Database (TMDb) API for fetching movie data
- **Tools**: VS Code for development, Git for version control, and GitHub for hosting the repository.

## API Used

This project utilizes the **TMDb API** to fetch movie data. The API provides information such as:

- Movie titles
- Poster images
- Movie overviews
- Ratings
- Release dates

### API Key

To use the TMDb API, you need to obtain an API key. You can get yours by signing up on [TMDb's website](https://www.themoviedb.org/settings/api).

Once you have the API key, replace the placeholder in your project with your key:

```javascript
const API_KEY = 'your_api_key_here';
