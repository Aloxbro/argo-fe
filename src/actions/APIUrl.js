const rootUrl = process.env.REACT_APP_BE_URL;

const APIUrl = {
    rootUrl: rootUrl,

    //Global
    get: rootUrl + "/crew",
    post: rootUrl + "/crew"
};

export default APIUrl;