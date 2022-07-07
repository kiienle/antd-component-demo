module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "header-bg":
                    "url('https://argon-dashboard-vue3.web.app/assets/profile-cover.5c4992d2.jpg')",
            },
        },
        // colors: {
        //     // default: "rgb(23 43 77)", //#172b4d
        //     // blue: {
        //     //     60: "rgb(246 249 252)",
        //     //     410: "rgb(17 113 239)",
        //     // },
        //     // cyan: {
        //     //     30: "rgb(233 236 239)",
        //     //     310: "rgb(55 213 242)",
        //     //     320: "rgb(34 209 240)",
        //     // },
        //     // normal: "rgb(82 95 127)",
        // dark: {
        //     DEFAULT: "rgb(23 43 77)", //#172b4d
        //     light: "rgb(28 52 93)",
        //     lighter: "rgb(82 95 127)", //#525f7f
        //     10: "rgb(0 0 0 / 0.2)",
        //     20: "rgb(0 0 0 / 0.6)", // #00000099
        //     50: "rgb(0 0 0 / 0.95)", //#000000f2
        //     100: "rgb(26 23 77)", // #1a174d
        //     120: "rgb(11 21 38)", //
        // },
        //     // light: {
        //     //     DEFAULT: "rgb(206 212 218)", //#ced4da
        //     // },
        //     primary: {
        //         DEFAULT: "rgb(50 50 93)",
        //         blue: {
        //             DEFAULT: "rgb(50 76 221)",
        //         },
        //         white: "rgb(0 0 0 / 0.05)",
        //     },
        //     // muted: {
        //     //     DEFAULT: "rgb(136 152 170)",
        //     // },
        //     secondary: {
        //         DEFAULT: "rgb(247 250 252)",
        //         text: "rgb(67 133 177)",
        //         active: "rgb(210 227 238)",
        //     },
        //     info: {
        //         DEFAULT: "rgb(17 205 239)",
        //         active: "rgb(13 165 192)",
        //     },
        //     warning: {
        //         DEFAULT: "rgb(251 99 64)",
        //         active: "rgb(250 58 14)",
        //         50: "rgb(252 124 95)", //#fc7c5f
        //     },
        // success: {
        //     DEFAULT: "rgb(45 206 137)",
        //     active: "rgb(36 164 109)",
        //     50: "rgb(79 214 156)", //#4fd69c
        // },
        //     danger: {
        //         DEFAULT: "rgb(245 54 92)",
        //         active: "rgb(236 12 56)",
        //         50: "rgb(247 86 118)", //#f75676
        //     },
        //     // webkit: {
        //     //     DEFAULT: "-webkit-focus-ring-color",
        //     // },
        //     // amber: {
        //     //     60: "rgb(252 248 227)",
        //     // },
        //     // slate: {
        //     //     10: "rgb(255 255 255 / 0.6)",
        //     //     20: "rgb(248 249 254)", //#f8f9fe
        //     // },
        //     // red: {
        //     //     410: "rgb(244 100 95)",
        //     //     light: "rgb(245 96 54)",
        //     // },
        //     // indigo: {
        //     //     410: "rgb(94 114 228)", //#5e72e4
        //     // },
        //     // yellow: {
        //     //     310: "rgb(255 214 0)",
        //     // },
        // },
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
