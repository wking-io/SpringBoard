<?php
/**
 * The router for SpringBoard API calls.
 *
 * @link       https://www.wking.io
 * @since      1.0.0
 *
 * @package    SpringBoard
 * @subpackage SpringBoard/server
 */

/**
 * he router for SpringBoard API calls.
 *
 * @package    SpringBoard
 * @subpackage SpringBoard/server
 * @author     William King <contact@wking.io>
 */
class SpringBoard_Process_Controller extends WP_REST_Controller {  
  /**
	 * The API version.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $version    The API version.
	 */
	private $version;

  /**
	 * The API version.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $version    The API version.
	 */
  private $resource_name;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name ) {

    $this->namespace = $plugin_name;
		$this->version = '1';
    $this->resource_name = 'processes';
    $this->rest_base = '/v' . $this->version . '/' . $this->resource_name;

  }
  
  /**
	 * Register API endpoints.
	 *
	 * @since    1.0.0
	 */
	public function register_routes() {
		register_rest_route( $this->namespace, $this->rest_base, array(
      array(
        'methods'  => WP_REST_Server::READABLE,
        'callback' => array( $this, 'get_items' ),
        // 'permission_callback' => array( $this, 'get_items_permissions_check' ),
      ),
      array(
        'methods'  => WP_REST_Server::CREATABLE,
        'callback' => array( $this, 'create_item' ),
        // 'permission_callback' => array( $this, 'create_item_permissions_check' ),
      ),
    ) );
    
    register_rest_route( $this->namespace, $this->rest_base . '/(?P<id>[\d]+)', array(
      array(
        'methods'  => WP_REST_Server::READABLE,
        'callback' => array( $this, 'get_item' ),
        // 'permission_callback' => array( $this, 'get_item_permissions_check' ),
      ),
      array(
        'methods'  => WP_REST_Server::EDITABLE,
        'callback' => array( $this, 'update_item' ),
        // 'permission_callback' => array( $this, 'update_item_permissions_check' ),
      ),
      array(
        'methods'  => WP_REST_Server::DELETABLE,
        'callback' => array( $this, 'delete_item' ),
        // 'permission_callback' => array( $this, 'delete_item_permissions_check' ),
      ),
    ) );

    register_rest_route( $this->namespace, $this->rest_base . '/schema', array(
      'methods'  => WP_REST_Server::READABLE,
      'callback' => array( $this, 'get_public_item_schema' ),
    ) );
  }
  
    /**
   * Get a collection of items
   *
   * @param WP_REST_Request $request Full data about the request.
   * @return WP_Error|WP_REST_Response
   */
  public function get_items( $request ) {
    $data = collect([1, 2, 3, 4]); 
    return new WP_REST_Response( $data, 200 );
  }
 
  /**
   * Get one item from the collection
   *
   * @param WP_REST_Request $request Full data about the request.
   * @return WP_Error|WP_REST_Response
   */
  public function get_item( $request ) {
    //get parameters from request
    $params = $request->get_params();
 
    //return a response or error based on some conditional
    if ( 1 == 1 ) {
      return new WP_REST_Response( $params, 200 );
    } else {
      return new WP_Error( 'code', __( 'message', 'text-domain' ) );
    }
  }
 
  /**
   * Create one item from the collection
   *
   * @param WP_REST_Request $request Full data about the request.
   * @return WP_Error|WP_REST_Request
   */
  public function create_item( $request ) {
    $data = array( 1 );
    if ( is_array( $data ) ) {
      return new WP_REST_Response( $data, 200 );
    }
 
    return new WP_Error( 'cant-create', __( 'message', 'text-domain' ), array( 'status' => 500 ) );
  }
 
  /**
   * Update one item from the collection
   *
   * @param WP_REST_Request $request Full data about the request.
   * @return WP_Error|WP_REST_Request
   */
  public function update_item( $request ) {
    //get parameters from request
    $params = $request->get_params();
    if ( is_array( $data ) ) {
      return new WP_REST_Response( $params, 200 );
    }

    return new WP_Error( 'cant-update', __( 'message', 'text-domain' ), array( 'status' => 500 ) );
  }
 
  /**
   * Delete one item from the collection
   *
   * @param WP_REST_Request $request Full data about the request.
   * @return WP_Error|WP_REST_Request
   */
  public function delete_item( $request ) {
    //get parameters from request
    $params = $request->get_params();
    if ( 1 == 1 ) {
      return new WP_REST_Response( $params, 200 );
    }
 
    return new WP_Error( 'cant-delete', __( 'message', 'text-domain' ), array( 'status' => 500 ) );
  }
 
  /**
   * Check if a given request has access to get items
   *
   * @param WP_REST_Request $request Full data about the request.
   * @return WP_Error|bool
   */
  public function get_items_permissions_check( $request ) {
    return current_user_can( 'manage_options' );
  }
 
  /**
   * Check if a given request has access to get a specific item
   *
   * @param WP_REST_Request $request Full data about the request.
   * @return WP_Error|bool
   */
  public function get_item_permissions_check( $request ) {
    return $this->get_items_permissions_check( $request );
  }
 
  /**
   * Check if a given request has access to create items
   *
   * @param WP_REST_Request $request Full data about the request.
   * @return WP_Error|bool
   */
  public function create_item_permissions_check( $request ) {
    return current_user_can( 'manage_options' );
  }
 
  /**
   * Check if a given request has access to update a specific item
   *
   * @param WP_REST_Request $request Full data about the request.
   * @return WP_Error|bool
   */
  public function update_item_permissions_check( $request ) {
    return $this->create_item_permissions_check( $request );
  }
 
  /**
   * Check if a given request has access to delete a specific item
   *
   * @param WP_REST_Request $request Full data about the request.
   * @return WP_Error|bool
   */
  public function delete_item_permissions_check( $request ) {
    return $this->create_item_permissions_check( $request );
  }
 
  /**
   * Prepare the item for create or update operation
   *
   * @param WP_REST_Request $request Request object
   * @return WP_Error|object $prepared_item
   */
  protected function prepare_item_for_database( $request ) {
    return array();
  }
 
  /**
   * Prepare the item for the REST response
   *
   * @param mixed $item WordPress representation of the item.
   * @param WP_REST_Request $request Request object.
   * @return mixed
   */
  public function prepare_item_for_response( $item, $request ) {
    return array();
  } 

}