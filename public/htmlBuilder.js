module.exports ={
    postMovies: () => {
        return
    }

}


const blogPost = {title: 'Ajax Requests', body: 'Are a fun way to use JS!'};
const url = '/posts';
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(blogPost),
};
fetch(url, options)
    .then(/* post was created successfully */)
    .catch(/* handle errors */);