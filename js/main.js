var game;
var score;
var soundOn=true;
window.onload = function(){
    if(screen.width > 1500){
        //desktop or laptop
        game=new Phaser.Game(480,640,Phaser.AUTO, "ph_game");
    } else{
        //mobile device
        game=new Phaser.Game(window.innerWidth,window.innerHeight,Phaser.AUTO,"ph_game");
    }
    game.state.add("StateMain", StateMain);
    game.state.add("StateOver", StateOver);
    game.state.add("StateTitle", StateTitle);
    game.state.start("StateTitle");
}