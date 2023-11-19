import React, { useState }  from "react";

const Home = () => {
	const [task, setTask] = useState("");
	const [tasks, setTasks] = useState ([]);

const addTask = () => {
		setTasks([...tasks, task]);
		setTask('');
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
							onKeyDown={(e) => {
								if(e.key === 'Enter'){
									addTask();
								  }
							}}
							placeholder="Add a new thing to do!"></input>
					</li>
					<button onClick={addTask}>Add Task!</button>
				{tasks.map((task, index) => (
					<li>	
						{task}{" "}
						<i
							class="fas fa-trash-alt"
							onClick={() =>
								setTasks(
									tasks.filter(
										(task, currentIndex) =>
										index != currentIndex
									)
							)}></i>
					</li>
				))}
			</ul>
			<div className="tasks">{tasks.length} tasks</div>
		</div>
	)
}

export default Home;