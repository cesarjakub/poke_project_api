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
            },
            error: function (error) {
                console.log(error);
            },
        });
    }

});