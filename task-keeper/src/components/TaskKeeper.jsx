import React, { useState, useEffect } from 'react';

export default function TaskKeeper() {
    const [tasks, setTasks] = useState([1]);
    const [newTask, setNewTask] = useState({
        content: '',
        dueDate: '',
        status: 'Choose status',
        assignedTo: ''
    });
    const [nextTaskId, setNextTaskId] = useState(1);

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewTask((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newTask.content === '' || newTask.dueDate === '' || newTask.status === 'Choose status' || newTask.assignedTo === '') {
            return;
        }
        const task = {
            id: nextTaskId,
            content: newTask.content,
            dueDate: newTask.dueDate,
            status: newTask.status,
            assignedTo: newTask.assignedTo
        };
        setTasks((prevState) => [...prevState, task]);
        setNewTask({
            content: '',
            dueDate: '',
            status: 'Choose status',
            assignedTo: ''
        });
        setNextTaskId((prevId) => prevId + 1);
    };
    const [editingTask, setEditingTask] = useState(null);
    const handleEdit = (id) => {
        const taskToEdit = tasks.find((task) => task.id === id);
        setEditingTask(taskToEdit);
    };
    const saveEditedTask = () => {
        setTasks((prevState) =>
            prevState.map((task) => (task.id === editingTask.id ? editingTask : task))
        );
        setEditingTask(null);
    };

    const cancelEdit = () => {
        setEditingTask(null);
    };

    const handleDelete = (id) => {
        setTasks((prevState) => prevState.filter((task) => task.id !== id));
    };

    return (
        <div>
            <h1>Task Keeper</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="content"><i class="fa-solid fa-dumbbell"></i></label>
                <input type="text" id="content" name="content" value={newTask.content} onChange={handleInputChange} placeholder="Content" required />

                <label htmlFor="dueDate"><i class="fa-solid fa-dumbbell"></i></label>
                <input type="date" id="dueDate" name="dueDate" value={newTask.dueDate} onChange={handleInputChange} required />

                <select id="status" name="status" value={newTask.status} onChange={handleInputChange} required>
                    <option value="Choose status">Choose status</option>
                    <option value="Pending">Pending</option>
                    <option value="Fulfill">Fulfill</option>
                    <option value="Reject">Reject</option>
                </select>

                <label htmlFor="assignedTo"><i class="fa-solid fa-dumbbell"></i></label>
                <input type="text" id="assignedTo" name="assignedTo" value={newTask.assignedTo} onChange={handleInputChange} placeholder="Username" required />

                <button type="submit">Submit</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Content</th>
                        <th>Due date</th>
                        <th>Status</th>
                        <th>Assigned to</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => (
                        <tr key={task.id}>
                            <td>{index + 1}</td>
                            {editingTask && editingTask.id === task.id ? (
                                <>
                                    <td>
                                        <input
                                            type="text"
                                            value={editingTask.content}
                                            onChange={(event) => setEditingTask({ ...editingTask, content: event.target.value })}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="date"
                                            value={editingTask.dueDate}
                                            onChange={(event) => setEditingTask({ ...editingTask, dueDate: event.target.value })}
                                        />
                                    </td>
                                    <td>
                                        <select
                                            value={editingTask.status}
                                            onChange={(event) => setEditingTask({ ...editingTask, status: event.target.value })}
                                        >
                                            <option value="Choose status">Choose status</option>
                                            <option value="Pending">Pending</option>
                                            <option value="Fulfill">Fulfill</option>
                                            <option value="Reject">Reject</option>
                                        </select>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            value={editingTask.assignedTo}
                                            onChange={(event) => setEditingTask({ ...editingTask, assignedTo: event.target.value })}
                                        />
                                    </td>
                                    <td>
                                        <button onClick={saveEditedTask}>Confirm</button>
                                        <button onClick={cancelEdit}>Cancel</button>
                                    </td>
                                </>
                            ) : (
                                <>
                                    <td>{task.content}</td>
                                    <td>{task.dueDate}</td>
                                    <td>{task.status}</td>
                                    <td>{task.assignedTo}</td>
                                    <td>
                                        <button onClick={() => handleEdit(task.id)}>Edit</button>
                                        <button onClick={() => handleDelete(task.id)}>Delete</button>

                                    </td>
                                </>
                            )}
                        </tr>
                    ))}

                </tbody>

            </table>
        </div>
    );
}

// import React, { useState, useEffect } from 'react';
// import TaskForm from './TaskForm';
// import TaskTable from './TaskTable';
// export default function TaskKeeper() {
//     const [tasks, setTasks] = useState([1]);
//     const [newTask, setNewTask] = useState({
//         content: '',
//         dueDate: '',
//         status: 'Choose status',
//         assignedTo: ''
//     });
//     const [nextTaskId, setNextTaskId] = useState(1);

//     useEffect(() => {
//         const storedTasks = localStorage.getItem('tasks');
//         if (storedTasks) {
//             setTasks(JSON.parse(storedTasks));
//         }
//     }, []);

//     useEffect(() => {
//         localStorage.setItem('tasks', JSON.stringify(tasks));
//     }, [tasks]);

//     const handleInputChange = (event) => {
//         let { name, value } = event.target;
//         // setNewTask((prevState) => ({
//         //     ...prevState,
//         //     [name]: value
//         // }));
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         if (newTask.content === '' || newTask.dueDate === '' || newTask.status === 'Choose status' || newTask.assignedTo === '') {
//             return;
//         }
//         const task = {
//             id: nextTaskId,
//             content: newTask.content,
//             dueDate: newTask.dueDate,
//             status: newTask.status,
//             assignedTo: newTask.assignedTo
//         };
//         setTasks((prevState) => [...prevState, task]);
//         setNewTask({
//             content: '',
//             dueDate: '',
//             status: 'Choose status',
//             assignedTo: ''
//         });
//         setNextTaskId((prevId) => prevId + 1);
//     };
//     const [editingTask, setEditingTask] = useState(null);
//     const handleEdit = (id) => {
//         const taskToEdit = tasks.find((task) => task.id === id);
//         setEditingTask(taskToEdit);
//     };
//     const saveEditedTask = () => {
//         setTasks((prevState) =>
//             prevState.map((task) => (task.id === editingTask.id ? editingTask : task))
//         );
//         setEditingTask(null);
//     };

//     const cancelEdit = () => {
//         setEditingTask(null);
//     };

//     const handleDelete = (id) => {
//         setTasks((prevState) => prevState.filter((task) => task.id !== id));
//     };

//     return (
//         <div>
//             <TaskForm
//                 newTask={newTask}
//                 handleInputChange={handleInputChange}
//                 handleSubmit={handleSubmit}
//             />
//             <TaskTable
//                 tasks={tasks}
//                 editingTask={editingTask}
//                 handleEdit={handleEdit}
//                 handleDelete={handleDelete}
//                 setEditingTask={setEditingTask}
//                 saveEditedTask={saveEditedTask}
//                 cancelEdit={cancelEdit}
//             />
//         </div>
//     );
// }



