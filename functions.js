$(document).ready(function () {
    for (var x = 0; x < 16; x++) {
        for (var y = 0; y < 16; y++) {
            var grid = $("<div class='grid'></div>");
            grid.appendTo(".container");
        }
    }

    $('.grid').hover(function () {
        var newColor = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
        jQuery(".font-style").animate({
            color: newColor
        }, 2000);
        
        $(this).css('background-color', newColor);
    });
    
    $('.clear').on('click', function() {
       $('.grid').css('background-color', "#F5F3F5"); 
    });
});
