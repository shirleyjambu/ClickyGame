import React, {Component} from 'react';
import flowers from "./../../flowers.json";
import Wrapper from "./../Wrapper";
import FlowerCard from "./../FlowerCard/flower";

class Game extends Component {
 
  state = {
    flowers : flowers,
    score :0,
    topScore : 0,
    clickedItems :[],
    message : ''
  }

  shuffle() {
    let flowersArr = this.state.flowers;
    let currentI = flowersArr.length;

    while (0!== currentI){
      let rI = Math.floor(Math.random() * currentI);
      currentI -= 1;

      //Swap the elements
      let tPh = flowersArr[currentI];
      flowersArr[currentI] = flowersArr[rI];
      flowersArr[rI] = tPh;
    }

    this.setState({flowers : flowersArr}); 
  }

  handleClick(id){
    
    if(!this.state.clickedItems.includes(id)){
      let tempArr = this.state.clickedItems;
      tempArr.push(id);

      if(tempArr.length === this.state.flowers.length){
        this.setState({
          clickedItems: [],
          score : 0,
          message : 'Game Over'
        });
      }else{
        this.setState({
          clickedItems: tempArr,
          score : this.state.score +1,
          message : 'Guessed Correct'
        });
      }
    }else{
      this.setState({
        topScore : this.state.score,
        score : 0,
        clickedItems : [],
        message : 'Oops, Try again'
      });
    }

    this.shuffle();
  }

  render() {
     return (
        <div>
          <nav className="text-center">
            <h1 className="title">Clicky Game</h1>
            <h4>
              <span>{this.state.message}</span>&nbsp;&nbsp;
              Score : <span>{this.state.score}</span>&nbsp;&nbsp;
              TopScore : <span>{this.state.topScore}</span>
            </h4>
          </nav>
          <Wrapper>  
          {this.state.flowers.map( flower =>
            <FlowerCard key={flower.id}
            name={flower.name}
            image={flower.image}
            onClick={() => this.handleClick(flower.id)}
            />
          )}
          </Wrapper>
        </div> 
    );
  }
}

export default Game;