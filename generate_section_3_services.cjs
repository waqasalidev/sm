const fs = require('fs');
const path = require('path');

function createId() {
  return Math.random().toString(36).substring(2, 9);
}

const servicesData = [
  {
    id: 'insurance-payer',
    badge: 'Core Insurance Engine',
    badgeBg: '#E6F7F7',
    badgeColor: '#179A9E',
    icon: 'fas fa-file-invoice-dollar',
    iconBg: '#E8F6F7',
    iconColor: '#179A9E',
    title: 'Insurance & Payer Services',
    desc: 'End-to-end payer management, insurance eligibility verifications, coding audits, credentialing, and fast-track claim submission with aggressive denial appeals.',
    features: [
      'Insurance Eligibility Verification',
      'Provider Credentialing & Contracting',
      'Electronic Claim Scrubbing & 837 Dispatch',
      'Denials Management & Clinical Appeals'
    ],
    buttonText: 'Explore Insurance Services',
    buttonLink: '/services/insurance-payer'
  },
  {
    id: 'patient-practice',
    badge: 'Front-to-Back Office',
    badgeBg: '#EFF6FF',
    badgeColor: '#2563EB',
    icon: 'fas fa-users',
    iconBg: '#EFF6FF',
    iconColor: '#2563EB',
    title: 'Patient & Practice Services',
    desc: 'Transparent patient billing, front-desk verification workflows, friendly self-pay recovery, flexible payment plans, and practice administrative support.',
    features: [
      'Patient Digital Statements & SMS',
      'Point-of-Service Intake Check-in',
      'Customizable Installment Payment Plans',
      'Patient Billing Support & Inquiries'
    ],
    buttonText: 'Explore Patient Services',
    buttonLink: '/services/patient-practice'
  },
  {
    id: 'technology-support',
    badge: 'Powered by StelleCloud™',
    badgeBg: '#F5F3FF',
    badgeColor: '#7C3AED',
    icon: 'fas fa-laptop-medical',
    iconBg: '#F5F3FF',
    iconColor: '#7C3AED',
    title: 'Technology & Support',
    desc: 'State-of-the-art healthcare technology, automated claim scrubbing engines, real-time executive financial dashboards, EHR integrations, and dedicated technical support.',
    features: [
      'Bi-directional EHR/PM API Integrations',
      'Automated Claim Scrubber Rules Engine',
      'Executive Financial KPI Analytics',
      'Dedicated Account Manager & IT Support'
    ],
    buttonText: 'Explore Tech & Support',
    buttonLink: '/services/technology-support'
  }
];

