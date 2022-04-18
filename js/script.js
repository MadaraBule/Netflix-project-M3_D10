const params = new URLSearchParams(location.search)
const id = params.get("id")
const movies = {
    method: "GET",
    headers: {
        method: 'PUT',
        body: JSON.stringify(),
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmU1Y2E5MDIzOTAwMTVkOTY1ZDIiLCJpYXQiOjE2NTAyNjQ3NzQsImV4cCI6MTY1MTQ3NDM3NH0.KBcELRW-ntNpcDf0tRuqpIpFhAceyHT_CCZ1KQa9Kjo"
    }
};
window.onload = () => {
    fetch(
        "https://striveschool-api.herokuapp.com/api/movies/",
        movies
    )
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });
};
const handleSubmit = async event => {
    event.preventDefault()

    const myEvent = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        categorey: document.getElementById('category').value,
        image: document.getElementById('image').value
    }
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/movies/123`, {
        method: 'POST',
        body: JSON.stringify(myEvent),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    console.log(response)
};
let moviess = await response.json();
console.log(moviess);

let row = document.querySelector('/index.putHere');

let col = document.createElement('div');