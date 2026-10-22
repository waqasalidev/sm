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
// TECHNOLOGY & PRACTICE GROWTH (Matching Screenshot media_1792639337979.png)
// ============================================================================

// 1. HERO BANNER
const techHeroSection = {
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
        title: `<nav style="font-size:13.5px;font-weight:600;color:#64748B;display:inline-block;margin-bottom:12px;"><a href="/" style="color:#64748B;text-decoration:none;">Home</a> <span style="margin:0 8px;color:#94A3B8;">&gt;</span> <a href="/services" style="color:#64748B;text-decoration:none;">Services</a> <span style="margin:0 8px;color:#94A3B8;">&gt;</span> <span style="color:#179A9E;">Technology &amp; Support</span></nav>`,
        header_size: "div",
        align: "center",
        _margin: { unit: "px", top: "0", right: "0", bottom: "12", left: "0", isLinked: false },
        margin: { unit: "px", top: "0", right: "0", bottom: "12", left: "0", isLinked: false }
      }
    },
    // Eyebrow Pill
    {
      id: createId(),
      elType: "widget",
      widgetType: "heading",
      settings: {
        title: `<div style="display:inline-flex;align-items:center;gap:6px;padding:6px 18px;background-color:#EAF8F8;border:1px solid #A7E8E9;border-radius:50px;color:#179A9E;font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;margin-bottom:14px;line-height:1.4;"><i class="fas fa-microchip" style="font-size:12px;"></i> TECHNOLOGY &amp; IT SUPPORT / PRACTICE GROWTH</div>`,
        header_size: "div",
        align: "center",
        title_color: "#179A9E",
        _margin: { unit: "px", top: "0", right: "0", bottom: "14", left: "0", isLinked: false },
        margin: { unit: "px", top: "0", right: "0", bottom: "14", left: "0", isLinked: false }
      }
    },
    // Main Title
    {
      id: createId(),
      elType: "widget",
      widgetType: "heading",
      settings: {
        title: "Technology & Practice Growth",
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
        editor: `<p style="margin:0 auto;max-width:760px;font-size:16.5px;color:#4A5568;line-height:1.7;text-align:center;">Backed by Corvit and StelleCloud with 25+ years of tech experience — providing secure client portals, real-time dashboards, cybersecurity, managed IT, and digital growth services.</p>`,
        text_color: "#4A5568",
        _margin: { unit: "px", top: "0", right: "0", bottom: "28", left: "0", isLinked: false },
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
            text: "Request Technology Demo",
            link: { url: "#contact", is_external: false, nofollow: false },
            button_type: "default",
            selected_icon: { value: "fas fa-desktop", library: "fa-solid" },
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
            text: "Let’s Find Your Missing Revenue",
            link: { url: "tel:15169797418", is_external: false, nofollow: false },
            button_type: "default",
            selected_icon: { value: "fas fa-search-dollar", library: "fa-solid" },
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

// HELPER: Generate Card Component
function createCard(title, desc, bullets, widthPercent) {
  return {
    id: createId(),
    elType: "container",
    isInner: true,
    settings: {
      content_width: "full",
      width: { unit: "%", size: widthPercent, sizes: [] },
      width_tablet: { unit: "%", size: widthPercent > 35 ? 100 : 48, sizes: [] },
      width_mobile: { unit: "%", size: 100, sizes: [] },
      flex_direction: "column",
      flex_gap: { unit: "px", size: 12, column: "12", row: "12" },
      background_background: "classic",
      background_color: "#FFFFFF",
      border_border: "solid",
      border_width: { unit: "px", top: "1", right: "1", bottom: "1", left: "1", isLinked: true },
      border_color: "#E2E8F0",
      border_radius: { unit: "px", top: "16", right: "16", bottom: "16", left: "16", isLinked: true },
      box_shadow_box_shadow_type: "yes",
      box_shadow_box_shadow: { horizontal: 0, vertical: 4, blur: 18, spread: -3, color: "rgba(12, 35, 64, 0.05)" },
      padding: { unit: "px", top: "28", right: "24", bottom: "28", left: "24", isLinked: true },
      _margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false },
      margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false }
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
          typography_font_size: { unit: "px", size: 18 },
          typography_font_weight: "800",
          typography_line_height: { unit: "em", size: 1.25 },
          _margin: { unit: "px", top: "0", right: "0", bottom: "6", left: "0", isLinked: false },
          margin: { unit: "px", top: "0", right: "0", bottom: "6", left: "0", isLinked: false }
        }
      },
      {
        id: createId(),
        elType: "widget",
        widgetType: "text-editor",
        settings: {
          editor: `<p style="margin:0;font-size:13.5px;color:#4A5568;line-height:1.65;">${desc}</p>`,
          text_color: "#4A5568",
          _margin: { unit: "px", top: "0", right: "0", bottom: "14", left: "0", isLinked: false },
          margin: { unit: "px", top: "0", right: "0", bottom: "14", left: "0", isLinked: false }
        }
      },
      {
        id: createId(),
        elType: "widget",
        widgetType: "icon-list",
        settings: {
          icon_list: bullets.map(b => ({
            text: b,
            selected_icon: { value: "far fa-check-circle", library: "fa-regular" }
          })),
          icon_color: "#179A9E",
          icon_size: { unit: "px", size: 14 },
          space_between: { unit: "px", size: 9 },
          text_color: "#334155",
          typography_typography: "custom",
          typography_font_family: "Plus Jakarta Sans",
          typography_font_size: { unit: "px", size: 13 },
          typography_font_weight: "500",
          typography_line_height: { unit: "em", size: 1.5 },
          _margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false },
          margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false }
        }
      }
    ]
  };
}

