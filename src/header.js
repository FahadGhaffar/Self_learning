


const Header =  ({selectedTeam,teamMemberCount}) => {

return (

    <header>
    <h1 className="mt-4 p5 bg-primary text-white rounded">Header</h1>
    <h1>Team Member Allocation</h1>
    <h3>{selectedTeam}  has {teamMemberCount} Member</h3>

    </header>
);

}

export default Header;