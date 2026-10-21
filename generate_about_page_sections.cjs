const fs = require('fs');
const path = require('path');

function createId() {
  return Math.random().toString(36).substring(2, 9);
}

const outDir = path.join(__dirname, 'elementor-editable-templates');

// ============================================================================
// SECTION 1: ABOUT US HERO BANNER
// ============================================================================
const aboutHeroSection = {
  version: "0.4",
  title: "About Us - Page Hero Banner (100% Flexbox Container)",
  type: "container",
  content: [
    {
      id: createId(),
      elType: "container",
      isInner: false,
      settings: {
        content_width: "boxed",
        boxed_width: { unit: "px", size: 1220, sizes: [] },
        flex_direction: "column",
        flex_align_items: "center",
        flex_gap: { unit: "px", size: 0, column: "0", row: "0" },
        background_background: "gradient",
        background_color: "#FFFFFF",
        background_color_b: "#EBF6F8",
        background_gradient_type: "radial",
        background_gradient_position: "center center",
        padding: { unit: "px", top: "70", right: "20", bottom: "70", left: "20", isLinked: false },
        padding_tablet: { unit: "px", top: "50", right: "20", bottom: "50", left: "20", isLinked: false },
        padding_mobile: { unit: "px", top: "35", right: "16", bottom: "35", left: "16", isLinked: false }
      },
      elements: [
        // Breadcrumb
        {
          id: createId(),
          elType: "widget",
          widgetType: "heading",
          settings: {
            title: `<nav style="font-size:13.5px;font-weight:600;color:#64748B;"><a href="/" style="color:#64748B;text-decoration:none;">Home</a> <span style="margin:0 8px;color:#94A3B8;">&gt;</span> <span style="color:#179A9E;">About Us</span></nav>`,
            header_size: "span",
            align: "center",
            margin: { unit: "px", top: "0", right: "0", bottom: "16", left: "0", isLinked: false }
          }
        },
        // Eyebrow Pill
        {
          id: createId(),
          elType: "widget",
          widgetType: "heading",
          settings: {
            title: `<span style="display:inline-flex;align-items:center;gap:6px;padding:6px 16px;background-color:#EAF8F8;border:1px solid #A7E8E9;border-radius:50px;color:#179A9E;font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;"><i class=\"fas fa-file-invoice\"></i> OFFICIAL COMPANY PROFILE</span>`,
            header_size: "span",
            align: "center",
            title_color: "#179A9E",
            margin: { unit: "px", top: "0", right: "0", bottom: "16", left: "0", isLinked: false }
          }
        },
        // Main Heading
        {
          id: createId(),
          elType: "widget",
          widgetType: "heading",
          settings: {
            title: "About StelleMed",
            header_size: "h1",
            align: "center",
            title_color: "#0C2340",
            typography_typography: "custom",
            typography_font_family: "Plus Jakarta Sans",
            typography_font_size: { unit: "px", size: 48 },
            typography_font_size_tablet: { unit: "px", size: 38 },
            typography_font_size_mobile: { unit: "px", size: 32 },
            typography_font_weight: "800",
            typography_line_height: { unit: "em", size: 1.15 },
            typography_letter_spacing: { unit: "px", size: -0.5 },
            margin: { unit: "px", top: "0", right: "0", bottom: "16", left: "0", isLinked: false }
          }
        },
        // Subtitle Description
        {
          id: createId(),
          elType: "widget",
          widgetType: "text-editor",
          settings: {
            editor: "<p style=\"margin:0 auto;max-width:720px;font-size:16.5px;color:#4A5568;line-height:1.65;text-align:center;\">A medical billing and revenue cycle management company serving healthcare providers across the U.S. One partner for both billing and technology, backed by Corvit and StelleCloud.</p>",
            typography_typography: "custom",
            typography_font_family: "Plus Jakarta Sans",
            typography_font_size: { unit: "px", size: 16.5 },
            typography_font_weight: "400",
            text_color: "#4A5568",
            margin: { unit: "px", top: "0", right: "0", bottom: "28", left: "0", isLinked: false }
          }
        },
        // Buttons Row
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
            flex_gap: { unit: "px", size: 14, column: "14", row: "12" }
          },
          elements: [
            // Button 1: Schedule Consultation
            {
              id: createId(),
              elType: "widget",
              widgetType: "button",
              settings: {
                text: "Schedule Consultation",
                link: { url: "#contact", is_external: false, nofollow: false },
                button_type: "default",
                selected_icon: { value: "far fa-calendar-alt", library: "fa-regular" },
                icon_align: "left",
                icon_indent: { unit: "px", size: 8 },
                background_color: "#179A9E",
                button_text_color: "#FFFFFF",
                background_hover_color: "#0F7B7E",
                hover_color: "#FFFFFF",
                border_radius: { unit: "px", top: "10", right: "10", bottom: "10", left: "10", isLinked: true },
                padding: { unit: "px", top: "13", right: "24", bottom: "13", left: "24", isLinked: false },
                typography_typography: "custom",
                typography_font_family: "Plus Jakarta Sans",
                typography_font_size: { unit: "px", size: 14.5 },
                typography_font_weight: "700"
              }
            },
            // Button 2: Explore Our Services
            {
              id: createId(),
              elType: "widget",
              widgetType: "button",
              settings: {
                text: "Explore Our Services",
                link: { url: "/services", is_external: false, nofollow: false },
                button_type: "default",
                background_color: "#FFFFFF",
                button_text_color: "#0C2340",
                background_hover_color: "#F1F5F9",
                hover_color: "#0C2340",
                border_border: "solid",
                border_width: { unit: "px", top: "1.5", right: "1.5", bottom: "1.5", left: "1.5", isLinked: true },
                border_color: "#CBD5E1",
                border_radius: { unit: "px", top: "10", right: "10", bottom: "10", left: "10", isLinked: true },
                padding: { unit: "px", top: "13", right: "24", bottom: "13", left: "24", isLinked: false },
                typography_typography: "custom",
                typography_font_family: "Plus Jakarta Sans",
                typography_font_size: { unit: "px", size: 14.5 },
                typography_font_weight: "700"
              }
            }
          ]
        }
      ]
    }
  ]
};

