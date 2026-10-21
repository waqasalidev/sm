const fs = require('fs');
const path = require('path');

function createId() {
  return Math.random().toString(36).substring(2, 9);
}

const finalCTASection = {
  version: "0.4",
  title: "Let's Find Your Missing Revenue - Final Call to Action (100% Flexbox Container)",
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
        background_background: "gradient",
        background_color: "#081D30",
        background_color_b: "#051320",
        background_gradient_type: "radial",
        background_gradient_position: "center center",
        border_radius: {
          unit: "px",
          top: "24",
          right: "24",
          bottom: "24",
          left: "24",
          isLinked: true
        },
        padding: {
          unit: "px",
          top: "80",
          right: "30",
          bottom: "80",
          left: "30",
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
        },
        margin: {
          unit: "px",
          top: "40",
          right: "auto",
          bottom: "40",
          left: "auto",
          isLinked: false
        }
      },
      elements: [
        // Pill Eyebrow
        {
          id: createId(),
          elType: "widget",
          widgetType: "heading",
          settings: {
            title: `<span style="display:inline-flex;align-items:center;gap:6px;padding:6px 16px;background-color:rgba(56,212,216,0.12);border:1px solid rgba(56,212,216,0.35);border-radius:50px;color:#38D4D8;font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;"><i class=\"fas fa-sparkles\"></i> TAKE CONTROL OF YOUR REVENUE CYCLE</span>`,
            header_size: "span",
            align: "center",
            title_color: "#38D4D8",
            margin: {
              unit: "px",
              top: "0",
              right: "0",
              bottom: "18",
              left: "0",
              isLinked: false
            }
          }
        },
        // Heading
        {
          id: createId(),
          elType: "widget",
          widgetType: "heading",
          settings: {
            title: "Let's Find Your <br /><span style=\"color:#38D4D8;\">Missing Revenue</span>",
            header_size: "h2",
            align: "center",
            title_color: "#FFFFFF",
            typography_typography: "custom",
            typography_font_family: "Plus Jakarta Sans",
            typography_font_size: {
              unit: "px",
              size: 46
            },
            typography_font_size_tablet: {
              unit: "px",
              size: 36
            },
            typography_font_size_mobile: {
              unit: "px",
              size: 30
            },
            typography_font_weight: "800",
            typography_line_height: {
              unit: "em",
              size: 1.15
            },
            typography_letter_spacing: {
              unit: "px",
              size: -0.5
            },
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
        // Description
        {
          id: createId(),
          elType: "widget",
          widgetType: "text-editor",
          settings: {
            editor: "<p style=\"margin:0 auto;max-width:720px;font-size:16px;color:#94A3B8;line-height:1.65;text-align:center;\">Discuss your billing challenges with our experienced healthcare specialists. We will conduct a 100% free, confidential audit of your current billing performance, uncover hidden revenue leaks, and deliver an actionable revenue acceleration roadmap.</p>",
            typography_typography: "custom",
            typography_font_family: "Plus Jakarta Sans",
            typography_font_size: {
              unit: "px",
              size: 16
            },
            typography_font_weight: "400",
            text_color: "#94A3B8",
            margin: {
              unit: "px",
              top: "0",
              right: "0",
              bottom: "32",
              left: "0",
              isLinked: false
            }
          }
        },
        // Inline Buttons Container
        {
          id: createId(),
          elType: "container",
          isInner: true,
          settings: {
            content_width: "full",
            flex_direction: "row",
            flex_direction_mobile: "column",
            flex_justify_content: "center",
            flex_align_items: "center",
            flex_gap: {
              unit: "px",
              size: 16,
              column: "16",
              row: "12"
            },
            margin: {
              unit: "px",
              top: "0",
              right: "0",
              bottom: "36",
              left: "0",
              isLinked: false
            }
          },
          elements: [
            // Button 1: Book Consultation
            {
              id: createId(),
              elType: "widget",
              widgetType: "button",
              settings: {
                text: "Book a Free Consultation",
                link: {
                  url: "#contact",
                  is_external: false,
                  nofollow: false
                },
                button_type: "default",
                selected_icon: {
                  value: "far fa-calendar-alt",
                  library: "fa-regular"
                },
                icon_align: "left",
                icon_indent: {
                  unit: "px",
                  size: 10
                },
                background_color: "#179A9E",
                button_text_color: "#FFFFFF",
                background_hover_color: "#0F7B7E",
                hover_color: "#FFFFFF",
                border_radius: {
                  unit: "px",
                  top: "12",
                  right: "12",
                  bottom: "12",
                  left: "12",
                  isLinked: true
                },
                box_shadow_box_shadow_type: "yes",
                box_shadow_box_shadow: {
                  horizontal: 0,
                  vertical: 6,
                  blur: 20,
                  spread: 0,
                  color: "rgba(23, 154, 158, 0.4)"
                },
                padding: {
                  unit: "px",
                  top: "15",
                  right: "28",
                  bottom: "15",
                  left: "28",
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
            },
            // Button 2: Contact Our Team
            {
              id: createId(),
              elType: "widget",
              widgetType: "button",
              settings: {
                text: "Contact Our Team",
                link: {
                  url: "tel:8005550199",
                  is_external: false,
                  nofollow: false
                },
                button_type: "default",
                selected_icon: {
                  value: "fas fa-phone-alt",
                  library: "fa-solid"
                },
                icon_align: "left",
                icon_indent: {
                  unit: "px",
                  size: 10
                },
                background_color: "transparent",
                button_text_color: "#FFFFFF",
                background_hover_color: "rgba(255, 255, 255, 0.1)",
                hover_color: "#FFFFFF",
                border_border: "solid",
                border_width: {
                  unit: "px",
                  top: "1.5",
                  right: "1.5",
                  bottom: "1.5",
                  left: "1.5",
                  isLinked: true
                },
                border_color: "rgba(255, 255, 255, 0.3)",
                border_hover_color: "#FFFFFF",
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
                  top: "14",
                  right: "26",
                  bottom: "14",
                  left: "26",
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
        },
        // 3 Trust Guarantees Row
        {
          id: createId(),
          elType: "container",
          isInner: true,
          settings: {
            content_width: "full",
            flex_direction: "row",
            flex_direction_tablet: "row",
            flex_direction_mobile: "column",
            flex_justify_content: "center",
            flex_align_items: "center",
            flex_gap: {
              unit: "px",
              size: 28,
              column: "28",
              row: "12"
            }
          },
          elements: [
            {
              id: createId(),
              elType: "widget",
              widgetType: "heading",
              settings: {
                title: `<span style="display:inline-flex;align-items:center;gap:7px;color:#94A3B8;font-size:13px;font-weight:600;"><i class=\"fas fa-shield-alt\" style=\"color:#38D4D8;\"></i> 100% HIPAA Compliant & Secure</span>`,
                header_size: "span"
              }
            },
            {
              id: createId(),
              elType: "widget",
              widgetType: "heading",
              settings: {
                title: `<span style="display:inline-flex;align-items:center;gap:7px;color:#94A3B8;font-size:13px;font-weight:600;"><i class=\"far fa-check-circle\" style=\"color:#38D4D8;\"></i> No Long-Term Lock-In Contracts</span>`,
                header_size: "span"
              }
            },
            {
              id: createId(),
              elType: "widget",
              widgetType: "heading",
              settings: {
                title: `<span style="display:inline-flex;align-items:center;gap:7px;color:#94A3B8;font-size:13px;font-weight:600;"><i class=\"far fa-clock\" style=\"color:#38D4D8;\"></i> Completely Free Practice Audit</span>`,
                header_size: "span"
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
  path.join(outDir, 'final-cta-banner-elementor.json'),
  JSON.stringify(finalCTASection, null, 2),
  'utf8'
);

fs.writeFileSync(
  path.join(outDir, 'final-cta-banner-plain-text.json'),
  JSON.stringify(finalCTASection),
  'utf8'
);

console.log('Successfully generated Section 13 (Final CTA Banner) with 100% Flexbox Containers!');
