<?php
if ( ! defined( 'ABSPATH' ) ) exit;

class SM_Services_Widget extends \Elementor\Widget_Base {

    public function get_name() {
        return 'sm_services';
    }

    public function get_title() {
        return esc_html__( 'StelleMed 3 Service Pillars', 'stellemed-addon' );
    }

    public function get_icon() {
        return 'eicon-gallery-grid';
    }

    public function get_categories() {
        return [ 'stellemed-category' ];
    }

    protected function register_controls() {
        $this->start_controls_section(
            'section_content',
            [
                'label' => esc_html__( 'Services Header', 'stellemed-addon' ),
                'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'eyebrow',
            [
                'label'   => esc_html__( 'Eyebrow', 'stellemed-addon' ),
                'type'    => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'Healthcare Billing Expertise', 'stellemed-addon' ),
            ]
        );

        $this->add_control(
            'title',
            [
                'label'   => esc_html__( 'Title', 'stellemed-addon' ),
                'type'    => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'Comprehensive Healthcare Billing Solutions', 'stellemed-addon' ),
            ]
        );

        $this->add_control(
            'desc',
            [
                'label'   => esc_html__( 'Description', 'stellemed-addon' ),
                'type'    => \Elementor\Controls_Manager::TEXTAREA,
                'default' => esc_html__( 'We deliver the full spectrum of revenue cycle management — combining certified billing specialists, payer relationships, and modern software.', 'stellemed-addon' ),
            ]
        );

        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        ?>
        <section class="sm-section" id="services">
            <div class="sm-container">
                <div class="sm-section-header text-center">
                    <?php if ( ! empty( $settings['eyebrow'] ) ) : ?>
                        <div class="sm-eyebrow">
                            <span><?php echo esc_html( $settings['eyebrow'] ); ?></span>
                        </div>
                    <?php endif; ?>

                    <h2 class="sm-title">
                        <?php echo esc_html( $settings['title'] ); ?>
                    </h2>

                    <p class="sm-desc">
                        <?php echo esc_html( $settings['desc'] ); ?>
                    </p>
                </div>

                <div class="sm-services-grid">
                    <!-- Pillar 1 -->
                    <div class="sm-service-card">
                        <div class="sm-service-icon">&#128203;</div>
                        <h3 class="sm-service-title">Insurance &amp; Payer Services</h3>
                        <p class="sm-service-desc">End-to-end payer management, insurance eligibility verifications, coding audits, credentialing, and fast-track claim submission.</p>
                        <ul class="sm-service-list">
                            <li><span class="dot"></span> Real-time 270/271 eligibility verification</li>
                            <li><span class="dot"></span> Provider Credentialing &amp; Re-attestation</li>
                            <li><span class="dot"></span> Payer Enrollment &amp; Contracting</li>
                            <li><span class="dot"></span> Aggressive Denial Tracking &amp; Appeals</li>
                        </ul>
                        <button type="button" class="sm-btn sm-btn-secondary" data-open-modal="consultation" style="margin-top:auto;">Explore Details &rarr;</button>
                    </div>

                    <!-- Pillar 2 -->
                    <div class="sm-service-card" style="border-top-color: #2563EB;">
                        <div class="sm-service-icon" style="background:#EAF3FF; color:#2563EB;">&#128101;</div>
                        <h3 class="sm-service-title">Patient &amp; Practice Services</h3>
                        <p class="sm-service-desc">Transparent patient billing, front-desk verification workflows, friendly self-pay recovery, flexible payment plans, and practice admin support.</p>
                        <ul class="sm-service-list">
                            <li><span class="dot" style="background:#2563EB;"></span> Patient Billing &amp; Clear Statements</li>
                            <li><span class="dot" style="background:#2563EB;"></span> Front-Desk Verification Workflows</li>
                            <li><span class="dot" style="background:#2563EB;"></span> Flexible Payment Plans &amp; Counseling</li>
                            <li><span class="dot" style="background:#2563EB;"></span> Practice Administrative Support</li>
                        </ul>
                        <button type="button" class="sm-btn sm-btn-secondary" data-open-modal="consultation" style="margin-top:auto;">Explore Details &rarr;</button>
                    </div>

                    <!-- Pillar 3 -->
                    <div class="sm-service-card" style="border-top-color: #7C3AED;">
                        <div class="sm-service-icon" style="background:#F1EDFF; color:#7C3AED;">&#128421;</div>
                        <h3 class="sm-service-title">Technology &amp; IT Support</h3>
                        <p class="sm-service-desc">State-of-the-art healthcare technology, automated claim scrubbing engines, executive financial dashboards, and seamless EHR integrations.</p>
                        <ul class="sm-service-list">
                            <li><span class="dot" style="background:#7C3AED;"></span> Seamless EHR / PM Integrations</li>
                            <li><span class="dot" style="background:#7C3AED;"></span> Automated Claim Scrubbing Engine</li>
                            <li><span class="dot" style="background:#7C3AED;"></span> 24/7 Client Financial Portal Access</li>
                            <li><span class="dot" style="background:#7C3AED;"></span> Dedicated Account Manager &amp; IT Support</li>
                        </ul>
                        <button type="button" class="sm-btn sm-btn-secondary" data-open-modal="consultation" style="margin-top:auto;">Explore Details &rarr;</button>
                    </div>
                </div>
            </div>
        </section>
        <?php
    }
}
