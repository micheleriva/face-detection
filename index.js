const cv = require('opencv4nodejs')
const gm = require('gm')

class FaceDetection {

  constructor(imgPath) {
    this.origImage  = imgPath
    this.classifier = new cv.CascadeClassifier(cv.HAAR_FRONTALFACE_ALT2)
  }

  async readImg() {
    return new Promise((resolve, reject) => {
      return cv.imreadAsync(this.origImage, (err, data) => {
        return err 
             ? reject(err) 
             : resolve(data)
      })
    })
  }

  cvDrawRect(img, rect, color, opts = { thickness: 2 }) {
    return img.drawRectangle(
      rect,
      color,
      opts.thickness,
      cv.LINE_8
    );
  }

  async cropImage({x, y, w, h}) {
    return new Promise(async (reject, resolve) => {
      return gm(this.origImage)
               .crop(w, h, x, y)
               .scale(1920, 1080)
               .write('./foo.jpg', (err) => {
                 return err
                      ? reject(err)
                      : resolve(1)
               })
    })
  }

  async calculateCroppingBounds(det) {
    return new Promise(async (resolve) => {

      const imageSize    = await this.getImageSize()
      const boundsCenter = await this.getBoundsCenter(det.objects)
      const x = imageSize.w <= 1920 ? 0 : boundsCenter.x - 960
      const y = imageSize.h <= 1080 ? 0 : boundsCenter.y - 540

      return resolve({
        w: 1920,
        h: 1080,
        x,
        y
      })

    })
  }

  randomVecColor(){
    const rand = () => Math.floor(Math.random() * 255)  
    return new cv.Vec(rand(), rand(), rand())
  }

  async cvDetectAndShow(){
    const img      = await this.readImg(this.origImage)
    const detect   = await this.detect(img)
    const facesImg = img.copy()

    detect.objects.map((rect) => {
      this.cvDrawRect(
        facesImg,
        rect,
        this.randomVecColor(),
        { thickness: 2 }
      )
    })

    return cv.imshowWait('face detection', facesImg)
  }

  async detect(imgObj) {
    return new Promise((resolve, reject) => {
      return this.classifier.detectMultiScaleAsync(imgObj.bgrToGray(), (err, data) => {
        return err 
             ? reject(err) 
             : resolve(data)
      })
    })
  }

  async getImageSize() {
    return new Promise(async (resolve) => {
      const res = await this.readImg()
      return resolve({
        width:  res.rows,
        height: res.cols
      })
    })
  }

  async getBoundsCenter(bounds) {
    return new Promise((resolve) => {
      resolve({
        x: bounds[0].x + (bounds[0].width / 2),
        y: bounds[0].y + (bounds[0].height / 2)
      })
    })
  }

}

module.exports = FaceDetection
