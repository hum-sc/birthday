import React, { Component } from 'react';
import '../assets/css/Space.css'
import Bongo from '../assets/images/bongo.gif'
import Cancion from '../assets/Songs/song.mp3';
import {Howl, Howler} from 'howler';
function generarLetra(){
    var letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
    var numero = (Math.random()*15).toFixed(0);
    return letras[numero];
}

var sound = new Howl({
    src:Cancion,
    autoplay: true,
    loop: true
});
function colorHEX(){
    var coolor = "#";
    
    for(var i=0;i<6;i++){
        coolor += generarLetra() ;
    }


    return coolor;
}
class Space extends Component {
    state={
        color: 'red'
    }
    cambiar=()=>{
            this.setState(
                {
                    color: colorHEX()
                }

            )
    }

    render (){
        return(
            <React.Fragment>
                <div className='Space' style={{backgroundColor: this.state.color}}>
                    <div className='Felicitacion'>
                        <p>Feliz cumpleaños</p>
                    </div>
                    <div className='Gif' >
                        <img src={Bongo} alt='Bongo'></img>
                    </div>
                    <div className='Nombre' onStart={setInterval(this.cambiar, 100)} >
                        <p>BELLO</p>
                    </div>
                    
                </div>
            </React.Fragment>
        );
    }
}



export default Space;
