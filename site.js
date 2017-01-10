(function(){


    function HelloWorld(params) {
        console.log("Hello");
        $('.drawerHandle').on('click', function()
        {
            var sibling = $(this).next();
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
  
    }


  
           
    return Emyra = {
        HelloWorld: HelloWorld
    }
})();