import random

"""
1 for stone
-1 from paper
0 for scissor
"""

computer = random.choice([1,2,3])
youstr = input("Enter your choice: ")
youDict = {"Stone" :1, "Paper" : 2, "Scissor":3}
revDict = {1: "Stone", 2:"Paper",3: "Scissor"}

you = youDict[youstr]

print(f"You chose {revDict[you]}\n Computer chose {revDict[computer]}")

if(computer == you):
    print("It is a  draw")

else:
    if computer == 1 and you == 2:
        print("You Won!")
    elif computer == 2 and you == 1:
        print("Computer Won!")
    elif computer == 3 and you == 1:
        print("You Won!")
    elif computer == 1 and you == 3:
        print("Computer Won!")
    elif computer == 2 and you == 3:
        print("You Won!")
    elif computer == 3 and you == 2:
        print("Computer Won!")
    else:
        print("Something went wrong!!")




    
