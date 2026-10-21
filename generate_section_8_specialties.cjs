const fs = require('fs');
const path = require('path');

function createId() {
  return Math.random().toString(36).substring(2, 9);
}

const specialtiesList = [
  { cat: "GENERAL MEDICINE", name: "Primary Care" },
  { cat: "GENERAL MEDICINE", name: "Family Medicine" },
  { cat: "GENERAL MEDICINE", name: "Internal Medicine" },
  { cat: "PEDIATRIC CARE", name: "Pediatrics" },
  { cat: "CARDIOVASCULAR", name: "Cardiology" },
  { cat: "CARDIOVASCULAR", name: "Vascular Surgery" },
  { cat: "NEUROSCIENCES", name: "Neurology" },
  { cat: "NEUROSCIENCES", name: "Neurosurgery" },
  { cat: "MENTAL HEALTH", name: "Psychiatry" },
  { cat: "MENTAL HEALTH", name: "Mental Health" },
  { cat: "WOMEN'S HEALTH", name: "OB/GYN" },
  { cat: "SURGICAL CARE", name: "General Surgery" },
  { cat: "SURGICAL CARE", name: "Thoracic Surgery" },
  { cat: "MUSCULOSKELETAL", name: "Orthopedics" },
  { cat: "MUSCULOSKELETAL", name: "Chiropractic" },
  { cat: "REHABILITATION", name: "Physical Therapy" },
  { cat: "SPECIALIZED CARE", name: "Podiatry" },
  { cat: "SPECIALIZED CARE", name: "Dental" },
  { cat: "SPECIALIZED CARE", name: "Vision" },
  { cat: "SPECIALIZED CARE", name: "ENT" },
  { cat: "SPECIALIZED CARE", name: "Urology" },
  { cat: "PULMONARY & RESPIRATORY", name: "Pulmonology" },
  { cat: "RENAL & KIDNEY", name: "Nephrology" },
  { cat: "GASTROENTEROLOGY", name: "Digestive Health" },
  { cat: "ACUTE CARE", name: "Urgent Care" },
  { cat: "ACUTE CARE", name: "Emergency Room / Emergency Medicine" },
  { cat: "OUTREACH & HOME", name: "Home Health" },
  { cat: "EQUIPMENT & SUPPLIES", name: "DME" }
];

const specialtyCards = specialtiesList.map((spec) => {
  return {
    id: createId(),
    elType: "container",
    isInner: true,
    settings: {
      content_width: "full",
      width: {
        unit: "%",
        size: 18.2,
        sizes: []
      },
      width_tablet: {
        unit: "%",
        size: 31,
        sizes: []
      },
      width_mobile: {
        unit: "%",
        size: 48,
        sizes: []
      },
      flex_direction: "column",
      flex_align_items: "flex-start",
      flex_gap: {
        unit: "px",
        size: 4,
        column: "4",
        row: "4"
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
        top: "12",
        right: "12",
        bottom: "12",
        left: "12",
        isLinked: true
      },
      padding: {
        unit: "px",
        top: "16",
        right: "14",
        bottom: "16",
        left: "14",
        isLinked: true
      }
    },
    elements: [
      {
        id: createId(),
        elType: "widget",
        widgetType: "heading",
        settings: {
          title: spec.cat,
          header_size: "span",
          title_color: "#179A9E",
          typography_typography: "custom",
          typography_font_family: "Plus Jakarta Sans",
          typography_font_size: {
            unit: "px",
            size: 10
          },
          typography_font_weight: "800",
          typography_letter_spacing: {
            unit: "px",
            size: 0.6
          }
        }
      },
      {
        id: createId(),
        elType: "widget",
        widgetType: "heading",
        settings: {
          title: spec.name,
          header_size: "h4",
          title_color: "#0C2340",
          typography_typography: "custom",
          typography_font_family: "Plus Jakarta Sans",
          typography_font_size: {
            unit: "px",
            size: 14
          },
          typography_font_weight: "700",
          typography_line_height: {
            unit: "em",
            size: 1.25
          }
        }
      }
    ]
  };
});

