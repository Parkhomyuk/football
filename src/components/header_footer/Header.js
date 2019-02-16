import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {CityLogo} from '../ui/icons'

class Header extends Component{
    render(){
        return(
            <AppBar
            position="static"
            style={{
            backgroundColor: '#98c5e9',
            boxShadow: 'none',
            borderBottom: '2px solid #00285e'
            }}
            >
                <Toolbar
                    style={{
                    display:'inline-box'
                    }}
                >
                    <div style={{ flexGrow:'1'}}>
                        <div className="header_logo">
                            <CityLogo
                                linkTo="/"
                                link={true}
                                height="70px"
                                width="70px"

                            />
                        </div>
                    </div>
                    <Link to="/the_team">
                        <Button color="inherit" style={{color:"white", textTransform:'upperCase'}}>The Team</Button>
                    </Link>
                    <Link to="/the_matches">
                        <Button color="inherit" style={{color:"white"}}> Matches</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        )
    }
}

export  default Header;