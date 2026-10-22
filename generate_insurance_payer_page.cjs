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
// INSURANCE & PAYER SERVICES (Matching media_1792636996851.png)
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
        title: `<nav style="font-size:13.5px;font-weight:600;color:#64748B;display:inline-block;margin-bottom:12px;"><a href="/" style="color:#64748B;text-decoration:none;">Home</a> <span style="margin:0 8px;color:#94A3B8;">&gt;</span> <a href="/services" style="color:#64748B;text-decoration:none;">Services</a> <span style="margin:0 8px;color:#94A3B8;">&gt;</span> <span style="color:#179A9E;">Insurance &amp; Payer Services</span></nav>`,
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
        title: `<div style="display:inline-flex;align-items:center;gap:6px;padding:6px 18px;background-color:#EAF8F8;border:1px solid #A7E8E9;border-radius:50px;color:#179A9E;font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;margin-bottom:14px;line-height:1.4;"><i class="fas fa-file-invoice-dollar" style="font-size:12px;"></i> COMPREHENSIVE PAYER ADJUDICATION</div>`,
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
        title: "Insurance & Payer Services",
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
        editor: `<p style="margin:0 auto;max-width:760px;font-size:16.5px;color:#4A5568;line-height:1.7;text-align:center;">From upfront eligibility verification to clean claim submission, certified coding, aggressive appeals, and aged A/R recovery — we manage the complete payer revenue cycle.</p>`,
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
            text: "Request Practice Clinical Audit",
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

