<?php	

print json_encode($result->fetch_all(MYSQLI_ASSOC));

header('Content-type: application/json');

?>