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
// PATIENT & PRACTICE SERVICES (Matching media_1792638268780.png)
// With 10 Core Offerings structured in 2-Card Pairs (2-Column Grid)!
// ============================================================================

// 1. HERO BANNER
const heroSection = {
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
        title: `<nav style="font-size:13.5px;font-weight:600;color:#64748B;display:inline-block;margin-bottom:12px;"><a href="/" style="color:#64748B;text-decoration:none;">Home</a> <span style="margin:0 8px;color:#94A3B8;">&gt;</span> <a href="/services" style="color:#64748B;text-decoration:none;">Services</a> <span style="margin:0 8px;color:#94A3B8;">&gt;</span> <span style="color:#179A9E;">Patient &amp; Practice Services</span></nav>`,
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
        title: `<div style="display:inline-flex;align-items:center;gap:6px;padding:6px 18px;background-color:#EAF8F8;border:1px solid #A7E8E9;border-radius:50px;color:#179A9E;font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;margin-bottom:14px;line-height:1.4;"><i class="fas fa-user-shield" style="font-size:12px;"></i> OFFICIAL BOOKLET SERVICES</div>`,
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
        title: "Patient & Practice Services",
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
        editor: `<p style="margin:0 auto;max-width:760px;font-size:16.5px;color:#4A5568;line-height:1.7;text-align:center;">Empower your practice with clear cost estimates, patient billing customer care, flexible payment plans, staff training, KPI reporting, and start-up support.</p>`,
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
            text: "Request Practice Workflow Audit",
            link: { url: "#contact", is_external: false, nofollow: false },
            button_type: "default",
            selected_icon: { value: "fas fa-clipboard-check", library: "fa-solid" },
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

// 2. PATIENT BILLING REVENUE CYCLE SEQUENCE BANNER (Matching Screenshot)
const sequenceBanner = {
  id: createId(),
  elType: "container",
  isInner: false,
  settings: {
    content_width: "boxed",
    boxed_width: { unit: "px", size: 1220, sizes: [] },
    flex_direction: "column",
    flex_align_items: "center",
    flex_gap: { unit: "px", size: 20, column: "20", row: "20" },
    background_background: "classic",
    background_color: "#FFFFFF",
    border_border: "solid",
    border_width: { unit: "px", top: "1", right: "1", bottom: "1", left: "1", isLinked: true },
    border_color: "#E2E8F0",
    border_radius: { unit: "px", top: "20", right: "20", bottom: "20", left: "20", isLinked: true },
    padding: { unit: "px", top: "40", right: "24", bottom: "40", left: "24", isLinked: false },
    _margin: { unit: "px", top: "10", right: "auto", bottom: "45", left: "auto", isLinked: false },
    margin: { unit: "px", top: "10", right: "auto", bottom: "45", left: "auto", isLinked: false }
  },
  elements: [
    {
      id: createId(),
      elType: "widget",
      widgetType: "heading",
      settings: {
        title: `<div style="display:inline-flex;align-items:center;gap:6px;padding:5px 16px;background-color:#EAF8F8;border:1px solid #A7E8E9;border-radius:50px;color:#179A9E;font-size:11.5px;font-weight:800;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px;line-height:1.4;">OFFICIAL BOOKLET WORKFLOW</div>`,
        header_size: "div",
        align: "center",
        title_color: "#179A9E",
        _margin: { unit: "px", top: "0", right: "0", bottom: "8", left: "0", isLinked: false },
        margin: { unit: "px", top: "0", right: "0", bottom: "8", left: "0", isLinked: false }
      }
    },
    {
      id: createId(),
      elType: "widget",
      widgetType: "heading",
      settings: {
        title: "Patient Billing Revenue Cycle Sequence",
        header_size: "h2",
        align: "center",
        title_color: "#0C2340",
        typography_typography: "custom",
        typography_font_family: "Plus Jakarta Sans",
        typography_font_size: { unit: "px", size: 28 },
        typography_font_weight: "800",
        typography_line_height: { unit: "em", size: 1.25 },
        _margin: { unit: "px", top: "0", right: "0", bottom: "16", left: "0", isLinked: false },
        margin: { unit: "px", top: "0", right: "0", bottom: "16", left: "0", isLinked: false }
      }
    },
    {
      id: createId(),
      elType: "container",
      isInner: true,
      settings: {
        content_width: "full",
        flex_direction: "row",
        flex_wrap: "wrap",
        flex_justify_content: "center",
        flex_align_items: "center",
        flex_gap: { unit: "px", size: 10, column: "10", row: "10" }
      },
      elements: [
        "Patient Visit",
        "Patient Statement",
        "Payment Plan / Collection",
        "Patient Payment",
        "Practice Paid"
      ].flatMap((step, idx) => {
        const stepCard = {
          id: createId(),
          elType: "container",
          isInner: true,
          settings: {
            content_width: "full",
            flex_direction: "row",
            flex_align_items: "center",
            flex_gap: { unit: "px", size: 8, column: "8", row: "8" },
            background_background: "classic",
            background_color: "#F8FAFC",
            border_border: "solid",
            border_width: { unit: "px", top: "1", right: "1", bottom: "1", left: "1", isLinked: true },
            border_color: "#E2E8F0",
            border_radius: { unit: "px", top: "10", right: "10", bottom: "10", left: "10", isLinked: true },
            padding: { unit: "px", top: "10", right: "14", bottom: "10", left: "12", isLinked: false }
          },
          elements: [
            {
              id: createId(),
              elType: "widget",
              widgetType: "heading",
              settings: {
                title: `<span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;background-color:#179A9E;color:#FFFFFF;border-radius:50%;font-size:11.5px;font-weight:800;">${idx + 1}</span>`,
                header_size: "div",
                _margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false },
                margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false }
              }
            },
            {
              id: createId(),
              elType: "widget",
              widgetType: "heading",
              settings: {
                title: step,
                header_size: "div",
                title_color: "#0C2340",
                typography_typography: "custom",
                typography_font_family: "Plus Jakarta Sans",
                typography_font_size: { unit: "px", size: 13 },
                typography_font_weight: "700",
                _margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false },
                margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false }
              }
            }
          ]
        };

        if (idx < 4) {
          const arrowWidget = {
            id: createId(),
            elType: "widget",
            widgetType: "icon",
            settings: {
              selected_icon: { value: "fas fa-arrow-right", library: "fa-solid" },
              view: "default",
              primary_color: "#94A3B8",
              size: { unit: "px", size: 13 },
              _margin: { unit: "px", top: "0", right: "2", bottom: "0", left: "2", isLinked: false },
              margin: { unit: "px", top: "0", right: "2", bottom: "0", left: "2", isLinked: false }
            }
          };
          return [stepCard, arrowWidget];
        }
        return [stepCard];
      })
    }
  ]
};

