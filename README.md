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
