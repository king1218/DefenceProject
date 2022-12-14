import { useEffect, useState } from "react"

const useUserDetails =user=>{
    const [User, setUser] = useState();
    const [UserLoading,setUserLoading]= useState(true)
    useEffect(()=>{
        const email= user?.email;
        if(email){
            fetch(`https://quick-solution-server.up.railway.app/user/${email}`,{

            method:'GET',
            headers:{
                'content-type':'appliction/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
            })
            .then(res=>res.json())
            .then(User=>{
                setUser(User);
                setUserLoading(false);
            })
        }
  
    },[user])
    return [User,UserLoading]
}
export default useUserDetails;