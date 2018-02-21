/**
 * Created by dmeg.rdfvis on 08/03/2017.
 */

var $grid =  $('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer'
});

$grid.imagesLoaded().progress(function(){
    $grid.masonry();
});