// 3. THE 10 PATIENT & PRACTICE OFFERINGS DATA (Exact from Screenshot media_1792638268780.png)
const tenPatientOfferings = [
  {
    num: "01",
    title: "Patient Medical Record",
    desc: "Accurate demographic and medical record capture, ensuring clean clinical histories, straight-through claims, and seamless insurance cross-referencing.",
    bullets: [
      "Patient intake coordination ensuring data fidelity across clinic systems",
      "Custom medical chart record auditing and HIPAA compliance safety",
      "Elimination of front-end EMR chart errors reducing denials"
    ]
  },
  {
    num: "02",
    title: "Payment Plans & Self-Pay Collections",
    desc: "Flexible, structured payment options for uninsured and self-pay patients, tailored to the financial realities of patient care without aggressive tactics.",
    bullets: [
      "Customized recurring installment management",
      "Fair debt collections adhering to empathetic resolution",
      "Comprehensive self-pay recovery protocols that preserve patient relationships"
    ]
  },
  {
    num: "03",
    title: "Cost Estimation",
    desc: "Transparent upfront treatment estimates providing clear breakdowns of clinical services, preventing unexpected bills, and conforming to No Surprises Act regulations.",
    bullets: [
      "Comprehensive calculation of surgical and diagnostic care costs",
      "Real-time copay, deductible, and coinsurance estimation",
      "Patient pre-care financial clarity that eliminates post-op sticker shock"
    ]
  },
  {
    num: "04",
    title: "Patient Billing Support",
    desc: "Dedicated, empathetic billing customer service addressing patient inquiries regarding invoices, insurance balances, and explanation of benefits (EOBs).",
    bullets: [
      "Toll-free patient support line operated by courteous healthcare billing specialists",
      "Bilingual communication across all patient customer touches",
      "Rapid dispute-resolution protecting clinical goodwill and reputation"
    ]
  },
  {
    num: "05",
    title: "Legacy A/R Recovery",
    desc: "Targeted recovery projects for aged, stalled, and delinquent practice receivables that have lingered past 60, 90, or 120+ days.",
    bullets: [
      "Audit and recovery of legacy self-pay and clinical debts",
      "Direct reconciliations aligned to CMS, commercial insurance, and patients",
      "Guaranteed cash recovery from previously written-off balances"
    ]
  },
  {
    num: "06",
    title: "Front-Office & Scheduling Assistance",
    desc: "Comprehensive front-office support optimizing provider schedules, clinical intake forms, patient check-in flows, and patient engagement procedures.",
    bullets: [
      "Intake scheduling optimization and appointment confirmation workflows",
      "Enhanced front-desk patient intake protocol efficiency",
      "Direct assistance to avoid clinical cancellation and no-show rates"
    ]
  },
  {
    num: "07",
    title: "Financial Reporting & KPI Dashboards",
    desc: "Clear, comprehensive executive financial reports and real-time KPI dashboards tracking collection efficiency, A/R turnaround times, and clean rates.",
    bullets: [
      "Detailed daily, weekly, and monthly practice performance analytics",
      "Monthly review conferences directly with your managing leadership",
      "Actionable operational intelligence to boost overall practice collections"
    ]
  },
  {
    num: "08",
    title: "Revenue Cycle Benchmarking",
    desc: "Detailed financial metrics benchmarking your practice against regional and specialty clinic collection averages, identifying opportunities for operational and financial improvement.",
    bullets: [
      "Specialty-specific fee schedule comparison against market benchmarks",
      "Department and physician performance auditing against national averages",
      "Actionable recommendations to minimize operational overhead"
    ]
  },
  {
    num: "09",
    title: "Staff Training",
    desc: "Comprehensive training for front-desk, administrative, and clinical staff on insurance verification, documentation guidelines, and patient communication.",
    bullets: [
      "Personalized onsite or remote front-desk and billing coaching",
      "Patient financial counseling communication scripts",
      "Periodic refresher courses on evolving payer guidelines and billing rules"
    ]
  },
  {
    num: "10",
    title: "New-Practice Start-Up Support",
    desc: "End-to-end operational setup for newly established practices, covering practice management system selection, billing configuration, credentialing, and fee structure design.",
    bullets: [
      "Initial practice setup and management system configuration",
      "Complete payer credentialing and provider enrollment orchestration",
      "Clinic fee schedule optimization to maximize start-up cash flow"
    ]
  }
];

