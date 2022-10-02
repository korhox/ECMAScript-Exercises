
function FileReader(path) {
    this.path = path
    this.readAndOutput = function () {
        // starts to read this.path. When done, invoke the done
        // function that will output the result (or crash the app)
        // (result = this.path and data.)
    }
    this.done = function (err, data) {

    }
}