import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';

const NavbarC = ({ search }) => {

  const onSearch = (searchWord) => {
    search(searchWord);
  }
  return (
    <Navbar expand="lg" bg="dark" variant="dark ">
      <Container>
        {/* <Link to="/"> */}
          <Navbar.Brand className="logo" >
            Torm
          </Navbar.Brand>
        {/* </Link> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <div className="search">
            <input
              onChange={(eo) => {
                onSearch(eo.target.value);
              }}
              className="input-search"
              type="text"
              placeholder="Search"
              id=""
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarC;
