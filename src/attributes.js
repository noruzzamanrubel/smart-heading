const attributes = {
    text: {
        type : "string",
    },
    sub_heading_text: {
        type: "string",
    },
    tag: {
        type : "string",
        default: "h2" 
    },
    sub_heading_tag: {
        type : "string",
        default: "p" 
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
        default: "solid",
    },
    sub_heading_switcher: {
        type: "boolean",
        default: false,
    },
    show_separator_switcher: {
        type: "boolean",
        default: false,
    },
    seperatorPosition: {
        type: "string",
        default: "bottom",
    },
    subheadingPosition: {
        type: "string",
        default: "bottom",
    },
}
export default attributes;