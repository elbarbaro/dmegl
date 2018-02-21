$(document).ready(function() {

    $.when(
        $.getJSON("./json/participant.json", function(d){
            var container = $("#card-container");
            $.each(d.participants, function(key, val){
                var name = val.name ? val.name : " ";
                var title = val.title ? val.title : " ";
                var image = val.image ? val.image : "default.png";
                container.append(   '<div class="container">' +
                                    '<div style="position:absolute; margin: 1em; z-index: 1;">' +
                                    '<img src="img/participants/' + image +'" class="participant-image" /> </div>' + 
                                    '<div class="participant-card">' +
                                        '<div class="col-sm-4"></div>' +
                                        '<div class="col-sm-8 ">' +
                                            '<h2 class="visible-whitespace participant-title">' + title +'</h2>' +
                                            '<p class="visible-whitespace participant-name">'+ name +'</p>' +
                                        '</div>'+
                                    '</div></div><br /><br /><br />');
            
                
            });
            
        })
    )
    .then(function(){

        $('.participant-card').addClass("noVisible").viewportChecker({
        classToAdd: 'visible animated slideInRight', 
        offset: 100    
    });
    });
});