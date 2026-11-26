<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pokemon Team Analyzer</title>
        <link rel="stylesheet" href="style.css">
        <script src="validation.js" defer></script>
</head>
<body>

<header>
    <nav>
        <a href="index.php">Home</a> | 
        <a href="team-form.php">Analyze Team</a>
    </nav>
</header>

<main>
    <h1>Team Analysis Form</h1>
    <p>Enter the names of <strong>three Pokemon</strong> you want to analyze. Make sure to spell the names correctly.</p>

    <form id="teamForm" action="results.php" method="POST">

        <div class="form-group">
            <label for="poke1">Pokemon 1:</label>
            <input type="text" id="poke1" name="poke1" required>
        </div>

        <div class="form-group">
            <label for="poke2">Pokemon 2:</label>
            <input type="text" id="poke2" name="poke2" required>
        </div>

        <div class="form-group">
            <label for="poke3">Pokemon 3:</label>
            <input type="text" id="poke3" name="poke3" required>
        </div>

        <button type='submit' class='button'>Analyzing team</button>
    </form>
    
    <p id="error-msg" class="error"></p>
</main>

</body>
</html>