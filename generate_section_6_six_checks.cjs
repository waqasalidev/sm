const fs = require('fs');
const path = require('path');

function createId() {
  return Math.random().toString(36).substring(2, 9);
}

const checksData = [
  {
    gate: "CHECK 01",
    icon: "fas fa-user-check",
    title: "Patient Details Complete & Correct",
    desc: "Demographic fields, subscriber IDs, relationship codes, and group numbers verified 100% error-free."
  },
  {
    gate: "CHECK 02",
    icon: "far fa-calendar-check",
    title: "Coverage Confirmed for Date of Service",
    desc: "Active policy status, effective date windows, co-pays, and deductibles verified before batch generation."
  },
  {
    gate: "CHECK 03",
    icon: "fas fa-file-signature",
    title: "Prior Authorization on File Where Required",
    desc: "Auth reference numbers logged and attached directly to billing lines for required clinical encounters."
  },
  {
    gate: "CHECK 04",
    icon: "far fa-file-alt",
    title: "Codes Match the Documentation",
    desc: "CPT, ICD-10-CM, and HCPCS modifiers aligned accurately with clinical notes to justify medical necessity."
  },
  {
    gate: "CHECK 05",
    icon: "fas fa-microchip",
    title: "Claim Scrubber Edits Passed",
    desc: "Evaluated through StelleCloud™ rules engine to catch NCCI bundle conflicts and modifier errors."
  },
  {
    gate: "CHECK 06",
    icon: "fas fa-sliders-h",
    title: "Payer-Specific Rules Applied",
    desc: "Carrier-specific billing guidelines applied so claims meet local clearinghouse requirements first pass."
  }
];

const checkCards = checksData.map((chk) => {
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
        size: 48,
        sizes: []
      },
      width_mobile: {
        unit: "%",
        size: 100,
        sizes: []
      },
      flex_direction: "row",
      flex_align_items: "flex-start",
      flex_gap: {
        unit: "px",
        size: 16,
        column: "16",
        row: "16"
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
        top: "16",
        right: "16",
        bottom: "16",
        left: "16",
        isLinked: true
      },
      box_shadow_box_shadow_type: "yes",
      box_shadow_box_shadow: {
        horizontal: 0,
        vertical: 4,
        blur: 16,
        spread: -2,
        color: "rgba(12, 35, 64, 0.04)"
      },
      padding: {
        unit: "px",
        top: "24",
        right: "22",
        bottom: "24",
        left: "22",
        isLinked: true
      }
    },
    elements: [
      // Left Icon Box
      {
        id: createId(),
        elType: "container",
        isInner: true,
        settings: {
          content_width: "full",
          width: {
            unit: "px",
            size: 44,
            sizes: []
          },
          min_height: {
            unit: "px",
            size: 44
          },
          background_background: "classic",
          background_color: "#E8F6F7",
          border_radius: {
            unit: "px",
            top: "10",
            right: "10",
            bottom: "10",
            left: "10",
            isLinked: true
          },
          flex_direction: "column",
          flex_justify_content: "center",
          flex_align_items: "center",
          flex_shrink: 0
        },
        elements: [
          {
            id: createId(),
            elType: "widget",
            widgetType: "icon",
            settings: {
              selected_icon: {
                value: chk.icon,
                library: chk.icon.startsWith("far") ? "fa-regular" : "fa-solid"
              },
              view: "default",
              primary_color: "#179A9E",
              size: {
                unit: "px",
                size: 20
              }
            }
          }
        ]
      },
      // Right Content
      {
        id: createId(),
        elType: "container",
        isInner: true,
        settings: {
          content_width: "full",
          flex_direction: "column",
          flex_align_items: "flex-start",
          flex_gap: {
            unit: "px",
            size: 4,
            column: "4",
            row: "4"
          }
        },
        elements: [
          // Check Gate Tag
          {
            id: createId(),
            elType: "widget",
            widgetType: "heading",
            settings: {
              title: chk.gate,
              header_size: "span",
              title_color: "#179A9E",
              typography_typography: "custom",
              typography_font_family: "Plus Jakarta Sans",
              typography_font_size: {
                unit: "px",
                size: 11
              },
              typography_font_weight: "800",
              typography_letter_spacing: {
                unit: "px",
                size: 0.8
              }
            }
          },
          // Card Title
          {
            id: createId(),
            elType: "widget",
            widgetType: "heading",
            settings: {
              title: chk.title,
              header_size: "h4",
              title_color: "#0C2340",
              typography_typography: "custom",
              typography_font_family: "Plus Jakarta Sans",
              typography_font_size: {
                unit: "px",
                size: 15.5
              },
              typography_font_weight: "700",
              typography_line_height: {
                unit: "em",
                size: 1.3
              },
              margin: {
                unit: "px",
                top: "0",
                right: "0",
                bottom: "4",
                left: "0",
                isLinked: false
              }
            }
          },
          // Card Desc
          {
            id: createId(),
            elType: "widget",
            widgetType: "text-editor",
            settings: {
              editor: `<p style="margin:0;font-size:13px;color:#64748B;line-height:1.55;">${chk.desc}</p>`,
              typography_typography: "custom",
              typography_font_family: "Plus Jakarta Sans",
              typography_font_size: {
                unit: "px",
                size: 13
              },
              typography_font_weight: "400",
              text_color: "#64748B"
            }
          }
        ]
      }
    ]
  };
});

// Root Container for Section 6
const sixChecksSection = {
  version: "0.4",
  title: "Six Checks Before Every Claim Goes Out - Quality Assurance (100% Flexbox Container)",
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
        // Section Header
        {
          id: createId(),
          elType: "container",
          isInner: true,
          settings: {
            content_width: "full",
            width: {
              unit: "px",
              size: 820,
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
            // Pill
            {
              id: createId(),
              elType: "widget",
              widgetType: "heading",
              settings: {
                title: `<span style="display:inline-flex;align-items:center;gap:6px;padding:6px 16px;background-color:#EAF8F8;border:1px solid #A7E8E9;border-radius:50px;color:#179A9E;font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;"><i class=\"fas fa-shield-alt\"></i> PRE-SUBMISSION QUALITY ASSURANCE</span>`,
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
                title: "Six Checks Before <span style=\"color:#179A9E;\">Every Claim Goes Out</span>",
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
                editor: "<p style=\"margin:0;font-size:16px;color:#4A5568;line-height:1.6;text-align:center;\">To protect your revenue and prevent delays, every single claim is evaluated against six vital quality gates before clearinghouse dispatch.</p>",
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
        // Grid Container (Row of 3 cards x 2 rows)
        {
          id: createId(),
          elType: "container",
          isInner: true,
          settings: {
            content_width: "full",
            flex_direction: "row",
            flex_wrap: "wrap",
            flex_justify_content: "space-between",
            flex_align_items: "stretch",
            flex_gap: {
              unit: "px",
              size: 20,
              column: "20",
              row: "20"
            }
          },
          elements: checkCards
        }
      ]
    }
  ]
};

const outDir = path.join(__dirname, 'elementor-editable-templates');
fs.writeFileSync(
  path.join(outDir, 'six-checks-quality-assurance-elementor.json'),
  JSON.stringify(sixChecksSection, null, 2),
  'utf8'
);

fs.writeFileSync(
  path.join(outDir, 'six-checks-quality-assurance-plain-text.json'),
  JSON.stringify(sixChecksSection),
  'utf8'
);

console.log('Successfully generated Section 6 (Six Checks QA) with 100% Flexbox Containers!');
