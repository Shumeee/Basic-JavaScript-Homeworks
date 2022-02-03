$(document).ready(function(){
    let error = $("message");
    let h3 = $("h3");
    $("#button").click(function(){
        let text = $("#text").val();
        let color = $("#color").val();
        if(text != false && CSS.supports(`color`, `${color}`) != false){
            h3.html(`${text}`);
            h3.css("color",`${color}`);
        }else if(text == false && CSS.supports(`color`, `${color}`) == false) error.html("<b>Both parameters are invalid</b>");
        else if(text == false) error.html("<b>Invalid text parameters!</b>");
        else if(CSS.supports(`color`, `${color}`) == false) error.html("<b>Invalid color parameters!</b>");
    })
})