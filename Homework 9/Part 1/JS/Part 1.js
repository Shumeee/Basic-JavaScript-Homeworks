$(document).ready(function(){
    let h1 = $("h1");
    $("#button").click(function(){
        let input = $("#name").val();
        h1.html(`Hello there ${input}!`);
    });
})