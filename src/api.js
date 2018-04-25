module.exports = {
    getMovies: () => {
        return fetch('/api/movies')
            .then(response => response.json());
    },

    userPost: (userPost) => {

        const url = '/api/movies';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userPost),
        };
        return fetch(url, options)
            .then(results => {console.log(results)
            })
        //     getMovies()
        // }

    }
};


