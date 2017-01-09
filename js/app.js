$(document).ready(function (){

   $.ajax(
        {
            url: "http://127.0.0.1:8000/book/"
        }
    )
        .done(
        function (json) {
            var $section=$("#books-list").detach()
            for (var i = 0; i < json.length; i ++) {
            var $book = $("<p>", {"data-id": json[i].id, class: "book-title"});
            //var $div = $('<div>')
            $book.html(json[i].title);
            
            $section.append($book);
            $section.append("<div>");
            
        }
        $("h1#title").after($section)
        }
        );
     
     $("body").on("click",".book-title",function(){
       // console.log($book.dataset("id"));
     }
     )

    });