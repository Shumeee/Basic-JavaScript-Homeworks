$(document).ready(function(){
    let div = $("div:last");
    $("#button").click(function(){
        $.ajax({
            url : "https://jsonplaceholder.typicode.com/todos",
            success : function(result){
                for(let user of result){
                    if(user.completed == true){
                        div.append(`<p><b>ID: ${user.id}</b></p>
                                    <p>Title: ${user.title}</p>
                                    <p>Status: Completed</p>`);
                    }
                }
            } 
        })
    })
})