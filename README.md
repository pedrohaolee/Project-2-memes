# Favorite Memes App

The Favorite Memes app uses the Imgflip API: [Imgflip API](https://api.imgflip.com/get_memes).

The Imgflip API has a RESTful JSON interface. It takes HTTP form URL-encoded parameters and returns JSON data with an array of popular memes that can be captioned with the API. The API gives 100 memes sorted by how often they were captioned in the last month. The app will pick 30 randomly from the 100.

## Introduction

The `Intro` is the first page when the app starts.

![Intro](https://github.com/pedrohaolee/Project-2-memes/blob/main/src/Intro.jpg)

When `TopMemes` is clicked, the app will get data from the Imgflip API and show 30 top memes.
![TopMemes](https://github.com/pedrohaolee/Project-2-memes/blob/main/src/TopMemes.jpg)

The user can mark the meme as favorite. A check mark will show up next to the Favorite button after that.

![FavoriteChecked](https://github.com/pedrohaolee/Project-2-memes/blob/main/src/FavoriteCheck.jpg)

In the `Favorite` page, the favorite memes will show up here.

![FavoredMemes](https://github.com/pedrohaolee/Project-2-memes/blob/main/src/FavMeme1.jpg)

The user can unmark them as favorite and the page will refresh once the meme is unmarked.

![UnfavorMeme](https://github.com/pedrohaolee/Project-2-memes/blob/main/src/FavMeme2.jpg)

## Code Structure

The app calls three pages: `Intro`, `TopMemes`, and `Favorite` in the `Page` holder, within the Routes structure.

### Intro Page

The `Intro` page will display a paragraph explaining the app.

### TopMemes Page

The `TopMemes` page will call the `Display` component, where the `Display` component will first fetch data from `VITE_SERVER` ([https://api.imgflip.com/get_memes](https://api.imgflip.com/get_memes)) and the data will be passed down to `Book`: meme id, meme title, meme URL, meme height, and width.

### Favorite Page

The `Favorite` page will call the `DisplayFav` component. The `DisplayFav` component will first fetch data from `VITE_AIRTABLE` and display the fetched data. The `getMemesFav` function is passed down to `BookFav` as a lifting state. In `BookFav`, an `Unfavorite` button is created and, once clicked, will call the `unfavMeme` function, which sends a `DELETE` method to AirTable to remove the meme specified by meme id. The lifting state `BookFav` will be called once the meme is removed from AirTable.

## Environment Variables

The keys used in the app `.env`:

- `VITE_SERVER`
- `VITE_APIKEY`
- `VITE_AIRTABLE`
- `VITE_AIRTABLEGET`
