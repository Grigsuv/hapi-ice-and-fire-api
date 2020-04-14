const Joi = require('@hapi/joi'),
    Boom = require('@hapi/boom'),
    {MixService} = rootRequire('services');

const paginationValidArgs = {
    page: Joi.number().integer().min(1).default(1),
    pageSize: Joi.number().integer().min(1).max(50).default(10)
};

const getAllBooks = {
    handler: async (request, h) => {
        try {
            return await MixService.getAllBooks(request.query);
        } catch (e) {
            return Boom.badImplementation(e);

        }
    },
    options: {
        validate: {
            query: Joi.object({
                name: Joi.string(),
                fromReleaseDate: Joi.date().iso(),
                toReleaseDate: Joi.date().iso(),
                name: Joi.string(),
                ...paginationValidArgs
            }).options({stripUnknown: true})
        }
    }
};

const getBookById = {
    handler: async (request, h) => {
        try {
            let book = await MixService.getBookById(request.params);
            if (!book) return Boom.notFound();
            return book
        } catch (e) {
            return Boom.badImplementation(e);
        }
    },
    options: {
        validate: {
            params: Joi.object({
                bookId: Joi.number().integer()
            }).options({stripUnknown: true})
        }
    }
};
const getAllCharacters = {
    handler: async (request, h) => {
        try {
            return await MixService.getAllCharacter(request.query);
        } catch (e) {
            return Boom.badImplementation(e);

        }
    },
    options: {
        validate: {
            query: Joi.object({
                name: Joi.string(),
                gender: Joi.string(),
                culture: Joi.string(),
                born: Joi.string(),
                died: Joi.string(),
                isAlive: Joi.boolean(),
                ...paginationValidArgs
            }).options({stripUnknown: true})
        }
    }
};

const getCharacterById = {
    handler: async (request, h) => {
        try {
            let character = await MixService.getCharacterById(request.params);
            if (!character) return Boom.notFound();
            return character
        } catch (e) {
            return Boom.badImplementation(e);
        }
    },
    options: {
        validate: {
            params: Joi.object({
                characterId: Joi.number().integer()
            }).options({stripUnknown: true})
        }
    }
};

const getAllHouses = {
    handler: async (request, h) => {
        try {
            return await MixService.getAllHouses(request.query);
        } catch (e) {
            return Boom.badImplementation(e);

        }
    },
    options: {
        validate: {
            query: Joi.object({
                name: Joi.string(),
                region: Joi.string(),
                words: Joi.string(),
                hasWords: Joi.boolean(),
                hasTitles: Joi.boolean(),
                hasSeats: Joi.boolean(),
                hasDiedOut: Joi.boolean(),
                hasAncestralWeapons: Joi.boolean(),
                ...paginationValidArgs
            }).options({stripUnknown: true})
        }
    }
};

const getHouseById = {
    handler: async (request, h) => {
        try {
            let house = await MixService.getHouseById(request.params);
            if (!house) return Boom.notFound();
            return house
        } catch (e) {
            return Boom.badImplementation(e);
        }
    },
    options: {
        validate: {
            params: Joi.object({
                houseId: Joi.number().integer()
            }).options({stripUnknown: true})
        }
    }
};

module.exports = {
    getHouseById,
    getAllHouses,
    getCharacterById,
    getAllCharacters,
    getBookById,
    getAllBooks
}

//
// module.exports.getOne = {
//     // validate: {
//     //     params: {
//     //         userId: Joi.string().required()
//     //     }
//     // },
//     handler: async (request, h) => {
//         try {
//             return await UserService.getUserById(request.params.userId);
//         } catch (e) {
//             return Boom.badImplementation(e);
//
//         }
//     }
// };
//
// module.exports.create = {
//     // validate: {
//     //     payload: {
//     //         username: Joi.string().required(),
//     //         firstName: Joi.string(),
//     //         lastName: Joi.string(),
//     //         age: Joi.number().integer().min(1).max(100).required()
//     //     }
//     // },
//     handler: async (request, h) => {
//         try {
//             let user = await UserService.createUser(request.payload);
//             if (!user) return Boom.forbidden("please provide another username, it already exist");
//             return user
//         } catch (e) {
//             return Boom.badRequest(e)
//
//         }
//     }
// };
//
// module.exports.update = {
//     // validate: {
//     //     payload: {
//     //         username: Joi.string(),
//     //         firstName: Joi.string(),
//     //         lastName: Joi.string(),
//     //         age: Joi.number().integer().min(1).max(100)
//     //     },
//     //     params: {
//     //         userId: Joi.string().required()
//     //     }
//     // },
//     handler: async (request, h) => {
//         try {
//             let user = await UserService.updateUser(request.params.userId, request.payload);
//             if (!user) return Boom.notFound();
//             return user
//         } catch (e) {
//             return Boom.badRequest(e)
//         }
//     }
// };
//
// module.exports.remove = {
//    //  options: {
//    //      validate: {
//    //         params: Joi.object({
//    //             userId: Joi.string().required()
//    //         })
//    //     },
//    // },
//
//     handler: async (request, h) => {
//         try {
//             let user = await UserService.deleteUser(request.params.userId);
//             if (!user) return Boom.notFound();
//             return {message: "User removed"}
//         } catch (e) {
//             return Boom.badRequest("Could not delete user")
//
//         }
//     },
//     options: {
//         validate: {
//             payload: Joi.object({
//                 post: Joi.string().max(140)
//             })
//         }
//     },
// };
