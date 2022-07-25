#include "header2.h"
const char* suit[4]{SPADE, CLUB, HEART, DIAMOND};


const char* face[13]{ "ACE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN", "JACK", "QUEEN", "KING" };

char face_n[13][7]{"ACE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN", "JACK", "QUEEN", "KING";};



//char index_s[52][10];

//struct index_c {
//	char card[]
//}

void shuffle(int wDeck[][13])
{
	int row = 0;    /* row number */
	int column = 0; /*column number */
	int card = 0;   /* card counter */

	/* for each of the 52 cards, choose slot of deck randomly */
	for (card = 1; card <= 52; card++)
	{
		/* choose new random location until unoccupied slot found */
		do
		{
			//delay(1);
			row = rand() % 4;
			column = rand() % 13;
		} while (wDeck[row][column] != 0);

		/* place card number in chosen slot of deck */
		wDeck[row][column] = card;
	}
}

void shuffle_n(int wDeck[][13])
{
	int row = 0;    /* row number */
	int column = 0; /*column number */
	int card = 0;   /* card counter */
	int index = 1;

	/* for each of the 52 cards, choose slot of deck randomly */
	for (card = 1; card <= 52; card++)
	{
		/* choose new random location until unoccupied slot found */
		for (row = 0; row <= 3; row++)
		{
			/* loop through columns of wDeck for current row */
			for (column = 0; column <= 12; column++) {
				wDeck[row][column] = index;
				//char str[20] = strcat(wSuit[column], wFace[row])
				index++;
			}
		}
		/* place card number in chosen slot of deck */
		//wDeck[row][column] = card;
		//index++;
	}
}

void deal(const int wDeck[][13], const char* wFace[], const char* wSuit[])
{
	int row = 0;    /* row number */
	int column = 0; /*column number */
	int card = 0;   /* card counter */

	/* deal each of the 52 cards */
	for (card = 1; card <= 52; card++)
	{
		/* loop through rows of wDeck */
		for (row = 0; row <= 3; row++)
		{
			/* loop through columns of wDeck for current row */
			for (column = 0; column <= 12; column++)
			{
				/* if slot contains current card, display card */
				if (wDeck[row][column] == card)
				{
					//printf("%d%5s of %-8s\n", card,wFace[column], wSuit[row]); //card % 2 == 0);//? '\n' );// : '\t');
				}
			}
		}
	}
}

//void index_deck(int wDeck[][13], char *index_s) {
//	int row = 0;    /* row number */
//	int column = 0; /*column number */
//	int card = 0;
//	int count = 1;/* card counter */
//	//for (card = 1; card <= 52; card++)
//	//{
//		/* choose new random location until unoccupied slot found */
//		for (row = 0; row <= 3; row++)
//		{
//			/* loop through columns of wDeck for current row */
//			for (column = 0; column <= 12; column++) {
//
//				char str[20];
//				strcat(str, suit[row]);
//				strcat(str, face_n[column]);
//				index_s[count] = str;
//
//			}
//		}
//	//}
//}


void shuffle(int wDeck[][13]);
void shuffle_n(int wDeck[][13]);
void deal(const int wDeck[][13], const char* wFace[], const char* wSuit[]);









