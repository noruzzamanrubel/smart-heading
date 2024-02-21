import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
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

    const blockProps = useBlockProps.save({
        id: blockID,
    });

    const separatorStyles = show_separator_switcher ? {
        display: 'inline-block',
        margin: '0 0 10px 0',
        width: '12%',
        borderTop: `2px ${separator} #0170b9`,
        marginBottom: '15px'
    } : {};


    return (
        <>

            <div {...blockProps}>

                {show_separator_switcher && seperatorPosition === "top" && (
                    <div style={{ ...separatorStyles, textAlign: align }}></div>
                )}

                {sub_heading_switcher && subheadingPosition === 'top' && ( 
                    <RichText.Content
                        tagName={sub_heading_tag}
                        value={sub_heading_text}
                        style={{
                            textAlign: align,
                            fontFamily: fontFamily, // Apply fontFamily here
                        }}
                    />
                )}

                <RichText.Content
                    tagName={tag}
                    value={text}
                    style={{
                        color: text_color,
                        backgroundColor: background_color,
                        textAlign: align,
                        fontFamily: fontFamily,
                    }}
                    className= "smart-heading"
                />

                {sub_heading_switcher && subheadingPosition === 'bottom' && ( 
                    <RichText.Content
                        tagName={sub_heading_tag}
                        value={sub_heading_text}
                        style={{
                            textAlign: align,
                            fontFamily: fontFamily,
                        }}
                    />
                )}

                {show_separator_switcher && seperatorPosition === "bottom" && (
                    <div style={{ ...separatorStyles, textAlign: align }}></div>
                )}
            </div>
        </>
    );
}
