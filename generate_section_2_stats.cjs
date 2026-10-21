const fs = require('fs');
const path = require('path');

function createId() {
  return Math.random().toString(36).substring(2, 9);
}

// Section 2: Performance Statistics Bar
const statsData = [
  {
    icon: 'fas fa-award',
    number: '98%',
    label: 'Clean Claim Rate',
    desc: 'First-pass acceptance rate'
  },
  {
    icon: 'fas fa-network-wired',
    number: '50+',
    label: 'Payer Partners',
    desc: 'Direct clearinghouse electronic ties'
  },
  {
    icon: 'fas fa-user-md',
    number: '1,000+',
    label: 'Healthcare Providers',
    desc: 'Across 30+ medical specialties'
  },
  {
    icon: 'fas fa-thumbs-up',
    number: '99%',
    label: 'Client Satisfaction',
    desc: 'Provider retention & trust'
  }
];

const statItemContainers = statsData.map((item, index) => {
  return {
    id: createId(),
    elType: "container",
    isInner: true,
    settings: {
      content_width: "full",
      width: {
        unit: "%",
        size: 25,
        sizes: []
      },
      width_tablet: {
        unit: "%",
        size: 50,
        sizes: []
      },
      width_mobile: {
        unit: "%",
        size: 100,
        sizes: []
      },
      flex_direction: "row",
      flex_direction_tablet: "row",
      flex_direction_mobile: "row",
      flex_align_items: "center",
      flex_gap: {
        unit: "px",
        size: 16,
        column: "16",
        row: "16"
      },
      padding: {
        unit: "px",
        top: "10",
        right: "16",
        bottom: "10",
        left: "16",
        isLinked: false
      },
      border_border: index < statsData.length - 1 ? "solid" : "none",
      border_width: {
        unit: "px",
        top: "0",
        right: "1",
        bottom: "0",
        left: "0",
        isLinked: false
      },
      border_color: "#E2E8F0"
    },
    elements: [
      // Icon Container (Teal rounded box)
      {
        id: createId(),
        elType: "container",
        isInner: true,
        settings: {
          content_width: "full",
          width: {
            unit: "px",
            size: 52,
            sizes: []
          },
          min_height: {
            unit: "px",
            size: 52
          },
          background_background: "classic",
          background_color: "#E8F6F7",
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
          flex_align_items: "center",
          padding: {
            unit: "px",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            isLinked: true
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
              align: "center",
              primary_color: "#179A9E",
              size: {
                unit: "px",
                size: 22
              }
            }
          }
        ]
      },
      // Text Details Container
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
          },
          padding: {
            unit: "px",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            isLinked: true
          }
        },
        elements: [
          // Stat Number
          {
            id: createId(),
            elType: "widget",
            widgetType: "heading",
            settings: {
              title: item.number,
              header_size: "h3",
              title_color: "#0C2340",
              typography_typography: "custom",
              typography_font_family: "Plus Jakarta Sans",
              typography_font_size: {
                unit: "px",
                size: 32
              },
              typography_font_size_tablet: {
                unit: "px",
                size: 28
              },
              typography_font_size_mobile: {
                unit: "px",
                size: 26
              },
              typography_font_weight: "800",
              typography_line_height: {
                unit: "em",
                size: 1.1
              },
              typography_letter_spacing: {
                unit: "px",
                size: -0.5
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
          },
          // Stat Label
          {
            id: createId(),
            elType: "widget",
            widgetType: "heading",
            settings: {
              title: item.label,
              header_size: "h4",
              title_color: "#1E293B",
              typography_typography: "custom",
              typography_font_family: "Plus Jakarta Sans",
              typography_font_size: {
                unit: "px",
                size: 14
              },
              typography_font_weight: "700",
              typography_line_height: {
                unit: "em",
                size: 1.3
              },
              margin: {
                unit: "px",
                top: "2",
                right: "0",
                bottom: "0",
                left: "0",
                isLinked: false
              }
            }
          },
          // Stat Desc
          {
            id: createId(),
            elType: "widget",
            widgetType: "text-editor",
            settings: {
              editor: `<p style="margin:0;font-size:12px;color:#64748B;line-height:1.4;">${item.desc}</p>`,
              typography_typography: "custom",
              typography_font_family: "Plus Jakarta Sans",
              typography_font_size: {
                unit: "px",
                size: 12
              },
              typography_font_weight: "400",
              text_color: "#64748B",
              margin: {
                unit: "px",
                top: "1",
                right: "0",
                bottom: "0",
                left: "0",
                isLinked: false
              }
            }
          }
        ]
      }
    ]
  };
});

// Root Card Container
const statsSection = {
  version: "0.4",
  title: "Key Performance Commitments & Statistics - StelleMed (100% Flexbox Container)",
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
        flex_direction: "row",
        flex_direction_tablet: "row",
        flex_direction_mobile: "column",
        flex_wrap: "wrap",
        flex_justify_content: "space-between",
        flex_align_items: "stretch",
        flex_gap: {
          unit: "px",
          size: 0,
          column: "0",
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
          top: "20",
          right: "20",
          bottom: "20",
          left: "20",
          isLinked: true
        },
        box_shadow_box_shadow_type: "yes",
        box_shadow_box_shadow: {
          horizontal: 0,
          vertical: 20,
          blur: 40,
          spread: -10,
          color: "rgba(12, 35, 64, 0.10)"
        },
        padding: {
          unit: "px",
          top: "32",
          right: "32",
          bottom: "32",
          left: "32",
          isLinked: true
        },
        padding_tablet: {
          unit: "px",
          top: "24",
          right: "20",
          bottom: "24",
          left: "20",
          isLinked: false
        },
        padding_mobile: {
          unit: "px",
          top: "20",
          right: "16",
          bottom: "20",
          left: "16",
          isLinked: false
        },
        margin: {
          unit: "px",
          top: "-36",
          right: "auto",
          bottom: "40",
          left: "auto",
          isLinked: false
        },
        z_index: 10
      },
      elements: statItemContainers
    }
  ]
};

const outDir = path.join(__dirname, 'elementor-editable-templates');
fs.writeFileSync(
  path.join(outDir, 'performance-statistics-bar-elementor.json'),
  JSON.stringify(statsSection, null, 2),
  'utf8'
);

fs.writeFileSync(
  path.join(outDir, 'performance-statistics-bar-plain-text.json'),
  JSON.stringify(statsSection),
  'utf8'
);

console.log('Successfully generated Section 2 (Statistics Bar) with 100% Flexbox Containers!');
