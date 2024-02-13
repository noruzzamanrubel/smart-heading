import {useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { text, tag, custom_class, text_color, background_color } = attributes;
    const blockProps = useBlockProps.save({
		className: custom_class ? custom_class : ''
    });

    return (
        <RichText.Content
            {...blockProps}
            tagName={tag}
            value={text}
            style={{ color: text_color, backgroundColor: background_color }}
        />
    );
}
