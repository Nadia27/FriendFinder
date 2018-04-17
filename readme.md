# Node-Express Full-Stack Application

## Friend Friender

### Description

 This full-stack site will take in results from a users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

### Built With

+ Node
+ Express- used to handle routing
+ Bootstrap
+ HTML
+ JavaScript
+ jQuery

### NPM Package Requirements

+ Body-Parser
+ Path
+ Express

#### Use of Routes

+ GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
+ POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
