import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { text, tag, text_color, background_color, align, separator } = attributes;
    const blockProps = useBlockProps.save();

    const separatorStyles = separator !== 'none' ? {
        display: 'inline-block',
        margin: '0 0 10px 0',
        width: '12%',
        borderTop: `2px ${separator} #0170b9`,
        marginBottom: '15px'
    } : {};

    return (
        <>
            <div {...blockProps}>
                <RichText.Content
                    tagName={tag}
                    value={text}
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
