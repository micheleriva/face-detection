import FaceDetection from '../index'

test("Testing FaceDetection class", async () => {

  const IMG = await FaceDetection.readImg(`${__dirname}/test.jpg`)
  const RES = await FaceDetection.detect(IMG)

  expect(RES.numDetections.length).toBe(1)
  expect(RES.numDetections[0]).toBeGreaterThan(35)
  expect(RES.objects.length).toBe(1)
  expect(RES.objects[0].height).toBeGreaterThan(200)
  expect(RES.objects[0].width).toBeGreaterThan(200)

})