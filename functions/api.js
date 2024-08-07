const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

const path = require('path');

router.get('/', (request, response) => {
    response.sendFile(path.join(__dirname + '/../dist/index.html'))
})

router.get('/api/:name', (req, res) => {
    const pokeType = req.query.name.toLowerCase()
    if(pokeTypes[pokeType]){
        res.json(pokeTypes[pokeType])
    }else{
        res.json(pokeTypes['unknown'])
    }
});

app.use('/', router);
module.exports.handler = serverless(app);

//Data
const pokeTypes = {
'grass':{
    'effectiveAgainst': 'Water, Ground, Rock',
    'weakAgainst': 'Fire, Grass, Poison, Flying, Bug, Dragon, Steel',
    'defenseWeak': 'Water, Electric, Grass, Ground', 
    'defenseStrong': 'Fire, Ice, Poison, Flying, Bug'
},
'fire':{
    'effectiveAgainst': 'Grass, Ice, Bug, Steel',
    'weakAgainst': 'Fire, Water, Rock, Dragon',
    'defenseWeak': 'Fire, Grass, Ice, Bug, Steel, Fairy', 
    'defenseStrong': 'Water, Ground, Rock'
},
'water':{
    'effectiveAgainst': 'Fire, Ground, Rock',
    'weakAgainst': 'Water, Grass, Dragon',
    'defenseWeak': 'Fire, Water, Ice, Steel', 
    'defenseStrong': 'Electric, Grass'
},
'normal':{
    'effectiveAgainst': 'Rock, Steel',
    'weakAgainst': 'No Effect - Ghost',
    'defenseWeak': 'No Effect - Ghost', 
    'defenseStrong': 'Fighting'
},
'electric':{
    'effectiveAgainst': 'Water, Flying',
    'weakAgainst': 'Electric, Grass, Dragon - No Effect: Ground',
    'defenseWeak': 'Electric, Flying, Steel', 
    'defenseStrong': 'Ground'
},
'ice':{
    'effectiveAgainst': 'Grass, Ground, Flying, Dragon',
    'weakAgainst': 'Fire, Water, Ice, Steel',
    'defenseWeak': 'Ice', 
    'defenseStrong': 'Fire, Fighting, Rock, Steel'
},
'fighting':{
    'effectiveAgainst': 'Normal, Ice, Rock, Dark, Steel',
    'weakAgainst': 'Poison, Flying, Psychic, Bug, Fairy No Effect - Ghost',
    'defenseWeak': 'Bug, Rock, Dark', 
    'defenseStrong': 'Flying, Psychic, Fairy'
},
'poison':{
    'effectiveAgainst': 'Grass, Fairy',
    'weakAgainst': 'Poison, Ground, Rock, Ghost No Effect - Steel',
    'defenseWeak': 'Grass, Fighting, Poison, Bug, Fairy', 
    'defenseStrong': 'Ground, Psychic'
},
'ground':{
    'effectiveAgainst': 'Fire, Electric, Poison, Rock, Steel',
    'weakAgainst': 'Grass, Bug No Effect - Flying',
    'defenseWeak': 'No Effect - Electric, Poison, Rock', 
    'defenseStrong': 'Water, Grass, Ice'
},
'flying':{
    'effectiveAgainst': 'Grass, Fighting, Bug',
    'weakAgainst': 'Electric, Rock, Steel',
    'defenseWeak': 'No Effect - Ground, Grass, Fighting, Bug', 
    'defenseStrong': 'Electric, Ice, Rock'
},
'psychic':{
    'effectiveAgainst': 'Fighting, Poison',
    'weakAgainst': 'Psychic, Steel No Effect - Dark',
    'defenseWeak': 'Fighting, Psychic', 
    'defenseStrong': 'Bug, Ghost, Dark'
},
'bug':{
    'effectiveAgainst': 'Grass, Psychic, Dark',
    'weakAgainst': 'Fire, Fighting, Poison, Flying, Ghost, Steel, Fairy',
    'defenseWeak': 'Grass, Fighting, Ground', 
    'defenseStrong': 'Fire, Flying, Rock'
},
'rock':{
    'effectiveAgainst': 'Fire, Ice, Flying, Bug',
    'weakAgainst': 'Fighting, Ground, Steel',
    'defenseWeak': 'Normal, Fire, Poison, Flying', 
    'defenseStrong': 'Water, Grass, Fighting, Ground, Steel'
},
'ghost':{
    'effectiveAgainst': 'Psychic, Ghost',
    'weakAgainst': 'Dark, No Effect - Normal',
    'defenseWeak': 'Poison, Bug, No Effect - Normal & Fighting', 
    'defenseStrong': 'Ghost, Dark'
},
'dragon':{
    'effectiveAgainst': 'Dragon',
    'weakAgainst': 'Steel, No Effect - Fairy',
    'defenseWeak': 'Fire, Water, Electric, Grass', 
    'defenseStrong': 'Ice, Dragon, Fairy'
},
'dark':{
    'effectiveAgainst': 'Psychic, Ghost',
    'weakAgainst': 'Fighting, Dark, Fairy',
    'defenseWeak': 'Ghost, Dark, No Effect - Psychic', 
    'defenseStrong': 'Fighting, Bug, Fairy'
},
'steel':{
    'effectiveAgainst': 'Ice, Rock, Fairy',
    'weakAgainst': 'Fire, Water, Electric, Steel',
    'defenseWeak': 'Normal, Grass, Ice, Flying, Psychic, Bug, Rock, Dragon, Steel, Fairy, No Effect - Poison', 
    'defenseStrong': 'Fire, Fighting, Ground'
},
'fairy':{
    'effectiveAgainst': 'Fighting, Dragon, Dark',
    'weakAgainst': 'Fire, Poison, Steel',
    'defenseWeak': 'Fighting, Bug, Dark, No Effect - Dragon', 
    'defenseStrong': 'Poison, Steel'
},
'unknown':{
    'effectiveAgainst': 'unknown',
    'weakAgainst': 'unknown',
    'defenseWeak': 'unknown', 
    'defenseStrong': 'unknown'
}
}
