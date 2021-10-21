const login_get = (req, res) => {
    res.send("login");
};

const login_post = (req, res) => {
    res.send("Hey in the login post page");
};

const signup_get = (req, res) => {
    res.send("signup");
};

const signup_post = (req, res) => {
    res.send("Hey in the signup post page");
};

module.exports = {
    login_get,
    login_post,
    signup_get,
    signup_post,
};
