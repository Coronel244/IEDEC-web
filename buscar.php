<?php
$host = 'localhost';
$dbname = 'iedec_db';
$username = 'Coronel';
$password = '';

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $query = isset($_GET['q']) ? $_GET['q'] : '';

    $stmt = $conn->prepare("SELECT * FROM productos WHERE nombre LIKE :query OR descripcion LIKE :query");
    $stmt->execute(['query' => '%' . $query . '%']);
    
    $resultados = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($resultados);
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}

$conn = null;
?>
