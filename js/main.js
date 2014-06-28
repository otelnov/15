$(function(){
	var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,'empty'];
	$.each($('.cell'), function( key, value ) {
		var random = array[Math.floor(Math.random()*array.length)];
		if (random == 'empty'){
			$(this).addClass('empty').text('');
		} else {
			$(this).text(random);
		}
		index = array.indexOf(random);
		array.splice(index, 1);
	});

	function checkPos(){
		var res = true;
		$.each($('.cell'), function( key, value ) {
			key = key+1; value = $(value).text()*1;
			if(key == 16)
				key = 0;
			if(key != value){
				res = false;
				return false;
			}

		});
		return res;
	}

	$('.cell').on('click', function(){
		$('#mess').text('');
		var empty = $('.empty').attr('id');
		var id = $(this).attr('id');
		var action = false;
		switch (id*1) {
		   case 1:
		      if(empty == 2 || empty == 5){
		      	action = true;
		      }
		      break
		   case 2:
		      if(empty == 1 || empty == 3 || empty == 6){
		      	action = true;
		      }
		      break
		   case 3:
		      if(empty == 2 || empty == 4 || empty == 7){
		      	action = true;
		      }
		      break
		   case 4:
		      if(empty == 3 || empty == 8){
		      	action = true;
		      }
		      break
		   case 5:
		      if(empty == 1 || empty == 6 || empty == 9){
		      	action = true;
		      }
		      break
		   case 6:
		      if(empty == 2 || empty == 5 || empty == 7 || empty == 10){
		      	action = true;
		      }
		      break
		   case 7:
		      if(empty == 3 || empty == 6 || empty == 8 || empty == 11){
		      	action = true;
		      }
		      break
		   case 8:
		      if(empty == 4 || empty == 7 || empty == 12){
		      	action = true;
		      }
		      break
		   case 9:
		      if(empty == 5 || empty == 10 || empty == 13){
		      	action = true;
		      }
		      break
		   case 10:
		      if(empty == 6 || empty == 9 || empty == 11 || empty == 14){
		      	action = true;
		      }
		      break
		   case 11:
		      if(empty == 7 || empty == 10 || empty == 12 || empty == 15){
		      	action = true;
		      }
		      break
		   case 12:
		      if(empty == 8 || empty == 11 || empty == 16){
		      	action = true;
		      }
		      break
		   case 13:
		      if(empty == 9 || empty == 14){
		      	action = true;
		      }
		      break
		   case 14:
		      if(empty == 10 || empty == 13 || empty == 15){
		      	action = true;
		      }
		      break
		   case 15:
		      if(empty == 11 || empty == 14 || empty == 16){
		      	action = true;
		      }
		      break
		   case 16:
		      if(empty == 12 || empty == 15){
		      	action = true;
		      }
		      break
		   default:
		     
		      break
		}

		if(action){
			$('.empty').text($('#'+id).text());
			$('.empty').removeClass('empty');
			$('#'+id).text('').addClass('empty');
		}else{
			$('#mess').text('No move!').addClass('err');
		}

		if(checkPos()){
			$('#mess').text('You win!').addClass('info');	
		}

	});
	
});