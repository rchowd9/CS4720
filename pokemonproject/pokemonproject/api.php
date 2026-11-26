<?php

function getPokemonData($name)
{
    $cleaningName = strtolower(trim($name));
    $url = "https://pokeapi.co/api/v2/pokemon/" . $cleaningName;

    $response = @file_get_contents($url);

    if ($response === FALSE) 
    {
        return ["error" => "Pokémon '$name' not found."];
    }

    $data = json_decode($response, TRUE);

    $typesArray = [];
    foreach ($data['types'] as $t)
    {
        $typesArray[] = ucfirst($t['type']['name']);
    }
    $fullTyping = implode(" / ", $typesArray);

    return [
        "success" => true,
        "name"    => ucfirst($data['name']),
        "attack"  => $data['stats'][1]['base_stat'],
        "speed"   => $data['stats'][5]['base_stat'],
        "image"   => $data['sprites']['front_default'],
        "type"    => $fullTyping
    ];
}
?>