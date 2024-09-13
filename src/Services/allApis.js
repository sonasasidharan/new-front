import { commonApi } from "./commonApis";
import base_urls from "./base_urls";


// register
export const useRegister=async(data)=>{
    return await commonApi("POST",`${base_urls}/register`,data,"")
}


// login

export const useLogin=async(data)=>{
    return await commonApi("POST",`${base_urls}/login`,data,"")
}


// create task
export const addTask=async(data,header)=>{
    return await commonApi("POST",`${base_urls}/add`,data,header)
}

// get all Tasks of  user
export const allTasks=async(header)=>{
    return await commonApi("GET",`${base_urls}/allTasks`,"",header)
}

//  to mark task done 
export const update =async (id, data, header) => {
    return await commonApi("PUT",`${base_urls}/taskDone/${id}`,data,header);
}

// delete tasks
export const deleteTask=async(id,header)=>{
    return await commonApi("DELETE",`${base_urls}/deleteTask/${id}`,{},header)
}

// specefic task detail
export const speceficTask=async(tid,header)=>{
    return await commonApi("GET",`${base_urls}/speceficTask/${tid}`,"",header)
}


// to edit tasks
export const updateTtask=async(id,data,header)=>{
    return await commonApi("PUT",`${base_urls}/editTask/${id}`,data,header)
}

