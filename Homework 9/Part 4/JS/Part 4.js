$(document).ready(function(){
    let h1 = $("h1");
    let first = $("#first");
    let second = $("#second");
    let third = $("#third");
    $("#button").click(function(){
        let average = (parseInt(first.val()) + parseInt(second.val()) + parseInt(third.val())) / 3;
        h1.html(parseInt(average));
        if(average >= 10) h1.css("color", "green");
        else h1.css("color", "red");
    })
})