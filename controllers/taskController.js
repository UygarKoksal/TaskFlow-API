let tasks = [];

// 1. Create Task
exports.createTask = (req, res) => {
    const { title, description, priority, assignee } = req.body;
    
    const newTask = {
        id: Date.now().toString(),
        title,
        description,
        priority,
        assignee,
        status: 'pending',
        createdAt: new Date().toISOString()
    };
    
    tasks.push(newTask);
    res.status(201).json({ message: 'Task created successfully', task: newTask });
};

// 2. Get All Tasks (with Filtering, Search, and Pagination)
exports.getAllTasks = (req, res) => {
    let result = [...tasks];

    // Filter by Status and Priority
    if (req.query.status) {
        result = result.filter(t => t.status === req.query.status);
    }
    if (req.query.priority) {
        result = result.filter(t => t.priority === req.query.priority);
    }

    // Search by Keyword
    if (req.query.search) {
        const keyword = req.query.search.toLowerCase();
        result = result.filter(t => 
            t.title.toLowerCase().includes(keyword) || 
            t.description.toLowerCase().includes(keyword)
        );
    }

    // Pagination
    if (req.query.page && req.query.limit) {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        
        result = result.slice(startIndex, endIndex);
    }

    res.status(200).json(result);
};

// 3. Get Task Details
exports.getTaskById = (req, res) => {
    const taskId = req.params.id;
    const task = tasks.find(t => t.id === taskId);

    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }

    res.status(200).json(task);
};

// 4. Update Task
exports.updateTask = (req, res) => {
    const taskId = req.params.id;
    const { title, description, priority, assignee, status } = req.body;

    const taskIndex = tasks.findIndex(t => t.id === taskId);

    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }

    tasks[taskIndex] = {
        ...tasks[taskIndex],
        title: title || tasks[taskIndex].title,
        description: description || tasks[taskIndex].description,
        priority: priority || tasks[taskIndex].priority,
        assignee: assignee || tasks[taskIndex].assignee,
        status: status || tasks[taskIndex].status
    };

    res.status(200).json({ message: 'Task updated successfully', task: tasks[taskIndex] });
}

// 5. Delete Task
exports.deleteTask = (req, res) => {
    const taskId = req.params.id;
    const taskIndex = tasks.findIndex(t => t.id === taskId);

    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }

    tasks.splice(taskIndex, 1);
    res.status(200).json({ message: 'Task deleted successfully' });
};

// Reporting: Completed Tasks Count
exports.getCompletedTasksCount = (req, res) => {
    const completed = tasks.filter(t => t.status === 'completed').length;
    res.status(200).json({ completedTasks: completed });
};

// Reporting: Pending Tasks Count
exports.getPendingTasksCount = (req, res) => {
    const pending = tasks.filter(t => t.status === 'pending').length;
    res.status(200).json({ pendingTasks: pending });
};

// Reporting: System Summary
exports.getSystemSummary = (req, res) => {
    const total = tasks.length;
    const completed = tasks.filter(t => t.status === 'completed').length;
    const pending = tasks.filter(t => t.status === 'pending').length;

    res.status(200).json({
        totalTasks: total,
        completedTasks: completed,
        pendingTasks: pending
    });
};