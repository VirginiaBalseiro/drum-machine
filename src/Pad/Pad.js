import React, { Component } from 'react';

class Pad extends Component {
    constructor (props) {
        super(props);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.playAudio = this.playAudio.bind(this);
        this.displayName = this.displayName.bind(this);
        this.changeClassName = this.changeClassName.bind(this);
    }


      playAudio() {
          let audioclip = document.getElementById(this.props.letter);
          audioclip.play();
      }

      displayName(){
          document.getElementById('display').innerText = (this.props.name).replace(/_|-/gi, ' ').toUpperCase();
      }

     handleKeyDown(event) {
        if (event.which === this.props.keyCode) {
        this.playAudio();
        this.displayName();
        this.changeClassName();
        }
      }

      handleClick() {
          this.playAudio();
          this.displayName();
          this.changeClassName();
      }

      changeClassName(){
          const drumpad = document.getElementById(this.props.id);
          drumpad.classList.add("pressed");
          setTimeout(function(){
          drumpad.classList.remove("pressed");
          }, 200)
      }

    
      componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown)
      }

    render (){
        return (
        <div className="drum-pad" onClick={this.handleClick} id={this.props.id}>
        {this.props.letter}
        <audio className="clip" src={this.props.url} type={'audio/mp3'} id={this.props.letter}/>
        </div>
        
    )
        

    }
        
}

export default Pad;