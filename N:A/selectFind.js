//Selectors

let start_val = 200;
let wager = 100;
let st_once = false; 
let start = true;
let exit = false;
let swapC = false;
let win = 0;
let loss = 0;
let tied = 0;




document.addEventListener("keydown", checkKeyPress, false);
let TIT = document.querySelector(".T-TIT");
let STAR = document.querySelector(".T-ART");

let pCard1 = document.querySelector(".P-C-L-I-A-1");
let pCard2 = document.querySelector(".P-C-L-I-A-2");
let pCard3 = document.querySelector(".P-C-L-I-A-3");
let pCard4 = document.querySelector(".P-C-L-I-A-4");
let pCard5 = document.querySelector(".P-C-L-I-A-5");

let cCard1 = document.querySelector(".C-C-L-I-A-1");
let cCard2 = document.querySelector(".C-C-L-I-A-2");
let cCard3 = document.querySelector(".C-C-L-I-A-3");
let cCard4 = document.querySelector(".C-C-L-I-A-4");
let cCard5 = document.querySelector(".C-C-L-I-A-5");


let Swap = document.querySelector(".num");
let SV = document.querySelector(".Swap");
let winLoss = document.querySelector('.winText');




//Deck
const deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52];

const shuffleDeck =  deck => {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    return deck;
}



function cardDraw(i,hand) {
    let count = 0;
    while(count < 5) {
        if(i >= 52) {
            shuffleDeck(deck);
            console.log(deck);
            i = 0;
        }
        hand[count] = deck[i]
        i++;
        count++;
    }
    return hand;
}


function compareFunction(a, b) {
    return a - b;
}


