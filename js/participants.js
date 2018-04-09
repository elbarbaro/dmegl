$(document).ready(function() {

    $.when(
        $.getJSON("./json/participant.json", function(d){

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
                            "<p class='participant-name'>" + name + "</p>" +
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
                            "<p class='participant-name'>" + name + "</p>" +
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