import { __ } from '@wordpress/i18n';

import { 
    useBlockProps, 
    RichText, 
    InspectorControls, 
    PanelColorSettings,
    BlockControls,
    AlignmentToolbar,
} from '@wordpress/block-editor';

import { 
    SelectControl,
    PanelBody,
    TextControl,
    TabPanel,
    BaseControl,
    Button,
    ButtonGroup,
    ToggleControl,
    TextareaControl
} from '@wordpress/components';


/**
 * Internal depencencies
 */
import {
    WRAPPER_BG,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_BORDER_SHADOW,
    TITLE_MARGIN,
    SUBTITLE_MARGIN,
    separator_MARGIN,
    separator_LINE_SIZE,
    separator_ICON_SIZE,
    separator_WIDTH,
    separator_POSITION,
    subheading_POSITION,
    NORMAL_HOVER,
    UNIT_TYPES,
    separator_UNIT_TYPES,
    PRESETS,
    TEXT_ALIGN,
    HEADING,
    SEPERATOR_STYLES,
    separator_TYPE,
    FONT_FAMILYS,
} from "./constants/constants";

import { createRef, useEffect } from "@wordpress/element";


import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId,}) {
    const { 
        blockID,
        text, 
        tag, 
        text_color, 
        background_color,
        align,
        separator,
        sub_heading_switcher,
        show_separator_switcher,
        sub_heading_text,
        sub_heading_tag,
        seperatorPosition,
        subheadingPosition,
        fontFamily,

    } = attributes;

    setAttributes({
		blockID: "smart_headings-" + clientId.slice(0, 8),
	})

    const blockProps = useBlockProps();

    // Define a variable to hold the separator styles based on separator
    
    const separatorStyles = show_separator_switcher ? {
        display: 'inline-block',
        margin: '0 0 10px 0',
        width: '12%',
        borderTop: `2px ${separator} #0170b9`,
        marginBottom: '15px'
    } : {};


	/* set default values for the style attributes */
	const elementRef = createRef();
	useEffect(() => {

		if (!fontFamily) {
			let defaultFontFamily = window.getComputedStyle(
				elementRef.current
			).fontFamily;
			setAttributes({ fontFamily: defaultFontFamily });
		}
	}, [elementRef]);
    
    
    return (
        <>
            <InspectorControls key="controls">
                <div className="sh-panel-control">
                    <TabPanel
                        className="sh-parent-tab-panel"
                        activeClass="active-tab"
                        tabs={[
                            {
                                name: "general",
                                title: "General",
                                className: "sh-tab general",
                            },
                            {
                                name: "styles",
                                title: "Style",
                                className: "sh-tab styles",
                            },
                            {
                                name: "advance",
                                title: "Advanced",
                                className: "sh-tab advance",
                            },
                        ]}
                    >
                        {(tab) => (
                            <div className={"sh-tab-controls" + tab.name}>
                                {tab.name === 'general' && (
                                    <>
                                        <div className="sh-heading-wrapper">
                                            <PanelBody
                                                title={__("Heading", "smart-heading")}
                                                initialOpen={true}
                                            >
                                                <BaseControl
                                                    label={__("Alignment", "smart-heading")}
                                                    id="smart-heading-alignment"
                                                >
                                                    <ButtonGroup>
                                                        {TEXT_ALIGN.map((item, key) => (
                                                            <Button
                                                                key={key}
                                                                onClick={() => setAttributes({ align: item.value })}
                                                            >
                                                                {item.label}
                                                            </Button>
                                                        ))}
                                                    </ButtonGroup>
                                                </BaseControl>

                                                <BaseControl
                                                    label={__("Heading Tag", "smart-heading")}
                                                    id="smart-heading-title-level"
                                                >
                                                    <ButtonGroup className="smart-heading-alignment sh-html-tag-buttongroup">
                                                        {HEADING.map((item, key) => (
                                                            <Button
                                                                key={key}
                                                                onClick={() => setAttributes({ tag: item.value })}
                                                            >
                                                                {item.label}
                                                            </Button>
                                                        ))}
                                                    </ButtonGroup>
                                                </BaseControl>

                                                <TextControl
                                                    label={__("Title Text", "smart-heading")}
                                                    value={text}
                                                    onChange={(value) => setAttributes({ text: value })}
                                                />
                                            </PanelBody>
                                        </div>
                                        <div className="sh-sub-heading-wrapper">
                                            <PanelBody
                                                title={__("Sub Heading", "smart-heading")}
                                                initialOpen={false}
                                            >
                                                <ToggleControl
                                                    label={__("Show Sub Heading", "smart-heading")}
                                                    checked={sub_heading_switcher}
                                                    onChange={(value) => setAttributes({ sub_heading_switcher: value })}
                                                />

                                                {sub_heading_switcher && (
                                                    <>
                                                        <BaseControl id="smart-sub-heading-position" >
                                                            <SelectControl
                                                                label={__("Sub Heading Position", "smart-heading")}
                                                                value={subheadingPosition}
                                                                options={subheading_POSITION}
                                                                onChange={(value) => setAttributes({ subheadingPosition: value})}
                                                            />
                                                        </BaseControl>
                                                        <BaseControl
                                                            label={__("Sub Heading Tag", "smart-heading")}
                                                            id="sh-smart-sub-heading-tag"
                                                        >
                                                            <ButtonGroup className="sh-smart-sub-heading-tag sh-html-tag-buttongroup">
                                                                {HEADING.map((item, key) => (
                                                                    <Button
                                                                        key={key}
                                                                        onClick={() => setAttributes({ sub_heading_tag: item.value })}
                                                                    >
                                                                        {item.label}
                                                                    </Button>
                                                                ))}
                                                            </ButtonGroup>
                                                        </BaseControl>

                                                        <TextareaControl
                                                            label={__("Sub Heading Text", "smart-heading")}
                                                            value={sub_heading_text}
                                                            onChange={(value) => setAttributes({ sub_heading_text: value })}
                                                        />
                                                    </>
                                                )}
                                            </PanelBody>
                                        </div>

                                        <div className="sh-separator-wrapper">
                                            <PanelBody
                                                title={__("Separator", "smart-heading")}
                                                initialOpen={false}
                                            >
                                                <ToggleControl
                                                    label={__("Show Separator", "smart-heading")}
                                                    checked={show_separator_switcher}
                                                    onChange={(value) => setAttributes({ show_separator_switcher: value })}
                                                />
                                                { show_separator_switcher && (
                                                    <>
                                                        <BaseControl id="smart-separator-position" >
                                                            <SelectControl
                                                                label={__("Separator Position", "smart-heading")}
                                                                value={seperatorPosition}
                                                                options={separator_POSITION}
                                                                onChange={(value) => setAttributes({ seperatorPosition: value})}
                                                            />
                                                        </BaseControl>

                                                        <BaseControl id="smart-separator-style" >
                                                            <SelectControl
                                                                label={__("Separator Style", "smart-heading")}
                                                                value={separator}
                                                                options={SEPERATOR_STYLES}
                                                                onChange={(value) => setAttributes({ separator: value })}
                                                            />
                                                        </BaseControl>
                                                    </>
                                                )}
                                            </PanelBody>
                                        </div>
                                    </>
                                )}

                                {tab.name === "styles" && (
                                    <>
                                        <PanelBody
                                            title={__("Title", "smart-heading")}
                                            initialOpen={true}
                                        >
                                            <SelectControl
                                                label={__("Font Family", "smart-heading")}
                                                options={FONT_FAMILYS}
                                                value={fontFamily}
                                                onChange={(value) => setAttributes({ fontFamily: value })}
                                            />

                                            <PanelColorSettings
                                                title={__('Color', 'smart-heading')}
                                                enableAlpha={true}
                                                colorSettings={[
                                                    {
                                                        value: text_color,
                                                        onChange: (value) => setAttributes({ text_color: value }),
                                                        label: __('Text Color', 'smart-heading'),
                                                    },
                                                    {
                                                        value: background_color,
                                                        onChange: (value) => setAttributes({ background_color: value }),
                                                        label: __('Background Color', 'smart-heading'),
                                                    },
                                                ]}
                                                colors={[
                                                    { name: 'White', color: '#ffffff' },
                                                    { name: 'Red', color: '#ff0000' },
                                                    { name: 'Green', color: '#00ff00' },
                                                    { name: 'Blue', color: '#0000ff' },
                                                    { name: 'Yellow', color: '#ffff00' },
                                                    { name: 'Orange', color: '#ffa500' },
                                                ]}
                                            />
                                        </PanelBody>
                                    </>
                                )}
                            {tab.name === "advance" && (
                                    <>
                                        <p>Advanced settings</p>
                                    </>
                                )}
                            </div>
                        )}
                    </TabPanel>
                </div>
            </InspectorControls>

            <BlockControls>
                <AlignmentToolbar
                    value={align}
                    onChange={(value) => setAttributes({ align: value })}
                    controls={['left', 'center', 'right', 'justify']}
                />
            </BlockControls>
            
            <div {...blockProps} id={blockID}>

                {show_separator_switcher && seperatorPosition === "top" && (
                    <div className={`smart-title-separator`} style={{ ...separatorStyles, textAlign: align }}></div>
                )}

                {sub_heading_switcher && subheadingPosition === 'top' && (
                    <RichText
                        tagName={sub_heading_tag}
                        value={sub_heading_text}
                        onChange={(value) => setAttributes({ sub_heading_text: value })}
                        placeholder={__('Sub heading...', 'smart-heading')}
                        style={{
                            textAlign: align,
                        }}
                    />
                )}

            <link
				rel="stylesheet"
				href={`https://fonts.googleapis.com/css?family=${fontFamily.replace(' ', '+')}`}
			/>

                <RichText
                    ref={elementRef}
                    tagName={tag}
                    value={text}
                    onChange={(value) => setAttributes({ text: value })}
                    placeholder={__('Heading...', 'smart-heading')}
                    style={{
                        color: text_color,
                        backgroundColor: background_color,
                        textAlign: align,
                        fontFamily: fontFamily
                    }}
                />

                {sub_heading_switcher && subheadingPosition === 'bottom' && (
                    <RichText
                        tagName={sub_heading_tag}
                        value={sub_heading_text}
                        onChange={(value) => setAttributes({ sub_heading_text: value })}
                        placeholder={__('Sub heading...', 'smart-heading')}
                        style={{
                            textAlign: align,
                        }}
                    />
                )}
                
                {show_separator_switcher && seperatorPosition === "bottom" && (
                    <div className={`smart-title-separator`} style={{ ...separatorStyles, textAlign: align }}></div>
                )}
            </div>
        </>
    );
}
