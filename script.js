$(document).ready(function(){

    function getName(id){
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${id}`,
            type: "GET",
            data: {
              id,
            },
            success: function (result) {
              console.log(result);
              $(".karta").remove();
              $("#infocantainer").append(pokeInfo(result.name, result.id, result.height, result.weight, result.types[0].type.name));
            },
            error: function (error) {
                console.log(error);
            },
        });
    }

    function pokeInfo(name, id, height, weight, type){
        let text = `<div class="karta">
        <h2 class="name" id="name">${name}</h2>
        <h3 class="ID" id="ID">${id}</h3>
        <h4>Height: ${height}</h4>
        <h4>Weight: ${weight}</h4>
        <h4>Type: ${type}</h4>
    </div>`;
        return text;
    }

    function getSearchInput(){
        let val = $("#textbar").val();
        return val.toLowerCase();
    }

    $("#submitbutton").on("click", function(){
        console.log(getName(getSearchInput()));
    });

});