// 2. 7-STEP REVENUE CYCLE SEQUENCE BANNER
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
        title: "Insurance / Payer Revenue Cycle Sequence",
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
        "Eligibility & Authorization",
        "Medical Coding",
        "Claim Submission",
        "Denials & Appeals",
        "Payer Payment",
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

        if (idx < 6) {
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

// 3. THE 10 CORE OFFERINGS DATA
const tenCoreOfferings = [
  {
    num: "01",
    title: "Eligibility & Benefits Verification",
    desc: "Verify patient active coverage, primary/secondary policy status, co-pays, deductibles, and pre-existing condition rules prior to scheduled visits to prevent claim rejections.",
    bullets: [
      "Real-time automated clearinghouse inquiries (270/271)",
      "Detailed breakdown of copays, co-insurance, and out-of-pocket maximums",
      "Elimination of inactive insurance write-offs at the front desk"
    ]
  },
  {
    num: "02",
    title: "Prior Authorization",
    desc: "Securing necessary clinical approvals and precertifications from insurance payers before diagnostics, specialty consultations, procedures, and surgeries take place.",
    bullets: [
      "Submission of clinical documentation and medical necessity justifications",
      "Payer follow-up and turnaround tracking to prevent treatment delays",
      "Direct tracking of approval numbers matched to billing claims"
    ]
  },
  {
    num: "03",
    title: "Provider Credentialing & Payer Enrollment",
    desc: "Comprehensive enrollment and primary source verification with Medicare, Medicaid, and commercial health insurance networks to guarantee billing privileges.",
    bullets: [
      "CAQH profile setup, maintenance, and periodic re-attestation",
      "Commercial and government payer contract applications",
      "Continuous tracking of expiring licenses, DEA, and board certifications"
    ]
  },
  {
    num: "04",
    title: "Medical Coding",
    desc: "Certified AAPC/AHIMA medical coders assign precise ICD-10-CM, CPT, and HCPCS Level II codes and appropriate modifiers directly from provider documentation.",
    bullets: [
      "Accurate code assignment reflecting clinical diagnosis and care provided",
      "Correct modifier utilization (e.g. 25, 59, 76) to prevent bundling denials",
      "Specialty-specific chart reviews and clinical compliance auditing"
    ]
  },
  {
    num: "05",
    title: "Charge Entry & Claim Creation",
    desc: "Accurate and rapid entry of patient encounters, fee schedules, diagnostic pairings, and clinical billing charges into the practice management system.",
    bullets: [
      "Verification of dates of service, rendering provider, and facility NPI",
      "Validation of billed amounts against practice fee schedules",
      "Same-day encounter charge entry to reduce lag time"
    ]
  },
  {
    num: "06",
    title: "Claim Submission",
    desc: "Electronic batch scrub and dispatch of 837P and 837I clearinghouse claim files within 24–48 hours of clinical care.",
    bullets: [
      "Direct clearinghouse transmission across 50+ payer connections",
      "Electronic validation against 3M+ dynamic payer rule edits",
      "Same-day resolution of clearinghouse front-end format errors"
    ]
  },
  {
    num: "07",
    title: "Payment Posting",
    desc: "Daily posting of Electronic Remittance Advices (ERAs) and manual Explanation of Benefits (EOBs) payments, contractual adjustments, and copays.",
    bullets: [
      "Same-day reconciliation of electronic bank deposits against posted funds",
      "Line-item posting of allowable amounts, deductibles, and copayments",
      "Accurate secondary and tertiary payer claim balance rollover"
    ]
  },
  {
    num: "08",
    title: "Remittance Reconciliation",
    desc: "Auditing payer remits against contracted fee schedules to catch underpayments, silent contractual recoupments, and incorrect allowable calculations.",
    bullets: [
      "Automated detection of payer payment discrepancies",
      "Audit of bundled line-item denials and contract violations",
      "Immediate escalation of incorrect payer fee reductions"
    ]
  },
  {
    num: "09",
    title: "Denial Management & Appeals",
    desc: "Aggressive categorization, root-cause investigation, correction, and formal clinical appeal submission for all denied or rejected claims.",
    bullets: [
      "Never writing off legitimate clinical revenue",
      "Clinical appeal letters with medical record documentation",
      "Payer denial tracking and prevention of repetitive billing errors"
    ]
  },
  {
    num: "10",
    title: "Insurance A/R Follow-Up",
    desc: "Systematic aging accounts receivable tracking at 30, 60, 90, and 120+ days to hold insurance carriers accountable until full reimbursement is recovered.",
    bullets: [
      "Dedicated work-queues prioritizing high-dollar and aged claims",
      "Direct phone escalations with payer supervisors and claims adjusters",
      "Resolution of unpaid, stalled, or lost insurance balances"
    ]
  }
];

// Helper: Build a single Offering Card
function createOfferingCard(item) {
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

// 4. THE 10 CORE OFFERINGS SECTION (Pairs of 2 side by side!)
const tenCoreOfferingsSection = {
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
        title: `<div style="display:inline-flex;align-items:center;gap:6px;padding:6px 18px;background-color:#EAF8F8;border:1px solid #A7E8E9;border-radius:50px;color:#179A9E;font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;margin-bottom:14px;line-height:1.4;">COMPREHENSIVE PAYER WORKFLOW</div>`,
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
        title: "The 10 Core Insurance & <span style=\"color:#179A9E;\">Payer Offerings</span>",
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
        editor: `<p style="margin:0 auto;max-width:760px;font-size:16px;color:#4A5568;line-height:1.65;text-align:center;">Whether as a full-service partner or to bolster your internal billing team, our certified team handles every phase of the payer lifecycle to ensure maximum legal cash flow.</p>`,
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
      elements: tenCoreOfferings.map(item => createOfferingCard(item))
    }
  ]
};

