<?php
if ( ! defined( 'ABSPATH' ) ) exit;

class SM_Workflow_Widget extends \Elementor\Widget_Base {

    public function get_name() {
        return 'sm_workflow';
    }

    public function get_title() {
        return esc_html__( 'StelleMed Revenue Workflows', 'stellemed-addon' );
    }

    public function get_icon() {
        return 'eicon-sitemap';
    }

    public function get_categories() {
        return [ 'stellemed-category' ];
    }

    protected function register_controls() {
        $this->start_controls_section(
            'section_content',
            [
                'label' => esc_html__( 'Section Header', 'stellemed-addon' ),
                'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'eyebrow',
            [
                'label'   => esc_html__( 'Eyebrow', 'stellemed-addon' ),
                'type'    => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'Proven Workflow Sequences', 'stellemed-addon' ),
            ]
        );

        $this->add_control(
            'title',
            [
                'label'   => esc_html__( 'Title', 'stellemed-addon' ),
                'type'    => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'How We Manage the Revenue Cycle', 'stellemed-addon' ),
            ]
        );

        $this->add_control(
            'subtitle',
            [
                'label'   => esc_html__( 'Subtitle', 'stellemed-addon' ),
                'type'    => \Elementor\Controls_Manager::TEXTAREA,
                'default' => esc_html__( 'We operate two distinct, synchronized revenue workflows to guarantee maximum reimbursement from both insurance carriers and patients.', 'stellemed-addon' ),
            ]
        );

        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();

        $insurance_steps = [
            [ 'num' => '01', 'title' => 'Patient Visit', 'desc' => 'Clinical encounter and documentation captured.' ],
            [ 'num' => '02', 'title' => 'Eligibility & Auth', 'desc' => 'Real-time coverage verification & prior auth on file.' ],
            [ 'num' => '03', 'title' => 'Medical Coding', 'desc' => 'Certified AAPC/AHIMA CPT, ICD-10 & modifier coding.' ],
            [ 'num' => '04', 'title' => 'Claim Submission', 'desc' => 'Scrubbing and EDI 837 dispatch within 24–48h.' ],
            [ 'num' => '05', 'title' => 'Denials & Appeals', 'desc' => 'Fast investigation and aggressive clinical appeals.' ],
            [ 'num' => '06', 'title' => 'Payer Payment', 'desc' => 'Automated ERA (835) electronic remittance and posting.' ],
            [ 'num' => '07', 'title' => 'Practice Paid', 'desc' => 'Funds deposited cleanly into practice bank accounts.' ],
        ];

        $patient_steps = [
            [ 'num' => '01', 'title' => 'Patient Visit', 'desc' => 'Point-of-service intake & transparent Good Faith Estimate.' ],
            [ 'num' => '02', 'title' => 'Patient Statement', 'desc' => 'Clear digital SMS & paperless statements generated.' ],
            [ 'num' => '03', 'title' => 'Payment Plan', 'desc' => 'Customizable recurring payment schedules & balance counseling.' ],
            [ 'num' => '04', 'title' => 'Patient Payment', 'desc' => 'Secure 1-click online payment and portal processing.' ],
            [ 'num' => '05', 'title' => 'Practice Paid', 'desc' => 'Reconciled balances and maximized self-pay recovery.' ],
        ];
        ?>
        <div class="sm-section" id="how-we-manage" style="padding: 60px 0; background-color: #FFFFFF;">
            <div class="sm-container">
                <div class="sm-section-header text-center">
                    <?php if ( ! empty( $settings['eyebrow'] ) ) : ?>
                        <div class="sm-eyebrow">
                            <span><?php echo esc_html( $settings['eyebrow'] ); ?></span>
                        </div>
                    <?php endif; ?>

                    <?php if ( ! empty( $settings['title'] ) ) : ?>
                        <h2 class="sm-title">
                            <?php echo esc_html( $settings['title'] ); ?>
                        </h2>
                    <?php endif; ?>

                    <?php if ( ! empty( $settings['subtitle'] ) ) : ?>
                        <p class="sm-desc">
                            <?php echo esc_html( $settings['subtitle'] ); ?>
                        </p>
                    <?php endif; ?>
                </div>

                <!-- Workflow 1: Insurance -->
                <div style="margin-bottom: 44px;">
                    <div class="sm-workflow-header-bar">
                        <div style="width:28px; height:28px; border-radius:50%; background:var(--sm-teal); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:0.85rem;">+</div>
                        <div>
                            <h3 style="font-size:1.15rem; color:var(--sm-navy); margin:0; font-weight:700;"><?php esc_html_e( 'Insurance / Payer Revenue Cycle', 'stellemed-addon' ); ?></h3>
                            <span style="font-size:0.8rem; color:var(--sm-text-secondary);"><?php esc_html_e( '7-Step Adjudication & Payer Reimbursement Sequence', 'stellemed-addon' ); ?></span>
                        </div>
                    </div>

                    <div class="sm-workflow-steps-grid">
                        <?php foreach ( $insurance_steps as $step ) : ?>
                            <div class="sm-workflow-step-card">
                                <div class="sm-workflow-step-header">
                                    <span class="sm-workflow-step-num">STEP <?php echo esc_html( $step['num'] ); ?></span>
                                    <span style="color:var(--sm-teal); font-size:0.85rem;">&#10003;</span>
                                </div>
                                <div class="sm-workflow-step-title"><?php echo esc_html( $step['title'] ); ?></div>
                                <p class="sm-workflow-step-desc"><?php echo esc_html( $step['desc'] ); ?></p>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>

                <!-- Workflow 2: Patient -->
                <div>
                    <div class="sm-workflow-header-bar patient">
                        <div style="width:28px; height:28px; border-radius:50%; background:#7C3AED; color:#fff; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:0.85rem;">&starf;</div>
                        <div>
                            <h3 style="font-size:1.15rem; color:var(--sm-navy); margin:0; font-weight:700;"><?php esc_html_e( 'Patient Billing Revenue Cycle', 'stellemed-addon' ); ?></h3>
                            <span style="font-size:0.8rem; color:var(--sm-text-secondary);"><?php esc_html_e( '5-Step Patient Financial Experience & Self-Pay Recovery', 'stellemed-addon' ); ?></span>
                        </div>
                    </div>

                    <div class="sm-workflow-steps-grid patient">
                        <?php foreach ( $patient_steps as $step ) : ?>
                            <div class="sm-workflow-step-card patient">
                                <div class="sm-workflow-step-header">
                                    <span class="sm-workflow-step-num patient">STEP <?php echo esc_html( $step['num'] ); ?></span>
                                    <span style="color:#7C3AED; font-size:0.85rem;">&#10003;</span>
                                </div>
                                <div class="sm-workflow-step-title"><?php echo esc_html( $step['title'] ); ?></div>
                                <p class="sm-workflow-step-desc"><?php echo esc_html( $step['desc'] ); ?></p>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
        </div>
        <?php
    }
}