function printP_Hand(hand) {
    let i = 0;
    while (i < 5) {
        if (i == 0) {
            //Spades
            if(hand[i] == 1) {
                pCard1.setAttribute('src', "Cards/ace_of_spades.png");
            } 
            if(hand[i] == 2) {
                pCard1.setAttribute('src', 'Cards/2_of_spades.png');
            } 
            if(hand[i] == 3) {
                pCard1.setAttribute('src', "Cards/3_of_spades.png");
            } 
            if(hand[i] == 4) {
                pCard1.setAttribute('src', "Cards/4_of_spades.png");
            } 
            if(hand[i] == 5) {
                pCard1.setAttribute('src', "Cards/5_of_spades.png");
            }
            if(hand[i] == 6) {
                pCard1.setAttribute('src', "Cards/6_of_spades.png");
            }  
            if(hand[i] == 7) {
                pCard1.setAttribute('src', "Cards/7_of_spades.png");
            } 
            if(hand[i] == 8) {
                pCard1.setAttribute('src', "Cards/8_of_spades.png");
            } 
            if(hand[i] == 9) {
                pCard1.setAttribute('src', "Cards/9_of_spades.png");
            } 
            if(hand[i] == 10) {
                pCard1.setAttribute('src', "Cards/10_of_spades.png");
            } 
            if(hand[i] == 11) {
                pCard1.setAttribute('src', "Cards/jack_of_spades2.png");
            } 
            if(hand[i] == 12) {
                pCard1.setAttribute('src', "Cards/queen_of_spades2.png");
            } 
            if(hand[i] == 13) {
                pCard1.setAttribute('src', "Cards/king_of_spades2.png");
            }
            
            
            //Clubs

            if(hand[i] == 14) {
                pCard1.setAttribute('src', "Cards/ace_of_clubs.png");
            } 
            if(hand[i] == 15) {
                pCard1.setAttribute('src', "Cards/2_of_clubs.png");
            } 
            if(hand[i] == 16) {
                pCard1.setAttribute('src', "Cards/3_of_clubs.png");
            } 
            if(hand[i] == 17) {
                pCard1.setAttribute('src', "Cards/4_of_clubs.png");
            } 
            if(hand[i] == 18) {
                pCard1.setAttribute('src', "Cards/5_of_clubs.png");
            }
            if(hand[i] == 19) {
                pCard1.setAttribute('src', "Cards/6_of_clubs.png");
            }  
            if(hand[i] == 20) {
                pCard1.setAttribute('src', "Cards/7_of_clubs.png");
            } 
            if(hand[i] == 21) {
                pCard1.setAttribute('src', "Cards/8_of_clubs.png");
            } 
            if(hand[i] == 22) {
                pCard1.setAttribute('src', "Cards/9_of_clubs.png");
            } 
            if(hand[i] == 23) {
                pCard1.setAttribute('src', "Cards/10_of_clubs.png");
            } 
            if(hand[i] == 24) {
                pCard1.setAttribute('src', "Cards/jack_of_clubs2.png");
            } 
            if(hand[i] == 25) {
                pCard1.setAttribute('src', "Cards/queen_of_clubs2.png");
            } 
            if(hand[i] == 26) {
                pCard1.setAttribute('src', "Cards/king_of_clubs2.png");
            } 



            //Hearts
            if(hand[i] == 27) {
                pCard1.setAttribute('src', "Cards/ace_of_hearts.png");
            } 
            if(hand[i] == 28) {
                pCard1.setAttribute('src', "Cards/2_of_hearts.png");
            } 
            if(hand[i] == 29) {
                pCard1.setAttribute('src', "Cards/3_of_hearts.png");
            } 
            if(hand[i] == 30) {
                pCard1.setAttribute('src', "Cards/4_of_hearts.png");
            } 
            if(hand[i] == 31) {
                pCard1.setAttribute('src', "Cards/5_of_hearts.png");
            }
            if(hand[i] == 32) {
                pCard1.setAttribute('src', "Cards/6_of_hearts.png");
            }  
            if(hand[i] == 33) {
                pCard1.setAttribute('src', "Cards/7_of_hearts.png");
            } 
            if(hand[i] == 34) {
                pCard1.setAttribute('src', "Cards/8_of_hearts.png");
            } 
            if(hand[i] == 35) {
                pCard1.setAttribute('src', "Cards/9_of_hearts.png");
            } 
            if(hand[i] == 36) {
                pCard1.setAttribute('src', "Cards/10_of_hearts.png");
            } 
            if(hand[i] == 37) {
                pCard1.setAttribute('src', "Cards/jack_of_hearts2.png");
            } 
            if(hand[i] == 38) {
                pCard1.setAttribute('src', "Cards/queen_of_hearts2.png");
            } 
            if(hand[i] == 39) {
                pCard1.setAttribute('src', "Cards/king_of_hearts2.png");
            }
            
            
            //Diamonds

            if(hand[i] == 40) {
                pCard1.setAttribute('src', "Cards/ace_of_diamonds.png");
            } 
            if(hand[i] == 41) {
                pCard1.setAttribute('src', "Cards/2_of_diamonds.png");
            } 
            if(hand[i] == 42) {
                pCard1.setAttribute('src', "Cards/3_of_diamonds.png");
            } 
            if(hand[i] == 43) {
                pCard1.setAttribute('src', "Cards/4_of_diamonds.png");
            } 
            if(hand[i] == 44) {
                pCard1.setAttribute('src', "Cards/5_of_diamonds.png");
            }
            if(hand[i] == 45) {
                pCard1.setAttribute('src', "Cards/6_of_diamonds.png");
            }  
            if(hand[i] == 46) {
                pCard1.setAttribute('src', "Cards/7_of_diamonds.png");
            } 
            if(hand[i] == 47) {
                pCard1.setAttribute('src', "Cards/8_of_diamonds.png");
            } 
            if(hand[i] == 48) {
                pCard1.setAttribute('src', "Cards/9_of_diamonds.png");
            } 
            if(hand[i] == 49) {
                pCard1.setAttribute('src', "Cards/10_of_diamonds.png");
            } 
            if(hand[i] == 50) {
                pCard1.setAttribute('src', "Cards/jack_of_diamonds2.png");
            } 
            if(hand[i] == 51) {
                pCard1.setAttribute('src', "Cards/queen_of_diamonds2.png");
            } 
            if(hand[i] == 52) {
                pCard1.setAttribute('src', "Cards/king_of_diamonds2.png");
            } 
            i = 1;
        }




















        //Card 2
        if (i == 1) {
            //Spades
            if(hand[i] == 1) {
                pCard2.setAttribute('src', "Cards/ace_of_spades.png");
            } 
            if(hand[i] == 2) {
                pCard2.setAttribute('src', "Cards/2_of_spades.png");
            } 
            if(hand[i] == 3) {
                pCard2.setAttribute('src', "Cards/3_of_spades.png");
            } 
            if(hand[i] == 4) {
                pCard2.setAttribute('src', "Cards/4_of_spades.png");
            } 
            if(hand[i] == 5) {
                pCard2.setAttribute('src', "Cards/5_of_spades.png");
            }
            if(hand[i] == 6) {
                pCard2.setAttribute('src', "Cards/6_of_spades.png");
            }  
            if(hand[i] == 7) {
                pCard2.setAttribute('src', "Cards/7_of_spades.png");
            } 
            if(hand[i] == 8) {
                pCard2.setAttribute('src', "Cards/8_of_spades.png");
            } 
            if(hand[i] == 9) {
                pCard2.setAttribute('src', "Cards/9_of_spades.png");
            } 
            if(hand[i] == 10) {
                pCard2.setAttribute('src', "Cards/10_of_spades.png");
            } 
            if(hand[i] == 11) {
                pCard2.setAttribute('src', "Cards/jack_of_spades2.png");
            } 
            if(hand[i] == 12) {
                pCard2.setAttribute('src', "Cards/queen_of_spades2.png");
            } 
            if(hand[i] == 13) {
                pCard2.setAttribute('src', "Cards/king_of_spades2.png");
            }
            
            
            //Clubs
        
            if(hand[i] == 14) {
                pCard2.setAttribute('src', "Cards/ace_of_clubs.png");
            } 
            if(hand[i] == 15) {
                pCard2.setAttribute('src', "Cards/2_of_clubs.png");
            } 
            if(hand[i] == 16) {
                pCard2.setAttribute('src', "Cards/3_of_clubs.png");
            } 
            if(hand[i] == 17) {
                pCard2.setAttribute('src', "Cards/4_of_clubs.png");
            } 
            if(hand[i] == 18) {
                pCard2.setAttribute('src', "Cards/5_of_clubs.png");
            }
            if(hand[i] == 19) {
                pCard2.setAttribute('src', "Cards/6_of_clubs.png");
            }  
            if(hand[i] == 20) {
                pCard2.setAttribute('src', "Cards/7_of_clubs.png");
            } 
            if(hand[i] == 21) {
                pCard2.setAttribute('src', "Cards/8_of_clubs.png");
            } 
            if(hand[i] == 22) {
                pCard2.setAttribute('src', "Cards/9_of_clubs.png");
            } 
            if(hand[i] == 23) {
                pCard2.setAttribute('src', "Cards/10_of_clubs.png");
            } 
            if(hand[i] == 24) {
                pCard2.setAttribute('src', "Cards/jack_of_clubs2.png");
            } 
            if(hand[i] == 25) {
                pCard2.setAttribute('src', "Cards/queen_of_clubs2.png");
            } 
            if(hand[i] == 26) {
                pCard2.setAttribute('src', "Cards/king_of_clubs2.png");
            } 
        
        
        
            //Hearts
            if(hand[i] == 27) {
                pCard2.setAttribute('src', "Cards/ace_of_hearts.png");
            } 
            if(hand[i] == 28) {
                pCard2.setAttribute('src', "Cards/2_of_hearts.png");
            } 
            if(hand[i] == 29) {
                pCard2.setAttribute('src', "Cards/3_of_hearts.png");
            } 
            if(hand[i] == 30) {
                pCard2.setAttribute('src', "Cards/4_of_hearts.png");
            } 
            if(hand[i] == 31) {
                pCard2.setAttribute('src', "Cards/5_of_hearts.png");
            }
            if(hand[i] == 32) {
                pCard2.setAttribute('src', "Cards/6_of_hearts.png");
            }  
            if(hand[i] == 33) {
                pCard2.setAttribute('src', "Cards/7_of_hearts.png");
            } 
            if(hand[i] == 34) {
                pCard2.setAttribute('src', "Cards/8_of_hearts.png");
            } 
            if(hand[i] == 35) {
                pCard2.setAttribute('src', "Cards/9_of_hearts.png");
            } 
            if(hand[i] == 36) {
                pCard2.setAttribute('src', "Cards/10_of_hearts.png");
            } 
            if(hand[i] == 37) {
                pCard2.setAttribute('src', "Cards/jack_of_hearts2.png");
            } 
            if(hand[i] == 38) {
                pCard2.setAttribute('src', "Cards/queen_of_hearts2.png");
            } 
            if(hand[i] == 39) {
                pCard2.setAttribute('src', "Cards/king_of_hearts2.png");
            }
            
            
            //Diamonds
        
            if(hand[i] == 40) {
                pCard2.setAttribute('src', "Cards/ace_of_diamonds.png");
            } 
            if(hand[i] == 41) {
                pCard2.setAttribute('src', "Cards/2_of_diamonds.png");
            } 
            if(hand[i] == 42) {
                pCard2.setAttribute('src', "Cards/3_of_diamonds.png");
            } 
            if(hand[i] == 43) {
                pCard2.setAttribute('src', "Cards/4_of_diamonds.png");
            } 
            if(hand[i] == 44) {
                pCard2.setAttribute('src', "Cards/5_of_diamonds.png");
            }
            if(hand[i] == 45) {
                pCard2.setAttribute('src', "Cards/6_of_diamonds.png");
            }  
            if(hand[i] == 46) {
                pCard2.setAttribute('src', "Cards/7_of_diamonds.png");
            } 
            if(hand[i] == 47) {
                pCard2.setAttribute('src', "Cards/8_of_diamonds.png");
            } 
            if(hand[i] == 48) {
                pCard2.setAttribute('src', "Cards/9_of_diamonds.png");
            } 
            if(hand[i] == 49) {
                pCard2.setAttribute('src', "Cards/10_of_diamonds.png");
            } 
            if(hand[i] == 50) {
                pCard2.setAttribute('src', "Cards/jack_of_diamonds2.png");
            } 
            if(hand[i] == 51) {
                pCard2.setAttribute('src', "Cards/queen_of_diamonds2.png");
            } 
            if(hand[i] == 52) {
                pCard2.setAttribute('src', "Cards/king_of_diamonds2.png");
            } 
            i = 2;
        }






























        if (i == 2) {
            //Spades
            if(hand[i] == 1) {
                pCard3.setAttribute('src', "Cards/ace_of_spades.png");
            } 
            if(hand[i] == 2) {
                pCard3.setAttribute('src', "Cards/2_of_spades.png");
            } 
            if(hand[i] == 3) {
                pCard3.setAttribute('src', "Cards/3_of_spades.png");
            } 
            if(hand[i] == 4) {
                pCard3.setAttribute('src', "Cards/4_of_spades.png");
            } 
            if(hand[i] == 5) {
                pCard3.setAttribute('src', "Cards/5_of_spades.png");
            }
            if(hand[i] == 6) {
                pCard3.setAttribute('src', "Cards/6_of_spades.png");
            }  
            if(hand[i] == 7) {
                pCard3.setAttribute('src', "Cards/7_of_spades.png");
            } 
            if(hand[i] == 8) {
                pCard3.setAttribute('src', "Cards/8_of_spades.png");
            } 
            if(hand[i] == 9) {
                pCard3.setAttribute('src', "Cards/9_of_spades.png");
            } 
            if(hand[i] == 10) {
                pCard3.setAttribute('src', "Cards/10_of_spades.png");
            } 
            if(hand[i] == 11) {
                pCard3.setAttribute('src', "Cards/jack_of_spades2.png");
            } 
            if(hand[i] == 12) {
                pCard3.setAttribute('src', "Cards/queen_of_spades2.png");
            } 
            if(hand[i] == 13) {
                pCard3.setAttribute('src', "Cards/king_of_spades2.png");
            }
            
            
            //Clubs
        
            if(hand[i] == 14) {
                pCard3.setAttribute('src', "Cards/ace_of_clubs.png");
            } 
            if(hand[i] == 15) {
                pCard3.setAttribute('src', "Cards/2_of_clubs.png");
            } 
            if(hand[i] == 16) {
                pCard3.setAttribute('src', "Cards/3_of_clubs.png");
            } 
            if(hand[i] == 17) {
                pCard3.setAttribute('src', "Cards/4_of_clubs.png");
            } 
            if(hand[i] == 18) {
                pCard3.setAttribute('src', "Cards/5_of_clubs.png");
            }
            if(hand[i] == 19) {
                pCard3.setAttribute('src', "Cards/6_of_clubs.png");
            }  
            if(hand[i] == 20) {
                pCard3.setAttribute('src', "Cards/7_of_clubs.png");
            } 
            if(hand[i] == 21) {
                pCard3.setAttribute('src', "Cards/8_of_clubs.png");
            } 
            if(hand[i] == 22) {
                pCard3.setAttribute('src', "Cards/9_of_clubs.png");
            } 
            if(hand[i] == 23) {
                pCard3.setAttribute('src', "Cards/10_of_clubs.png");
            } 
            if(hand[i] == 24) {
                pCard3.setAttribute('src', "Cards/jack_of_clubs2.png");
            } 
            if(hand[i] == 25) {
                pCard3.setAttribute('src', "Cards/queen_of_clubs2.png");
            } 
            if(hand[i] == 26) {
                pCard3.setAttribute('src', "Cards/king_of_clubs2.png");
            } 
        
        
        
            //Hearts
            if(hand[i] == 27) {
                pCard3.setAttribute('src', "Cards/ace_of_hearts.png");
            } 
            if(hand[i] == 28) {
                pCard3.setAttribute('src', "Cards/2_of_hearts.png");
            } 
            if(hand[i] == 29) {
                pCard3.setAttribute('src', "Cards/3_of_hearts.png");
            } 
            if(hand[i] == 30) {
                pCard3.setAttribute('src', "Cards/4_of_hearts.png");
            } 
            if(hand[i] == 31) {
                pCard3.setAttribute('src', "Cards/5_of_hearts.png");
            }
            if(hand[i] == 32) {
                pCard3.setAttribute('src', "Cards/6_of_hearts.png");
            }  
            if(hand[i] == 33) {
                pCard3.setAttribute('src', "Cards/7_of_hearts.png");
            } 
            if(hand[i] == 34) {
                pCard3.setAttribute('src', "Cards/8_of_hearts.png");
            } 
            if(hand[i] == 35) {
                pCard3.setAttribute('src', "Cards/9_of_hearts.png");
            } 
            if(hand[i] == 36) {
                pCard3.setAttribute('src', "Cards/10_of_hearts.png");
            } 
            if(hand[i] == 37) {
                pCard3.setAttribute('src', "Cards/jack_of_hearts2.png");
            } 
            if(hand[i] == 38) {
                pCard3.setAttribute('src', "Cards/queen_of_hearts2.png");
            } 
            if(hand[i] == 39) {
                pCard3.setAttribute('src', "Cards/king_of_hearts2.png");
            }
            
            
            //Diamonds
        
            if(hand[i] == 40) {
                pCard3.setAttribute('src', "Cards/ace_of_diamonds.png");
            } 
            if(hand[i] == 41) {
                pCard3.setAttribute('src', "Cards/2_of_diamonds.png");
            } 
            if(hand[i] == 42) {
                pCard3.setAttribute('src', "Cards/3_of_diamonds.png");
            } 
            if(hand[i] == 43) {
                pCard3.setAttribute('src', "Cards/4_of_diamonds.png");
            } 
            if(hand[i] == 44) {
                pCard3.setAttribute('src', "Cards/5_of_diamonds.png");
            }
            if(hand[i] == 45) {
                pCard3.setAttribute('src', "Cards/6_of_diamonds.png");
            }  
            if(hand[i] == 46) {
                pCard3.setAttribute('src', "Cards/7_of_diamonds.png");
            } 
            if(hand[i] == 47) {
                pCard3.setAttribute('src', "Cards/8_of_diamonds.png");
            } 
            if(hand[i] == 48) {
                pCard3.setAttribute('src', "Cards/9_of_diamonds.png");
            } 
            if(hand[i] == 49) {
                pCard3.setAttribute('src', "Cards/10_of_diamonds.png");
            } 
            if(hand[i] == 50) {
                pCard3.setAttribute('src', "Cards/jack_of_diamonds2.png");
            } 
            if(hand[i] == 51) {
                pCard3.setAttribute('src', "Cards/queen_of_diamonds2.png");
            } 
            if(hand[i] == 52) {
                pCard3.setAttribute('src', "Cards/king_of_diamonds2.png");
            } 
            i = 3;
        }


































        if (i == 3) {
            //Spades
            if(hand[i] == 1) {
                pCard4.setAttribute('src', "Cards/ace_of_spades.png");
            } 
            if(hand[i] == 2) {
                pCard4.setAttribute('src', "Cards/2_of_spades.png");
            } 
            if(hand[i] == 3) {
                pCard4.setAttribute('src', "Cards/3_of_spades.png");
            } 
            if(hand[i] == 4) {
                pCard4.setAttribute('src', "Cards/4_of_spades.png");
            } 
            if(hand[i] == 5) {
                pCard4.setAttribute('src', "Cards/5_of_spades.png");
            }
            if(hand[i] == 6) {
                pCard4.setAttribute('src', "Cards/6_of_spades.png");
            }  
            if(hand[i] == 7) {
                pCard4.setAttribute('src', "Cards/7_of_spades.png");
            } 
            if(hand[i] == 8) {
                pCard4.setAttribute('src', "Cards/8_of_spades.png");
            } 
            if(hand[i] == 9) {
                pCard4.setAttribute('src', "Cards/9_of_spades.png");
            } 
            if(hand[i] == 10) {
                pCard4.setAttribute('src', "Cards/10_of_spades.png");
            } 
            if(hand[i] == 11) {
                pCard4.setAttribute('src', "Cards/jack_of_spades2.png");
            } 
            if(hand[i] == 12) {
                pCard4.setAttribute('src', "Cards/queen_of_spades2.png");
            } 
            if(hand[i] == 13) {
                pCard4.setAttribute('src', "Cards/king_of_spades2.png");
            }
            
            
            //Clubs
        
            if(hand[i] == 14) {
                pCard4.setAttribute('src', "Cards/ace_of_clubs.png");
            } 
            if(hand[i] == 15) {
                pCard4.setAttribute('src', "Cards/2_of_clubs.png");
            } 
            if(hand[i] == 16) {
                pCard4.setAttribute('src', "Cards/3_of_clubs.png");
            } 
            if(hand[i] == 17) {
                pCard4.setAttribute('src', "Cards/4_of_clubs.png");
            } 
            if(hand[i] == 18) {
                pCard4.setAttribute('src', "Cards/5_of_clubs.png");
            }
            if(hand[i] == 19) {
                pCard4.setAttribute('src', "Cards/6_of_clubs.png");
            }  
            if(hand[i] == 20) {
                pCard4.setAttribute('src', "Cards/7_of_clubs.png");
            } 
            if(hand[i] == 21) {
                pCard4.setAttribute('src', "Cards/8_of_clubs.png");
            } 
            if(hand[i] == 22) {
                pCard4.setAttribute('src', "Cards/9_of_clubs.png");
            } 
            if(hand[i] == 23) {
                pCard4.setAttribute('src', "Cards/10_of_clubs.png");
            } 
            if(hand[i] == 24) {
                pCard4.setAttribute('src', "Cards/jack_of_clubs2.png");
            } 
            if(hand[i] == 25) {
                pCard4.setAttribute('src', "Cards/queen_of_clubs2.png");
            } 
            if(hand[i] == 26) {
                pCard4.setAttribute('src', "Cards/king_of_clubs2.png");
            } 
        
        
        
            //Hearts
            if(hand[i] == 27) {
                pCard4.setAttribute('src', "Cards/ace_of_hearts.png");
            } 
            if(hand[i] == 28) {
                pCard4.setAttribute('src', "Cards/2_of_hearts.png");
            } 
            if(hand[i] == 29) {
                pCard4.setAttribute('src', "Cards/3_of_hearts.png");
            } 
            if(hand[i] == 30) {
                pCard4.setAttribute('src', "Cards/4_of_hearts.png");
            } 
            if(hand[i] == 31) {
                pCard4.setAttribute('src', "Cards/5_of_hearts.png");
            }
            if(hand[i] == 32) {
                pCard4.setAttribute('src', "Cards/6_of_hearts.png");
            }  
            if(hand[i] == 33) {
                pCard4.setAttribute('src', "Cards/7_of_hearts.png");
            } 
            if(hand[i] == 34) {
                pCard4.setAttribute('src', "Cards/8_of_hearts.png");
            } 
            if(hand[i] == 35) {
                pCard4.setAttribute('src', "Cards/9_of_hearts.png");
            } 
            if(hand[i] == 36) {
                pCard4.setAttribute('src', "Cards/10_of_hearts.png");
            } 
            if(hand[i] == 37) {
                pCard4.setAttribute('src', "Cards/jack_of_hearts2.png");
            } 
            if(hand[i] == 38) {
                pCard4.setAttribute('src', "Cards/queen_of_hearts2.png");
            } 
            if(hand[i] == 39) {
                pCard4.setAttribute('src', "Cards/king_of_hearts2.png");
            }
            
            
            //Diamonds
        
            if(hand[i] == 40) {
                pCard4.setAttribute('src', "Cards/ace_of_diamonds.png");
            } 
            if(hand[i] == 41) {
                pCard4.setAttribute('src', "Cards/2_of_diamonds.png");
            } 
            if(hand[i] == 42) {
                pCard4.setAttribute('src', "Cards/3_of_diamonds.png");
            } 
            if(hand[i] == 43) {
                pCard4.setAttribute('src', "Cards/4_of_diamonds.png");
            } 
            if(hand[i] == 44) {
                pCard4.setAttribute('src', "Cards/5_of_diamonds.png");
            }
            if(hand[i] == 45) {
                pCard4.setAttribute('src', "Cards/6_of_diamonds.png");
            }  
            if(hand[i] == 46) {
                pCard4.setAttribute('src', "Cards/7_of_diamonds.png");
            } 
            if(hand[i] == 47) {
                pCard4.setAttribute('src', "Cards/8_of_diamonds.png");
            } 
            if(hand[i] == 48) {
                pCard4.setAttribute('src', "Cards/9_of_diamonds.png");
            } 
            if(hand[i] == 49) {
                pCard4.setAttribute('src', "Cards/10_of_diamonds.png");
            } 
            if(hand[i] == 50) {
                pCard4.setAttribute('src', "Cards/jack_of_diamonds2.png");
            } 
            if(hand[i] == 51) {
                pCard4.setAttribute('src', "Cards/queen_of_diamonds2.png");
            } 
            if(hand[i] == 52) {
                pCard4.setAttribute('src', "Cards/king_of_diamonds2.png");
            } 
            i = 4;
        }
































        if (i == 4) {
            //Spades
            if(hand[i] == 1) {
                pCard5.setAttribute('src', "Cards/ace_of_spades.png");
            } 
            if(hand[i] == 2) {
                pCard5.setAttribute('src', "Cards/2_of_spades.png");
            } 
            if(hand[i] == 3) {
                pCard5.setAttribute('src', "Cards/3_of_spades.png");
            } 
            if(hand[i] == 4) {
                pCard5.setAttribute('src', "Cards/4_of_spades.png");
            } 
            if(hand[i] == 5) {
                pCard5.setAttribute('src', "Cards/5_of_spades.png");
            }
            if(hand[i] == 6) {
                pCard5.setAttribute('src', "Cards/6_of_spades.png");
            }  
            if(hand[i] == 7) {
                pCard5.setAttribute('src', "Cards/7_of_spades.png");
            } 
            if(hand[i] == 8) {
                pCard5.setAttribute('src', "Cards/8_of_spades.png");
            } 
            if(hand[i] == 9) {
                pCard5.setAttribute('src', "Cards/9_of_spades.png");
            } 
            if(hand[i] == 10) {
                pCard5.setAttribute('src', "Cards/10_of_spades.png");
            } 
            if(hand[i] == 11) {
                pCard5.setAttribute('src', "Cards/jack_of_spades2.png");
            } 
            if(hand[i] == 12) {
                pCard5.setAttribute('src', "Cards/queen_of_spades2.png");
            } 
            if(hand[i] == 13) {
                pCard5.setAttribute('src', "Cards/king_of_spades2.png");
            }
            
            
            //Clubs
        
            if(hand[i] == 14) {
                pCard5.setAttribute('src', "Cards/ace_of_clubs.png");
            } 
            if(hand[i] == 15) {
                pCard5.setAttribute('src', "Cards/2_of_clubs.png");
            } 
            if(hand[i] == 16) {
                pCard5.setAttribute('src', "Cards/3_of_clubs.png");
            } 
            if(hand[i] == 17) {
                pCard5.setAttribute('src', "Cards/4_of_clubs.png");
            } 
            if(hand[i] == 18) {
                pCard5.setAttribute('src', "Cards/5_of_clubs.png");
            }
            if(hand[i] == 19) {
                pCard5.setAttribute('src', "Cards/6_of_clubs.png");
            }  
            if(hand[i] == 20) {
                pCard5.setAttribute('src', "Cards/7_of_clubs.png");
            } 
            if(hand[i] == 21) {
                pCard5.setAttribute('src', "Cards/8_of_clubs.png");
            } 
            if(hand[i] == 22) {
                pCard5.setAttribute('src', "Cards/9_of_clubs.png");
            } 
            if(hand[i] == 23) {
                pCard5.setAttribute('src', "Cards/10_of_clubs.png");
            } 
            if(hand[i] == 24) {
                pCard5.setAttribute('src', "Cards/jack_of_clubs2.png");
            } 
            if(hand[i] == 25) {
                pCard5.setAttribute('src', "Cards/queen_of_clubs2.png");
            } 
            if(hand[i] == 26) {
                pCard5.setAttribute('src', "Cards/king_of_clubs2.png");
            } 
        
        
        
            //Hearts
            if(hand[i] == 27) {
                pCard5.setAttribute('src', "Cards/ace_of_hearts.png");
            } 
            if(hand[i] == 28) {
                pCard5.setAttribute('src', "Cards/2_of_hearts.png");
            } 
            if(hand[i] == 29) {
                pCard5.setAttribute('src', "Cards/3_of_hearts.png");
            } 
            if(hand[i] == 30) {
                pCard5.setAttribute('src', "Cards/4_of_hearts.png");
            } 
            if(hand[i] == 31) {
                pCard5.setAttribute('src', "Cards/5_of_hearts.png");
            }
            if(hand[i] == 32) {
                pCard5.setAttribute('src', "Cards/6_of_hearts.png");
            }  
            if(hand[i] == 33) {
                pCard5.setAttribute('src', "Cards/7_of_hearts.png");
            } 
            if(hand[i] == 34) {
                pCard5.setAttribute('src', "Cards/8_of_hearts.png");
            } 
            if(hand[i] == 35) {
                pCard5.setAttribute('src', "Cards/9_of_hearts.png");
            } 
            if(hand[i] == 36) {
                pCard5.setAttribute('src', "Cards/10_of_hearts.png");
            } 
            if(hand[i] == 37) {
                pCard5.setAttribute('src', "Cards/jack_of_hearts2.png");
            } 
            if(hand[i] == 38) {
                pCard5.setAttribute('src', "Cards/queen_of_hearts2.png");
            } 
            if(hand[i] == 39) {
                pCard5.setAttribute('src', "Cards/king_of_hearts2.png");
            }
            
            
            //Diamonds
        
            if(hand[i] == 40) {
                pCard5.setAttribute('src', "Cards/ace_of_diamonds.png");
            } 
            if(hand[i] == 41) {
                pCard5.setAttribute('src', "Cards/2_of_diamonds.png");
            } 
            if(hand[i] == 42) {
                pCard5.setAttribute('src', "Cards/3_of_diamonds.png");
            } 
            if(hand[i] == 43) {
                pCard5.setAttribute('src', "Cards/4_of_diamonds.png");
            } 
            if(hand[i] == 44) {
                pCard5.setAttribute('src', "Cards/5_of_diamonds.png");
            }
            if(hand[i] == 45) {
                pCard5.setAttribute('src', "Cards/6_of_diamonds.png");
            }  
            if(hand[i] == 46) {
                pCard5.setAttribute('src', "Cards/7_of_diamonds.png");
            } 
            if(hand[i] == 47) {
                pCard5.setAttribute('src', "Cards/8_of_diamonds.png");
            } 
            if(hand[i] == 48) {
                pCard5.setAttribute('src', "Cards/9_of_diamonds.png");
            } 
            if(hand[i] == 49) {
                pCard5.setAttribute('src', "Cards/10_of_diamonds.png");
            } 
            if(hand[i] == 50) {
                pCard5.setAttribute('src', "Cards/jack_of_diamonds2.png");
            } 
            if(hand[i] == 51) {
                pCard5.setAttribute('src', "Cards/queen_of_diamonds2.png");
            } 
            if(hand[i] == 52) {
                pCard5.setAttribute('src', "Cards/king_of_diamonds2.png");
            } 
            i = 5;
        }
        
    }
}










