(function(){

    function StartProjectAnimation(element)
    {
        var selected = $(element).attr('selectedProject');

        if(selected !== "true")
        {
            $(element).animate({
                top: '10%',
                width: '80%',
                height: '80%'
                },
                {
                    start: function()
                    {
                        ToggleProjectContent(this);                    
                        $(this).css('position', 'absolute');
                        $(this).css('left', '10%');
                        $(this).attr('selectedProject', true);
                        $(this).addClass('selectedCard');
                    },
                    progress: function(animation, progress, remainingMs)
                    {

                    }
                }, 2000);
        }

    }

    function ToggleProjectContent(card)
    {
        var image = $(card).find('.previewImage');
        $(image).toggle();
        var projectContent = $(card).find('.projectContent');
        $(projectContent).toggle();
    }

    return ProjectAnimation = {
        StartProjectAnimation: StartProjectAnimation
    }
})();