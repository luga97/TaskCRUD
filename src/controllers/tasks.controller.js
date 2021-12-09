import { Router } from "express";
import Task from '../models/Task'
const router = Router()


export const renderTasks = async (_,res) => {
    const tasks = await Task.find().lean()
    console.log(tasks)
    res.render("home",{tasks})
}

export const createTask = async (req,res) => {
    try {
        const task = Task(req.body)
        const taskSaved = await task.save()
        console.log(taskSaved);
        res.redirect("/")
    } catch (error) {
        console.log(error);
    }
}

export const renderEditTaskFrom = async (req,res) => {
    try {
        const id = req.params.id
        const task = await Task.findById(id).lean()
        console.log(task)
        res.render("edit",{task})
    } catch (error) {
        console.log(error);
    }
}

export const EditTask = async (req,res) => {
    console.log(req.body);
    console.log(req.params.id);
    const id = req.params.id
    await Task.findByIdAndUpdate(id,req.body)
    res.redirect("/")
}

export const deleteTask = async (req,res) => {
    const {id} = req.params
    console.log(id);
    await Task.findByIdAndDelete(id)
    res.redirect("/")
}

export const taskToggleDone = async (req,res) => {
    const {id} = req.params
    const task = await Task.findById(id)
    task.done = !task.done
    task.save()
    res.redirect("/")
}