function printC_Hand(hand) {
    let i = 0;
    while (i < 5) {
        if (i == 0) {
            //Spades
            if(hand[i] == 1) {
                cCard1.setAttribute('src', "Cards/ace_of_spades.png");
            } 
            if(hand[i] == 2) {
                cCard1.setAttribute('src', 'Cards/2_of_spades.png');
            } 
            if(hand[i] == 3) {
                cCard1.setAttribute('src', "Cards/3_of_spades.png");
            } 
            if(hand[i] == 4) {
                cCard1.setAttribute('src', "Cards/4_of_spades.png");
            } 
            if(hand[i] == 5) {
                cCard1.setAttribute('src', "Cards/5_of_spades.png");
            }
            if(hand[i] == 6) {
                cCard1.setAttribute('src', "Cards/6_of_spades.png");
            }  
            if(hand[i] == 7) {
                cCard1.setAttribute('src', "Cards/7_of_spades.png");
            } 
            if(hand[i] == 8) {
                cCard1.setAttribute('src', "Cards/8_of_spades.png");
            } 
            if(hand[i] == 9) {
                cCard1.setAttribute('src', "Cards/9_of_spades.png");
            } 
            if(hand[i] == 10) {
                cCard1.setAttribute('src', "Cards/10_of_spades.png");
            } 
            if(hand[i] == 11) {
                cCard1.setAttribute('src', "Cards/jack_of_spades2.png");
            } 
            if(hand[i] == 12) {
                cCard1.setAttribute('src', "Cards/queen_of_spades2.png");
            } 
            if(hand[i] == 13) {
                cCard1.setAttribute('src', "Cards/king_of_spades2.png");
            }
            
            
            //Clubs

            if(hand[i] == 14) {
                cCard1.setAttribute('src', "Cards/ace_of_clubs.png");
            } 
            if(hand[i] == 15) {
                cCard1.setAttribute('src', "Cards/2_of_clubs.png");
            } 
            if(hand[i] == 16) {
                cCard1.setAttribute('src', "Cards/3_of_clubs.png");
            } 
            if(hand[i] == 17) {
                cCard1.setAttribute('src', "Cards/4_of_clubs.png");
            } 
            if(hand[i] == 18) {
                cCard1.setAttribute('src', "Cards/5_of_clubs.png");
            }
            if(hand[i] == 19) {
                cCard1.setAttribute('src', "Cards/6_of_clubs.png");
            }  
            if(hand[i] == 20) {
                cCard1.setAttribute('src', "Cards/7_of_clubs.png");
            } 
            if(hand[i] == 21) {
                cCard1.setAttribute('src', "Cards/8_of_clubs.png");
            } 
            if(hand[i] == 22) {
                cCard1.setAttribute('src', "Cards/9_of_clubs.png");
            } 
            if(hand[i] == 23) {
                cCard1.setAttribute('src', "Cards/10_of_clubs.png");
            } 
            if(hand[i] == 24) {
                cCard1.setAttribute('src', "Cards/jack_of_clubs2.png");
            } 
            if(hand[i] == 25) {
                cCard1.setAttribute('src', "Cards/queen_of_clubs2.png");
            } 
            if(hand[i] == 26) {
                cCard1.setAttribute('src', "Cards/king_of_clubs2.png");
            } 



            //Hearts
            if(hand[i] == 27) {
                cCard1.setAttribute('src', "Cards/ace_of_hearts.png");
            } 
            if(hand[i] == 28) {
                cCard1.setAttribute('src', "Cards/2_of_hearts.png");
            } 
            if(hand[i] == 29) {
                cCard1.setAttribute('src', "Cards/3_of_hearts.png");
            } 
            if(hand[i] == 30) {
                cCard1.setAttribute('src', "Cards/4_of_hearts.png");
            } 
            if(hand[i] == 31) {
                cCard1.setAttribute('src', "Cards/5_of_hearts.png");
            }
            if(hand[i] == 32) {
                cCard1.setAttribute('src', "Cards/6_of_hearts.png");
            }  
            if(hand[i] == 33) {
                cCard1.setAttribute('src', "Cards/7_of_hearts.png");
            } 
            if(hand[i] == 34) {
                cCard1.setAttribute('src', "Cards/8_of_hearts.png");
            } 
            if(hand[i] == 35) {
                cCard1.setAttribute('src', "Cards/9_of_hearts.png");
            } 
            if(hand[i] == 36) {
                cCard1.setAttribute('src', "Cards/10_of_hearts.png");
            } 
            if(hand[i] == 37) {
                cCard1.setAttribute('src', "Cards/jack_of_hearts2.png");
            } 
            if(hand[i] == 38) {
                cCard1.setAttribute('src', "Cards/queen_of_hearts2.png");
            } 
            if(hand[i] == 39) {
                cCard1.setAttribute('src', "Cards/king_of_hearts2.png");
            }
            
            
            //Diamonds

            if(hand[i] == 40) {
                cCard1.setAttribute('src', "Cards/ace_of_diamonds.png");
            } 
            if(hand[i] == 41) {
                cCard1.setAttribute('src', "Cards/2_of_diamonds.png");
            } 
            if(hand[i] == 42) {
                cCard1.setAttribute('src', "Cards/3_of_diamonds.png");
            } 
            if(hand[i] == 43) {
                cCard1.setAttribute('src', "Cards/4_of_diamonds.png");
            } 
            if(hand[i] == 44) {
                cCard1.setAttribute('src', "Cards/5_of_diamonds.png");
            }
            if(hand[i] == 45) {
                cCard1.setAttribute('src', "Cards/6_of_diamonds.png");
            }  
            if(hand[i] == 46) {
                cCard1.setAttribute('src', "Cards/7_of_diamonds.png");
            } 
            if(hand[i] == 47) {
                cCard1.setAttribute('src', "Cards/8_of_diamonds.png");
            } 
            if(hand[i] == 48) {
                cCard1.setAttribute('src', "Cards/9_of_diamonds.png");
            } 
            if(hand[i] == 49) {
                cCard1.setAttribute('src', "Cards/10_of_diamonds.png");
            } 
            if(hand[i] == 50) {
                cCard1.setAttribute('src', "Cards/jack_of_diamonds2.png");
            } 
            if(hand[i] == 51) {
                cCard1.setAttribute('src', "Cards/queen_of_diamonds2.png");
            } 
            if(hand[i] == 52) {
                cCard1.setAttribute('src', "Cards/king_of_diamonds2.png");
            } 
            i = 1;
        }




















        //Card 2
        if (i == 1) {
            //Spades
            if(hand[i] == 1) {
                cCard2.setAttribute('src', "Cards/ace_of_spades.png");
            } 
            if(hand[i] == 2) {
                cCard2.setAttribute('src', "Cards/2_of_spades.png");
            } 
            if(hand[i] == 3) {
                cCard2.setAttribute('src', "Cards/3_of_spades.png");
            } 
            if(hand[i] == 4) {
                cCard2.setAttribute('src', "Cards/4_of_spades.png");
            } 
            if(hand[i] == 5) {
                cCard2.setAttribute('src', "Cards/5_of_spades.png");
            }
            if(hand[i] == 6) {
                cCard2.setAttribute('src', "Cards/6_of_spades.png");
            }  
            if(hand[i] == 7) {
                cCard2.setAttribute('src', "Cards/7_of_spades.png");
            } 
            if(hand[i] == 8) {
                cCard2.setAttribute('src', "Cards/8_of_spades.png");
            } 
            if(hand[i] == 9) {
                cCard2.setAttribute('src', "Cards/9_of_spades.png");
            } 
            if(hand[i] == 10) {
                cCard2.setAttribute('src', "Cards/10_of_spades.png");
            } 
            if(hand[i] == 11) {
                cCard2.setAttribute('src', "Cards/jack_of_spades2.png");
            } 
            if(hand[i] == 12) {
                cCard2.setAttribute('src', "Cards/queen_of_spades2.png");
            } 
            if(hand[i] == 13) {
                cCard2.setAttribute('src', "Cards/king_of_spades2.png");
            }
            
            
            //Clubs
        
            if(hand[i] == 14) {
                cCard2.setAttribute('src', "Cards/ace_of_clubs.png");
            } 
            if(hand[i] == 15) {
                cCard2.setAttribute('src', "Cards/2_of_clubs.png");
            } 
            if(hand[i] == 16) {
                cCard2.setAttribute('src', "Cards/3_of_clubs.png");
            } 
            if(hand[i] == 17) {
                cCard2.setAttribute('src', "Cards/4_of_clubs.png");
            } 
            if(hand[i] == 18) {
                cCard2.setAttribute('src', "Cards/5_of_clubs.png");
            }
            if(hand[i] == 19) {
                cCard2.setAttribute('src', "Cards/6_of_clubs.png");
            }  
            if(hand[i] == 20) {
                cCard2.setAttribute('src', "Cards/7_of_clubs.png");
            } 
            if(hand[i] == 21) {
                cCard2.setAttribute('src', "Cards/8_of_clubs.png");
            } 
            if(hand[i] == 22) {
                cCard2.setAttribute('src', "Cards/9_of_clubs.png");
            } 
            if(hand[i] == 23) {
                cCard2.setAttribute('src', "Cards/10_of_clubs.png");
            } 
            if(hand[i] == 24) {
                cCard2.setAttribute('src', "Cards/jack_of_clubs2.png");
            } 
            if(hand[i] == 25) {
                cCard2.setAttribute('src', "Cards/queen_of_clubs2.png");
            } 
            if(hand[i] == 26) {
                cCard2.setAttribute('src', "Cards/king_of_clubs2.png");
            } 
        
        
        
            //Hearts
            if(hand[i] == 27) {
                cCard2.setAttribute('src', "Cards/ace_of_hearts.png");
            } 
            if(hand[i] == 28) {
                cCard2.setAttribute('src', "Cards/2_of_hearts.png");
            } 
            if(hand[i] == 29) {
                cCard2.setAttribute('src', "Cards/3_of_hearts.png");
            } 
            if(hand[i] == 30) {
                cCard2.setAttribute('src', "Cards/4_of_hearts.png");
            } 
            if(hand[i] == 31) {
                cCard2.setAttribute('src', "Cards/5_of_hearts.png");
            }
            if(hand[i] == 32) {
                cCard2.setAttribute('src', "Cards/6_of_hearts.png");
            }  
            if(hand[i] == 33) {
                cCard2.setAttribute('src', "Cards/7_of_hearts.png");
            } 
            if(hand[i] == 34) {
                cCard2.setAttribute('src', "Cards/8_of_hearts.png");
            } 
            if(hand[i] == 35) {
                cCard2.setAttribute('src', "Cards/9_of_hearts.png");
            } 
            if(hand[i] == 36) {
                cCard2.setAttribute('src', "Cards/10_of_hearts.png");
            } 
            if(hand[i] == 37) {
                cCard2.setAttribute('src', "Cards/jack_of_hearts2.png");
            } 
            if(hand[i] == 38) {
                cCard2.setAttribute('src', "Cards/queen_of_hearts2.png");
            } 
            if(hand[i] == 39) {
                cCard2.setAttribute('src', "Cards/king_of_hearts2.png");
            }
            
            
            //Diamonds
        
            if(hand[i] == 40) {
                cCard2.setAttribute('src', "Cards/ace_of_diamonds.png");
            } 
            if(hand[i] == 41) {
                cCard2.setAttribute('src', "Cards/2_of_diamonds.png");
            } 
            if(hand[i] == 42) {
                cCard2.setAttribute('src', "Cards/3_of_diamonds.png");
            } 
            if(hand[i] == 43) {
                cCard2.setAttribute('src', "Cards/4_of_diamonds.png");
            } 
            if(hand[i] == 44) {
                cCard2.setAttribute('src', "Cards/5_of_diamonds.png");
            }
            if(hand[i] == 45) {
                cCard2.setAttribute('src', "Cards/6_of_diamonds.png");
            }  
            if(hand[i] == 46) {
                cCard2.setAttribute('src', "Cards/7_of_diamonds.png");
            } 
            if(hand[i] == 47) {
                cCard2.setAttribute('src', "Cards/8_of_diamonds.png");
            } 
            if(hand[i] == 48) {
                cCard2.setAttribute('src', "Cards/9_of_diamonds.png");
            } 
            if(hand[i] == 49) {
                cCard2.setAttribute('src', "Cards/10_of_diamonds.png");
            } 
            if(hand[i] == 50) {
                cCard2.setAttribute('src', "Cards/jack_of_diamonds2.png");
            } 
            if(hand[i] == 51) {
                cCard2.setAttribute('src', "Cards/queen_of_diamonds2.png");
            } 
            if(hand[i] == 52) {
                cCard2.setAttribute('src', "Cards/king_of_diamonds2.png");
            } 
            i = 2;
        }






























        if (i == 2) {
            //Spades
            if(hand[i] == 1) {
                cCard3.setAttribute('src', "Cards/ace_of_spades.png");
            } 
            if(hand[i] == 2) {
                cCard3.setAttribute('src', "Cards/2_of_spades.png");
            } 
            if(hand[i] == 3) {
                cCard3.setAttribute('src', "Cards/3_of_spades.png");
            } 
            if(hand[i] == 4) {
                cCard3.setAttribute('src', "Cards/4_of_spades.png");
            } 
            if(hand[i] == 5) {
                cCard3.setAttribute('src', "Cards/5_of_spades.png");
            }
            if(hand[i] == 6) {
                cCard3.setAttribute('src', "Cards/6_of_spades.png");
            }  
            if(hand[i] == 7) {
                cCard3.setAttribute('src', "Cards/7_of_spades.png");
            } 
            if(hand[i] == 8) {
                cCard3.setAttribute('src', "Cards/8_of_spades.png");
            } 
            if(hand[i] == 9) {
                cCard3.setAttribute('src', "Cards/9_of_spades.png");
            } 
            if(hand[i] == 10) {
                cCard3.setAttribute('src', "Cards/10_of_spades.png");
            } 
            if(hand[i] == 11) {
                cCard3.setAttribute('src', "Cards/jack_of_spades2.png");
            } 
            if(hand[i] == 12) {
                cCard3.setAttribute('src', "Cards/queen_of_spades2.png");
            } 
            if(hand[i] == 13) {
                cCard3.setAttribute('src', "Cards/king_of_spades2.png");
            }
            
            
            //Clubs
        
            if(hand[i] == 14) {
                cCard3.setAttribute('src', "Cards/ace_of_clubs.png");
            } 
            if(hand[i] == 15) {
                cCard3.setAttribute('src', "Cards/2_of_clubs.png");
            } 
            if(hand[i] == 16) {
                cCard3.setAttribute('src', "Cards/3_of_clubs.png");
            } 
            if(hand[i] == 17) {
                cCard3.setAttribute('src', "Cards/4_of_clubs.png");
            } 
            if(hand[i] == 18) {
                cCard3.setAttribute('src', "Cards/5_of_clubs.png");
            }
            if(hand[i] == 19) {
                cCard3.setAttribute('src', "Cards/6_of_clubs.png");
            }  
            if(hand[i] == 20) {
                cCard3.setAttribute('src', "Cards/7_of_clubs.png");
            } 
            if(hand[i] == 21) {
                cCard3.setAttribute('src', "Cards/8_of_clubs.png");
            } 
            if(hand[i] == 22) {
                cCard3.setAttribute('src', "Cards/9_of_clubs.png");
            } 
            if(hand[i] == 23) {
                cCard3.setAttribute('src', "Cards/10_of_clubs.png");
            } 
            if(hand[i] == 24) {
                cCard3.setAttribute('src', "Cards/jack_of_clubs2.png");
            } 
            if(hand[i] == 25) {
                cCard3.setAttribute('src', "Cards/queen_of_clubs2.png");
            } 
            if(hand[i] == 26) {
                cCard3.setAttribute('src', "Cards/king_of_clubs2.png");
            } 
        
        
        
            //Hearts
            if(hand[i] == 27) {
                cCard3.setAttribute('src', "Cards/ace_of_hearts.png");
            } 
            if(hand[i] == 28) {
                cCard3.setAttribute('src', "Cards/2_of_hearts.png");
            } 
            if(hand[i] == 29) {
                cCard3.setAttribute('src', "Cards/3_of_hearts.png");
            } 
            if(hand[i] == 30) {
                cCard3.setAttribute('src', "Cards/4_of_hearts.png");
            } 
            if(hand[i] == 31) {
                cCard3.setAttribute('src', "Cards/5_of_hearts.png");
            }
            if(hand[i] == 32) {
                cCard3.setAttribute('src', "Cards/6_of_hearts.png");
            }  
            if(hand[i] == 33) {
                cCard3.setAttribute('src', "Cards/7_of_hearts.png");
            } 
            if(hand[i] == 34) {
                cCard3.setAttribute('src', "Cards/8_of_hearts.png");
            } 
            if(hand[i] == 35) {
                cCard3.setAttribute('src', "Cards/9_of_hearts.png");
            } 
            if(hand[i] == 36) {
                cCard3.setAttribute('src', "Cards/10_of_hearts.png");
            } 
            if(hand[i] == 37) {
                cCard3.setAttribute('src', "Cards/jack_of_hearts2.png");
            } 
            if(hand[i] == 38) {
                cCard3.setAttribute('src', "Cards/queen_of_hearts2.png");
            } 
            if(hand[i] == 39) {
                cCard3.setAttribute('src', "Cards/king_of_hearts2.png");
            }
            
            
            //Diamonds
        
            if(hand[i] == 40) {
                cCard3.setAttribute('src', "Cards/ace_of_diamonds.png");
            } 
            if(hand[i] == 41) {
                cCard3.setAttribute('src', "Cards/2_of_diamonds.png");
            } 
            if(hand[i] == 42) {
                cCard3.setAttribute('src', "Cards/3_of_diamonds.png");
            } 
            if(hand[i] == 43) {
                cCard3.setAttribute('src', "Cards/4_of_diamonds.png");
            } 
            if(hand[i] == 44) {
                cCard3.setAttribute('src', "Cards/5_of_diamonds.png");
            }
            if(hand[i] == 45) {
                cCard3.setAttribute('src', "Cards/6_of_diamonds.png");
            }  
            if(hand[i] == 46) {
                cCard3.setAttribute('src', "Cards/7_of_diamonds.png");
            } 
            if(hand[i] == 47) {
                cCard3.setAttribute('src', "Cards/8_of_diamonds.png");
            } 
            if(hand[i] == 48) {
                cCard3.setAttribute('src', "Cards/9_of_diamonds.png");
            } 
            if(hand[i] == 49) {
                cCard3.setAttribute('src', "Cards/10_of_diamonds.png");
            } 
            if(hand[i] == 50) {
                cCard3.setAttribute('src', "Cards/jack_of_diamonds2.png");
            } 
            if(hand[i] == 51) {
                cCard3.setAttribute('src', "Cards/queen_of_diamonds2.png");
            } 
            if(hand[i] == 52) {
                cCard3.setAttribute('src', "Cards/king_of_diamonds2.png");
            } 
            i = 3;
        }


































        if (i == 3) {
            //Spades
            if(hand[i] == 1) {
                cCard4.setAttribute('src', "Cards/ace_of_spades.png");
            } 
            if(hand[i] == 2) {
                cCard4.setAttribute('src', "Cards/2_of_spades.png");
            } 
            if(hand[i] == 3) {
                cCard4.setAttribute('src', "Cards/3_of_spades.png");
            } 
            if(hand[i] == 4) {
                cCard4.setAttribute('src', "Cards/4_of_spades.png");
            } 
            if(hand[i] == 5) {
                cCard4.setAttribute('src', "Cards/5_of_spades.png");
            }
            if(hand[i] == 6) {
                cCard4.setAttribute('src', "Cards/6_of_spades.png");
            }  
            if(hand[i] == 7) {
                cCard4.setAttribute('src', "Cards/7_of_spades.png");
            } 
            if(hand[i] == 8) {
                cCard4.setAttribute('src', "Cards/8_of_spades.png");
            } 
            if(hand[i] == 9) {
                cCard4.setAttribute('src', "Cards/9_of_spades.png");
            } 
            if(hand[i] == 10) {
                cCard4.setAttribute('src', "Cards/10_of_spades.png");
            } 
            if(hand[i] == 11) {
                cCard4.setAttribute('src', "Cards/jack_of_spades2.png");
            } 
            if(hand[i] == 12) {
                cCard4.setAttribute('src', "Cards/queen_of_spades2.png");
            } 
            if(hand[i] == 13) {
                cCard4.setAttribute('src', "Cards/king_of_spades2.png");
            }
            
            
            //Clubs
        
            if(hand[i] == 14) {
                cCard4.setAttribute('src', "Cards/ace_of_clubs.png");
            } 
            if(hand[i] == 15) {
                cCard4.setAttribute('src', "Cards/2_of_clubs.png");
            } 
            if(hand[i] == 16) {
                cCard4.setAttribute('src', "Cards/3_of_clubs.png");
            } 
            if(hand[i] == 17) {
                cCard4.setAttribute('src', "Cards/4_of_clubs.png");
            } 
            if(hand[i] == 18) {
                cCard4.setAttribute('src', "Cards/5_of_clubs.png");
            }
            if(hand[i] == 19) {
                cCard4.setAttribute('src', "Cards/6_of_clubs.png");
            }  
            if(hand[i] == 20) {
                cCard4.setAttribute('src', "Cards/7_of_clubs.png");
            } 
            if(hand[i] == 21) {
                cCard4.setAttribute('src', "Cards/8_of_clubs.png");
            } 
            if(hand[i] == 22) {
                cCard4.setAttribute('src', "Cards/9_of_clubs.png");
            } 
            if(hand[i] == 23) {
                cCard4.setAttribute('src', "Cards/10_of_clubs.png");
            } 
            if(hand[i] == 24) {
                cCard4.setAttribute('src', "Cards/jack_of_clubs2.png");
            } 
            if(hand[i] == 25) {
                cCard4.setAttribute('src', "Cards/queen_of_clubs2.png");
            } 
            if(hand[i] == 26) {
                cCard4.setAttribute('src', "Cards/king_of_clubs2.png");
            } 
        
        
        
            //Hearts
            if(hand[i] == 27) {
                cCard4.setAttribute('src', "Cards/ace_of_hearts.png");
            } 
            if(hand[i] == 28) {
                cCard4.setAttribute('src', "Cards/2_of_hearts.png");
            } 
            if(hand[i] == 29) {
                cCard4.setAttribute('src', "Cards/3_of_hearts.png");
            } 
            if(hand[i] == 30) {
                cCard4.setAttribute('src', "Cards/4_of_hearts.png");
            } 
            if(hand[i] == 31) {
                cCard4.setAttribute('src', "Cards/5_of_hearts.png");
            }
            if(hand[i] == 32) {
                cCard4.setAttribute('src', "Cards/6_of_hearts.png");
            }  
            if(hand[i] == 33) {
                cCard4.setAttribute('src', "Cards/7_of_hearts.png");
            } 
            if(hand[i] == 34) {
                cCard4.setAttribute('src', "Cards/8_of_hearts.png");
            } 
            if(hand[i] == 35) {
                cCard4.setAttribute('src', "Cards/9_of_hearts.png");
            } 
            if(hand[i] == 36) {
                cCard4.setAttribute('src', "Cards/10_of_hearts.png");
            } 
            if(hand[i] == 37) {
                cCard4.setAttribute('src', "Cards/jack_of_hearts2.png");
            } 
            if(hand[i] == 38) {
                cCard4.setAttribute('src', "Cards/queen_of_hearts2.png");
            } 
            if(hand[i] == 39) {
                cCard4.setAttribute('src', "Cards/king_of_hearts2.png");
            }
            
            
            //Diamonds
        
            if(hand[i] == 40) {
                cCard4.setAttribute('src', "Cards/ace_of_diamonds.png");
            } 
            if(hand[i] == 41) {
                cCard4.setAttribute('src', "Cards/2_of_diamonds.png");
            } 
            if(hand[i] == 42) {
                cCard4.setAttribute('src', "Cards/3_of_diamonds.png");
            } 
            if(hand[i] == 43) {
                cCard4.setAttribute('src', "Cards/4_of_diamonds.png");
            } 
            if(hand[i] == 44) {
                cCard4.setAttribute('src', "Cards/5_of_diamonds.png");
            }
            if(hand[i] == 45) {
                cCard4.setAttribute('src', "Cards/6_of_diamonds.png");
            }  
            if(hand[i] == 46) {
                cCard4.setAttribute('src', "Cards/7_of_diamonds.png");
            } 
            if(hand[i] == 47) {
                cCard4.setAttribute('src', "Cards/8_of_diamonds.png");
            } 
            if(hand[i] == 48) {
                cCard4.setAttribute('src', "Cards/9_of_diamonds.png");
            } 
            if(hand[i] == 49) {
                cCard4.setAttribute('src', "Cards/10_of_diamonds.png");
            } 
            if(hand[i] == 50) {
                cCard4.setAttribute('src', "Cards/jack_of_diamonds2.png");
            } 
            if(hand[i] == 51) {
                cCard4.setAttribute('src', "Cards/queen_of_diamonds2.png");
            } 
            if(hand[i] == 52) {
                cCard4.setAttribute('src', "Cards/king_of_diamonds2.png");
            } 
            i = 4;
        }
































        if (i == 4) {
            //Spades
            if(hand[i] == 1) {
                cCard5.setAttribute('src', "Cards/ace_of_spades.png");
            } 
            if(hand[i] == 2) {
                cCard5.setAttribute('src', "Cards/2_of_spades.png");
            } 
            if(hand[i] == 3) {
                cCard5.setAttribute('src', "Cards/3_of_spades.png");
            } 
            if(hand[i] == 4) {
                cCard5.setAttribute('src', "Cards/4_of_spades.png");
            } 
            if(hand[i] == 5) {
                cCard5.setAttribute('src', "Cards/5_of_spades.png");
            }
            if(hand[i] == 6) {
                cCard5.setAttribute('src', "Cards/6_of_spades.png");
            }  
            if(hand[i] == 7) {
                cCard5.setAttribute('src', "Cards/7_of_spades.png");
            } 
            if(hand[i] == 8) {
                cCard5.setAttribute('src', "Cards/8_of_spades.png");
            } 
            if(hand[i] == 9) {
                cCard5.setAttribute('src', "Cards/9_of_spades.png");
            } 
            if(hand[i] == 10) {
                cCard5.setAttribute('src', "Cards/10_of_spades.png");
            } 
            if(hand[i] == 11) {
                cCard5.setAttribute('src', "Cards/jack_of_spades2.png");
            } 
            if(hand[i] == 12) {
                cCard5.setAttribute('src', "Cards/queen_of_spades2.png");
            } 
            if(hand[i] == 13) {
                cCard5.setAttribute('src', "Cards/king_of_spades2.png");
            }
            
            
            //Clubs
        
            if(hand[i] == 14) {
                cCard5.setAttribute('src', "Cards/ace_of_clubs.png");
            } 
            if(hand[i] == 15) {
                cCard5.setAttribute('src', "Cards/2_of_clubs.png");
            } 
            if(hand[i] == 16) {
                cCard5.setAttribute('src', "Cards/3_of_clubs.png");
            } 
            if(hand[i] == 17) {
                cCard5.setAttribute('src', "Cards/4_of_clubs.png");
            } 
            if(hand[i] == 18) {
                cCard5.setAttribute('src', "Cards/5_of_clubs.png");
            }
            if(hand[i] == 19) {
                cCard5.setAttribute('src', "Cards/6_of_clubs.png");
            }  
            if(hand[i] == 20) {
                cCard5.setAttribute('src', "Cards/7_of_clubs.png");
            } 
            if(hand[i] == 21) {
                cCard5.setAttribute('src', "Cards/8_of_clubs.png");
            } 
            if(hand[i] == 22) {
                cCard5.setAttribute('src', "Cards/9_of_clubs.png");
            } 
            if(hand[i] == 23) {
                cCard5.setAttribute('src', "Cards/10_of_clubs.png");
            } 
            if(hand[i] == 24) {
                cCard5.setAttribute('src', "Cards/jack_of_clubs2.png");
            } 
            if(hand[i] == 25) {
                cCard5.setAttribute('src', "Cards/queen_of_clubs2.png");
            } 
            if(hand[i] == 26) {
                cCard5.setAttribute('src', "Cards/king_of_clubs2.png");
            } 
        
        
        
            //Hearts
            if(hand[i] == 27) {
                cCard5.setAttribute('src', "Cards/ace_of_hearts.png");
            } 
            if(hand[i] == 28) {
                cCard5.setAttribute('src', "Cards/2_of_hearts.png");
            } 
            if(hand[i] == 29) {
                cCard5.setAttribute('src', "Cards/3_of_hearts.png");
            } 
            if(hand[i] == 30) {
                cCard5.setAttribute('src', "Cards/4_of_hearts.png");
            } 
            if(hand[i] == 31) {
                cCard5.setAttribute('src', "Cards/5_of_hearts.png");
            }
            if(hand[i] == 32) {
                cCard5.setAttribute('src', "Cards/6_of_hearts.png");
            }  
            if(hand[i] == 33) {
                cCard5.setAttribute('src', "Cards/7_of_hearts.png");
            } 
            if(hand[i] == 34) {
                cCard5.setAttribute('src', "Cards/8_of_hearts.png");
            } 
            if(hand[i] == 35) {
                cCard5.setAttribute('src', "Cards/9_of_hearts.png");
            } 
            if(hand[i] == 36) {
                cCard5.setAttribute('src', "Cards/10_of_hearts.png");
            } 
            if(hand[i] == 37) {
                cCard5.setAttribute('src', "Cards/jack_of_hearts2.png");
            } 
            if(hand[i] == 38) {
                cCard5.setAttribute('src', "Cards/queen_of_hearts2.png");
            } 
            if(hand[i] == 39) {
                cCard5.setAttribute('src', "Cards/king_of_hearts2.png");
            }
            
            
            //Diamonds
        
            if(hand[i] == 40) {
                cCard5.setAttribute('src', "Cards/ace_of_diamonds.png");
            } 
            if(hand[i] == 41) {
                cCard5.setAttribute('src', "Cards/2_of_diamonds.png");
            } 
            if(hand[i] == 42) {
                cCard5.setAttribute('src', "Cards/3_of_diamonds.png");
            } 
            if(hand[i] == 43) {
                cCard5.setAttribute('src', "Cards/4_of_diamonds.png");
            } 
            if(hand[i] == 44) {
                cCard5.setAttribute('src', "Cards/5_of_diamonds.png");
            }
            if(hand[i] == 45) {
                cCard5.setAttribute('src', "Cards/6_of_diamonds.png");
            }  
            if(hand[i] == 46) {
                cCard5.setAttribute('src', "Cards/7_of_diamonds.png");
            } 
            if(hand[i] == 47) {
                cCard5.setAttribute('src', "Cards/8_of_diamonds.png");
            } 
            if(hand[i] == 48) {
                cCard5.setAttribute('src', "Cards/9_of_diamonds.png");
            } 
            if(hand[i] == 49) {
                cCard5.setAttribute('src', "Cards/10_of_diamonds.png");
            } 
            if(hand[i] == 50) {
                cCard5.setAttribute('src', "Cards/jack_of_diamonds2.png");
            } 
            if(hand[i] == 51) {
                cCard5.setAttribute('src', "Cards/queen_of_diamonds2.png");
            } 
            if(hand[i] == 52) {
                cCard5.setAttribute('src', "Cards/king_of_diamonds2.png");
            } 
            i = 5;
        }
        
    }
}






