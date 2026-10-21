const fs = require('fs');
const path = require('path');

function createId() {
  return Math.random().toString(36).substring(2, 9);
}

const outDir = path.join(__dirname, 'elementor-editable-templates');

// ============================================================================
// PAGE 1: SERVICES OVERVIEW PAGE
// Matching user screenshot: media_1792620962803.png
// ============================================================================

// Section 1: Hero Banner
const heroSection = {
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
        title: `<nav style="font-size:13.5px;font-weight:600;color:#64748B;"><a href="/" style="color:#64748B;text-decoration:none;">Home</a> <span style="margin:0 8px;color:#94A3B8;">&gt;</span> <span style="color:#179A9E;">Services Overview</span></nav>`,
        header_size: "span",
        align: "center",
        margin: { unit: "px", top: "0", right: "0", bottom: "16", left: "0", isLinked: false }
      }
    },
    // Pill
    {
      id: createId(),
      elType: "widget",
      widgetType: "heading",
      settings: {
        title: `<span style="display:inline-flex;align-items:center;gap:6px;padding:6px 16px;background-color:#EAF8F8;border:1px solid #A7E8E9;border-radius:50px;color:#179A9E;font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;"><i class=\"fas fa-chart-pie\"></i> FULL-SPECTRUM REVENUE CYCLE MANAGEMENT</span>`,
        header_size: "span",
        align: "center",
        title_color: "#179A9E",
        margin: { unit: "px", top: "0", right: "0", bottom: "16", left: "0", isLinked: false }
      }
    },
    // Heading
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
        typography_line_height: { unit: "em", size: 1.15 },
        typography_letter_spacing: { unit: "px", size: -0.5 },
        margin: { unit: "px", top: "0", right: "0", bottom: "16", left: "0", isLinked: false }
      }
    },
    // Subtitle
    {
      id: createId(),
      elType: "widget",
      widgetType: "text-editor",
      settings: {
        editor: "<p style=\"margin:0 auto;max-width:760px;font-size:16.5px;color:#4A5568;line-height:1.65;text-align:center;\">Whether you need end-to-end medical billing, targeted insurance denial recovery, or practice workflow modernization, StelleMed provides the certified expertise and technology to optimize your clinical cash flow.</p>",
        typography_typography: "custom",
        typography_font_family: "Plus Jakarta Sans",
        typography_font_size: { unit: "px", size: 16.5 },
        typography_font_weight: "400",
        text_color: "#4A5568",
        margin: { unit: "px", top: "0", right: "0", bottom: "30", left: "0", isLinked: false }
      }
    },
    // Buttons
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

// Section 2: Header for Three Pillars
const pillarsHeaderSection = {
  id: createId(),
  elType: "container",
  isInner: false,
  settings: {
    content_width: "boxed",
    boxed_width: { unit: "px", size: 1220, sizes: [] },
    flex_direction: "column",
    flex_align_items: "center",
    padding: { unit: "px", top: "70", right: "20", bottom: "30", left: "20", isLinked: false }
  },
  elements: [
    {
      id: createId(),
      elType: "widget",
      widgetType: "heading",
      settings: {
        title: `<span style="display:inline-flex;align-items:center;gap:6px;padding:6px 16px;background-color:#EAF8F8;border:1px solid #A7E8E9;border-radius:50px;color:#179A9E;font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;">OUR CORE SERVICE PILLARS</span>`,
        header_size: "span",
        align: "center",
        title_color: "#179A9E",
        margin: { unit: "px", top: "0", right: "0", bottom: "16", left: "0", isLinked: false }
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
        typography_font_weight: "800",
        margin: { unit: "px", top: "0", right: "0", bottom: "14", left: "0", isLinked: false }
      }
    },
    {
      id: createId(),
      elType: "widget",
      widgetType: "text-editor",
      settings: {
        editor: "<p style=\"margin:0;font-size:16px;color:#4A5568;text-align:center;\">Each pillar is designed to seamlessly integrate with your existing workflow, relieving clinical staff and maximizing collections.</p>",
        text_color: "#4A5568"
      }
    }
  ]
};

