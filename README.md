# 👤 Face Detection OCV3.js

Simple face detection class based on OpenCV for Node.js on top of C++ APIS.

# Installation

```sh
$ yarn add face-detection
```

Note: installation may require some minutes. This library uses `opencv4nodejs` which needs to be compiled from sources and that process is gonna take some time.

# Usage

```js
import FaceDetection as FD from 'face-detection'

async function detection() {

  const IMG = await FD.readImg('./foo.jpg') // this will return a cvImgObject
  const RES = await FD.detect(IMG)

  console.log(JSON.stringify(RES, null, 2))

}

detection()

```

output: 

```js
{
  "objects": [
    {
      "height": 69,         // height of face bounding
      "width": 69,          // width of face bounding
      "y": 69,              // y coordinate of left-up bounding corner
      "x": 345              // x coordinate of left-up bounding corner
    },
    {
      "height": 148,        // height of face bounding
      "width": 148,         // width of face bounding
      "y": 4,               // y coordinate of left-up bounding corner
      "x": 300              // x coordinate of left-up bounding corner
    }
  ],
  "numDetections": [        // numDetections.length = number of faces found
    71,                     // accuracy
    4                       // accuracy
  ]
}
```

# Examples

![example1](/examples/01.png)
![example2](/examples/02.png)
![example3](/examples/03.png)
![example4](/examples/04.png)