// 2. GROUP 01: HEALTHCARE TECHNOLOGY & INFRASTRUCTURE (4 Cards)
const group1Cards = [
  {
    title: "Secure Client Portal",
    desc: "Encrypted, role-based cloud portal giving practice administrators and physicians 24/7 visibility into claim batches, denial queues, patient accounts, and daily cash deposits.",
    bullets: [
      "Live encounter tracking and claim adjudication status",
      "Bi-directional document sharing and HIPAA-compliant messaging",
      "Exportable financial ledgers and practice analytics"
    ]
  },
  {
    title: "Real-Time Dashboards",
    desc: "Intuitive executive business intelligence dashboards monitoring essential clinical key performance indicators (KPIs), Days in A/R, first-pass clean claim rates, and payer trends.",
    bullets: [
      "Color-coded aging bucket breakdowns (30, 60, 90, 120+ days)",
      "Net collection percentage and operational drift alerts",
      "Physician-by-physician productivity and revenue benchmarking"
    ]
  },
  {
    title: "EHR & Practice Management",
    desc: "Direct integration and real-time synchronization with your existing Electronic Health Record (EHR) and Practice Management (PM) software without changing systems.",
    bullets: [
      "Seamless integrity with Epic, AthenaHealth, eClinicalWorks, Kareo, NextGen, and Cerner",
      "Automated charge capture and demographic sync elimination",
      "Eliminated manual double-entry for clinical workflow discipline"
    ]
  },
  {
    title: "HIPAA-Compliant Infrastructure",
    desc: "Enterprise-grade hosting and data storage architecture adhering strictly to HIPAA, HITECH, and Omnibus regulatory security standards.",
    bullets: [
      "End-to-end data encryption at rest and in transit (AES-256 + TLS 1.3)",
      "Immutable audit logging for all patient health information (PHI) access",
      "Routine automated compliance audits and vulnerability scanning"
    ]
  }
];

