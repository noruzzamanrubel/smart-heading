import {useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { text, tag, custom_class } = attributes;
    const blockProps = useBlockProps.save({
		className: custom_class ? custom_class : ''
    });

    return (
        <RichText.Content
            {...blockProps}
            tagName={tag}
            value={text}
        />
    );
}
