    
  
    window.productHuntUpcoming = {
      appId: 111390,
      position: 'bottomLeft',
    };
  
    (function(doc, scr, src, a, b) {
      a = doc.createElement(scr);
      b = doc.getElementsByTagName(scr)[0];
      a.async = true;
      a.src = src;
      b.parentNode.insertBefore(a, b);
    })(document, 'script', 'https://assets.producthunt.com/assets/upwigloader.js');
  
    
    
    function detect_active(){
        // get active
        var get_active = $("#dp-slider .dp_item:first-child").data("class");
        $("#dp-dots li").removeClass("active");
        $("#dp-dots li[data-class="+ get_active +"]").addClass("active");
      }
      $("#dp-next").click(function(){
        var total = $(".dp_item").length;
        $("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
        $.each($('.dp_item'), function (index, dp_item) {
          $(dp_item).attr('data-position', index + 1);
        });
        detect_active();
    
      });
    
      $("#dp-prev").click(function(){
        var total = $(".dp_item").length;
        $("#dp-slider .dp_item:last-child").hide().prependTo("#dp-slider").fadeIn();
        $.each($('.dp_item'), function (index, dp_item) {
          $(dp_item).attr('data-position', index + 1);
        });
    
        detect_active();
      });
    
      $("#dp-dots li").click(function(){
        $("#dp-dots li").removeClass("active");
        $(this).addClass("active");
        var get_slide = $(this).attr('data-class');
        console.log(get_slide);
        $("#dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo("#dp-slider").fadeIn();
        $.each($('.dp_item'), function (index, dp_item) {
          $(dp_item).attr('data-position', index + 1);
        });
      });
    
    //mooving containers with active click on them//
      $("body").on("click", "#dp-slider .dp_item:not(:first-child)", function(){
        var get_slide = $(this).attr('data-class');
        console.log(get_slide);
        $("#dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo("#dp-slider").fadeIn();
        $.each($('.dp_item'), function (index, dp_item) {
          $(dp_item).attr('data-position', index + 1);

        });

        detect_active();
      });
      
      const root = document.documentElement;
      const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
      const marqueeContent = document.querySelector("ul.marquee-content");
      
      root.style.setProperty("--marquee-elements", marqueeContent.children.length);
      
      for(let i=0; i<marqueeElementsDisplayed; i++) {
        marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
      }
    

  