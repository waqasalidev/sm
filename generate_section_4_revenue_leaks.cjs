const fs = require('fs');
const path = require('path');

function createId() {
  return Math.random().toString(36).substring(2, 9);
}

const leaksData = [
  {
    num: "1",
    title: "Unbilled Visits",
    desc: "Patient encounters that take place but are never coded, billed, or submitted, leading to silent, permanent revenue loss."
  },
  {
    num: "2",
    title: "Denials Not Appealed",
    desc: "Legitimate clinical claims rejected by payers that staff simply write off instead of preparing clinical appeals."
  },
  {
    num: "3",
    title: "Underpayments",
    desc: "Insurers reimbursing below contracted fee schedule rates without being audited or challenged by the practice."
  },
  {
    num: "4",
    title: "Patient Balances Unpaid",
    desc: "High deductibles and co-pays left uncollected due to lack of upfront estimates and convenient digital payment options."
  },
  {
    num: "5",
    title: "Missed Filing Deadlines",
    desc: "Claims delayed past payer timely filing limits, resulting in unappealable, total forfeiture of reimbursement."
  },
  {
    num: "6",
    title: "Payments Not Posted",
    desc: "Checks and ERAs sitting unposted, distorting financial balances and preventing accurate secondary billing."
  },
  {
    num: "7",
    title: "Claims Rejected",
    desc: "Clearinghouse front-end format and demographic rejections that stall before reaching the payer adjudicator."
  },
  {
    num: "8",
    title: "No Response on Claims",
    desc: "Claims lost in payer black holes where no follow-up is initiated, allowing carrier statutory hold periods to lapse."
  }
];

const leakCardContainers = leaksData.map((item) => {
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
      // Top row: Number pill + Title
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
            size: 10,
            column: "10",
            row: "10"
          },
          margin: {
            unit: "px",
            top: "0",
            right: "0",
            bottom: "12",
            left: "0",
            isLinked: false
          }
        },
        elements: [
          // Number Pill Badge
          {
            id: createId(),
            elType: "widget",
            widgetType: "heading",
            settings: {
              title: `<span style="display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:50%;background-color:#FEE2E2;color:#EF4444;font-size:12px;font-weight:800;">${item.num}</span>`,
              header_size: "span",
              margin: {
                unit: "px",
                top: "0",
                right: "0",
                bottom: "0",
                left: "0",
                isLinked: true
              }
            }
          },
          // Card Title
          {
            id: createId(),
            elType: "widget",
            widgetType: "heading",
            settings: {
              title: item.title,
              header_size: "h4",
              title_color: "#0C2340",
              typography_typography: "custom",
              typography_font_family: "Plus Jakarta Sans",
              typography_font_size: {
                unit: "px",
                size: 16
              },
              typography_font_weight: "700",
              typography_line_height: {
                unit: "em",
                size: 1.25
              },
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
      // Card Description
      {
        id: createId(),
        elType: "widget",
        widgetType: "text-editor",
        settings: {
          editor: `<p style="margin:0;font-size:13.5px;color:#64748B;line-height:1.55;">${item.desc}</p>`,
          typography_typography: "custom",
          typography_font_family: "Plus Jakarta Sans",
          typography_font_size: {
            unit: "px",
            size: 13.5
          },
          typography_font_weight: "400",
          text_color: "#64748B"
        }
      }
    ]
  };
});

// Root Container for Section 4
const revenueLeaksSection = {
  version: "0.4",
  title: "Where Practices Lose Money - Revenue Leak Prevention (100% Flexbox Container)",
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
              bottom: "44",
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
                title: `<span style="display:inline-flex;align-items:center;gap:6px;padding:6px 16px;background-color:#EAF8F8;border:1px solid #A7E8E9;border-radius:50px;color:#179A9E;font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;"><i class=\"fas fa-exclamation-triangle\" style=\"font-size:12px;\"></i> REVENUE LEAK PREVENTION</span>`,
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
                title: "Where Practices <span style=\"color:#179A9E;\">Lose Money</span>",
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
                editor: "<p style=\"margin:0;font-size:16px;color:#4A5568;line-height:1.6;text-align:center;\">Revenue leaks happen at many points across the care cycle. StelleMed checks for every one of these, so no revenue is left behind.</p>",
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
        // 8 Cards Grid Container (Row of 4 columns x 2 rows)
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
          elements: leakCardContainers
        },
        // Bottom Navy Protection Banner (Exact match to media_1792560117785.png)
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
            background_color: "#0C2340",
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
              right: "36",
              bottom: "28",
              left: "36",
              isLinked: false
            },
            padding_mobile: {
              unit: "px",
              top: "24",
              right: "20",
              bottom: "24",
              left: "20",
              isLinked: false
            }
          },
          elements: [
            // Left content container
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
                  size: 6,
                  column: "6",
                  row: "6"
                }
              },
              elements: [
                {
                  id: createId(),
                  elType: "widget",
                  widgetType: "heading",
                  settings: {
                    title: `<span style="display:inline-flex;align-items:center;gap:6px;color:#179A9E;font-size:12px;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;"><i class=\"fas fa-shield-alt\"></i> Full-Spectrum Financial Protection</span>`,
                    header_size: "span",
                    title_color: "#179A9E"
                  }
                },
                {
                  id: createId(),
                  elType: "widget",
                  widgetType: "heading",
                  settings: {
                    title: "StelleMed checks for every one of these 8 points, so no revenue is left behind.",
                    header_size: "h4",
                    title_color: "#FFFFFF",
                    typography_typography: "custom",
                    typography_font_family: "Plus Jakarta Sans",
                    typography_font_size: {
                      unit: "px",
                      size: 18
                    },
                    typography_font_size_mobile: {
                      unit: "px",
                      size: 16
                    },
                    typography_font_weight: "700",
                    typography_line_height: {
                      unit: "em",
                      size: 1.35
                    }
                  }
                }
              ]
            },
            // Right button
            {
              id: createId(),
              elType: "widget",
              widgetType: "button",
              settings: {
                text: "Let's Find Your Missing Revenue",
                link: {
                  url: "#contact",
                  is_external: false,
                  nofollow: false
                },
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
                  size: 14.5
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
  path.join(outDir, 'where-practices-lose-money-elementor.json'),
  JSON.stringify(revenueLeaksSection, null, 2),
  'utf8'
);

fs.writeFileSync(
  path.join(outDir, 'where-practices-lose-money-plain-text.json'),
  JSON.stringify(revenueLeaksSection),
  'utf8'
);

console.log('Successfully generated Section 4 (Where Practices Lose Money) with 100% Flexbox Containers!');
