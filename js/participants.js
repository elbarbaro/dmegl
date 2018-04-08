$(document).ready(function() {

    $.when(
        $.getJSON("./json/participant.json", function(d){
            //var container = $("#card-container");
            //let n = d.participants.length; // Length of participants
            //let last = n % 4; // remaining cols
            //let col = $("<div class='col-sm-3'></div>");
            
            /*$.each(d.participants, function(index, val){
                let name = val.name || " ";
                let title = val.title || " ";
                let image = val.image || "default.png";


                if (index >= n-last){
                    let size = 12 / last;
                    col = $("<div class='col-sm-"+ size +"'></div>")
                } 

                let card =  '<div class="card-container">' +
                                '<div class="image">' + 
                                    '<img src="./img/participants/"' + image + '" alt="' + name + '">' + 
                                '</div>' +
                                '<hr/>';

                $(card).appendTo(col);

                if (index % 4 === 0){
                    let row = $("<div class='row'></div>");
                    let cards = $(col).appendTo(row);
                    $(cards).appendTo(container);
                    col = $("<div class='col-sm-4'></div>");
                }
            });*/

            let container = $("#card-container");
            let n = d.participants.length; // Length of participants
            let last = n % 4; // remaining cols
            let row = $("<div></div>", {
                "class": "row"
            });

            console.log("Participants: " + n);

            $.each(d.participants, function(index, participant){
                let name = participant.name || " ";
                let title = participant.title || " ";
                let image = participant.image || "default.png";
                let colWidth = (index >= n-last)?  12/last : 3;

                if (index % 4 === 0 && index !== 0){
                    $(row).appendTo(container);
                    row = $("<div></div>", {
                        "class": "row"
                    });

                    let col = $("<div class='col-sm-6 col-md-" + colWidth +"'>" +
                        "<div class='card-container'>"
                        + "<div class='image'><img src='./img/participants/" + image + "' alt='" + name + "'>"+
                        "<hr/>" +
                        "<div class='description'>" +
                            "<p class='title'>" + title + "</p>" +
                            "<p>" + name + "</p>" +
                        "</div>" + 
                    "</div></div></div>");
                    $(col).appendTo(row);
                    
                } else {
                    let col = $("<div class='col-sm-6 col-md-" + colWidth +"'>" +
                        "<div class='card-container'>"
                        + "<div class='image'>" + 
                        "<img src='./img/participants/" + image + "' alt='" + name + "'>" +
                        "<hr/>" +
                        "<div class='description'>" +
                            "<p class='title'>" + title + "</p>" +
                            "<p>" + name + "</p>" +
                        "</div>" + 
                    "</div></div></div>");
                    $(col).appendTo(row);
                } 
            });
            $(row).appendTo(container);
            
        })
    )
    .then(function(){

        $('.participant-card').addClass("noVisible").viewportChecker({
        classToAdd: 'visible animated slideInRight', 
        offset: 100    
    });
    });
});