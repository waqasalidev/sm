<?php
if ( ! defined( 'ABSPATH' ) ) exit;

class SM_Hero_Widget extends \Elementor\Widget_Base {

    public function get_name() {
        return 'sm_hero';
    }

    public function get_title() {
        return esc_html__( 'StelleMed Hero Section', 'stellemed-addon' );
    }

    public function get_icon() {
        return 'eicon-banner';
    }

    public function get_categories() {
        return [ 'stellemed-category' ];
    }

    protected function register_controls() {
        $this->start_controls_section(
            'section_content',
            [
                'label' => esc_html__( 'Hero Content', 'stellemed-addon' ),
                'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'eyebrow',
            [
                'label'   => esc_html__( 'Eyebrow', 'stellemed-addon' ),
                'type'    => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'Keep Your Revenue\'s Heartbeat Strong', 'stellemed-addon' ),
            ]
        );

        $this->add_control(
            'title',
            [
                'label'   => esc_html__( 'Title', 'stellemed-addon' ),
                'type'    => \Elementor\Controls_Manager::TEXTAREA,
                'default' => esc_html__( 'Medical Billing & Revenue Cycle Management', 'stellemed-addon' ),
            ]
        );

        $this->add_control(
            'desc',
            [
                'label'   => esc_html__( 'Description', 'stellemed-addon' ),
                'type'    => \Elementor\Controls_Manager::TEXTAREA,
                'default' => esc_html__( 'StelleMed simplifies the revenue cycle for healthcare providers across the United States — from insurance claims to patient payments, so you can focus on patient care. One trusted partner for both billing and technology.', 'stellemed-addon' ),
            ]
        );

        $this->add_control(
            'btn1_text',
            [
                'label'   => esc_html__( 'Primary Button Text', 'stellemed-addon' ),
                'type'    => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'Let’s Find Your Missing Revenue', 'stellemed-addon' ),
            ]
        );

        $this->add_control(
            'btn2_text',
            [
                'label'   => esc_html__( 'Secondary Button Text', 'stellemed-addon' ),
                'type'    => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'Explore Our Services', 'stellemed-addon' ),
            ]
        );

        $this->add_control(
            'image',
            [
                'label'   => esc_html__( 'Hero Image', 'stellemed-addon' ),
                'type'    => \Elementor\Controls_Manager::MEDIA,
                'default' => [
                    'url' => 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
                ],
            ]
        );

        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        ?>
        <section class="sm-hero" id="home">
            <div class="sm-container">
                <div class="sm-hero-grid">
                    <div>
                        <?php if ( ! empty( $settings['eyebrow'] ) ) : ?>
                            <div class="sm-hero-eyebrow">
                                <span>&#9829; <?php echo esc_html( $settings['eyebrow'] ); ?></span>
                            </div>
                        <?php endif; ?>

                        <h1 class="sm-hero-title">
                            <?php echo wp_kses_post( nl2br( $settings['title'] ) ); ?>
                        </h1>

                        <p class="sm-hero-desc">
                            <?php echo esc_html( $settings['desc'] ); ?>
                        </p>

                        <div style="display:inline-flex; align-items:center; gap:8px; padding:6px 14px; background:rgba(23,154,158,0.1); border-radius:20px; color:#127A7D; font-size:0.8125rem; font-weight:600; margin-bottom:24px;">
                            <span>&#128737; <?php esc_html_e( 'Backed by Corvit & StelleCloud (25+ years of tech experience)', 'stellemed-addon' ); ?></span>
                        </div>

                        <div class="sm-hero-btns">
                            <?php if ( ! empty( $settings['btn1_text'] ) ) : ?>
                                <button type="button" class="sm-btn sm-btn-primary" data-open-modal="consultation">
                                    <span><?php echo esc_html( $settings['btn1_text'] ); ?></span>
                                    <span>&rarr;</span>
                                </button>
                            <?php endif; ?>

                            <?php if ( ! empty( $settings['btn2_text'] ) ) : ?>
                                <a href="#services" class="sm-btn sm-btn-secondary">
                                    <span><?php echo esc_html( $settings['btn2_text'] ); ?></span>
                                </a>
                            <?php endif; ?>
                        </div>

                        <div class="sm-hero-trust">
                            <div class="sm-hero-trust-item">
                                <span class="sm-hero-trust-val"><?php esc_html_e( 'Instant Verifications', 'stellemed-addon' ); ?></span>
                                <span class="sm-hero-trust-sub"><?php esc_html_e( 'Within seconds', 'stellemed-addon' ); ?></span>
                            </div>
                            <div class="sm-hero-trust-item">
                                <span class="sm-hero-trust-val"><?php esc_html_e( 'Rapid Claim Dispatch', 'stellemed-addon' ); ?></span>
                                <span class="sm-hero-trust-sub"><?php esc_html_e( 'Within 24–48 hours', 'stellemed-addon' ); ?></span>
                            </div>
                            <div class="sm-hero-trust-item">
                                <span class="sm-hero-trust-val"><?php esc_html_e( 'Same-Day Posting', 'stellemed-addon' ); ?></span>
                                <span class="sm-hero-trust-sub"><?php esc_html_e( 'Accurate ERA reconciliation', 'stellemed-addon' ); ?></span>
                            </div>
                        </div>
                    </div>

                    <div class="sm-hero-visual">
                        <img src="<?php echo esc_url( $settings['image']['url'] ); ?>" alt="Healthcare Physician" class="sm-hero-img"/>
                        <div class="sm-hero-float-card">
                            <div style="font-size:1.6rem; color:#179A9E;">&#127891;</div>
                            <div>
                                <div style="font-weight:800; color:#102C40; font-size:1.05rem;">98.2% Clean Claim Rate</div>
                                <span style="font-size:0.75rem; color:#738A9E;">Backed by Corvit &amp; StelleCloud</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <?php
    }
}