const group1Section = {
  id: createId(),
  elType: "container",
  isInner: false,
  settings: {
    content_width: "boxed",
    boxed_width: { unit: "px", size: 1220, sizes: [] },
    flex_direction: "column",
    flex_align_items: "flex-start",
    flex_gap: { unit: "px", size: 24, column: "24", row: "24" },
    padding: { unit: "px", top: "50", right: "20", bottom: "45", left: "20", isLinked: false }
  },
  elements: [
    // Section Header (Left aligned as in screenshot)
    {
      id: createId(),
      elType: "container",
      isInner: true,
      settings: {
        content_width: "full",
        flex_direction: "column",
        flex_align_items: "flex-start",
        flex_gap: { unit: "px", size: 6, column: "6", row: "6" }
      },
      elements: [
        {
          id: createId(),
          elType: "widget",
          widgetType: "heading",
          settings: {
            title: `<div style="display:inline-flex;align-items:center;gap:6px;padding:4px 12px;background-color:#EAF8F8;border:1px solid #A7E8E9;border-radius:4px;color:#179A9E;font-size:11px;font-weight:800;letter-spacing:1px;text-transform:uppercase;"><i class="fas fa-server"></i> GROUP 01</div>`,
            header_size: "div",
            _margin: { unit: "px", top: "0", right: "0", bottom: "4", left: "0", isLinked: false },
            margin: { unit: "px", top: "0", right: "0", bottom: "4", left: "0", isLinked: false }
          }
        },
        {
          id: createId(),
          elType: "widget",
          widgetType: "heading",
          settings: {
            title: "Healthcare Technology & Infrastructure",
            header_size: "h2",
            title_color: "#0C2340",
            typography_typography: "custom",
            typography_font_family: "Plus Jakarta Sans",
            typography_font_size: { unit: "px", size: 28 },
            typography_font_weight: "800",
            typography_line_height: { unit: "em", size: 1.25 },
            _margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false },
            margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false }
          }
        }
      ]
    },
    // 4 Cards Grid
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
      elements: group1Cards.map(c => createCard(c.title, c.desc, c.bullets, 23.5))
    }
  ]
};

// 3. GROUP 02: SECURITY, BACKUP & IT SUPPORT (3 Cards)
const group2Cards = [
  {
    title: "Cybersecurity & Data Protection",
    desc: "Multi-layered defense safeguards protecting clinical and financial assets against malware, ransomware, phishing, and unauthorized intrusion.",
    bullets: [
      "Endpoint detection, firewall monitoring, and perimeter access control",
      "Multi-Factor Authentication (MFA) across all administrative tools",
      "Continuous threat monitoring powered by parent IT group standards"
    ]
  },
  {
    title: "Backup & Disaster Recovery",
    desc: "Automated, redundant cloud backups ensuring zero data loss and immediate failover capabilities in the event of hardware failure, outage, or cyber emergency.",
    bullets: [
      "Continuous and encrypted data snapshot intervals",
      "Strict Recovery Point Objective (RPO) and Recovery Time Objective (RTO)",
      "Regular disaster recovery drills and cloud failover validation"
    ]
  },
  {
    title: "Managed IT & Helpdesk",
    desc: "Prompt, specialized technical helpdesk support for medical practice hardware, network peripherals, EDI gateways, and practice software issues.",
    bullets: [
      "Dedicated support engineers familiar with clinical workflows",
      "Rapid resolution of clearinghouse EDI transmission errors",
      "Workstation, network, and scanner troubleshooting"
    ]
  }
];

