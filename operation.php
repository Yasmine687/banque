<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="forme.css">
    <script src="test.js"></script>
    <title>opération</title>
</head>
<body>
<?php
$a1=$_POST["rib"];
$a2=$_POST["mdp"];
$a3=$_POST["op"];
$a4=$_POST["mnd"];
$a5=date("Y-m-j:H-i-s");
$cx=mysqli_connect("localhost","root","") or die("<p>connection invalide</p>");
mysqli_select_db($cx,"bd_1969") or die("<p>base introuvable</p>");
$rq="SELECT * FROM compte where rib='$a1'";
$rs=mysqli_query($cx,$rq);
$nb=mysqli_num_rows($rs);
if($nb==1)
{
    
    $rq1="SELECT MotDePasse FROM compte where Rib='$a1'";
    $rs1=mysqli_query($cx,$rq1);
    $rq2="SELECT Rib FROM compte where Rib='$a1'";
    $rs2=mysqli_query($cx,$rq2);
    if(($a2!=$rq1) && ($a1!=$rq2))
    {
        echo"<p>verifier vos informations de compte!!!</p>";
    }
    else
    {
        if($a3=="V")
        {

            $rq3="INSERT INTO opération VALUES('$a1','$a4','$a3','$a5')";
            $rs3=mysqli_query($cx,$rq3);
            $rq4="UPDATE compte set Solde=Solde+'$a4' WHERE Rib='$a1'";
            $rs4=mysqli_query($cx,$rq4);
            echo"<p>Opération de versement effectuée avec succés</p>";
        }
        else
        {
            if($a4>$rs4)
            {
                echo"<p>Solde Insuffisant</p>";
            }
            else
            {
                
            $rq5="INSERT INTO opération VALUES('$a1','$a4','$a3','$a5')";
            $rs5=mysqli_query($cx,$rq5);
            $rq6="UPDATE compte set Solde=Solde-'$a4' WHERE Rib='$a1'";
            $rs6=mysqli_query($cx,$rq6);
            echo"<p>Opération de retrait effectuée avec succés</p>";
            }
        }
    }
}

?>
</body>
</html>