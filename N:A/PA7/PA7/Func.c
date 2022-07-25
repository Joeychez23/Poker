#include "header2.h"

void delay(int num_sec) {
	int milli_sec = 1000 * num_sec;
	clock_t start_time = clock();
	while (clock() < start_time + milli_sec) {
		;
	}
}

int rand_n() {
	time_t t;
	srand((unsigned)time(&t));
	int r = rand() % 9 + 1;
	delay(rand() % 3 + 1);
	return r;
}



int print_rules() {
	printf("One moment...");
	system("start https://en.wikipedia.org/wiki/Five-card_draw");
	return 0;
};

int game_menu() {
	int i = 0;
	while (i != 1 || i != 2 || i != 3) {
		i = 0;
		printf("1.) Print 5 Card Poker Rules\n2.) Start a game of Poker\n3.) Exit the Console\nEnter your input here [must be integer]: ");
		scanf(" %i", &i);

		if (i == 1) {
			char j[4];
			print_rules();
			if (j[0] != 'y' || j[0] != 'Y' || j[0] != 'n' || j[0] != 'N') {
				while (j[0] != 'y' || j[0] != 'Y' || j[0] != 'n' || j[0] != 'N') {
					printf("\nReturn to menu?[y/n]: ");
					scanf("%s", &j);
					if (j[0] == 'y' || j[0] == 'Y') {
						break;
					}
					else if (j[0] == 'n' || j[0] == 'N') {
						printf("\nGoodbye :(\n");
						_Exit(0);
					}
				}
			}
		}
		else if (i == 2) {
			int j = 1;
			return j;
		}
		else if (i == 3) {
			printf("\nGoodbye :(\n");
			_Exit(0);
		}
		else {
			printf("\nERROR (INCORRECT DATA TYPE)");
			printf("\nRELOAD REQUIRED\n");
			_Exit(0);
		}
	}
}

int replace_ask() {
	int i = 0;
	char j[4];
	if (j[0] != 'y' || j[0] != 'Y' || j[0] != 'n' || j[0] != 'N') {
		while (j[0] != 'y' || j[0] != 'Y' || j[0] != 'n' || j[0] != 'N') {
			printf("\nWould you like to replace cards?[y/n]: ");
			scanf("%s", &j);
			if (j[0] == 'y' || j[0] == 'Y') {
				printf("\nHow many cards would you like to replace? [must be integer]: ");
				scanf(" %i", &i);
				return i;
			}
			else if (j[0] == 'n' || j[0] == 'N') {
				return 0;
			}
		}
	}
}


int walk_ask() {
	int i = 0;
	char j[4];
	if (j[0] != 'y' || j[0] != 'Y' || j[0] != 'n' || j[0] != 'N') {
		while (j[0] != 'y' || j[0] != 'Y' || j[0] != 'n' || j[0] != 'N') {
			printf("\nWould you like to walk?[y/n]: ");
			scanf("%s", &j);
			if (j[0] == 'y' || j[0] == 'Y') {
				return 1;
			}
			else if (j[0] == 'n' || j[0] == 'N') {
				return 0;
			}
		}
	}
}