function print_comb(val) {
    if (val == 1) {
        console.log("Royal Flush");
        
    }
    if (val == 2) {
        console.log("Straight Flush");
        
    }
    if (val == 3) {
        console.log("Four of a kind Ace");
        
    }
    if (val == 4) {
        console.log("Four of a kind King");
        
    }
    if (val == 5) {
        console.log("Four of a kind Queen");
        
    }
    if (val == 6) {
        console.log("Four of a kind Jack");
        
    }
    if (val == 7) {
        console.log("Four of a kind 10");
        
    
    }
    if (val == 8) {
        console.log("Four of a kind 9");
        
    }
    if (val == 9) {
        console.log("Four of a kind 8");
        
    }
    if (val == 10) {
        console.log("Four of a kind 7");
        
    }
    if (val == 11) {
        console.log("Four of a kind 6");
        
    }
    if (val == 12) {
        console.log("Four of a kind 5");
        
    }
    if (val == 13) {
        console.log("Four of a kind 4");
        
    }
    if (val == 14) {
        console.log("Four of a kind 3");
        
    }
    if (val == 15) {
        console.log("Four of a kind 2");
        
    }
    if (val >= 16 && val <= 171) {
        console.log("Full House");
        
    }
    if (val == 172) {
        console.log("Flush");
        
    }
    if (val == 173) {
        console.log("Straight");
        
    }
    if (val >= 330 && val <= 342) {
        console.log("Three of a Kind");
        
    }
    if (val >= 174 && val <= 329) {
        console.log("Double Pairs");
        
    }
    if (val >= 343 && val <= 355) {
        console.log("One Pair");
        
    }
    return 0;
    }





