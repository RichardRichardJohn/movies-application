module.exports = {
    getMovies: () => {
        return fetch('/api/movies')
            .then(response => response.json());
    },

    addMovies: (newMovies) => {
        const theMovies = '/api/movies';
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newMovies)
        };

        return fetch(theMovies, options)
            .then(response => response.json());

    },
    movieDisplayer: (title, rating, id) =>{
    return`<tr class="newRow">
                <td>${id}</td>
                <td>${title}</td>
                <td>${rating}</td>
                <td>
                <button class="editbutton" data-id="${id}">Edit</button>
                <button class="deletebutton" >Delete</button>
                </td>
            </tr> `;
},

    deleteMovies: (id) => {
        const theMovies =`/api/movies/${id}`;
        const options = {
            method: 'DELETE',
        };
        return fetch(theMovies, options)
            .then(response => response.json());
    },
};

//
// fetch('/api/movies').then((response)=>{
//     const newMovie =
//
// })