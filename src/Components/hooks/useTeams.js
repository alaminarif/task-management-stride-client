import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/firebase.init";
import useTeamName from "./useTeamName";
import { useQuery } from 'react-query'

const useTeams = () => {
    const [team, setTeam] = useState({})
    
    const { teamName } = useTeamName();


    if (teamName) {
        fetch(`https://tm-tool.onrender.com/team-one/${teamName}`)
            .then(res => res.json())
            .then(data => setTeam(data))
    }


    return {
        team
    }
}
export default useTeams;