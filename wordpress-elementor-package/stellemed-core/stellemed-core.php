<?php
/**
 * Plugin Name: StelleMed Core Builder
 * Plugin URI: https://stellemed.com
 * Description: Drag-and-drop Elementor widgets for StelleMed Medical Billing (Header, Hero, Stats, Services, ROI Calculator, 6-Checks, Revenue Leaks, Workflows, Why Choose Us, FAQs, Footer).
 * Version: 1.0.0
 * Author: StelleMed Team
 * Author URI: https://stellemed.com
 * Text Domain: stellemed-core
 * Requires PHP: 7.4
 * Requires at least: 5.8
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

final class StelleMed_Core_Builder {

    const VERSION = '1.0.0';
    const MINIMUM_ELEMENTOR_VERSION = '3.0.0';
    const MINIMUM_PHP_VERSION = '7.4';

    private static $_instance = null;

    public static function instance() {
        if ( is_null( self::$_instance ) ) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function __construct() {
        add_action( 'plugins_loaded', [ $this, 'init' ] );
    }

    public function init() {
        // Check if Elementor installed and activated
        if ( ! did_action( 'elementor/loaded' ) ) {
            add_action( 'admin_notices', [ $this, 'admin_notice_missing_main_plugin' ] );
            return;
        }

        // Register custom widget category
        add_action( 'elementor/elements/categories_registered', [ $this, 'add_elementor_widget_categories' ] );

        // Register widgets
        add_action( 'elementor/widgets/register', [ $this, 'register_widgets' ] );

        // Register scripts and styles
        add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_assets' ] );
        add_action( 'elementor/frontend/after_enqueue_styles', [ $this, 'enqueue_assets' ] );
    }

    public function admin_notice_missing_main_plugin() {
        if ( isset( $_GET['activate'] ) ) unset( $_GET['activate'] );
        $message = sprintf(
            esc_html__( '"%1$s" requires "%2$s" to be installed and activated.', 'stellemed-addon' ),
            '<strong>' . esc_html__( 'StelleMed Elementor Addons', 'stellemed-addon' ) . '</strong>',
            '<strong>' . esc_html__( 'Elementor', 'stellemed-addon' ) . '</strong>'
        );
        printf( '<div class="notice notice-warning is-dismissible"><p>%1$s</p></div>', $message );
    }

    public function add_elementor_widget_categories( $elements_manager ) {
        $elements_manager->add_category(
            'stellemed-category',
            [
                'title' => esc_html__( 'StelleMed Medical Billing', 'stellemed-addon' ),
                'icon'  => 'fa fa-plus-square',
            ]
        );
    }

    public function enqueue_assets() {
        wp_enqueue_style(
            'stellemed-addon-css',
            plugins_url( 'assets/css/stellemed-addon.css', __FILE__ ),
            [],
            self::VERSION
        );

        wp_enqueue_script(
            'stellemed-addon-js',
            plugins_url( 'assets/js/stellemed-addon.js', __FILE__ ),
            [],
            self::VERSION,
            true
        );
    }

    public function register_widgets( $widgets_manager ) {
        require_once( __DIR__ . '/widgets/class-header-widget.php' );
        require_once( __DIR__ . '/widgets/class-hero-widget.php' );
        require_once( __DIR__ . '/widgets/class-statistics-widget.php' );
        require_once( __DIR__ . '/widgets/class-services-widget.php' );
        require_once( __DIR__ . '/widgets/class-revenue-leaks-widget.php' );
        require_once( __DIR__ . '/widgets/class-workflow-widget.php' );
        require_once( __DIR__ . '/widgets/class-six-checks-widget.php' );
        require_once( __DIR__ . '/widgets/class-why-us-widget.php' );
        require_once( __DIR__ . '/widgets/class-roi-calculator-widget.php' );
        require_once( __DIR__ . '/widgets/class-faq-widget.php' );
        require_once( __DIR__ . '/widgets/class-cta-widget.php' );
        require_once( __DIR__ . '/widgets/class-footer-widget.php' );
        require_once( __DIR__ . '/widgets/class-consultation-form-widget.php' );

        $widgets_manager->register( new \SM_Header_Widget() );
        $widgets_manager->register( new \SM_Hero_Widget() );
        $widgets_manager->register( new \SM_Statistics_Widget() );
        $widgets_manager->register( new \SM_Services_Widget() );
        $widgets_manager->register( new \SM_Revenue_Leaks_Widget() );
        $widgets_manager->register( new \SM_Workflow_Widget() );
        $widgets_manager->register( new \SM_Six_Checks_Widget() );
        $widgets_manager->register( new \SM_Why_Us_Widget() );
        $widgets_manager->register( new \SM_ROI_Calculator_Widget() );
        $widgets_manager->register( new \SM_FAQ_Widget() );
        $widgets_manager->register( new \SM_CTA_Widget() );
        $widgets_manager->register( new \SM_Footer_Widget() );
        $widgets_manager->register( new \SM_Consultation_Form_Widget() );
    }
}

StelleMed_Core_Builder::instance();
