$(document).ready(function(){
    let h3 = $("h3");
    $("#button").click(function(){
        let text = $("#text").val();
        let color = $("#color").val();
        h3.html(`${text}`);
        h3.css("color",`${color}`);
    })  
})