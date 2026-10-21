<?php
if ( ! defined( 'ABSPATH' ) ) exit;

class SM_Revenue_Leaks_Widget extends \Elementor\Widget_Base {

    public function get_name() {
        return 'sm_revenue_leaks';
    }

    public function get_title() {
        return esc_html__( 'StelleMed Revenue Leaks', 'stellemed-addon' );
    }

    public function get_icon() {
        return 'eicon-alert';
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
                'default' => esc_html__( 'Revenue Leak Prevention', 'stellemed-addon' ),
            ]
        );

        $this->add_control(
            'title',
            [
                'label'   => esc_html__( 'Title', 'stellemed-addon' ),
                'type'    => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'Where Practices Lose Money', 'stellemed-addon' ),
            ]
        );

        $this->add_control(
            'subtitle',
            [
                'label'   => esc_html__( 'Subtitle', 'stellemed-addon' ),
                'type'    => \Elementor\Controls_Manager::TEXTAREA,
                'default' => esc_html__( 'Revenue leaks happen at many points across the care cycle. StelleMed checks for every one of these, so no revenue is left behind.', 'stellemed-addon' ),
            ]
        );

        $this->add_control(
            'cta_text',
            [
                'label'   => esc_html__( 'CTA Button Text', 'stellemed-addon' ),
                'type'    => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'Let’s Find Your Missing Revenue', 'stellemed-addon' ),
            ]
        );

        $this->add_control(
            'cta_link',
            [
                'label'   => esc_html__( 'CTA Link', 'stellemed-addon' ),
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

        $leaks = [
            [ 'title' => 'Unbilled Visits', 'desc' => 'Patient encounters that take place but are never coded, billed, or submitted, leading to silent, permanent revenue loss.' ],
            [ 'title' => 'Denials Not Appealed', 'desc' => 'Legitimate clinical claims rejected by payers that staff simply write off instead of preparing clinical appeals.' ],
            [ 'title' => 'Underpayments', 'desc' => 'Insurers reimbursing below contracted fee schedule rates without being audited or challenged by the practice.' ],
            [ 'title' => 'Patient Balances Unpaid', 'desc' => 'High deductibles and co-pays left uncollected due to lack of upfront estimates and convenient digital payment options.' ],
            [ 'title' => 'Missed Filing Deadlines', 'desc' => 'Claims delayed past payer timely filing limits, resulting in unappealable, total forfeiture of reimbursement.' ],
            [ 'title' => 'Payments Not Posted', 'desc' => 'Checks and ERAs sitting unposted, distorting financial balances and preventing accurate secondary billing.' ],
            [ 'title' => 'Claims Rejected', 'desc' => 'Clearinghouse front-end format and demographic rejections that stall before reaching the payer adjudicator.' ],
            [ 'title' => 'No Response on Claims', 'desc' => 'Claims lost in payer black holes where no follow-up is initiated, allowing carrier statutory hold periods to lapse.' ],
        ];
        ?>
        <div class="sm-section" id="revenue-leaks" style="padding: 60px 0; background-color: var(--sm-bg-page);">
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

                <div class="sm-leaks-grid">
                    <?php foreach ( $leaks as $idx => $leak ) : ?>
                        <div class="sm-leak-card">
                            <div class="sm-leak-header">
                                <span class="sm-leak-badge"><?php echo ( $idx + 1 ); ?></span>
                                <h3 class="sm-leak-title"><?php echo esc_html( $leak['title'] ); ?></h3>
                            </div>
                            <p class="sm-leak-desc"><?php echo esc_html( $leak['desc'] ); ?></p>
                        </div>
                    <?php endforeach; ?>
                </div>

                <div class="sm-leaks-banner">
                    <div style="max-width: 640px;">
                        <div style="color: var(--sm-teal-accent); font-weight: 700; font-size: 0.9rem; margin-bottom: 6px;">
                            &#128737; <?php esc_html_e( 'Full-Spectrum Financial Protection', 'stellemed-addon' ); ?>
                        </div>
                        <div style="font-size: 1.15rem; font-weight: 600; color: #FFFFFF; line-height: 1.4;">
                            <?php esc_html_e( 'StelleMed checks for every one of these 8 points, so no revenue is left behind.', 'stellemed-addon' ); ?>
                        </div>
                    </div>

                    <?php if ( ! empty( $settings['cta_text'] ) ) : ?>
                        <a href="<?php echo esc_url( $settings['cta_link']['url'] ); ?>" class="sm-btn sm-btn-primary">
                            <span><?php echo esc_html( $settings['cta_text'] ); ?></span>
                            <span>&rarr;</span>
                        </a>
                    <?php endif; ?>
                </div>
            </div>
        </div>
        <?php
    }
}
