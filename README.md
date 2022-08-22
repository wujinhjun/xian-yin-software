# 闲吟

## This is a software based on react and electron

Because I need to a tool to help me manage time, the existing tools didn't meet my needs. Therefore, I want to develop a software.

## Available Scripts

### npm run dev

```json
"dev": "concurrently \"wait-on http://localhost:3000 && electron .\" \"cross-env BROWSER=none npm start\""
```

based many dependencies built command, there is no longer a need to wait for react to start before electron:

* concurrently: Multiple commands can be loaded at the same time
* cross-env: cross mac\windows\linux
* wait-on: wait the react before electron

### npm run ele

```json
 "ele": "nodemon --watch main.js --exec \"electron .\""
```

based on nodemon, there is no longer a need to restart the electron after change the main.js

## Function Description

It's a pity that function I envisioned was not completed  
So, today I will only introduce some of the features of ToDo for the time being.  
There are four main aspects(CRUD):

### Create

#### add tasks

User can click the `+` icon to add a new task  
The new title will be an input, automatically focus

#### add contents before task

User can click the `new` to add a new content  
The new title will be an input, automatically focus

### Read

#### read dataStore

This is done automatically and does not require a user to operate it

### Update

#### change task or content

User can double click the title of task or content
The focus will be focused automatically

#### change task category

In my design, user can drag the todo item as a card to change different areas. However, the structure of apps exist some questions, I can't change the function as ideal

Therefore, I use the contextMenu to handle this function

User can right click when mouse hover the item, and then can choose the target areas.

### Delete

#### delete task

User can click the icon of trash to delete the tasks

#### delete content in task

User can't delete it, as it is the lowest components. Maybe don't need to delete