int main() {

	//Initilize spades
	char s_ace[10] = "[\x06\aACE]";
	char s_two[10] = "[\x06\aTWO]";
	char s_three[10] = "[\x06\aTHREE]";
	char s_four[10] = "[\x06\aFOUR]";
	char s_five[10] = "[\x06\aFIVE]";
	char s_six[10] = "[\x06\aSIX]";
	char s_seven[10] = "[\x06\aSEVEN]";
	char s_eight[10] = "[\x06\aEIGHT]";
	char s_nine[10] = "[\x06\aNINE]";
	char s_ten[10] = "[\x06\aTEN]";
	char s_jack[10] = "[\x06\aJACK]";
	char s_queen[10] = "[\x06\aQUEEN]";
	char s_king[10] = "[\x06\aKING]";




	//Initilize clubs
	char c_ace[10] = "[\x05\aACE]";
	char c_two[10] = "[\x05\aTWO]";
	char c_three[10] = "[\x05\aTHREE]";
	char c_four[10] = "[\x05\aFOUR]";
	char c_five[10] = "[\x05\aFIVE]";
	char c_six[10] = "[\x05\aSIX]";
	char c_seven[10] = "[\x05\aSEVEN]";
	char c_eight[10] = "[\x05\aEIGHT]";
	char c_nine[10] = "[\x05\aNINE]";
	char c_ten[10] = "[\x05\aTEN]";
	char c_jack[10] = "[\x05\aJACK]";
	char c_queen[10] = "[\x05\aQUEEN]";
	char c_king[10] = "[\x05\aKING]";

	
	//Initilize hearts
	char h_ace[10] = "[\x03\aACE]";
	char h_two[10] = "[\x03\aTWO]";
	char h_three[10] = "[\x03\aTHREE]";
	char h_four[10] = "[\x03\aFOUR]";
	char h_five[10] = "[\x03\aFIVE]";
	char h_six[10] = "[\x03\aSIX]";
	char h_seven[10] = "[\x03\aSEVEN]";
	char h_eight[10] = "[\x03\aEIGHT]";
	char h_nine[10] = "[\x03\aNINE]";
	char h_ten[10] = "[\x03\aTEN]";
	char h_jack[10] = "[\x03\aJACK]";
	char h_queen[10] = "[\x03\aQUEEN]";
	char h_king[10] = "[\x03\aKING]";


	//Initilize diamonds
	char d_ace[10] = "[\x04\aACE]";
	char d_two[10] = "[\x04\aTWO]";
	char d_three[10] = "[\x04\aTHREE]";
	char d_four[10] = "[\x04\aFOUR]";
	char d_five[10] = "[\x04\aFIVE]";
	char d_six[10] = "[\x04\aSIX]";
	char d_seven[10] = "[\x04\aSEVEN]";
	char d_eight[10] = "[\x04\aEIGHT]";
	char d_nine[10] = "[\x04\aNINE]";
	char d_ten[10] = "[\x04\aTEN]";
	char d_jack[10] = "[\x04\aJACK]";
	char d_queen[10] = "[\x04\aQUEEN]";
	char d_king[10] = "[\x04\aKING]";









	int start = game_menu();
	if (start == 1) {

		//build a starting amount

		int play_bet;
		printf("\nEnter the total to gamble in $: ");
		scanf("%d", &play_bet);

		//Stuff
		int turn_c = 0;
		int i = 0;
		int j = 0;
		int walk = 0;
		int w = 0;

		//Player
		int hand[5];
		int num_cards_p = 0;

		//Computer
		int hand_c[5];
		int num_cards_c = 0;

		//Deck
		int deck[4][13] = { 0 };
		srand((unsigned)time(NULL));
		shuffle(deck);
		deal(deck, face, suit);
		//printf("%d", deck[0][2]);

		while (walk == 0) {
			int wager;
			printf("\nEnter the amount you would like to wager: ");
			scanf("%d", &wager);
			while (wager > play_bet) {
				printf("\nInsufficient Funds");
				printf("\nEnter the amount you would like to wager: ");
				scanf("%d", &wager);
			}
			num_cards_p = 0;
			num_cards_c = 0;
			//Deal player and Computer Cards
			if (j == 3) {
				srand((unsigned)time(NULL));
				shuffle(deck);
			}
			//Player draw
			printf("\nPlayer Hand:\n");
			while (num_cards_p < 5) {
				// conditionalize spades
				//delay(3);
				if (i >= 13) {
					i = 0;
					j += 1;
				}
				int card = deck[j][i];
				if (card == 1) {
					printf("%s", s_ace);
					hand[num_cards_p] = 1;
					num_cards_p += 1;
				}
				if (card == 2) {
					printf("%s", s_two);
					hand[num_cards_p] = 2;
					num_cards_p += 1;
				}
				if (card == 3) {
					printf("%s", s_three);
					hand[num_cards_p] = 3;
					num_cards_p += 1;
				}
				if (card == 4) {
					printf("%s", s_four);
					hand[num_cards_p] = 4;
					num_cards_p += 1;
				}
				if (card == 5) {
					printf("%s", s_five);
					hand[num_cards_p] = 5;
					num_cards_p += 1;
				}
				if (card == 6) {
					printf("%s", s_six);
					hand[num_cards_p] = 6;
					num_cards_p += 1;
				}
				if (card == 7) {
					printf("%s", s_seven);
					hand[num_cards_p] = 7;
					num_cards_p += 1;
				}
				if (card == 8) {
					printf("%s", s_eight);
					hand[num_cards_p] = 8;
					num_cards_p += 1;
				}
				if (card == 9) {
					printf("%s", s_nine);
					hand[num_cards_p] = 9;
					num_cards_p += 1;
				}
				if (card == 10) {
					printf("%s", s_ten);
					hand[num_cards_p] = 10;
					num_cards_p += 1;
				}
				if (card == 11) {
					printf("%s", s_jack);
					hand[num_cards_p] = 11;
					num_cards_p += 1;
				}
				if (card == 12) {
					printf("%s", s_queen);
					hand[num_cards_p] = 12;
					num_cards_p += 1;
				}
				if (card == 13) {
					printf("%s", s_king);
					hand[num_cards_p] = 13;
					num_cards_p += 1;
				}


				//conditionalize clubs

				if (card == 14) {
					printf("%s", c_ace);
					hand[num_cards_p] = 14;
					num_cards_p += 1;
				}
				if (card == 15) {
					printf("%s", c_two);
					hand[num_cards_p] = 15;
					num_cards_p += 1;
				}
				if (card == 16) {
					printf("%s", c_three);
					hand[num_cards_p] = 16;
					num_cards_p += 1;
				}
				if (card == 17) {
					printf("%s", c_four);
					hand[num_cards_p] = 17;
					num_cards_p += 1;
				}
				if (card == 18) {
					printf("%s", c_five);
					hand[num_cards_p] = 18;
					num_cards_p += 1;
				}
				if (card == 19) {
					printf("%s", c_six);
					hand[num_cards_p] = 19;
					num_cards_p += 1;
				}
				if (card == 20) {
					printf("%s", c_seven);
					hand[num_cards_p] = 20;
					num_cards_p += 1;
				}
				if (card == 21) {
					printf("%s", c_eight);
					hand[num_cards_p] = 21;
					num_cards_p += 1;
				}
				if (card == 22) {
					printf("%s", c_nine);
					hand[num_cards_p] = 22;
					num_cards_p += 1;
				}
				if (card == 23) {
					printf("%s", c_ten);
					hand[num_cards_p] = 23;
					num_cards_p += 1;
				}
				if (card == 24) {
					printf("%s", c_jack);
					hand[num_cards_p] = 24;
					num_cards_p += 1;
				}
				if (card == 25) {
					printf("%s", c_queen);
					hand[num_cards_p] = 25;
					num_cards_p += 1;
				}
				if (card == 26) {
					printf("%s", c_king);
					hand[num_cards_p] = 26;
					num_cards_p += 1;
				}

				//conditionalize hearts

				if (card == 27) {
					printf("%s", h_ace);
					hand[num_cards_p] = 27;
					num_cards_p += 1;
				}
				if (card == 28) {
					printf("%s", h_two);
					hand[num_cards_p] = 28;
					num_cards_p += 1;
				}
				if (card == 29) {
					printf("%s", h_three);
					hand[num_cards_p] = 29;
					num_cards_p += 1;
				}
				if (card == 30) {
					printf("%s", h_four);
					hand[num_cards_p] = 30;
					num_cards_p += 1;
				}
				if (card == 31) {
					printf("%s", h_five);
					hand[num_cards_p] = 31;
					num_cards_p += 1;
				}
				if (card == 32) {
					printf("%s", h_six);
					hand[num_cards_p] = 1;
					num_cards_p += 1;
				}
				if (card == 33) {
					printf("%s", h_seven);
					hand[num_cards_p] = 33;
					num_cards_p += 1;
				}
				if (card == 34) {
					printf("%s", h_eight);
					hand[num_cards_p] = 34;
					num_cards_p += 1;
				}
				if (card == 35) {
					printf("%s", h_nine);
					hand[num_cards_p] = 35;
					num_cards_p += 1;
				}
				if (card == 36) {
					printf("%s", h_ten);
					hand[num_cards_p] = 36;
					num_cards_p += 1;
				}
				if (card == 37) {
					printf("%s", h_jack);
					hand[num_cards_p] = 37;
					num_cards_p += 1;
				}
				if (card == 38) {
					printf("%s", h_queen);
					hand[num_cards_p] = 38;
					num_cards_p += 1;
				}
				if (card == 39) {
					printf("%s", h_king);
					hand[num_cards_p] = 39;
					num_cards_p += 1;
				}

				//conditionalize diamonds

				if (card == 40) {
					printf("%s", d_ace);
					hand[num_cards_p] = 40;
					num_cards_p += 1;
				}
				if (card == 41) {
					printf("%s", d_two);
					hand[num_cards_p] = 41;
					num_cards_p += 1;
				}
				if (card == 42) {
					printf("%s", d_three);
					hand[num_cards_p] = 42;
					num_cards_p += 1;
				}
				if (card == 43) {
					printf("%s", d_four);
					hand[num_cards_p] = 43;
					num_cards_p += 1;
				}
				if (card == 44) {
					printf("%s", d_five);
					hand[num_cards_p] = 44;
					num_cards_p++;
				}
				if (card == 45) {
					printf("%s", d_six);
					hand[num_cards_p] = 45;
					num_cards_p += 1;
				}
				if (card == 46) {
					printf("%s", d_seven);
					hand[num_cards_p] = 46;
					num_cards_p += 1;
				}
				if (card == 47) {
					printf("%s", d_eight);
					hand[num_cards_p] = 47;
					num_cards_p += 1;
				}
				if (card == 48) {
					printf("%s", d_nine);
					hand[num_cards_p] = 48;
					num_cards_p += 1;
				}
				if (card == 49) {
					printf("%s", d_ten);
					hand[num_cards_p] = 49;
					num_cards_p += 1;
				}
				if (card == 50) {
					printf("%s", d_jack);
					hand[num_cards_p] = 50;
					num_cards_p += 1;
				}
				if (card == 51) {
					printf("%s", d_queen);
					hand[num_cards_p] = 51;
					num_cards_p += 1;
				}
				if (card == 52) {
					printf("%s", d_king);
					hand[num_cards_p] = 52;
					num_cards_p += 1;
				}

				i++;

			}
			if (j == 3) {
				srand((unsigned)time(NULL));
				shuffle(deck);
			}
			printf("\n");

			//Computer Draw
			printf("\nComputer Hand:\n");
			while (num_cards_c < 5) {
				// conditionalize spades
				//delay(3);
				if (i >= 13) {
					i = 0;
					j += 1;
				}
				int card = deck[j][i];
				if (card == 1) {
					printf("%s", s_ace);
					hand_c[num_cards_c] = 1;
					num_cards_c += 1;
				}
				if (card == 2) {
					printf("%s", s_two);
					hand_c[num_cards_c] = 2;
					num_cards_c += 1;
				}
				if (card == 3) {
					printf("%s", s_three);
					hand_c[num_cards_c] = 3;
					num_cards_c += 1;
				}
				if (card == 4) {
					printf("%s", s_four);
					hand_c[num_cards_c] = 4;
					num_cards_c += 1;
				}
				if (card == 5) {
					printf("%s", s_five);
					hand_c[num_cards_c] = 5;
					num_cards_c += 1;
				}
				if (card == 6) {
					printf("%s", s_six);
					hand_c[num_cards_c] = 6;
					num_cards_c += 1;
				}
				if (card == 7) {
					printf("%s", s_seven);
					hand_c[num_cards_c] = 7;
					num_cards_c += 1;
				}
				if (card == 8) {
					printf("%s", s_eight);
					hand_c[num_cards_c] = 8;
					num_cards_c += 1;
				}
				if (card == 9) {
					printf("%s", s_nine);
					hand_c[num_cards_c] = 9;
					num_cards_c += 1;
				}
				if (card == 10) {
					printf("%s", s_ten);
					hand_c[num_cards_c] = 10;
					num_cards_c += 1;
				}
				if (card == 11) {
					printf("%s", s_jack);
					hand_c[num_cards_c] = 11;
					num_cards_c += 1;
				}
				if (card == 12) {
					printf("%s", s_queen);
					hand_c[num_cards_c] = 12;
					num_cards_c += 1;
				}
				if (card == 13) {
					printf("%s", s_king);
					hand_c[num_cards_c] = 13;
					num_cards_c += 1;
				}


				//conditionalize clubs

				if (card == 14) {
					printf("%s", c_ace);
					hand_c[num_cards_c] = 14;
					num_cards_c += 1;
				}
				if (card == 15) {
					printf("%s", c_two);
					hand_c[num_cards_c] = 15;
					num_cards_c += 1;
				}
				if (card == 16) {
					printf("%s", c_three);
					hand_c[num_cards_c] = 16;
					num_cards_c += 1;
				}
				if (card == 17) {
					printf("%s", c_four);
					hand_c[num_cards_c] = 17;
					num_cards_c += 1;
				}
				if (card == 18) {
					printf("%s", c_five);
					hand_c[num_cards_c] = 18;
					num_cards_c += 1;
				}
				if (card == 19) {
					printf("%s", c_six);
					hand_c[num_cards_c] = 19;
					num_cards_c += 1;
				}
				if (card == 20) {
					printf("%s", c_seven);
					hand_c[num_cards_c] = 20;
					num_cards_c += 1;
				}
				if (card == 21) {
					printf("%s", c_eight);
					hand_c[num_cards_c] = 21;
					num_cards_c += 1;
				}
				if (card == 22) {
					printf("%s", c_nine);
					hand_c[num_cards_c] = 22;
					num_cards_c += 1;
				}
				if (card == 23) {
					printf("%s", c_ten);
					hand_c[num_cards_c] = 23;
					num_cards_c += 1;
				}
				if (card == 24) {
					printf("%s", c_jack);
					hand_c[num_cards_c] = 24;
					num_cards_c += 1;
				}
				if (card == 25) {
					printf("%s", c_queen);
					hand_c[num_cards_c] = 25;
					num_cards_c += 1;
				}
				if (card == 26) {
					printf("%s", c_king);
					hand_c[num_cards_c] = 26;
					num_cards_c += 1;
				}

				//conditionalize hearts

				if (card == 27) {
					printf("%s", h_ace);
					hand_c[num_cards_c] = 27;
					num_cards_c += 1;
				}
				if (card == 28) {
					printf("%s", h_two);
					hand_c[num_cards_c] = 28;
					num_cards_c += 1;
				}
				if (card == 29) {
					printf("%s", h_three);
					hand_c[num_cards_c] = 29;
					num_cards_c += 1;
				}
				if (card == 30) {
					printf("%s", h_four);
					hand_c[num_cards_c] = 30;
					num_cards_c += 1;
				}
				if (card == 31) {
					printf("%s", h_five);
					hand_c[num_cards_c] = 31;
					num_cards_c += 1;
				}
				if (card == 32) {
					printf("%s", h_six);
					hand[num_cards_p] = 1;
					num_cards_p += 1;
				}
				if (card == 33) {
					printf("%s", h_seven);
					hand_c[num_cards_c] = 33;
					num_cards_c += 1;
				}
				if (card == 34) {
					printf("%s", h_eight);
					hand_c[num_cards_c] = 34;
					num_cards_c += 1;
				}
				if (card == 35) {
					printf("%s", h_nine);
					hand_c[num_cards_c] = 35;
					num_cards_c += 1;
				}
				if (card == 36) {
					printf("%s", h_ten);
					hand_c[num_cards_c] = 36;
					num_cards_c += 1;
				}
				if (card == 37) {
					printf("%s", h_jack);
					hand_c[num_cards_c] = 37;
					num_cards_c += 1;
				}
				if (card == 38) {
					printf("%s", h_queen);
					hand_c[num_cards_c] = 38;
					num_cards_c += 1;
				}
				if (card == 39) {
					printf("%s", h_king);
					hand_c[num_cards_c] = 39;
					num_cards_c += 1;
				}

				//conditionalize diamonds

				if (card == 40) {
					printf("%s", d_ace);
					hand_c[num_cards_c] = 40;
					num_cards_c += 1;
				}
				if (card == 41) {
					printf("%s", d_two);
					hand_c[num_cards_c] = 41;
					num_cards_c += 1;
				}
				if (card == 42) {
					printf("%s", d_three);
					hand_c[num_cards_c] = 42;
					num_cards_c += 1;
				}
				if (card == 43) {
					printf("%s", d_four);
					hand_c[num_cards_c] = 43;
					num_cards_c += 1;
				}
				if (card == 44) {
					printf("%s", d_five);
					hand_c[num_cards_c] = 44;
					num_cards_c += 1;
				}
				if (card == 45) {
					printf("%s", d_six);
					hand_c[num_cards_c] = 45;
					num_cards_c += 1;
				}
				if (card == 46) {
					printf("%s", d_seven);
					hand_c[num_cards_c] = 46;
					num_cards_c += 1;
				}
				if (card == 47) {
					printf("%s", d_eight);
					hand_c[num_cards_c] = 47;
					num_cards_c += 1;
				}
				if (card == 48) {
					printf("%s", d_nine);
					hand_c[num_cards_c] = 48;
					num_cards_c += 1;
				}
				if (card == 49) {
					printf("%s", d_ten);
					hand_c[num_cards_c] = 49;
					num_cards_c += 1;
				}
				if (card == 50) {
					printf("%s", d_jack);
					hand_c[num_cards_c] = 50;
					num_cards_c += 1;
				}
				if (card == 51) {
					printf("%s", d_queen);
					hand_c[num_cards_c] = 51;
					num_cards_c += 1;
				}
				if (card == 52) {
					printf("%s", d_king);
					hand_c[num_cards_c] = 52;
					num_cards_c += 1;
				}

				i++;

			}



			printf("\n");

			if (j == 3) {
				srand((unsigned)time(NULL));
				shuffle(deck);
			}
			//walk = 1;
			
			//IMPORTANT
			//Phase 2
			//Replace player cards

			int replace = replace_ask();
			if (replace > 0) {
				if (j == 3) {
					srand((unsigned)time(NULL));
					shuffle(deck);
				}
				while (replace != 0) {
					if (j == 3) {
						srand((unsigned)time(NULL));
						shuffle(deck);
					}
					if (i > 13) {
						i = 0;
						j += 1;
					}
					int e;
					printf("Which card would you like to replace [Enter 0 to skip chosen card]: ");
					scanf("%d", &e);
					e = e - 1;
					printf("You drew a: ");
					int card = deck[j][i];
					if (e == -1) {
						card = 0;
						replace -= 1;
					}
					if (card == 1) {
						printf("%s", s_ace);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 2) {
						printf("%s", s_two);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 3) {
						printf("%s", s_three);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 4) {
						printf("%s", s_four);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 5) {
						printf("%s", s_five);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 6) {
						printf("%s", s_six);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 7) {
						printf("%s", s_seven);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 8) {
						printf("%s", s_eight);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 9) {
						printf("%s", s_nine);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 10) {
						printf("%s", s_ten);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 11) {
						printf("%s", s_jack);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 12) {
						printf("%s", s_queen);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 13) {
						printf("%s", s_king);
						hand[e] = card;
						replace -= 1;
					}


					//conditionalize clubs

					if (card == 14) {
						printf("%s", c_ace);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 15) {
						printf("%s", c_two);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 16) {
						printf("%s", c_three);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 17) {
						printf("%s", c_four);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 18) {
						printf("%s", c_five);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 19) {
						printf("%s", c_six);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 20) {
						printf("%s", c_seven);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 21) {
						printf("%s", c_eight);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 22) {
						printf("%s", c_nine);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 23) {
						printf("%s", c_ten);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 24) {
						printf("%s", c_jack);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 25) {
						printf("%s", c_queen);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 26) {
						printf("%s", c_king);
						hand[e] = card;
						replace -= 1;
					}

					//conditionalize hearts

					if (card == 27) {
						printf("%s", h_ace);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 28) {
						printf("%s", h_two);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 29) {
						printf("%s", h_three);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 30) {
						printf("%s", h_four);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 31) {
						printf("%s", h_five);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 32) {
						printf("%s", h_six);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 33) {
						printf("%s", h_seven);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 34) {
						printf("%s", h_eight);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 35) {
						printf("%s", h_nine);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 36) {
						printf("%s", h_ten);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 37) {
						printf("%s", h_jack);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 38) {
						printf("%s", h_queen);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 39) {
						printf("%s", h_king);
						hand[e] = card;
						replace -= 1;
					}

					//conditionalize diamonds

					if (card == 40) {
						printf("%s", d_ace);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 41) {
						printf("%s", d_two);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 42) {
						printf("%s", d_three);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 43) {
						printf("%s", d_four);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 44) {
						printf("%s", d_five);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 45) {
						printf("%s", d_six);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 46) {
						printf("%s", d_seven);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 47) {
						printf("%s", d_eight);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 48) {
						printf("%s", d_nine);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 49) {
						printf("%s", d_ten);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 50) {
						printf("%s", d_jack);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 51) {
						printf("%s", d_queen);
						hand[e] = card;
						replace -= 1;
					}
					if (card == 52) {
						printf("%s", d_king);
						hand[e] = card;
						replace -= 1;
					}

					i++;
					printf("\n");

				}
				//printf("\n");
				//replace -= 1;

			}
			if (j == 3) {
				srand((unsigned)time(NULL));
				shuffle(deck);
			}

			//Print player hand
			
			//int hand[5] = { 13,12,11,10,9 };

			//king, ace, five, four, ten
			
			sort_deck(hand,&hand[0], &hand[1], &hand[2], &hand[3], &hand[4]);
			sort_deck(hand_c, &hand_c[0], &hand_c[1], &hand_c[2], &hand_c[3], &hand_c[4]);
			printf("\nPlayer Hand is: ");
			print_hand(hand);

			printf("\n");










			
			



			int p_val = check_hand(hand);
			int c_val = check_hand(hand_c);
			//printf("\n%d", p_val);
			//printf("\n%d", c_val);

			if (p_val == 0 && c_val == 0) {
				int card;
				int suit;
				int suit_val;
				int high_card_p;
				int high_card_c;
				int check = 1;

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
				if (check == 1) {
					high_card_p = hand[0];
					for (int i = 0; i < 5; i++) {
						for (int j = 0; j < 5; j++) {
							if (high_card_p % 13 < hand[j] % 13 || high_card_p % 13 == 1 || hand[j] % 13 == 1 || high_card_p % 13 == 0 || hand[j] % 13 == 0) {
								if (hand[j] % 13 == 1 || high_card_p % 13 == 1) {
									high_card_p = 14;
									break;
								}
								if (hand[j] % 13 == 0 || high_card_p % 13 == 0 && hand[j] % 13 != 1 || high_card_p % 13 != 1) {
									high_card_p = 13;
								}
								else { high_card_p = hand[j] % 13; }
							}
						}
					}
					check -= 1;
				}
				if (check == 0) {
					high_card_c = hand_c[0];
					for (int i = 0; i < 5; i++) {
						for (int j = 0; j < 5; j++) {
							if (high_card_c % 13 < hand_c[j] % 13 || high_card_c % 13 == 1 || hand_c[j] % 13 == 1 || high_card_c % 13 == 0 || hand_c[j] % 13 == 0) {
								if (hand_c[j] % 13 == 1 || high_card_c % 13 == 1) {
									high_card_c = 14;
									break;
								}
								if (hand_c[j] % 13 == 0 || high_card_c % 13 == 0 && hand_c[j] % 13 != 1 || high_card_c % 13 != 1) {
									high_card_c = 13;
								}
								else { high_card_c = hand_c[j] % 13; }
							}
						}
					}
				}
				//printf("\n%d", high_card_p);
				//printf("\n%d", high_card_c);
				if (high_card_p > high_card_c) {
					printf("\nHigh card is: %d", high_card_p);
					printf("\nPlayer Wins\n");
					printf("\nPlayer Hand is: ");
					print_hand(hand);
					printf("\n");
					printf("\nComputer Hand is: ");
					print_hand(hand_c);
					play_bet += wager;
					printf("\nYou won $%d", wager);
					printf("\nYour Remaining Balance is $%d", play_bet);
				}
				if (high_card_p < high_card_c) {
					printf("\nHigh card is: %d", high_card_c);
					printf("\nComputer Wins\n");
					printf("\nPlayer Hand is: ");
					w = 0;
					print_hand(hand);
					printf("\n");
					printf("\nComputer Hand is: ");
					w = 0;
					print_hand(hand_c);
					play_bet -= wager;
					printf("\nYou lost $%d", wager);
					printf("\nYour Remaining Balance is $%d", play_bet);

				}
				if (high_card_p == high_card_c) {
					printf("\nHigh Card Tie");
					printf("\nPlayer Hand is: ");
					print_hand(hand);
					printf("\n");
					printf("\nComputer Hand is: ");
					print_hand(hand_c);
					play_bet = wager;
					printf("\nNo money lost\n");
					printf("\nYour Remaining Balance is $%d", play_bet);
					
				}


			}


			if (p_val == 1 && c_val == 1 || p_val == 2 && c_val == 2) {
				if (p_val == 1) {
					printf("Royal Flush\n");
				}
				if (p_val == 2) {
					printf("Straight Flush\n");
				}
				printf("The Game Tied");
				printf("\nPlayer Hand is: ");
				print_hand(hand);
				printf("\n");
				printf("\nComputer Hand is: ");
				print_hand(hand_c);
				printf("\nNo money lost\n");
				printf("\nYour Remaining Balance is $%d", play_bet);
			}


			if (p_val == 172 && c_val == 172 || p_val == 173 && c_val == 173) {
				int card;
				int suit;
				int suit_val;
				int high_card_p;
				int high_card_c;
				int check = 1;

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
				if (check == 1) {
					high_card_p = hand[0];
					for (int i = 0; i < 5; i++) {
						for (int j = 0; j < 5; j++) {
							if (high_card_p % 13 < hand[j] % 13 || high_card_p % 13 == 1 || hand[j] % 13 == 1 || high_card_p % 13 == 0 || hand[j] % 13 == 0) {
								if (hand[j] % 13 == 1 || high_card_p % 13 == 1) {
									high_card_p = 14;
									break;
								}
								if (hand[j] % 13 == 0 || high_card_p % 13 == 0 && hand[j] % 13 != 1 || high_card_p % 13 != 1) {
									high_card_p = 13;
								}
								else { high_card_p = hand[j] % 13; }
							}
						}
					}
					check -= 1;
				}
				if (check == 0) {
					high_card_c = hand_c[0];
					for (int i = 0; i < 5; i++) {
						for (int j = 0; j < 5; j++) {
							if (high_card_c % 13 < hand_c[j] % 13 || high_card_c % 13 == 1 || hand_c[j] % 13 == 1 || high_card_c % 13 == 0 || hand_c[j] % 13 == 0) {
								if (hand_c[j] % 13 == 1 || high_card_c % 13 == 1) {
									high_card_c = 14;
									break;
								}
								if (hand_c[j] % 13 == 0 || high_card_c % 13 == 0 && hand_c[j] % 13 != 1 || high_card_c % 13 != 1) {
									high_card_c = 13;
								}
								else { high_card_c = hand_c[j] % 13; }
							}
						}
					}
				}

				high_card_p = 14;
				high_card_c = 14;
				if (high_card_p > high_card_c) {
					if (p_val == 172) {
						printf("Flush\n");
					}
					if (p_val == 173) {
						printf("Straight Flush\n");
					}
					printf("High Card is %d", high_card_p);
					printf("\nPlayer Wins\n");
					printf("\nPlayer Hand is: ");
					print_hand(hand);
					printf("\n");
					printf("\nComputer Hand is: ");
					print_hand(hand_c);
					play_bet += wager;
					printf("\nYou won $%d", wager);
					printf("\nYour Remaining Balance is %d", play_bet);
				}
				if (high_card_p < high_card_c) {
					printf("\nComputer Wins\n");
					printf("\nPlayer Hand is: ");
					print_hand(hand);
					printf("\n");
					printf("\nComputer Hand is: ");
					print_hand(hand_c);
					play_bet -= wager;
					printf("\nYou lost $%d", wager);
					printf("\nYour Remaining Balance is %d", play_bet);

				}
				if (high_card_p == high_card_c) {
					printf("\nHigh Card Tie");
					printf("\nPlayer Hand is: ");
					print_hand(hand);
					printf("\n");
					printf("\nComputer Hand is: ");
					print_hand(hand_c);
					printf("\nNo money lost\n");
					printf("\nYour Remaining Balance is %d", play_bet);
				}


			}

			//P val w/o 0
			if (p_val < c_val && p_val > 0) {
				printf("\nPlayer Wins\n");
				printf("\nPlayer Hand is: ");
				print_hand(hand);
				printf("\n");
				printf("\nComputer Hand is: ");
				print_hand(hand_c);
				play_bet += wager;
				printf("\nYou won $%d", wager);
				printf("\nYour Remaining Balance is $%d", play_bet);
			}

			//P val w 0
			if (p_val < c_val && p_val == 0) {
				printf("\nComputer Wins\n");
				printf("\nPlayer Hand is: ");
				print_hand(hand);
				printf("\n");
				printf("\nComputer Hand is: ");
				print_hand(hand_c);
				play_bet -= wager;
				printf("\nYou lost $%d", wager);
				printf("\nYour Remaining Balance is $%d", play_bet);
			}

			//C val w/o 0
			if (c_val < p_val && c_val > 0) {
				printf("\nComputer Wins\n");
				printf("\nPlayer Hand is: ");
				print_hand(hand);
				printf("\n");
				printf("\nComputer Hand is: ");
				print_hand(hand_c);
				play_bet -= wager;
				printf("\nYou lost $%d", wager);
				printf("\nYour Remaining Balance is $%d", play_bet);
			}

			//C val w 0 
			if (c_val < p_val && c_val == 0) {
				printf("\nPlayer Wins\n");
				printf("\nPlayer Hand is: ");
				print_hand(hand);
				printf("\n");
				printf("\nComputer Hand is: ");
				print_hand(hand_c);
				play_bet += wager;
				printf("\nYou won $%d", wager);
				printf("\nYour Remaining Balance is $%d", play_bet);
			}


			if (p_val == c_val && (p_val != 1 && c_val != 1) && (p_val != 2 && c_val != 2) && (p_val != 172 && c_val != 172) && (p_val != 173 && c_val != 173) && (p_val != 0 && c_val != 0)) {
				printf("The Game is a Tie");
				printf("\nPlayer Hand is: ");
				print_hand(hand);
				printf("\n");
				printf("\nComputer Hand is: ");
				print_hand(hand_c);
				printf("\nNo money lost\n");
				printf("\nYour Remaining Balance is $%d", play_bet);
			}


			





			//for (int r = 0; r < 5; r++) {
			//	printf("%i\n", hand[r]);
			//	//break;
			//}
			printf("\n");
			walk = walk_ask();
			if (walk == 1) {
				printf("\nYour Final Balance is %d", play_bet);
				printf("\nGoodbye :(");
			}
		}
		/* initalize deck array */
		/*int deck[4][13] = { 0 };

		shuffle(deck);
		deal(deck, face, suit);*/


	}

	return 0;
}