(function(){


    function HelloWorld(params) {
        console.log("Hello");  
    }

    function CloseOtherDrawers(selectedElement)
    {
        var drawers = $(".hiddenDrawer");

        for(var i = 0; i < drawers.length; i++)
        {
            if($(drawers[i]).height() > 0)
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
                    }
                }, 600);
            }
            else
            {
                $(sibling).animate({
                    height:"0px"                   
                },
                {
                     done: function()
                    {
                        $(this).css("display", "none");
                    }
                }, 600);
            }           
        });

        $('.projectPreviewCard').on('click', function()
        {
            $(this).animate({
                top: '10%',
                width: '80%',
                height: '80%'
            },
            {
                start: function()
                {
                    ToggleProjectContent(this);                    
                    $(this).css('position', 'absolute');
                    $(this).attr('selectedProject', true);
                }
            }, 2000);
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


    function HidePreviewImage(card)
    {
        
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
            }
        }, 2000);
    }

    function Init()
    {
        SetUpClickHandlers();
    } 
           
    return Emyra = {
        HelloWorld: HelloWorld,
        Init: Init
    }
})();