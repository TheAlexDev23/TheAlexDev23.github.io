$.get("/navbar/navbar.html", function(data){
    $("body").prepend(data);
});