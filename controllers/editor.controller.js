const editor = {
    showWelcomeMessage: (req, res) => {
        res.status(200).json({ message: "Welcome to the Editor API" });
    },
};

module.exports = editor;