// Root Container for Section 8
const specialtiesSection = {
  version: "0.4",
  title: "Specialties We Serve - 28 Clinical Specialties (100% Flexbox Container)",
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
              bottom: "40",
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
                title: `<span style="display:inline-flex;align-items:center;gap:6px;padding:6px 16px;background-color:#EAF8F8;border:1px solid #A7E8E9;border-radius:50px;color:#179A9E;font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;"><i class=\"fas fa-stethoscope\"></i> CLINICAL BREADTH</span>`,
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
                title: "Specialties We <span style=\"color:#179A9E;\">Serve</span>",
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
                editor: "<p style=\"margin:0;font-size:16px;color:#4A5568;line-height:1.6;text-align:center;\">Our certified medical billers and coders understand the nuanced clinical documentation and payer guidelines for 28 healthcare specialties.</p>",
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
        // Search bar placeholder / prompt container
        {
          id: createId(),
          elType: "container",
          isInner: true,
          settings: {
            content_width: "full",
            width: {
              unit: "px",
              size: 420,
              sizes: []
            },
            width_tablet: {
              unit: "%",
              size: 80,
              sizes: []
            },
            width_mobile: {
              unit: "%",
              size: 100,
              sizes: []
            },
            flex_direction: "row",
            flex_align_items: "center",
            flex_gap: {
              unit: "px",
              size: 10,
              column: "10",
              row: "10"
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
            border_color: "#CBD5E1",
            border_radius: {
              unit: "px",
              top: "10",
              right: "10",
              bottom: "10",
              left: "10",
              isLinked: true
            },
            padding: {
              unit: "px",
              top: "10",
              right: "16",
              bottom: "10",
              left: "16",
              isLinked: false
            },
            margin: {
              unit: "px",
              top: "0",
              right: "auto",
              bottom: "36",
              left: "auto",
              isLinked: false
            }
          },
          elements: [
            {
              id: createId(),
              elType: "widget",
              widgetType: "icon",
              settings: {
                selected_icon: {
                  value: "fas fa-search",
                  library: "fa-solid"
                },
                view: "default",
                primary_color: "#94A3B8",
                size: {
                  unit: "px",
                  size: 14
                }
              }
            },
            {
              id: createId(),
              elType: "widget",
              widgetType: "heading",
              settings: {
                title: "Search your medical specialty...",
                header_size: "span",
                title_color: "#94A3B8",
                typography_typography: "custom",
                typography_font_family: "Plus Jakarta Sans",
                typography_font_size: {
                  unit: "px",
                  size: 13.5
                },
                typography_font_weight: "400"
              }
            }
          ]
        },
        // 28 Specialty Cards Grid Container
        {
          id: createId(),
          elType: "container",
          isInner: true,
          settings: {
            content_width: "full",
            flex_direction: "row",
            flex_wrap: "wrap",
            flex_justify_content: "flex-start",
            flex_align_items: "stretch",
            flex_gap: {
              unit: "px",
              size: 16,
              column: "16",
              row: "16"
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
          elements: specialtyCards
        },
        // Bottom CTA block
        {
          id: createId(),
          elType: "container",
          isInner: true,
          settings: {
            content_width: "full",
            flex_direction: "column",
            flex_align_items: "center",
            flex_gap: {
              unit: "px",
              size: 14,
              column: "14",
              row: "14"
            }
          },
          elements: [
            {
              id: createId(),
              elType: "widget",
              widgetType: "text-editor",
              settings: {
                editor: "<p style=\"margin:0;font-size:14px;color:#64748B;text-align:center;\">Don't see your specific multi-disciplinary clinic listed? We support custom payer rule sets for any clinical setting.</p>",
                text_color: "#64748B"
              }
            },
            {
              id: createId(),
              elType: "widget",
              widgetType: "button",
              settings: {
                text: "Inquire About Your Specialty",
                link: {
                  url: "#contact",
                  is_external: false,
                  nofollow: false
                },
                align: "center",
                selected_icon: {
                  value: "fas fa-arrow-right",
                  library: "fa-solid"
                },
                icon_align: "right",
                icon_indent: {
                  unit: "px",
                  size: 8
                },
                background_color: "#FFFFFF",
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
                  top: "10",
                  right: "10",
                  bottom: "10",
                  left: "10",
                  isLinked: true
                },
                padding: {
                  unit: "px",
                  top: "12",
                  right: "22",
                  bottom: "12",
                  left: "22",
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
        }
      ]
    }
  ]
};

const outDir = path.join(__dirname, 'elementor-editable-templates');
fs.writeFileSync(
  path.join(outDir, 'specialties-we-serve-elementor.json'),
  JSON.stringify(specialtiesSection, null, 2),
  'utf8'
);

fs.writeFileSync(
  path.join(outDir, 'specialties-we-serve-plain-text.json'),
  JSON.stringify(specialtiesSection),
  'utf8'
);

console.log('Successfully generated Section 8 (Specialties We Serve) with 100% Flexbox Containers!');
