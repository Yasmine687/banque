<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="forme.css">
    <script src="test.js"></script>
    <title>inscription</title>
</head>
<body>
<?php
$a1=$_POST["ncin"];
$a2=$_POST["nom"];
$a3=$_POST["pre"];
$a4=$_POST["mdp"];
$a5=$_POST["mil"];
$a6=$_POST["cp"];
$a7=date("Y-m-j");
$a9="10.000";
$a8=rand(10000000,99999999);
$cx=mysqli_connect("localhost","root","") or die("<p>connection invalide</p>");
mysqli_select_db($cx,"bd_1969") or die("<p>base introuvable</p>");
$rq="SELECT * FROM compte where Ncin='$a1' and TypeCp='$a6'";
$rs=mysqli_query($cx,$rq);
if($rs)
{
    $rq1="SELECT TypeCp FROM compte where Ncin='$a1'";
    $rs2=mysqli_query($cx,$rq1);
    if($rs2!=$a6)
    {
        
        $rq3="INSERT INTO compte VALUES ('$a8','$a1','$a2','$a3','$a4','$a6','$a5','$a9','$a7')";
        $rs3=mysqli_query($cx,$rq3);
        echo"<p>Compte ouvert avec succés votre RIB=".$a8."</p>";
       
    }
    else
    {
        echo"<p>Vous avez deja un compte de ce type</p>";
    
    if($rs2!=$a6)
    {
        
        $rq4="INSERT INTO compte VALUES ('$a8','$a1','$a2','$a3','$a4','$a6','$a5','$a9','$a7')";
        $rs4=mysqli_query($cx,$rq4);
        echo"<p>Compte ouvert avec succés votre RIB=".$a8."</p>";    
    }
    else
    {
        echo"<p>Vous avez deja un compte de ce type</p>";
    }
}

}
mysqli_close($cx);
?>
</body>
</html>