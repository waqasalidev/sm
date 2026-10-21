<?php
if ( ! defined( 'ABSPATH' ) ) exit;

class SM_Six_Checks_Widget extends \Elementor\Widget_Base {

    public function get_name() {
        return 'sm_six_checks';
    }

    public function get_title() {
        return esc_html__( 'StelleMed 6-Checks QA', 'stellemed-addon' );
    }

    public function get_icon() {
        return 'eicon-checkbox';
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
                'default' => esc_html__( 'Pre-Submission Quality Assurance', 'stellemed-addon' ),
            ]
        );

        $this->add_control(
            'title',
            [
                'label'   => esc_html__( 'Title', 'stellemed-addon' ),
                'type'    => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'Six Checks Before Every Claim Goes Out', 'stellemed-addon' ),
            ]
        );

        $this->add_control(
            'subtitle',
            [
                'label'   => esc_html__( 'Subtitle', 'stellemed-addon' ),
                'type'    => \Elementor\Controls_Manager::TEXTAREA,
                'default' => esc_html__( 'To protect your revenue and prevent delays, every single claim is evaluated against six vital quality gates before clearinghouse dispatch.', 'stellemed-addon' ),
            ]
        );

        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();

        $checks = [
            [
                'num'   => '01',
                'title' => 'Patient Details Complete & Correct',
                'desc'  => 'Demographic fields, subscriber IDs, relationship codes, and group numbers verified 100% error-free.',
            ],
            [
                'num'   => '02',
                'title' => 'Coverage Confirmed for Date of Service',
                'desc'  => 'Active policy status, effective date windows, co-pays, and deductibles verified before batch generation.',
            ],
            [
                'num'   => '03',
                'title' => 'Prior Authorization on File Where Required',
                'desc'  => 'Auth reference numbers logged and attached directly to billing lines for required clinical encounters.',
            ],
            [
                'num'   => '04',
                'title' => 'Codes Match the Documentation',
                'desc'  => 'CPT, ICD-10-CM, and HCPCS modifiers aligned accurately with clinical notes to justify medical necessity.',
            ],
            [
                'num'   => '05',
                'title' => 'Claim Scrubber Edits Passed',
                'desc'  => 'Evaluated through StelleCloud™ rules engine to catch NCCI bundle conflicts and modifier errors.',
            ],
            [
                'num'   => '06',
                'title' => 'Payer-Specific Rules Applied',
                'desc'  => 'Carrier-specific billing guidelines applied so claims meet local clearinghouse requirements first pass.',
            ],
        ];
        ?>
        <div class="sm-section" id="six-checks" style="padding: 60px 0; background-color: var(--sm-bg-page);">
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

                <div class="sm-six-checks-grid">
                    <?php foreach ( $checks as $check ) : ?>
                        <div class="sm-check-card">
                            <div class="sm-check-icon">&#10003;</div>
                            <div>
                                <span class="sm-check-badge">CHECK <?php echo esc_html( $check['num'] ); ?></span>
                                <h3 class="sm-check-title"><?php echo esc_html( $check['title'] ); ?></h3>
                                <p class="sm-check-desc"><?php echo esc_html( $check['desc'] ); ?></p>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
        <?php
    }
}
