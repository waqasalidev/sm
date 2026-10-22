const fs = require('fs');
const path = require('path');

function createId() {
  return Math.random().toString(36).substring(2, 9);
}

const outDir = path.join(__dirname, 'elementor-editable-templates');

// Helper to save Elementor template and matching plain-text JSON
function saveTemplate(name, contentNode, title) {
  const tpl = {
    version: "0.4",
    title: title,
    type: "container",
    content: Array.isArray(contentNode) ? contentNode : [contentNode]
  };
  fs.writeFileSync(path.join(outDir, `${name}.json`), JSON.stringify(tpl, null, 2), 'utf8');
  fs.writeFileSync(path.join(outDir, `${name.replace('-elementor', '-plain-text')}.json`), JSON.stringify(tpl), 'utf8');
  console.log(`Saved: ${name}.json`);
}

// ============================================================================
// PAGE 1: SERVICES OVERVIEW (Matching media_1792620962803.png)
// ============================================================================

// SECTION 1: HERO SECTION
const servicesHeroSection = {
  id: createId(),
  elType: "container",
  isInner: false,
  settings: {
    content_width: "boxed",
    boxed_width: { unit: "px", size: 1220, sizes: [] },
    flex_direction: "column",
    flex_align_items: "center",
    flex_gap: { unit: "px", size: 18, column: "18", row: "18" },
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
        title: `<nav style="font-size:13.5px;font-weight:600;color:#64748B;display:inline-block;margin-bottom:12px;"><a href="/" style="color:#64748B;text-decoration:none;">Home</a> <span style="margin:0 8px;color:#94A3B8;">&gt;</span> <span style="color:#179A9E;">Services Overview</span></nav>`,
        header_size: "div",
        align: "center",
        _margin: { unit: "px", top: "0", right: "0", bottom: "12", left: "0", isLinked: false },
        margin: { unit: "px", top: "0", right: "0", bottom: "12", left: "0", isLinked: false }
      }
    },
    // Eyebrow Pill Badge
    {
      id: createId(),
      elType: "widget",
      widgetType: "heading",
      settings: {
        title: `<div style="display:inline-flex;align-items:center;gap:6px;padding:6px 18px;background-color:#EAF8F8;border:1px solid #A7E8E9;border-radius:50px;color:#179A9E;font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;margin-bottom:14px;line-height:1.4;"><i class="fas fa-chart-pie" style="font-size:12px;"></i> FULL-SPECTRUM REVENUE CYCLE MANAGEMENT</div>`,
        header_size: "div",
        align: "center",
        title_color: "#179A9E",
        _margin: { unit: "px", top: "0", right: "0", bottom: "14", left: "0", isLinked: false },
        margin: { unit: "px", top: "0", right: "0", bottom: "14", left: "0", isLinked: false }
      }
    },
    // Main Heading
    {
      id: createId(),
      elType: "widget",
      widgetType: "heading",
      settings: {
        title: "Specialized Solutions for Modern Healthcare",
        header_size: "h1",
        align: "center",
        title_color: "#0C2340",
        typography_typography: "custom",
        typography_font_family: "Plus Jakarta Sans",
        typography_font_size: { unit: "px", size: 46 },
        typography_font_size_tablet: { unit: "px", size: 36 },
        typography_font_size_mobile: { unit: "px", size: 30 },
        typography_font_weight: "800",
        typography_line_height: { unit: "em", size: 1.2 },
        typography_letter_spacing: { unit: "px", size: -0.5 },
        _margin: { unit: "px", top: "0", right: "0", bottom: "16", left: "0", isLinked: false },
        margin: { unit: "px", top: "0", right: "0", bottom: "16", left: "0", isLinked: false }
      }
    },
    // Subtitle Description
    {
      id: createId(),
      elType: "widget",
      widgetType: "text-editor",
      settings: {
        editor: `<p style="margin:0 auto;max-width:760px;font-size:16.5px;color:#4A5568;line-height:1.7;text-align:center;">Whether you need end-to-end medical billing, targeted insurance denial recovery, or practice workflow modernization, StelleMed provides the certified expertise and technology to optimize your clinical cash flow.</p>`,
        typography_typography: "custom",
        typography_font_family: "Plus Jakarta Sans",
        typography_font_size: { unit: "px", size: 16.5 },
        typography_font_weight: "400",
        text_color: "#4A5568",
        _margin: { unit: "px", top: "0", right: "0", bottom: "28", left: "0", isLinked: false },
        margin: { unit: "px", top: "0", right: "0", bottom: "28", left: "0", isLinked: false }
      }
    },
    // Action Buttons Row
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
        flex_gap: { unit: "px", size: 14, column: "14", row: "12" },
        _margin: { unit: "px", top: "8", right: "0", bottom: "0", left: "0", isLinked: false },
        margin: { unit: "px", top: "8", right: "0", bottom: "0", left: "0", isLinked: false }
      },
      elements: [
        {
          id: createId(),
          elType: "widget",
          widgetType: "button",
          settings: {
            text: "Request Comprehensive Practice Audit",
            link: { url: "#contact", is_external: false, nofollow: false },
            button_type: "default",
            selected_icon: { value: "fas fa-shield-alt", library: "fa-solid" },
            icon_align: "left",
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
        },
        {
          id: createId(),
          elType: "widget",
          widgetType: "button",
          settings: {
            text: "Talk to a Billing Consultant",
            link: { url: "tel:15169797418", is_external: false, nofollow: false },
            button_type: "default",
            selected_icon: { value: "fas fa-phone-alt", library: "fa-solid" },
            icon_align: "left",
            icon_indent: { unit: "px", size: 8 },
            background_color: "#FFFFFF",
            button_text_color: "#0C2340",
            background_hover_color: "#F1F5F9",
            hover_color: "#0C2340",
            border_border: "solid",
            border_width: { unit: "px", top: "1.5", right: "1.5", bottom: "1.5", left: "1.5", isLinked: true },
            border_color: "#CBD5E1",
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

// SECTION 2: THREE PILLARS HEADER (The previously missing section!)
const pillarsHeaderSection = {
  id: createId(),
  elType: "container",
  isInner: false,
  settings: {
    content_width: "boxed",
    boxed_width: { unit: "px", size: 1220, sizes: [] },
    flex_direction: "column",
    flex_align_items: "center",
    flex_gap: { unit: "px", size: 16, column: "16", row: "16" },
    padding: { unit: "px", top: "80", right: "20", bottom: "40", left: "20", isLinked: false }
  },
  elements: [
    {
      id: createId(),
      elType: "widget",
      widgetType: "heading",
      settings: {
        title: `<div style="display:inline-flex;align-items:center;gap:6px;padding:6px 18px;background-color:#EAF8F8;border:1px solid #A7E8E9;border-radius:50px;color:#179A9E;font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;margin-bottom:14px;line-height:1.4;">OUR THREE-PILLAR APPROACH</div>`,
        header_size: "div",
        align: "center",
        title_color: "#179A9E",
        _margin: { unit: "px", top: "0", right: "0", bottom: "14", left: "0", isLinked: false },
        margin: { unit: "px", top: "0", right: "0", bottom: "14", left: "0", isLinked: false }
      }
    },
    {
      id: createId(),
      elType: "widget",
      widgetType: "heading",
      settings: {
        title: "Three Pillars of <span style=\"color:#179A9E;\">Revenue Cycle Excellence</span>",
        header_size: "h2",
        align: "center",
        title_color: "#0C2340",
        typography_typography: "custom",
        typography_font_family: "Plus Jakarta Sans",
        typography_font_size: { unit: "px", size: 40 },
        typography_font_size_tablet: { unit: "px", size: 32 },
        typography_font_size_mobile: { unit: "px", size: 26 },
        typography_font_weight: "800",
        typography_line_height: { unit: "em", size: 1.25 },
        _margin: { unit: "px", top: "0", right: "0", bottom: "16", left: "0", isLinked: false },
        margin: { unit: "px", top: "0", right: "0", bottom: "16", left: "0", isLinked: false }
      }
    },
    {
      id: createId(),
      elType: "widget",
      widgetType: "text-editor",
      settings: {
        editor: `<p style="margin:0 auto;max-width:720px;font-size:16.5px;color:#4A5568;line-height:1.65;text-align:center;">Each pillar is designed to seamlessly integrate with your existing workflow, relieving clinical staff and maximizing collections.</p>`,
        typography_typography: "custom",
        typography_font_family: "Plus Jakarta Sans",
        typography_font_size: { unit: "px", size: 16.5 },
        text_color: "#4A5568",
        _margin: { unit: "px", top: "0", right: "0", bottom: "10", left: "0", isLinked: false },
        margin: { unit: "px", top: "0", right: "0", bottom: "10", left: "0", isLinked: false }
      }
    }
  ]
};

// HELPER: Generate Pillar Detailed Card Container
// isImageLeft = true -> [Image (Left), Content (Right)]
// isImageLeft = false -> [Content (Left), Image (Right)] (as in Pillar 2 of media_1792620962803.png)
function createPillarCard(isImageLeft, data) {
  const imageBox = {
    id: createId(),
    elType: "container",
    isInner: true,
    settings: {
      content_width: "full",
      width: { unit: "%", size: 45, sizes: [] },
      width_tablet: { unit: "%", size: 100, sizes: [] },
      width_mobile: { unit: "%", size: 100, sizes: [] },
      flex_direction: "column",
      position: "relative"
    },
    elements: [
      {
        id: createId(),
        elType: "container",
        isInner: true,
        settings: {
          content_width: "full",
          border_radius: { unit: "px", top: "18", right: "18", bottom: "18", left: "18", isLinked: true },
          overflow: "hidden",
          box_shadow_box_shadow_type: "yes",
          box_shadow_box_shadow: { horizontal: 0, vertical: 12, blur: 30, spread: -5, color: "rgba(12, 35, 64, 0.12)" }
        },
        elements: [
          {
            id: createId(),
            elType: "widget",
            widgetType: "image",
            settings: {
              image: { url: data.imageUrl },
              image_size: "full"
            }
          }
        ]
      },
      // Top-Left Badge (Dark Navy Pill)
      {
        id: createId(),
        elType: "container",
        isInner: true,
        settings: {
          content_width: "full",
          width: { unit: "px", size: 120, sizes: [] },
          position: "absolute",
          _margin: { unit: "px", top: "16", right: "0", bottom: "0", left: "16", isLinked: false },
          margin: { unit: "px", top: "16", right: "0", bottom: "0", left: "16", isLinked: false },
          background_background: "classic",
          background_color: "rgba(12, 35, 64, 0.88)",
          border_radius: { unit: "px", top: "6", right: "6", bottom: "6", left: "6", isLinked: true },
          padding: { unit: "px", top: "4", right: "12", bottom: "4", left: "12", isLinked: false },
          z_index: 2
        },
        elements: [
          {
            id: createId(),
            elType: "widget",
            widgetType: "heading",
            settings: {
              title: data.badge,
              header_size: "div",
              title_color: "#FFFFFF",
              typography_typography: "custom",
              typography_font_size: { unit: "px", size: 11 },
              typography_font_weight: "700"
            }
          }
        ]
      },
      // Bottom-Right Stat Pill (Teal Pill)
      {
        id: createId(),
        elType: "container",
        isInner: true,
        settings: {
          content_width: "full",
          width: { unit: "px", size: 170, sizes: [] },
          position: "absolute",
          _margin: { unit: "px", top: "auto", right: "16", bottom: "16", left: "auto", isLinked: false },
          margin: { unit: "px", top: "auto", right: "16", bottom: "16", left: "auto", isLinked: false },
          background_background: "classic",
          background_color: "#179A9E",
          border_radius: { unit: "px", top: "50", right: "50", bottom: "50", left: "50", isLinked: true },
          padding: { unit: "px", top: "7", right: "14", bottom: "7", left: "14", isLinked: false },
          z_index: 2
        },
        elements: [
          {
            id: createId(),
            elType: "widget",
            widgetType: "heading",
            settings: {
              title: data.stat,
              header_size: "div",
              align: "center",
              title_color: "#FFFFFF",
              typography_typography: "custom",
              typography_font_size: { unit: "px", size: 11.5 },
              typography_font_weight: "800"
            }
          }
        ]
      }
    ]
  };

  const contentBox = {
    id: createId(),
    elType: "container",
    isInner: true,
    settings: {
      content_width: "full",
      width: { unit: "%", size: 50, sizes: [] },
      width_tablet: { unit: "%", size: 100, sizes: [] },
      width_mobile: { unit: "%", size: 100, sizes: [] },
      flex_direction: "column",
      flex_align_items: "flex-start",
      flex_gap: { unit: "px", size: 14, column: "14", row: "14" }
    },
    elements: [
      // Eyebrow Pill Badge (header_size: "div", display: inline-block, explicit bottom margin & line-height)
      {
        id: createId(),
        elType: "widget",
        widgetType: "heading",
        settings: {
          title: `<div style="display:inline-block;padding:6px 14px;background-color:#EAF8F8;border:1px solid #A7E8E9;border-radius:50px;color:#179A9E;font-size:11px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;margin-bottom:12px;line-height:1.4;">${data.tagline}</div>`,
          header_size: "div",
          title_color: "#179A9E",
          _margin: { unit: "px", top: "0", right: "0", bottom: "12", left: "0", isLinked: false },
          margin: { unit: "px", top: "0", right: "0", bottom: "12", left: "0", isLinked: false }
        }
      },
      // Title
      {
        id: createId(),
        elType: "widget",
        widgetType: "heading",
        settings: {
          title: data.title,
          header_size: "h3",
          title_color: "#0C2340",
          typography_typography: "custom",
          typography_font_family: "Plus Jakarta Sans",
          typography_font_size: { unit: "px", size: 28 },
          typography_font_size_mobile: { unit: "px", size: 22 },
          typography_font_weight: "800",
          typography_line_height: { unit: "em", size: 1.25 },
          _margin: { unit: "px", top: "0", right: "0", bottom: "14", left: "0", isLinked: false },
          margin: { unit: "px", top: "0", right: "0", bottom: "14", left: "0", isLinked: false }
        }
      },
      // Description
      {
        id: createId(),
        elType: "widget",
        widgetType: "text-editor",
        settings: {
          editor: `<p style="margin:0;font-size:15px;color:#4A5568;line-height:1.7;">${data.desc}</p>`,
          text_color: "#4A5568",
          _margin: { unit: "px", top: "0", right: "0", bottom: "18", left: "0", isLinked: false },
          margin: { unit: "px", top: "0", right: "0", bottom: "18", left: "0", isLinked: false }
        }
      },
      // Bullet Checklist
      {
        id: createId(),
        elType: "widget",
        widgetType: "icon-list",
        settings: {
          icon_list: data.bullets.map(b => ({
            text: b,
            selected_icon: { value: "far fa-check-circle", library: "fa-regular" }
          })),
          icon_color: "#179A9E",
          icon_size: { unit: "px", size: 15 },
          space_between: { unit: "px", size: 12 },
          text_color: "#1E293B",
          typography_typography: "custom",
          typography_font_family: "Plus Jakarta Sans",
          typography_font_size: { unit: "px", size: 14 },
          typography_font_weight: "500",
          typography_line_height: { unit: "em", size: 1.5 },
          _margin: { unit: "px", top: "0", right: "0", bottom: "24", left: "0", isLinked: false },
          margin: { unit: "px", top: "0", right: "0", bottom: "24", left: "0", isLinked: false }
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
          flex_gap: { unit: "px", size: 12, column: "12", row: "12" },
          _margin: { unit: "px", top: "6", right: "0", bottom: "0", left: "0", isLinked: false },
          margin: { unit: "px", top: "6", right: "0", bottom: "0", left: "0", isLinked: false }
        },
        elements: [
          {
            id: createId(),
            elType: "widget",
            widgetType: "button",
            settings: {
              text: "Explore Detailed Page",
              link: { url: data.link, is_external: false, nofollow: false },
              selected_icon: { value: "fas fa-arrow-right", library: "fa-solid" },
              icon_align: "right",
              icon_indent: { unit: "px", size: 8 },
              background_color: "#179A9E",
              button_text_color: "#FFFFFF",
              background_hover_color: "#0F7B7E",
              hover_color: "#FFFFFF",
              border_radius: { unit: "px", top: "10", right: "10", bottom: "10", left: "10", isLinked: true },
              padding: { unit: "px", top: "12", right: "22", bottom: "12", left: "22", isLinked: false },
              typography_typography: "custom",
              typography_font_family: "Plus Jakarta Sans",
              typography_font_size: { unit: "px", size: 14 },
              typography_font_weight: "700"
            }
          },
          {
            id: createId(),
            elType: "widget",
            widgetType: "button",
            settings: {
              text: "Inquire Now",
              link: { url: "#contact", is_external: false, nofollow: false },
              background_color: "#FFFFFF",
              button_text_color: "#0C2340",
              background_hover_color: "#F1F5F9",
              border_border: "solid",
              border_width: { unit: "px", top: "1", right: "1", bottom: "1", left: "1", isLinked: true },
              border_color: "#CBD5E1",
              border_radius: { unit: "px", top: "10", right: "10", bottom: "10", left: "10", isLinked: true },
              padding: { unit: "px", top: "12", right: "22", bottom: "12", left: "22", isLinked: false },
              typography_typography: "custom",
              typography_font_family: "Plus Jakarta Sans",
              typography_font_size: { unit: "px", size: 14 },
              typography_font_weight: "700"
            }
          }
        ]
      }
    ]
  };

  // When isImageLeft is true: [imageBox, contentBox] (Image Left, Content Right)
  // When isImageLeft is false: [contentBox, imageBox] (Content Left, Image Right)
  // flex_direction is always "row" on desktop! No double-reversal!
  return {
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
      border_border: "solid",
      border_width: { unit: "px", top: "1", right: "1", bottom: "1", left: "1", isLinked: true },
      border_color: "#E2E8F0",
      border_radius: { unit: "px", top: "20", right: "20", bottom: "20", left: "20", isLinked: true },
      padding: { unit: "px", top: "36", right: "36", bottom: "36", left: "36", isLinked: true },
      padding_mobile: { unit: "px", top: "24", right: "20", bottom: "24", left: "20", isLinked: true },
      _margin: { unit: "px", top: "0", right: "auto", bottom: "36", left: "auto", isLinked: false },
      margin: { unit: "px", top: "0", right: "auto", bottom: "36", left: "auto", isLinked: false }
    },
    elements: isImageLeft ? [imageBox, contentBox] : [contentBox, imageBox]
  };
}

// Pillar 1 Data (Insurance & Payer Services)
const pillar1Data = {
  badge: "Core Engine",
  stat: "99.2% Clean Claim Rate",
  imageUrl: "https://raw.githubusercontent.com/waqasalidev/sm/main/public/service1.jpg",
  tagline: "END-TO-END THIRD-PARTY PAYER COLLECTIONS FOR HEALTHCARE PROVIDERS",
  title: "Insurance & Payer Services",
  desc: "We manage your entire payer billing cycle from initial eligibility checking to clean claim submission, aggressive denial appeals, and aging A/R recovery.",
  link: "/services/insurance-payer",
  bullets: [
    "Real-time 270/271 eligibility checking within 15 seconds prior to service",
    "Certified AAPC/AHIMA medical coding & routine accuracy audits",
    "Automated CMS-1500 and UB-04 EDI submission with 24-48 hr turnaround",
    "Clinical appeals written for complex A/R denials and aging revenue"
  ]
};

// Pillar 2 Data (Patient & Practice Services)
const pillar2Data = {
  badge: "Patient Centric",
  stat: "+30% POS Collections",
  imageUrl: "https://raw.githubusercontent.com/waqasalidev/sm/main/public/service2.jpg",
  tagline: "TRANSPARENT PATIENT FINANCIAL COUNSELING AND OUT-OF-POCKET RESOLUTION",
  title: "Patient & Practice Services",
  desc: "Patient responsibility is an increasing percentage of practice revenue. We make payment transparent, accessible, and compliant with No Surprises Act regulations.",
  link: "/services/patient-practice",
  bullets: [
    "No Surprises Act compliant Good Faith Estimates (GFE)",
    "Omni-channel patient billing via SMS, email, and paper statements",
    "Point-of-service payment collection tools and digital checkout",
    "Dedicated patient billing support team for courteous financial resolution"
  ]
};

// Pillar 3 Data (Technology & Support)
const pillar3Data = {
  badge: "Cloud Infrastructure",
  stat: "99.9% Uptime SLA",
  imageUrl: "https://raw.githubusercontent.com/waqasalidev/sm/main/public/service3.jpg",
  tagline: "CLOUD AUTOMATION, ADVANCED TOOLS, AND SEAMLESS EHR & EMR ARCHITECTURE",
  title: "Technology & Support",
  desc: "Modern revenue cycle management requires modern tech. StelleMed integrates directly into your existing EHR/EMR or provides custom automations to eliminate friction.",
  link: "/services/technology-support",
  bullets: [
    "Direct API & HL7/FHIR integrations with Epic, Cerner, AthenaHealth, and 50+ EHRs",
    "StelleCloud clearinghouse engine with real-time scrub & 24hr rejection resolution",
    "Business intelligence dashboards with key RCM KPIs updated daily",
    "Dedicated IT & engineering team ensuring continuous uptime & data security"
  ]
};

// SECTION: UNIFIED THREE PILLARS SECTION (Header + 3 Cards all in one master container!)
const unifiedThreePillarsSection = {
  id: createId(),
  elType: "container",
  isInner: false,
  settings: {
    content_width: "boxed",
    boxed_width: { unit: "px", size: 1220, sizes: [] },
    flex_direction: "column",
    flex_align_items: "center",
    flex_gap: { unit: "px", size: 36, column: "36", row: "36" },
    padding: { unit: "px", top: "70", right: "20", bottom: "50", left: "20", isLinked: false }
  },
  elements: [
    pillarsHeaderSection,
    createPillarCard(true, pillar1Data),
    createPillarCard(false, pillar2Data),
    createPillarCard(true, pillar3Data)
  ]
};

// SECTION: MEDICAL SPECIALTY EXPERTISE (8 CARDS)
const specialtiesOverview = [
  { icon: "fas fa-stethoscope", name: "Internal & Family Medicine", desc: "Complex multi-code visits, preventive wellness (AWV), chronic care management (CCM)." },
  { icon: "fas fa-heartbeat", name: "Cardiology & Vascular", desc: "Cath lab interventions, echocardiography, nuclear imaging, and modifier 25/59 optimization." },
  { icon: "fas fa-bone", name: "Orthopedics & Sports Medicine", desc: "Surgical bundles, implant billing, DME pre-authorizations, and physical therapy cross-overs." },
  { icon: "fas fa-brain", name: "Mental & Behavioral Health", desc: "Psychotherapy, IOP, medication management, and specialized telehealth coding rules." },
  { icon: "fas fa-baby", name: "Pediatrics & Adolescent Care", desc: "Vaccine administration bundles, developmental screenings, and Medicaid managed care plans." },
  { icon: "fas fa-procedures", name: "General & Ambulatory Surgery", desc: "ASC billing, anesthesia coordination, pre-op clearance, and high-dollar claim appeals." },
  { icon: "fas fa-ambulance", name: "Urgent Care Centers", desc: "High-volume rapid charge capture, same-day verification, and occupational medicine billing." },
  { icon: "fas fa-running", name: "Physical & Occupational Therapy", desc: "Timed 8-minute rule calculations, functional progress reporting, and plan-of-care caps." }
];

const specialtyOverviewCards = specialtiesOverview.map(s => {
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
      flex_gap: { unit: "px", size: 10, column: "10", row: "10" },
      background_background: "classic",
      background_color: "#FFFFFF",
      border_border: "solid",
      border_width: { unit: "px", top: "1", right: "1", bottom: "1", left: "1", isLinked: true },
      border_color: "#E2E8F0",
      border_radius: { unit: "px", top: "14", right: "14", bottom: "14", left: "14", isLinked: true },
      padding: { unit: "px", top: "24", right: "20", bottom: "24", left: "20", isLinked: true },
      _margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false },
      margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false }
    },
    elements: [
      {
        id: createId(),
        elType: "widget",
        widgetType: "icon",
        settings: {
          selected_icon: { value: s.icon, library: "fa-solid" },
          view: "default",
          primary_color: "#179A9E",
          size: { unit: "px", size: 24 },
          _margin: { unit: "px", top: "0", right: "0", bottom: "12", left: "0", isLinked: false },
          margin: { unit: "px", top: "0", right: "0", bottom: "12", left: "0", isLinked: false }
        }
      },
      {
        id: createId(),
        elType: "widget",
        widgetType: "heading",
        settings: {
          title: s.name,
          header_size: "h4",
          title_color: "#0C2340",
          typography_typography: "custom",
          typography_font_family: "Plus Jakarta Sans",
          typography_font_size: { unit: "px", size: 16 },
          typography_font_weight: "700",
          typography_line_height: { unit: "em", size: 1.3 },
          _margin: { unit: "px", top: "0", right: "0", bottom: "8", left: "0", isLinked: false },
          margin: { unit: "px", top: "0", right: "0", bottom: "8", left: "0", isLinked: false }
        }
      },
      {
        id: createId(),
        elType: "widget",
        widgetType: "text-editor",
        settings: {
          editor: `<p style="margin:0;font-size:13px;color:#64748B;line-height:1.55;">${s.desc}</p>`,
          text_color: "#64748B",
          _margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false },
          margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false }
        }
      }
    ]
  };
});

