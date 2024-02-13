import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { text, tag, text_color, background_color, align, heading_border } = attributes;
    const blockProps = useBlockProps.save();

    const separatorStyles = heading_border !== 'none' ? {
        display: 'inline-block',
        margin: '0 0 10px 0',
        width: '12%',
        borderTop: `2px ${heading_border} #0170b9`,
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
                {heading_border !== 'none' && (
                    <div className={`smart-title-separator`} style={separatorStyles}></div>
                )}
            </div>
        </>
    );
}
