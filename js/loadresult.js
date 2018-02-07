$(document).ready(function(){
    var searchUrl = window.location.href;
    var searchQuery = searchUrl.substr(searchUrl.indexOf("=")+1,searchUrl.length);
    console.log(searchQuery);
    searchQuery.replace('\+', ' ');
    console.log(searchQuery);

        $('body').wikiblurb({
            wikiURL: "https://en.wikipedia.org/",
            apiPath: 'w',
            section: null,
            page: searchQuery,
            removeLinks: false,     
            type: 'all',
            customSelector: '',
            callback: function(){ 
                console.log('Data loaded...');
            }
            

       
                
        });                   
});
    
    