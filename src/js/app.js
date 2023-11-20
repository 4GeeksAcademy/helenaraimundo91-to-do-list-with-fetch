import "./index.css"
import { useState, useEffect } from "react"

const ENDPOINT = "https://playground.4geeks.com/apis/fake/todos/user/alesanchezr"

export default function app() {
    const [tasks, setTasks] = useState([]);
}

const handleAddTodo = async (newTodo) => {
    await fetch(ENDPOINT, {
        method: "PUT", 
        body: JSON.stringify([...tasks, {label: newTodo, done:false}])
    });
    setTasks ([...tasks, {label: newTodo, done: false}])
};

useEffect ( )