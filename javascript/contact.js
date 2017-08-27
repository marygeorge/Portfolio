

$("#submitForm").on("click",function(){
setTimeout(function() {
    window.open("mailto:" + document.getElementById('email').value + "?subject=" + document.getElementById('first_name').value + "&body=" + document.getElementById('textarea1').value);
  }, 320);
});

