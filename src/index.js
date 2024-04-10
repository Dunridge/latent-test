
class LatentTest {

    constructor() {
        this.dict = {};
    }

    get(key) {
        return this.dict[key];
    }

    set(key, value) {
        this.dict[key] = value;
    }

    delete(key) {
        this.dict[key] = null;
    }
}

let latentTest = new LatentTest();
console.log(latentTest.set("A", "123"));
console.log(latentTest.get("A"));