const specialtiesSection = {
  id: createId(),
  elType: "container",
  isInner: false,
  settings: {
    content_width: "boxed",
    boxed_width: { unit: "px", size: 1220, sizes: [] },
    flex_direction: "column",
    flex_align_items: "center",
    flex_gap: { unit: "px", size: 16, column: "16", row: "16" },
    padding: { unit: "px", top: "70", right: "20", bottom: "70", left: "20", isLinked: false }
  },
  elements: [
    {
      id: createId(),
      elType: "widget",
      widgetType: "heading",
      settings: {
        title: `<div style="display:inline-flex;align-items:center;gap:6px;padding:6px 18px;background-color:#EAF8F8;border:1px solid #A7E8E9;border-radius:50px;color:#179A9E;font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;margin-bottom:14px;line-height:1.4;">MEDICAL SPECIALTY EXPERTISE</div>`,
        header_size: "div",
        align: "center",
        title_color: "#179A9E",
        _margin: { unit: "px", top: "0", right: "0", bottom: "14", left: "0", isLinked: false },
        margin: { unit: "px", top: "0", right: "0", bottom: "14", left: "0", isLinked: false }
      }
    },
    {
      id: createId(),
      elType: "widget",
      widgetType: "heading",
      settings: {
        title: "Tailored for Your <span style=\"color:#179A9E;\">Clinical Specialty</span>",
        header_size: "h2",
        align: "center",
        title_color: "#0C2340",
        typography_typography: "custom",
        typography_font_family: "Plus Jakarta Sans",
        typography_font_size: { unit: "px", size: 38 },
        typography_font_size_tablet: { unit: "px", size: 30 },
        typography_font_size_mobile: { unit: "px", size: 26 },
        typography_font_weight: "800",
        typography_line_height: { unit: "em", size: 1.25 },
        _margin: { unit: "px", top: "0", right: "0", bottom: "14", left: "0", isLinked: false },
        margin: { unit: "px", top: "0", right: "0", bottom: "14", left: "0", isLinked: false }
      }
    },
    {
      id: createId(),
      elType: "widget",
      widgetType: "text-editor",
      settings: {
        editor: `<p style="margin:0 auto;max-width:760px;font-size:16px;color:#4A5568;line-height:1.65;text-align:center;">Every medical discipline operates under unique payer guidelines, documentation hurdles, and fee schedules. Our certified billing teams have dedicated specialty pods.</p>`,
        text_color: "#4A5568",
        _margin: { unit: "px", top: "0", right: "0", bottom: "36", left: "0", isLinked: false },
        margin: { unit: "px", top: "0", right: "0", bottom: "36", left: "0", isLinked: false }
      }
    },
    // Grid Container (4 columns on desktop, 2 on tablet, 1 on mobile)
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
      elements: specialtyOverviewCards
    }
  ]
};

