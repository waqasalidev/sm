<?php
if ( ! defined( 'ABSPATH' ) ) exit;

class SM_Statistics_Widget extends \Elementor\Widget_Base {

    public function get_name() {
        return 'sm_statistics';
    }

    public function get_title() {
        return esc_html__( 'StelleMed Performance Stats', 'stellemed-addon' );
    }

    public function get_icon() {
        return 'eicon-counter';
    }

    public function get_categories() {
        return [ 'stellemed-category' ];
    }

    protected function register_controls() {
        $this->start_controls_section(
            'section_stats',
            [
                'label' => esc_html__( 'Statistics Counters', 'stellemed-addon' ),
                'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'stat1_num',
            [ 'label' => esc_html__( 'Stat 1 Number', 'stellemed-addon' ), 'type' => \Elementor\Controls_Manager::TEXT, 'default' => '98%' ]
        );
        $this->add_control(
            'stat1_lbl',
            [ 'label' => esc_html__( 'Stat 1 Label', 'stellemed-addon' ), 'type' => \Elementor\Controls_Manager::TEXT, 'default' => 'Clean Claim Rate' ]
        );

        $this->add_control(
            'stat2_num',
            [ 'label' => esc_html__( 'Stat 2 Number', 'stellemed-addon' ), 'type' => \Elementor\Controls_Manager::TEXT, 'default' => '50+' ]
        );
        $this->add_control(
            'stat2_lbl',
            [ 'label' => esc_html__( 'Stat 2 Label', 'stellemed-addon' ), 'type' => \Elementor\Controls_Manager::TEXT, 'default' => 'Payer Partners' ]
        );

        $this->add_control(
            'stat3_num',
            [ 'label' => esc_html__( 'Stat 3 Number', 'stellemed-addon' ), 'type' => \Elementor\Controls_Manager::TEXT, 'default' => '1,000+' ]
        );
        $this->add_control(
            'stat3_lbl',
            [ 'label' => esc_html__( 'Stat 3 Label', 'stellemed-addon' ), 'type' => \Elementor\Controls_Manager::TEXT, 'default' => 'Healthcare Providers' ]
        );

        $this->add_control(
            'stat4_num',
            [ 'label' => esc_html__( 'Stat 4 Number', 'stellemed-addon' ), 'type' => \Elementor\Controls_Manager::TEXT, 'default' => '99%' ]
        );
        $this->add_control(
            'stat4_lbl',
            [ 'label' => esc_html__( 'Stat 4 Label', 'stellemed-addon' ), 'type' => \Elementor\Controls_Manager::TEXT, 'default' => 'Client Retention' ]
        );

        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        ?>
        <section class="sm-stats-bar">
            <div class="sm-container sm-stats-grid">
                <div>
                    <div class="sm-stat-num"><?php echo esc_html( $settings['stat1_num'] ); ?></div>
                    <div class="sm-stat-lbl"><?php echo esc_html( $settings['stat1_lbl'] ); ?></div>
                    <div class="sm-stat-sub">First-pass acceptance rate</div>
                </div>
                <div>
                    <div class="sm-stat-num"><?php echo esc_html( $settings['stat2_num'] ); ?></div>
                    <div class="sm-stat-lbl"><?php echo esc_html( $settings['stat2_lbl'] ); ?></div>
                    <div class="sm-stat-sub">Direct clearinghouse ties</div>
                </div>
                <div>
                    <div class="sm-stat-num"><?php echo esc_html( $settings['stat3_num'] ); ?></div>
                    <div class="sm-stat-lbl"><?php echo esc_html( $settings['stat3_lbl'] ); ?></div>
                    <div class="sm-stat-sub">Across 30+ medical specialties</div>
                </div>
                <div>
                    <div class="sm-stat-num"><?php echo esc_html( $settings['stat4_num'] ); ?></div>
                    <div class="sm-stat-lbl"><?php echo esc_html( $settings['stat4_lbl'] ); ?></div>
                    <div class="sm-stat-sub">Provider trust &amp; satisfaction</div>
                </div>
            </div>
        </section>
        <?php
    }
}
