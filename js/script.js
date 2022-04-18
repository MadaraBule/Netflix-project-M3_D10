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
