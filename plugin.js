(function (window, undefined) {

    window.Asc.plugin.init = function () {
        console.log("Contractzy plugin initialized");
    };

    window.Asc.plugin.button = function (id) {
        console.log("Button clicked:", id);
    };

    window.insertText = function () {

        window.Asc.plugin.executeMethod(
            "PasteText",
            ["Hello from Contractzy Plugin!"]
        );

    };

})(window, undefined);