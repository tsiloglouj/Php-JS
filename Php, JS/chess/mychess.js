$(function (){
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


	<?php
		require_once "lib/dbconnect.php";
		require_once "lib/show_board.php";
		
		
		$method = $_SERVER['REQUEST_METHOD'];
		$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));
		$input = json_decode(file_get_contents('php://input'),true);
		
		
		switch ($r=array_shift($request)) {
		    case 'board' : 
		                     switch ($b=array_shift($request)) {
		                 case '':
		                 case null: handle_board($method);
		                               break;
		                 case 'piece': handle_piece($method, $request[0],$request[1],$input);
		              break;
		                 case 'player': handle_player($method, $request[0],$input);
		         break;
		                 default: header("HTTP/1.1 404 Not Found");
		                 break;
		         }
		         break;
		    default:  header("HTTP/1.1 404 Not Found");
		 exit;
		}
		
		function handle_board($method) {
		 
		 if($method=='GET') {
		 show_board();
		 } else if ($method=='POST') {
		 // reset_board();
		 }
		}
		
		function handle_piece($method, $x,$y,$input) {
		 ;
		}
		 
		function handle_player($method, $p,$input) {
			;
		}
	?>