int check_hand(int hand[]) {
	int card;
	int count;
	int suit;
	int suit_val;
	//12 13 11 1 10
	//Royal Flush
	// 1
	//Royal Flush Spade
	card = hand[0];
	//lowest card
	for (int i = 0; i < 5; i++) {
		if (hand[i] == 10) {
			card = hand[i];
		}
	}
	count = 1;
	if (card == 10) {
		for (int i = 0; i < 5; i++) {
			for (int j = 0; j < 5; j++) {
				if (card + 1 == hand[j]) {
					count += 1;
					card += 1;
				}
			}
		}
	}
	if (count == 4) {
		for (int i = 0; i < 5; i++) {
			if (hand[i] == 1) {
				return 1;
			}
		}
	}


	//Royal Flush Club
	card = hand[0];
	//lowest card
	for (int i = 0; i < 5; i++) {
		if (hand[i] == 23) {
			card = hand[i];
		}
	}
	count = 1;
	if (card == 23) {
		for (int i = 0; i < 5; i++) {
			for (int j = 0; j < 5; j++) {
				if (card + 1 == hand[j]) {
					count += 1;
					card += 1;
				}
			}
		}
	}
	if (count == 4) {
		for (int i = 0; i < 5; i++) {
			if (hand[i] == 27) {
				return 1;
			}
		}
	}



	//Royal Flush Hearts
	card = hand[0];
	//lowest card
	for (int i = 0; i < 5; i++) {
		if (hand[i] == 36) {
			card = hand[i];
		}
	}
	count = 1;
	if (card == 36) {
		for (int i = 0; i < 5; i++) {
			for (int j = 0; j < 5; j++) {
				if (card + 1 == hand[j]) {
					count += 1;
					card += 1;
				}
			}
		}
	}
	if (count == 4) {
		for (int i = 0; i < 5; i++) {
			if (hand[i] == 27) {
				return 1;
			}
		}
	}



	//Royal Flush Diamonds
	card = hand[0];
	//lowest card
	for (int i = 0; i < 5; i++) {
		if (hand[i] == 49) {
			card = hand[i];
		}
	}
	count = 1;
	if (card == 49) {
		for (int i = 0; i < 5; i++) {
			for (int j = 0; j < 5; j++) {
				if (card + 1 == hand[j]) {
					count += 1;
					card += 1;
				}
			}
		}
	}
	if (count == 4) {
		for (int i = 0; i < 5; i++) {
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
	for (int i = 0; i < 5; i++) {
		if (card - suit_val > hand[i] - suit_val && card - suit_val > 0) {
			card = hand[i] - suit_val;
		}
	}
	count = 1;
	for (int i = 0; i < 5; i++) {
		for (int j = 0; j < 5; j++) {
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
	for (int i = 0; i < 5; i++) {
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
	for (int i = 0; i < 5; i++) {
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
	for (int i = 0; i < 5; i++) {
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
	for (int i = 0; i < 5; i++) {
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
	for (int i = 0; i < 5; i++) {
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
	for (int i = 0; i < 5; i++) {
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
	for (int i = 0; i < 5; i++) {
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
	for (int i = 0; i < 5; i++) {
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
	for (int i = 0; i < 5; i++) {
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
	for (int i = 0; i < 5; i++) {
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
	for (int i = 0; i < 5; i++) {
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
	for (int i = 0; i < 5; i++) {
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
	for (int i = 0; i < 5; i++) {
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
	/*for (int i = 0; i < 5; i++) {}*/
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
	card = hand[0];
	count = 1;
	for (int i = 0; i < 5; i++) {
		for (int j = 0; j < 5; j++) {
			if (hand[j] % 13 == 1) {
				hand[j] = 14;
			}
			if ((card - 1) % 13 == hand[j] % 13) {
				count += 1;
				card -= 1;
				//printf("%d", count);
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
	int three_ace = 0;
	count = 0;
	for (int i = 0; i < 5; i++) {
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
	int three_two = 0;
	count = 0;
	for (int i = 0; i < 5; i++) {
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
	int three_three = 0;
	count = 0;
	for (int i = 0; i < 5; i++) {
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
	int three_four = 0;
	count = 0;
	for (int i = 0; i < 5; i++) {
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
	int three_five = 0;
	for (int i = 0; i < 5; i++) {
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
	int three_six = 0;
	for (int i = 0; i < 5; i++) {
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
	int three_seven = 0;
	for (int i = 0; i < 5; i++) {
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
	int three_eight = 0;
	for (int i = 0; i < 5; i++) {
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
	int three_nine = 0;
	for (int i = 0; i < 5; i++) {
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
	int three_ten = 0;
	for (int i = 0; i < 5; i++) {
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
	int three_jack = 0;
	for (int i = 0; i < 5; i++) {
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
	int three_queen = 0;
	for (int i = 0; i < 5; i++) {
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
	int three_king = 0;
	for (int i = 0; i < 5; i++) {
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
	int two_ace = 0;
	count = 0;
	for (int i = 0; i < 5; i++) {
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
	int two_two = 0;
	count = 0;
	for (int i = 0; i < 5; i++) {
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
	int two_three = 0;
	count = 0;
	for (int i = 0; i < 5; i++) {
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
	int two_four = 0;
	count = 0;
	for (int i = 0; i < 5; i++) {
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
	int two_five = 0;
	for (int i = 0; i < 5; i++) {
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
	int two_six = 0;
	for (int i = 0; i < 5; i++) {
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
	int two_seven = 0;
	for (int i = 0; i < 5; i++) {
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
	int two_eight = 0;
	for (int i = 0; i < 5; i++) {
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
	int two_nine = 0;
	for (int i = 0; i < 5; i++) {
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
	int two_ten = 0;
	for (int i = 0; i < 5; i++) {
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
	int two_jack = 0;
	for (int i = 0; i < 5; i++) {
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
	int two_queen = 0;
	for (int i = 0; i < 5; i++) {
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
	int two_king = 0;
	for (int i = 0; i < 5; i++) {
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


int print_hand(int hand[]) {
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


	int w = 0;
	while (w < 5) {
		int card = hand[w];
		if (card == 1) {
			printf("%s", s_ace);
		}
		if (card == 2) {
			printf("%s", s_two);
		}
		if (card == 3) {
			printf("%s", s_three);
		}
		if (card == 4) {
			printf("%s", s_four);
		}
		if (card == 5) {
			printf("%s", s_five);
		}
		if (card == 6) {
			printf("%s", s_six);
		}
		if (card == 7) {
			printf("%s", s_seven);

		}
		if (card == 8) {
			printf("%s", s_eight);
		}
		if (card == 9) {
			printf("%s", s_nine);
		}
		if (card == 10) {
			printf("%s", s_ten);
		}
		if (card == 11) {
			printf("%s", s_jack);
		}
		if (card == 12) {
			printf("%s", s_queen);
		}
		if (card == 13) {
			printf("%s", s_king);
		}


		//conditionalize clubs

		if (card == 14) {
			printf("%s", c_ace);
		}
		if (card == 15) {
			printf("%s", c_two);
		}
		if (card == 16) {
			printf("%s", c_three);
		}
		if (card == 17) {
			printf("%s", c_four);
		}
		if (card == 18) {
			printf("%s", c_five);
		}
		if (card == 19) {
			printf("%s", c_six);
		}
		if (card == 20) {
			printf("%s", c_seven);
		}
		if (card == 21) {
			printf("%s", c_eight);
		}
		if (card == 22) {
			printf("%s", c_nine);
		}
		if (card == 23) {
			printf("%s", c_ten);
		}
		if (card == 24) {
			printf("%s", c_jack);
		}
		if (card == 25) {
			printf("%s", c_queen);
		}
		if (card == 26) {
			printf("%s", c_king);
		}

		//conditionalize hearts

		if (card == 27) {
			printf("%s", h_ace);
		}
		if (card == 28) {
			printf("%s", h_two);
		}
		if (card == 29) {
			printf("%s", h_three);
		}
		if (card == 30) {
			printf("%s", h_four);
		}
		if (card == 31) {
			printf("%s", h_five);
		}
		if (card == 32) {
			printf("%s", h_six);
		}
		if (card == 33) {
			printf("%s", h_seven);
		}
		if (card == 34) {
			printf("%s", h_eight);
		}
		if (card == 35) {
			printf("%s", h_nine);
		}
		if (card == 36) {
			printf("%s", h_ten);
		}
		if (card == 37) {
			printf("%s", h_jack);
		}
		if (card == 38) {
			printf("%s", h_queen);
		}
		if (card == 39) {
			printf("%s", h_king);
		}

		//conditionalize diamonds

		if (card == 40) {
			printf("%s", d_ace);
		}
		if (card == 41) {
			printf("%s", d_two);
		}
		if (card == 42) {
			printf("%s", d_three);
		}
		if (card == 43) {
			printf("%s", d_four);
		}
		if (card == 44) {
			printf("%s", d_five);
		}
		if (card == 45) {
			printf("%s", d_six);
		}
		if (card == 46) {
			printf("%s", d_seven);
		}
		if (card == 47) {
			printf("%s", d_eight);
		}
		if (card == 48) {
			printf("%s", d_nine);
		}
		if (card == 49) {
			printf("%s", d_ten);
		}
		if (card == 50) {
			printf("%s", d_jack);
		}
		if (card == 51) {
			printf("%s", d_queen);
		}
		if (card == 52) {
			printf("%s", d_king);
		}

		w++;
	}
	return 0;
}


int print_comb(int val, int hand[]) {
if (val == 1) {
	printf("Royal Flush");
	print_hand(hand);
}
if (val == 2) {
	printf("Straight Flush");
	print_hand(hand);
}
if (val == 3) {
	printf("Four of a kind Ace");
	print_hand(hand);
}
if (val == 4) {
	printf("Four of a kind King");
	print_hand(hand);
}
if (val == 5) {
	printf("Four of a kind Queen");
	print_hand(hand);
}
if (val == 6) {
	printf("Four of a kind Jack");
	print_hand(hand);
}
if (val == 7) {
	printf("Four of a kind 10");
	print_hand(hand);

}
if (val == 8) {
	printf("Four of a kind 9");
	print_hand(hand);
}
if (val == 9) {
	printf("Four of a kind 8");
	print_hand(hand);
}
if (val == 10) {
	printf("Four of a kind 7");
	print_hand(hand);
}
if (val == 11) {
	printf("Four of a kind 6");
	print_hand(hand);
}
if (val == 12) {
	printf("Four of a kind 5");
	print_hand(hand);
}
if (val == 13) {
	printf("Four of a kind 4");
	print_hand(hand);
}
if (val == 14) {
	printf("Four of a kind 3");
	print_hand(hand);
}
if (val == 15) {
	printf("Four of a kind 2");
	print_hand(hand);
}
if (val >= 16 && val <= 171) {
	printf("Full House");
	print_hand(hand);
}
if (val == 172) {
	printf("Flush");
	print_hand(hand);
}
if (val == 173) {
	printf("Straight");
	print_hand(hand);
}
if (val >= 174 && val <= 187) {
	printf("Three of a Kind");
	print_hand(hand);
}
if (val >= 188 && val <= 343) {
	printf("Double Pairs");
	print_hand(hand);
}
if (val >= 344 && val <= 355) {
	printf("One Pair");
	print_hand(hand);
}
return 0;
}


int sort_deck(int hand[], int* hand1, int* hand2, int* hand3, int* hand4, int* hand5) {
	int new_deck[5];
	int o_deck[5];
	int val = hand[0] % 13;
	int ex1 = -1;
	int ex2 = -1;
	int ex3 = -1;
	int ex4 = -1;
	int ex5 = -1;

	int c1 = 0;
	int c2 = 0;
	int c3 = 0;
	int c4 = 0;
	int c5 = 0;
	int c6 = 0;
	int c7 = 0;
	int c8 = 0;
	int c9 = 0;
	int c10 = 0;
	int cj = 0;
	int cq = 0;
	int ck = 0;


	int i1;
	int i2;
	int i3; 
	int i4;
	int i5;
	//printf("%d", hand[1]);
	for (int i = 0; i < 5; i++) {
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
	int j = 0;
	while (c1 > 0) {
		for (int i = 0; i < 5; i++) {
			if (hand[i] % 13 == 1) {
				o_deck[j] = hand[i];
				c1 -= 1;
				j += 1;
			}
		}
	}
	while (ck > 0) {
		for (int i = 0; i < 5; i++) {
			if (hand[i] % 13 == 0) {
				o_deck[j] = hand[i];
				ck -= 1;
				j += 1;
			}
		}
	}
	while (cq > 0) {
		for (int i = 0; i < 5; i++) {
			if (hand[i] % 13 == 12) {
				o_deck[j] = hand[i];
				cq -= 1;
				j += 1;
			}
		}
	}
	while (cj > 0) {
		for (int i = 0; i < 5; i++) {
			if (hand[i] % 13 == 11) {
				o_deck[j] = hand[i];
				cj -= 1;
				j += 1;
			}
		}
	}
	while (c10 > 0) {
		for (int i = 0; i < 5; i++) {
			if (hand[i] % 13 == 10) {
				o_deck[j] = hand[i];
				c10 -= 1;
				j += 1;
			}
		}
	}
	while (c9 > 0) {
		for (int i = 0; i < 5; i++) {
			if (hand[i] % 13 == 9) {
				o_deck[j] = hand[i];
				c9 -= 1;
				j += 1;
			}
		}
	}
	while (c8 > 0) {
		for (int i = 0; i < 5; i++) {
			if (hand[i] % 13 == 8) {
				o_deck[j] = hand[i];
				c8 -= 1;
				j += 1;
			}
		}
	}
	while (c7 > 0) {
		for (int i = 0; i < 5; i++) {
			if (hand[i] % 13 == 7) {
				o_deck[j] = hand[i];
				c7 -= 1;
				j += 1;
			}
		}
	}
	while (c6 > 0) {
		for (int i = 0; i < 5; i++) {
			if (hand[i] % 13 == 6) {
				o_deck[j] = hand[i];
				c6 -= 1;
				j += 1;
			}
		}
	}
	while (c5 > 0) {
		for (int i = 0; i < 5; i++) {
			if (hand[i] % 13 == 5) {
				o_deck[j] = hand[i];
				c5 -= 1;
				j += 1;
			}
		}
	}
	while (c4 > 0) {
		for (int i = 0; i < 5; i++) {
			if (hand[i] % 13 == 4) {
				o_deck[j] = hand[i];
				c4 -= 1;
				j += 1;
			}
		}
	}
	while (c3 > 0) {
		for (int i = 0; i < 5; i++) {
			if (hand[i] % 13 == 3) {
				o_deck[j] = hand[i];
				c3 -= 1;
				j += 1;
			}
		}
	}
	while (c2 > 0) {
		for (int i = 0; i < 5; i++) {
			if (hand[i] % 13 == 2) {
				o_deck[j] = hand[i];
				c2 -= 1;
				j += 1;
			}
		}
	}

	//printf("%d", o_deck[4]);

	*hand1 = o_deck[0];
	*hand2 = o_deck[1];
	*hand3 = o_deck[2];
	*hand4 = o_deck[3];
	*hand5 = o_deck[4];


	return 0;
}


	
