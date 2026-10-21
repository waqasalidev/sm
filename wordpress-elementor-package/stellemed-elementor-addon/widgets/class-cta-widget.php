<?php
if ( ! defined( 'ABSPATH' ) ) exit;

class SM_CTA_Widget extends \Elementor\Widget_Base {

    public function get_name() {
        return 'sm_cta';
    }

    public function get_title() {
        return esc_html__( 'StelleMed Final CTA Banner', 'stellemed-addon' );
    }

    public function get_icon() {
        return 'eicon-call-to-action';
    }

    public function get_categories() {
        return [ 'stellemed-category' ];
    }

    protected function register_controls() {
        $this->start_controls_section(
            'section_content',
            [
                'label' => esc_html__( 'Banner Content', 'stellemed-addon' ),
                'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'title',
            [
                'label'   => esc_html__( 'Title', 'stellemed-addon' ),
                'type'    => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'Ready to Elevate Your Practice Revenue?', 'stellemed-addon' ),
            ]
        );

        $this->add_control(
            'subtitle',
            [
                'label'   => esc_html__( 'Subtitle', 'stellemed-addon' ),
                'type'    => \Elementor\Controls_Manager::TEXTAREA,
                'default' => esc_html__( 'Discover how much revenue your practice is currently leaving on the table. Request a complimentary, zero-obligation billing audit today.', 'stellemed-addon' ),
            ]
        );

        $this->add_control(
            'btn1_text',
            [
                'label'   => esc_html__( 'Primary Button Text', 'stellemed-addon' ),
                'type'    => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'Request Free Practice Audit', 'stellemed-addon' ),
            ]
        );

        $this->add_control(
            'btn1_link',
            [
                'label'   => esc_html__( 'Primary Button Link', 'stellemed-addon' ),
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
        <div style="background: linear-gradient(135deg, #102C40 0%, #179A9E 100%); padding: 70px 24px; border-radius: var(--sm-radius-xl); color: #FFFFFF; text-align: center; margin: 40px 0;">
            <div class="sm-container" style="max-width: 780px;">
                <h2 style="font-size: clamp(2rem, 3.5vw, 2.7rem); font-weight: 800; color: #FFFFFF; margin: 0 0 16px 0; line-height: 1.2;">
                    <?php echo esc_html( $settings['title'] ); ?>
                </h2>
                <p style="font-size: 1.1rem; color: #EAF8F8; line-height: 1.6; margin: 0 0 32px 0;">
                    <?php echo esc_html( $settings['subtitle'] ); ?>
                </p>
                <div style="display: flex; justify-content: center; gap: 16px; flex-wrap: wrap;">
                    <?php if ( ! empty( $settings['btn1_text'] ) ) : ?>
                        <a href="<?php echo esc_url( $settings['btn1_link']['url'] ); ?>" class="sm-btn" style="background: #FFFFFF; color: #102C40 !important; font-weight: 800; padding: 14px 32px;">
                            <span><?php echo esc_html( $settings['btn1_text'] ); ?></span>
                            <span>&rarr;</span>
                        </a>
                    <?php endif; ?>
                </div>
            </div>
        </div>
        <?php
    }
}
