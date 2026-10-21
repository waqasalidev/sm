<?php
if ( ! defined( 'ABSPATH' ) ) exit;

class SM_Footer_Widget extends \Elementor\Widget_Base {

    public function get_name() {
        return 'sm_footer';
    }

    public function get_title() {
        return esc_html__( 'StelleMed Complete Footer', 'stellemed-addon' );
    }

    public function get_icon() {
        return 'eicon-footer';
    }

    public function get_categories() {
        return [ 'stellemed-category' ];
    }

    protected function register_controls() {
        $this->start_controls_section(
            'section_content',
            [
                'label' => esc_html__( 'Footer Content', 'stellemed-addon' ),
                'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'about_text',
            [
                'label'   => esc_html__( 'About Text', 'stellemed-addon' ),
                'type'    => \Elementor\Controls_Manager::TEXTAREA,
                'default' => 'StelleMed manages the complete revenue cycle for healthcare providers across the United States. Delivering accurate medical billing, certified coding, aggressive denial management, and transparent reporting.',
            ]
        );

        $this->add_control(
            'phone',
            [
                'label'   => esc_html__( 'Phone', 'stellemed-addon' ),
                'type'    => \Elementor\Controls_Manager::TEXT,
                'default' => '+1 (516) 979-7418',
            ]
        );

        $this->add_control(
            'email',
            [
                'label'   => esc_html__( 'Email', 'stellemed-addon' ),
                'type'    => \Elementor\Controls_Manager::TEXT,
                'default' => 'info@stellemed.com',
            ]
        );

        $this->add_control(
            'copyright',
            [
                'label'   => esc_html__( 'Copyright', 'stellemed-addon' ),
                'type'    => \Elementor\Controls_Manager::TEXT,
                'default' => '© 2026 StelleMed LLC. All Rights Reserved. Backed by Corvit & StelleCloud.',
            ]
        );

        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        ?>
        <footer class="sm-footer" id="contact">
            <div class="sm-container">
                <div class="sm-footer-grid">
                    <div>
                        <div class="sm-brand-name" style="color:#FFFFFF; margin-bottom:12px;">Stelle<span style="color:#179A9E;">Med</span></div>
                        <p style="font-size:0.875rem; color:#A3B9CC; line-height:1.6; margin-bottom:16px;">
                            <?php echo esc_html( $settings['about_text'] ); ?>
                        </p>
                        <div style="font-size:0.8125rem; color:#38D4D8;">&#128737; 100% HIPAA Compliant Infrastructure</div>
                    </div>

                    <div>
                        <h4 class="sm-footer-title">Quick Links</h4>
                        <ul class="sm-footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">Our Services</a></li>
                            <li><a href="#revenue-leaks">Revenue Leaks</a></li>
                            <li><a href="#how-we-manage">How We Manage RCM</a></li>
                            <li><a href="#why-us">Why Choose StelleMed</a></li>
                            <li><a href="#roi-calculator">ROI Calculator</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="sm-footer-title">Services</h4>
                        <ul class="sm-footer-links">
                            <li><a href="#services">Insurance &amp; Payer Services</a></li>
                            <li><a href="#services">Patient &amp; Practice Services</a></li>
                            <li><a href="#services">Technology &amp; IT Support</a></li>
                            <li><a href="#six-checks">Six Checks Quality Gates</a></li>
                            <li><a href="#faq">Billing FAQs</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="sm-footer-title">Contact &amp; Location</h4>
                        <ul class="sm-footer-links">
                            <li>&#9742; <a href="tel:<?php echo esc_attr( str_replace([' ', '(', ')', '-'], '', $settings['phone']) ); ?>"><?php echo esc_html( $settings['phone'] ); ?></a></li>
                            <li>&#9993; <a href="mailto:<?php echo esc_attr( $settings['email'] ); ?>"><?php echo esc_html( $settings['email'] ); ?></a></li>
                            <li>&#128338; Mon - Fri: 8:00 AM - 6:00 PM EST</li>
                            <li>&#128205; New York, United States</li>
                        </ul>
                        <button type="button" class="sm-btn sm-btn-primary" data-open-modal="consultation" style="margin-top:16px; padding:8px 18px; font-size:0.8125rem;">
                            <span>Book Consultation</span>
                        </button>
                    </div>
                </div>

                <div class="sm-footer-bottom">
                    <div><?php echo esc_html( $settings['copyright'] ); ?></div>
                    <div style="display:flex; gap:16px;">
                        <a href="#contact" data-open-modal="consultation">Privacy Policy</a>
                        <a href="#contact" data-open-modal="consultation">Terms of Service</a>
                        <a href="#contact" data-open-modal="consultation">HIPAA Compliance</a>
                    </div>
                </div>
            </div>
        </footer>
        <?php
    }
}
