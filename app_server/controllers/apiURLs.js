const apiURL = {
    server: 'http://localhost:3000'
};

if (process.env.NODE_ENV === 'production') {
    apiURL.server = 'https://pirhonen.azurewebsites.net';
}

module.exports = apiURL;
