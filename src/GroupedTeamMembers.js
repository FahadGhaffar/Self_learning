
import { useState } from "react";

const GroupedTeamMembers = ({ employee, selectedTeam, setTeam }) => {


    const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

    function groupTeamMembers() {

        var team = [];

        var teamAMembers = employee.filter((employee) => employee.teamName === 'TeamA')
        var teamA = { team: 'TeamA', members: teamAMembers, collapsed: selectedTeam === 'TeamB' ? false : true }
        team.push(teamA)

        var teamBMembers = employee.filter((employee) => employee.teamName === 'TeamB')
        var teamB = { team: 'TeamB', members: teamBMembers, collapsed: selectedTeam === 'TeamB' ? false : true }
        team.push(teamB)

        var teamCMembers = employee.filter((employee) => employee.teamName === 'TeamC')
        var teamC = { team: 'TeamC', members: teamCMembers, collapsed: selectedTeam === 'TeamC' ? false : true }
        team.push(teamC)

        var teamDMembers = employee.filter((employee) => employee.teamName === 'TeamD')
        var teamD = { team: 'TeamD', members: teamDMembers, collapsed: selectedTeam === 'TeamD' ? false : true }
        team.push(teamD)

        return team;
    }

    return (

        <main className="container">
            {
                groupedEmployees.map((item) => {

                    return (
                        <div key={item.item}>

                        </div>
                    )
                })

            }
        </main>
    );


}

export default GroupedTeamMembers;