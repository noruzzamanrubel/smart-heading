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

export const subheading_POSITION = [
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
	{ label: __("Solid", "smart-heading"), value: "solid" },
	{ label: __("Dashed", "smart-heading"), value: "dashed" },
	{ label: __("Dotted", "smart-heading"), value: "dotted" },
	{ label: __("Double", "smart-heading"), value: "double" },
	{ label: __("Groove", "smart-heading"), value: "groove" },
	{ label: __("Outset", "smart-heading"), value: "outset" },
	{ label: __("Ridge", "smart-heading"), value: "ridge" },
];

export const FONT_FAMILYS = [
    { label: __("ABeeZee", "smart-heading"), value: "abeezee" },
    { label: __("Abel", "smart-heading"), value: "abel" },
    { label: __("Abhaya Libre", "smart-heading"), value: "abhaya-libre" },
    { label: __("Abril Fatface", "smart-heading"), value: "abril-fatface" },
    { label: __("Abyssinica SIL", "smart-heading"), value: "abyssinica-sil" },
    { label: __("Aclonica", "smart-heading"), value: "aclonica" },
    { label: __("Acme", "smart-heading"), value: "acme" },
    { label: __("Actor", "smart-heading"), value: "actor" },
    { label: __("Adamina", "smart-heading"), value: "adamina" },
    { label: __("Adobe Blank", "smart-heading"), value: "adobe-blank" },
    { label: __("Advent Pro", "smart-heading"), value: "advent-pro" },
    { label: __("Aguafina Script", "smart-heading"), value: "aguafina-script" },
    { label: __("Akronim", "smart-heading"), value: "akronim" },
    { label: __("aksarabaligalang", "smart-heading"), value: "aksarabaligalang" },
    { label: __("Aladin", "smart-heading"), value: "aladin" },
    { label: __("Aldrich", "smart-heading"), value: "aldrich" },
    { label: __("Alef", "smart-heading"), value: "alef" },
    { label: __("alefhebrew", "smart-heading"), value: "alefhebrew" },
    { label: __("Alegreya", "smart-heading"), value: "alegreya" },
    { label: __("Alegreya Sans", "smart-heading"), value: "alegreya-sans" },
    { label: __("Alegreya Sans SC", "smart-heading"), value: "alegreya-sans-sc" },
    { label: __("Alegreya SC", "smart-heading"), value: "alegreya-sc" },
    { label: __("Aleo", "smart-heading"), value: "aleo" },
    { label: __("Alex Brush", "smart-heading"), value: "alex-brush" },
    { label: __("Alfa Slab One", "smart-heading"), value: "alfa-slab-one" },
    { label: __("Alice", "smart-heading"), value: "alice" },
    { label: __("Alike", "smart-heading"), value: "alike" },
    { label: __("Alike Angular", "smart-heading"), value: "alike-angular" },
    { label: __("Allan", "smart-heading"), value: "allan" },
    { label: __("Allerta", "smart-heading"), value: "allerta" },
    { label: __("Allerta Stencil", "smart-heading"), value: "allerta-stencil" },
    { label: __("Allura", "smart-heading"), value: "allura" },
    { label: __("Almendra", "smart-heading"), value: "almendra" },
    { label: __("Almendra Display", "smart-heading"), value: "almendra-display" },
    { label: __("Almendra SC", "smart-heading"), value: "almendra-sc" },
    { label: __("Amarante", "smart-heading"), value: "amarante" },
    { label: __("Amaranth", "smart-heading"), value: "amaranth" },
    { label: __("Amatic SC", "smart-heading"), value: "amatic-sc" },
    { label: __("Amatica SC", "smart-heading"), value: "amatica-sc" },
    { label: __("Amethysta", "smart-heading"), value: "amethysta" },
    { label: __("Amiko", "smart-heading"), value: "amiko" },
    { label: __("Amiri", "smart-heading"), value: "amiri" },
    { label: __("Amita", "smart-heading"), value: "amita" },
    { label: __("amstelvaralpha", "smart-heading"), value: "amstelvaralpha" },
    { label: __("Anaheim", "smart-heading"), value: "anaheim" },
    { label: __("Andada", "smart-heading"), value: "andada" },
    { label: __("Andada SC", "smart-heading"), value: "andada-sc" },
    { label: __("Andika", "smart-heading"), value: "andika" },
    { label: __("Angkor", "smart-heading"), value: "angkor" },
    { label: __("Annie Use Your Telescope", "smart-heading"), value: "annie-use-your-telescope" },
    { label: __("Anonymous Pro", "smart-heading"), value: "anonymous-pro" },
    { label: __("Antic", "smart-heading"), value: "antic" },
    { label: __("Antic Didone", "smart-heading"), value: "antic-didone" },
    { label: __("Antic Slab", "smart-heading"), value: "antic-slab" },
    { label: __("Anton", "smart-heading"), value: "anton" },
    { label: __("Antonio", "smart-heading"), value: "antonio" },
    { label: __("Arapey", "smart-heading"), value: "arapey" },
    { label: __("Arbutus", "smart-heading"), value: "arbutus" },
    { label: __("Arbutus Slab", "smart-heading"), value: "arbutus-slab" },
    { label: __("Architects Daughter", "smart-heading"), value: "architects-daughter" },
    { label: __("Archivo", "smart-heading"), value: "archivo" },
    { label: __("Archivo Black", "smart-heading"), value: "archivo-black" },
    { label: __("Archivo Narrow", "smart-heading"), value: "archivo-narrow" },
    { label: __("archivovfbeta", "smart-heading"), value: "archivovfbeta" },
    { label: __("Aref Ruqaa", "smart-heading"), value: "aref-ruqaa" },
    { label: __("Arima Madurai", "smart-heading"), value: "arima-madurai" },
    { label: __("Arimo", "smart-heading"), value: "arimo" },
    { label: __("Arizonia", "smart-heading"), value: "arizonia" },
    { label: __("Armata", "smart-heading"), value: "armata" },
    { label: __("Arsenal", "smart-heading"), value: "arsenal" },
    { label: __("Artifika", "smart-heading"), value: "artifika" },
    { label: __("Arvo", "smart-heading"), value: "arvo" },
    { label: __("Arya", "smart-heading"), value: "arya" },
    { label: __("Asap", "smart-heading"), value: "asap" },
    { label: __("Asap Condensed", "smart-heading"), value: "asap-condensed" },
    { label: __("asapvfbeta", "smart-heading"), value: "asapvfbeta" },
    { label: __("Asar", "smart-heading"), value: "asar" },
    { label: __("Asset", "smart-heading"), value: "asset" },
    { label: __("Assistant", "smart-heading"), value: "assistant" },
    { label: __("Astloch", "smart-heading"), value: "astloch" },
    { label: __("Asul", "smart-heading"), value: "asul" },
    { label: __("Athiti", "smart-heading"), value: "athiti" },
    { label: __("Atomic Age", "smart-heading"), value: "atomic-age" },
    { label: __("Aubrey", "smart-heading"), value: "aubrey" },
    { label: __("Audiowide", "smart-heading"), value: "audiowide" },
    { label: __("Autour One", "smart-heading"), value: "autour-one" },
    { label: __("Average", "smart-heading"), value: "average" },
    { label: __("Average Sans", "smart-heading"), value: "average-sans" },
    { label: __("Averia Gruesa Libre", "smart-heading"), value: "averia-gruesa-libre" },
    { label: __("Averia Libre", "smart-heading"), value: "averia-libre" },
    { label: __("Averia Sans Libre", "smart-heading"), value: "averia-sans-libre" },
    { label: __("Averia Serif Libre", "smart-heading"), value: "averia-serif-libre" },
    { label: __("B612", "smart-heading"), value: "b612" },
    { label: __("B612 Mono", "smart-heading"), value: "b612-mono" },
    { label: __("Bad Script", "smart-heading"), value: "bad-script" },
    { label: __("Bahiana", "smart-heading"), value: "bahiana" },
    { label: __("Bahianita", "smart-heading"), value: "bahianita" },
    { label: __("Bai Jamjuree", "smart-heading"), value: "bai-jamjuree" },
];
