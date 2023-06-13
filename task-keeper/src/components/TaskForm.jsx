// import React from 'react'

// export default function TaskForm(props) {
//     let { newTask, handleInputChange, handleSubmit }=props;
    
//     return (
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="content"><i class="fa-solid fa-dumbbell"></i></label>
//             <input type="text" name="content" onChange={handleInputChange} placeholder="Nội dung"  />

//             <label htmlFor="dueDate"><i class="fa-solid fa-dumbbell"></i></label>
//             <input type="date"  name="dueDate" value={newTask.dueDate} onChange={handleInputChange} required />

//             <select id="status" name="status" value={newTask.status} onChange={handleInputChange} required>
//                 <option value="Choose status">Chọn trạng thái</option>
//                 <option value="Pending">Đang chờ</option>
//                 <option value="Fulfill">Hoàn thành</option>
//                 <option value="Reject">Từ chối</option>
//             </select>

//             <label htmlFor="assignedTo"><i class="fa-solid fa-dumbbell"></i></label>
//             <input type="text" id="assignedTo" name="assignedTo" value={newTask.assignedTo} onChange={handleInputChange} placeholder="Người được giao" required />

//             <button type="submit">Submit</button>
//         </form>
//     );
// }



