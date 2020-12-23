
const test = (req, res) => {
    return res.status(200).json({
        message: 'Welcome'
    });
};

export { test }