let DadOfWar;
let Satan;
let Billy;
let baitChoices;
let SatanYellsAtBilly;
let SatanThinking;
let BillyCrying;
let SatanConsolesHisSon;
let SatanHugsHisSon;
let CatchChester;
let CatchNemo;
let CatchHuman;

let baitSelected;

let timerTransition = 300;

let talkSnake = false;
let talkEcon = false;

let state = -1;
let nextState = -1;
let counter = 0;
let typed = "";

let story = "";

function preload() {
	DadOfWar = loadImage("assets/DadOfWar.jpg");
	Satan = loadImage("assets/Satan.png");
	Billy = loadImage("assets/billy.png");
	baitChoices = loadImage("assets/baitchoices.png");
	SatanYellsAtBilly = loadImage("assets/SatanYellsAtBilly.png");
	SatanThinking = loadImage("assets/SatanThinking.png");
	BillyCrying = loadImage("assets/babybillycrying.jpg");
	SatanConsolesHisSon = loadImage("assets/KratosConsolesHisSon.jpg");
	SatanHugsHisSon = loadImage("assets/SatanHugsHisSon.jpg");
	CatchChester = loadImage("assets/SatanAndBillyCatchChester.jpg");
	CatchNemo = loadImage("assets/SatanAndBillyCatchNemo.jpg");
	CatchHuman = loadImage("assets/SatanAndBillyCatchHuman.jpg");
}

function setup() {
  createCanvas(1024, 768);
	textFont("Helvetica");
	textSize(22);
	textAlign(CENTER);
}

function draw() {
	image(Satan, 200, 0);
  background(255);

	if( state == nextState){
		if( state == -1){
			image( DadOfWar, 0, 30);
			story= "Enter \"start\" to begin the game!";
			text( story, 0, 0, width, 150);
		}
		else if( state == 0){
			image( Satan, 200, 60);
			story= "Satan's son Billy has been having trouble in school due to bullying.\n" +
			"Satan has been away at work, so he doesn\'t have too much time with his son. He thought fishing might help them bond.";
			text( story, 0, 0, width, 150);

			counter++;

			if( counter == timerTransition){
				counter = 0;
				nextState = 1;
			}
		}
		else if( state == 1){
			image( Billy, 300, 200);
			story= "SATAN: Boy, we must fish to help the ecosystem. What say you?\n" +
			"BILLY: Bahhhhh. (Billy gives a feeling of unease).\n" +
			"SATAN: Boy, you will have fun! Have fun while you aren't milleniums old like your father! Now, I'll help you pick your bait!";
			text( story, 0, 0, width, 150);

			counter++;

			if( counter == timerTransition){
				counter = 0;
				nextState = 2;
			}
		}
		else if( state == 2){
			image( baitChoices, 280, 200);
			story= "Type in your choice of bait: \"cheeto\", \"worm\", or \"toe\"?";
			text( story, 0, 200, width, 150);
		}
		else if( state == 3){
			image( SatanYellsAtBilly, 200, 180);
			story= "SATAN: Uh...why not this one?\n" +
			"BILLY: Bah? (Billy is questioning the choice of bait).\n" +
			"SATAN: YOU DARE QUESTION ME BOY?\n" +
			"BILLY: (Does that goat scream that everyone knows).\n" +
			"SATAN: Sorry, boy, I have had a long day. Let's just try this bait.";
			text( story, 0, 0, width, 150);

			counter++;

			if( counter == timerTransition){
				counter = 0;
				nextState = 4;
			}
		}
		else if( state == 4){
			image( SatanThinking, 200, 85);

			if( talkEcon == true){
				story= "BILLY: Bahhh bahh bahh (Billy gives a huge speech about the economy. Satan will reaccess his stocks later.)\n";
			}
			else if( talkSnake == true){
				story= "BILLY: Bahbahbahbah (Billy talks about his pet snake, Voldemort. Not gonna lie, snakes are cool, but weird pets.)\n";
			}

			if( talkSnake == true && talkEcon == true){
				story += "Billy is warming up. Should Satan try talking about \"school\" next?";
			}
			else if( talkSnake == false && talkEcon == false){
				story= "30 minutes later...\n" +
				"Satan should try talking to his son. Should he try talking about \"school\", \"snake\", or the \"economy\"?";
			}
			else if( talkSnake == false){
				story += "Billy is warming up. Should Satan try talking about \"school\" or \"snake\" next?";
			}
			else if( talkEcon == false){
				story += "Billy is warming up. Should Satan try talking about \"school\" or \"economy\" next?";
			}
			text( story, 0, 0, width, 150);
		}
		else if( state == 5){
			image( SatanConsolesHisSon, 180, 190);
			story= "BILLY: Bah bah bah bah. (Billy talks about how he's getting bullied in school cause his dad is cool and he's not). \n" +
			"SATAN: Oh, boy, people shouldn't compare you to me. You're cool in your own way. The same thing happened to me in school with my Dad too.\n" +
			"BILLY: Bahhh? (Billy is surprised and taken aback).\n" +
			"SATAN: Really. I am proud of the man you're becoming...Billy.\n" +
			"This is such a beautiful moment. Should Satan hug his son, yes or no?";
			text( story, 0, 0, width, 200);
		}
		else if( state == 6){
			image( SatanHugsHisSon, 50, 95);
			story= "Satan and Billy hug. A father-son bond restored! So beautiful :')\n" +
			"Just as Satan and Billy finish hugging, Billy's fishing pole starts to tug.\n" +
			"Together, they reel it in and out comes...";
			text( story, 0, 0, width, 150);

			counter++;

			if( counter == timerTransition){
				counter = 0;
				if( baitSelected == 'cheeto'){
					nextState = 9;
				}
				else if( baitSelected == 'worm'){
					nextState = 10;
				}
				else if( baitSelected == 'toe'){
					nextState = 11;
				}
			}
		}
		else if( state == 7){
			image( BillyCrying, 200, 75);
			story= "You went straight to the school topic! Too soon! Billy is crying now. \n" +
			"GAME OVER!\n" +
			"Tip: Try warming him up by talking about other stuff first. Type in \"intro\" to start over";
			text( story, 0, 0, width, 150);
		}
		else if( state == 8){
			image( BillyCrying, 250, 90);
			story= "Dude you're a dick. Satan should have hugged his son! Now Billy is crying.\n" +
			"GAME OVER!\n" +
			"Tip: Try hugging Billy, you cold monster. Type in \"intro\" to start over";
			text( story, 0, 0, width, 150);
		}
		else if( state == 9){
			image( CatchChester, 270, 120);
			story= "Chester Cheetah! With him, Satan and Billy steal the Cheeto recipe and make their own million dollar chip business.\n" +
			"MILLIONAIRE WIN!\n" +
			"Enter \"intro\" to start the start the story over!";
			text( story, 0, 0, width, 150);
		}
		else if( state == 10){
			image( CatchNemo, 270, 120);
			story= "Nemo! Satan and Billy are definitely going to eat well for dinner!\n" +
			"NEMO WIN!\n" +
			"Enter \"intro\" to start the start the story over!";
			text( story, 0, 0, width, 150);
		}
		else if( state == 11){
			image( CatchHuman, 270, 120);
			story= "Some Random Guy! Now Billy has a new pet to raise! A new addition to the family!\n" +
			"SOME RANDOM GUY WIN!\n" +
			"Enter \"intro\" to start the start the story over!";
			text( story, 0, 0, width, 150);
		}
	}
	else{
		counter++;
		if( counter == 30){
			state = nextState;
			counter = 0;
		}
		let a = map(counter, 0, 30, 0, 255);
		tint(255, a);
		if( nextState == -1){
			image( DadOfWar, 0, 30);
		}
		else if( nextState == 0){
			image( Satan, 200, 60);
		}
		else if( nextState == 1){
			image( Billy, 300, 200);
		}
		else if( nextState == 2){
			image( baitChoices, 280, 200);
		}
		else if( nextState == 3){
			image( SatanYellsAtBilly, 200, 180);
		}
		else if( nextState == 4){
			image( SatanThinking, 200, 85);
		}
		else if( nextState == 5){
			image( SatanConsolesHisSon, 180, 190);
		}
		else if( nextState == 6){
			image( SatanHugsHisSon, 50, 95);
		}
		else if( nextState == 7){
			image( BillyCrying, 200, 75);
		}
		else if( nextState == 8){
			image( BillyCrying, 250, 90);
		}
		else if( nextState == 9){
			image( CatchChester, 270, 120);
		}
		else if( nextState == 10){
			image( CatchNemo, 270, 120);
		}
		else if( nextState == 11){
			image( CatchHuman, 270, 120);
		}
		tint(255, 255-a);

		if( nextState == -1){
			image( DadOfWar, 0, 30);
		}
		else if( nextState == 0){
			image( Satan, 200, 60);
		}
		else if( nextState == 1){
			image( Billy, 300, 200);
		}
		else if( nextState == 2){
			image( baitChoices, 280, 200);
		}
		else if( nextState == 3){
			image( SatanYellsAtBilly, 200, 180);
		}
		else if( nextState == 4){
			image( SatanThinking, 200, 85);
		}
		else if( nextState == 5){
			image( SatanConsolesHisSon, 180, 190);
		}
		else if( nextState == 6){
			image( SatanHugsHisSon, 50, 95);
		}
		else if( nextState == 7){
			image( BillyCrying, 200, 75);
		}
		else if( nextState == 8){
			image( BillyCrying, 250, 90);
		}
		else if( nextState == 9){
			image( CatchChester, 270, 120);
		}
		else if( nextState == 10){
			image( CatchNemo, 270, 120);
		}
		else if( nextState == 11){
			image( CatchHuman, 270, 120);
		}
	}
	text( typed, 0, 600, width, 30);
}


