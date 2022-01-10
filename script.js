var movieBanner = document.getElementById('movieBanner')
var Title =document.getElementById ('movieTitle')
var text = document.getElementById('myMovie')

// async function GetData(){
//     const response = await fetch("https://ghibliapi.herokuapp.com/films")
//     const data = await response.json()
//     console.log(data);
//     movieBanner.src = data[0]["image"];
//     Title.innerHTML = data[0]["title"];
// }
// GetData();
 
fetch("https://ghibliapi.herokuapp.com/films").then(
    response => {return response.json();} 
    //function(response){return response.json();}
).then(data => {
    // console.log(data);
    text.innerHTML = "the movie " + (data[20]["title"])+" is about " + (data[20]["description"])+" and directed by " + (data[20]["director"]);

})