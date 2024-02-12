import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { text, tag } = attributes;

    return (
        <RichText.Content
            tagName={tag}
            value={text}
        />
    );
}
