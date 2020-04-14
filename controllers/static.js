module.exports.get = {
    options: {
        handler: (request, h) => {
            return {
                "books": `${request.info.host}/api/books`,
                "characters": `${request.info.host}/api/characters`,
                "houses": `${request.info.host}/api/houses`
            }
        },
        description: 'The Root',
        notes: 'The Root resource contains information about all available resources in the API.',
        tags: ['api']
    }
};