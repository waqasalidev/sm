<?php
if ( ! defined( 'ABSPATH' ) ) exit;

class SM_Why_Us_Widget extends \Elementor\Widget_Base {

    public function get_name() {
        return 'sm_why_us';
    }

    public function get_title() {
        return esc_html__( 'StelleMed Why Choose Us', 'stellemed-addon' );
    }

    public function get_icon() {
        return 'eicon-star-o';
    }

    public function get_categories() {
        return [ 'stellemed-category' ];
    }

    protected function register_controls() {
        $this->start_controls_section(
            'section_content',
            [
                'label' => esc_html__( 'Header Content', 'stellemed-addon' ),
                'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'eyebrow',
            [
                'label'   => esc_html__( 'Eyebrow', 'stellemed-addon' ),
                'type'    => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'The StelleMed Advantage', 'stellemed-addon' ),
            ]
        );

        $this->add_control(
            'title',
            [
                'label'   => esc_html__( 'Title', 'stellemed-addon' ),
                'type'    => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'Your Trusted Partner in Medical Billing', 'stellemed-addon' ),
            ]
        );

        $this->add_control(
            'subtitle',
            [
                'label'   => esc_html__( 'Subtitle', 'stellemed-addon' ),
                'type'    => \Elementor\Controls_Manager::TEXTAREA,
                'default' => esc_html__( 'We bridge clinical dedication with financial excellence. Here is why independent physicians, surgical centers, and multi-specialty clinics choose StelleMed.', 'stellemed-addon' ),
            ]
        );

        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();

        $features = [
            [
                'icon'  => '&#127891;',
                'title' => 'Industry Expertise',
                'desc'  => 'Certified AAPC & AHIMA billing specialists who master the nuances of CPT, ICD-10, and modifier guidelines for your clinical specialty.',
            ],
            [
                'icon'  => '&#128100;',
                'title' => 'Dedicated Support',
                'desc'  => 'One assigned account manager who knows your practice inside and out. Direct phone and email access — zero frustrating ticket queues.',
            ],
            [
                'icon'  => '&#128737;',
                'title' => 'Advanced Technology',
                'desc'  => 'Powered by StelleCloud™: automated claim scrubbers, 256-bit HIPAA compliance, seamless EHR synchronization, and 24/7 client portal access.',
            ],
            [
                'icon'  => '&#128202;',
                'title' => 'Transparent Reporting',
                'desc'  => 'Comprehensive monthly financial dashboards and quarterly performance reviews. Track every billed dollar, denial reason, and recovery milestone.',
            ],
        ];
        ?>
        <div class="sm-why-section" id="why-us">
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

                <div class="sm-why-grid">
                    <?php foreach ( $features as $feat ) : ?>
                        <div class="sm-why-card">
                            <div class="sm-why-icon"><?php echo $feat['icon']; ?></div>
                            <h3 class="sm-why-card-title"><?php echo esc_html( $feat['title'] ); ?></h3>
                            <p class="sm-why-card-desc"><?php echo esc_html( $feat['desc'] ); ?></p>
                        </div>
                    <?php endforeach; ?>
                </div>

                <div style="margin-top: 48px; background: rgba(23, 154, 158, 0.12); border: 1px solid rgba(56, 212, 216, 0.25); border-radius: var(--sm-radius-lg); padding: 22px 28px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
                    <div>
                        <h4 style="color: #FFFFFF; font-size: 1.05rem; margin: 0 0 4px 0;">Zero Risk, No Long-Term Contracts</h4>
                        <p style="color: #A3B9CC; font-size: 0.875rem; margin: 0;">Start with a simple month-to-month agreement. If we don’t elevate your collections, you’re never locked in.</p>
                    </div>
                    <a href="#contact" class="sm-btn sm-btn-primary">
                        <span>Request Practice Audit</span>
                        <span>&rarr;</span>
                    </a>
                </div>
            </div>
        </div>
        <?php
    }
}
