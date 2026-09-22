(function (window, undefined) {

    window.Asc.plugin.init = function () {
        console.log("Contractzy plugin initialized");

        const button = document.getElementById("insertBtn");

        if (button) {
            button.addEventListener("click", function () {

                console.log("Insert button clicked");

                window.Asc.plugin.executeMethod(
                    "PasteText",
                    ["Hello from Contractzy Plugin!"]
                );

            });
        }
    };

    window.Asc.plugin.button = function (id) {
        console.log("Button clicked:", id);
    };

})(window, undefined);