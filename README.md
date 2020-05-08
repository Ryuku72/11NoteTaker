![GitHub last commit](https://img.shields.io/github/last-commit/Ryuku72/HomeworkW11?style=for-the-badge)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/Ryuku72/HomeworkW11?style=for-the-badge)
![GitHub contributors](https://img.shields.io/github/contributors/Ryuku72/HomeworkW11?style=for-the-badge)

# Unit 11 Express Homework: Note Taker


# HomeWork Week 11
## Express Note Taker
9th May 2020


### Aim
This week we learned about Express, Heroku and servers. With knowledge this weeks tast was to build upon a pre constructed front end website and allow it to run on both localhost and Heroku. The project was a note taker app. 



### Working Project Example
* Heroku deployment https://fathomless-ocean-28827.herokuapp.com/notes
* YouTube Video https://youtu.be/FMc9-VJT15g



## Key Concepts for HomeworkW10
> * http
> * Express.js
> * Routing - Get, Post, Delete
> * Postman
> * HTTP POST requests
> * Express.static()

 
## Contents
* [Build Process](#Build_Process)
* [Project Issues](#Project_Issues)
* [Future Plans](#future)
* [Installation](#Installation)
* [Usuage](#Usuage)
* [Tests](#Tests)
* [Additional_Information](#Additional_Information)



<a name="Build_Process">

## Build Process 

This week was very difficult. Finally the lack of sleep and family responsibilty is taking a tole. After a difficult weekend I was not able to attend to this project until Wednesday 6th May 2020. That aside, the project itself was straight forward once I knew what I was doing.

The core of the project was actually making 3 files; server.js, apiRouter.js and htmlRouter.js.

From there is was about understanding what the other files did and the small changes you needed to make to your HTML pages for files to work e.g. removing '.' from the start of an address.

Some quick explanation.

Setting up the HTMLrouter and Server was easy as this was covered. The hard part was the post and the delete.

Post id function was merely realising that you needed to use your db.json length as a means to create your object ID's. Once I realised that things were easy. The `fs.writeFile` was annoying until i used the `path.join`. I am sure there is an easier way.

As for delete, it was all about figuring out to use splice. My first attempt showed results so once I realised, you could make a loop that states,when `req.param.id === notesDB[i].id` splice it was just a matter of time before I got everything working.

Truth is once I realised what to do, the project was not too bad. It was a mater of realising. 

Projects like Star Wars and HotRestuarant from Day 2 and 3 were a big help and so it was not difficult to get through the first bit. As always it was about finding courage to push on when in doubt and just get the project done. 

<a name="Project_Issues">

## Project Issues

The project issue was 2 things time and understanding correctly what needs to be done.

Time has already been talked about so lets talk about the bigger issue.

* After making the server inside of Index.js I thought the whole project worked inside here. This was the biggest waste of time as the project used Index.js but you didn't have to touch it. The biggest hint was you cant use `JQuery` and `Require("")` together.
* By the time I realised this and started putting things together I had made such a big mess that things didnt work. For example, I was getting an error stating that .append from index.js did not work. I started the prject from scratch on 8th May 2020 and finished it.
* I didn't run tests... or really fix the Css. This is disappointing

<a name="future">

## Future plans

Current aims to to rebuild the entire website, remove bootstrap and just make something more interesting. Right now I have quickly thrown in a moving background, some pictures, colors and minor edit of elements. Needs more work. 

> 
>09/05/20 Have added Tooltips to the buttons for kicks
> 


<a name="Installation">

## Installation 
1. Copy project from GitHub page. Open terminal, 

```sh
$ cd homeworkW11
$ npm install
$ node server.js
```

2. Open your local host to the stated Port address 


<a name="Usuage">

## Usuage 
Create notes 

<a name="Tests">


## Tests
No time to make notes :(

<a name="Additional_Information">

## Additional Information
Licenses: MIT.

### Resources
* W3 Schools
* Google Font
* Developer.mozilla.org
* Getbootstrap.com
* Stackoverflow.com
* Resources provided in Slack
* Youtube tutorials
* Dillinger.io
* Heroku



### Technology
* PhotoShop
* HyperText Markup Language
* Cascading Style Sheets
* Node.JS
* Inquirer
* Visual Studio Code
* GitHub
* Google Chrome


## Source
Code was originally supplied in the WAUS-CRAW-FSF-PT-02-2020-U-C-MW / Week 11 / Homework repository on GitLab https://waustralia.bootcampcontent.com/the-university-of-western-australia/WAUS-CRAW-FSF-PT-02-2020-U-C-MW/tree/master/Week%2011/Homework

### Joshua K Bader // Ryuku72 // jaybshinsen@hotmail.com
### Made with ReadMe.Md Generator 