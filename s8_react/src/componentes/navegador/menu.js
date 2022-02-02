import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";



function Menu() {

    return (
        <Fragment>

            <Navbar sticky="top" collapseOnSelect expand="lg"  variant="dark" style={{backgroundColor:"rgb(0, 0, 0)" }}>
                <Container >
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto" >
                            <Link to="./" type="button" className="nav nav-link ">HOME</Link>
                            <Link to="./starShips" type="button" className="nav nav-link mx-1 ">STARSHIPS</Link>
                            <Link to="./video" type="button" className="nav nav-link mx-1">VIDEO</Link>
                            <Link to="./films" type="button" className="nav nav-link mx-1">FILMS</Link>
                            <Link to="./series" type="button" className="nav nav-link mx-1">SERIES</Link>
                            <Link to="./disney+" type="button" className="nav nav-link">DISNEY+</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </Fragment>

    )
};


export default Menu;