// Helper: Build a single Offering Card
function createPatientOfferingCard(item) {
  return {
    id: createId(),
    elType: "container",
    isInner: true,
    settings: {
      content_width: "full",
      width: { unit: "%", size: 48.5, sizes: [] },
      width_tablet: { unit: "%", size: 100, sizes: [] },
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
      padding: { unit: "px", top: "28", right: "26", bottom: "28", left: "26", isLinked: true },
      _margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false },
      margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false }
    },
    elements: [
      // Top Row: Number Badge + Title
      {
        id: createId(),
        elType: "container",
        isInner: true,
        settings: {
          content_width: "full",
          flex_direction: "row",
          flex_align_items: "center",
          flex_gap: { unit: "px", size: 12, column: "12", row: "12" },
          _margin: { unit: "px", top: "0", right: "0", bottom: "4", left: "0", isLinked: false },
          margin: { unit: "px", top: "0", right: "0", bottom: "4", left: "0", isLinked: false }
        },
        elements: [
          {
            id: createId(),
            elType: "widget",
            widgetType: "heading",
            settings: {
              title: `<span style="display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;background-color:#EAF8F8;border:1.5px solid #A7E8E9;color:#179A9E;border-radius:50%;font-size:14px;font-weight:800;">${item.num}</span>`,
              header_size: "div",
              _margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false },
              margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false }
            }
          },
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
              typography_font_size: { unit: "px", size: 19 },
              typography_font_weight: "800",
              typography_line_height: { unit: "em", size: 1.25 },
              _margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false },
              margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false }
            }
          }
        ]
      },
      // Description
      {
        id: createId(),
        elType: "widget",
        widgetType: "text-editor",
        settings: {
          editor: `<p style="margin:0;font-size:14.5px;color:#4A5568;line-height:1.65;">${item.desc}</p>`,
          text_color: "#4A5568",
          _margin: { unit: "px", top: "0", right: "0", bottom: "14", left: "0", isLinked: false },
          margin: { unit: "px", top: "0", right: "0", bottom: "14", left: "0", isLinked: false }
        }
      },
      // Bullets (Icon List)
      {
        id: createId(),
        elType: "widget",
        widgetType: "icon-list",
        settings: {
          icon_list: item.bullets.map(b => ({
            text: b,
            selected_icon: { value: "far fa-check-circle", library: "fa-regular" }
          })),
          icon_color: "#179A9E",
          icon_size: { unit: "px", size: 14 },
          space_between: { unit: "px", size: 9 },
          text_color: "#334155",
          typography_typography: "custom",
          typography_font_family: "Plus Jakarta Sans",
          typography_font_size: { unit: "px", size: 13.5 },
          typography_font_weight: "500",
          typography_line_height: { unit: "em", size: 1.5 },
          _margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false },
          margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false }
        }
      }
    ]
  };
}

