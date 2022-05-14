# Battleships

A battleships project as part of The Odin project fullstack course. The project uses test driven development with Jest, tailwindCSS and webpack for distribution. 

The battleship game includes a easy AI which will deliver valid shots. 

Live at https://sudoism.github.io/battleships/

Some thoughts on how to take it to next level;
* Harder AI that shoots close to hit until ship is sunk 
* Refactored index.js code into a game module 
* Function depth becomes to deep when rotating horisontal/vertical at beginning of game (to many clicks crashes game)
* visual guidance instead of having text as basis for how the ships will be placed 
* some sound 
* some graphics on boats
* some animations eg for shots, sunken boat or victory 