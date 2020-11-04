import React, {Component} from 'react';
import '../assets/css/Header.css'


class Header extends Component{
    render(){
        return(
            <React.Fragment>
                <div className='Header'>
                    <div className='Titlebox'>
                    <div className = 'Title-Header'>
                            <p>Happy Birthday</p>
                        </div>
                        <div className='Subtitle-Header'>
                            <a href='https://www.instagram.com/hum_sc' target='_blank'><p>by Humberto SC</p></a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;