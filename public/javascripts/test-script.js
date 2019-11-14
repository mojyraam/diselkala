$(document).ready(function() {
    $('.user').click(function() {
        $('.userform').show();
    })
})

$(document).mouseup(function(e) 
{
    var container = $('.userform');
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide();
    }
});