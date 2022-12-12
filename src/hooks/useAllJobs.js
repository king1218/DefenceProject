import { useEffect, useState } from "react"

const useAllJobs =()=>{
    const [Jobs, setJobs] = useState();
    const [JobsLoading,setJobsLoading] = useState(true)
    useEffect(()=>{
        
            fetch(`https://quick-solution.vercel.app/jobs`,{

            method:'GET',
            headers:{
                'content-type':'appliction/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
            })
            .then(res=>res.json())
            .then(Jobs=>{
                setJobs(Jobs);
                setJobsLoading(false);
            })
       
  
    },[])
    return [Jobs,JobsLoading]
}
export default useAllJobs;