// 5. OFFICE COMMITMENTS & CLINICAL OVERSIGHT (The Right Box from the Image)
const officeCommitmentsSection = {
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
    // Left: Image Box with Technician
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
            image: { url: "https://raw.githubusercontent.com/waqasalidev/sm/main/public/service1.jpg" },
            image_size: "full"
          }
        }
      ]
    },
    // Right: Office Commitments Details
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
            title: "Office Commitments",
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
        // 4 Items List
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
            { icon: "fas fa-bolt", num: "Seconds", label: "Eligibility verification within seconds prior to service" },
            { icon: "fas fa-clock", num: "24–48 Hours", label: "Clean electronic claim submission turnaround" },
            { icon: "fas fa-receipt", num: "Same-Day", label: "Payment posting and remittance reconciliation" },
            { icon: "fas fa-chart-line", num: "Monthly", label: "Executive financial review & denial trend audit" }
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
        // Callout box
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
                editor: `<p style="margin:0;font-size:12.5px;color:#0F766E;line-height:1.5;"><strong>Backed by Corvit & StelleCloud:</strong> Enterprise-grade medical billing, cybersecurity, and compliance training backing 350,000+ healthcare professionals.</p>`,
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
            text: "Talk to a Practice Consultant",
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

// 6. SIX CHECKS BEFORE EVERY CLAIM GOES OUT (Matching Screenshot)
const sixChecksSection = {
  id: createId(),
  elType: "container",
  isInner: false,
  settings: {
    content_width: "boxed",
    boxed_width: { unit: "px", size: 1220, sizes: [] },
    flex_direction: "column",
    flex_align_items: "center",
    flex_gap: { unit: "px", size: 16, column: "16", row: "16" },
    background_background: "classic",
    background_color: "#FFFFFF",
    padding: { unit: "px", top: "60", right: "20", bottom: "60", left: "20", isLinked: false }
  },
  elements: [
    {
      id: createId(),
      elType: "widget",
      widgetType: "heading",
      settings: {
        title: `<div style="display:inline-flex;align-items:center;gap:6px;padding:6px 18px;background-color:#EAF8F8;border:1px solid #A7E8E9;border-radius:50px;color:#179A9E;font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;margin-bottom:14px;line-height:1.4;"><i class="fas fa-check-double"></i> PROVEN PROTOCOL / OUR ADVANTAGE</div>`,
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
        title: "Six Checks Before <span style=\"color:#179A9E;\">Every Claim Goes Out</span>",
        header_size: "h2",
        align: "center",
        title_color: "#0C2340",
        typography_typography: "custom",
        typography_font_family: "Plus Jakarta Sans",
        typography_font_size: { unit: "px", size: 36 },
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
        editor: `<p style="margin:0 auto;max-width:740px;font-size:16px;color:#4A5568;line-height:1.65;text-align:center;">Total accuracy checks and scrubbing before any electronic claim is submitted to avoid rejections and audit penalties down the line.</p>`,
        text_color: "#4A5568",
        _margin: { unit: "px", top: "0", right: "0", bottom: "36", left: "0", isLinked: false },
        margin: { unit: "px", top: "0", right: "0", bottom: "36", left: "0", isLinked: false }
      }
    },
    // 6 Cards Grid (3x2)
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
      elements: [
        { num: "CHECK 01", title: "Demographic Validation", desc: "Patient identity, subscriber policy details, active coverage status, and primary/secondary coordination verified." },
        { num: "CHECK 02", title: "Policy Active Verification & Prior Auth", desc: "Real-time payer eligibility confirmed and pre-authorization numbers validated before service is delivered." },
        { num: "CHECK 03", title: "Medical Coding & Modifier Check", desc: "AAPC/AHIMA certified coders audit ICD-10, CPT pairing, and modifier logic (25, 59) against payer LCD/NCD rules." },
        { num: "CHECK 04", title: "Claim Format & Clearinghouse Scrub", desc: "Dynamic clearinghouse validation across 3,000,000+ real-time payer edits before electronic claim transmission." },
        { num: "CHECK 05", title: "Fee Schedule & Timely Filing Check", desc: "Billed amounts verified against contracted allowable rates and audited against carrier timely filing deadlines." },
        { num: "CHECK 06", title: "Payment Reconciled & Stalled Claim Alert", desc: "Proactive aging follow-up at 30, 60, and 90 days to eliminate unpaid claim drift and prevent revenue loss." }
      ].map(c => ({
        id: createId(),
        elType: "container",
        isInner: true,
        settings: {
          content_width: "full",
          width: { unit: "%", size: 31.8, sizes: [] },
          width_tablet: { unit: "%", size: 48, sizes: [] },
          width_mobile: { unit: "%", size: 100, sizes: [] },
          flex_direction: "column",
          flex_gap: { unit: "px", size: 8, column: "8", row: "8" },
          background_background: "classic",
          background_color: "#F8FAFC",
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
            widgetType: "heading",
            settings: {
              title: `<span style="font-size:11px;font-weight:800;color:#179A9E;letter-spacing:0.8px;text-transform:uppercase;">${c.num}</span>`,
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
              title: c.title,
              header_size: "h4",
              title_color: "#0C2340",
              typography_typography: "custom",
              typography_font_family: "Plus Jakarta Sans",
              typography_font_size: { unit: "px", size: 16.5 },
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
              editor: `<p style="margin:0;font-size:13.5px;color:#64748B;line-height:1.6;">${c.desc}</p>`,
              text_color: "#64748B",
              _margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false },
              margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false }
            }
          }
        ]
      }))
    }
  ]
};

