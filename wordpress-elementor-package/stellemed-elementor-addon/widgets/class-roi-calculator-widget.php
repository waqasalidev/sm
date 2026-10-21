<?php
if ( ! defined( 'ABSPATH' ) ) exit;

class SM_ROI_Calculator_Widget extends \Elementor\Widget_Base {

    public function get_name() {
        return 'sm_roi_calculator';
    }

    public function get_title() {
        return esc_html__( 'StelleMed ROI Calculator', 'stellemed-addon' );
    }

    public function get_icon() {
        return 'eicon-calculator';
    }

    public function get_categories() {
        return [ 'stellemed-category' ];
    }

    protected function register_controls() {
        // Content Section
        $this->start_controls_section(
            'section_content',
            [
                'label' => esc_html__( 'Calculator Content', 'stellemed-addon' ),
                'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'eyebrow',
            [
                'label'       => esc_html__( 'Eyebrow Text', 'stellemed-addon' ),
                'type'        => \Elementor\Controls_Manager::TEXT,
                'default'     => esc_html__( 'Practice Revenue Recovery Estimator', 'stellemed-addon' ),
            ]
        );

        $this->add_control(
            'title',
            [
                'label'       => esc_html__( 'Heading Title', 'stellemed-addon' ),
                'type'        => \Elementor\Controls_Manager::TEXT,
                'default'     => esc_html__( 'Calculate Your Practice’s Lost Revenue Recovery', 'stellemed-addon' ),
            ]
        );

        $this->add_control(
            'subtitle',
            [
                'label'       => esc_html__( 'Subtitle Description', 'stellemed-addon' ),
                'type'        => \Elementor\Controls_Manager::TEXTAREA,
                'default'     => esc_html__( 'Average US practices lose 15% to 25% of legitimate billings to unresolved claim denials, coding inaccuracies, and delayed payer follow-ups. See how much StelleMed can recapture.', 'stellemed-addon' ),
            ]
        );

        $this->add_control(
            'btn_text',
            [
                'label'       => esc_html__( 'Button Text', 'stellemed-addon' ),
                'type'        => \Elementor\Controls_Manager::TEXT,
                'default'     => esc_html__( 'Claim Your Detailed Practice Audit', 'stellemed-addon' ),
            ]
        );

        $this->add_control(
            'btn_link',
            [
                'label'       => esc_html__( 'Button Link', 'stellemed-addon' ),
                'type'        => \Elementor\Controls_Manager::URL,
                'default'     => [
                    'url' => '#contact',
                ],
            ]
        );

        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        ?>
        <div class="sm-roi-section" id="roi-calculator">
            <div class="sm-container">
                <div class="sm-section-header text-center">
                    <?php if ( ! empty( $settings['eyebrow'] ) ) : ?>
                        <div class="sm-eyebrow dark-theme">
                            <span><?php echo esc_html( $settings['eyebrow'] ); ?></span>
                        </div>
                    <?php endif; ?>

                    <?php if ( ! empty( $settings['title'] ) ) : ?>
                        <h2 class="sm-title dark-theme">
                            <?php echo esc_html( $settings['title'] ); ?>
                        </h2>
                    <?php endif; ?>

                    <?php if ( ! empty( $settings['subtitle'] ) ) : ?>
                        <p class="sm-desc dark-theme">
                            <?php echo esc_html( $settings['subtitle'] ); ?>
                        </p>
                    <?php endif; ?>
                </div>

                <div class="sm-roi-card">
                    <div class="sm-roi-grid">
                        <!-- Left: Sliders -->
                        <div class="sm-roi-controls">
                            <!-- Slider 1: Monthly Billings -->
                            <div class="sm-roi-group">
                                <div class="sm-roi-label-row">
                                    <span class="sm-roi-label"><?php esc_html_e( 'Current Monthly Practice Billings', 'stellemed-addon' ); ?></span>
                                    <span class="sm-roi-val sm-roi-billing-display">$120,000 / mo</span>
                                </div>
                                <input
                                    type="range"
                                    min="30000"
                                    max="1000000"
                                    step="10000"
                                    value="120000"
                                    class="sm-roi-slider sm-roi-billing-slider"
                                />
                                <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:#A3B9CC;">
                                    <span>$30k/mo</span>
                                    <span>$500k/mo</span>
                                    <span>$1M+/mo</span>
                                </div>
                            </div>

                            <!-- Selector: Medical Specialty -->
                            <div class="sm-roi-group">
                                <label class="sm-roi-label"><?php esc_html_e( 'Primary Medical Specialty', 'stellemed-addon' ); ?></label>
                                <select class="sm-roi-select sm-roi-specialty-select">
                                    <option value="internal-medicine"><?php esc_html_e( 'Internal Medicine / Primary Care', 'stellemed-addon' ); ?></option>
                                    <option value="cardiology"><?php esc_html_e( 'Cardiology', 'stellemed-addon' ); ?></option>
                                    <option value="orthopedics"><?php esc_html_e( 'Orthopedics & Sports Medicine', 'stellemed-addon' ); ?></option>
                                    <option value="pediatrics"><?php esc_html_e( 'Pediatrics', 'stellemed-addon' ); ?></option>
                                    <option value="mental-health"><?php esc_html_e( 'Behavioral & Mental Health', 'stellemed-addon' ); ?></option>
                                    <option value="surgery"><?php esc_html_e( 'General Surgery / ASC', 'stellemed-addon' ); ?></option>
                                    <option value="dermatology"><?php esc_html_e( 'Dermatology', 'stellemed-addon' ); ?></option>
                                    <option value="multi-specialty"><?php esc_html_e( 'Multi-Specialty Clinic', 'stellemed-addon' ); ?></option>
                                </select>
                            </div>

                            <!-- Slider 2: Number of Providers -->
                            <div class="sm-roi-group">
                                <div class="sm-roi-label-row">
                                    <span class="sm-roi-label"><?php esc_html_e( 'Number of Billing Providers', 'stellemed-addon' ); ?></span>
                                    <span class="sm-roi-val sm-roi-provider-display">3 Providers</span>
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="25"
                                    step="1"
                                    value="3"
                                    class="sm-roi-slider sm-roi-provider-slider"
                                />
                            </div>
                        </div>

                        <!-- Right: Calculated Results Box -->
                        <div class="sm-roi-results">
                            <div>
                                <span class="sm-roi-highlight-title"><?php esc_html_e( 'Estimated Annual Revenue Recaptured', 'stellemed-addon' ); ?></span>
                                <div class="sm-roi-amount">$259,200</div>
                                <div style="font-size:0.8125rem; color:#EAF8F8; margin-top:4px;">
                                    *<?php esc_html_e( 'Based on average 18% - 22% denial recovery & underpayment audits', 'stellemed-addon' ); ?>
                                </div>
                            </div>

                            <div class="sm-roi-metrics-row">
                                <div>
                                    <span class="sm-roi-metric-label"><?php esc_html_e( 'A/R Days Reduction', 'stellemed-addon' ); ?></span>
                                    <div class="sm-roi-metric-num sm-roi-ar-days">52d &rarr; <span style="color:#38D4D8;">26 days</span></div>
                                </div>
                                <div>
                                    <span class="sm-roi-metric-label"><?php esc_html_e( 'Target Clean Claims', 'stellemed-addon' ); ?></span>
                                    <div class="sm-roi-metric-num" style="color:#38D4D8;">98.5%</div>
                                </div>
                            </div>

                            <div style="display:flex; flex-direction:column; gap:8px; font-size:0.8125rem; color:#D2E3EF;">
                                <div>&#10003; <?php esc_html_e( 'Elimination of payer denial backlogs', 'stellemed-addon' ); ?></div>
                                <div>&#10003; <?php esc_html_e( 'Real-time EHR clearinghouse claim validation', 'stellemed-addon' ); ?></div>
                            </div>

                            <?php if ( ! empty( $settings['btn_text'] ) ) : ?>
                                <a href="<?php echo esc_url( $settings['btn_link']['url'] ); ?>" class="sm-btn sm-btn-primary" style="width:100%; box-sizing:border-box;">
                                    <span><?php echo esc_html( $settings['btn_text'] ); ?></span>
                                    <span>&rarr;</span>
                                </a>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php
    }
}
