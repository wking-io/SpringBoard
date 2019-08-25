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

class SpringBoard_Client_Config {

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
	public function enqueue_admin_styles( $hook ) {
		if ( $hook === 'toplevel_page_springboard' ) :
			if ( isset( $_GET['processId'] ) ) :
				wp_enqueue_style( $this->plugin_name . '-detail', plugin_dir_url( __FILE__ ) . 'dist/css/process-detail.css', array(), '1.0.0', 'all' );
			else :
				wp_enqueue_style( $this->plugin_name . '-index', plugin_dir_url( __FILE__ ) . 'dist/css/process-index.css', array(), '1.0.0', 'all' );
			endif;
		endif;

		if ( $hook === 'springboard_page_springboard-settings' ) :
			wp_enqueue_style( $this->plugin_name . '-settings', plugin_dir_url( __FILE__ ) . 'dist/css/settings.css', array(), '1.0.0', 'all' );
		endif;
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
	public function enqueue_admin_scripts( $hook ) {
		if ( $hook === 'toplevel_page_springboard' ) :
			if ( isset( $_GET['processId'] ) ) :
				wp_enqueue_script( $this->plugin_name . '-detail', plugin_dir_url( __FILE__ ) . 'dist/js/process-detail.js', array(), '1.0.0', true );
				wp_localize_script($this->plugin_name . '-detail', 'context', array( 'url' => home_url() ) );
			else :
				wp_enqueue_script( $this->plugin_name . '-index', plugin_dir_url( __FILE__ ) . 'dist/js/process-index.js', array(), '1.0.0', true );
				wp_localize_script($this->plugin_name . '-index', 'context', array( 'url' => home_url() ) );
			endif;
		endif;

		if ( $hook === 'springboard_page_springboard-settings' ) :
			wp_enqueue_script( $this->plugin_name . '-settings', plugin_dir_url( __FILE__ ) . 'dist/js/settings.js', array(), '1.0.0', true );
			wp_localize_script($this->plugin_name . '-settings', 'context', array( 'url' => home_url() ) );
		endif;
  }
  
	/**
	 * Register the JavaScript for the client-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {
  }
  
  /**
	 * Include the process index page.
	 *
	 * @author  Will K.
	 *
	 * @since  1.0.0
	 */
	public function setup_index_page() {
		include( SPRINGBOARD_PLUGIN_DIR . '/client/pages/springboard-index.php' );
	}

	/**
	 * Include the process detail page.
	 *
	 * @author  Will K.
	 *
	 * @since  1.0.0
	 */
	public function setup_process_page() {
		include( SPRINGBOARD_PLUGIN_DIR . '/client/pages/springboard-process.php' );
	}

	/**
	 * Include the process settings page.
	 *
	 * @author  Will K.
	 *
	 * @since  1.0.0
	 */
	public function setup_settings_page() {
		include( SPRINGBOARD_PLUGIN_DIR . '/client/pages/springboard-settings.php' );
	}
}
