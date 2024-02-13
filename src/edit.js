import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { SelectControl, PanelBody, TextControl } from '@wordpress/components';

import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { text, tag, custom_class, text_color, background_color } = attributes;
    const blockProps = useBlockProps({
        className: custom_class ? custom_class : ''
    });

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Heading', 'smart-heading')}>
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
                    />
                    <TextControl
                        label={__('Title Text', 'smart-heading')}
                        value={text}
                        onChange={(value) => setAttributes({ text: value })}
                    />
                    <TextControl
                        label={__('Additional Class', 'smart-heading')}
                        value={custom_class}
                        onChange={(value) => setAttributes({ custom_class: value })}
                    />
                </PanelBody>
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
            </InspectorControls>

            <RichText
                {...blockProps}
                tagName={tag}
                value={text}
                onChange={(value) => setAttributes({ text: value })}
                placeholder={__('Heading...', 'smart-heading')}
                style={{ color: text_color, backgroundColor: background_color }}
            />
        </>
    );
}