const group2Section = {
  id: createId(),
  elType: "container",
  isInner: false,
  settings: {
    content_width: "boxed",
    boxed_width: { unit: "px", size: 1220, sizes: [] },
    flex_direction: "column",
    flex_align_items: "flex-start",
    flex_gap: { unit: "px", size: 24, column: "24", row: "24" },
    padding: { unit: "px", top: "45", right: "20", bottom: "45", left: "20", isLinked: false }
  },
  elements: [
    // Section Header
    {
      id: createId(),
      elType: "container",
      isInner: true,
      settings: {
        content_width: "full",
        flex_direction: "column",
        flex_align_items: "flex-start",
        flex_gap: { unit: "px", size: 6, column: "6", row: "6" }
      },
      elements: [
        {
          id: createId(),
          elType: "widget",
          widgetType: "heading",
          settings: {
            title: `<div style="display:inline-flex;align-items:center;gap:6px;padding:4px 12px;background-color:#EAF8F8;border:1px solid #A7E8E9;border-radius:4px;color:#179A9E;font-size:11px;font-weight:800;letter-spacing:1px;text-transform:uppercase;"><i class="fas fa-lock"></i> GROUP 02</div>`,
            header_size: "div",
            _margin: { unit: "px", top: "0", right: "0", bottom: "4", left: "0", isLinked: false },
            margin: { unit: "px", top: "0", right: "0", bottom: "4", left: "0", isLinked: false }
          }
        },
        {
          id: createId(),
          elType: "widget",
          widgetType: "heading",
          settings: {
            title: "Security, Backup & IT Support",
            header_size: "h2",
            title_color: "#0C2340",
            typography_typography: "custom",
            typography_font_family: "Plus Jakarta Sans",
            typography_font_size: { unit: "px", size: 28 },
            typography_font_weight: "800",
            typography_line_height: { unit: "em", size: 1.25 },
            _margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false },
            margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false }
          }
        }
      ]
    },
    // 3 Cards Grid
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
      elements: group2Cards.map(c => createCard(c.title, c.desc, c.bullets, 31.8))
    }
  ]
};

// 4. GROUP 03: DIGITAL MARKETING & PRACTICE GROWTH (4 Cards)
const group3Cards = [
  {
    title: "Social Media Management",
    desc: "Professional management of practice social media profiles to educate patients, promote clinical services, and build patient community engagement.",
    bullets: [
      "Healthcare-compliant educational post creation and curation",
      "Active reputation management and community interaction",
      "Multi-platform presence across LinkedIn, Facebook, and Instagram"
    ]
  },
  {
    title: "SEO & Local Search",
    desc: "Targeted medical search engine optimization and Google Business Profile management ensuring your clinic ranks at the top for local patients seeking specialized care.",
    bullets: [
      "Continuous practice citation and ranking profile calibration",
      "Hyper-local medical keyword targeting ensuring high-intent traffic",
      "Proven organic practice brand position and patient growth"
    ]
  },
  {
    title: "Website Design & Development",
    desc: "Modern, fast, mobile-responsive, and ADA/HIPAA-compliant healthcare websites built to convert prospective patients into scheduled appointments.",
    bullets: [
      "Clear, intuitive direct-to-EHR digital patient intake appointment booking",
      "Ultra-fast responsive architecture and mobile page load speeds",
      "Secure patient intake forms and relationship repositories"
    ]
  },
  {
    title: "Branding & Content Creation",
    desc: "High-value medical practice branding, logo design, patient education brochures, and authoritative clinical content that establish practice expertise.",
    bullets: [
      "Polished collateral identity guides, color schemes, and logos",
      "Clear patient-facing fee transparency sheets and brochures",
      "Provider bios, clinical service overviews, and healthcare articles"
    ]
  }
];

