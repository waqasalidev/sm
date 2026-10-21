const fs = require('fs');
const path = require('path');

function createId() {
  return Math.random().toString(36).substring(2, 9);
}

const plansData = [
  {
    isPopular: true,
    tag: "COMPREHENSIVE",
    title: "Full Revenue Cycle Management",
    icon: "fas fa-network-wired",
    bestFor: "Practices that want to hand off billing completely",
    whatYouGet: "Everything from eligibility to patient payments, with a dedicated account manager.",
    features: [
      "End-to-end payer claim adjudication",
      "Patient invoicing & billing customer care",
      "Dedicated senior account manager",
      "Continuous denial management & appeals",
      "Monthly executive performance review"
    ]
  },
  {
    isPopular: false,
    tag: "MODULAR & FLEXIBLE",
    title: "Individual Services",
    icon: "fas fa-layer-group",
    bestFor: "Practices with in-house billing that need help in one area",
    whatYouGet: "Pick any service: credentialing, coding, denials, A/R follow-up and more.",
    features: [
      "Pay only for the exact service you need",
      "Provider credentialing & payer enrollment",
      "Certified medical coding audits",
      "Clearinghouse submission & scrubbing",
      "Aging A/R recovery project teams"
    ]
  },
  {
    isPopular: false,
    tag: "ENTERPRISE EXTENSION",
    title: "Dedicated Billing Team",
    icon: "fas fa-users-cog",
    bestFor: "Larger practices and groups",
    whatYouGet: "A StelleMed team working in your systems as an extension of your staff during your business hours.",
    features: [
      "Operates directly inside your current EHR/PM",
      "Aligned seamlessly to your clinic time zones",
      "Dedicated team leader & daily productivity reports",
      "Eliminates staffing turnover and overhead",
      "Scalable capacity as your group expands"
    ]
  },
  {
    isPopular: false,
    tag: "TARGETED REMEDIATION",
    title: "One-Time Projects",
    icon: "fas fa-wrench",
    bestFor: "A specific problem to solve",
    whatYouGet: "Old A/R clean-up, credentialing new providers, coding review, new-practice setup.",
    features: [
      "Legacy aging A/R balance recovery",
      "New provider on-boarding credentialing",
      "Comprehensive clinical coding documentation review",
      "Billing system setup & fee schedule auditing",
      "No long-term contract lock-in"
    ]
  }
];

