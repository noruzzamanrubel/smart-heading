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
    NORMAL_HOVER,
    UNIT_TYPES,
    separator_UNIT_TYPES,
    PRESETS,
    TEXT_ALIGN,
    HEADING,
    SEPERATOR_STYLES,
    separator_TYPE,
} from "./constants/constants";


import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { 
        text, 
        tag, 
        text_color, 
        background_color,
        align,
        separator

    } = attributes;

    const blockProps = useBlockProps();

    // Define a variable to hold the separator styles based on separator
    const separatorStyles = separator !== 'none' ? {
        display: 'inline-block',
        margin: '0 0 10px 0',
        width: '12%',
        borderTop: `2px ${separator} #0170b9`,
        marginBottom: '15px'
    } : {};
    
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
                                    <PanelBody
                                        title={__("General", "smart-heading")}
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
                                            label={__("Title Level", "smart-heading")}
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

                                        <BaseControl
                                            label={__("Separator", "smart-heading")}
                                            id="smart-heading-separator"
                                        >
                                            <SelectControl
                                                value={separator}
                                                options={SEPERATOR_STYLES}
                                                onChange={(value) => setAttributes({ separator: value })}
                                            />
                                        </BaseControl>
                                    </PanelBody>
                                )}

                                {tab.name === "styles" && (
                                    <>
                                        <PanelBody
                                            title={__("Title", "smart-heading")}
                                            initialOpen={true}
                                        >
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

            <div {...blockProps}>
                <RichText
                    tagName={tag}
                    value={text}
                    onChange={(value) => setAttributes({ text: value })}
                    placeholder={__('Heading...', 'smart-heading')}
                    style={{
                        color: text_color,
                        backgroundColor: background_color,
                        textAlign: align,
                    }}
                />
                {separator !== 'none' && (
                    <div className={`smart-title-separator`} style={separatorStyles}></div>
                )}
            </div>
        </>
    );
}
