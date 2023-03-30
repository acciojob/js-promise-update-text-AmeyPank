//your JS code here. If required.
function updateOutput() {
            const outputElement = document.getElementById("output");

            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve("Hello, world!");
                }, 1000);
            }).then((result) => {
                outputElement.innerText = result;
            });
        }

        updateOutput();