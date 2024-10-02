require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Email = require('./models/emailModel');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.post('/api/subscribe', async (req, res) => {
    const { email, theme } = req.body;
    if (!email || !theme) {
        return res.status(400).json({ msg: 'Email and theme are required' });
    }

    try {
        const newEmail = new Email({ email, theme });
        await newEmail.save();
        res.status(200).json({ msg: 'Subscribed successfully!' });
    } catch (err) {
        res.status(500).json({ msg: 'Failed to subscribe' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
