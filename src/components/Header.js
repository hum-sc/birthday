import React, {Component} from 'react';
import '../assets/css/Header.css'

class Header extends Component{
    render(){
        return(
            <React.Fragment>
                <div className='Header'>
                    <div className='Titlebox'>
                        <div className = 'Title-Header'>
                            <h1>Birthday</h1>
                        </div>
                        <div className='Subtitle-Header'>
                            <p>by Humberto SC</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;