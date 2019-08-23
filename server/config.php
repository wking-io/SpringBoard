<?php
/**
 * The server-specific functionality of the plugin.
 *
 * @link       https://www.wking.io
 * @since      1.0.0
 *
 * @package    SpringBoard
 * @subpackage SpringBoard/server
 */

/**
 * The server-specific functionality of the plugin.
 *
 * @package    SpringBoard
 * @subpackage SpringBoard/server
 * @author     William King <contact@wking.io>
 */
class SpringBoard_Server_Config {

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
	 * The server slug.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $server_slug    The server slug.
	 */
	private $slug;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;
		$this->slug = $plugin_name;

	}

	/**
	 * Setup menu.
	 *
	 * @since    1.0.0
	 */
	public function setup_menu() {
		if ( class_exists( 'SpringBoard_Client_Config' ) ) :

      $client = new SpringBoard_Client_Config( $this->plugin_name, $this->version );

      add_menu_page( 
        __( 'SpringBoard', $this->plugin_name ),
        __( 'SpringBoard', $this->plugin_name ),
        'manage_options',
        $this->slug,
        array( $this, 'parse_page' )
			);
			
			add_submenu_page(
				$this->slug,
        __( 'Settings', $this->plugin_name ),
        __( 'Settings', $this->plugin_name ),
        'manage_options',
        $this->slug . '-settings',
        array( $client, 'setup_settings_page' )
      );

    endif;
	}

	/**
	 * Parse whether to show the index or the detail.
	 *
	 * @since    1.0.0
	 */
	public function parse_page() {
		if ( class_exists( 'SpringBoard_Client_Config' ) ) :

      $client = new SpringBoard_Client_Config( $this->plugin_name, $this->version );

			if ( isset( $_GET['processId'] ) ) :
				$client->setup_process_page();
			else :
				$client->setup_index_page();
			endif;

    endif;
	}

	/**
	 * Register all API routes using controllers.
	 *
	 * @since    1.0.0
	 */
	public function register_routes() {
		if ( class_exists( 'SpringBoard_Process_Controller' ) ) :
			$process_controller = new SpringBoard_Process_Controller( $this->plugin_name );
			$process_controller->register_routes();
		endif;
	}

}