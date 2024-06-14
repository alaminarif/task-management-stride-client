import { useState } from "react";

const useMember = () =>{
    const [member, setMember] = useState({});
    
    
return {
    member, 
    setMember
}
}
export default useMember;