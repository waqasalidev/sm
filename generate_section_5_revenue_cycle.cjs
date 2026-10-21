const fs = require('fs');
const path = require('path');

function createId() {
  return Math.random().toString(36).substring(2, 9);
}

const insuranceSteps = [
  { step: "STEP 01", title: "Patient Visit", desc: "Clinical encounter and encounter documentation captured." },
  { step: "STEP 02", title: "Eligibility & Authorization", desc: "Real-time coverage verification & prior auth on file." },
  { step: "STEP 03", title: "Medical Coding", desc: "Certified AAPC/AHIMA CPT, ICD-10, and modifier coding." },
  { step: "STEP 04", title: "Claim Submission", desc: "Electronic scrubbing and EDI 837 dispatch within 24–48h." },
  { step: "STEP 05", title: "Denials & Appeals", desc: "Fast root-cause investigation and aggressive clinical appeals." },
  { step: "STEP 06", title: "Payer Payment", desc: "Automated ERA (835) electronic remittance and auto-posting." },
  { step: "STEP 07", title: "Practice Paid", desc: "Funds deposited cleanly into practice bank accounts." }
];

const patientSteps = [
  { step: "STEP 01", title: "Patient Visit", desc: "Point-of-service intake and transparent Good Faith Estimate." },
  { step: "STEP 02", title: "Patient Statement", desc: "Clear digital SMS & paperless statements generated." },
  { step: "STEP 03", title: "Payment Plan / Collection", desc: "Customizable recurring payment schedules & balance counseling." },
  { step: "STEP 04", title: "Patient Payment", desc: "Secure 1-click online payment and portal processing." },
  { step: "STEP 05", title: "Practice Paid", desc: "Reconciled balances and maximized self-pay recovery." }
];

function createStepCards(steps, color, lightBg) {
  return steps.map((item) => {
    return {
      id: createId(),
      elType: "container",
      isInner: true,
      settings: {
        content_width: "full",
        flex_direction: "column",
        flex_align_items: "flex-start",
        flex_gap: {
          unit: "px",
          size: 0,
          column: "0",
          row: "0"
        },
        flex_grow: 1,
        flex_shrink: 1,
        width: {
          unit: "%",
          size: Math.floor(100 / steps.length) - 1,
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
        background_background: "classic",
        background_color: "#F8FAFC",
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
          top: "18",
          right: "16",
          bottom: "18",
          left: "16",
          isLinked: true
        }
      },
      elements: [
        // Top row: Step label + check icon
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
              bottom: "8",
              left: "0",
              isLinked: false
            }
          },
          elements: [
            {
              id: createId(),
              elType: "widget",
              widgetType: "heading",
              settings: {
                title: item.step,
                header_size: "span",
                title_color: color,
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
                primary_color: color,
                size: {
                  unit: "px",
                  size: 13
                }
              }
            }
          ]
        },
        // Step Title
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
              size: 14.5
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
              bottom: "6",
              left: "0",
              isLinked: false
            }
          }
        },
        // Step Desc
        {
          id: createId(),
          elType: "widget",
          widgetType: "text-editor",
          settings: {
            editor: `<p style="margin:0;font-size:12.5px;color:#64748B;line-height:1.5;">${item.desc}</p>`,
            typography_typography: "custom",
            typography_font_family: "Plus Jakarta Sans",
            typography_font_size: {
              unit: "px",
              size: 12.5
            },
            typography_font_weight: "400",
            text_color: "#64748B"
          }
        }
      ]
    };
  });
}

