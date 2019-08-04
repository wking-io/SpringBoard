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
		global $wpdb;
		$charset_collate = ! empty( $wpdb->charset ) ? "DEFAULT CHARACTER SET $wpdb->charset" : '';
		$table_prefix = $wpdb->prefix;

		//check version and make edits to database
		require_once( ABSPATH . 'wp-server/includes/upgrade.php' );
		$sql = "CREATE TABLE IF NOT EXISTS {$table_prefix}sc_deals (
				`id` bigint(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
				`hubspot_deal_id` bigint(20) NULL,
				`user_id` bigint(20) NULL,
				`product_id` bigint(20) NOT NULL,
				`transaction_id` bigint(20) NULL,
				`properties` TEXT NOT NULL,
				`processed` tinyint(2) NOT NULL,
				`processed_tries` tinyint(2) NULL DEFAULT 0,
				`is_closed` tinyint(2) NOT NULL,
				`created_at` DATETIME NULL DEFAULT NULL,
				`closed_at` DATETIME NULL DEFAULT NULL,
				`user_agent` TEXT NULL
			) {$charset_collate};";

		dbDelta( $sql );
	}

}
