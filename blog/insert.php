<?php

	$data = json_decode(file_get_contents("php://input"));

	$db_host = "localhost";
	$db_user = "root";
	$db_name = "blog";
	$db_pass = "";

	$newTitle = $data->tytul;

	$newEntry = $data->wpis;

	$newDate = $data->data_wpisu;

	try {

			$dbh = new PDO ("mysql:host=$db_host;dbname=$db_name", $db_user, $db_pass);

			$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

			$stmt = $dbh->prepare("INSERT INTO `entries` (`tytul`, `wpis`, `data_wpisu`) VALUES (:nowyTytul, :nowyWpis, :nowaData)");

			$stmt->bindParam(':nowyTytul', $newTitle, PDO::PARAM_STR);
    		$stmt->bindParam(':nowyWpis', $newEntry, PDO::PARAM_STR);
    		$stmt->bindParam(':nowaData', $newDate, PDO::PARAM_LOB);

    		$stmt->execute();

    		$id = $dbh->lastInsertId();

    		$stmt = $dbh->prepare("SELECT * from `entries` where `entry_id` = $id ");

    		$stmt->execute();

    		$result = $stmt->fetch(PDO::FETCH_ASSOC);

    		echo json_encode($result);


		}
		catch (PDOException $e)
	    {
	    	echo $e->getMessage();
	    }
	
	

?>