// Helper: Pillar Detailed Card (Flex Container)
function createPillarRow(isImageLeft, data) {
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
      // Top-Left Badge (e.g. Core Engine)
      {
        id: createId(),
        elType: "container",
        isInner: true,
        settings: {
          content_width: "full",
          width: { unit: "px", size: 120, sizes: [] },
          position: "absolute",
          margin: { unit: "px", top: "16", right: "0", bottom: "0", left: "16", isLinked: false },
          background_background: "classic",
          background_color: "rgba(12, 35, 64, 0.85)",
          border_radius: { unit: "px", top: "6", right: "6", bottom: "6", left: "6", isLinked: true },
          padding: { unit: "px", top: "4", right: "10", bottom: "4", left: "10", isLinked: false },
          z_index: 2
        },
        elements: [
          {
            id: createId(),
            elType: "widget",
            widgetType: "heading",
            settings: {
              title: data.badge,
              header_size: "span",
              title_color: "#FFFFFF",
              typography_typography: "custom",
              typography_font_size: { unit: "px", size: 11 },
              typography_font_weight: "700"
            }
          }
        ]
      },
      // Bottom-Right Stat Pill (e.g. 98% Clean Claim Rate)
      {
        id: createId(),
        elType: "container",
        isInner: true,
        settings: {
          content_width: "full",
          width: { unit: "px", size: 160, sizes: [] },
          position: "absolute",
          margin: { unit: "px", top: "auto", right: "16", bottom: "16", left: "auto", isLinked: false },
          background_background: "classic",
          background_color: "#179A9E",
          border_radius: { unit: "px", top: "50", right: "50", bottom: "50", left: "50", isLinked: true },
          padding: { unit: "px", top: "6", right: "14", bottom: "6", left: "14", isLinked: false },
          z_index: 2
        },
        elements: [
          {
            id: createId(),
            elType: "widget",
            widgetType: "heading",
            settings: {
              title: data.stat,
              header_size: "span",
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
      flex_gap: { unit: "px", size: 0, column: "0", row: "0" }
    },
    elements: [
      // Tagline Eyebrow Pill
      {
        id: createId(),
        elType: "widget",
        widgetType: "heading",
        settings: {
          title: `<span style="display:inline-block;padding:5px 12px;background-color:#EAF8F8;border:1px solid #A7E8E9;border-radius:50px;color:#179A9E;font-size:10.5px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">${data.tagline}</span>`,
          header_size: "span",
          title_color: "#179A9E",
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
          typography_font_size: { unit: "px", size: 26 },
          typography_font_weight: "800",
          margin: { unit: "px", top: "0", right: "0", bottom: "12", left: "0", isLinked: false }
        }
      },
      // Desc
      {
        id: createId(),
        elType: "widget",
        widgetType: "text-editor",
        settings: {
          editor: `<p style="margin:0;font-size:14.5px;color:#4A5568;line-height:1.65;">${data.desc}</p>`,
          text_color: "#4A5568",
          margin: { unit: "px", top: "0", right: "0", bottom: "16", left: "0", isLinked: false }
        }
      },
      // Bullets
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
          icon_size: { unit: "px", size: 14 },
          space_between: { unit: "px", size: 10 },
          text_color: "#1E293B",
          typography_typography: "custom",
          typography_font_family: "Plus Jakarta Sans",
          typography_font_size: { unit: "px", size: 13.5 },
          typography_font_weight: "500",
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
          flex_gap: { unit: "px", size: 12, column: "12", row: "12" }
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
              padding: { unit: "px", top: "11", right: "20", bottom: "11", left: "20", isLinked: false },
              typography_typography: "custom",
              typography_font_family: "Plus Jakarta Sans",
              typography_font_size: { unit: "px", size: 13.5 },
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
              padding: { unit: "px", top: "11", right: "20", bottom: "11", left: "20", isLinked: false },
              typography_typography: "custom",
              typography_font_family: "Plus Jakarta Sans",
              typography_font_size: { unit: "px", size: 13.5 },
              typography_font_weight: "700"
            }
          }
        ]
      }
    ]
  };

  return {
    id: createId(),
    elType: "container",
    isInner: false,
    settings: {
      content_width: "boxed",
      boxed_width: { unit: "px", size: 1220, sizes: [] },
      flex_direction: isImageLeft ? "row" : "row-reverse",
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
      margin: { unit: "px", top: "0", right: "auto", bottom: "32", left: "auto", isLinked: false }
    },
    elements: isImageLeft ? [imageBox, contentBox] : [contentBox, imageBox]
  };
}