function keyPressed(){
	if( keyCode == BACKSPACE){
		typed = '';
	}
}


function keyTyped(){
	if(keyCode == RETURN){
		if( typed == 'intro'){
			talkEcon = false;
			talkSnake = false;
			baitSelected = '';
			typed = '';
			nextState = -1;
		}
		else if( typed == 'start' && state == -1){
			typed = '';
			nextState = 0;
		}
		else if( typed == 'cheeto' && state == 2){
			typed = '';
			nextState = 3;
			baitSelected = 'cheeto';
		}
		else if( typed == 'worm' && state == 2){
			typed = '';
			nextState = 3;
			baitSelected = 'worm';
		}
		else if( typed == 'toe' && state == 2){
			typed = '';
			nextState = 3;
			baitSelected = 'toe';
		}
		else if( typed == 'school' && state == 4 && (talkEcon == false || talkSnake == false)){
			typed = '';
			nextState = 7;
		}
		else if( typed == 'school' && state == 4 && (talkEcon == true && talkSnake == true)){
			typed = '';
			nextState = 5;
		}
		else if( typed == 'snake' && state == 4 && talkSnake == false){
			typed = '';
			nextState = 4;
			talkSnake = true;
		}
		else if( typed == 'economy' && state == 4 && talkEcon == false){
			typed = '';
			nextState = 4;
			talkEcon = true;
		}
		else if( typed == 'yes' && state == 5){
			typed = '';
			nextState = 6;
		}
		else if( typed == 'no' && state == 5){
			typed = '';
			nextState = 8;
		}
	}
	else if( keyCode != BACKSPACE){
		typed += key;
	}

}
