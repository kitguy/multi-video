# Multi-video
Multi-video is a webcomponent for showing multiple videos in sync

# Install dependencies

```sh
$ npm i
```

# Building for Angular

In order to prevent duplicate zonejs import (1 for the element, 1 for the host project), remove or comment zonejs import at src/polyfills.ts then run


# Building the element

```sh
$ npm run build:elements
```

file will be served at elements/multi-video.js