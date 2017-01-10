(function(){


    function HelloWorld(params) {
        console.log("Hello");
        $('#aboutMe').on('click', function()
        {
            if($("#aboutMeContent").height() === 0)
            {
                $("#aboutMeContent").animate({
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
                $("#aboutMeContent").animate({
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