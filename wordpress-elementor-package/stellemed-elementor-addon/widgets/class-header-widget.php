<?php
if ( ! defined( 'ABSPATH' ) ) exit;

class SM_Header_Widget extends \Elementor\Widget_Base {

    public function get_name() {
        return 'sm_header';
    }

    public function get_title() {
        return esc_html__( 'StelleMed Header & Navigation', 'stellemed-addon' );
    }

    public function get_icon() {
        return 'eicon-header';
    }

    public function get_categories() {
        return [ 'stellemed-category' ];
    }

    protected function register_controls() {
        // TopBar Settings
        $this->start_controls_section(
            'section_topbar',
            [
                'label' => esc_html__( 'Top Information Bar', 'stellemed-addon' ),
                'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'topbar_badge',
            [
                'label'   => esc_html__( 'Badge Text', 'stellemed-addon' ),
                'type'    => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'HIPAA Compliant', 'stellemed-addon' ),
            ]
        );

        $this->add_control(
            'topbar_announcement',
            [
                'label'   => esc_html__( 'Announcement', 'stellemed-addon' ),
                'type'    => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'Trusted Medical Billing & Healthcare Solutions | Powered by StelleCloud™', 'stellemed-addon' ),
            ]
        );

        $this->add_control(
            'phone',
            [
                'label'   => esc_html__( 'Phone Number', 'stellemed-addon' ),
                'type'    => \Elementor\Controls_Manager::TEXT,
                'default' => '+1 (516) 979-7418',
            ]
        );

        $this->add_control(
            'email',
            [
                'label'   => esc_html__( 'Email Address', 'stellemed-addon' ),
                'type'    => \Elementor\Controls_Manager::TEXT,
                'default' => 'info@stellemed.com',
            ]
        );

        $this->end_controls_section();

        // Main Nav Settings
        $this->start_controls_section(
            'section_nav',
            [
                'label' => esc_html__( 'Main Navigation Bar', 'stellemed-addon' ),
                'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'brand_name',
            [
                'label'   => esc_html__( 'Brand Name', 'stellemed-addon' ),
                'type'    => \Elementor\Controls_Manager::TEXT,
                'default' => 'StelleMed',
            ]
        );

        $this->add_control(
            'cta_btn_text',
            [
                'label'   => esc_html__( 'CTA Button Text', 'stellemed-addon' ),
                'type'    => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'Book a Consultation', 'stellemed-addon' ),
            ]
        );

        $this->add_control(
            'cta_btn_link',
            [
                'label'   => esc_html__( 'CTA Button Link', 'stellemed-addon' ),
                'type'    => \Elementor\Controls_Manager::URL,
                'default' => [
                    'url' => '#contact',
                ],
            ]
        );

        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        ?>
        <div class="sm-site-header-wrapper">
            <!-- TopBar -->
            <aside class="sm-topbar">
                <div class="sm-container sm-topbar-flex">
                    <div class="sm-topbar-left">
                        <?php if ( ! empty( $settings['topbar_badge'] ) ) : ?>
                            <span class="sm-badge-pill">&#128737; <?php echo esc_html( $settings['topbar_badge'] ); ?></span>
                        <?php endif; ?>
                        <span><?php echo esc_html( $settings['topbar_announcement'] ); ?></span>
                    </div>
                    <div class="sm-topbar-right">
                        <?php if ( ! empty( $settings['email'] ) ) : ?>
                            <a href="mailto:<?php echo esc_attr( $settings['email'] ); ?>">&#9993; <?php echo esc_html( $settings['email'] ); ?></a>
                        <?php endif; ?>
                        <?php if ( ! empty( $settings['phone'] ) ) : ?>
                            <a href="tel:<?php echo esc_attr( str_replace([' ', '(', ')', '-'], '', $settings['phone']) ); ?>">&#9742; <?php echo esc_html( $settings['phone'] ); ?></a>
                        <?php endif; ?>
                        <a href="#contact" data-open-modal="consultation" style="color:#38D4D8; font-weight:700;">&#128274; Client Portal</a>
                    </div>
                </div>
            </aside>

            <!-- Sticky Navbar -->
            <header class="sm-header">
                <div class="sm-container sm-navbar">
                    <a href="#home" class="sm-brand-logo">
                        <div class="sm-logo-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                <path d="M12 2v20M2 12h20M7 12h2.5L11 8l2 8 1.5-4H17"/>
                            </svg>
                        </div>
                        <div>
                            <div class="sm-brand-name">Stelle<span>Med</span></div>
                            <span class="sm-brand-sub">Healthcare Billing Solutions</span>
                        </div>
                    </a>

                    <ul class="sm-nav-links">
                        <li><a href="#home" class="sm-nav-link active">Home</a></li>
                        <li><a href="#services" class="sm-nav-link">Services</a></li>
                        <li><a href="#revenue-leaks" class="sm-nav-link">Revenue Leaks</a></li>
                        <li><a href="#how-we-manage" class="sm-nav-link">Workflows</a></li>
                        <li><a href="#six-checks" class="sm-nav-link">6-Checks QA</a></li>
                        <li><a href="#why-us" class="sm-nav-link">Why Us</a></li>
                        <li><a href="#roi-calculator" class="sm-nav-link">ROI Calculator</a></li>
                        <li><a href="#faq" class="sm-nav-link">FAQ</a></li>
                    </ul>

                    <?php if ( ! empty( $settings['cta_btn_text'] ) ) : ?>
                        <a href="<?php echo esc_url( $settings['cta_btn_link']['url'] ); ?>" class="sm-btn sm-btn-primary" data-open-modal="consultation">
                            <span><?php echo esc_html( $settings['cta_btn_text'] ); ?></span>
                            <span>&rarr;</span>
                        </a>
                    <?php endif; ?>
                </div>
            </header>
        </div>
        <?php
    }
}
