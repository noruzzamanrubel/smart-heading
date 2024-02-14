const attributes = {
    text: {
        type : "string",
    },
    tag: {
        type : "string",
        default: "h2" 
    },
    text_color:{
        type: "string"
    },
    background_color:{
        type: "string"
    },
    align: {
        type: "string",
        default: "left",
    },
    separator: {
        type: "string",
        default: "none",
    },
}
export default attributes;