function createWorkflowBlock(title, sub, icon, color, steps) {
  return {
    id: createId(),
    elType: "container",
    isInner: true,
    settings: {
      content_width: "full",
      flex_direction: "column",
      flex_gap: {
        unit: "px",
        size: 0,
        column: "0",
        row: "0"
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
      // Workflow Header Bar
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
          },
          background_background: "classic",
          background_color: "#F8FAFC",
          border_border: "solid",
          border_width: {
            unit: "px",
            top: "0",
            right: "0",
            bottom: "0",
            left: "5",
            isLinked: false
          },
          border_color: color,
          border_radius: {
            unit: "px",
            top: "10",
            right: "10",
            bottom: "10",
            left: "0",
            isLinked: false
          },
          padding: {
            unit: "px",
            top: "16",
            right: "24",
            bottom: "16",
            left: "20",
            isLinked: false
          },
          margin: {
            unit: "px",
            top: "0",
            right: "0",
            bottom: "16",
            left: "0",
            isLinked: false
          }
        },
        elements: [
          // Round Icon
          {
            id: createId(),
            elType: "container",
            isInner: true,
            settings: {
              content_width: "full",
              width: {
                unit: "px",
                size: 38,
                sizes: []
              },
              min_height: {
                unit: "px",
                size: 38
              },
              background_background: "classic",
              background_color: color,
              border_radius: {
                unit: "px",
                top: "50",
                right: "50",
                bottom: "50",
                left: "50",
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
                    value: icon,
                    library: "fa-solid"
                  },
                  view: "default",
                  primary_color: "#FFFFFF",
                  size: {
                    unit: "px",
                    size: 16
                  }
                }
              }
            ]
          },
          // Titles
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
                  title: title,
                  header_size: "h3",
                  title_color: "#0C2340",
                  typography_typography: "custom",
                  typography_font_family: "Plus Jakarta Sans",
                  typography_font_size: {
                    unit: "px",
                    size: 18
                  },
                  typography_font_weight: "700"
                }
              },
              {
                id: createId(),
                elType: "widget",
                widgetType: "heading",
                settings: {
                  title: sub,
                  header_size: "span",
                  title_color: "#64748B",
                  typography_typography: "custom",
                  typography_font_family: "Plus Jakarta Sans",
                  typography_font_size: {
                    unit: "px",
                    size: 13
                  },
                  typography_font_weight: "500"
                }
              }
            ]
          }
        ]
      },
      // Steps Row Container
      {
        id: createId(),
        elType: "container",
        isInner: true,
        settings: {
          content_width: "full",
          flex_direction: "row",
          flex_direction_tablet: "row",
          flex_direction_mobile: "column",
          flex_wrap: "wrap",
          flex_justify_content: "space-between",
          flex_align_items: "stretch",
          flex_gap: {
            unit: "px",
            size: 12,
            column: "12",
            row: "12"
          }
        },
        elements: createStepCards(steps, color)
      }
    ]
  };
}

// Root Container for Section 5
const revenueCycleSection = {
  version: "0.4",
  title: "How We Manage the Revenue Cycle - 2 Workflows (100% Flexbox Container)",
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
        background_color: "#FFFFFF",
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
                title: `<span style="display:inline-flex;align-items:center;gap:6px;padding:6px 16px;background-color:#EAF8F8;border:1px solid #A7E8E9;border-radius:50px;color:#179A9E;font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;"><i class=\"fas fa-project-diagram\"></i> PROVEN WORKFLOW SEQUENCES</span>`,
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
                title: "How We Manage the <span style=\"color:#179A9E;\">Revenue Cycle</span>",
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
                editor: "<p style=\"margin:0;font-size:16px;color:#4A5568;line-height:1.6;text-align:center;\">We operate two distinct, synchronized revenue workflows to guarantee maximum reimbursement from both insurance carriers and patients.</p>",
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
        // Workflow 1: Insurance / Payer
        createWorkflowBlock(
          "Insurance / Payer Revenue Cycle",
          "7-Step Adjudication & Payer Reimbursement Sequence",
          "fas fa-plus",
          "#179A9E",
          insuranceSteps
        ),
        // Workflow 2: Patient Billing
        createWorkflowBlock(
          "Patient Billing Revenue Cycle",
          "5-Step Patient Financial Experience & Self-Pay Recovery Sequence",
          "fas fa-star",
          "#7C3AED",
          patientSteps
        )
      ]
    }
  ]
};

const outDir = path.join(__dirname, 'elementor-editable-templates');
fs.writeFileSync(
  path.join(outDir, 'how-we-manage-revenue-cycle-elementor.json'),
  JSON.stringify(revenueCycleSection, null, 2),
  'utf8'
);

fs.writeFileSync(
  path.join(outDir, 'how-we-manage-revenue-cycle-plain-text.json'),
  JSON.stringify(revenueCycleSection),
  'utf8'
);

console.log('Successfully generated Section 5 (How We Manage Revenue Cycle) with 100% Flexbox Containers!');
