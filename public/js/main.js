$(document).ready(function() {
  $('.reveal').click(function() {
  	if ($('input').attr('type') === "password") {
  		$('input').attr('type', 'text');
  	} else {
  		$('input').attr('type', 'password');
  	}
    
  });
});