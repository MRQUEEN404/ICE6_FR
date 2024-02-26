console.log('ajax_script.js loaded')

let url_posts = 'https://jsonplaceholder.typicode.com/posts';
let url_comments = 'https://jsonplaceholder.typicode.com/comments';
let url_albums = 'https://jsonplaceholder.typicode.com/albums';
let url_photos = 'https://jsonplaceholder.typicode.com/photos';
let url_todos = 'https://jsonplaceholder.typicode.com/todos';
let url_users = 'https://jsonplaceholder.typicode.com/users';

// create the function that uses jquery get
function fetchData(url) {
    $.get(url, function(data) {
        console.log(data);
    });
}
// for each url variable above, call the function in a console.log
fetchData(url_posts);
fetchData(url_comments);
fetchData(url_albums);
fetchData(url_photos);
fetchData(url_todos);
fetchData(url_users);
// from the photos url, put 2 random photos into the img elements in the html
function updateRandomPhotos(photos) {
    let imgElements = $('#images img');
    let randomIndexes = [];

    // Generate two unique random indexes
    while (randomIndexes.length < 2) {
        let randomIndex = Math.floor(Math.random() * photos.length);
        if (!randomIndexes.includes(randomIndex)) {
            randomIndexes.push(randomIndex);
        }
    }

    // display the two random photos
    imgElements.eq(0).attr('src', photos[randomIndexes[0]].url);
    imgElements.eq(1).attr('src', photos[randomIndexes[1]].url);
}

// Call the function to update random photos from the photos URL
$.get(url_photos, function(data) {
    updateRandomPhotos(data);
});
// to see the results, right click on the page and click inspect, and click the console tab

