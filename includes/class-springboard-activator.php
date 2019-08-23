<?php

/**
 * Fired during plugin activation
 *
 * @link       https://wking.io
 * @since      1.0.0
 *
 * @package    SpringBoard
 * @subpackage SpringBoard/includes
 */

/**
 * Fired during plugin activation.
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @since      1.0.0
 * @package    SpringBoard
 * @subpackage SpringBoard/includes
 * @author     William King <contact@wking.io>
 */
class SpringBoard_Activator {

	/**
	 * Short Description. (use period)
	 *
	 * Long Description.
	 *
	 * @since    1.0.0
	 */
	public static function activate() {
		self::create_process_table();
		self::create_step_table();
	}

	private static function create_process_table() {
		global $wpdb;
		$charset_collate = $wpdb->get_charset_collate();
		$table_name = $wpdb->prefix . 'sb_processes';

		$sql = "CREATE TABLE IF NOT EXISTS {$table_name} (
			id mediumint(9) NOT NULL AUTO_INCREMENT PRIMARY KEY,
			created_at datetime NOT NULL,
			status enum('INACTIVE', 'ACTIVE', 'ARCHIVED') NOT NULL,
			title varchar(255) NOT NULL,
			description text,
			task_count tinyint(3) NOT NULL DEFAULT 0,
			completed_count tinyint(3) NOT NULL DEFAULT 0,
			last_activity datetime
		) {$charset_collate};";

		require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
		dbDelta( $sql );
	}

	private static function create_step_table() {
		global $wpdb;
		$charset_collate = $wpdb->get_charset_collate();
		$table_name = $wpdb->prefix . 'sb_steps';

		$sql = "CREATE TABLE {$table_name} (
			id mediumint(9) NOT NULL AUTO_INCREMENT PRIMARY KEY,
			process_id mediumint(9) NOT NULL,
			created_at datetime NOT NULL,
			status enum('TODO', 'INPROGRESS', 'DONE') NOT NULL DEFAULT 'TODO',
			title varchar(255) NOT NULL,
			description text,
			links text
		) {$charset_collate};";

		require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
		dbDelta( $sql );
	}

}
