<?php
/**
 * The client-facing functionality of the plugin.
 *
 * @link       https://www.wking.io
 * @since      1.0.0
 *
 * @package    SpringBoard
 * @subpackage SpringBoard/client
 */

/**
 * The client-facing functionality of the plugin.
 *
 * @package    SpringBoard
 * @subpackage SpringBoard/client
 * @author     William King <contact@wking.io>
 */

class SpringBoard_Client {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

  /**
	 * Register the stylesheets for the client-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_admin_styles() {
		wp_enqueue_style( $this->plugin_name . 'admin', plugin_dir_url( __FILE__ ) . 'css/springboard-admin.css', array(), $this->version, 'all' );
  }
  
	/**
	 * Register the stylesheets for the client-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {
	}

  /**
	 * Register the JavaScript for the client-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_admin_scripts() {
		wp_enqueue_script( $this->plugin_name . '-index', plugin_dir_url( __FILE__ ) . 'dist/js/index.js', array(), $this->version, true );
		wp_localize_script($this->plugin_name . '-index', 'context', array( 'url' => admin_url('/springboard' ) ) );
  }
  
	/**
	 * Register the JavaScript for the client-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {
  }
  
  /**
	 * Include the reports page.
	 *
	 * @author  Kailan W.
	 *
	 * @since  1.1.4
	 */
	public function setup_admin_page() {
		include( SPRINGBOARD_PLUGIN_DIR . '/client/partials/springboard-admin.php' );
	}
}