const group3Section = {
  id: createId(),
  elType: "container",
  isInner: false,
  settings: {
    content_width: "boxed",
    boxed_width: { unit: "px", size: 1220, sizes: [] },
    flex_direction: "column",
    flex_align_items: "flex-start",
    flex_gap: { unit: "px", size: 24, column: "24", row: "24" },
    padding: { unit: "px", top: "45", right: "20", bottom: "60", left: "20", isLinked: false }
  },
  elements: [
    // Section Header
    {
      id: createId(),
      elType: "container",
      isInner: true,
      settings: {
        content_width: "full",
        flex_direction: "column",
        flex_align_items: "flex-start",
        flex_gap: { unit: "px", size: 6, column: "6", row: "6" }
      },
      elements: [
        {
          id: createId(),
          elType: "widget",
          widgetType: "heading",
          settings: {
            title: `<div style="display:inline-flex;align-items:center;gap:6px;padding:4px 12px;background-color:#EAF8F8;border:1px solid #A7E8E9;border-radius:4px;color:#179A9E;font-size:11px;font-weight:800;letter-spacing:1px;text-transform:uppercase;"><i class="fas fa-bullhorn"></i> GROUP 03</div>`,
            header_size: "div",
            _margin: { unit: "px", top: "0", right: "0", bottom: "4", left: "0", isLinked: false },
            margin: { unit: "px", top: "0", right: "0", bottom: "4", left: "0", isLinked: false }
          }
        },
        {
          id: createId(),
          elType: "widget",
          widgetType: "heading",
          settings: {
            title: "Digital Marketing & Practice Growth",
            header_size: "h2",
            title_color: "#0C2340",
            typography_typography: "custom",
            typography_font_family: "Plus Jakarta Sans",
            typography_font_size: { unit: "px", size: 28 },
            typography_font_weight: "800",
            typography_line_height: { unit: "em", size: 1.25 },
            _margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false },
            margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false }
          }
        }
      ]
    },
    // 4 Cards Grid
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
      elements: group3Cards.map(c => createCard(c.title, c.desc, c.bullets, 23.5))
    }
  ]
};

// 5. CTA BANNER (Ready to Modernize Your Practice Technology?)
const techCTASection = {
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
        title: "Ready to Modernize Your Practice Technology?",
        header_size: "h2",
        align: "center",
        title_color: "#FFFFFF",
        typography_typography: "custom",
        typography_font_family: "Plus Jakarta Sans",
        typography_font_size: { unit: "px", size: 34 },
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
        editor: `<p style="margin:0 auto;max-width:680px;font-size:16px;color:#94A3B8;line-height:1.65;text-align:center;">Experience the combined power of certified medical billing and enterprise IT infrastructure. Let’s find your missing revenue.</p>`,
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
        text: "Let’s Find Your Missing Revenue",
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

// ============================================================================
// SAVE SECTION-BY-SECTION TEMPLATES FOR TECHNOLOGY & PRACTICE GROWTH
// ============================================================================

// 1. Hero
saveTemplate(
  'service-3-sec-1-hero-elementor', 
  techHeroSection, 
  "Technology & Growth - 1. Hero Banner (100% Flexbox Container)"
);

// 2. Group 01: Healthcare Technology & Infrastructure
saveTemplate(
  'service-3-sec-2-healthcare-infrastructure-elementor', 
  group1Section, 
  "Technology & Growth - 2. Group 01: Infrastructure (100% Flexbox Container)"
);

// 3. Group 02: Security, Backup & IT Support
saveTemplate(
  'service-3-sec-3-security-backup-it-elementor', 
  group2Section, 
  "Technology & Growth - 3. Group 02: Security & Backup (100% Flexbox Container)"
);

// 4. Group 03: Digital Marketing & Practice Growth
saveTemplate(
  'service-3-sec-4-marketing-growth-elementor', 
  group3Section, 
  "Technology & Growth - 4. Group 03: Marketing & Growth (100% Flexbox Container)"
);

// 5. CTA Banner
saveTemplate(
  'service-3-sec-5-cta-banner-elementor', 
  techCTASection, 
  "Technology & Growth - 5. CTA Banner (100% Flexbox Container)"
);

// Complete Full Page (Exact sequence matching user screenshot media_1792639337979.png)
const completeTechPage = [
  techHeroSection,
  group1Section,
  group2Section,
  group3Section,
  techCTASection
];

saveTemplate(
  'service-3-technology-support-elementor', 
  completeTechPage, 
  "Technology & Practice Growth - Complete Page (100% Flexbox Container, Exact Screenshot Match)"
);

console.log("\nTechnology & Practice Growth templates successfully generated matching screenshot!");