// Pillar 1 Data
const pillar1Data = {
  badge: "Core Engine",
  stat: "98% Clean Claim Rate",
  imageUrl: "https://raw.githubusercontent.com/waqasalidev/sm/main/public/service1.jpg",
  tagline: "END-TO-END PAYER ADJUDICATION & MAXIMUM LEGAL REIMBURSEMENT",
  title: "Insurance & Payer Services",
  desc: "We manage your entire payer relationship from initial eligibility checking to clean claim submission, aggressive denial appeals, and aging A/R recovery.",
  link: "/services/insurance-payer",
  bullets: [
    "Real-time 270/271 eligibility verification 48 hours prior to service",
    "Certified AAPC/AHIMA medical coding & modifier accuracy auditing",
    "Automated clearinghouse scrubbing with 3M+ dynamic rules",
    "Clinical appeals team that overturns 85%+ of disputed denials"
  ]
};

// Pillar 2 Data
const pillar2Data = {
  badge: "Patient Centric",
  stat: "+38% POS Collections",
  imageUrl: "https://raw.githubusercontent.com/waqasalidev/sm/main/public/service2.jpg",
  tagline: "TRANSPARENT PATIENT FINANCIAL CARE & PRACTICE WORKFLOW EFFICIENCY",
  title: "Patient & Practice Services",
  desc: "Protect patient relationships while increasing point-of-service collections. We deliver transparent estimates, empathetic call support, and front-desk coaching.",
  link: "/services/patient-practice",
  bullets: [
    "No Surprises Act compliant Good Faith Estimates (GFE)",
    "Compassionate bilingual patient billing helpline with 95% resolution",
    "Paperless digital statements via SMS text and encrypted email links",
    "Front-desk intake scripts & point-of-service collection training"
  ]
};

// Pillar 3 Data
const pillar3Data = {
  badge: "Cloud Infrastructure",
  stat: "99.9% Uptime SLA",
  imageUrl: "https://raw.githubusercontent.com/waqasalidev/sm/main/public/service3.jpg",
  tagline: "CLOUD AUTOMATION, BI-DIRECTIONAL EHR INTEGRATION & 24/7 DASHBOARDS",
  title: "Technology & Support",
  desc: "Plug into modern revenue cycle technology without changing your EHR. Our bi-directional interfaces, automated ERA auto-posting, and real-time dashboards give you complete transparency.",
  link: "/services/technology-support",
  bullets: [
    "StelleCloud™ rules engine with automated claim conflict scrubbing",
    "Direct bi-directional EHR sync with Epic, Athena, eCW, Kareo & Cerner",
    "Executive web & mobile dashboards for real-time days-in-A/R tracking",
    "AES-256 bank-grade encryption and strict SOC-2/HIPAA compliance"
  ]
};