function sort_deck(hand) {
	let new_deck;
	let o_deck = [];
	let val = hand[0] % 13;
	let ex1 = -1;
	let ex2 = -1;
	let ex3 = -1;
	let ex4 = -1;
	let ex5 = -1;

	let c1 = 0;
	let c2 = 0;
	let c3 = 0;
	let c4 = 0;
	let c5 = 0;
	let c6 = 0;
	let c7 = 0;
	let c8 = 0;
	let c9 = 0;
	let c10 = 0;
	let cj = 0;
	let cq = 0;
	let ck = 0;


	let i1;
	let i2;
	let i3; 
	let i4;
	let i5;
	//prletf("%d", hand[1]);
	for (let i = 0; i < 5; i++) {
		if (hand[i] % 13 == 1) {
			c1 += 1;
		}
		if (hand[i] % 13 == 2) {
			c2 += 1;
		}
		if (hand[i] % 13 == 3) {
			c3 += 1;
		}
		if (hand[i] % 13 == 4) {
			c4 += 1;
		}
		if (hand[i] % 13 == 5) {
			c5 += 1;
		}
		if (hand[i] % 13 == 6) {
			c6 += 1;
		}
		if (hand[i] % 13 == 7) {
			c7 += 1;
		}
		if (hand[i] % 13 == 8) {
			c8 += 1;
		}
		if (hand[i] % 13 == 9) {
			c9 += 1;
		}
		if (hand[i] % 13 == 10) {
			c10 += 1;
		}
		if (hand[i] % 13 == 11) {
			cj += 1;
		}
		if (hand[i] % 13 == 12) {
			cq += 1;
		}
		if (hand[i] % 13 == 0) {
			ck += 1;
		}
	}
	let j = 0;
	while (c1 > 0) {
		for (let i = 0; i < 5; i++) {
			if (hand[i] % 13 == 1) {
				o_deck[j] = hand[i];
				c1 -= 1;
				j += 1;
			}
		}
	}
	while (ck > 0) {
		for (let i = 0; i < 5; i++) {
			if (hand[i] % 13 == 0) {
				o_deck[j] = hand[i];
				ck -= 1;
				j += 1;
			}
		}
	}
	while (cq > 0) {
		for (let i = 0; i < 5; i++) {
			if (hand[i] % 13 == 12) {
				o_deck[j] = hand[i];
				cq -= 1;
				j += 1;
			}
		}
	}
	while (cj > 0) {
		for (let i = 0; i < 5; i++) {
			if (hand[i] % 13 == 11) {
				o_deck[j] = hand[i];
				cj -= 1;
				j += 1;
			}
		}
	}
	while (c10 > 0) {
		for (let i = 0; i < 5; i++) {
			if (hand[i] % 13 == 10) {
				o_deck[j] = hand[i];
				c10 -= 1;
				j += 1;
			}
		}
	}
	while (c9 > 0) {
		for (let i = 0; i < 5; i++) {
			if (hand[i] % 13 == 9) {
				o_deck[j] = hand[i];
				c9 -= 1;
				j += 1;
			}
		}
	}
	while (c8 > 0) {
		for (let i = 0; i < 5; i++) {
			if (hand[i] % 13 == 8) {
				o_deck[j] = hand[i];
				c8 -= 1;
				j += 1;
			}
		}
	}
	while (c7 > 0) {
		for (let i = 0; i < 5; i++) {
			if (hand[i] % 13 == 7) {
				o_deck[j] = hand[i];
				c7 -= 1;
				j += 1;
			}
		}
	}
	while (c6 > 0) {
		for (let i = 0; i < 5; i++) {
			if (hand[i] % 13 == 6) {
				o_deck[j] = hand[i];
				c6 -= 1;
				j += 1;
			}
		}
	}
	while (c5 > 0) {
		for (let i = 0; i < 5; i++) {
			if (hand[i] % 13 == 5) {
				o_deck[j] = hand[i];
				c5 -= 1;
				j += 1;
			}
		}
	}
	while (c4 > 0) {
		for (let i = 0; i < 5; i++) {
			if (hand[i] % 13 == 4) {
				o_deck[j] = hand[i];
				c4 -= 1;
				j += 1;
			}
		}
	}
	while (c3 > 0) {
		for (let i = 0; i < 5; i++) {
			if (hand[i] % 13 == 3) {
				o_deck[j] = hand[i];
				c3 -= 1;
				j += 1;
			}
		}
	}
	while (c2 > 0) {
		for (let i = 0; i < 5; i++) {
			if (hand[i] % 13 == 2) {
				o_deck[j] = hand[i];
				c2 -= 1;
				j += 1;
			}
		}
	}

	//console.log(o_deck[0]);
	//prletf("%d", o_deck[4]);

	hand[0] = o_deck[0];
	hand[1] = o_deck[1];
	hand[2] = o_deck[2];
	hand[3] = o_deck[3];
	hand[4] = o_deck[4];


	return hand;
}








