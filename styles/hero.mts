import { heroui } from "@heroui/react";
export default heroui({
    themes: {
        light: {
            colors: {
                primary: "#704a9b",
                
                background:"#FFFFFF"
            }
        },
        dark: {
            colors: {
                primary: "#704a9b",
           
                background: "#0C0C0C"
            }
        }
    },
    addCommonColors: true,
    defaultTheme: "light",
});