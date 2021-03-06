(function(){


    function HelloWorld(params) {
        console.log("Hello");  
    }

    function CloseOtherDrawers(selectedElement)
    {
        var drawers = $(".hiddenDrawer");

        for(var i = 0; i < drawers.length; i++)
        {
            if($(drawers[i]).height() > 0 && !$(drawers[i]).is(selectedElement))
            {
                 $(drawers[i]).animate({
                    height:"0px"                   
                },
                {
                     done: function()
                    {
                        $(this).css("display", "none");
                    }
                }, 600);
            }
        }
    }

    function SetUpClickHandlers()
    {
         $('.drawerHandle').on('click', function()
        {
            var sibling = $(this).next();

            CloseOtherDrawers(sibling);
            
            if($(sibling).height() === 0)
            {
                $(sibling).animate({
                    height:"400px",
                    
                },
                {  start: function()
                    {

                        $(this).css("display", "flex");
                        $(".emMainContent").animate({
                            marginTop: '0%'
                        }, 400);
                    }
                }, 600);
            }
            else
            {
                $(sibling).animate({
                    height:"0px"                   
                },
                {
                    start: function()
                    {
                         $(".emMainContent").animate({
                            marginTop: '5%'
                        }, 400);
                    },
                    done: function()
                    {
                        $(this).css("display", "none");
                       
                    }
                }, 600);
            }           
        });

        $('.projectPreviewCard').on('click', function()
        {
            ProjectAnimation.StartProjectAnimation(this);           
        });

        $('body').on('click', function(event)
        {
            var projectCards = $('[selectedProject="true"]');

            if( projectCards.length && !$.contains(projectCards[0], event.target))
            {
                CloseProjectCard(projectCards);
            }
        });
    }

    function ToggleProjectContent(card)
    {
        var image = $(card).find('.previewImage');
        $(image).toggle();
        var projectContent = $(card).find('.projectContent');
        $(projectContent).toggle();
    }

    function CloseProjectCard(projectCard)
    {
        $(projectCard).animate({
            width: '100%',
            
        },
        {
            start: function()
            {
                $(this).css('position', '');
                $(this).attr('selectedProject', false);
                $(this).removeClass('selectedCard');
                ToggleProjectContent(this);
            }
        }, 2000);
    }

    function ChangeDisplayedImage()
    {
        var images = $('.imageChooser img');

        $(images).on('mouseover', function(event)
        {
            var displayedImage = $(event.target).parent().parent().find('.projectImage img');

            var hoverSrc = $(event.target).attr('src');

            $(displayedImage).attr('src', hoverSrc);

        });
    }

    function SetUpHoverHandlers()
    {
        ChangeDisplayedImage();
    }

    function Init()
    {
        SetUpClickHandlers();
        SetUpHoverHandlers();
    } 
           
    return Emyra = {
        HelloWorld: HelloWorld,
        Init: Init
    }
})();