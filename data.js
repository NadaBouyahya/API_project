var dt;
function getData(){
    $.ajax({
        url: "data.json",
        success: function(data){
            dt = data;
            fill()
        }
    })
}
getData();
function fill(){
    dt.forEach( element => {
        var tr = document.createElement("tr");
        tr.innerHTML = `<td>${element.id}</td>
        <td>${element.libelle}</td>
        <td>${element.prix}</td>
        <td>${element["catégorie"]}</td>
        <td>${element.disponibilité}</td>
        <td>${element["fournisseur"]["Raison Sociale"]}, ${element["fournisseur"].Adresse}</td>`
        document.getElementsByTagName("tbody")[0].appendChild(tr)
    });
}