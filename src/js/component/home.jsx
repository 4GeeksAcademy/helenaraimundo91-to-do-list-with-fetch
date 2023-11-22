import React, { useState, useEffect } from "react";

const Home = () => {
	const [task, setTask] = useState("");
	const [tasks, setTasks] = useState([]);
	const DOMAIN = "https://playground.4geeks.com/apis/fake/todos/user/helenaraimundo91";

	const handleFetchTasks = async () => {
		try {
			const textResponse = await fetch(DOMAIN);
			const jsonResponse = await textResponse.json();
			setTasks(jsonResponse);
		} catch (error) {
			console.error('Error fetching tasks:', error);
		}
	}

	useEffect(() => {
		handleFetchTasks(); 
	   }, []);

	async function updateTask(updatedList) {

		await fetch(DOMAIN, {
			method: 'PUT',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(updatedList),
		});
		handleFetchTasks();
	}


	const addTask = () => {
		const newTask = { label: task, done: false };
		const updatedList = [...tasks, newTask];
		setTasks(updatedList);
		setTask('');
		updateTask(updatedList)
	}

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			addTask();
		}
	}

	const handleDelete = (index) => {
		const updatedList = tasks.filter((task, currenTask) => index !== currenTask);
		setTasks(updatedList);
		updateTask(updatedList);

	}

	return (
		<div className="container">
			<h1>MY TO-DOS</h1>
			<ul>
				<li>
					<input
						type="text"
						onChange={(e) => setTask(e.target.value)}
						value={task}
						onKeyDown={handleKeyDown}
						placeholder="Add a new thing to do!"></input>
				</li>
				<button onClick={addTask}>Add Task!</button>
				{tasks.map((task, index) =>
					<li key={index}>
						{task.label}
						<i
							class="fas fa-trash-alt"
							onClick={ () => handleDelete(index)}></i>
					</li>
				)}
			</ul>
			<div className="tasks">{tasks.length} tasks</div>
		</div>
	)
}

export default Home;