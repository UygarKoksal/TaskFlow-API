const express = require('express');
const app = express();
const PORT = 3000;

// 1. Import Middlewares and Routes
const logger = require('./middlewares/logger');
const taskRoutes = require('./routes/taskRoutes');
const reportRoutes = require('./routes/reportRoutes'); 

// 2. Global Middlewares (Must be defined before routes)
app.use(express.json());
app.use(logger);

// 3. Mount Routes
app.use('/tasks', taskRoutes);
app.use('/reports', reportRoutes);

// 4. Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});