function check_hand(hand) {
	let card;
	let count;
	let suit;
	let suit_val;
	//12 13 11 1 10
	//Royal Flush
	// 1
	//Royal Flush Spade
	card = hand[0];
	//lowest card
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 10) {
			card = hand[i];
		}
	}
	count = 1;
	if (card == 10) {
		for (let i = 0; i < 5; i++) {
			for (let j = 0; j < 5; j++) {
				if (card + 1 == hand[j]) {
					count += 1;
					card += 1;
				}
			}
		}
	}
	if (count == 4) {
		for (let i = 0; i < 5; i++) {
			if (hand[i] == 1) {
				return 1;
			}
		}
	}


	//Royal Flush Club
	card = hand[0];
	//lowest card
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 23) {
			card = hand[i];
		}
	}
	count = 1;
	if (card == 23) {
		for (let i = 0; i < 5; i++) {
			for (let j = 0; j < 5; j++) {
				if (card + 1 == hand[j]) {
					count += 1;
					card += 1;
				}
			}
		}
	}
	if (count == 4) {
		for (let i = 0; i < 5; i++) {
			if (hand[i] == 27) {
				return 1;
			}
		}
	}



	//Royal Flush Hearts
	card = hand[0];
	//lowest card
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 36) {
			card = hand[i];
		}
	}
	count = 1;
	if (card == 36) {
		for (let i = 0; i < 5; i++) {
			for (let j = 0; j < 5; j++) {
				if (card + 1 == hand[j]) {
					count += 1;
					card += 1;
				}
			}
		}
	}
	if (count == 4) {
		for (let i = 0; i < 5; i++) {
			if (hand[i] == 27) {
				return 1;
			}
		}
	}



	//Royal Flush Diamonds
	card = hand[0];
	//lowest card
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 49) {
			card = hand[i];
		}
	}
	count = 1;
	if (card == 49) {
		for (let i = 0; i < 5; i++) {
			for (let j = 0; j < 5; j++) {
				if (card + 1 == hand[j]) {
					count += 1;
					card += 1;
				}
			}
		}
	}
	if (count == 4) {
		for (let i = 0; i < 5; i++) {
			if (hand[i] == 40) {
				return 1;
			}
		}
	}





	// 12 9 13 11 10
	//Straight Flush
	//2
	card = hand[0];
	if (card <= 13) {
		suit = 1;
		suit_val = 0;
	}
	if (card > 13 && card <= 26) {
		suit = 2;
		suit_val = 13;
	}
	if (card > 26 && card <= 39) {
		suit = 3;
		suit_val = 26;
	}
	if (card > 39 && card <= 52) {
		suit = 4;
		suit_val = 39;
	}
	//lowest card
	for (let i = 0; i < 5; i++) {
		if (card - suit_val > hand[i] - suit_val && card - suit_val > 0) {
			card = hand[i] - suit_val;
		}
	}
	count = 1;
	for (let i = 0; i < 5; i++) {
		for (let j = 0; j < 5; j++) {
			if (card + 1 == hand[j] - suit_val) {
				count += 1;
				card += 1;
				if (count == 5) {
					return 2;
				}
			}
		}
	}



	//Four of a kind ace
	//3
	count = 0;
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 1 || hand[i] == 14 || hand[i] == 27 || hand[i] == 40) {
			count += 1;
			if (count == 4) {
				return 3;
			}
		}
	}

	//Four of a kind two
	//2 15 28 41
	//15
	count = 0;
	count = 0;
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 2 || hand[i] == 15 || hand[i] == 28 || hand[i] == 41) {
			count += 1;
			if (count == 4) {
				return 15;
			}
		}
	}

	//Four of a kind three
	//3 16 29 42
	//14
	count = 0;
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 3 || hand[i] == 16 || hand[i] == 29 || hand[i] == 42) {
			count += 1;
			if (count == 4) {
				return 14;
			}
		}
	}

	//Four of a kind four
	//4 17 30 43
	//13
	count = 0;
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 4 || hand[i] == 17 || hand[i] == 30 || hand[i] == 43) {
			count += 1;
			if (count == 4) {
				return 13;
			}
		}
	}

	//Four of a kind five
	//5 18 31 44
	//12
	count = 0;
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 5 || hand[i] == 18 || hand[i] == 31 || hand[i] == 44) {
			count += 1;
			if (count == 4) {
				return 12;
			}
		}
	}


	//Four of a kind six
	//6 19 32 45
	//11
	count = 0;
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 6 || hand[i] == 19 || hand[i] == 32 || hand[i] == 45) {
			count += 1;
			if (count == 4) {
				return 11;
			}
		}
	}

	//Four of a kind seven
	//7 20 33 46
	//10
	count = 0;
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 7 || hand[i] == 20 || hand[i] == 33 || hand[i] == 46) {
			count += 1;
			if (count == 4) {
				return 10;
			}
		}
	}

	//Four of a kind eight
	//8 21 34 47
	//9
	count = 0;
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 8 || hand[i] == 21 || hand[i] == 34 || hand[i] == 47) {
			count += 1;
			if (count == 4) {
				return 9;
			}
		}
	}

	//Four of a kind nine
	//9 22 35 48
	//8
	count = 0;
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 9 || hand[i] == 22 || hand[i] == 35 || hand[i] == 48) {
			count += 1;
			if (count == 4) {
				return 8;
			}
		}
	}

	//Four of a kind 10
	//10 23 36 49
	//7
	count = 0;
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 10 || hand[i] == 23 || hand[i] == 36 || hand[i] == 49) {
			count += 1;
			if (count == 4) {
				return 7;
			}
		}
	}

	//Four of a kind jack
	//11 24 37 50
	//6
	count = 0;
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 11 || hand[i] == 24 || hand[i] == 37 || hand[i] == 50) {
			count += 1;
			if (count == 4) {
				return 6;
			}
		}
	}

	//Four of a kind queen
	//12 25 38 51
	//5
	count = 0;
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 12 || hand[i] == 25 || hand[i] == 38 || hand[i] == 51) {
			count += 1;
			if (count == 4) {
				return 5;
			}
		}
	}

	//Four of a kind king
	//13 26 39 52
	//4

	count = 0;
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 13 || hand[i] == 26 || hand[i] == 39 || hand[i] == 52) {
			count += 1;
			if (count == 4) {
				return 4;
			}
		}
	}







	//Full House
	//16


	//Flush
	//171
	//Flush Spade
	if (hand[0] == 1 || hand[0] == 2 || hand[0] == 3 || hand[0] == 4 || hand[0] == 5 || hand[0] == 6 || hand[0] == 7 || hand[0] == 8 || hand[0] == 9 || hand[0] == 10 || hand[0] == 11 || hand[0] == 12 || hand[0] == 13) {
		if (hand[1] == 1 || hand[1] == 2 || hand[1] == 3 || hand[1] == 4 || hand[1] == 5 || hand[1] == 6 || hand[1] == 7 || hand[1] == 8 || hand[1] == 9 || hand[1] == 10 || hand[1] == 11 || hand[1] == 12 || hand[1] == 13) {
			if (hand[2] == 1 || hand[2] == 2 || hand[2] == 3 || hand[2] == 4 || hand[2] == 5 || hand[2] == 6 || hand[2] == 7 || hand[2] == 8 || hand[2] == 9 || hand[2] == 10 || hand[2] == 11 || hand[2] == 12 || hand[2] == 13) {
				if (hand[3] == 1 || hand[3] == 2 || hand[3] == 3 || hand[3] == 4 || hand[3] == 5 || hand[3] == 6 || hand[3] == 7 || hand[3] == 8 || hand[3] == 9 || hand[3] == 10 || hand[3] == 11 || hand[3] == 12 || hand[3] == 13) {
					if (hand[4] == 1 || hand[4] == 2 || hand[4] == 3 || hand[4] == 4 || hand[4] == 5 || hand[4] == 6 || hand[4] == 7 || hand[4] == 8 || hand[4] == 9 || hand[4] == 10 || hand[4] == 11 || hand[4] == 12 || hand[4] == 13) {
						return 172;
					}
				}
			}
		}
	}

	//Flush Clubs
	if (hand[0] == 14 || hand[0] == 15 || hand[0] == 16 || hand[0] == 17 || hand[0] == 18 || hand[0] == 19 || hand[0] == 20 || hand[0] == 21 || hand[0] == 22 || hand[0] == 23 || hand[0] == 24 || hand[0] == 25 || hand[0] == 26) {
		if (hand[1] == 14 || hand[1] == 15 || hand[1] == 16 || hand[1] == 17 || hand[1] == 18 || hand[1] == 19 || hand[1] == 20 || hand[1] == 21 || hand[1] == 22 || hand[1] == 23 || hand[1] == 24 || hand[1] == 25 || hand[1] == 26) {
			if (hand[2] == 14 || hand[2] == 15 || hand[2] == 16 || hand[2] == 17 || hand[2] == 18 || hand[2] == 19 || hand[2] == 20 || hand[2] == 21 || hand[2] == 22 || hand[2] == 23 || hand[2] == 24 || hand[2] == 25 || hand[2] == 26) {
				if (hand[3] == 14 || hand[3] == 15 || hand[3] == 16 || hand[3] == 17 || hand[3] == 18 || hand[3] == 19 || hand[3] == 20 || hand[3] == 21 || hand[3] == 22 || hand[3] == 23 || hand[3] == 24 || hand[3] == 25 || hand[3] == 26) {
					if (hand[4] == 14 || hand[4] == 15 || hand[4] == 16 || hand[4] == 17 || hand[4] == 18 || hand[4] == 19 || hand[4] == 20 || hand[4] == 21 || hand[4] == 22 || hand[4] == 23 || hand[4] == 24 || hand[4] == 25 || hand[4] == 26) {
						return 172;
					}
				}
			}
		}
	}

	//Flush Hearts
	if (hand[0] == 27 || hand[0] == 28 || hand[0] == 29 || hand[0] == 30 || hand[0] == 31 || hand[0] == 32 || hand[0] == 33 || hand[0] == 34 || hand[0] == 35 || hand[0] == 36 || hand[0] == 37 || hand[0] == 38 || hand[0] == 39) {
		if (hand[1] == 27 || hand[1] == 28 || hand[1] == 29 || hand[1] == 30 || hand[1] == 31 || hand[1] == 32 || hand[1] == 33 || hand[1] == 34 || hand[1] == 35 || hand[1] == 36 || hand[1] == 37 || hand[1] == 38 || hand[1] == 39) {
			if (hand[2] == 27 || hand[2] == 28 || hand[2] == 29 || hand[2] == 30 || hand[2] == 31 || hand[2] == 32 || hand[2] == 33 || hand[2] == 34 || hand[2] == 35 || hand[2] == 36 || hand[2] == 37 || hand[2] == 38 || hand[2] == 39) {
				if (hand[3] == 27 || hand[3] == 28 || hand[3] == 29 || hand[3] == 30 || hand[3] == 31 || hand[3] == 32 || hand[3] == 33 || hand[3] == 34 || hand[3] == 35 || hand[3] == 36 || hand[3] == 37 || hand[3] == 38 || hand[3] == 39) {
					if (hand[4] == 27 || hand[4] == 28 || hand[4] == 29 || hand[4] == 30 || hand[4] == 31 || hand[4] == 32 || hand[4] == 33 || hand[4] == 34 || hand[4] == 35 || hand[4] == 36 || hand[4] == 37 || hand[4] == 38 || hand[4] == 39) {
						return 172;
					}
				}
			}
		}
	}


	//Flush Diamonds
	if (hand[0] == 40 || hand[0] == 41 || hand[0] == 42 || hand[0] == 43 || hand[0] == 44 || hand[0] == 45 || hand[0] == 46 || hand[0] == 47 || hand[0] == 48 || hand[0] == 49 || hand[0] == 50 || hand[0] == 51 || hand[0] == 52) {
		if (hand[1] == 40 || hand[1] == 41 || hand[1] == 42 || hand[1] == 43 || hand[1] == 44 || hand[1] == 45 || hand[1] == 46 || hand[1] == 47 || hand[1] == 48 || hand[1] == 49 || hand[1] == 50 || hand[1] == 51 || hand[1] == 52) {
			if (hand[2] == 40 || hand[2] == 41 || hand[0] == 42 || hand[2] == 43 || hand[2] == 44 || hand[2] == 45 || hand[2] == 46 || hand[2] == 47 || hand[2] == 48 || hand[2] == 49 || hand[2] == 50 || hand[2] == 51 || hand[2] == 52) {
				if (hand[3] == 40 || hand[3] == 41 || hand[3] == 42 || hand[3] == 43 || hand[3] == 44 || hand[3] == 45 || hand[3] == 46 || hand[3] == 47 || hand[3] == 48 || hand[3] == 49 || hand[3] == 50 || hand[3] == 51 || hand[3] == 52) {
					if (hand[4] == 40 || hand[4] == 41 || hand[4] == 42 || hand[4] == 43 || hand[4] == 44 || hand[0] == 45 || hand[4] == 46 || hand[4] == 47 || hand[4] == 48 || hand[4] == 49 || hand[4] == 50 || hand[4] == 51 || hand[4] == 52) {
						return 172;
					}
				}
			}
		}
	}






	//Straight 172

	//lowest card
	card = hand[0];
	/*for (let i = 0; i < 5; i++) {}*/
		/*if (hand[i] > 13 && card > 13) {
			if (card % 13 > hand[i] % 13) {
				card = hand[i];
			}
		}
		if (hand[i] > 13 && card < 13) {
			if (card > hand[i] % 13) {
				card = hand[i];
			}
		}
		if (hand[i] < 13 && card > 13) {
			if (card % 13 > hand[i]) {
				card = hand[i];
			}
		}
		if (hand[i] < 13 && card < 13) {
			if (card > hand[i]) {
				card = hand[i];
			}
		}
	}*/
	let handN = [hand[0], hand[1], hand[2], hand[3], hand[4]];
	card = hand[0];
	count = 1;
	for (let i = 0; i < 5; i++) {
		for (let j = 0; j < 5; j++) {
			if (hand[j] % 13 == 1) {
				handN[j] = 14;
			}
			if ((card - 1) % 13 == handN[j] % 13) {
				count += 1;
				card -= 1;
				//prletf("%d", count);
				if (count == 5) {
					return 173;
				}
			}
		}
	}

	//14 39 51 50 49















	//3 of a kind
	//Three of a kind ace
	//19
	let three_ace = 0;
	count = 0;
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 1 || hand[i] == 14 || hand[i] == 27 || hand[i] == 40) {
			count += 1;
			if (count == 3) {
				three_ace = 1;
			}
		}
	}

	//Three of a kind two
	//2 15 28 41
	//31
	let three_two = 0;
	count = 0;
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 2 || hand[i] == 15 || hand[i] == 28 || hand[i] == 41) {
			count += 1;
			if (count == 3) {
				three_two = 1;
			}
		}
	}

	//Three of a kind three
	//3 16 29 42
	//30
	let three_three = 0;
	count = 0;
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 3 || hand[i] == 16 || hand[i] == 29 || hand[i] == 42) {
			count += 1;
			if (count == 3) {
				three_three = 1;
			}
		}
	}

	//Three of a kind four
	//4 17 30 43
	//29
	let three_four = 0;
	count = 0;
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 4 || hand[i] == 17 || hand[i] == 30 || hand[i] == 43) {
			count += 1;
			if (count == 3) {
				three_four = 1;
			}
		}
	}

	//Three of a kind five
	//5 18 31 44
	//12
	count = 0;
	let three_five = 0;
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 5 || hand[i] == 18 || hand[i] == 31 || hand[i] == 44) {
			count += 1;
			if (count == 3) {
				three_five = 1;
			}
		}
	}

	//Three of a kind six
	//6 19 32 45
	//27
	count = 0;
	let three_six = 0;
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 6 || hand[i] == 19 || hand[i] == 32 || hand[i] == 45) {
			count += 1;
			if (count == 3) {
				three_six = 1;
			}
		}
	}

	//Three of a kind seven
	//7 20 33 46
	//26
	count = 0;
	let three_seven = 0;
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 7 || hand[i] == 20 || hand[i] == 33 || hand[i] == 46) {
			count += 1;
			if (count == 3) {
				three_seven = 1;
			}
		}
	}

	//Three of a kind eight
	//8 21 34 47
	count = 0;
	let three_eight = 0;
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 8 || hand[i] == 21 || hand[i] == 34 || hand[i] == 47) {
			count += 1;
			if (count == 3) {
				three_eight = 1;
			}
		}
	}


	//Three of a kind nine
	//9 22 35 48
	//8
	count = 0;
	let three_nine = 0;
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 9 || hand[i] == 22 || hand[i] == 35 || hand[i] == 48) {
			count += 1;
			if (count == 3) {
				three_nine = 1;
			}
		}
	}

	//Three of a kind 10
	//10 23 36 49
	//7
	count = 0;
	let three_ten = 0;
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 10 || hand[i] == 23 || hand[i] == 36 || hand[i] == 49) {
			count += 1;
			if (count == 3) {
				three_ten =1;
			}
		}
	}

	//Three of a kind jack
	//11 24 37 50
	//6
	count = 0;
	let three_jack = 0;
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 11 || hand[i] == 24 || hand[i] == 37 || hand[i] == 50) {
			count += 1;
			if (count == 3) {
				three_jack = 1;
			}
		}
	}

	//Three of a kind queen
	//12 25 38 51
	//5
	count = 0;
	let three_queen = 0;
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 12 || hand[i] == 25 || hand[i] == 38 || hand[i] == 51) {
			count += 1;
			if (count == 3) {
				three_queen = 1;
			}
		}
	}

	//Three of a kind king
	//13 26 39 52
	//4

	count = 0;
	let three_king = 0;
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 13 || hand[i] == 26 || hand[i] == 39 || hand[i] == 52) {
			count += 1;
			if (count == 3) {
				three_king = 1;
			}
		}
	}




	//Two pair
	//32 - 44
	//3 of a kind
	//Pair of a kind ace
	let two_ace = 0;
	count = 0;
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 1 || hand[i] == 14 || hand[i] == 27 || hand[i] == 40) {
			count += 1;
			if (count == 2) {
				two_ace = 1;
			}
		}
	}

	//Two of a kind two
	//2 15 28 41
	//31
	let two_two = 0;
	count = 0;
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 2 || hand[i] == 15 || hand[i] == 28 || hand[i] == 41) {
			count += 1;
			if (count == 2) {
				two_two = 1;
			}
		}
	}

	//Two of a kind three
	//3 16 29 42
	//30
	let two_three = 0;
	count = 0;
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 3 || hand[i] == 16 || hand[i] == 29 || hand[i] == 42) {
			count += 1;
			if (count == 2) {
				two_three = 1;
			}
		}
	}

	//Two of a kind four
	//4 17 30 43
	//29
	let two_four = 0;
	count = 0;
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 4 || hand[i] == 17 || hand[i] == 30 || hand[i] == 43) {
			count += 1;
			if (count == 2) {
				two_four = 1;
			}
		}
	}

	//Two of a kind five
	//5 18 31 44
	//12
	count = 0;
	let two_five = 0;
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 5 || hand[i] == 18 || hand[i] == 31 || hand[i] == 44) {
			count += 1;
			if (count == 2) {
				two_five = 1;
			}
		}
	}

	//Two of a kind six
	//6 19 32 45
	//27
	count = 0;
	let two_six = 0;
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 6 || hand[i] == 19 || hand[i] == 32 || hand[i] == 45) {
			count += 1;
			if (count == 2) {
				two_six = 1;
			}
		}
	}

	//Two of a kind seven
	//7 20 33 46
	//26
	count = 0;
	let two_seven = 0;
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 7 || hand[i] == 20 || hand[i] == 33 || hand[i] == 46) {
			count += 1;
			if (count == 2) {
				two_seven = 1;
			}
		}
	}

	//Two of a kind eight
	//8 21 34 47
	count = 0;
	let two_eight = 0;
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 8 || hand[i] == 21 || hand[i] == 34 || hand[i] == 47) {
			count += 1;
			if (count == 2) {
				two_eight = 1;
			}
		}
	}


	//Three of a kind nine
	//9 22 35 48
	//8
	count = 0;
	let two_nine = 0;
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 9 || hand[i] == 22 || hand[i] == 35 || hand[i] == 48) {
			count += 1;
			if (count == 2) {
				two_nine = 1;
			}
		}
	}

	//Three of a kind 10
	//10 23 36 49
	//7
	count = 0;
	let two_ten = 0;
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 10 || hand[i] == 23 || hand[i] == 36 || hand[i] == 49) {
			count += 1;
			if (count == 2) {
				two_ten = 1;
			}
		}
	}

	//Three of a kind jack
	//11 24 37 50
	//6
	count = 0;
	let two_jack = 0;
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 11 || hand[i] == 24 || hand[i] == 37 || hand[i] == 50) {
			count += 1;
			if (count == 2) {
				two_jack = 1;
			}
		}
	}

	//Three of a kind queen
	//12 25 38 51
	//5
	count = 0;
	let two_queen = 0;
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 12 || hand[i] == 25 || hand[i] == 38 || hand[i] == 51) {
			count += 1;
			if (count == 2) {
				two_queen = 1;
			}
		}
	}

	//Three of a kind king
	//13 26 39 52
	//4

	count = 0;
	let two_king = 0;
	for (let i = 0; i < 5; i++) {
		if (hand[i] == 13 || hand[i] == 26 || hand[i] == 39 || hand[i] == 52) {
			count += 1;
			if (count == 2) {
				two_king = 1;
			}
		}
	}



	//Full House 
	//Three Ace 
	if (three_ace == 1 && two_king == 1) {
		return 16;
	}

	if (three_ace == 1 && two_queen == 1) {
		return 17;
	}

	if (three_ace == 1 && two_jack == 1) {
		return 18;
	}

	if (three_ace == 1 && two_ten == 1) {
		return 19;
	}

	if (three_ace == 1 && two_nine == 1) {
		return 20;
	}

	if (three_ace == 1 && two_eight == 1) {
		return 21;
	}

	if (three_ace == 1 && two_seven == 1) {
		return 22;
	}

	if (three_ace == 1 && two_six == 1) {
		return 23;
	}

	if (three_ace == 1 && two_five == 1) {
		return 24;
	}

	if (three_ace == 1 && two_four == 1) {
		return 25;
	}

	if (three_ace == 1 && two_three == 1) {
		return 26;
	}

	if (three_ace == 1 && two_two == 1) {
		return 27;
	}

	//Three King 
	if (three_king == 1 && two_ace == 1) {
		return 28;
	}

	if (three_king == 1 && two_queen == 1) {
		return 29;
	}

	if (three_king == 1 && two_jack == 1) {
		return 30;
	}

	if (three_king == 1 && two_ten == 1) {
		return 31;
	}

	if (three_king == 1 && two_nine == 1) {
		return 32;
	}

	if (three_king == 1 && two_eight == 1) {
		return 33;
	}

	if (three_king == 1 && two_seven == 1) {
		return 34;
	}

	if (three_king == 1 && two_six == 1) {
		return 35;
	}

	if (three_king == 1 && two_five == 1) {
		return 36;
	}

	if (three_king == 1 && two_four == 1) {
		return 37;
	}

	if (three_king == 1 && two_three == 1) {
		return 38;
	}

	if (three_king == 1 && two_two == 1) {
		return 39;
	}





	//Three Queen
	if (three_queen == 1 && two_ace == 1) {
		return 40;
	}

	if (three_queen == 1 && two_king == 1) {
		return 41;
	}

	if (three_queen == 1 && two_jack == 1) {
		return 42;
	}

	if (three_queen == 1 && two_ten == 1) {
		return 43;
	}

	if (three_queen == 1 && two_nine == 1) {
		return 44;
	}

	if (three_queen == 1 && two_eight == 1) {
		return 45;
	}

	if (three_queen == 1 && two_seven == 1) {
		return 46;
	}

	if (three_queen == 1 && two_six == 1) {
		return 47;
	}

	if (three_queen == 1 && two_five == 1) {
		return 48;
	}

	if (three_queen == 1 && two_four == 1) {
		return 49;
	}

	if (three_queen == 1 && two_three == 1) {
		return 50;
	}

	if (three_queen == 1 && two_two == 1) {
		return 51;
	}



	//Three Jack
	if (three_jack == 1 && two_ace == 1) {
		return 52;
	}

	if (three_jack == 1 && two_king == 1) {
		return 53;
	}

	if (three_jack == 1 && two_queen == 1) {
		return 54;
	}

	if (three_jack == 1 && two_ten == 1) {
		return 55;
	}

	if (three_jack == 1 && two_nine == 1) {
		return 56;
	}

	if (three_jack == 1 && two_eight == 1) {
		return 57;
	}

	if (three_jack == 1 && two_seven == 1) {
		return 58;
	}

	if (three_jack == 1 && two_six == 1) {
		return 59;
	}

	if (three_jack == 1 && two_five == 1) {
		return 60;
	}

	if (three_jack == 1 && two_four == 1) {
		return 61;
	}

	if (three_jack == 1 && two_three == 1) {
		return 62;
	}

	if (three_jack == 1 && two_two == 1) {
		return 63;
	}
	


	//Three Ten
	if (three_ten == 1 && two_ace == 1) {
		return 64;
	}

	if (three_ten == 1 && two_king == 1) {
		return 65;
	}

	if (three_ten == 1 && two_queen == 1) {
		return 66;
	}

	if (three_ten == 1 && two_jack == 1) {
		return 67;
	}

	if (three_ten == 1 && two_nine == 1) {
		return 68;
	}

	if (three_ten == 1 && two_eight == 1) {
		return 69;
	}

	if (three_ten == 1 && two_seven == 1) {
		return 70;
	}

	if (three_ten == 1 && two_six == 1) {
		return 71;
	}

	if (three_ten == 1 && two_five == 1) {
		return 72;
	}

	if (three_ten == 1 && two_four == 1) {
		return 73;
	}

	if (three_ten == 1 && two_three == 1) {
		return 74;
	}

	if (three_ten == 1 && two_two == 1) {
		return 75;
	}


	//Three Nine
	if (three_nine == 1 && two_ace == 1) {
		return 76;
	}

	if (three_nine == 1 && two_king == 1) {
		return 77;
	}

	if (three_nine == 1 && two_queen == 1) {
		return 78;
	}

	if (three_nine == 1 && two_jack == 1) {
		return 79;
	}

	if (three_nine == 1 && two_ten == 1) {
		return 80;
	}

	if (three_nine == 1 && two_eight == 1) {
		return 81;
	}

	if (three_nine == 1 && two_seven == 1) {
		return 82;
	}

	if (three_nine == 1 && two_six == 1) {
		return 83;
	}

	if (three_nine == 1 && two_five == 1) {
		return 84;
	}

	if (three_nine == 1 && two_four == 1) {
		return 85;
	}

	if (three_nine == 1 && two_three == 1) {
		return 86;
	}

	if (three_nine == 1 && two_two == 1) {
		return 87;
	}





	//Three Eight
	if (three_eight == 1 && two_ace == 1) {
		return 88;
	}

	if (three_eight == 1 && two_king == 1) {
		return 89;
	}

	if (three_eight == 1 && two_queen == 1) {
		return 90;
	}

	if (three_eight == 1 && two_jack == 1) {
		return 91;
	}

	if (three_eight == 1 && two_ten == 1) {
		return 92;
	}

	if (three_eight == 1 && two_nine == 1) {
		return 93;
	}

	if (three_eight == 1 && two_seven == 1) {
		return 94;
	}

	if (three_eight == 1 && two_six == 1) {
		return 95;
	}

	if (three_eight == 1 && two_five == 1) {
		return 96;
	}

	if (three_eight == 1 && two_four == 1) {
		return 97;
	}

	if (three_eight == 1 && two_three == 1) {
		return 98;
	}

	if (three_eight == 1 && two_two == 1) {
		return 99;
	}




	//Three Seven
	if (three_seven == 1 && two_ace == 1) {
		return 100;
	}

	if (three_seven == 1 && two_king == 1) {
		return 101;
	}

	if (three_seven == 1 && two_queen == 1) {
		return 102;
	}

	if (three_seven == 1 && two_jack == 1) {
		return 103;
	}

	if (three_seven == 1 && two_ten == 1) {
		return 104;
	}

	if (three_seven == 1 && two_nine == 1) {
		return 105;
	}

	if (three_seven == 1 && two_eight == 1) {
		return 106;
	}

	if (three_seven == 1 && two_six == 1) {
		return 107;
	}

	if (three_seven == 1 && two_five == 1) {
		return 108;
	}

	if (three_seven == 1 && two_four == 1) {
		return 109;
	}

	if (three_seven == 1 && two_three == 1) {
		return 110;
	}

	if (three_seven == 1 && two_two == 1) {
		return 111;
	}




	//Three Six
	if (three_six == 1 && two_ace == 1) {
		return 112;
	}

	if (three_six == 1 && two_king == 1) {
		return 113;
	}

	if (three_six == 1 && two_queen == 1) {
		return 114;
	}

	if (three_six == 1 && two_jack == 1) {
		return 115;
	}

	if (three_six == 1 && two_ten == 1) {
		return 116;
	}

	if (three_six == 1 && two_nine == 1) {
		return 117;
	}

	if (three_six == 1 && two_eight == 1) {
		return 118;
	}

	if (three_six == 1 && two_seven == 1) {
		return 119;
	}

	if (three_six == 1 && two_five == 1) {
		return 120;
	}

	if (three_six == 1 && two_four == 1) {
		return 121;
	}

	if (three_six == 1 && two_three == 1) {
		return 122;
	}

	if (three_six == 1 && two_two == 1) {
		return 123;
	}






	//Three Five
	if (three_five == 1 && two_ace == 1) {
		return 124;
	}

	if (three_five == 1 && two_king == 1) {
		return 125;
	}

	if (three_five == 1 && two_queen == 1) {
		return 126;
	}

	if (three_five == 1 && two_jack == 1) {
		return 127;
	}

	if (three_five == 1 && two_ten == 1) {
		return 128;
	}

	if (three_five == 1 && two_nine == 1) {
		return 129;
	}

	if (three_five == 1 && two_eight == 1) {
		return 130;
	}

	if (three_five == 1 && two_seven == 1) {
		return 131;
	}

	if (three_five == 1 && two_six == 1) {
		return 132;
	}

	if (three_five == 1 && two_four == 1) {
		return 133;
	}

	if (three_five == 1 && two_three == 1) {
		return 134;
	}

	if (three_five == 1 && two_two == 1) {
		return 135;
	}






	//Three Four
	if (three_four == 1 && two_ace == 1) {
		return 136;
	}

	if (three_four == 1 && two_king == 1) {
		return 137;
	}

	if (three_four == 1 && two_queen == 1) {
		return 138;
	}

	if (three_four == 1 && two_jack == 1) {
		return 139;
	}

	if (three_four == 1 && two_ten == 1) {
		return 140;
	}

	if (three_four == 1 && two_nine == 1) {
		return 141;
	}

	if (three_four == 1 && two_eight == 1) {
		return 142;
	}

	if (three_four == 1 && two_seven == 1) {
		return 143;
	}

	if (three_four == 1 && two_six == 1) {
		return 144;
	}

	if (three_four == 1 && two_five == 1) {
		return 145;
	}

	if (three_four == 1 && two_three == 1) {
		return 146;
	}

	if (three_four == 1 && two_two == 1) {
		return 147;
	}





	//Three Three
	if (three_three == 1 && two_ace == 1) {
		return 148;
	}

	if (three_three == 1 && two_king == 1) {
		return 149;
	}

	if (three_three == 1 && two_queen == 1) {
		return 150;
	}

	if (three_three == 1 && two_jack == 1) {
		return 151;
	}

	if (three_three == 1 && two_ten == 1) {
		return 152;
	}

	if (three_three == 1 && two_nine == 1) {
		return 153;
	}

	if (three_three == 1 && two_eight == 1) {
		return 154;
	}

	if (three_three == 1 && two_seven == 1) {
		return 155;
	}

	if (three_three == 1 && two_six == 1) {
		return 156;
	}

	if (three_three == 1 && two_five == 1) {
		return 157;
	}

	if (three_three == 1 && two_four == 1) {
		return 158;
	}

	if (three_three == 1 && two_two == 1) {
		return 159;
	}




	//Three Three
	if (three_two == 1 && two_ace == 1) {
		return 160;
	}

	if (three_two == 1 && two_king == 1) {
		return 161;
	}

	if (three_two == 1 && two_queen == 1) {
		return 162;
	}

	if (three_two == 1 && two_jack == 1) {
		return 163;
	}

	if (three_two == 1 && two_ten == 1) {
		return 164;
	}

	if (three_two == 1 && two_nine == 1) {
		return 165;
	}

	if (three_two == 1 && two_eight == 1) {
		return 166;
	}

	if (three_two == 1 && two_seven == 1) {
		return 167;
	}

	if (three_two == 1 && two_six == 1) {
		return 168;
	}

	if (three_two == 1 && two_five == 1) {
		return 169;
	}

	if (three_two == 1 && two_four == 1) {
		return 170;
	}

	if (three_two == 1 && two_three == 1) {
		return 171;
	}

	//Flush is 172
	//Straight is 172

	//Start 173 ->
	//Double Pair
	//Two Pair Ace
	if (two_ace == 1 && two_king == 1) {
		return 174;
	}

	if (two_ace == 1 && two_queen == 1) {
		return 175;
	}

	if (two_ace == 1 && two_jack == 1) {
		return 176;
	}

	if (two_ace == 1 && two_ten == 1) {
		return 177;
	}

	if (two_ace == 1 && two_nine == 1) {
		return 178;
	}

	if (two_ace == 1 && two_eight == 1) {
		return 179;
	}

	if (two_ace == 1 && two_seven == 1) {
		return 180;
	}

	if (two_ace == 1 && two_six == 1) {
		return 181;
	}

	if (two_ace == 1 && two_five == 1) {
		return 182;
	}

	if (two_ace == 1 && two_four == 1) {
		return 183;
	}

	if (two_ace == 1 && two_three == 1) {
		return 184;
	}

	if (two_ace == 1 && two_two == 1) {
		return 185;
	}







	//Two Pair King 
	if (two_king == 1 && two_ace == 1) {
		return 186;
	}

	if (two_king == 1 && two_queen == 1) {
		return 187;
	}

	if (two_king == 1 && two_jack == 1) {
		return 188;
	}

	if (two_king == 1 && two_ten == 1) {
		return 189;
	}

	if (two_king == 1 && two_nine == 1) {
		return 190;
	}

	if (two_king == 1 && two_eight == 1) {
		return 191;
	}

	if (two_king == 1 && two_seven == 1) {
		return 192;
	}

	if (two_king == 1 && two_six == 1) {
		return 193;
	}

	if (two_king == 1 && two_five == 1) {
		return 194;
	}

	if (two_king == 1 && two_four == 1) {
		return 195;
	}

	if (two_king == 1 && two_three == 1) {
		return 196;
	}

	if (two_king == 1 && two_two == 1) {
		return 197;
	}






	//Two Pair Queen
	if (two_queen == 1 && two_ace == 1) {
		return 198;
	}

	if (two_queen == 1 && two_king == 1) {
		return 199;
	}

	if (two_queen == 1 && two_jack == 1) {
		return 200;
	}

	if (two_queen == 1 && two_ten == 1) {
		return 201;
	}

	if (two_queen == 1 && two_nine == 1) {
		return 202;
	}

	if (two_queen == 1 && two_eight == 1) {
		return 203;
	}

	if (two_queen == 1 && two_seven == 1) {
		return 204;
	}

	if (two_queen == 1 && two_six == 1) {
		return 205;
	}

	if (two_queen == 1 && two_five == 1) {
		return 206;
	}

	if (two_queen == 1 && two_four == 1) {
		return 207;
	}

	if (two_queen == 1 && two_three == 1) {
		return 208;
	}

	if (two_queen == 1 && two_two == 1) {
		return 209;
	}









	//Two Pair Jack
	if (two_jack == 1 && two_ace == 1) {
		return 210;
	}

	if (two_jack == 1 && two_king == 1) {
		return 211;
	}

	if (two_jack == 1 && two_queen == 1) {
		return 212;
	}

	if (two_jack == 1 && two_ten == 1) {
		return 213;
	}

	if (two_jack == 1 && two_nine == 1) {
		return 214;
	}

	if (two_jack == 1 && two_eight == 1) {
		return 215;
	}

	if (two_jack == 1 && two_seven == 1) {
		return 216;
	}

	if (two_jack == 1 && two_six == 1) {
		return 217;
	}

	if (two_jack == 1 && two_five == 1) {
		return 218;
	}

	if (two_jack == 1 && two_four == 1) {
		return 219;
	}

	if (two_jack == 1 && two_three == 1) {
		return 220;
	}

	if (two_jack == 1 && two_two == 1) {
		return 221;
	}


	




	//Two Pair Ten
	if (two_ten == 1 && two_ace == 1) {
		return 222;
	}

	if (two_ten == 1 && two_king == 1) {
		return 223;
	}

	if (two_ten == 1 && two_queen == 1) {
		return 224;
	}

	if (two_ten == 1 && two_jack == 1) {
		return 225;
	}

	if (two_ten == 1 && two_nine == 1) {
		return 226;
	}

	if (two_ten == 1 && two_eight == 1) {
		return 227;
	}

	if (two_ten == 1 && two_seven == 1) {
		return 228;
	}

	if (two_ten == 1 && two_six == 1) {
		return 229;
	}

	if (two_ten == 1 && two_five == 1) {
		return 230;
	}

	if (two_ten == 1 && two_four == 1) {
		return 231;
	}

	if (two_ten == 1 && two_three == 1) {
		return 232;
	}

	if (two_ten == 1 && two_two == 1) {
		return 233;
	}




	//Two Pair Nine
	if (two_nine == 1 && two_ace == 1) {
		return 234;
	}

	if (two_nine == 1 && two_king == 1) {
		return 235;
	}

	if (two_nine == 1 && two_queen == 1) {
		return 236;
	}

	if (two_nine == 1 && two_jack == 1) {
		return 237;
	}

	if (two_nine == 1 && two_ten == 1) {
		return 238;
	}

	if (two_nine == 1 && two_eight == 1) {
		return 239;
	}

	if (two_nine == 1 && two_seven == 1) {
		return 240;
	}

	if (two_nine == 1 && two_six == 1) {
		return 241;
	}

	if (two_nine == 1 && two_five == 1) {
		return 242;
	}

	if (two_nine == 1 && two_four == 1) {
		return 243;
	}

	if (two_nine == 1 && two_three == 1) {
		return 244;
	}

	if (two_nine == 1 && two_two == 1) {
		return 245;
	}






	//Two Pair Eight
	if (two_eight == 1 && two_ace == 1) {
		return 246;
	}

	if (two_eight == 1 && two_king == 1) {
		return 247;
	}

	if (two_eight == 1 && two_queen == 1) {
		return 248;
	}

	if (two_eight == 1 && two_jack == 1) {
		return 249;
	}

	if (two_eight == 1 && two_ten == 1) {
		return 250;
	}

	if (two_eight == 1 && two_nine == 1) {
		return 251;
	}

	if (two_eight == 1 && two_seven == 1) {
		return 252;
	}

	if (two_eight == 1 && two_six == 1) {
		return 253;
	}

	if (two_eight == 1 && two_five == 1) {
		return 254;
	}

	if (two_eight == 1 && two_four == 1) {
		return 255;
	}

	if (two_eight == 1 && two_three == 1) {
		return 256;
	}

	if (two_eight == 1 && two_two == 1) {
		return 257;
	}






	//Two Pair Seven
	if (two_seven == 1 && two_ace == 1) {
		return 258;
	}

	if (two_seven == 1 && two_king == 1) {
		return 259;
	}

	if (two_seven == 1 && two_queen == 1) {
		return 260;
	}

	if (two_seven == 1 && two_jack == 1) {
		return 261;
	}

	if (two_seven == 1 && two_ten == 1) {
		return 262;
	}

	if (two_seven == 1 && two_nine == 1) {
		return 263;
	}

	if (two_seven == 1 && two_eight == 1) {
		return 264;
	}

	if (two_seven == 1 && two_six == 1) {
		return 265;
	}

	if (two_seven == 1 && two_five == 1) {
		return 266;
	}

	if (two_seven == 1 && two_four == 1) {
		return 267;
	}

	if (two_seven == 1 && two_three == 1) {
		return 268;
	}

	if (two_seven == 1 && two_two == 1) {
		return 269;
	}







	//Two Pair Six
	if (two_six == 1 && two_ace == 1) {
		return 270;
	}

	if (two_six == 1 && two_king == 1) {
		return 271;
	}

	if (two_six == 1 && two_queen == 1) {
		return 272;
	}

	if (two_six == 1 && two_jack == 1) {
		return 273;
	}

	if (two_six == 1 && two_ten == 1) {
		return 274;
	}

	if (two_six == 1 && two_nine == 1) {
		return 275;
	}

	if (two_six == 1 && two_eight == 1) {
		return 276;
	}

	if (two_six == 1 && two_seven == 1) {
		return 277;
	}

	if (two_six == 1 && two_five == 1) {
		return 278;
	}

	if (two_six == 1 && two_four == 1) {
		return 279;
	}

	if (two_six == 1 && two_three == 1) {
		return 280;
	}

	if (two_six == 1 && two_two == 1) {
		return 281;
	}








	//Two Pair Five
	if (two_five == 1 && two_ace == 1) {
		return 282;
	}

	if (two_five == 1 && two_king == 1) {
		return 283;
	}

	if (two_five == 1 && two_queen == 1) {
		return 284;
	}

	if (two_five == 1 && two_jack == 1) {
		return 285;
	}

	if (two_five == 1 && two_ten == 1) {
		return 286;
	}

	if (two_five == 1 && two_nine == 1) {
		return 287;
	}

	if (two_five == 1 && two_eight == 1) {
		return 288;
	}

	if (two_five == 1 && two_seven == 1) {
		return 289;
	}

	if (two_five == 1 && two_six == 1) {
		return 290;
	}

	if (two_five == 1 && two_four == 1) {
		return 291;
	}

	if (two_five == 1 && two_three == 1) {
		return 292;
	}

	if (two_five == 1 && two_two == 1) {
		return 293;
	}

	







	//Two Pair Four
	if (two_four == 1 && two_ace == 1) {
		return 294;
	}

	if (two_four == 1 && two_king == 1) {
		return 295;
	}

	if (two_four == 1 && two_queen == 1) {
		return 296;
	}

	if (two_four == 1 && two_jack == 1) {
		return 297;
	}

	if (two_four == 1 && two_ten == 1) {
		return 298;
	}

	if (two_four == 1 && two_nine == 1) {
		return 299;
	}

	if (two_four == 1 && two_eight == 1) {
		return 300;
	}

	if (two_four == 1 && two_seven == 1) {
		return 301;
	}

	if (two_four == 1 && two_six == 1) {
		return 302;
	}

	if (two_four == 1 && two_five == 1) {
		return 303;
	}

	if (two_four == 1 && two_three == 1) {
		return 304;
	}

	if (two_four == 1 && two_two == 1) {
		return 305;
	}








	//Two Pair Three
	if (two_three == 1 && two_ace == 1) {
		return 306;
	}

	if (two_three == 1 && two_king == 1) {
		return 307;
	}

	if (two_three == 1 && two_queen == 1) {
		return 308;
	}

	if (two_three == 1 && two_jack == 1) {
		return 309;
	}

	if (two_three == 1 && two_ten == 1) {
		return 310;
	}

	if (two_three == 1 && two_nine == 1) {
		return 311;
	}

	if (two_three == 1 && two_eight == 1) {
		return 312;
	}

	if (two_three == 1 && two_seven == 1) {
		return 313;
	}

	if (two_three == 1 && two_six == 1) {
		return 314;
	}

	if (two_three == 1 && two_five == 1) {
		return 315;
	}

	if (two_three == 1 && two_four == 1) {
		return 316;
	}

	if (two_three == 1 && two_two == 1) {
		return 317;
	}







	//Two Pair Two
	if (two_two == 1 && two_ace == 1) {
		return 318;
	}

	if (two_two == 1 && two_king == 1) {
		return 319;
	}

	if (two_two == 1 && two_queen == 1) {
		return 320;
	}

	if (two_two == 1 && two_jack == 1) {
		return 321;
	}

	if (two_two == 1 && two_ten == 1) {
		return 322;
	}

	if (two_two == 1 && two_nine == 1) {
		return 323;
	}

	if (two_two == 1 && two_eight == 1) {
		return 324;
	}

	if (two_two == 1 && two_seven == 1) {
		return 325;
	}

	if (two_two == 1 && two_six == 1) {
		return 326;
	}

	if (two_two == 1 && two_five == 1) {
		return 327;
	}

	if (two_two == 1 && two_four == 1) {
		return 328;
	}

	if (two_two == 1 && two_three == 1) {
		return 329;
	}


	//Check Three of a kind
	if (three_ace == 1) {
		return 330;
	}
	if (three_king == 1) {
		return 331;
	}
	if (three_queen == 1) {
		return 332;
	}
	if (three_jack == 1) {
		return 333;
	}
	if (three_ten == 1) {
		return 334;
	}
	if (three_nine == 1) {
		return 335;
	}
	if (three_eight == 1) {
		return 336;
	}
	if (three_seven == 1) {
		return 337;
	}
	if (three_six == 1) {
		return 338;
	}
	if (three_five == 1) {
		return 339;
	}
	if (three_four == 1) {
		return 340;
	}
	if (three_three == 1) {
		return 341;
	}
	if (three_two == 1) {
		return 342;
	}



	if (two_ace == 1) {
		return 343;
	}
	if (two_king == 1) {
		return 344;
	}
	if (two_queen == 1) {
		return 345;
	}
	if (two_jack == 1) {
		return 346;
	}
	if (two_ten == 1) {
		return 347;
	}
	if (two_nine == 1) {
		return 348;
	}
	if (two_eight == 1) {
		return 349;
	}
	if (two_seven == 1) {
		return 350;
	}
	if (two_six == 1) {
		return 351;
	}
	if (two_five == 1) {
		return 352;
	}
	if (two_four == 1) {
		return 353;
	}
	if (two_three == 1) {
		return 354;
	}
	if (two_two == 1) {
		return 355;
	}

	return 0;
	//High Card
	//59 - 71

	
}




