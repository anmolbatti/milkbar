const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const adminRouter = require('./routes/admin');
const projectRouter = require('./routes/project');
const tabsRouter = require('./routes/tabs');
const app = express();
const connectDB = require("./db/config");
require('dotenv').config();

const PORT = process.env.PORT || 5000; 
const allowedOrigins = ['http://localhost:3000', 'https://themilkbar.co', 'http://themilkbar.co'];

app.use(cors({
    origin: (origin, callback) => callback(null, allowedOrigins.includes(origin) || !origin),
    credentials: true
}));

connectDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.use(express.json());

// Routes
app.use('/api/admin', adminRouter);
app.use('/api/admin', projectRouter);
app.use('/api/admin', tabsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