// 4. THE 10 PATIENT & PRACTICE OFFERINGS SECTION (Pairs of 2 side by side!)
const tenPatientOfferingsSection = {
  id: createId(),
  elType: "container",
  isInner: false,
  settings: {
    content_width: "boxed",
    boxed_width: { unit: "px", size: 1220, sizes: [] },
    flex_direction: "column",
    flex_align_items: "center",
    flex_gap: { unit: "px", size: 16, column: "16", row: "16" },
    padding: { unit: "px", top: "50", right: "20", bottom: "60", left: "20", isLinked: false }
  },
  elements: [
    {
      id: createId(),
      elType: "widget",
      widgetType: "heading",
      settings: {
        title: `<div style="display:inline-flex;align-items:center;gap:6px;padding:6px 18px;background-color:#EAF8F8;border:1px solid #A7E8E9;border-radius:50px;color:#179A9E;font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;margin-bottom:14px;line-height:1.4;">PATIENT &amp; PRACTICE WORKFLOW</div>`,
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
        title: "The 10 Patient & <span style=\"color:#179A9E;\">Practice Offerings</span>",
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
        editor: `<p style="margin:0 auto;max-width:760px;font-size:16px;color:#4A5568;line-height:1.65;text-align:center;">Providing patient empathy while improving point-of-service collections. StelleMed bridges clinical workflows with financial transparency for streamlined practice growth.</p>`,
        text_color: "#4A5568",
        _margin: { unit: "px", top: "0", right: "0", bottom: "36", left: "0", isLinked: false },
        margin: { unit: "px", top: "0", right: "0", bottom: "36", left: "0", isLinked: false }
      }
    },
    // The 10 Cards in 2-Column Pairs (2 side-by-side, 5 rows)
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
        flex_gap: { unit: "px", size: 24, column: "24", row: "24" }
      },
      elements: tenPatientOfferings.map(item => createPatientOfferingCard(item))
    }
  ]
};

