/* Made by Zua @ https://github.com/thatziv */
$(function(){
	
    $('#btn').click(function(){
		var id = $('#id').val();
	$('#btn').remove();


$.get(`https://discordapp.com/api/guilds/${id}/widget.json`, {"Content-Type": "application/json"},function( data) {

	$("#total").append(`<h4 class="well">Total Members Online: <b>${data.members.length}</b></h4>`);
	$("#total").append(`<h4 class="well">Server Name: <b>${data.name}</b></h4>`);

	data.members.forEach(function(element){



		switch (element.status) {
		case "online":
			var e  = `success`;
		break;
		case "idle":
			var e  = `warning`;
		break;
		case "dnd":
			var e  = `danger`;
		break;
		}

		if (!element.game) {
			var g = `None`
		} else {
			var g = element.game.name;
		}

		$("#output").append(`<div class="panel panel-${e}">
			<div class="panel-heading">
    	<h3 class="panel-title">${element.username}#${element.discriminator}</h3>
  			</div>
			 <div class="panel-body">
    			Activity: ${g}
  			 </div>

			</div>

			`);


	})


}).fail(function() {
	 	$('#output').append(`<p4 class="disabled">Either the ID is incorrect, or the server does not have Discord Server Embed enabled.`)
});



    });

});

	