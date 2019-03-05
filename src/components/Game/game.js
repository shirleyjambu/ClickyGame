import React, {Component} from 'react';
import flowers from "./../../flowers.json";
import Wrapper from "./../Wrapper";
import FlowerCard from "./../FlowerCard/flower";
import Display from "./display";

class Game extends Component {
 
  state = {
    flowers : flowers,
    score :0,
    topScore : 0,
    clickedItems :[],
    message : '',
    clsName : ''
  }

  shuffle() {
    let flowersArr = this.state.flowers;
    /*let currentI = flowersArr.length;

    while (0!== currentI){
      let rI = Math.floor(Math.random() * currentI);
      currentI -= 1;

      //Swap the elements
      let tPh = flowersArr[currentI];
      flowersArr[currentI] = flowersArr[rI];
      flowersArr[rI] = tPh;
    } */

    // The above can be replaced with ES6 
    flowersArr.sort (function(a, b) {
      return 0.5 - Math.random()});
    this.setState({flowers : flowersArr}); 
  }

  handleClick(id){
    
    const {clickedItems , flowers, topScore, score } = this.state;
    //try using the .filter method of array

    if(!clickedItems.includes(id)){
      let tempArr = clickedItems;
      tempArr.push(id);

      if(tempArr.length === flowers.length){
        this.setState({
          clickedItems: [],
          score : 0,
          message : 'Game Over',
          clsName : 'info'
        });
      }else{
        this.setState({
          clickedItems: tempArr,
          score : score +1,
          message : 'Guessed Correct',
          clsName : 'success'
        });
      }
    }else{
      this.setState({
        topScore : (score > topScore)?score:topScore,
        score : 0,
        clickedItems : [],
        message : 'Oops, Try again',
        clsName : 'danger'
      });
    }

    this.shuffle();
  }

  render() {
    const {flowers, message, score, topScore, clsName} = this.state;
     return (
        <div>
          <nav className="text-center">
            <h1 className="title">Clicky Game</h1>
            <h4>
              <div className="row">
                <Display clsName={clsName}>{message}</Display>
                <Display label='Score'>{score}</Display>
                <Display label='TopScore'>{topScore}</Display>
              </div>
              
            </h4>
          </nav>
          <Wrapper>  
          {flowers.map( flower =>
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