<?php
include 'api.php';

$team_inputs = [$_POST['poke1'], $_POST['poke2'], $_POST['poke3']];
$team_data = [];
$errors = [];

$tot_speed = 0;
$tot_atk = 0;

foreach ($team_inputs as $name)
{
    if (empty(trim($name))) continue;

    $result = getPokemonData($name);

    if (isset($result['error']))
    {
        $errors[] = $result['error'];
    }
    else
    {
        $team_data[] = $result;
        $tot_speed += $result['speed'];
        $tot_atk += $result['attack'];
    }
}

$count = count($team_data);
$avg_spd = $count > 0 ? round($tot_speed / $count, 1) : 0;
$avg_atk = $count > 0 ? round($tot_atk / $count, 1) : 0;

$archetype = "Unknown";
if ($count > 0)
{
    if ($avg_atk > 90 && $avg_spd > 90) 
    {
        $archetype = "Hyper-Offensive (Fast & Deadly)";
    }

    elseif ($avg_atk > 90) 
    {
        $archetype = "Bulky Powerhouse (Slow but Strong)";
    }

    elseif ($avg_spd > 90) 
    {
        $archetype = "Speed Scouts (Fast but Lean)";
    }
    
    else 
    {
        $archetype = "Balanced / Tactical";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Team Analysis</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
    <nav>
        <a href="index.php">Home</a> | 
        <a href="team-form.php">New Team</a> | 
    </nav>
</header>

<main>
    <h1>Battle Preparation Report</h1>

    <?php if ($count > 0): ?>
        <section class="synthesis-box">
            <h2>Team Synthesis</h2>
            <p><strong>Archetype:</strong> <?= $archetype ?></p>
            <p>Average Speed: <?= $avg_spd ?></p>
            <p>Average Attack: <?= $avg_atk ?></p>
        </section>

        <table border="1">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Type(s)</th>
                    <th>Attack</th>
                    <th>Speed</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($team_data as $poke): ?>
                <tr>
                    <td><img src="<?= $poke['image'] ?>" alt="sprite"></td>
                    <td><?= $poke['name'] ?></td>
                    <td><?= $poke['type'] ?></td>
                    <td><?= $poke['attack'] ?></td>
                    <td><?= $poke['speed'] ?></td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    <?php endif; ?>

    <?php if (!empty($errors)): ?>
        <div class="errors">
            <?php foreach ($errors as $msg) echo "<p>$msg</p>"; ?>
        </div>
    <?php endif; ?>
</main>

</body>
</html>