function play_game(wager, start_val) {
	cCard1.setAttribute('src',"Cards/black_joker.png" );
	cCard2.setAttribute('src',"Cards/black_joker.png" );
	cCard3.setAttribute('src',"Cards/black_joker.png" );
	cCard4.setAttribute('src',"Cards/black_joker.png" );
	cCard5.setAttribute('src',"Cards/black_joker.png" );
    let start = true;
    let exit = false;
    let swapC = false;
	document.querySelector(".New").style.visibility = 'hidden';
	SV.style.visibility = 'hidden';

    st_once = true;
    if (start == true && exit == false) {
		let win = 0;
		let loss = 0;
		let tied = 0;
		let i = 0;
		//console.log(i);
        let pHand = [];
        let cHand = [];
        TIT.style.visibility = "hidden";
		SV.style.visibility = "hidden";
        STAR.style.visibility = "hidden";
        TIT.innerText = "Poker";
        TIT.style.visibility = "visible";
        //pCard1.setAttribute('src', "Cards/black_joker.png");

        shuffleDeck(deck);
        //console.log(deck);
        cardDraw(i,pHand);
        i += 5;
        sort_deck(pHand);
        //console.log(pHand);
        if(i > 52) {
            shuffleDeck(deck);
            i = i % 52;
        }
        cardDraw(i,cHand);
        sort_deck(cHand);
        i += 5;
        if(i > 52) {
            shuffleDeck(deck);
            i = i % 52;
        }

        printP_Hand(pHand);
        //printC_Hand(cHand);


        
        swapC = true;
		//let new_i = i;
		//i = 0;
        let swapR = -1;
        let count  = 0;
        let used = [];
        let sel_once = false;
        SV.style.visibility = 'visible';
        document.body.addEventListener('keypress', (e) =>{
            if(e.key === 'Enter' && swapC == true) {
                let numSwap = document.querySelector(".num2").value;
                let swapR = numSwap;
                if(swapR > 0 && swapR < 6 && count < 5) {
                    if(i > 52) {
                        shuffleDeck(deck);
                        i = i % 52;
                    }
                    console.log(swapR);
                    pHand[swapR - 1] = deck[i];
                    i++;
                    count++; 
                    console.log(count);
                    printP_Hand(pHand);
                    numSwap.value = '';
                }
            }
            if(e.key === 'Enter', e.shiftKey == true && swapC == true) {
				SV.style.visibility = 'hidden';
				swapC = false;
				//pHand = [1, 24, 8, 43, 41];
				//cHand = [37, 36, 34, 4, 15];
                sort_deck(pHand);
				sort_deck(cHand);
                printP_Hand(pHand);
				printC_Hand(cHand);

                let p_val = check_hand(pHand);
                let c_val = check_hand(cHand);
				console.log('\n');
				console.log('\n');
				//p_val = 0;
				//c_val = 0;
                console.log(p_val);
                console.log(c_val);
                print_comb(p_val);
                print_comb(c_val);





                if (p_val == 0 && c_val == 0) {
                    let card;
                    let suit;
                    let suit_val;
                    let high_card_p;
                    let high_card_c;
                    let check = 1;
                
                    card = pHand[0];
                    if (card <= 13) {
                        suit = 1;
                        suit_val = 0;
                    }
                    if (card > 13 && card <= 26) {
                        suit = 2;
                        suit_val = 13;
                    }
                    if (card > 26 && card <= 39) {
                        suit = 3;
                        suit_val = 26;
                    }
                    if (card > 39 && card <= 52) {
                        suit = 4;
                        suit_val = 39;
                    }
                    if (check == 1) {
                        high_card_p = pHand[0];
                        for (let i = 0; i < 5; i++) {
                            for (let j = 0; j < 5; j++) {
                                if (high_card_p % 13 < pHand[j] % 13 || high_card_p % 13 == 1 || pHand[j] % 13 == 1 || high_card_p % 13 == 0 || pHand[j] % 13 == 0) {
                                    if (pHand[j] % 13 == 1 || high_card_p % 13 == 1) {
                                        high_card_p = 14;
                                        break;
                                    }
                                    if (pHand[j] % 13 == 0 || high_card_p % 13 == 0 && pHand[j] % 13 != 1 || high_card_p % 13 != 1) {
                                        high_card_p = 13;
                                    }
								}
                                else { high_card_p = pHand[j] % 13; }
                            }
                        }
                        check -= 1;
                    }
                    if (check == 0) {
                        high_card_c = cHand[0];
                        for (let i = 0; i < 5; i++) {
                            for (let j = 0; j < 5; j++) {
                                if (high_card_c % 13 < cHand[j] % 13 || high_card_c % 13 == 1 || cHand[j] % 13 == 1 || high_card_c % 13 == 0 || cHand[j] % 13 == 0) {
                                    if (cHand[j] % 13 == 1 || high_card_c % 13 == 1) {
                                        high_card_c = 14;
                                        break;
                                    }
                                    if (cHand[j] % 13 == 0 || high_card_c % 13 == 0 && cHand[j] % 13 != 1 || high_card_c % 13 != 1) {
                                        high_card_c = 13;
                                    }
								}
                                else { high_card_c = cHand[j] % 13; }
                            }
                        }
                    }
                    //console.log("\n%d", high_card_p);
                    //console.log("\n%d", high_card_c);
                    if (high_card_p > high_card_c) {
                        console.log("\nHigh card is: %d", high_card_p);
                        console.log("\nPlayer Wins\n");
                        console.log("\nPlayer Hand is: ");
                        console.log(pHand);
                        console.log("\n");
                        console.log("\nComputer Hand is: ");
                        console.log(cHand);
						winLoss.innerText = 'You Won';
                        console.log("\nYou Won");
						win = 1;
						loss = 0;
						tied = 0;

						//important
						//return 2;


                    }
                    if (high_card_p < high_card_c) {
                        console.log("\nHigh card is: %d", high_card_c);
                        console.log("\nComputer Wins\n");
                        console.log("\nPlayer Hand is: ");
                        w = 0;
                        console.log(pHand);
                        console.log("\n");
                        console.log("\nComputer Hand is: ");
                        w = 0;
                        console.log(cHand);
                        console.log("\nYou lost");
						winLoss.innerText = 'You Lost';
						win = 0;
						loss = 1;
						tied = 0;


						//important
						//return 2;

                
                    }
                    if (high_card_p == high_card_c) {
                        console.log("\nHigh Card Tie");
                        console.log("\nPlayer Hand is: ");
                        console.log(pHand);
                        console.log("\n");
                        console.log("\nComputer Hand is: ");
                        console.log(cHand);
						winLoss.innerText = 'You Tied';
						tied = 1;
						win = 0;
						loss = 0;
						tied = 1;


						//important
						//return 2;

                        
                    }
                
                
                }
                
                
                if (p_val == 1 && c_val == 1 || p_val == 2 && c_val == 2) {
                    if (p_val == 1) {
                        console.log("Royal Flush\n");
                    }
                    if (p_val == 2) {
                        console.log("Straight Flush\n");
                    }
                    console.log("The Game Tied");
                    console.log("\nPlayer Hand is: ");
                    console.log(pHand);
                    console.log("\n");
                    console.log("\nComputer Hand is: ");
                    console.log(cHand);
					winLoss.innerText = 'You Tied';
					win = 0;
					loss = 0;
					tied = 1;
                }
                
                
                if (p_val == 172 && c_val == 172 || p_val == 173 && c_val == 173) {
                    let card;
                    let suit;
                    let suit_val;
                    let high_card_p;
                    let high_card_c;
                    let check = 1;
                
                    card = pHand[0];
                    if (card <= 13) {
                        suit = 1;
                        suit_val = 0;
                    }
                    if (card > 13 && card <= 26) {
                        suit = 2;
                        suit_val = 13;
                    }
                    if (card > 26 && card <= 39) {
                        suit = 3;
                        suit_val = 26;
                    }
                    if (card > 39 && card <= 52) {
                        suit = 4;
                        suit_val = 39;
                    }
                    if (check == 1) {
                        high_card_p = pHand[0];
                        for (let i = 0; i < 5; i++) {
                            for (let j = 0; j < 5; j++) {
                                if (high_card_p % 13 < pHand[j] % 13 || high_card_p % 13 == 1 || pHand[j] % 13 == 1 || high_card_p % 13 == 0 || pHand[j] % 13 == 0) {
                                    if (pHand[j] % 13 == 1 || high_card_p % 13 == 1) {
                                        high_card_p = 14;
                                        break;
                                    }
                                    if (pHand[j] % 13 == 0 || high_card_p % 13 == 0 && pHand[j] % 13 != 1 || high_card_p % 13 != 1) {
                                        high_card_p = 13;
                                    }
								}
                                else { high_card_p = pHand[j] % 13; }
                            }
                        }
                        check -= 1;
                    }
                    if (check == 0) {
                        high_card_c = cHand[0];
                        for (let i = 0; i < 5; i++) {
                            for (let j = 0; j < 5; j++) {
                                if (high_card_c % 13 < cHand[j] % 13 || high_card_c % 13 == 1 || cHand[j] % 13 == 1 || high_card_c % 13 == 0 || cHand[j] % 13 == 0) {
                                    if (cHand[j] % 13 == 1 || high_card_c % 13 == 1) {
                                        high_card_c = 14;
                                        break;
                                    }
                                    if (cHand[j] % 13 == 0 || high_card_c % 13 == 0 && cHand[j] % 13 != 1 || high_card_c % 13 != 1) {
                                        high_card_c = 13;
                                    }
								}
                                else { high_card_c = cHand[j] % 13; }
                            }
                        }
                    }
                
                    high_card_p = 14;
                    high_card_c = 14;
                    if (high_card_p > high_card_c) {
                        if (p_val == 172) {
                            console.log("Flush\n");
                        }
                        if (p_val == 173) {
                            console.log("Straight Flush\n");
                        }
                        console.log("High Card is %d", high_card_p);
                        console.log("\nPlayer Wins\n");
                        console.log("\nPlayer Hand is: ");
                        console.log(pHand);
                        console.log("\n");
                        console.log("\nComputer Hand is: ");
                        console.log(cHand);
                        console.log("\nYou won");
						winLoss.innerText = 'You Won';
						win = 1;
						loss = 0;
						tied = 0;
                    }
                    if (high_card_p < high_card_c) {
                        console.log("\nComputer Wins\n");
                        console.log("\nPlayer Hand is: ");
                        console.log(pHand);
                        console.log("\n");
                        console.log("\nComputer Hand is: ");
                        console.log(cHand);
                        console.log("\nYou lost");
						winLoss.innerText = 'You Lost';
						win = 0;
						loss = 1;
						tied = 0;
                
                    }
                    if (high_card_p == high_card_c) {
                        console.log("\nHigh Card Tie");
                        console.log("\nPlayer Hand is: ");
                        console.log(pHand);
                        console.log("\n");
                        console.log("\nComputer Hand is: ");
                        console.log(cHand);
						winLoss.innerText = 'You Tied';
						win = 0;
						loss = 0;
						tied = 1;

                    }
                
                
                }
                
                //P val w/o 0
                if (p_val < c_val && p_val > 0) {
                    console.log("\nPlayer Wins\n");
                    console.log("\nPlayer Hand is: ");
                    console.log(pHand);
                    console.log("\n");
                    console.log("\nComputer Hand is: ");
                    console.log(cHand);
             
                    console.log("\nYou won");
					winLoss.innerText = 'You Won';
					win = 1;
					loss = 0;
					tied = 0;
                }
                
                //P val w 0
                if (p_val < c_val && p_val == 0) {
                    console.log("\nComputer Wins\n");
                    console.log("\nPlayer Hand is: ");
                    console.log(pHand);
                    console.log("\n");
                    console.log("\nComputer Hand is: ");
                    console.log(cHand);
                    console.log("\nYou lost");
					winLoss.innerText = 'You Lost';
					win = 0;
					loss = 1;
					tied = 0;
                }
                
                //C val w/o 0
                if (c_val < p_val && c_val > 0) {
                    console.log("\nComputer Wins\n");
                    console.log("\nPlayer Hand is: ");
                    console.log(pHand);
                    console.log("\n");
                    console.log("\nComputer Hand is: ");
                    console.log(cHand);
                    console.log("\nYou lost");
					winLoss.innerText = 'You Lost';
					win = 0;
					loss = 1;
					tied = 0;
                }
                
                //C val w 0 
                if (c_val < p_val && c_val == 0) {
                    console.log("\nPlayer Wins\n");
                    console.log("\nPlayer Hand is: ");
                    console.log(pHand);
                    console.log("\n");
                    console.log("\nComputer Hand is: ");
                    console.log(cHand);
             
                    console.log("\nYou won");
					winLoss.innerText = 'You Won';
					win = 1;
					loss = 0;
					tied = 0;
                }
                
                
                if (p_val == c_val && (p_val != 1 && c_val != 1) && (p_val != 2 && c_val != 2) && (p_val != 172 && c_val != 172) && (p_val != 173 && c_val != 173) && (p_val != 0 && c_val != 0)) {
                    console.log("The Game is a Tie");
                    console.log("\nPlayer Hand is: ");
                    console.log(pHand);
                    console.log("\n");
                    console.log("\nComputer Hand is: ");
                    console.log(cHand);
					winLoss.innerText = 'You Tied';
					win = 0;
					loss = 0;
					tied = 1;
                }

                document.querySelector(".New").style.visibility = 'visible';
                let playB = document.querySelector(".submit");
                playB.addEventListener('click', function() {
                    let newG = document.querySelector(".new2").value
					if (newG == 2) {
						if (win == 1) {
							console.log('win');
							start_val += wager;
							win = 0;
							loss = 0;
							tied = 0;
							return;
						}
						if (loss == 1) {
							console.log('loss');
							start_val -= wager;
							win = 0;
							loss = 0;
							tied = 0;
							return;

						}
						if (tied == 1) {
							console.log('tied');
							win = 0;
							loss = 0;
							tied = 0;
							val = 0;
							return;
						}
						console.log(start_val);
						//return start_val;

					}
					//console.log(start_val);
					if (newG == 1) {
						exit == true;
						console.log("YOU HAD: ", start_val ," POINTS");
						
						pCard1.setAttribute('src',"Cards/red_joker.png" );
						pCard2.setAttribute('src',"Cards/red_joker.png" );
						pCard3.setAttribute('src',"Cards/red_joker.png" );
						pCard4.setAttribute('src',"Cards/red_joker.png" );
						pCard5.setAttribute('src',"Cards/red_joker.png" );


						cCard1.setAttribute('src',"Cards/black_joker.png" );
						cCard2.setAttribute('src',"Cards/black_joker.png" );
						cCard3.setAttribute('src',"Cards/black_joker.png" );
						cCard4.setAttribute('src',"Cards/black_joker.png" );
						cCard5.setAttribute('src',"Cards/black_joker.png" );

						
					}

                });

            }
        });
        //break;

    }


}














































play_game(wager, start_val);

console.log(start_val);
























let count_times;



function checkKeyPress(e) {
    if (e.keyCode == "13" && st_once == false) {


        console.log(st_once);
        play_game(wager, start_val)
        
    }
	//play_game(i);
}

