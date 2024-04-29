import random
import math
# Inputs
lb = int(input("Enter Lower bound:- "))
ub = int(input("Enter Upper bound:- "))
 
# generating random number between the lb and ub
x = random.randint(lb, ub)
print("\n\tYou've only ", 
       round(math.log(ub - lb + 1, 2)),
      " chances to guess the integer!\n")
 
# Initializing the number of guesses.
count = 0
 
# for calculation of minimum number of
# guesses depends upon range
while count < math.log(ub-lb+1,2):
    count += 1
    guess = int(input("Guess a number:- "))
    if x == guess:
        print("Congratulations you did it in ",
              count, " try")
        break
    elif x > guess:
        print("You guessed too small!")
    elif x < guess:
        print("You Guessed too high!")
        
if count >= math.log(ub - lb + 1, 2):
    print("\nThe number is %d" % x)
    print("\tBetter Luck Next time!")