const planCards = plansData.map((plan) => {
  const elements = [];

  // Most Popular badge on top if true
  if (plan.isPopular) {
    elements.push({
      id: createId(),
      elType: "widget",
      widgetType: "heading",
      settings: {
        title: `<span style="display:inline-block;padding:5px 14px;background-color:#179A9E;color:#FFFFFF;border-radius:50px;font-size:11px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">MOST POPULAR</span>`,
        header_size: "span",
        align: "right",
        margin: {
          unit: "px",
          top: "-10",
          right: "0",
          bottom: "10",
          left: "0",
          isLinked: false
        }
      }
    });
  }

  // Header: Tag and Icon
  elements.push({
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
        bottom: "8",
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
            value: plan.icon,
            library: "fa-solid"
          },
          view: "default",
          primary_color: "#179A9E",
          size: {
            unit: "px",
            size: 16
          }
        }
      },
      {
        id: createId(),
        elType: "widget",
        widgetType: "heading",
        settings: {
          title: plan.tag,
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
      }
    ]
  });

  // Title
  elements.push({
    id: createId(),
    elType: "widget",
    widgetType: "heading",
    settings: {
      title: plan.title,
      header_size: "h3",
      title_color: "#0C2340",
      typography_typography: "custom",
      typography_font_family: "Plus Jakarta Sans",
      typography_font_size: {
        unit: "px",
        size: 20
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
        bottom: "16",
        left: "0",
        isLinked: false
      }
    }
  });

  // Best For Block
  elements.push({
    id: createId(),
    elType: "container",
    isInner: true,
    settings: {
      content_width: "full",
      flex_direction: "column",
      background_background: "classic",
      background_color: "#F8FAFC",
      border_radius: {
        unit: "px",
        top: "8",
        right: "8",
        bottom: "8",
        left: "8",
        isLinked: true
      },
      padding: {
        unit: "px",
        top: "10",
        right: "12",
        bottom: "10",
        left: "12",
        isLinked: true
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
      {
        id: createId(),
        elType: "widget",
        widgetType: "heading",
        settings: {
          title: "BEST FOR:",
          header_size: "span",
          title_color: "#0C2340",
          typography_typography: "custom",
          typography_font_family: "Plus Jakarta Sans",
          typography_font_size: {
            unit: "px",
            size: 10.5
          },
          typography_font_weight: "800"
        }
      },
      {
        id: createId(),
        elType: "widget",
        widgetType: "text-editor",
        settings: {
          editor: `<p style="margin:2px 0 0;font-size:12.5px;color:#475569;line-height:1.45;">${plan.bestFor}</p>`,
          text_color: "#475569"
        }
      }
    ]
  });

  // What You Get Block
  elements.push({
    id: createId(),
    elType: "container",
    isInner: true,
    settings: {
      content_width: "full",
      flex_direction: "column",
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
      {
        id: createId(),
        elType: "widget",
        widgetType: "heading",
        settings: {
          title: "WHAT YOU GET:",
          header_size: "span",
          title_color: "#0C2340",
          typography_typography: "custom",
          typography_font_family: "Plus Jakarta Sans",
          typography_font_size: {
            unit: "px",
            size: 10.5
          },
          typography_font_weight: "800"
        }
      },
      {
        id: createId(),
        elType: "widget",
        widgetType: "text-editor",
        settings: {
          editor: `<p style="margin:2px 0 0;font-size:12.5px;color:#475569;line-height:1.45;">${plan.whatYouGet}</p>`,
          text_color: "#475569"
        }
      }
    ]
  });

  // Feature List
  elements.push({
    id: createId(),
    elType: "widget",
    widgetType: "icon-list",
    settings: {
      icon_list: plan.features.map(f => ({
        text: f,
        selected_icon: {
          value: "far fa-check-circle",
          library: "fa-regular"
        }
      })),
      icon_color: "#179A9E",
      icon_size: {
        unit: "px",
        size: 13
      },
      space_between: {
        unit: "px",
        size: 10
      },
      text_color: "#334155",
      typography_typography: "custom",
      typography_font_family: "Plus Jakarta Sans",
      typography_font_size: {
        unit: "px",
        size: 12.5
      },
      typography_font_weight: "500",
      margin: {
        unit: "px",
        top: "0",
        right: "0",
        bottom: "24",
        left: "0",
        isLinked: false
      }
    }
  });

  // Button
  elements.push({
    id: createId(),
    elType: "widget",
    widgetType: "button",
    settings: {
      text: "Select Engagement",
      link: {
        url: "#contact",
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
      background_color: plan.isPopular ? "#179A9E" : "#FFFFFF",
      button_text_color: plan.isPopular ? "#FFFFFF" : "#0C2340",
      background_hover_color: plan.isPopular ? "#0F7B7E" : "#179A9E",
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
      border_color: plan.isPopular ? "#179A9E" : "#CBD5E1",
      border_hover_color: plan.isPopular ? "#0F7B7E" : "#179A9E",
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
        right: "16",
        bottom: "12",
        left: "16",
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
  });

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
        top: plan.isPopular ? "2" : "1",
        right: plan.isPopular ? "2" : "1",
        bottom: plan.isPopular ? "2" : "1",
        left: plan.isPopular ? "2" : "1",
        isLinked: true
      },
      border_color: plan.isPopular ? "#179A9E" : "#E2E8F0",
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
        vertical: 8,
        blur: 24,
        spread: -4,
        color: plan.isPopular ? "rgba(23, 154, 158, 0.15)" : "rgba(12, 35, 64, 0.04)"
      },
      padding: {
        unit: "px",
        top: "26",
        right: "22",
        bottom: "26",
        left: "22",
        isLinked: true
      }
    },
    elements: elements
  };
});

// Root Container for Section 7
const waysToWorkSection = {
  version: "0.4",
  title: "Ways to Work With Us - 4 Engagement Models (100% Flexbox Container)",
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
                title: `<span style="display:inline-flex;align-items:center;gap:6px;padding:6px 16px;background-color:#EAF8F8;border:1px solid #A7E8E9;border-radius:50px;color:#179A9E;font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;"><i class=\"fas fa-handshake\"></i> ENGAGEMENT MODELS</span>`,
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
                title: "Ways to <span style=\"color:#179A9E;\">Work With Us</span>",
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
                editor: "<p style=\"margin:0;font-size:16px;color:#4A5568;line-height:1.6;text-align:center;\">Care for every practice, at every scale. Choose how you want to partner with StelleMed.</p>",
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
        // Grid Container (Row of 4 cards)
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
          elements: planCards
        }
      ]
    }
  ]
};

const outDir = path.join(__dirname, 'elementor-editable-templates');
fs.writeFileSync(
  path.join(outDir, 'ways-to-work-with-us-elementor.json'),
  JSON.stringify(waysToWorkSection, null, 2),
  'utf8'
);

fs.writeFileSync(
  path.join(outDir, 'ways-to-work-with-us-plain-text.json'),
  JSON.stringify(waysToWorkSection),
  'utf8'
);

console.log('Successfully generated Section 7 (Ways to Work With Us) with 100% Flexbox Containers!');
