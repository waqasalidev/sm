const fs = require('fs');
const path = require('path');

function createId() {
  return Math.random().toString(36).substring(2, 9);
}

const advantageData = [
  {
    icon: "fas fa-graduation-cap",
    title: "Industry Expertise",
    desc: "Certified AAPC & AHIMA billing specialists who master the nuances of CPT, ICD-10, and payer-specific modifier guidelines for your clinical specialty."
  },
  {
    icon: "fas fa-user-check",
    title: "Dedicated Support",
    desc: "One assigned account manager who knows your practice inside and out. Direct phone and email access — zero frustrating ticket queues."
  },
  {
    icon: "fas fa-shield-alt",
    title: "Advanced Technology",
    desc: "Powered by StelleCloud™: automated claim scrubbers, 256-bit HIPAA compliance, seamless EHR synchronization, and 24/7 client portal access."
  },
  {
    icon: "fas fa-chart-line",
    title: "Transparent Reporting",
    desc: "Comprehensive monthly financial dashboards and quarterly performance reviews. Track every billed dollar, denial reason, and recovery milestone."
  }
];

const advantageCards = advantageData.map((item) => {
  return {
    id: createId(),
    elType: "container",
    isInner: true,
    settings: {
      content_width: "full",
      width: {
        unit: "%",
        size: 23.2,
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
      flex_direction: "column",
      flex_align_items: "flex-start",
      flex_gap: {
        unit: "px",
        size: 0,
        column: "0",
        row: "0"
      },
      background_background: "classic",
      background_color: "#0F283E",
      border_border: "solid",
      border_width: {
        unit: "px",
        top: "1",
        right: "1",
        bottom: "1",
        left: "1",
        isLinked: true
      },
      border_color: "rgba(255, 255, 255, 0.08)",
      border_radius: {
        unit: "px",
        top: "16",
        right: "16",
        bottom: "16",
        left: "16",
        isLinked: true
      },
      padding: {
        unit: "px",
        top: "28",
        right: "24",
        bottom: "28",
        left: "24",
        isLinked: true
      }
    },
    elements: [
      // Icon Box
      {
        id: createId(),
        elType: "container",
        isInner: true,
        settings: {
          content_width: "full",
          width: {
            unit: "px",
            size: 48,
            sizes: []
          },
          min_height: {
            unit: "px",
            size: 48
          },
          background_background: "classic",
          background_color: "#133754",
          border_radius: {
            unit: "px",
            top: "12",
            right: "12",
            bottom: "12",
            left: "12",
            isLinked: true
          },
          flex_direction: "column",
          flex_justify_content: "center",
          flex_align_items: "center",
          margin: {
            unit: "px",
            top: "0",
            right: "0",
            bottom: "18",
            left: "0",
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
                value: item.icon,
                library: "fa-solid"
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
      // Title
      {
        id: createId(),
        elType: "widget",
        widgetType: "heading",
        settings: {
          title: item.title,
          header_size: "h3",
          title_color: "#FFFFFF",
          typography_typography: "custom",
          typography_font_family: "Plus Jakarta Sans",
          typography_font_size: {
            unit: "px",
            size: 18
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
            bottom: "10",
            left: "0",
            isLinked: false
          }
        }
      },
      // Desc
      {
        id: createId(),
        elType: "widget",
        widgetType: "text-editor",
        settings: {
          editor: `<p style="margin:0;font-size:13.5px;color:#94A3B8;line-height:1.6;">${item.desc}</p>`,
          typography_typography: "custom",
          typography_font_family: "Plus Jakarta Sans",
          typography_font_size: {
            unit: "px",
            size: 13.5
          },
          typography_font_weight: "400",
          text_color: "#94A3B8"
        }
      }
    ]
  };
});

// Root Container for Section 9
const advantageSection = {
  version: "0.4",
  title: "The StelleMed Advantage - Your Trusted Partner in Medical Billing (100% Flexbox Container)",
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
        background_color: "#081D30",
        padding: {
          unit: "px",
          top: "85",
          right: "20",
          bottom: "85",
          left: "20",
          isLinked: false
        },
        padding_tablet: {
          unit: "px",
          top: "65",
          right: "20",
          bottom: "65",
          left: "20",
          isLinked: false
        },
        padding_mobile: {
          unit: "px",
          top: "45",
          right: "16",
          bottom: "45",
          left: "16",
          isLinked: false
        }
      },
      elements: [
        // Header
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
                title: `<span style="display:inline-flex;align-items:center;gap:6px;padding:6px 16px;background-color:rgba(23,154,158,0.15);border:1px solid rgba(23,154,158,0.4);border-radius:50px;color:#179A9E;font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;"><i class=\"fas fa-heartbeat\"></i> THE STELLEMED ADVANTAGE</span>`,
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
                title: "Your Trusted Partner in <span style=\"color:#179A9E;\">Medical Billing</span>",
                header_size: "h2",
                align: "center",
                title_color: "#FFFFFF",
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
                editor: "<p style=\"margin:0;font-size:16px;color:#94A3B8;line-height:1.6;text-align:center;\">We bridge clinical dedication with financial excellence. Here is why independent physicians, surgical centers, and multi-specialty clinics choose StelleMed as their growth partner.</p>",
                typography_typography: "custom",
                typography_font_family: "Plus Jakarta Sans",
                typography_font_size: {
                  unit: "px",
                  size: 16
                },
                typography_font_weight: "400",
                text_color: "#94A3B8"
              }
            }
          ]
        },
        // Grid of 4 Cards
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
            },
            margin: {
              unit: "px",
              top: "0",
              right: "0",
              bottom: "40",
              left: "0",
              isLinked: false
            }
          },
          elements: advantageCards
        },
        // Bottom Banner (Zero Risk, No Long-Term Contracts)
        {
          id: createId(),
          elType: "container",
          isInner: true,
          settings: {
            content_width: "full",
            flex_direction: "row",
            flex_direction_tablet: "column",
            flex_direction_mobile: "column",
            flex_justify_content: "space-between",
            flex_align_items: "center",
            flex_gap: {
              unit: "px",
              size: 24,
              column: "24",
              row: "20"
            },
            background_background: "classic",
            background_color: "#0F283E",
            border_border: "solid",
            border_width: {
              unit: "px",
              top: "1",
              right: "1",
              bottom: "1",
              left: "1",
              isLinked: true
            },
            border_color: "rgba(23, 154, 158, 0.3)",
            border_radius: {
              unit: "px",
              top: "16",
              right: "16",
              bottom: "16",
              left: "16",
              isLinked: true
            },
            padding: {
              unit: "px",
              top: "24",
              right: "32",
              bottom: "24",
              left: "32",
              isLinked: false
            },
            padding_mobile: {
              unit: "px",
              top: "20",
              right: "20",
              bottom: "20",
              left: "20",
              isLinked: false
            }
          },
          elements: [
            // Left Content with icon
            {
              id: createId(),
              elType: "container",
              isInner: true,
              settings: {
                content_width: "full",
                flex_direction: "row",
                flex_align_items: "center",
                flex_gap: {
                  unit: "px",
                  size: 16,
                  column: "16",
                  row: "16"
                }
              },
              elements: [
                // Check circle icon
                {
                  id: createId(),
                  elType: "widget",
                  widgetType: "icon",
                  settings: {
                    selected_icon: {
                      value: "far fa-check-circle",
                      library: "fa-regular"
                    },
                    view: "default",
                    primary_color: "#179A9E",
                    size: {
                      unit: "px",
                      size: 26
                    }
                  }
                },
                // Text details
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
                      size: 2,
                      column: "2",
                      row: "2"
                    }
                  },
                  elements: [
                    {
                      id: createId(),
                      elType: "widget",
                      widgetType: "heading",
                      settings: {
                        title: "Zero Risk, No Long-Term Contracts",
                        header_size: "h4",
                        title_color: "#FFFFFF",
                        typography_typography: "custom",
                        typography_font_family: "Plus Jakarta Sans",
                        typography_font_size: {
                          unit: "px",
                          size: 17
                        },
                        typography_font_weight: "700"
                      }
                    },
                    {
                      id: createId(),
                      elType: "widget",
                      widgetType: "text-editor",
                      settings: {
                        editor: "<p style=\"margin:0;font-size:13.5px;color:#94A3B8;line-height:1.45;\">Start with a simple month-to-month agreement. If we don't elevate your collections, you're never locked in.</p>",
                        text_color: "#94A3B8"
                      }
                    }
                  ]
                }
              ]
            },
            // Right Button
            {
              id: createId(),
              elType: "widget",
              widgetType: "button",
              settings: {
                text: "Request Practice Audit",
                link: {
                  url: "#contact",
                  is_external: false,
                  nofollow: false
                },
                selected_icon: {
                  value: "fas fa-arrow-up-right-from-square",
                  library: "fa-solid"
                },
                icon_align: "right",
                icon_indent: {
                  unit: "px",
                  size: 8
                },
                background_color: "#179A9E",
                button_text_color: "#FFFFFF",
                background_hover_color: "#0F7B7E",
                hover_color: "#FFFFFF",
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
                  top: "13",
                  right: "24",
                  bottom: "13",
                  left: "24",
                  isLinked: false
                },
                typography_typography: "custom",
                typography_font_family: "Plus Jakarta Sans",
                typography_font_size: {
                  unit: "px",
                  size: 14
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
  path.join(outDir, 'the-stellemed-advantage-elementor.json'),
  JSON.stringify(advantageSection, null, 2),
  'utf8'
);

fs.writeFileSync(
  path.join(outDir, 'the-stellemed-advantage-plain-text.json'),
  JSON.stringify(advantageSection),
  'utf8'
);

console.log('Successfully generated Section 9 (The StelleMed Advantage) with 100% Flexbox Containers!');
