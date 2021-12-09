import { Router } from "express";
import { createTask, deleteTask, EditTask, renderEditTaskFrom, renderTasks, taskToggleDone } from "../controllers/tasks.controller";
const router = Router()

router.get("/", renderTasks)

router.post("/tasks/add", createTask)

router.get('/tasks/:id/toggleDone', taskToggleDone)

router.get("/tasks/:id/edit", renderEditTaskFrom)

router.post('/tasks/:id/edit', EditTask)

router.get('/tasks/:id/delete', deleteTask)

router.get("/about", (_,res) => {
    res.render("about")
})


export default router