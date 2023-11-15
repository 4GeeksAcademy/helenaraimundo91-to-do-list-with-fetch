import React, { useState }  from "react";

const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState ([]);

	return (
		<div className="center">
			<h1>TODOS</h1>
			<ul>
				<li>
					<input
						type="text"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								setTodos(todos.concat([inputValue]))
							}
						}}
						placeholder="Things you need to do!"></input>
				</li>
				{todos.map((item, index) => (
					<li>	
						{item}{" "}
						<i
							class="fas fa-trash-alt"
							onClick={() =>
								setTodos(
									todos.filter(
										(t, currentIndex) =>
										index != currentIndex
									)
							)}></i>
					</li>
				))}
			</ul>
			<div>{todos.length} tasks</div>
		</div>
	)
}

export default Home;