import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class NavigationMenu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            language: ''
        }

        this.handleChangeSelect = this.handleChangeSelect.bind(this);
    }

    handleChangeSelect(e) {

    }

    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a>SPBGTI_CODE</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                        О нас
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Что-то
                    </NavItem>
                    <NavDropdown eventKey={3} title="Выбор языка" id="basic-nav-dropdown" value={this.state.language}>
                        <MenuItem eventKey={3.1} value="eng" onSelect={this.handleChangeSelect}>English</MenuItem>
                        <MenuItem eventKey={3.2} value="ru" onSelect={this.handleChangeSelect}>Russian</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        )
    }
}

export default NavigationMenu;