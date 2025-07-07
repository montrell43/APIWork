document.querySelector('#dog-btn').addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((rawResponse) => {
        //console.log(rawResponse
        return rawResponse.json() 
    }) 
    .then((data) => {
        console.log(data)
        document.querySelector('img').src = data.message
    })
    .catch((error) => console.log(error));
    alert('Could not fetch data')
})

document.querySelector('#weather-btn').addEventListener('click', () => {
    let city = document.querySelector('#city-input').value;
    
    fetch('https://goweather.herokuapp.com/weather/' + city)
    .then((report) => {
        //console.log(rawResponse
        return report.json() 
    }) 
    .then((data) => {
        console.log(data)
        document.querySelector('#temperature').textContent = 'Temperature: ' + data.temperature
        document.querySelector('#wind').textContent = 'Wind: ' + data.wind
        document.querySelector('#description').textContent = 'Description: ' + data.description
    })
    .catch(error => {
        console.error(error)
        alert('Could not fetch data')
    })
})

