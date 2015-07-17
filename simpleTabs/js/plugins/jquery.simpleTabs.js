;(function ( global, $) {
  'use strict';
  var pluginName = 'simpleTabs';

  if(!$.fn[pluginName]){
  	$.fn[pluginName] = function(options){
  		return $.each(this, function(){
        // 플러그인 옵션 설정
        var settings = $.extend({}, $.fn[pluginName].defaults, options);
        var $this = $(this);
        var $tab_contents         = settings.tab_contents,
            $tab_menu             = settings.tab_menu,
            $tab_menu_className   = settings.tab_menu_className;
        
        $this
          .on('click', $tab_menu, function(e){
            e.preventDefault();
            $this.find($tab_menu).removeClass($tab_menu_className);
            $(this).addClass($tab_menu_className);
            $this.next().children($tab_contents).hide();
            var path = e.target.getAttribute('href'); // DOM
            //console.log($(path));
            $(path)
              .show()
              .attr('tabindex', 0)
              .focus()
              .on('blur', function() {
                $(path).attr('tabindex', -1);
              });
          });
      });
  	} // plugin
  }

  // 플러그인 기본 옵션 설정
  $.fn[pluginName].defaults = {
    'tab_menu': 'a',
    'tab_menu_className': 'active',
  	'tab_contents': 'div'
  };

}(window, window.jQuery));