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
function smart_heading_smart_heading_block_init() {
    register_block_type( __DIR__ . '/build', array(
        'render_callback' => 'gutenberg_examples_dynamic_render_callback',
    ) );
}
add_action( 'init', 'smart_heading_smart_heading_block_init' );

function gutenberg_examples_dynamic_render_callback( $attributes, $content ) {
    // Access the fontFamily attribute from the $attributes array
    $fontFamily = isset($attributes['fontFamily']) ? $attributes['fontFamily'] : '';

    // Encode the font family name for use in URL
    $encodedFontFamily = urlencode($fontFamily);

    // Construct the Google Font URL with the encoded font family name
    $googleFontUrl = "https://fonts.googleapis.com/css?family=$encodedFontFamily";

    // Enqueue the Google Fonts stylesheet
    wp_enqueue_style('google-fonts', $googleFontUrl);

    // Define inline styles to apply the font family
    $inline_style = "
        h3,
        h4 {
            font-family: '$fontFamily';
        }
    ";

    // Register and enqueue the style with a unique handle
    wp_register_style('smart-heading-style', false);
    wp_enqueue_style('smart-heading-style');
    wp_add_inline_style('smart-heading-style', $inline_style);

    return $content;
}

