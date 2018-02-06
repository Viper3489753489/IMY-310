$(document).ready(function(){

$.ajax({
    type: "GET",
    url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&page=Jimi_Hendrix&callback=?",
    contentType: "application/json; charset=utf-8",
    async: false,
    dataType: "json",
    success: function (data, textStatus, jqXHR) {
        
        var markup = data.parse.text["*"];
        var i = $('<div></div>').html(markup);
        
        // remove links as they will not work
        i.find('a').each(function() { $(this).replaceWith($(this).html()); });
        
        // remove any references
        i.find('sup').remove();
        
        // remove cite error
        i.find('.mw-ext-cite-error').remove();
        
        $('#article').html($(i).find('p'));
            
        
        },
        error: function (errorMessage) {

        }
    });    

});
    
    
    