// SECTION: BOTTOM CTA BANNER
const bottomCTASection = {
  id: createId(),
  elType: "container",
  isInner: false,
  settings: {
    content_width: "boxed",
    boxed_width: { unit: "px", size: 1220, sizes: [] },
    flex_direction: "column",
    flex_align_items: "center",
    flex_gap: { unit: "px", size: 14, column: "14", row: "14" },
    background_background: "classic",
    background_color: "#081D30",
    border_radius: { unit: "px", top: "20", right: "20", bottom: "20", left: "20", isLinked: true },
    padding: { unit: "px", top: "60", right: "24", bottom: "60", left: "24", isLinked: false },
    _margin: { unit: "px", top: "20", right: "auto", bottom: "40", left: "auto", isLinked: false },
    margin: { unit: "px", top: "20", right: "auto", bottom: "40", left: "auto", isLinked: false }
  },
  elements: [
    {
      id: createId(),
      elType: "widget",
      widgetType: "heading",
      settings: {
        title: "Need a Customized Revenue Cycle Plan for Your Clinic?",
        header_size: "h2",
        align: "center",
        title_color: "#FFFFFF",
        typography_typography: "custom",
        typography_font_family: "Plus Jakarta Sans",
        typography_font_size: { unit: "px", size: 34 },
        typography_font_size_tablet: { unit: "px", size: 28 },
        typography_font_size_mobile: { unit: "px", size: 24 },
        typography_font_weight: "800",
        typography_line_height: { unit: "em", size: 1.25 },
        _margin: { unit: "px", top: "0", right: "0", bottom: "14", left: "0", isLinked: false },
        margin: { unit: "px", top: "0", right: "0", bottom: "14", left: "0", isLinked: false }
      }
    },
    {
      id: createId(),
      elType: "widget",
      widgetType: "text-editor",
      settings: {
        editor: `<p style="margin:0 auto;max-width:680px;font-size:16px;color:#94A3B8;line-height:1.65;text-align:center;">We evaluate your existing billing drift, EHR software, and monthly claim volume to create a hybrid or fully managed RCM strategy.</p>`,
        text_color: "#94A3B8",
        _margin: { unit: "px", top: "0", right: "0", bottom: "26", left: "0", isLinked: false },
        margin: { unit: "px", top: "0", right: "0", bottom: "26", left: "0", isLinked: false }
      }
    },
    {
      id: createId(),
      elType: "widget",
      widgetType: "button",
      settings: {
        text: "Request Custom Proposal",
        link: { url: "#contact", is_external: false, nofollow: false },
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
};

// Full Services Overview Page (Exact order matching media_1792620962803.png)
const completeServicesOverviewPage = {
  version: "0.4",
  title: "Services Overview - Complete Page (100% Flexbox Container)",
  type: "container",
  content: [
    servicesHeroSection,
    pillarsHeaderSection,
    createPillarCard(true, pillar1Data),
    createPillarCard(false, pillar2Data),
    createPillarCard(true, pillar3Data),
    specialtiesSection,
    bottomCTASection
  ]
};

// ============================================================================
// SAVE SECTION-BY-SECTION FILES FOR SERVICES OVERVIEW
// ============================================================================

// 1. Hero Section
saveTemplate(
  'services-overview-1-hero-elementor', 
  servicesHeroSection, 
  "Services Overview - 1. Hero Banner (100% Flexbox Container)"
);

// 2. Three Pillars Section Header (The missing title section!)
saveTemplate(
  'services-overview-2-pillars-header-elementor', 
  pillarsHeaderSection, 
  "Services Overview - 2. Three Pillars Header (100% Flexbox Container)"
);

// 3. Pillar 1: Insurance & Payer Services Card
saveTemplate(
  'services-overview-3-pillar-insurance-elementor', 
  createPillarCard(true, pillar1Data), 
  "Services Overview - 3. Pillar 1: Insurance & Payer (100% Flexbox Container)"
);

// 4. Pillar 2: Patient & Practice Services Card (Fixed layout: Content Left, Image Right)
saveTemplate(
  'services-overview-4-pillar-patient-elementor', 
  createPillarCard(false, pillar2Data), 
  "Services Overview - 4. Pillar 2: Patient & Practice (100% Flexbox Container)"
);

// 5. Pillar 3: Technology & Support Card
saveTemplate(
  'services-overview-5-pillar-tech-elementor', 
  createPillarCard(true, pillar3Data), 
  "Services Overview - 5. Pillar 3: Technology & Support (100% Flexbox Container)"
);

// 6. All Three Pillars Combined (Optional unified section containing Header + all 3 cards)
saveTemplate(
  'services-overview-three-pillars-all-elementor', 
  unifiedThreePillarsSection, 
  "Services Overview - Three Pillars All-in-One Section (100% Flexbox Container)"
);

// 7. Clinical Specialties Section
saveTemplate(
  'services-overview-6-specialties-elementor', 
  specialtiesSection, 
  "Services Overview - 6. Clinical Specialties (100% Flexbox Container)"
);

// 8. Bottom CTA Banner
saveTemplate(
  'services-overview-7-cta-elementor', 
  bottomCTASection, 
  "Services Overview - 7. CTA Banner (100% Flexbox Container)"
);

// Also update the old filenames so any existing references work flawlessly
saveTemplate(
  'services-overview-2-pillar-insurance-elementor', 
  createPillarCard(true, pillar1Data), 
  "Services Overview - Insurance & Payer Pillar (100% Flexbox Container)"
);
saveTemplate(
  'services-overview-3-pillar-patient-elementor', 
  createPillarCard(false, pillar2Data), 
  "Services Overview - Patient & Practice Pillar (100% Flexbox Container)"
);
saveTemplate(
  'services-overview-4-pillar-tech-elementor', 
  createPillarCard(true, pillar3Data), 
  "Services Overview - Technology & Support Pillar (100% Flexbox Container)"
);
saveTemplate(
  'services-overview-5-specialties-elementor', 
  specialtiesSection, 
  "Services Overview - Specialties Tailored (100% Flexbox Container)"
);
saveTemplate(
  'services-overview-6-cta-elementor', 
  bottomCTASection, 
  "Services Overview - CTA Banner (100% Flexbox Container)"
);

// Complete Page
saveTemplate(
  'services-overview-complete-page-elementor', 
  completeServicesOverviewPage.content, 
  "Services Overview - Complete Page (100% Flexbox Container)"
);

console.log("\nServices Overview templates updated with zero column/section and no heading collisions!");