// Section 6: Tailored for Your Clinical Specialty (8 Cards)
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
      background_background: "classic",
      background_color: "#FFFFFF",
      border_border: "solid",
      border_width: { unit: "px", top: "1", right: "1", bottom: "1", left: "1", isLinked: true },
      border_color: "#E2E8F0",
      border_radius: { unit: "px", top: "14", right: "14", bottom: "14", left: "14", isLinked: true },
      padding: { unit: "px", top: "24", right: "20", bottom: "24", left: "20", isLinked: true }
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
          size: { unit: "px", size: 22 },
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
          typography_font_size: { unit: "px", size: 15 },
          typography_font_weight: "700",
          margin: { unit: "px", top: "0", right: "0", bottom: "6", left: "0", isLinked: false }
        }
      },
      {
        id: createId(),
        elType: "widget",
        widgetType: "text-editor",
        settings: {
          editor: `<p style="margin:0;font-size:12.5px;color:#64748B;line-height:1.5;">${s.desc}</p>`,
          text_color: "#64748B"
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
    padding: { unit: "px", top: "60", right: "20", bottom: "60", left: "20", isLinked: false }
  },
  elements: [
    {
      id: createId(),
      elType: "widget",
      widgetType: "heading",
      settings: {
        title: `<span style="display:inline-flex;align-items:center;gap:6px;padding:6px 16px;background-color:#EAF8F8;border:1px solid #A7E8E9;border-radius:50px;color:#179A9E;font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;">MEDICAL SPECIALTY EXPERTISE</span>`,
        header_size: "span",
        align: "center",
        title_color: "#179A9E",
        margin: { unit: "px", top: "0", right: "0", bottom: "16", left: "0", isLinked: false }
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
        typography_font_weight: "800",
        margin: { unit: "px", top: "0", right: "0", bottom: "14", left: "0", isLinked: false }
      }
    },
    {
      id: createId(),
      elType: "widget",
      widgetType: "text-editor",
      settings: {
        editor: "<p style=\"margin:0;font-size:16px;color:#4A5568;text-align:center;\">Every medical discipline operates under unique payer guidelines, documentation hurdles, and fee schedules. Our certified billing teams have dedicated specialty pods.</p>",
        text_color: "#4A5568",
        margin: { unit: "px", top: "0", right: "0", bottom: "36", left: "0", isLinked: false }
      }
    },
    // Grid
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

// Section 7: Bottom CTA Banner
const bottomCTASection = {
  id: createId(),
  elType: "container",
  isInner: false,
  settings: {
    content_width: "boxed",
    boxed_width: { unit: "px", size: 1220, sizes: [] },
    flex_direction: "column",
    flex_align_items: "center",
    background_background: "classic",
    background_color: "#081D30",
    border_radius: { unit: "px", top: "20", right: "20", bottom: "20", left: "20", isLinked: true },
    padding: { unit: "px", top: "60", right: "24", bottom: "60", left: "24", isLinked: false },
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
        typography_font_weight: "800",
        margin: { unit: "px", top: "0", right: "0", bottom: "14", left: "0", isLinked: false }
      }
    },
    {
      id: createId(),
      elType: "widget",
      widgetType: "text-editor",
      settings: {
        editor: "<p style=\"margin:0 auto;max-width:680px;font-size:16px;color:#94A3B8;line-height:1.6;text-align:center;\">We evaluate your existing billing drift, EHR software, and monthly claim volume to create a tailored fully managed RCM strategy.</p>",
        text_color: "#94A3B8",
        margin: { unit: "px", top: "0", right: "0", bottom: "28", left: "0", isLinked: false }
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

// Full Services Overview Page
const completeServicesOverviewPage = {
  version: "0.4",
  title: "Services Overview - Complete Page (100% Flexbox Container)",
  type: "container",
  content: [
    heroSection,
    pillarsHeaderSection,
    createPillarRow(true, pillar1Data),
    createPillarRow(false, pillar2Data),
    createPillarRow(true, pillar3Data),
    specialtiesSection,
    bottomCTASection
  ]
};

// Save individual section files & full page
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

saveTemplate('services-overview-1-hero-elementor', heroSection, "Services Overview - Hero Section (100% Flexbox Container)");
saveTemplate('services-overview-2-pillar-insurance-elementor', createPillarRow(true, pillar1Data), "Services Overview - Insurance & Payer Pillar (100% Flexbox Container)");
saveTemplate('services-overview-3-pillar-patient-elementor', createPillarRow(false, pillar2Data), "Services Overview - Patient & Practice Pillar (100% Flexbox Container)");
saveTemplate('services-overview-4-pillar-tech-elementor', createPillarRow(true, pillar3Data), "Services Overview - Technology & Support Pillar (100% Flexbox Container)");
saveTemplate('services-overview-5-specialties-elementor', specialtiesSection, "Services Overview - Specialties Tailored (100% Flexbox Container)");
saveTemplate('services-overview-6-cta-elementor', bottomCTASection, "Services Overview - CTA Banner (100% Flexbox Container)");
saveTemplate('services-overview-complete-page-elementor', completeServicesOverviewPage.content, "Services Overview - Complete Page (100% Flexbox Container)");

console.log("Services Overview templates successfully generated!");
