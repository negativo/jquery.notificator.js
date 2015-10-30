(function($){
      var container = $("<div />");
      container.attr({id: "notificator"});
      $(function(){
        $("body").append(container);
      });
      $.notificator = function(string, cssClass){
        if (typeof cssClass == 'undefined') { cssClass = 'msg'; }
        var tip = $("<div />").addClass(cssClass);
        tip.html(string);
        container.append(tip);
        tip.show("drop", {
          direction: "up",
          distance: 50
        }, 120).
          delay(1500).
          fadeOut(450, function(){
            $(this).remove();
        });
        return tip;
      };
    })(jQuery);