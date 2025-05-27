// backend/routes/tasks.js
router.post('/', authMiddleware, async (req, res) => {
    try {
        const newTask = new Task({ 
            ...req.body, 
            createdBy: req.user.id 
        });
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});