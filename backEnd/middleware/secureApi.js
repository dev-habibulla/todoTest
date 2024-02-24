let secureApi = (req, res, next) => {
    if (req.headers.authorization == process.env.SECUREAPIPASS) {
        next()
    } else {
        res.send({ error: "not valid api" });
    }
}

module.exports = secureApi