// 7. CTA BANNER (Let's Find Your Missing Revenue)
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
        title: "Let's Find Your Missing Revenue",
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
        editor: `<p style="margin:0 auto;max-width:680px;font-size:16px;color:#94A3B8;line-height:1.65;text-align:center;">Schedule an initial consultation to meet your dedicated billing team and learn how we optimize your revenue cycle.</p>`,
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
        text: "Schedule A Free Audit",
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
// SAVE SECTION-BY-SECTION TEMPLATES FOR INSURANCE & PAYER
// ============================================================================

// 1. Hero
saveTemplate(
  'service-1-sec-1-hero-elementor', 
  heroSection, 
  "Insurance & Payer - 1. Hero Banner (100% Flexbox Container)"
);

// 2. Sequence Banner
saveTemplate(
  'service-1-sec-2-workflow-sequence-elementor', 
  sequenceBanner, 
  "Insurance & Payer - 2. 7-Step Revenue Cycle Sequence (100% Flexbox Container)"
);

// 3. The 10 Core Insurance & Payer Offerings (In 2-Card Pairs!)
saveTemplate(
  'service-1-sec-3-ten-offerings-2col-elementor', 
  tenCoreOfferingsSection, 
  "Insurance & Payer - 3. The 10 Core Offerings in 2-Card Pairs (100% Flexbox Container)"
);

// 4. Office Commitments & Clinical Oversight Card
saveTemplate(
  'service-1-sec-4-office-commitments-elementor', 
  officeCommitmentsSection, 
  "Insurance & Payer - 4. Office Commitments & Clinical Oversight (100% Flexbox Container)"
);

// 5. Six Checks Pre-Submission QA (3x2 Grid)
saveTemplate(
  'service-1-sec-5-six-checks-qa-elementor', 
  sixChecksSection, 
  "Insurance & Payer - 5. Six Checks Pre-Submission QA (100% Flexbox Container)"
);

// 6. CTA Banner
saveTemplate(
  'service-1-sec-6-cta-banner-elementor', 
  ctaSection, 
  "Insurance & Payer - 6. CTA Banner (100% Flexbox Container)"
);

// Complete Full Page (Exact sequence matching user screenshot, with 10 cards in 2 columns)
const completeInsurancePage = [
  heroSection,
  sequenceBanner,
  tenCoreOfferingsSection,
  officeCommitmentsSection,
  sixChecksSection,
  ctaSection
];

saveTemplate(
  'service-1-insurance-payer-elementor', 
  completeInsurancePage, 
  "Insurance & Payer Services - Complete Page (100% Flexbox Container, 10 Cards in 2-Column Pairs)"
);

console.log("\nInsurance & Payer templates successfully generated with 10 cards in 2-column pairs!");
