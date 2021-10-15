const index = require("./index")

// @ponicode
describe("readImg", () => {
    let inst

    beforeEach(() => {
        inst = new index("http://placeimg.com/640/480")
    })

    test("0", async () => {
        await inst.readImg()
    })
})

// @ponicode
describe("cropImage", () => {
    let inst

    beforeEach(() => {
        inst = new index("http://placeimg.com/640/480")
    })

    test("0", async () => {
        await inst.cropImage({ x: 400, y: 550, w: 400, h: "hsl(10%,20%,40%)" })
    })

    test("1", async () => {
        await inst.cropImage({ x: 410, y: 70, w: 380, h: "rgb(0.1,0.2,0.3)" })
    })

    test("2", async () => {
        await inst.cropImage({ x: 100, y: 550, w: 320, h: "black" })
    })

    test("3", async () => {
        await inst.cropImage({ x: 90, y: 410, w: 350, h: "black" })
    })

    test("4", async () => {
        await inst.cropImage({ x: 400, y: 550, w: 410, h: "#FF00FF" })
    })

    test("5", async () => {
        await inst.cropImage({ x: NaN, y: NaN, w: NaN, h: "" })
    })
})

// @ponicode
describe("calculateCroppingBounds", () => {
    let inst

    beforeEach(() => {
        inst = new index("http://placeimg.com/640/480")
    })

    test("0", async () => {
        await inst.calculateCroppingBounds({ objects: 0 })
    })

    test("1", async () => {
        await inst.calculateCroppingBounds({ objects: 256 })
    })

    test("2", async () => {
        await inst.calculateCroppingBounds({ objects: 16 })
    })

    test("3", async () => {
        await inst.calculateCroppingBounds({ objects: 64 })
    })

    test("4", async () => {
        await inst.calculateCroppingBounds({ objects: 10 })
    })

    test("5", async () => {
        await inst.calculateCroppingBounds(undefined)
    })
})

// @ponicode
describe("randomVecColor", () => {
    let inst

    beforeEach(() => {
        inst = new index("http://placeimg.com/640/480")
    })

    test("0", () => {
        let callFunction = () => {
            inst.randomVecColor()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("cvDetectAndShow", () => {
    let inst

    beforeEach(() => {
        inst = new index("http://placeimg.com/640/480")
    })

    test("0", async () => {
        await inst.cvDetectAndShow()
    })
})

// @ponicode
describe("detect", () => {
    let inst

    beforeEach(() => {
        inst = new index("http://placeimg.com/640/480")
    })

    test("0", async () => {
        await inst.detect({ bgrToGray: () => "La Plata Dolphin" })
    })

    test("1", async () => {
        await inst.detect({ bgrToGray: () => "Sei Whale" })
    })

    test("2", async () => {
        await inst.detect({ bgrToGray: () => "False Killer Whale" })
    })

    test("3", async () => {
        await inst.detect({ bgrToGray: () => "Long-finned Pilot Whale" })
    })

    test("4", async () => {
        await inst.detect({ bgrToGray: () => "Amazon River Dolphin" })
    })

    test("5", async () => {
        await inst.detect(undefined)
    })
})

// @ponicode
describe("getImageSize", () => {
    let inst

    beforeEach(() => {
        inst = new index("http://placeimg.com/640/480")
    })

    test("0", async () => {
        await inst.getImageSize()
    })
})

// @ponicode
describe("getBoundsCenter", () => {
    let inst

    beforeEach(() => {
        inst = new index("http://placeimg.com/640/480")
    })

    test("0", async () => {
        await inst.getBoundsCenter([true, false, true])
    })

    test("1", async () => {
        await inst.getBoundsCenter([true, true, true])
    })

    test("2", async () => {
        await inst.getBoundsCenter([false, true, false])
    })

    test("3", async () => {
        await inst.getBoundsCenter([true, true, false])
    })

    test("4", async () => {
        await inst.getBoundsCenter([false, true, true])
    })

    test("5", async () => {
        await inst.getBoundsCenter(undefined)
    })
})
