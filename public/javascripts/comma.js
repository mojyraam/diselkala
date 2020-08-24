(function($){
    // "1234567".commafy() returns "1,234,567"
    String.prototype.commafy = function() {
      return this.replace(/(.)(?=(.{3})+$)/g,"$1,")
    }
    $.fn.digits = function () {
        return this.each(function () {
            $(this).val($(this).val().replace(/(,| )/g,'').commafy());
        })
    }
})(jQuery)
    
jQuery(function(){
    $('input[type=text]').bind('blur keyup',function(){ $(this).digits(); }).digits();
});