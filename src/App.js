import Button from "./reusable-components/Button/Button";
import Menu from "./reusable-components/Menu/Menu";
import MenuButton from "./reusable-components/Menu/MenuButton";
import MenuDropdown from "./reusable-components/Menu/MenuDropdown";
import MenuItem from "./reusable-components/Menu/MenuItem";

function App() {
  const sports=["Tennis", "Racquetball", "Pickleball", "Squash"];

  return (
    <>
      {/* <Button  className="green" onClick={()=> alert("Hello")}>Hello</Button>
    <Button  className="green" variant="danger" onClick={()=> alert("Hello")}>Hello</Button>
    <Button className="green" variant="success" onClick={()=> alert("Hello")}>Hello</Button>
    <Button  className="green" variant="primary" onClick={()=> alert("Hello")}>Hello</Button> */}

      {/* <Menu
        buttonText="Sports"
        items={["Tennis", "Racquetball", "Pickleball", "Squash"]}
      /> */}

      <Menu>
        <MenuButton>Sports</MenuButton>
        <MenuDropdown>

          {sports.map(sport=>(
            <MenuItem key={sport}> {sport}</MenuItem>
          ))}

        </MenuDropdown>
      </Menu>
    </>
  );
}

export default App;
