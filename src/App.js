// import logo from './logo.svg';
import { useState } from "react";
import Header from './header';
import Footer from './footer';
import Content from './content';
import Employee from './Exployee';
import './App.css';

function App() {

  const [selectedTeam, setTeam] = useState("TeamB")
  const [employee, setemployee] = useState([{
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "TeamC"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "TeamD"
  }])


  function handleTeamSelectionChange(event){
    console.log(event.target.value)
    setTeam(event.target.value);
  }

  function handleEmployeeCardClick(event){
 


    const transformedEmployees = employee.map((employee) => employee.id === parseInt(event.currentTarget.id)
    ? (employee.teamName === selectedTeam) ? { ...employee,teamName:''}: {...employee, teamName:selectedTeam}
    :employee);

    setemployee(transformedEmployees);


  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header  selectedTeam={selectedTeam}
               teamMemberCount={employee.filter((employee) => employee.teamName === selectedTeam).length}
      />
      <Employee   employee={employee}
                  selectedTeam = {selectedTeam}
                  handleTeamSelectionChange ={handleTeamSelectionChange}
                  handleEmployeeCardClick ={handleEmployeeCardClick}
       />
      <Footer/>
    </div>
  );
}

export default App;
