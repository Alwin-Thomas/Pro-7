class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }
  hide(){
    this.title.hide();
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){

    //this.title.hide();
    //this.input1.hide();
    //this.button.hide();
    //this.input2.hide();
   
    //write code to change the background color here
     background("yellow")

    //write code to show a heading for showing the result of Quiz
    fill("black")
    textSize(30)
    text("Result of the Quize",320,30)

    //call getContestantInfo( ) here
    //Contestant.getPlayerInfo()

    //write condition to check if contestantInfor is not undefined
    
    
      fill("Blue")
      textSize(20)
      text("NOTE: Contestant who answered correct are highlited in green colour!",130,230)
      Contestant.getPlayerInfo()
      if(allContestants !== undefined){
      for(var plr in allContestants){
        var correctAns = "2"
        if(correctAns===allContestants[plr].answer){
          fill("Green")
          textSize(20)
          text(allContestants[plr].name +": " +allContestants[plr].answer,250,260)
        }
        else{
          fill("red")
          textSize(20)
          text(allContestants[plr].name +": " +allContestants[plr].answer,250,290)
        }
      }
    }
    //write code to add a note here
    //-----------
    //fill("Blue")
    //textSize(20)
    //text("NOTE: Contestant who answered correct are highlited in green colour!",130,230)
    //text("players" + allContestants, 30,30)
    //write code to highlight contest who answered correctly
    
  }

}
