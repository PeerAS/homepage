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
                width: '80%',
                height: '80%'
            },
            {
                start: function()
                {
                    $(this).css('position', 'absolute');
                }
            }, 600);
        });

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