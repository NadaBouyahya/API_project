var content = document.getElementById('content')
async function GetData(){
    const response = await fetch("https://ghibliapi.herokuapp.com/films")
    const data = await response.json()
    
for(var i = 0; i<21;i++){
           content.innerHTML+= `<div class='col-4 container-fluid'> 
                        <h4> ${data[i]["title"]}</h4> 
                        <img class='img-thumbnail' src=${data[i]["image"]}>
                        <p> ${data[i]["description"]}</p> 
                        </div>`;

    }
 }
GetData();

// for(j=random ; j<random + 8 ; j++){
//     var obj = lst[j].currencies;

//     c.innerHTML += 
//     <div class="" >
//         <div class="col-4">
//             <a href="#"> <img src ="${lst[j].flags.png}" alt="country" width="200px" height="100px"></a>
//         </div>
//         <div >
//             <h4>${lst[j].name.common} </h4>
//             <p>${lst[j].capital} - ${lst[j].region}</p>
//             <p>${obj[Object.keys(obj)[0]].name}(${obj[Object.keys(obj)[0]].symbol}) </p>
//         </div>
//     </div>
  

// cut the title :
// var movieTitle = data[i]["title"];
    // if (movieTitle.length >10){
    //     movieTitle = movieTitle.substring(0,10);
    //  
    




