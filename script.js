var content = document.getElementById('content')
async function GetData(){
    const response = await fetch("https://ghibliapi.herokuapp.com/films")
    const data = await response.json()
for(var i = 0; i<21;i++){
    // var movieTitle = data[i]["title"];
    //     movieTitle = movieTitle.substring(0,10);
    //     movieTitle +="..."
           content.innerHTML+= `<div id ="allMovies" class='col-4 container-fluid'> 
                        <h4> ${data[i]["title"]}</h4> 
                        <img class='img-thumbnail' src=${data[i]["image"]}>
                        <p> ${data[i]["description"].substring(0,250)}...</p> 
                        </div>`;

   
 }}

GetData();