// ============================================================================
// SECTION 2: WHO WE ARE & MISSION (TWO CONTAINERS: LEFT CONTENT & RIGHT IMAGE)
// ============================================================================
const aboutWhoWeAreSection = {
  version: "0.4",
  title: "About Us - One Partner for Both Billing & Technology (100% Flexbox Container)",
  type: "container",
  content: [
    {
      id: createId(),
      elType: "container",
      isInner: false,
      settings: {
        content_width: "boxed",
        boxed_width: { unit: "px", size: 1220, sizes: [] },
        flex_direction: "row",
        flex_direction_tablet: "column",
        flex_direction_mobile: "column",
        flex_justify_content: "space-between",
        flex_align_items: "center",
        flex_gap: { unit: "px", size: 50, column: "50", row: "40" },
        background_background: "classic",
        background_color: "#FFFFFF",
        padding: { unit: "px", top: "80", right: "20", bottom: "80", left: "20", isLinked: false },
        padding_tablet: { unit: "px", top: "60", right: "20", bottom: "60", left: "20", isLinked: false },
        padding_mobile: { unit: "px", top: "40", right: "16", bottom: "40", left: "16", isLinked: false }
      },
      elements: [
        // Left Column Container
        {
          id: createId(),
          elType: "container",
          isInner: true,
          settings: {
            content_width: "full",
            width: { unit: "%", size: 52, sizes: [] },
            width_tablet: { unit: "%", size: 100, sizes: [] },
            width_mobile: { unit: "%", size: 100, sizes: [] },
            flex_direction: "column",
            flex_align_items: "flex-start",
            flex_gap: { unit: "px", size: 0, column: "0", row: "0" }
          },
          elements: [
            // Pill Eyebrow
            {
              id: createId(),
              elType: "widget",
              widgetType: "heading",
              settings: {
                title: `<span style="display:inline-flex;align-items:center;gap:6px;padding:5px 14px;background-color:#EAF8F8;border:1px solid #A7E8E9;border-radius:50px;color:#179A9E;font-size:11.5px;font-weight:800;letter-spacing:1px;text-transform:uppercase;">WHO WE ARE</span>`,
                header_size: "span",
                title_color: "#179A9E",
                margin: { unit: "px", top: "0", right: "0", bottom: "14", left: "0", isLinked: false }
              }
            },
            // Title
            {
              id: createId(),
              elType: "widget",
              widgetType: "heading",
              settings: {
                title: "One Partner for Both Billing & Technology",
                header_size: "h2",
                title_color: "#0C2340",
                typography_typography: "custom",
                typography_font_family: "Plus Jakarta Sans",
                typography_font_size: { unit: "px", size: 34 },
                typography_font_size_tablet: { unit: "px", size: 30 },
                typography_font_size_mobile: { unit: "px", size: 26 },
                typography_font_weight: "800",
                typography_line_height: { unit: "em", size: 1.25 },
                margin: { unit: "px", top: "0", right: "0", bottom: "16", left: "0", isLinked: false }
              }
            },
            // Paragraph
            {
              id: createId(),
              elType: "widget",
              widgetType: "text-editor",
              settings: {
                editor: "<p style=\"margin:0;font-size:15px;color:#4A5568;line-height:1.7;\">StelleMed provides medical billing and revenue cycle management services to healthcare practices across the United States. As one trusted partner for both billing operations and technology infrastructure, we are backed by the engineering excellence of Corvit and StelleCloud.</p>",
                typography_typography: "custom",
                typography_font_family: "Plus Jakarta Sans",
                typography_font_size: { unit: "px", size: 15 },
                typography_font_weight: "400",
                text_color: "#4A5568",
                margin: { unit: "px", top: "0", right: "0", bottom: "24", left: "0", isLinked: false }
              }
            },
            // Mission Card Box
            {
              id: createId(),
              elType: "container",
              isInner: true,
              settings: {
                content_width: "full",
                flex_direction: "column",
                flex_gap: { unit: "px", size: 4, column: "4", row: "4" },
                background_background: "classic",
                background_color: "#F0FBFB",
                border_border: "solid",
                border_width: { unit: "px", top: "0", right: "0", bottom: "0", left: "4", isLinked: false },
                border_color: "#179A9E",
                border_radius: { unit: "px", top: "0", right: "12", bottom: "12", left: "0", isLinked: false },
                padding: { unit: "px", top: "18", right: "20", bottom: "18", left: "20", isLinked: false },
                margin: { unit: "px", top: "0", right: "0", bottom: "24", left: "0", isLinked: false }
              },
              elements: [
                {
                  id: createId(),
                  elType: "widget",
                  widgetType: "heading",
                  settings: {
                    title: "OUR MISSION",
                    header_size: "span",
                    title_color: "#179A9E",
                    typography_typography: "custom",
                    typography_font_family: "Plus Jakarta Sans",
                    typography_font_size: { unit: "px", size: 11 },
                    typography_font_weight: "800",
                    typography_letter_spacing: { unit: "px", size: 0.8 }
                  }
                },
                {
                  id: createId(),
                  elType: "widget",
                  widgetType: "heading",
                  settings: {
                    title: "\"To simplify the revenue cycle for healthcare providers, from insurance claims to patient payments, so they can focus on patient care.\"",
                    header_size: "h4",
                    title_color: "#0C2340",
                    typography_typography: "custom",
                    typography_font_family: "Plus Jakarta Sans",
                    typography_font_size: { unit: "px", size: 15 },
                    typography_font_weight: "700",
                    typography_line_height: { unit: "em", size: 1.45 }
                  }
                }
              ]
            },
            // Stats Row (2 Boxes side-by-side)
            {
              id: createId(),
              elType: "container",
              isInner: true,
              settings: {
                content_width: "full",
                flex_direction: "row",
                flex_direction_mobile: "column",
                flex_justify_content: "space-between",
                flex_gap: { unit: "px", size: 16, column: "16", row: "12" }
              },
              elements: [
                // Stat 1: 25+ Years
                {
                  id: createId(),
                  elType: "container",
                  isInner: true,
                  settings: {
                    content_width: "full",
                    width: { unit: "%", size: 48, sizes: [] },
                    width_mobile: { unit: "%", size: 100, sizes: [] },
                    flex_direction: "column",
                    background_background: "classic",
                    background_color: "#F8FAFC",
                    border_border: "solid",
                    border_width: { unit: "px", top: "0", right: "0", bottom: "0", left: "4", isLinked: false },
                    border_color: "#0C2340",
                    border_radius: { unit: "px", top: "0", right: "10", bottom: "10", left: "0", isLinked: false },
                    padding: { unit: "px", top: "14", right: "16", bottom: "14", left: "16", isLinked: true }
                  },
                  elements: [
                    {
                      id: createId(),
                      elType: "widget",
                      widgetType: "heading",
                      settings: {
                        title: "25+ Years",
                        header_size: "h3",
                        title_color: "#0C2340",
                        typography_typography: "custom",
                        typography_font_family: "Plus Jakarta Sans",
                        typography_font_size: { unit: "px", size: 24 },
                        typography_font_weight: "800",
                        margin: { unit: "px", top: "0", right: "0", bottom: "2", left: "0", isLinked: false }
                      }
                    },
                    {
                      id: createId(),
                      elType: "widget",
                      widgetType: "heading",
                      settings: {
                        title: "Technology experience backed by Corvit & StelleCloud",
                        header_size: "span",
                        title_color: "#64748B",
                        typography_typography: "custom",
                        typography_font_family: "Plus Jakarta Sans",
                        typography_font_size: { unit: "px", size: 12 },
                        typography_font_weight: "500",
                        typography_line_height: { unit: "em", size: 1.4 }
                      }
                    }
                  ]
                },
                // Stat 2: 350,000+
                {
                  id: createId(),
                  elType: "container",
                  isInner: true,
                  settings: {
                    content_width: "full",
                    width: { unit: "%", size: 48, sizes: [] },
                    width_mobile: { unit: "%", size: 100, sizes: [] },
                    flex_direction: "column",
                    background_background: "classic",
                    background_color: "#F8FAFC",
                    border_border: "solid",
                    border_width: { unit: "px", top: "0", right: "0", bottom: "0", left: "4", isLinked: false },
                    border_color: "#179A9E",
                    border_radius: { unit: "px", top: "0", right: "10", bottom: "10", left: "0", isLinked: false },
                    padding: { unit: "px", top: "14", right: "16", bottom: "14", left: "16", isLinked: true }
                  },
                  elements: [
                    {
                      id: createId(),
                      elType: "widget",
                      widgetType: "heading",
                      settings: {
                        title: "350,000+",
                        header_size: "h3",
                        title_color: "#179A9E",
                        typography_typography: "custom",
                        typography_font_family: "Plus Jakarta Sans",
                        typography_font_size: { unit: "px", size: 24 },
                        typography_font_weight: "800",
                        margin: { unit: "px", top: "0", right: "0", bottom: "2", left: "0", isLinked: false }
                      }
                    },
                    {
                      id: createId(),
                      elType: "widget",
                      widgetType: "heading",
                      settings: {
                        title: "Professionals trained by parent group",
                        header_size: "span",
                        title_color: "#64748B",
                        typography_typography: "custom",
                        typography_font_family: "Plus Jakarta Sans",
                        typography_font_size: { unit: "px", size: 12 },
                        typography_font_weight: "500",
                        typography_line_height: { unit: "em", size: 1.4 }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        // Right Column: Image with Floating Dark Badge Card
        {
          id: createId(),
          elType: "container",
          isInner: true,
          settings: {
            content_width: "full",
            width: { unit: "%", size: 44, sizes: [] },
            width_tablet: { unit: "%", size: 100, sizes: [] },
            width_mobile: { unit: "%", size: 100, sizes: [] },
            flex_direction: "column",
            position: "relative"
          },
          elements: [
            // Image Box
            {
              id: createId(),
              elType: "container",
              isInner: true,
              settings: {
                content_width: "full",
                border_radius: { unit: "px", top: "20", right: "20", bottom: "20", left: "20", isLinked: true },
                overflow: "hidden",
                box_shadow_box_shadow_type: "yes",
                box_shadow_box_shadow: { horizontal: 0, vertical: 16, blur: 40, spread: -5, color: "rgba(12, 35, 64, 0.12)" }
              },
              elements: [
                {
                  id: createId(),
                  elType: "widget",
                  widgetType: "image",
                  settings: {
                    image: { url: "https://raw.githubusercontent.com/waqasalidev/sm/main/public/service1.jpg" },
                    image_size: "full"
                  }
                }
              ]
            },
            // Floating Dark Badge Card
            {
              id: createId(),
              elType: "container",
              isInner: true,
              settings: {
                content_width: "full",
                width: { unit: "px", size: 280, sizes: [] },
                width_mobile: { unit: "%", size: 90, sizes: [] },
                flex_direction: "column",
                background_background: "classic",
                background_color: "#0C2340",
                border_radius: { unit: "px", top: "14", right: "14", bottom: "14", left: "14", isLinked: true },
                box_shadow_box_shadow_type: "yes",
                box_shadow_box_shadow: { horizontal: 0, vertical: 12, blur: 30, spread: 0, color: "rgba(0, 0, 0, 0.25)" },
                padding: { unit: "px", top: "18", right: "20", bottom: "18", left: "20", isLinked: true },
                margin: { unit: "px", top: "-50", right: "0", bottom: "0", left: "auto", isLinked: false },
                z_index: 2
              },
              elements: [
                {
                  id: createId(),
                  elType: "widget",
                  widgetType: "heading",
                  settings: {
                    title: `<span style="display:inline-flex;align-items:center;gap:6px;color:#179A9E;font-size:13px;font-weight:700;"><i class=\"fas fa-shield-alt\"></i> StelleCloud &amp; Corvit</span>`,
                    header_size: "span",
                    margin: { unit: "px", top: "0", right: "0", bottom: "4", left: "0", isLinked: false }
                  }
                },
                {
                  id: createId(),
                  elType: "widget",
                  widgetType: "text-editor",
                  settings: {
                    editor: "<p style=\"margin:0;font-size:12px;color:#CBD5E1;line-height:1.45;\">Parent group founded in 2000, delivering enterprise technology, cybersecurity, and solutions nationwide.</p>",
                    text_color: "#CBD5E1"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

// ============================================================================
// SECTION 3: OUR COMMITMENTS (4 CARDS)
// ============================================================================
const commitmentsData = [
  {
    icon: "far fa-clock",
    stat: "Within Seconds",
    title: "Eligibility Verifications",
    desc: "Real-time 270/271 electronic checks confirm patient coverage and copays before service delivery."
  },
  {
    icon: "fas fa-paper-plane",
    stat: "24–48 Hours",
    title: "Claims Submitted",
    desc: "Rapid clean-claim scrubbing and EDI clearinghouse dispatch to shorten days in accounts receivable."
  },
  {
    icon: "fas fa-dollar-sign",
    stat: "Same-Day",
    title: "Payment Posting",
    desc: "Immediate reconciliation and posting of electronic remittance advices (ERAs) and patient copays."
  },
  {
    icon: "fas fa-chart-line",
    stat: "Monthly",
    title: "Performance Review",
    desc: "Comprehensive executive meetings with your dedicated account manager analyzing financial KPIs."
  }
];

const commitmentCards = commitmentsData.map((item) => {
  return {
    id: createId(),
    elType: "container",
    isInner: true,
    settings: {
      content_width: "full",
      width: { unit: "%", size: 23.2, sizes: [] },
      width_tablet: { unit: "%", size: 48, sizes: [] },
      width_mobile: { unit: "%", size: 100, sizes: [] },
      flex_direction: "column",
      flex_align_items: "flex-start",
      flex_gap: { unit: "px", size: 0, column: "0", row: "0" },
      background_background: "classic",
      background_color: "#FFFFFF",
      border_border: "solid",
      border_width: { unit: "px", top: "1", right: "1", bottom: "1", left: "1", isLinked: true },
      border_color: "#E2E8F0",
      border_radius: { unit: "px", top: "16", right: "16", bottom: "16", left: "16", isLinked: true },
      box_shadow_box_shadow_type: "yes",
      box_shadow_box_shadow: { horizontal: 0, vertical: 4, blur: 16, spread: -2, color: "rgba(12, 35, 64, 0.04)" },
      padding: { unit: "px", top: "28", right: "22", bottom: "28", left: "22", isLinked: true }
    },
    elements: [
      // Icon
      {
        id: createId(),
        elType: "widget",
        widgetType: "icon",
        settings: {
          selected_icon: {
            value: item.icon,
            library: item.icon.startsWith("far") ? "fa-regular" : "fa-solid"
          },
          view: "default",
          primary_color: "#179A9E",
          size: { unit: "px", size: 24 },
          margin: { unit: "px", top: "0", right: "0", bottom: "14", left: "0", isLinked: false }
        }
      },
      // Stat Highlight (e.g. Within Seconds)
      {
        id: createId(),
        elType: "widget",
        widgetType: "heading",
        settings: {
          title: item.stat,
          header_size: "h4",
          title_color: "#179A9E",
          typography_typography: "custom",
          typography_font_family: "Plus Jakarta Sans",
          typography_font_size: { unit: "px", size: 18 },
          typography_font_weight: "800",
          margin: { unit: "px", top: "0", right: "0", bottom: "4", left: "0", isLinked: false }
        }
      },
      // Title
      {
        id: createId(),
        elType: "widget",
        widgetType: "heading",
        settings: {
          title: item.title,
          header_size: "h3",
          title_color: "#0C2340",
          typography_typography: "custom",
          typography_font_family: "Plus Jakarta Sans",
          typography_font_size: { unit: "px", size: 16 },
          typography_font_weight: "700",
          margin: { unit: "px", top: "0", right: "0", bottom: "8", left: "0", isLinked: false }
        }
      },
      // Desc
      {
        id: createId(),
        elType: "widget",
        widgetType: "text-editor",
        settings: {
          editor: `<p style="margin:0;font-size:13.5px;color:#64748B;line-height:1.6;">${item.desc}</p>`,
          typography_typography: "custom",
          typography_font_family: "Plus Jakarta Sans",
          typography_font_size: { unit: "px", size: 13.5 },
          typography_font_weight: "400",
          text_color: "#64748B"
        }
      }
    ]
  };
});

const aboutCommitmentsSection = {
  version: "0.4",
  title: "About Us - Our Commitments (100% Flexbox Container)",
  type: "container",
  content: [
    {
      id: createId(),
      elType: "container",
      isInner: false,
      settings: {
        content_width: "boxed",
        boxed_width: { unit: "px", size: 1220, sizes: [] },
        flex_direction: "column",
        flex_align_items: "center",
        flex_gap: { unit: "px", size: 0, column: "0", row: "0" },
        background_background: "classic",
        background_color: "#F8FBFC",
        padding: { unit: "px", top: "80", right: "20", bottom: "80", left: "20", isLinked: false },
        padding_tablet: { unit: "px", top: "60", right: "20", bottom: "60", left: "20", isLinked: false },
        padding_mobile: { unit: "px", top: "40", right: "16", bottom: "40", left: "16", isLinked: false }
      },
      elements: [
        // Header
        {
          id: createId(),
          elType: "container",
          isInner: true,
          settings: {
            content_width: "full",
            width: { unit: "px", size: 820, sizes: [] },
            width_tablet: { unit: "%", size: 100, sizes: [] },
            width_mobile: { unit: "%", size: 100, sizes: [] },
            flex_direction: "column",
            flex_align_items: "center",
            margin: { unit: "px", top: "0", right: "auto", bottom: "44", left: "auto", isLinked: false }
          },
          elements: [
            // Pill
            {
              id: createId(),
              elType: "widget",
              widgetType: "heading",
              settings: {
                title: `<span style="display:inline-flex;align-items:center;gap:6px;padding:6px 16px;background-color:#EAF8F8;border:1px solid #A7E8E9;border-radius:50px;color:#179A9E;font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;">ACCOUNTABILITY IN ACTION</span>`,
                header_size: "span",
                align: "center",
                title_color: "#179A9E",
                margin: { unit: "px", top: "0", right: "0", bottom: "16", left: "0", isLinked: false }
              }
            },
            // Title
            {
              id: createId(),
              elType: "widget",
              widgetType: "heading",
              settings: {
                title: "Our <span style=\"color:#179A9E;\">Commitments</span>",
                header_size: "h2",
                align: "center",
                title_color: "#0C2340",
                typography_typography: "custom",
                typography_font_family: "Plus Jakarta Sans",
                typography_font_size: { unit: "px", size: 40 },
                typography_font_size_tablet: { unit: "px", size: 32 },
                typography_font_size_mobile: { unit: "px", size: 28 },
                typography_font_weight: "800",
                typography_line_height: { unit: "em", size: 1.2 },
                typography_letter_spacing: { unit: "px", size: -0.5 },
                margin: { unit: "px", top: "0", right: "0", bottom: "14", left: "0", isLinked: false }
              }
            },
            // Subtitle
            {
              id: createId(),
              elType: "widget",
              widgetType: "text-editor",
              settings: {
                editor: "<p style=\"margin:0;font-size:16px;color:#4A5568;line-height:1.6;text-align:center;\">The four foundational operational promises that guide every client partnership at StelleMed.</p>",
                typography_typography: "custom",
                typography_font_family: "Plus Jakarta Sans",
                typography_font_size: { unit: "px", size: 16 },
                typography_font_weight: "400",
                text_color: "#4A5568"
              }
            }
          ]
        },
        // Grid Container
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
            flex_gap: { unit: "px", size: 20, column: "20", row: "20" }
          },
          elements: commitmentCards
        }
      ]
    }
  ]
};

// ============================================================================
// SECTION 4: BACKED BY CORVIT & STELLECLOUD (CREDENTIALS & PARTNER BADGES)
// ============================================================================
const credentialsRow1 = ['Cisco', 'Microsoft', 'AWS', 'VMware', 'Fortinet', 'Palo Alto Networks', 'CompTIA', 'PECB'];
const credentialsRow2 = ['EC-Council', 'ISC2', 'SAP', 'IBM', 'Dell EMC', 'CrowdStrike'];

function createBadgeRow(badges) {
  return {
    id: createId(),
    elType: "container",
    isInner: true,
    settings: {
      content_width: "full",
      flex_direction: "row",
      flex_wrap: "wrap",
      flex_justify_content: "center",
      flex_align_items: "center",
      flex_gap: { unit: "px", size: 12, column: "12", row: "12" },
      margin: { unit: "px", top: "0", right: "0", bottom: "12", left: "0", isLinked: false }
    },
    elements: badges.map(badge => {
      return {
        id: createId(),
        elType: "widget",
        widgetType: "heading",
        settings: {
          title: `<span style="display:inline-block;padding:8px 18px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;font-size:13.5px;font-weight:600;color:#0C2340;box-shadow:0 1px 3px rgba(0,0,0,0.03);">${badge}</span>`,
          header_size: "span"
        }
      };
    })
  };
}

const aboutBackedByCorvitSection = {
  version: "0.4",
  title: "About Us - Backed by Corvit & StelleCloud (100% Flexbox Container)",
  type: "container",
  content: [
    {
      id: createId(),
      elType: "container",
      isInner: false,
      settings: {
        content_width: "boxed",
        boxed_width: { unit: "px", size: 1220, sizes: [] },
        flex_direction: "column",
        flex_align_items: "center",
        flex_gap: { unit: "px", size: 0, column: "0", row: "0" },
        background_background: "classic",
        background_color: "#FFFFFF",
        padding: { unit: "px", top: "80", right: "20", bottom: "80", left: "20", isLinked: false },
        padding_tablet: { unit: "px", top: "60", right: "20", bottom: "60", left: "20", isLinked: false },
        padding_mobile: { unit: "px", top: "40", right: "16", bottom: "40", left: "16", isLinked: false }
      },
      elements: [
        // Header
        {
          id: createId(),
          elType: "container",
          isInner: true,
          settings: {
            content_width: "full",
            width: { unit: "px", size: 820, sizes: [] },
            width_tablet: { unit: "%", size: 100, sizes: [] },
            width_mobile: { unit: "%", size: 100, sizes: [] },
            flex_direction: "column",
            flex_align_items: "center",
            margin: { unit: "px", top: "0", right: "auto", bottom: "36", left: "auto", isLinked: false }
          },
          elements: [
            // Pill
            {
              id: createId(),
              elType: "widget",
              widgetType: "heading",
              settings: {
                title: `<span style="display:inline-flex;align-items:center;gap:6px;padding:6px 16px;background-color:#EAF8F8;border:1px solid #A7E8E9;border-radius:50px;color:#179A9E;font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;"><i class=\"fas fa-network-wired\"></i> PEDIGREE &amp; REACH</span>`,
                header_size: "span",
                align: "center",
                title_color: "#179A9E",
                margin: { unit: "px", top: "0", right: "0", bottom: "16", left: "0", isLinked: false }
              }
            },
            // Title
            {
              id: createId(),
              elType: "widget",
              widgetType: "heading",
              settings: {
                title: "Backed by <span style=\"color:#179A9E;\">Corvit &amp; StelleCloud</span>",
                header_size: "h2",
                align: "center",
                title_color: "#0C2340",
                typography_typography: "custom",
                typography_font_family: "Plus Jakarta Sans",
                typography_font_size: { unit: "px", size: 40 },
                typography_font_size_tablet: { unit: "px", size: 32 },
                typography_font_size_mobile: { unit: "px", size: 28 },
                typography_font_weight: "800",
                typography_line_height: { unit: "em", size: 1.2 },
                typography_letter_spacing: { unit: "px", size: -0.5 },
                margin: { unit: "px", top: "0", right: "0", bottom: "14", left: "0", isLinked: false }
              }
            },
            // Subtitle
            {
              id: createId(),
              elType: "widget",
              widgetType: "text-editor",
              settings: {
                editor: "<p style=\"margin:0;font-size:16px;color:#4A5568;line-height:1.65;text-align:center;\">StelleMed is backed by StelleCloud and Corvit, an IT training and solutions company founded in 2000 that has trained more than 350,000 professionals. Through them, our group works with leading technology and business organizations.</p>",
                typography_typography: "custom",
                typography_font_family: "Plus Jakarta Sans",
                typography_font_size: { unit: "px", size: 16 },
                typography_font_weight: "400",
                text_color: "#4A5568"
              }
            }
          ]
        },
        // Partner Badge Rows
        createBadgeRow(credentialsRow1),
        createBadgeRow(credentialsRow2)
      ]
    }
  ]
};

// ============================================================================
// SECTION 5: ABOUT PAGE BOTTOM CALL TO ACTION
// ============================================================================
const aboutCTABannerSection = {
  version: "0.4",
  title: "About Us - Partner With StelleMed Call to Action (100% Flexbox Container)",
  type: "container",
  content: [
    {
      id: createId(),
      elType: "container",
      isInner: false,
      settings: {
        content_width: "boxed",
        boxed_width: { unit: "px", size: 1220, sizes: [] },
        flex_direction: "column",
        flex_align_items: "center",
        flex_gap: { unit: "px", size: 0, column: "0", row: "0" },
        background_background: "classic",
        background_color: "#081D30",
        border_radius: { unit: "px", top: "20", right: "20", bottom: "20", left: "20", isLinked: true },
        padding: { unit: "px", top: "60", right: "24", bottom: "60", left: "24", isLinked: false },
        padding_mobile: { unit: "px", top: "40", right: "16", bottom: "40", left: "16", isLinked: false },
        margin: { unit: "px", top: "20", right: "auto", bottom: "40", left: "auto", isLinked: false }
      },
      elements: [
        {
          id: createId(),
          elType: "widget",
          widgetType: "heading",
          settings: {
            title: "Let's Find Your Missing Revenue",
            header_size: "h2",
            align: "center",
            title_color: "#FFFFFF",
            typography_typography: "custom",
            typography_font_family: "Plus Jakarta Sans",
            typography_font_size: { unit: "px", size: 36 },
            typography_font_size_tablet: { unit: "px", size: 30 },
            typography_font_size_mobile: { unit: "px", size: 26 },
            typography_font_weight: "800",
            typography_line_height: { unit: "em", size: 1.2 },
            margin: { unit: "px", top: "0", right: "0", bottom: "14", left: "0", isLinked: false }
          }
        },
        {
          id: createId(),
          elType: "widget",
          widgetType: "text-editor",
          settings: {
            editor: "<p style=\"margin:0 auto;max-width:680px;font-size:16px;color:#94A3B8;line-height:1.6;text-align:center;\">Schedule an initial consultation to meet your dedicated billing team and learn how we can simplify your revenue cycle.</p>",
            typography_typography: "custom",
            typography_font_family: "Plus Jakarta Sans",
            typography_font_size: { unit: "px", size: 16 },
            typography_font_weight: "400",
            text_color: "#94A3B8",
            margin: { unit: "px", top: "0", right: "0", bottom: "28", left: "0", isLinked: false }
          }
        },
        {
          id: createId(),
          elType: "widget",
          widgetType: "button",
          settings: {
            text: "Partner With StelleMed",
            link: { url: "#contact", is_external: false, nofollow: false },
            button_type: "default",
            selected_icon: { value: "fas fa-arrow-right", library: "fa-solid" },
            icon_align: "right",
            icon_indent: { unit: "px", size: 8 },
            background_color: "#179A9E",
            button_text_color: "#FFFFFF",
            background_hover_color: "#0F7B7E",
            hover_color: "#FFFFFF",
            border_radius: { unit: "px", top: "10", right: "10", bottom: "10", left: "10", isLinked: true },
            padding: { unit: "px", top: "14", right: "26", bottom: "14", left: "26", isLinked: false },
            typography_typography: "custom",
            typography_font_family: "Plus Jakarta Sans",
            typography_font_size: { unit: "px", size: 14.5 },
            typography_font_weight: "700"
          }
        }
      ]
    }
  ]
};

// ============================================================================
// COMPLETE ABOUT US PAGE TEMPLATE (ALL 5 SECTIONS IN ONE FULL-PAGE TEMPLATE)
// ============================================================================
const completeAboutPage = {
  version: "0.4",
  title: "About Us - Complete Page (100% Flexbox Container)",
  type: "container",
  content: [
    aboutHeroSection.content[0],
    aboutWhoWeAreSection.content[0],
    aboutCommitmentsSection.content[0],
    aboutBackedByCorvitSection.content[0],
    aboutCTABannerSection.content[0]
  ]
};

// Save All Individual Sections & Complete Page
function saveTemplate(filename, data) {
  const jsonPath = path.join(outDir, `${filename}.json`);
  const plainPath = path.join(outDir, `${filename.replace('-elementor', '-plain-text')}.json`);
  fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
  fs.writeFileSync(plainPath, JSON.stringify(data), 'utf8');
  console.log(`Saved: ${filename}.json and plain-text.json`);
}

saveTemplate('about-1-hero-elementor', aboutHeroSection);
saveTemplate('about-2-who-we-are-elementor', aboutWhoWeAreSection);
saveTemplate('about-3-our-commitments-elementor', aboutCommitmentsSection);
saveTemplate('about-4-backed-by-corvit-elementor', aboutBackedByCorvitSection);
saveTemplate('about-5-cta-banner-elementor', aboutCTABannerSection);
saveTemplate('about-us-complete-page-elementor', completeAboutPage);

console.log("\nAll About Us page sections successfully generated!");
