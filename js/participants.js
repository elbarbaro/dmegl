$(document).ready(function() {

    $.when(
        $.getJSON("./json/participant.json", function(d){

            let container = $("#card-container");
            let n = d.participants.length; // Length of participants
            let last = n % 4; // remaining cols
            let row = $("<div></div>", {
                "class": "row"
            });
            let col1 = $("<div></div>", {
                "class": "col-xs-6"
            });
            let col2 = $("<div></div>", {
                "class": "col-sm-6"
            });
            let col3 = $("<div></div>", {
                "class": "col-md-6"
            });

            $.each(d.participants, function(index, participant){
                let name = participant.name || " ";
                let title = participant.title || " ";
                let image = participant.image || "default.png";
                let data = {
                    name: name,
                    title: title,
                    image: image
                }

                if (index > 0){
                    if (index % 8 == 0){
                        addColumn(col2, col3);
                        col2 = $("<div></div>", {
                            "class": "col-sm-6"
                        });
                        addColumn(col3, row);
                        col3 = $("<div></div>", {
                            "class": "col-md-6"
                        });
                        addRow(row, container);
                        row = $("<div></div>", {
                            "class": "row"
                        });
                    } else {
                        if (index % 4 == 0){
                            addColumn(col2, col3);
                            col2 = $("<div></div>", {
                                "class": "col-sm-6"
                            });
                            addColumn(col3, row);
                            col3 = $("<div></div>", {
                                "class": "col-md-6"
                            });
                        } else {
                            if (index % 2 == 0){
                                addColumn(col2, col3);
                                col2 = $("<div></div>", {
                                    "class": "col-sm-6"
                                });
                            }
                        }
                    }
                }
                addCard(data, col1);
                addColumn(col1, col2);
                col1 = $("<div></div>", {
                    "class": "col-xs-6"
                });
            });
            addColumn(col2, col3);
            col2 = $("<div></div>", {
                "class": "col-sm-6"
            });
            addColumn(col3, row);
            col3 = $("<div></div>", {
                "class": "col-md-6"
            });
            addRow(row, container);
            
        })
    )
    .then(function(){

        $('.participant-card').addClass("noVisible").viewportChecker({
        classToAdd: 'visible animated slideInRight', 
        offset: 100    
    });
    });
});


function addCard(data, to){
    let card = $(
        "<div class='card-container'>" +
            "<div class='image'>" + 
                "<img src='./img/participants/" + data.image + "' alt='" + data.name + "'>" +
                "<hr/>" +
                "<div class='description'>" +
                    "<p class='title'>" + data.title + "</p>" +
                    "<p class='participant-name'>" + data.name + "</p>" +
                "</div>" + 
        "</div></div>");

    $(card).appendTo(to);
}

function addColumn(data, to){
    $(data[0]).appendTo(to); // Objeto de jQuery, por eso el [0]
}

function addRow(data, to){
    console.log(data[0]);
    let row = $("<div class='row'>" + data[0].innerHTML + "</div>");// Objeto de jQuery, por eso el [0]
    $(row).appendTo(to);
}