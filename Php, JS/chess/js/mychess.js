﻿$(function (){
	draw_empty_board();
	fill_board();
}
function draw_empty_board(){
	var t = '<table id="chess_table">';
		for(var i=8; i>0; i--){
			t += '<tr>';
				for(var j=1 j<9; j++){
					t += '<td class ="chess_square" id="square_'+j+'_'+i+'">' + j+','+i+'</td>';
				}
				t+= ' </tr>';
		}
	t+='</table>';
	$('#chess_board').html(t);
}

function fill_board_by_data(data){
	for(var i=0; i<data.length; i++){
		var o=data[i];
		var id = '$square_' +o.x+'_' + o.y;
		var c = (o.piece!=null)?o.piece_color + o.piece: '';
		$(id).removeClass('W_square').removeClass('B_square').addClass;
	}
}