const serviceCardContainers = servicesData.map((svc) => {
  return {
    id: createId(),
    elType: "container",
    isInner: true,
    settings: {
      content_width: "full",
      width: {
        unit: "%",
        size: 31.8,
        sizes: []
      },
      width_tablet: {
        unit: "%",
        size: 100,
        sizes: []
      },
      width_mobile: {
        unit: "%",
        size: 100,
        sizes: []
      },
      flex_direction: "column",
      flex_align_items: "stretch",
      flex_gap: {
        unit: "px",
        size: 0,
        column: "0",
        row: "0"
      },
      background_background: "classic",
      background_color: "#FFFFFF",
      border_border: "solid",
      border_width: {
        unit: "px",
        top: "1",
        right: "1",
        bottom: "1",
        left: "1",
        isLinked: true
      },
      border_color: "#E2E8F0",
      border_radius: {
        unit: "px",
        top: "20",
        right: "20",
        bottom: "20",
        left: "20",
        isLinked: true
      },
      box_shadow_box_shadow_type: "yes",
      box_shadow_box_shadow: {
        horizontal: 0,
        vertical: 10,
        blur: 30,
        spread: -5,
        color: "rgba(12, 35, 64, 0.05)"
      },
      padding: {
        unit: "px",
        top: "32",
        right: "28",
        bottom: "32",
        left: "28",
        isLinked: true
      },
      padding_mobile: {
        unit: "px",
        top: "24",
        right: "20",
        bottom: "24",
        left: "20",
        isLinked: true
      }
    },
    elements: [
      // Top row: Icon on left, Badge on right
      {
        id: createId(),
        elType: "container",
        isInner: true,
        settings: {
          content_width: "full",
          flex_direction: "row",
          flex_justify_content: "space-between",
          flex_align_items: "center",
          margin: {
            unit: "px",
            top: "0",
            right: "0",
            bottom: "20",
            left: "0",
            isLinked: false
          }
        },
        elements: [
          // Icon Container
          {
            id: createId(),
            elType: "container",
            isInner: true,
            settings: {
              content_width: "full",
              width: {
                unit: "px",
                size: 54,
                sizes: []
              },
              min_height: {
                unit: "px",
                size: 54
              },
              background_background: "classic",
              background_color: svc.iconBg,
              border_radius: {
                unit: "px",
                top: "14",
                right: "14",
                bottom: "14",
                left: "14",
                isLinked: true
              },
              flex_direction: "column",
              flex_justify_content: "center",
              flex_align_items: "center"
            },
            elements: [
              {
                id: createId(),
                elType: "widget",
                widgetType: "icon",
                settings: {
                  selected_icon: {
                    value: svc.icon,
                    library: "fa-solid"
                  },
                  view: "default",
                  align: "center",
                  primary_color: svc.iconColor,
                  size: {
                    unit: "px",
                    size: 24
                  }
                }
              }
            ]
          },
          // Badge Heading
          {
            id: createId(),
            elType: "widget",
            widgetType: "heading",
            settings: {
              title: `<span style="display:inline-block;padding:5px 12px;background-color:${svc.badgeBg};border:1px solid ${svc.iconColor}33;border-radius:50px;color:${svc.badgeColor};font-size:11px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase;">${svc.badge}</span>`,
              header_size: "span",
              align: "right",
              title_color: svc.badgeColor,
              margin: {
                unit: "px",
                top: "0",
                right: "0",
                bottom: "0",
                left: "0",
                isLinked: true
              }
            }
          }
        ]
      },
      // Title
      {
        id: createId(),
        elType: "widget",
        widgetType: "heading",
        settings: {
          title: svc.title,
          header_size: "h3",
          title_color: "#0C2340",
          typography_typography: "custom",
          typography_font_family: "Plus Jakarta Sans",
          typography_font_size: {
            unit: "px",
            size: 22
          },
          typography_font_weight: "800",
          typography_line_height: {
            unit: "em",
            size: 1.25
          },
          margin: {
            unit: "px",
            top: "0",
            right: "0",
            bottom: "12",
            left: "0",
            isLinked: false
          }
        }
      },
      // Description
      {
        id: createId(),
        elType: "widget",
        widgetType: "text-editor",
        settings: {
          editor: `<p style="margin:0;font-size:14px;color:#4A5568;line-height:1.6;">${svc.desc}</p>`,
          typography_typography: "custom",
          typography_font_family: "Plus Jakarta Sans",
          typography_font_size: {
            unit: "px",
            size: 14
          },
          typography_font_weight: "400",
          text_color: "#4A5568",
          margin: {
            unit: "px",
            top: "0",
            right: "0",
            bottom: "20",
            left: "0",
            isLinked: false
          }
        }
      },
      // Feature List
      {
        id: createId(),
        elType: "widget",
        widgetType: "icon-list",
        settings: {
          icon_list: svc.features.map(f => ({
            text: f,
            selected_icon: {
              value: "fas fa-check-circle",
              library: "fa-solid"
            }
          })),
          icon_color: "#179A9E",
          icon_size: {
            unit: "px",
            size: 14
          },
          space_between: {
            unit: "px",
            size: 10
          },
          text_color: "#1E293B",
          typography_typography: "custom",
          typography_font_family: "Plus Jakarta Sans",
          typography_font_size: {
            unit: "px",
            size: 13.5
          },
          typography_font_weight: "600",
          margin: {
            unit: "px",
            top: "0",
            right: "0",
            bottom: "24",
            left: "0",
            isLinked: false
          }
        }
      },
      // CTA Button
      {
        id: createId(),
        elType: "widget",
        widgetType: "button",
        settings: {
          text: svc.buttonText,
          link: {
            url: svc.buttonLink,
            is_external: false,
            nofollow: false
          },
          align: "justify",
          button_type: "default",
          selected_icon: {
            value: "fas fa-arrow-right",
            library: "fa-solid"
          },
          icon_align: "right",
          icon_indent: {
            unit: "px",
            size: 8
          },
          background_color: "#F1F5F9",
          button_text_color: "#0C2340",
          background_hover_color: "#179A9E",
          hover_color: "#FFFFFF",
          border_border: "solid",
          border_width: {
            unit: "px",
            top: "1",
            right: "1",
            bottom: "1",
            left: "1",
            isLinked: true
          },
          border_color: "#CBD5E1",
          border_hover_color: "#179A9E",
          border_radius: {
            unit: "px",
            top: "12",
            right: "12",
            bottom: "12",
            left: "12",
            isLinked: true
          },
          padding: {
            unit: "px",
            top: "12",
            right: "18",
            bottom: "12",
            left: "18",
            isLinked: false
          },
          typography_typography: "custom",
          typography_font_family: "Plus Jakarta Sans",
          typography_font_size: {
            unit: "px",
            size: 13.5
          },
          typography_font_weight: "700"
        }
      }
    ]
  };
});

