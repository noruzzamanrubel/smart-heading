<?php
/**
 * Plugin Name:       Smart Heading
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Noruzzaman
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       smart-heading
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function smart_heading_register_block() {
    register_block_type( __DIR__ . '/build', array(
        'render_callback' => 'smart_heading_dynamic_render_callback',
    ) );
}
add_action( 'init', 'smart_heading_register_block' );



function smart_heading_dynamic_render_callback( $attributes, $content ) {
    
    // Access the fontFamily attribute from the $attributes array
    $fontFamily = isset($attributes['fontFamily']) ? $attributes['fontFamily'] : '';
    $blockID = isset($attributes['blockID']) ? $attributes['blockID'] : '';

    // If font family is provided
    if (!empty($fontFamily)) {
        // Separate font families by comma and trim any whitespace
        $fontFamilies = explode(',', $fontFamily);
        foreach ($fontFamilies as $font) {
            // Encode the font family name for use in URL
            $encodedFontFamily = urlencode(trim($font));
            // Construct the Google Font URL with the encoded font family name
            $googleFontUrl = "https://fonts.googleapis.com/css?family=$encodedFontFamily";
            // Enqueue the Google Fonts stylesheet
            wp_enqueue_style('smart-heading-google-font-' . sanitize_title($font), $googleFontUrl);
        }
    }

    return $content;
}


