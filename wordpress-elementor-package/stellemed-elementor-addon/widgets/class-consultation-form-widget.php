<?php
if ( ! defined( 'ABSPATH' ) ) exit;

class SM_Consultation_Form_Widget extends \Elementor\Widget_Base {

    public function get_name() {
        return 'sm_consultation_form';
    }

    public function get_title() {
        return esc_html__( 'StelleMed Consultation Form / Modal', 'stellemed-addon' );
    }

    public function get_icon() {
        return 'eicon-form-horizontal';
    }

    public function get_categories() {
        return [ 'stellemed-category' ];
    }

    protected function register_controls() {
        $this->start_controls_section(
            'section_content',
            [
                'label' => esc_html__( 'Form Content', 'stellemed-addon' ),
                'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'title',
            [
                'label'   => esc_html__( 'Title', 'stellemed-addon' ),
                'type'    => \Elementor\Controls_Manager::TEXT,
                'default' => 'Request Your Free Practice Audit',
            ]
        );

        $this->add_control(
            'subtitle',
            [
                'label'   => esc_html__( 'Subtitle', 'stellemed-addon' ),
                'type'    => \Elementor\Controls_Manager::TEXTAREA,
                'default' => 'Fill in your details below and our healthcare billing directors will contact you within 24 hours.',
            ]
        );

        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        ?>
        <div class="sm-modal-backdrop" id="sm-consultation-modal">
            <div class="sm-modal-card">
                <button type="button" class="sm-modal-close" data-close-modal>&times;</button>
                <div style="display:flex; align-items:center; gap:8px; color:var(--sm-teal); font-weight:700; font-size:0.85rem; margin-bottom:8px;">
                    <span>&#128197; Free Zero-Obligation Practice Audit</span>
                </div>
                <h3 style="font-size:1.45rem; color:var(--sm-navy); font-weight:800; margin:0 0 10px 0;">
                    <?php echo esc_html( $settings['title'] ); ?>
                </h3>
                <p style="font-size:0.875rem; color:var(--sm-text-secondary); margin:0 0 20px 0;">
                    <?php echo esc_html( $settings['subtitle'] ); ?>
                </p>

                <form>
                    <input type="text" class="sm-input" placeholder="Your Full Name *" required />
                    <input type="text" class="sm-input" placeholder="Practice / Clinic Name *" required />
                    <input type="email" class="sm-input" placeholder="Work Email Address *" required />
                    <input type="tel" class="sm-input" placeholder="Phone Number *" required />
                    <select class="sm-input">
                        <option value="">Select Primary Clinical Specialty...</option>
                        <option value="internal-medicine">Internal Medicine / Primary Care</option>
                        <option value="cardiology">Cardiology</option>
                        <option value="orthopedics">Orthopedics &amp; Sports Medicine</option>
                        <option value="pediatrics">Pediatrics</option>
                        <option value="mental-health">Behavioral &amp; Mental Health</option>
                        <option value="surgery">General Surgery / ASC</option>
                        <option value="other">Other Specialty</option>
                    </select>
                    <button type="submit" class="sm-btn sm-btn-primary" style="width:100%; padding:14px; margin-top:6px;">
                        <span>Submit Audit Request</span>
                        <span>&rarr;</span>
                    </button>
                </form>
            </div>
        </div>
        <?php
    }
}
