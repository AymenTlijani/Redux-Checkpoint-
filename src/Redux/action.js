export const addTask =(payload)=>{
    return{
        type:"ADD_TODO",
        payload
    }
}
export const deleteTask =(payload)=>{
   return{
       type:"DELETE_TODO",
       payload
   }
}
export const editTask =(payload)=>{
   return{
       type:"EDIT_TODO",
       payload
   }
}
export const doneTask =(payload)=>{
   return{
       type:"ISCOMPLETED",
       payload
   }
}
export const filterTask =(payload)=>{
   return{
       type:"FILTER",
       payload
   }
}
