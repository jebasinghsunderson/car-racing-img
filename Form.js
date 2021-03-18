class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h1')
    title.html("Car Racing Game");
    title.position(windowWidth/2-200,50);

    this.input.position(windowWidth/2-500,windowHeight/2-70);
    this.button.position(windowWidth/2-500,windowHeight/2-30);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name+ " please wait for other players")
      this.greeting.position(windowWidth/2-100,windowHeight/2-100);
    });

  }
}
