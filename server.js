const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000


app.use(cors())

const players = {
    'dean henderson': {
        'age': 25,
        'position': 'Goalkeeper',
        'birthName': 'Dean Bradley Henderson',
        'birthLocation': 'Whitehaven, United Kingdom',
        'nationality': 'English'
    },

    'jordan smith': {
        'age': 25,
        'position': 'Goalkeeper',
        'birthName': 'Jordan Clifford Smith',
        'birthLocation': 'South Normanton, United Kingdom',
        'nationality': 'British'
    },

    'wayne hennessey': {
        'age': 35,
        'position': 'Goalkeeper',
        'birthName': 'Wayne Robert Hennessey',
        'birthLocation': 'Bangor, United Kingdom',
        'nationality': 'British, Welsh'
    },

    'giulian biancone': {
        'age': 22,
        'position': 'Defender',
        'birthName': 'Giulian Alexis André Biancone',
        'birthLocation': 'Fréjus, France',
        'nationality': 'French'
    },

    'steve cook': {
        'age': 31,
        'position': 'Defender',
        'birthName': 'Steve Anthony Cook',
        'birthLocation': 'Hastings, England',
        'nationality': 'English'
    },

    'joe worrall': {
        'age': 25,
        'position': 'Defender',
        'birthName': 'Joseph Adrian Worrall',
        'birthLocation': 'Nottingham, England',
        'nationality': 'English'
    },

    'loic mbe soh': {
        'age': 21,
        'position': 'Defender',
        'birthName': 'Loïc Mbe Soh',
        'birthLocation': 'Nanga Eboko, Cameroon',
        'nationality': 'Cameroonian,French'
    },

    'neco williams': {
        'age': 21,
        'position': 'Defender',
        'birthName': 'Neco Shay Williams',
        'birthLocation': 'Wrexham, Wales',
        'nationality': 'Welsh'
    },

    'harry toffolo': {
        'age': 27,
        'position': 'Defender',
        'birthName': 'Harry Stefano Toffolo',
        'birthLocation': 'Welwyn Garden City, England',
        'nationality': 'English'
    },

    'moussa niakhate': {
        'age': 26,
        'position': 'Defender',
        'birthName': 'Moussa Niakhaté',
        'birthLocation': 'Roubaix, France',
        'nationality': 'French'
    },

    'scott mckenna': {
        'age': 25,
        'position': 'Defender',
        'birthName': 'Scott Fraser McKenna',
        'birthLocation': 'Kirriemuir, Scotland',
        'nationality': 'Scottish'
    },

    'omar richards': {
        'age': 24,
        'position': 'Defender',
        'birthName': 'Omar Tyrell Crawford Richards',
        'birthLocation': 'Lewisham, England',
        'nationality': 'English'
    },

    'willy boly': {
        'age': 31,
        'position': 'Defender',
        'birthName': 'Willy-Arnaud Zobo Boly',
        'birthLocation': 'Melun, France',
        'nationality': 'French, Ivorian'
    },

    'renan lodi': {
        'age': 24,
        'position': 'Defender',
        'birthName': 'Renan Augusto Lodi dos Santos',
        'birthLocation': 'Serrana, Brazil',
        'nationality': 'Brazilian'
    },

    'serge aurier': {
        'age': 29,
        'position': 'Defender',
        'birthName': 'Serge Alain Stéphane Aurier',
        'birthLocation': 'Ouragahio, Ivory Coast',
        'nationality': 'French, Ivorian'
    },

    'loic bade': {
        'age': 22,
        'position': 'Defender',
        'birthName': 'Loïc Badé',
        'birthLocation': 'Sèvres, France',
        'nationality': 'French'
    },

    'orel mangala': {
        'age': 24,
        'position': 'Midfielder',
        'birthName': 'Orel Johnson Mangala',
        'birthLocation': 'Brussels, Belgium',
        'nationality': 'Belgian'
    },

    'jack colback': {
        'age': 32,
        'position': 'Midfielder',
        'birthName': 'Jack Raymond Colback',
        'birthLocation': 'Newcastle upon Tyne, England',
        'nationality': 'English'
    },

    'morgan gibbs-white': {
        'age': 22,
        'position': 'Midfielder',
        'birthName': 'Morgan Anthony Gibbs-White',
        'birthLocation': 'Stafford, England',
        'nationality': 'English'
    },

    'jesse lingard': {
        'age': 29,
        'position': 'Midfielder',
        'birthName': 'Jesse Ellis Lingard',
        'birthLocation': 'Warrington, England',
        'nationality': 'English'
    },

    "lewis o'brien": {
        'age': 23,
        'position': 'Midfielder',
        'birthName': "Lewis John O'Brien",
        'birthLocation': 'Colchester, England',
        'nationality': 'English'
    },

    'cafu': {
        'age': 29,
        'position': 'Midfielder',
        'birthName': 'Carlos Miguel Ribeiro Dias',
        'birthLocation': 'Guimarães, Portugal',
        'nationality': 'Portuguese'
    },

    'cheikhou kouyate': {
        'age': 32,
        'position': 'Midfielder',
        'birthName': 'Cheikhou Kouyaté',
        'birthLocation': 'Dakar, Senegal',
        'nationality': 'Senegalese'
    },

    'ryan yates': {
        'age': 24,
        'position': 'Midfielder',
        'birthName': 'Ryan James Yates',
        'birthLocation': 'Lincoln, England',
        'nationality': 'English'
    },

    'remo frueler': {
        'age': 30,
        'position': 'Midfielder',
        'birthName': 'Remo Marco Freuler',
        'birthLocation': 'Ennenda, Switzerland',
        'nationality': 'Swiss'
    },

    'taiwo awoniyi': {
        'age': 25,
        'position': 'Forward',
        'birthName': 'Taiwo Micheal Awoniyi',
        'birthLocation': 'Ilorin, Nigeria',
        'nationality': 'Nigerian'
    },

    'sam surridge': {
        'age': 24,
        'position': 'Forward',
        'birthName': 'Samuel William Surridge',
        'birthLocation': 'Slough, Berkshire, England',
        'nationality': 'English'
    },

    'alex mighten': {
        'age': 20,
        'position': 'Forward',
        'birthName': 'Alexander Cole Mighten',
        'birthLocation': 'Hartford, Connecticut, United States[',
        'nationality': 'English, American'
    },

    'brennan johnson': {
        'age': 21,
        'position': 'Forward',
        'birthName': 'Brennan Price Johnson',
        'birthLocation': 'Nottingham, England',
        'nationality': 'English'
    },

    'emmanuel dennis': {
        'age': 24,
        'position': 'Forward',
        'birthName': 'Emmanuel Bonaventure Dennis',
        'birthLocation': 'Yola, Nigeria',
        'nationality': 'Nigerian'
    },

    'lyle taylor': {
        'age': 32,
        'position': 'Forward',
        'birthName': 'Lyle James Alfred Taylor',
        'birthLocation': 'Greenwich, England',
        'nationality': 'English'
    },

    'unknown': {
        'age': 0,
        'position': 'unknown',
        'birthName': 'unknown',
        'birthLocation': 'unknown',
        'nationality': 'unknown'
    }

}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const playerName = request.params.name.toLowerCase()

    if ( players[playerName] ) {
        response.json( players[playerName] )    
    }else{
        response.json( players['unknown'] )
    }
    
})


app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}.`)
})