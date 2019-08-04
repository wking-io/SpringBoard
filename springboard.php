<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * server area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://www.wking.io
 * @since             1.0.0
 * @package           SpringBoard
 *
 * @wordpress-plugin
 * Plugin Name:       SpringBoard
 * Plugin URI:        https://wking.io/projects/elm-press
 * Description:       Create processes directly in your server with Kanban style tracking. This will give new employees, freelancers, or clients the processes they need documented exactly where they need it.
 * Version:           1.0.0
 * Author:            William King <contact@wking.io>
 * Author URI:        https://www.wking.io/
 * Text Domain:       springboard
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/** The plugin directory */
define('SPRINGBOARD_PLUGIN_DIR', plugin_dir_path(__FILE__));

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-springboard-activator.php
 */
function activate_springboard() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-springboard-activator.php';
	SpringBoard_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-springboard-deactivator.php
 */
function deactivate_springboard() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-springboard-deactivator.php';
	SpringBoard_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_springboard' );
register_deactivation_hook( __FILE__, 'deactivate_springboard' );

/**
 * The core plugin class that is used to define internationalization,
 * server-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-springboard.php';


/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_springboard() {

	$plugin = new SpringBoard();
	$plugin->run();

}

run_springboard();
