<!-- Simon Mulligan
EC1964474 -->

<!-- https://github.com/Mully88/CodeSpace-7-week-Bootcamp/commit/f747755bfac4187dc3132350db9866774ad53eab -->



<?php   

//area calculator

$width = 10;
$height = 5;

$area = $width * $height;
echo "area of rectangle with width $width meters and height $height meters is: $area squared meters";

?>
<br>
<br>
<?php

$num1 = 20; 
$num2 = 15; 

//addition 
$sum = $num1 + $num2; 
echo "the sum of $num1 and $num2 = $sum <br>";


//subtraction
$diff = $num1 - $num2; 
echo "the subtraction of $num1 and $num2 = $diff <br>";


//multiplication
$times = $num1 * $num2; 
echo " $num1 times $num2 = $times <br>";


//division
$divide = $num1 / $num2; 
echo " $num1 divided by $num2 = $divide <br>";


//concatenation
$concat = $num1 . $num2; 
echo " the concatenation of $num1 and $num2 = $concat <br>";

?>

<br>
<br>
<?php

//age calculator 

$age = 25;

$days = $age * 365; 
$hours = $days * 24; 
$mins = $hours * 60; 

echo "Welcome to the age calculator!!! <br> Your age : $age <br> You have been alive for: <br> $days days <br> $hours hours <br> $mins minutes";


?>

<br>
<br>

<?php

$edinburghClimate = [
    "July-Aug" => ["high" => 19, "low" => 11],
    "Jan-Feb"  => ["high" => 7,  "low" => 1]
];

echo "<h3>Average Temperature in Edinburgh</h3>";

echo "<table border='1' cellpadding='5'>
        <tr>
            <th>Month</th>
            <th>High</th>
            <th>Low</th>
        </tr>";

foreach ($edinburghClimate as $months => $temps) {
    echo "<tr>
            <td>$months</td>
            <td>{$temps['high']} ℃</td>
            <td>{$temps['low']} ℃</td>
          </tr>";
}

echo "</table>";
?>


<br>
<br>

<?php

$studentResults = [
    "Aarron" => ["Physics" => 74, "English" => 69, "Maths" => 70],
    "Jamie"  => ["Physics" => 64, "English" => 79, "Maths" => 69],
    "Harry"  => ["Physics" => 55, "English" => 52, "Maths" => 57]
];

echo "<h3>Student Results</h3>";

echo "<table border='1' cellpadding='5'>
        <tr>
            <th>Name</th>
            <th>Physics</th>
            <th>English</th>
            <th>Maths</th>
        </tr>";

foreach ($studentResults as $name => $scores) {
    echo "<tr>
            <td>$name</td>
            <td>{$scores['Physics']}%</td>
            <td>{$scores['English']}%</td>
            <td>{$scores['Maths']}%</td>
          </tr>";
}

echo "</table>"; 

echo "<br><br>";

echo "Aarron's Physics result: " . $studentResults["Aarron"]["Physics"] . "%";

echo "<br><br>";

echo "Jamie's English result: " . $studentResults["Jamie"]["English"] . "%";

echo "<br><br>";

echo "Harry's Maths result: " . $studentResults["Harry"]["Maths"] . "%";


?>