// Root Container for Section 3
const servicesSection = {
  version: "0.4",
  title: "Comprehensive Healthcare Billing Solutions - 3 Core Pillars (100% Flexbox Container)",
  type: "container",
  content: [
    {
      id: createId(),
      elType: "container",
      isInner: false,
      settings: {
        content_width: "boxed",
        boxed_width: {
          unit: "px",
          size: 1220,
          sizes: []
        },
        flex_direction: "column",
        flex_align_items: "center",
        flex_gap: {
          unit: "px",
          size: 0,
          column: "0",
          row: "0"
        },
        background_background: "classic",
        background_color: "#F8FBFC",
        padding: {
          unit: "px",
          top: "80",
          right: "20",
          bottom: "80",
          left: "20",
          isLinked: false
        },
        padding_tablet: {
          unit: "px",
          top: "60",
          right: "20",
          bottom: "60",
          left: "20",
          isLinked: false
        },
        padding_mobile: {
          unit: "px",
          top: "40",
          right: "16",
          bottom: "40",
          left: "16",
          isLinked: false
        }
      },
      elements: [
        // Section Header Container
        {
          id: createId(),
          elType: "container",
          isInner: true,
          settings: {
            content_width: "full",
            width: {
              unit: "px",
              size: 800,
              sizes: []
            },
            width_tablet: {
              unit: "%",
              size: 100,
              sizes: []
            },
            width_mobile: {
              unit: "%",
              size: 100,
              sizes: []
            },
            flex_direction: "column",
            flex_align_items: "center",
            margin: {
              unit: "px",
              top: "0",
              right: "auto",
              bottom: "48",
              left: "auto",
              isLinked: false
            }
          },
          elements: [
            // Eyebrow badge
            {
              id: createId(),
              elType: "widget",
              widgetType: "heading",
              settings: {
                title: `<span style="display:inline-flex;align-items:center;gap:6px;padding:6px 16px;background-color:#EAF8F8;border:1px solid #A7E8E9;border-radius:50px;color:#179A9E;font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;"><i class=\"fas fa-stethoscope\" style=\"font-size:13px;\"></i> HEALTHCARE BILLING EXPERTISE</span>`,
                header_size: "span",
                align: "center",
                title_color: "#179A9E",
                margin: {
                  unit: "px",
                  top: "0",
                  right: "0",
                  bottom: "16",
                  left: "0",
                  isLinked: false
                }
              }
            },
            // Title
            {
              id: createId(),
              elType: "widget",
              widgetType: "heading",
              settings: {
                title: "Comprehensive Healthcare <span style=\"color:#179A9E;\">Billing Solutions</span>",
                header_size: "h2",
                align: "center",
                title_color: "#0C2340",
                typography_typography: "custom",
                typography_font_family: "Plus Jakarta Sans",
                typography_font_size: {
                  unit: "px",
                  size: 40
                },
                typography_font_size_tablet: {
                  unit: "px",
                  size: 32
                },
                typography_font_size_mobile: {
                  unit: "px",
                  size: 28
                },
                typography_font_weight: "800",
                typography_line_height: {
                  unit: "em",
                  size: 1.2
                },
                typography_letter_spacing: {
                  unit: "px",
                  size: -0.5
                },
                margin: {
                  unit: "px",
                  top: "0",
                  right: "0",
                  bottom: "14",
                  left: "0",
                  isLinked: false
                }
              }
            },
            // Subtitle
            {
              id: createId(),
              elType: "widget",
              widgetType: "text-editor",
              settings: {
                editor: "<p style=\"margin:0;font-size:16px;color:#4A5568;line-height:1.6;text-align:center;\">We deliver the full spectrum of revenue cycle management — combining certified billing specialists, payer relationships, and modern software to maximize your practice’s financial health.</p>",
                typography_typography: "custom",
                typography_font_family: "Plus Jakarta Sans",
                typography_font_size: {
                  unit: "px",
                  size: 16
                },
                typography_font_weight: "400",
                text_color: "#4A5568"
              }
            }
          ]
        },
        // Cards Grid Container (Row of 3 cards)
        {
          id: createId(),
          elType: "container",
          isInner: true,
          settings: {
            content_width: "full",
            flex_direction: "row",
            flex_direction_tablet: "column",
            flex_direction_mobile: "column",
            flex_wrap: "wrap",
            flex_justify_content: "space-between",
            flex_align_items: "stretch",
            flex_gap: {
              unit: "px",
              size: 24,
              column: "24",
              row: "24"
            },
            margin: {
              unit: "px",
              top: "0",
              right: "0",
              bottom: "44",
              left: "0",
              isLinked: false
            }
          },
          elements: serviceCardContainers
        },
        // Bottom CTA Button Container
        {
          id: createId(),
          elType: "container",
          isInner: true,
          settings: {
            content_width: "full",
            flex_direction: "row",
            flex_justify_content: "center",
            flex_align_items: "center"
          },
          elements: [
            {
              id: createId(),
              elType: "widget",
              widgetType: "button",
              settings: {
                text: "View All Services & Specializations",
                link: {
                  url: "/services",
                  is_external: false,
                  nofollow: false
                },
                align: "center",
                button_type: "default",
                selected_icon: {
                  value: "fas fa-arrow-right",
                  library: "fa-solid"
                },
                icon_align: "right",
                icon_indent: {
                  unit: "px",
                  size: 10
                },
                background_color: "#FFFFFF",
                button_text_color: "#0C2340",
                background_hover_color: "#179A9E",
                hover_color: "#FFFFFF",
                border_border: "solid",
                border_width: {
                  unit: "px",
                  top: "2",
                  right: "2",
                  bottom: "2",
                  left: "2",
                  isLinked: true
                },
                border_color: "#179A9E",
                border_hover_color: "#179A9E",
                border_radius: {
                  unit: "px",
                  top: "14",
                  right: "14",
                  bottom: "14",
                  left: "14",
                  isLinked: true
                },
                box_shadow_box_shadow_type: "yes",
                box_shadow_box_shadow: {
                  horizontal: 0,
                  vertical: 6,
                  blur: 16,
                  spread: 0,
                  color: "rgba(23, 154, 158, 0.15)"
                },
                padding: {
                  unit: "px",
                  top: "16",
                  right: "32",
                  bottom: "16",
                  left: "32",
                  isLinked: false
                },
                typography_typography: "custom",
                typography_font_family: "Plus Jakarta Sans",
                typography_font_size: {
                  unit: "px",
                  size: 15
                },
                typography_font_weight: "700"
              }
            }
          ]
        }
      ]
    }
  ]
};

const outDir = path.join(__dirname, 'elementor-editable-templates');
fs.writeFileSync(
  path.join(outDir, 'core-services-pillars-elementor.json'),
  JSON.stringify(servicesSection, null, 2),
  'utf8'
);

fs.writeFileSync(
  path.join(outDir, 'core-services-pillars-plain-text.json'),
  JSON.stringify(servicesSection),
  'utf8'
);

console.log('Successfully generated Section 3 (Core Service Pillars) with 100% Flexbox Containers!');
