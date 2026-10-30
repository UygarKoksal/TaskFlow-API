const validate = (req, res, next) => {
    // Controller ile aynı İngilizce anahtarları kullanıyoruz
    const { title, description, priority, assignee } = req.body;

    if (!title || !description || !priority || !assignee) {
        return res.status(400).json({ error: 'All fields (title, description, priority, assignee) are required.' });
    }

    next();
};

module.exports = validate;