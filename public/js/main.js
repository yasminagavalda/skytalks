$(document).ready(function() {
  $('.reveal').click(function() {
  	if ($('.password').attr('type') === "password") {
  		$('.password').attr('type', 'text');
  	} else {
  		$('.password').attr('type', 'password');
  	}
    
  });
});


$('.showdetails').click(function() {
  var id = $(this).attr('data-id')
  $(location).attr('href', '/talk/' + id)
})

$('.jointalk').click(function() {
  var id = $(this).attr('data-id')
  $.ajax({
    url: '/api/join/' + id,
    method: 'PUT'
  })
  .then( data => {
    $(location).attr('href', '/user#!/')
  } )
})

