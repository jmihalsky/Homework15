$(document).ready(function(){
    $(".brgr_devour").on("submit", function(evt){
        evt.preventDefault();

        var burger_id = $(this).children(".burger_id").val();

        $.ajax({
            method: "PUT",
            url: "/burgers/" + burger_id
        }).then(function(data){
            location.reload();
        });
    });
});