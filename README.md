# Multi-video 🎥
 > Custom component for displaying multiple videos in sync
## Building

Steps to build this element:
1. Clone the repo
```bash
$ git clone https://github.com/mumumilk/multi-video.git
```
2. Install dependencies
```bash
$ npm i
```
3. Build
 ```bash
$ npm run build:elements
```

**PS: In order to use it on Angular, before build is necessary  to remove zone.js import at src/polyfills.ts**

After build, multi-video.js will be served at `elements/multi-video.js`

## Usage
1. Copy multi-video.js to your project's component folder and reference it

- **Angularjs**
 in a scripts tag
```html
<script src="@routes.Assets.at("components/multi-video.js")"></script>
```

- **Angular**
in scripts field at ```angular.json``` 

```json

{
   "projects":{
	   ...
      "my-project":{
         ...
         "architect":{
            "build":{
	            ...
               "options":{
	               ...
                  "scripts":[
                     "my-folder/multi-video.js"
```

ps: Don't forget to set `CUSTOM_ELEMENTS_SCHEMA` to your module's schema

2. Use multi-video tag

```html
<multi-video></multi-video>
```
