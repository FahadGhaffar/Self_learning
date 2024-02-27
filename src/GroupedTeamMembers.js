
import { useState } from "react";


const GroupedTeamMembers =({employee, selectedTeam,setTeam}) => {
   const [groupEmployees, setGroupData] =useState(groupTeamMember());


   function groupTeamMember(){
    var teams=[];

    var teamAMembers = employee.filter((employee) =>  employee.teamName === "TeamA");
    var teamA = {team:"TeamA",members:teamAMembers,collapsed : selectedTeam === "TeamA" ? false:true}
    teams.push(teamA);

    var teamBMembers = employee.filter((employee) =>  employee.teamName === "TeamB");
    var teamB = {team:"TeamB",members:teamBMembers,collapsed : selectedTeam === "TeamB" ? false:true}
    teams.push(teamB);

    var teaCMembers = employee.filter((employee) =>  employee.teamName === "TeamC");
    var teamC = {team:"TeamC",members:teaCMembers,collapsed : selectedTeam === "TeamD" ? false:true}
    teams.push(teamC);

    var teamDMembers = employee.filter((employee) =>  employee.teamName === "TeamD");
    var teamD = {team:"TeamD",members:teamDMembers,collapsed : selectedTeam === "TeamD" ? false:true}
    teams.push(teamD);
   }
    return(

        <main className="container">
          {
                groupedEmployees.map((item) => {

                    return (
                        <div key={item.item} className='cart mt-2' style={{cursor:"pointer"}}> 
                                <h4 id={item.item} className="card-header text-secondary bg-white">
                                    Team Name:  {item.item}

                                </h4>
                                <div id={'collapse_'+ item.item} className={item.collapsed === true?"collapsed": ""}>
                                    {
                                        item.members.map(member =>{

                                            return(
                                                <div className="mt-2">
                                                        1:32:45
                                                </div>
                                            );
                                        })
                                    }

                                </div>
                        </div>
                    )
                })

            }
    </main>
    );


}

export default GroupedTeamMembers;