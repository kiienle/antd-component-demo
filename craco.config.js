const CracoLessPlugin = require("craco-less");

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            "primary-color": "#5e72e4",
                            "link-color": "#0DD078",
                            "success-color": "rgb(45 206 137)",
                            "warning-color": "rgb(251 99 64)",
                            "error-color": "rgb(245 54 92)",
                            "info-color": "rgb(17 205 239)",
                            "border-radius-base": "5px",
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
