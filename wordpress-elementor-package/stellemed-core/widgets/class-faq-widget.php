<?php
if ( ! defined( 'ABSPATH' ) ) exit;

class SM_FAQ_Widget extends \Elementor\Widget_Base {

    public function get_name() {
        return 'sm_faq';
    }

    public function get_title() {
        return esc_html__( 'StelleMed FAQs Accordion', 'stellemed-addon' );
    }

    public function get_icon() {
        return 'eicon-help-o';
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
                'default' => esc_html__( 'Got Questions? We Have Answers', 'stellemed-addon' ),
            ]
        );

        $this->add_control(
            'title',
            [
                'label'   => esc_html__( 'Title', 'stellemed-addon' ),
                'type'    => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'Frequently Asked Questions', 'stellemed-addon' ),
            ]
        );

        $this->add_control(
            'subtitle',
            [
                'label'   => esc_html__( 'Subtitle', 'stellemed-addon' ),
                'type'    => \Elementor\Controls_Manager::TEXTAREA,
                'default' => esc_html__( 'Everything you need to know about our billing workflows, HIPAA security, EHR integrations, and pricing model.', 'stellemed-addon' ),
            ]
        );

        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();

        $faqs = [
            [
                'q' => 'What types of healthcare providers do you work with?',
                'a' => 'We partner with independent physician practices, ambulatory surgery centers (ASCs), urgent care clinics, mental and behavioral health practices, dental and oral surgery clinics, and multi-specialty medical groups across all 50 US states. Our certified billers adapt specifically to each clinical specialty’s coding requirements.',
            ],
            [
                'q' => 'How do you help reduce claim denials?',
                'a' => 'We deploy a rigorous multi-tier prevention protocol: 1) Real-time insurance eligibility checks prior to patient appointments, 2) Specialty-specific automated clearinghouse claim scrubbing rules, 3) Certified AAPC/AHIMA coder charge audits, and 4) Immediate clinical appeals with supporting documentation for any unexpected rejections within 24 to 48 hours.',
            ],
            [
                'q' => 'How do you maintain HIPAA compliance?',
                'a' => 'All client interactions and data exchange operate on StelleCloud™ infrastructure, featuring AES-256 bit encryption at rest and in transit, multi-factor authentication (MFA), role-based access restrictions, and 24/7 security auditing. We execute comprehensive Business Associate Agreements (BAAs) with every provider partner.',
            ],
            [
                'q' => 'What is the typical claims processing turnaround time?',
                'a' => 'Charges received from your clinical practice are reviewed, scrubbed, and electronically submitted within 24 to 48 hours of service. Average reimbursement cycles for clean electronic claims typically range from 12 to 18 days, depending on payer adjudication timelines.',
            ],
            [
                'q' => 'Do you require long-term contracts?',
                'a' => 'No. StelleMed believes our performance should earn your business every month. We operate primarily on flexible month-to-month service agreements with standard 30-day notice terms, so you never feel trapped in a rigid multi-year commitment.',
            ],
            [
                'q' => 'Do we need to switch our existing Electronic Health Record (EHR)?',
                'a' => 'Not at all. StelleMed connects directly with your existing EHR and Practice Management system (such as Athenahealth, Epic, eClinicalWorks, Kareo, AdvancedMD, NextGen, and others). Your clinical staff continues using the software they already know.',
            ],
        ];
        ?>
        <div class="sm-section" id="faq" style="padding: 60px 0; background-color: #FFFFFF;">
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

                <div class="sm-faq-list">
                    <?php foreach ( $faqs as $idx => $faq ) : ?>
                        <div class="sm-faq-item <?php echo ( $idx === 0 ) ? 'is-open' : ''; ?>">
                            <button type="button" class="sm-faq-btn">
                                <span><?php echo esc_html( $faq['q'] ); ?></span>
                                <span class="sm-faq-icon">&#9660;</span>
                            </button>
                            <div class="sm-faq-content">
                                <p><?php echo esc_html( $faq['a'] ); ?></p>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
        <?php
    }
}
