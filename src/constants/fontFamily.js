import { __ } from '@wordpress/i18n';
import fontsfamilyNameList from "./fontsfamilyNameList";

// Corrected the mapping function syntax and labels
export const fontFamilyLists = fontsfamilyNameList.map((fontFamilyList) => ({
    value: fontFamilyList,
    label: __(fontFamilyList, "start-heading"),
}));

export default fontFamilyLists;