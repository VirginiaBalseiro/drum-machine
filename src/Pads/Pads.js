import React from 'react';
import Pad from '../Pad/Pad';

const pads = (props) => { 
return  props.padsarray.map((pad) => {
    return <Pad
    className = "drum-pad"
    name = {pad.name}
    letter = {pad.letter}
    keyCode = {pad.keyCode}
    url = {'https://s3.amazonaws.com/freecodecamp/drums/' + pad.name + '.mp3'} 
    key = {pad.name} 
    id = {pad.name} />
  })
}

export default pads;