// import React from 'react'

// export default function TaskTable({ tasks, editingTask, handleEdit, handleDelete, setEditingTask, saveEditedTask, cancelEdit }) {
//     return (
//         <table>
//             <thead>
//                 <tr>
//                     <th>#</th>
//                     <th>Nội dung</th>
//                     <th>Hạn chót</th>
//                     <th>Trạng thái</th>
//                     <th>Người được giao</th>
//                     <th>Hành động</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {tasks.map((task, index) => (
//                     <tr key={task.id}>
//                         <td>{index + 1}</td>
//                         {editingTask && editingTask.id === task.id ? (
//                             <>
//                                 <td>
//                                     <input
//                                         type="text"
//                                         value={editingTask.content}
//                                         onChange={(event) => setEditingTask({ ...editingTask, content: event.target.value })}
//                                     />
//                                 </td>
//                                 <td>
//                                     <input
//                                         type="date"
//                                         value={editingTask.dueDate}
//                                         onChange={(event) => setEditingTask({ ...editingTask, dueDate: event.target.value })}
//                                     />
//                                 </td>
//                                 <td>
//                                     <select
//                                         value={editingTask.status}
//                                         onChange={(event) => setEditingTask({ ...editingTask, status: event.target.value })}
//                                     >
//                                         <option value="Choose status">Chọn trạng thái</option>
//                                         <option value="Pending">Đang chờ</option>
//                                         <option value="Fulfill">Hoàn thành</option>
//                                         <option value="Reject">Từ chối</option>
//                                     </select>
//                                 </td>
//                                 <td>
//                                     <input
//                                         type="text"
//                                         value={editingTask.assignedTo}
//                                         onChange={(event) => setEditingTask({ ...editingTask, assignedTo: event.target.value })}
//                                     />
//                                 </td>
//                                 <td>
//                                     <button onClick={saveEditedTask}>Xác nhận</button>
//                                     <button onClick={cancelEdit}>Hủy</button>
//                                 </td>
//                             </>
//                         ) : (
//                             <>
//                                 <td>{task.content}</td>
//                                 <td>{task.dueDate}</td>
//                                 <td>{task.status}</td>
//                                 <td>{task.assignedTo}</td>
//                                 <td>
//                                     <button onClick={() => handleEdit(task.id)}>Chỉnh sửa</button>
//                                     <button onClick={() => handleDelete(task.id)}>Xóa</button>
//                                 </td>
//                             </>
//                         )}
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     );
// }

