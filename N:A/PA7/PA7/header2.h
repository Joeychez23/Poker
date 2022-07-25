#if defined(_WIN32) || defined(__MSDOS__)
#define SPADE   "\x06"
#define CLUB    "\x05"
#define HEART   "\x03"
#define DIAMOND "\x04"
#else
#define SPADE   "\xE2\x99\xA0"
#define CLUB    "\xE2\x99\xA3"
#define HEART   "\xE2\x99\xA5"
#define DIAMOND "\xE2\x99\xA6"
#endif


#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <time.h>
#include <string.h>



void delay(int num_sec);
int rand_n();
int print_rules();
int game_menu();
int replace_ask();
int check_hand(int hand[]);
int walk_ask();
int print_hand(int hand[]);
int print_comb(int val, int hand[]);
int sort_deck(int hand[], int* hand1, int* hand2, int* hand3, int* hand4, int* hand5);


//29, 31, 4, 19, 20