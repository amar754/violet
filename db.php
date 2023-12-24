<?php

    $firstname=$_REQUEST['first_name'];
    $lastname=$_REQUEST['last_name'];
    $gender=$_REQUEST['gender'];
    $city=$_REQUEST['city'];
    $email=$_REQUEST['email'];
    $password=$_REQUEST['password'];

    if(isset($_POST['submit']))
    {
        $host="	localhost";
        $user="root";
        $password="";
        $db="violet";
        
        @$conn = mysqli_connect($host,$user,$password,$db);
        
        $insert= "insert into violet--form values('$firstname','$lastname','$gender','$city','$email','$password')";
        
        mysqli_query($conn,$insert);

    if($conn){
        echo("<h1 style='color:green;'> your registration ios done!</h1>");
    }
    else{
        echo("<h1 style='color:red;'> your registration ios failed!</h1>");
    }

}
?>