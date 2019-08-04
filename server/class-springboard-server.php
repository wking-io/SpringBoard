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
class SpringBoard_Server {

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
    if ( class_exists( 'SpringBoard_Client' ) ) :

      $client = new SpringBoard_Client( $this->plugin_name, $this->version );

      add_menu_page( 
        __( 'SpringBoard', 'skillcrush-lms-add-on' ),
        __( 'SpringBoard', 'skillcrush-lms-add-on' ),
        'springboard_manage_processes',
        $this->slug,
        array( $client, 'setup_admin_page' )
      );

    endif;
	}

}
