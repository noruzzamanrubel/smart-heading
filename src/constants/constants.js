import { __ } from "@wordpress/i18n";
import { Dashicon } from "@wordpress/components";

// the consts defined here should be unique from one another
export const WRAPPER_BG = "wrprBg";
export const WRAPPER_MARGIN = "wrpMargin";
export const WRAPPER_PADDING = "wrpPadding";
export const WRAPPER_BORDER_SHADOW = "wrpBorderShadow";
export const TITLE_MARGIN = "titleMargin";
export const SUBTITLE_MARGIN = "subtitleMargin";
export const separator_MARGIN = "separatorMargin";
export const separator_LINE_SIZE = "separatorLineSize";
export const separator_ICON_SIZE = "separatorIconSize";
export const separator_WIDTH = "separatorWidth";

export const UNIT_TYPES = [
	{ label: "px", value: "px" },
	{ label: "em", value: "em" },
];

export const separator_UNIT_TYPES = [
	{ label: "px", value: "px" },
	{ label: "%", value: "%" },
	{ label: "em", value: "em" },
];

export const NORMAL_HOVER = [
	{ label: "Normal", value: "normal" },
	{ label: "Hover", value: "hover" },
];

export const separator_TYPE = [
	{ label: __("Line", "smart-heading"), value: "line" },
	{ label: __("Icon", "smart-heading"), value: "icon" },
];

export const separator_POSITION = [
	{ label: __("Top", "smart-heading"), value: "top" },
	{ label: __("Bottom", "smart-heading"), value: "bottom" },
];

export const PRESETS = [
	{ label: __("Default", "smart-heading"), value: "preset-0" },
	{ label: __("Preset 1", "smart-heading"), value: "preset-1" },
	{ label: __("Preset 2", "smart-heading"), value: "preset-2" },
	{ label: __("Preset 3", "smart-heading"), value: "preset-3" },
];

export const TEXT_ALIGN = [
	{ label: __(<Dashicon icon={"editor-alignleft"} />), value: "left" },
	{ label: __(<Dashicon icon={"editor-aligncenter"} />), value: "center" },
	{ label: __(<Dashicon icon={"editor-alignright"} />), value: "right" },
	{ label: __(<Dashicon icon={"menu"} />), value: "justify" }
];

export const HEADING = [
	{ label: __("H1", "smart-heading"), value: "h1" },
	{ label: __("H2", "smart-heading"), value: "h2" },
	{ label: __("H3", "smart-heading"), value: "h3" },
	{ label: __("H4", "smart-heading"), value: "h4" },
	{ label: __("H5", "smart-heading"), value: "h5" },
	{ label: __("H6", "smart-heading"), value: "h6" },
	{ label: __("P", "smart-heading"), value: "p" },
	{ label: __("Div", "smart-heading"), value: "div" },
];

export const SEPERATOR_STYLES = [
	{ label: __("None", "smart-heading"), value: "none" },
	{ label: __("Solid", "smart-heading"), value: "solid" },
	{ label: __("Dashed", "smart-heading"), value: "dashed" },
	{ label: __("Dotted", "smart-heading"), value: "dotted" },
	{ label: __("Double", "smart-heading"), value: "double" },
	{ label: __("Groove", "smart-heading"), value: "groove" },
	{ label: __("Outset", "smart-heading"), value: "outset" },
	{ label: __("Ridge", "smart-heading"), value: "ridge" },
];