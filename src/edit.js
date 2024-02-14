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
} from '@wordpress/components';


import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { 
        text, 
        tag, 
        text_color, 
        background_color,
        align,
        heading_border

    } = attributes;

    const blockProps = useBlockProps();

    // Define a variable to hold the separator styles based on heading_border
    const separatorStyles = heading_border !== 'none' ? {
        display: 'inline-block',
        margin: '0 0 10px 0',
        width: '12%',
        borderTop: `2px ${heading_border} #0170b9`,
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
                                    <>
                                    <PanelBody
                                        title={__(
                                            "General",
                                            "smart-heading"
                                        )}
                                        initialOpen={true}
                                    >

                                        <p htmlFor="alignment-toolbar">{__('Alignment', 'smart-heading')}</p>
                                        <AlignmentToolbar
                                            value={align}
                                            onChange={(value) => setAttributes({ align: value })}
                                            controls={['left', 'center', 'right', 'justify']}
                                            isCollapsed={false}
                                        />

                                        <SelectControl
                                            label={__('Title Level', 'smart-heading')}
                                            value={tag}
                                            options={[
                                                { value: 'h1', label: 'H1' },
                                                { value: 'h2', label: 'H2' },
                                                { value: 'h3', label: 'H3' },
                                                { value: 'h4', label: 'H4' },
                                                { value: 'h5', label: 'H5' },
                                                { value: 'h6', label: 'H6' },
                                                { value: 'p', label: 'P' },
                                                { value: 'div', label: 'Div' },
                                                { value: 'span', label: 'Span' },
                                            ]}
                                            onChange={(value) => setAttributes({ tag: value })}
                                            isCollapsed={false}
                                        />

                                        <TextControl
                                            label={__('Title Text', 'smart-heading')}
                                            value={text}
                                            onChange={(value) => setAttributes({ text: value })}
                                        />

                                        <SelectControl
                                            label={__('Style', 'smart-heading')}
                                            value={heading_border}
                                            options={[
                                                { value: 'none', label: 'None' },
                                                { value: 'solid', label: 'solid' },
                                                { value: 'double', label: 'Double' },
                                                { value: 'dashed', label: 'Dashed' },
                                                { value: 'dotted', label: 'Dotted' },
                                            ]}
                                            onChange={(value) => setAttributes({ heading_border: value })}
                                        />
                                    </PanelBody>
                                    </>
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
                {heading_border !== 'none' && (
                    <div className={`smart-title-separator`} style={separatorStyles}></div>
                )}
            </div>
        </>
    );
}
