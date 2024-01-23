# Rock Paper Scissors Continued ...

## Requirement: Power-Ups and Modifiers Implementation

### Objective: 
Introduce a system of power-ups or modifiers that can influence the outcome of each round or provide strategic advantages to players.


#### Designing Power-Ups/Modifiers:

##### Types of Power-Ups: Create various types of power-ups such as:
* Element Boost: Temporarily strengthens a chosen element, making it win against one additional element.
* Double Points: The next winning round grants double points.
* Shield: Negates the effect of the next loss.
* Prediction: Reveals the computer's next choice.
* Element Swap: Allows changing the chosen element after revealing the computer’s choice.
* Balancing: Ensure that power-ups are balanced and do not overwhelmingly favor the player or make the game too easy.

#### Earning Power-Ups:

* Players can earn power-ups through various means like winning consecutive rounds, playing a certain number of rounds, or as random drops.  
* Implement a system to track these conditions and award power-ups accordingly.  

#### Using Power-Ups:

* Before each round, players should have the option to use one of their available power-ups.  
* Implement a user interface component where players can select a power-up to activate.  
* Ensure the game logic incorporates the effects of the power-ups in the round.  

#### Integrating with Game Flow:

* Modify the game flow to include moments where players can choose to use power-ups.  
* Update the round resolution logic to account for active power-ups (e.g., applying double points, element boosts, or negating a loss).  

#### Feedback and UI Elements:

* Provide clear feedback to the player when a power-up is earned, available, or used.  
* Update the game’s UI to display available power-ups and their effects.  
* Include prompts or tooltips explaining what each power-up does.  


## Coding Guidelines
 
### Editor

You can choose any editor for development. Some of our favorites are VS Code, XCode (Swift). Please have the editor already installed on your machine before the test.

### Knowledge of GIT
We assume that you have a basic knowledge of GIT.

## Branch and Commits

You will find assignments in the following branches for each day. Suppose today is your first day, then the branch name will be 2024/day-one. 
Before developing you need to clone this branch and check in code in the following format
[Current Year]/[day-<day>][First Letter of FirstName][LastName]
  
### Example
Branch Name for Candidate "Apple Seed", the current year 2024, day 1 will be  
```
  2024/day-one-aseed
``` 
 

## Tips
* Use consistent coding standards.
* Code should be self-explanatory.
* Always ask questions before writing code. A lot of times problem statements are ambiguous.
* It is more important how you solve the problem than reaching a solution by hit and trial.

