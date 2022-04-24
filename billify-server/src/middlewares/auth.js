module.exports.IsAuthenticated = async (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    }

    return res.status(401).json({
        status: false,
        error: "Not authorized"
    });
}