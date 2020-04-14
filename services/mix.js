const {BookSchema, CharacterSchema, HouseSchema} = rootRequire('db');

function findLimit(mongooseObj, currentPage, limit) {
    let skipCount = (currentPage - 1) * limit;
    return mongooseObj.sort('_id').limit(limit).skip(skipCount).lean().exec()
}

const getAllBooks = async ({page = 0, pageSize = 10, fromReleaseDate, toReleaseDate, name}) => {
    try {
        const filter = {};
        if (name) filter.name = new RegExp(name, 'i');
        if (fromReleaseDate) filter.released = {$gte: fromReleaseDate};
        if (toReleaseDate) filter.released = {$lte: toReleaseDate};

        let q = BookSchema.find(filter, '-__v');
        let res = await findLimit(q, page, pageSize);
        res = res.map(r => {
            return {
                ...r,
                characters: r.characters.map(c => `http://localhost:3005/api/characters/${c}`),
                povCharacters: r.povCharacters.map(c => `http://localhost:3005/api/characters/${c}`),
            }
        });
        return res;
    } catch (e) {
        throw e
    }
};


const getBookById = async ({bookId}) => {
    try {
        return await BookSchema.findOne({_id: bookId})
    } catch (e) {
        throw e
    }
};

const getHouseById = async ({houseId}) => {
    try {
        return await HouseSchema.findOne({_id: houseId})
    } catch (e) {
        throw e
    }
};

const getCharacterById = async ({characterId}) => {
    try {
        return await CharacterSchema.findOne({_id: characterId})
    } catch (e) {
        throw e
    }
};

const getAllCharacter = async ({page = 0, pageSize = 10, name, gender, culture, born, died, isAlive}) => {
    try {
        const filter = {};
        if (name) filter.name = new RegExp(name, 'i');
        if (gender) filter.gender = gender;
        if (culture) filter.culture = culture;
        if (born) filter.born = born;
        if (died) filter.died = died;
        if (isAlive) filter.isAlive = isAlive;

        let q = CharacterSchema.find(filter, '-__v');
        let res = await findLimit(q, page, pageSize);
        res = res.map(r => {
            return {
                ...r,
                books: r.books.map(b => `http://localhost:3005/api/books/${b}`),
                povBooks: r.povBooks.map(b => `http://localhost:3005/api/books/${b}`),
                allegiances: r.allegiances.map(h => `http://localhost:3005/api/houses/${h}`),
            }
        });
        return res;
    } catch (e) {
        throw e
    }
};

const getAllHouses = async ({page = 0, pageSize = 10, name, region, words, hasWords, hasTitles, hasSeats, hasDiedOut, hasAncestralWeapons}) => {
    try {
        const filter = {};
        if (name) filter.name = new RegExp(name, 'i');
        if (region) filter.region = region;
        if (words) filter.words = words;
        if (hasWords) filter.words = {$exists: true};

        let q = HouseSchema.find(filter, '-__v');
        let res =  await findLimit(q, page, pageSize);
        res = res.map(r => {
            return {
                ...r,
                cadetBranches: r.cadetBranches.map(h => `http://localhost:3005/api/houses/${h}`),
                swornMembers: r.swornMembers.map(c => `http://localhost:3005/api/characters/${c}`),
            }
        });
        return res;
    } catch (e) {
        throw e
    }
};
module.exports = {
    getAllHouses,
    getHouseById,
    getCharacterById,
    getAllCharacter,
    getBookById,
    getAllBooks,

};