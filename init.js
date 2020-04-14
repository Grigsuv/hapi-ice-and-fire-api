const axios = require('axios');
const {connect, BookSchema, CharacterSchema, HouseSchema} = require('./db');
const insertBooks = data => {
    data= data.map(d => {
        return{
            ...d,
            characters: d.characters.map(c => c.replace('https://www.anapioficeandfire.com/api/characters/', '')),
            povCharacters: d.povCharacters.map(c => c.replace('https://www.anapioficeandfire.com/api/characters/', ''))
        }
    })
    BookSchema.insertMany(data);
};

const insertCharac = data => {
    data= data.map(d => {
        return{
            ...d,
            allegiances: d.allegiances.map(c => c.replace('https://www.anapioficeandfire.com/api/houses/', '')),
            povBooks: d.povBooks.map(c => c.replace('https://www.anapioficeandfire.com/api/books/', '')),
            books: d.books.map(c => c.replace('https://www.anapioficeandfire.com/api/books/', '')),
        }
    })
    CharacterSchema.insertMany(data);
}
const insertHouse = data => {
    data= data.map(d => {
        return{
            ...d,
            heir: d.heir.replace('https://www.anapioficeandfire.com/api/characters/', ""),
            currentLord: d.currentLord.replace('https://www.anapioficeandfire.com/api/characters/', ""),
            overlord: d.overlord.replace('https://www.anapioficeandfire.com/api/houses/', ""),
            cadetBranches: d.cadetBranches.map(c => c.replace('https://www.anapioficeandfire.com/api/houses/', '')),
            swornMembers: d.swornMembers.map(c => c.replace('https://www.anapioficeandfire.com/api/characters/', '')),
        }
    })
    CharacterSchema.insertMany(data);
}
axios('https://www.anapioficeandfire.com/api/houses?page=4&pageSize=50')
    .then(({data}) => {
        insertHouse(data)
    })
    .catch(res => {
        console.log(res)
    })