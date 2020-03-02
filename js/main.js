$(document).ready(function(){
    $('#addSkill').click(function() {
        var skillList = $('#text').val();
        $('#list').append('<li>'+'<button id="remove">'+'X'+'</button>'+skillList+'</li>');
    });
});
$(document).ready(function(){
    $('#addSkill').click(function() {
        $('#text').val('');
    })
});
$(document).on('click', 'li', function() {
    $(this).remove();
});