// 5. PRACTICE COMMITMENTS & CLINICAL SHOWCASE (The Right Box from Screenshot media_1792638268780.png)
const practiceCommitmentsSection = {
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
    flex_gap: { unit: "px", size: 40, column: "40", row: "30" },
    background_background: "classic",
    background_color: "#F8FAFC",
    border_border: "solid",
    border_width: { unit: "px", top: "1", right: "1", bottom: "1", left: "1", isLinked: true },
    border_color: "#E2E8F0",
    border_radius: { unit: "px", top: "20", right: "20", bottom: "20", left: "20", isLinked: true },
    padding: { unit: "px", top: "40", right: "36", bottom: "40", left: "36", isLinked: true },
    _margin: { unit: "px", top: "20", right: "auto", bottom: "50", left: "auto", isLinked: false },
    margin: { unit: "px", top: "20", right: "auto", bottom: "50", left: "auto", isLinked: false }
  },
  elements: [
    // Left: Image Box with Ophthalmologist / Medical Device
    {
      id: createId(),
      elType: "container",
      isInner: true,
      settings: {
        content_width: "full",
        width: { unit: "%", size: 45, sizes: [] },
        width_tablet: { unit: "%", size: 100, sizes: [] },
        width_mobile: { unit: "%", size: 100, sizes: [] },
        border_radius: { unit: "px", top: "16", right: "16", bottom: "16", left: "16", isLinked: true },
        overflow: "hidden",
        box_shadow_box_shadow_type: "yes",
        box_shadow_box_shadow: { horizontal: 0, vertical: 10, blur: 25, spread: -5, color: "rgba(12, 35, 64, 0.12)" }
      },
      elements: [
        {
          id: createId(),
          elType: "widget",
          widgetType: "image",
          settings: {
            image: { url: "https://raw.githubusercontent.com/waqasalidev/sm/main/public/service2.jpg" },
            image_size: "full"
          }
        }
      ]
    },
    // Right: Practice Commitments Details
    {
      id: createId(),
      elType: "container",
      isInner: true,
      settings: {
        content_width: "full",
        width: { unit: "%", size: 50, sizes: [] },
        width_tablet: { unit: "%", size: 100, sizes: [] },
        width_mobile: { unit: "%", size: 100, sizes: [] },
        flex_direction: "column",
        flex_gap: { unit: "px", size: 14, column: "14", row: "14" }
      },
      elements: [
        {
          id: createId(),
          elType: "widget",
          widgetType: "heading",
          settings: {
            title: "Practice Commitments",
            header_size: "h3",
            title_color: "#0C2340",
            typography_typography: "custom",
            typography_font_family: "Plus Jakarta Sans",
            typography_font_size: { unit: "px", size: 24 },
            typography_font_weight: "800",
            _margin: { unit: "px", top: "0", right: "0", bottom: "8", left: "0", isLinked: false },
            margin: { unit: "px", top: "0", right: "0", bottom: "8", left: "0", isLinked: false }
          }
        },
        // 3 Commitments Items List
        {
          id: createId(),
          elType: "container",
          isInner: true,
          settings: {
            content_width: "full",
            flex_direction: "column",
            flex_gap: { unit: "px", size: 10, column: "10", row: "10" }
          },
          elements: [
            { icon: "fas fa-heart", num: "Empathetic", label: "Patient communication and support across all channels" },
            { icon: "fas fa-user-friends", num: "Courteous", label: "Resolution of patient financial and invoice inquiries" },
            { icon: "fas fa-shield-alt", num: "Compliant", label: "Strict No Surprises Act enforcement and transparent GFEs" }
          ].map(c => ({
            id: createId(),
            elType: "container",
            isInner: true,
            settings: {
              content_width: "full",
              flex_direction: "row",
              flex_align_items: "center",
              flex_gap: { unit: "px", size: 12, column: "12", row: "12" },
              background_background: "classic",
              background_color: "#FFFFFF",
              border_border: "solid",
              border_width: { unit: "px", top: "1", right: "1", bottom: "1", left: "1", isLinked: true },
              border_color: "#E2E8F0",
              border_radius: { unit: "px", top: "10", right: "10", bottom: "10", left: "10", isLinked: true },
              padding: { unit: "px", top: "10", right: "14", bottom: "10", left: "14", isLinked: true }
            },
            elements: [
              {
                id: createId(),
                elType: "widget",
                widgetType: "icon",
                settings: {
                  selected_icon: { value: c.icon, library: "fa-solid" },
                  view: "default",
                  primary_color: "#179A9E",
                  size: { unit: "px", size: 16 }
                }
              },
              {
                id: createId(),
                elType: "widget",
                widgetType: "heading",
                settings: {
                  title: `<span style="font-weight:800;color:#0C2340;margin-right:6px;">${c.num}:</span> <span style="font-size:13.5px;color:#4A5568;">${c.label}</span>`,
                  header_size: "div",
                  _margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false },
                  margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false }
                }
              }
            ]
          }))
        },
        // Callout Box
        {
          id: createId(),
          elType: "container",
          isInner: true,
          settings: {
            content_width: "full",
            background_background: "classic",
            background_color: "#EAF8F8",
            border_border: "solid",
            border_width: { unit: "px", top: "1", right: "1", bottom: "1", left: "1", isLinked: true },
            border_color: "#A7E8E9",
            border_radius: { unit: "px", top: "10", right: "10", bottom: "10", left: "10", isLinked: true },
            padding: { unit: "px", top: "12", right: "16", bottom: "12", left: "16", isLinked: true },
            _margin: { unit: "px", top: "6", right: "0", bottom: "6", left: "0", isLinked: false },
            margin: { unit: "px", top: "6", right: "0", bottom: "6", left: "0", isLinked: false }
          },
          elements: [
            {
              id: createId(),
              elType: "widget",
              widgetType: "text-editor",
              settings: {
                editor: `<p style="margin:0;font-size:12.5px;color:#0F766E;line-height:1.5;"><strong>Backed by Corvit & StelleCloud:</strong> Empowering healthcare practices across the nation with 25+ years of technology and training excellence.</p>`,
                text_color: "#0F766E"
              }
            }
          ]
        },
        // Button
        {
          id: createId(),
          elType: "widget",
          widgetType: "button",
          settings: {
            text: "Request Good Practice Walkthrough",
            link: { url: "#contact", is_external: false, nofollow: false },
            selected_icon: { value: "fas fa-arrow-right", library: "fa-solid" },
            icon_align: "right",
            icon_indent: { unit: "px", size: 8 },
            background_color: "#179A9E",
            button_text_color: "#FFFFFF",
            background_hover_color: "#0F7B7E",
            hover_color: "#FFFFFF",
            border_radius: { unit: "px", top: "10", right: "10", bottom: "10", left: "10", isLinked: true },
            padding: { unit: "px", top: "13", right: "22", bottom: "13", left: "22", isLinked: false },
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

// 6. CTA BANNER (Elevate Your Practice Revenue and Patient Loyalty)
const ctaSection = {
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
        title: "Elevate Your Practice Revenue and Patient Loyalty",
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
        editor: `<p style="margin:0 auto;max-width:680px;font-size:16px;color:#94A3B8;line-height:1.65;text-align:center;">Discover how specialized patient financial care and optimized office workflows can secure positive clinical cash flow while maximizing collections.</p>`,
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
// SAVE SECTION-BY-SECTION TEMPLATES FOR PATIENT & PRACTICE
// ============================================================================

// 1. Hero
saveTemplate(
  'service-2-sec-1-hero-elementor', 
  heroSection, 
  "Patient & Practice - 1. Hero Banner (100% Flexbox Container)"
);

// 2. Sequence Banner
saveTemplate(
  'service-2-sec-2-workflow-sequence-elementor', 
  sequenceBanner, 
  "Patient & Practice - 2. Patient Billing Revenue Cycle Sequence (100% Flexbox Container)"
);

// 3. The 10 Patient & Practice Offerings (In 2-Card Pairs!)
saveTemplate(
  'service-2-sec-3-ten-offerings-2col-elementor', 
  tenPatientOfferingsSection, 
  "Patient & Practice - 3. The 10 Patient Offerings in 2-Card Pairs (100% Flexbox Container)"
);

// 4. Practice Commitments & Clinical Showcase Card
saveTemplate(
  'service-2-sec-4-practice-commitments-elementor', 
  practiceCommitmentsSection, 
  "Patient & Practice - 4. Practice Commitments & Showcase (100% Flexbox Container)"
);

// 5. CTA Banner
saveTemplate(
  'service-2-sec-5-cta-banner-elementor', 
  ctaSection, 
  "Patient & Practice - 5. CTA Banner (100% Flexbox Container)"
);

// Complete Full Page (Exact sequence matching user screenshot media_1792638268780.png)
const completePatientPage = [
  heroSection,
  sequenceBanner,
  tenPatientOfferingsSection,
  practiceCommitmentsSection,
  ctaSection
];

saveTemplate(
  'service-2-patient-practice-elementor', 
  completePatientPage, 
  "Patient & Practice Services - Complete Page (100% Flexbox Container, 10 Cards in 2-Column Pairs)"
);

console.log("\nPatient & Practice templates successfully generated with 10 cards in 2-column pairs!");
