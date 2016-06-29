namespace wuzhui {
    export class Errors {
        constructor(parameters) {

        }

        static notImplemented() {
            return new Error("Not implemented");
        }
        static argumentNull(paramName) {
            return new Error("Argument '" + paramName + "' can not be null.");
        }
        static controllBelonsAnother() {
            return new Error("The control is belongs another control.");
        }
    }
}