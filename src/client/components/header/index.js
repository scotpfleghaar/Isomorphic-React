import React, {Component} from 'react';
import { styles } from "./styles";

class Header extends Component {
    render() {
        return (
            <nav style={ styles.navbar } className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href="#">Created by Scot Pfleghaar</a>
            </nav>
        );
    }
}

export default Header;
