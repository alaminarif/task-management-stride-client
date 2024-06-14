import { useLocation } from "react-router-dom"

const useTeamName = () =>{
    const {pathname} = useLocation()
    
    const teamName = pathname.split("/")[2]
    return { 
        teamName
    }
}
export default useTeamName;