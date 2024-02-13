import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { SelectControl, PanelBody, TextControl } from '@wordpress/components';

import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { text, tag, custom_class } = attributes;
    const blockProps = useBlockProps({
        className: custom_class ? custom_class : ''
    });

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Heading', 'smart-heading')}>
                    <SelectControl
                        label={__('Select Tag', 'smart-heading')}
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
                        label={__('Additional Class', 'smart-heading')}
                        value={custom_class}
                        onChange={(value) => setAttributes({ custom_class: value })}
                    />
                </PanelBody>
            </InspectorControls>
            <RichText
                {...blockProps}
                tagName={tag}
                value={text}
                onChange={(value) => setAttributes({ text: value })}
                placeholder={__('Heading...', 'smart-heading')}
            />
        </>
    );
}
