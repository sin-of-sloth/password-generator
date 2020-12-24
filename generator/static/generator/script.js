document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {dropdownOptions: {coverTrigger: false}});
    showVal(document.getElementById('passwordlength').value);
});

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    M.toast({html: 'Password copied to clipboard!'})
}

function showVal(value) {
    $('#length').text(value);
}