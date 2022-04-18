
const getmovies = () => {
    fetch(
        "https://striveschool-api.herokuapp.com/api/movies/", {
        headers: {
            method: 'PUT',
            body: JSON.stringify(),
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmU1Y2E5MDIzOTAwMTVkOTY1ZDIiLCJpYXQiOjE2NTAyNjQ3NzQsImV4cCI6MTY1MTQ3NDM3NH0.KBcELRW-ntNpcDf0tRuqpIpFhAceyHT_CCZ1KQa9Kjo"
        }
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });
};
const handleSubmit = () => {
    document.getElementById('form').addEventListener('submit', e => {
        e.preventDefault()
    })
}
const putmovies = async () => {
    try {
        const myEvent = {
            name: document.getElementById('name').value,
            description: document.getElementById('description').value,
            category: document.getElementById('category').value,
            image: document.getElementById('image').value
        }
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/movies/123`, {
            method: 'POST',
            body: JSON.stringify(myEvent),
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmU1Y2E5MDIzOTAwMTVkOTY1ZDIiLCJpYXQiOjE2NTAyNjQ3NzQsImV4cCI6MTY1MTQ3NDM3NH0.KBcELRW-ntNpcDf0tRuqpIpFhAceyHT_CCZ1KQa9Kjo"

            },
        })
        if (response.ok) {

            // isLoading(false)

            const body = await response.json()

            alert("the new generated ID is: " + body._id)

            console.log(response)
        }
        try {

        } catch (err) {
            alert(err)
        }

        let moviess = response.json();
        console.log(moviess);

        let row = document.querySelector('index.html/tbody/putHere');

        let col = document.createElement('div');
        col.className = "col-12 col-md-4 mb-5 image-fluid";
        col.innerHTML = `<div class="card">
          <img src=${moviess.imageUrl} class="card-img-top" height="300" alt="..." />
          <div class="card-body">
        </div>
        </div>`;

        row.appendChild(col);
        try {
            console.log(moviess);
        } catch (err) {
            alert(err)
        }
    } catch (err) {
        alert(err)
    }
}
