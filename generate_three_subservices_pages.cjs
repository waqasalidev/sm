const fs = require('fs');
const path = require('path');

function createId() {
  return Math.random().toString(36).substring(2, 9);
}

const outDir = path.join(__dirname, 'elementor-editable-templates');

// Helper to save Elementor template and plain-text
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

// Universal Header Generator
function createSubPageHero(breadcrumbCurrent, eyebrow, titlePrefix, titleHighlight, desc, ctaText) {
  return {
    id: createId(),
    elType: "container",
    isInner: false,
    settings: {
      content_width: "boxed",
      boxed_width: { unit: "px", size: 1220, sizes: [] },
      flex_direction: "column",
      flex_align_items: "center",
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
      {
        id: createId(),
        elType: "widget",
        widgetType: "heading",
        settings: {
          title: `<nav style="font-size:13.5px;font-weight:600;color:#64748B;"><a href="/" style="color:#64748B;text-decoration:none;">Home</a> <span style="margin:0 8px;color:#94A3B8;">&gt;</span> <a href="/services" style="color:#64748B;text-decoration:none;">Services</a> <span style="margin:0 8px;color:#94A3B8;">&gt;</span> <span style="color:#179A9E;">${breadcrumbCurrent}</span></nav>`,
          header_size: "span",
          align: "center",
          margin: { unit: "px", top: "0", right: "0", bottom: "16", left: "0", isLinked: false }
        }
      },
      {
        id: createId(),
        elType: "widget",
        widgetType: "heading",
        settings: {
          title: `<span style="display:inline-flex;align-items:center;gap:6px;padding:6px 16px;background-color:#EAF8F8;border:1px solid #A7E8E9;border-radius:50px;color:#179A9E;font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;"><i class=\"fas fa-shield-alt\"></i> ${eyebrow}</span>`,
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
          title: `${titlePrefix} <span style=\"color:#179A9E;\">${titleHighlight}</span>`,
          header_size: "h1",
          align: "center",
          title_color: "#0C2340",
          typography_typography: "custom",
          typography_font_family: "Plus Jakarta Sans",
          typography_font_size: { unit: "px", size: 46 },
          typography_font_weight: "800",
          margin: { unit: "px", top: "0", right: "0", bottom: "16", left: "0", isLinked: false }
        }
      },
      {
        id: createId(),
        elType: "widget",
        widgetType: "text-editor",
        settings: {
          editor: `<p style="margin:0 auto;max-width:760px;font-size:16.5px;color:#4A5568;line-height:1.65;text-align:center;">${desc}</p>`,
          text_color: "#4A5568",
          margin: { unit: "px", top: "0", right: "0", bottom: "30", left: "0", isLinked: false }
        }
      },
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
              text: ctaText,
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
          },
          {
            id: createId(),
            elType: "widget",
            widgetType: "button",
            settings: {
              text: "Explore All Offerings",
              link: { url: "#offerings", is_external: false, nofollow: false },
              background_color: "#FFFFFF",
              button_text_color: "#0C2340",
              background_hover_color: "#F1F5F9",
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
}

// Universal Metrics Bar Generator
function createMetricsBar(stats) {
  return {
    id: createId(),
    elType: "container",
    isInner: false,
    settings: {
      content_width: "boxed",
      boxed_width: { unit: "px", size: 1220, sizes: [] },
      flex_direction: "row",
      flex_wrap: "wrap",
      flex_justify_content: "space-between",
      flex_align_items: "center",
      background_background: "classic",
      background_color: "#FFFFFF",
      border_border: "solid",
      border_width: { unit: "px", top: "1", right: "1", bottom: "1", left: "1", isLinked: true },
      border_color: "#E2E8F0",
      border_radius: { unit: "px", top: "16", right: "16", bottom: "16", left: "16", isLinked: true },
      box_shadow_box_shadow_type: "yes",
      box_shadow_box_shadow: { horizontal: 0, vertical: 10, blur: 30, spread: -5, color: "rgba(12, 35, 64, 0.08)" },
      padding: { unit: "px", top: "24", right: "32", bottom: "24", left: "32", isLinked: false },
      padding_mobile: { unit: "px", top: "18", right: "16", bottom: "18", left: "16", isLinked: false },
      margin: { unit: "px", top: "-30", right: "auto", bottom: "50", left: "auto", isLinked: false },
      z_index: 3
    },
    elements: stats.map((s, i) => {
      return {
        id: createId(),
        elType: "container",
        isInner: true,
        settings: {
          content_width: "full",
          width: { unit: "%", size: 24, sizes: [] },
          width_tablet: { unit: "%", size: 48, sizes: [] },
          width_mobile: { unit: "%", size: 100, sizes: [] },
          flex_direction: "column",
          flex_align_items: "center",
          border_border: i < stats.length - 1 ? "solid" : "none",
          border_width: { unit: "px", top: "0", right: "1", bottom: "0", left: "0", isLinked: false },
          border_color: "#E2E8F0",
          padding: { unit: "px", top: "8", right: "12", bottom: "8", left: "12", isLinked: false }
        },
        elements: [
          {
            id: createId(),
            elType: "widget",
            widgetType: "heading",
            settings: {
              title: s.num,
              header_size: "h3",
              title_color: "#0C2340",
              typography_typography: "custom",
              typography_font_family: "Plus Jakarta Sans",
              typography_font_size: { unit: "px", size: 28 },
              typography_font_weight: "800",
              margin: { unit: "px", top: "0", right: "0", bottom: "2", left: "0", isLinked: false }
            }
          },
          {
            id: createId(),
            elType: "widget",
            widgetType: "heading",
            settings: {
              title: s.label,
              header_size: "span",
              title_color: "#64748B",
              typography_typography: "custom",
              typography_font_family: "Plus Jakarta Sans",
              typography_font_size: { unit: "px", size: 12.5 },
              typography_font_weight: "600"
            }
          }
        ]
      };
    })
  };
}

// Universal Service Cards Grid
function createServicesGrid(sectionEyebrow, sectionTitle, sectionDesc, services, columnsPerRow = 2) {
  const cardWidth = columnsPerRow === 2 ? 48.5 : 31.8;
  const cards = services.map(s => {
    return {
      id: createId(),
      elType: "container",
      isInner: true,
      settings: {
        content_width: "full",
        width: { unit: "%", size: cardWidth, sizes: [] },
        width_tablet: { unit: "%", size: 100, sizes: [] },
        width_mobile: { unit: "%", size: 100, sizes: [] },
        flex_direction: "column",
        background_background: "classic",
        background_color: "#FFFFFF",
        border_border: "solid",
        border_width: { unit: "px", top: "1", right: "1", bottom: "1", left: "1", isLinked: true },
        border_color: "#E2E8F0",
        border_radius: { unit: "px", top: "16", right: "16", bottom: "16", left: "16", isLinked: true },
        box_shadow_box_shadow_type: "yes",
        box_shadow_box_shadow: { horizontal: 0, vertical: 4, blur: 16, spread: -2, color: "rgba(12, 35, 64, 0.04)" },
        padding: { unit: "px", top: "28", right: "26", bottom: "28", left: "26", isLinked: true }
      },
      elements: [
        // Title
        {
          id: createId(),
          elType: "widget",
          widgetType: "heading",
          settings: {
            title: s.title,
            header_size: "h3",
            title_color: "#0C2340",
            typography_typography: "custom",
            typography_font_family: "Plus Jakarta Sans",
            typography_font_size: { unit: "px", size: 18 },
            typography_font_weight: "700",
            margin: { unit: "px", top: "0", right: "0", bottom: "10", left: "0", isLinked: false }
          }
        },
        // Description
        {
          id: createId(),
          elType: "widget",
          widgetType: "text-editor",
          settings: {
            editor: `<p style="margin:0;font-size:14px;color:#4A5568;line-height:1.6;">${s.desc}</p>`,
            text_color: "#4A5568",
            margin: { unit: "px", top: "0", right: "0", bottom: "18", left: "0", isLinked: false }
          }
        },
        // Bullets
        {
          id: createId(),
          elType: "widget",
          widgetType: "icon-list",
          settings: {
            icon_list: s.bullets.map(b => ({
              text: b,
              selected_icon: { value: "far fa-check-circle", library: "fa-regular" }
            })),
            icon_color: "#179A9E",
            icon_size: { unit: "px", size: 13.5 },
            space_between: { unit: "px", size: 8 },
            text_color: "#334155",
            typography_typography: "custom",
            typography_font_family: "Plus Jakarta Sans",
            typography_font_size: { unit: "px", size: 13 },
            typography_font_weight: "500"
          }
        }
      ]
    };
  });

  return {
    id: createId(),
    elType: "container",
    isInner: false,
    settings: {
      content_width: "boxed",
      boxed_width: { unit: "px", size: 1220, sizes: [] },
      flex_direction: "column",
      flex_align_items: "center",
      padding: { unit: "px", top: "50", right: "20", bottom: "70", left: "20", isLinked: false }
    },
    elements: [
      {
        id: createId(),
        elType: "widget",
        widgetType: "heading",
        settings: {
          title: `<span style="display:inline-flex;align-items:center;gap:6px;padding:6px 16px;background-color:#EAF8F8;border:1px solid #A7E8E9;border-radius:50px;color:#179A9E;font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;">${sectionEyebrow}</span>`,
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
          title: sectionTitle,
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
          editor: `<p style="margin:0;font-size:16px;color:#4A5568;text-align:center;">${sectionDesc}</p>`,
          text_color: "#4A5568",
          margin: { unit: "px", top: "0", right: "0", bottom: "40", left: "0", isLinked: false }
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
          flex_justify_content: "space-between",
          flex_align_items: "stretch",
          flex_gap: { unit: "px", size: 24, column: "24", row: "24" }
        },
        elements: cards
      }
    ]
  };
}

// Universal Subpage Bottom CTA
function createSubPageCTA(title, desc, buttonText) {
  return {
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
          title: title,
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
          editor: `<p style="margin:0 auto;max-width:680px;font-size:16px;color:#94A3B8;line-height:1.6;text-align:center;">${desc}</p>`,
          text_color: "#94A3B8",
          margin: { unit: "px", top: "0", right: "0", bottom: "28", left: "0", isLinked: false }
        }
      },
      {
        id: createId(),
        elType: "widget",
        widgetType: "button",
        settings: {
          text: buttonText,
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
}

// ============================================================================
// PAGE 2: INSURANCE & PAYER SERVICES
// ============================================================================
const insuranceServicesList = [
  {
    title: "Eligibility & Benefits Verification",
    desc: "Verify patient active coverage, primary/secondary policy status, co-pays, deductibles, and pre-existing condition rules prior to scheduled visits to prevent claim rejections.",
    bullets: [
      "Real-time automated clearinghouse inquiries",
      "Detailed breakdown of copays, co-insurance, and out-of-pocket maximums",
      "Elimination of inactive insurance write-offs at the front desk"
    ]
  },
  {
    title: "Prior Authorization",
    desc: "Securing necessary clinical approvals and precertifications from insurance payers before diagnostics, specialty consultations, procedures, and surgeries take place.",
    bullets: [
      "Submission of clinical documentation and medical necessity justifications",
      "Payer follow-up and turnaround tracking to prevent treatment delays",
      "Direct tracking of approval numbers matched to billing claims"
    ]
  },
  {
    title: "Provider Credentialing & Payer Enrollment",
    desc: "Comprehensive enrollment and primary source verification with Medicare, Medicaid, and commercial health insurance networks to guarantee billing privileges.",
    bullets: [
      "CAQH profile setup, maintenance, and periodic re-attestation",
      "Commercial and government payer contract applications",
      "Continuous tracking of expiring licenses, DEA, and board certifications"
    ]
  },
  {
    title: "Medical Coding",
    desc: "Certified AAPC/AHIMA medical coders assign precise ICD-10-CM, CPT, and HCPCS Level II codes and appropriate modifiers directly from provider documentation.",
    bullets: [
      "Accurate code assignment reflecting clinical diagnosis and care provided",
      "Correct modifier utilization (e.g. 25, 59, 76) to prevent bundling denials",
      "Specialty-specific chart reviews and clinical compliance auditing"
    ]
  },
  {
    title: "Charge Entry & Claim Creation",
    desc: "Accurate and rapid entry of patient encounters, fee schedules, diagnostic pairings, and clinical billing charges into the practice management system.",
    bullets: [
      "Verification of dates of service, rendering provider, and facility NPI",
      "Validation of billed amounts against practice fee schedules",
      "Same-day encounter charge entry to reduce lag time"
    ]
  },
  {
    title: "Claim Submission",
    desc: "Electronic batch scrub and dispatch of 837P and 837I clearinghouse claim files within 24–48 hours of clinical care.",
    bullets: [
      "Direct clearinghouse transmission across 50+ payer connections",
      "Electronic validation against 3M+ dynamic payer rule edits",
      "Same-day resolution of clearinghouse front-end format errors"
    ]
  },
  {
    title: "Payment Posting",
    desc: "Daily posting of Electronic Remittance Advices (ERAs) and manual Explanation of Benefits (EOBs) payments, contractual adjustments, and copays.",
    bullets: [
      "Same-day reconciliation of electronic bank deposits against posted funds",
      "Line-item posting of allowable amounts, deductibles, and copayments",
      "Accurate secondary and tertiary payer claim balance rollover"
    ]
  },
  {
    title: "Remittance Reconciliation",
    desc: "Auditing payer remits against contracted fee schedules to catch underpayments, silent contractual recoupments, and incorrect allowable calculations.",
    bullets: [
      "Automated detection of payer payment discrepancies",
      "Audit of bundled line-item denials and contract violations",
      "Immediate escalation of incorrect payer fee reductions"
    ]
  },
  {
    title: "Denial Management & Appeals",
    desc: "Aggressive categorization, root-cause investigation, correction, and formal clinical appeal submission for all denied or rejected claims.",
    bullets: [
      "Never writing off legitimate clinical revenue",
      "Clinical appeal letters with medical record documentation",
      "Payer denial tracking and prevention of repetitive billing errors"
    ]
  },
  {
    title: "Insurance A/R Follow-Up",
    desc: "Systematic aging accounts receivable tracking at 30, 60, 90, and 120+ days to hold insurance carriers accountable until full reimbursement is recovered.",
    bullets: [
      "Dedicated work-queues prioritizing high-dollar and aged claims",
      "Direct carrier telephone inquiries and claims escalations",
      "Weekly A/R resolution reports submitted to practice leadership"
    ]
  }
];

const insuranceHero = createSubPageHero(
  "Insurance & Payer Services",
  "CORE REVENUE ENGINE",
  "Insurance & Payer",
  "Services",
  "End-to-end payer claim management, coding audits, credentialing, clearinghouse transmission, and aggressive denial appeals.",
  "Schedule Payer Audit"
);

const insuranceMetrics = createMetricsBar([
  { num: "98%", label: "Clean Claim Rate" },
  { num: "<25 Days", label: "Average Days in A/R" },
  { num: "50+", label: "Clearinghouse Connections" },
  { num: "85%+", label: "Appeals Overturn Rate" }
]);

const insuranceGrid = createServicesGrid(
  "OFFICIAL OFFERINGS",
  "10 Core <span style=\"color:#179A9E;\">Insurance & Payer Services</span>",
  "Every phase of the payer revenue cycle executed with clinical precision and accountability.",
  insuranceServicesList,
  2
);

const insuranceCTA = createSubPageCTA(
  "Stop Leaving Legitimate Insurance Revenue Behind",
  "Partner with certified billing specialists who aggressively protect your practice cash flow.",
  "Request Practice Audit"
);

const insuranceCompletePage = [insuranceHero, insuranceMetrics, insuranceGrid, insuranceCTA];

saveTemplate('service-1-insurance-payer-elementor', insuranceCompletePage, "Insurance & Payer Services - Complete Page (100% Flexbox Container)");

// ============================================================================
// PAGE 3: PATIENT & PRACTICE SERVICES
// ============================================================================
const patientServicesList = [
  {
    title: "Patient Medical Record",
    desc: "Accurate demographic and medical record capture, ensuring clean clinical histories, compliant chart access, and seamless insurance cross-referencing.",
    bullets: [
      "Precise patient intake data auditing to prevent front-end billing discrepancies",
      "Secure electronic health record indexing and HIPAA-compliant archiving",
      "Streamlined chart retrieval for payer medical necessity reviews"
    ]
  },
  {
    title: "Payment Plans & Self-Pay Collections",
    desc: "Flexible, customized monthly installment plans and recurring card-on-file schedules that empower patients to pay balances without creating bad debt.",
    bullets: [
      "Budget-friendly recurring auto-debit arrangements",
      "PCI-DSS compliant encrypted card-on-file tokenization",
      "Compassionate self-pay recovery protocols that preserve doctor-patient trust"
    ]
  },
  {
    title: "Cost Estimates",
    desc: "Transparent Good Faith Estimates (GFE) provided prior to scheduled clinical services, giving patients upfront clarity and maintaining full compliance with the No Surprises Act.",
    bullets: [
      "Pre-service deductible, copay, and coinsurance calculation",
      "Itemized cost estimates for planned diagnostics and procedures",
      "Reduction of post-treatment billing confusion and disputed charges"
    ]
  },
  {
    title: "Patient Billing Support",
    desc: "Dedicated, empathetic billing customer service answering patient questions regarding invoices, insurance balances, and Explanation of Benefits (EOB).",
    bullets: [
      "Toll-free patient support line answered by trained medical billing representatives",
      "Bilingual communication support for diverse patient communities",
      "Rapid first-contact resolution for billing and balance inquiries"
    ]
  },
  {
    title: "Legacy A/R Recovery",
    desc: "Targeted recovery projects for aged self-pay and delinquent practice receivables that have lingered over 60, 90, or 120+ days.",
    bullets: [
      "Audit and cleanup of stale or unresolved patient balances",
      "Ethical outreach campaigns via SMS, email, and clear paper statements",
      "Substantial cash recovery from written-off or forgotten receivables"
    ]
  },
  {
    title: "Front-Office & Scheduling Assistance",
    desc: "Administrative workflow guidance and scheduling coordination to eliminate bottlenecks, reduce no-shows, and collect copayments at the front desk.",
    bullets: [
      "Intake scheduling optimization and appointment confirmation workflows",
      "Point-of-service (POS) copay and deductible collection protocols",
      "Daily schedule balancing against clinic encounter records"
    ]
  },
  {
    title: "Financial Reporting & KPI Dashboards",
    desc: "Clear, comprehensive executive financial reports and real-time KPI dashboards tracking gross collections, net collection rate, and days in A/R.",
    bullets: [
      "24/7 access to live financial metrics across all practice locations",
      "Monthly reconciliation reports detailing cash flow and aging categories",
      "Actionable practice health trends and physician productivity metrics"
    ]
  },
  {
    title: "Revenue Cycle Benchmarking",
    desc: "Measuring your practice’s financial performance against national specialty benchmarks (MGMA and HFMA standards) to identify untapped revenue opportunities.",
    bullets: [
      "Specialty-specific fee schedule comparison against market percentiles",
      "Clean claim rate and denial rate benchmarking against national averages",
      "Strategic recommendations to enhance practice profitability"
    ]
  },
  {
    title: "Staff Training",
    desc: "Comprehensive training for front-desk, administrative, and clinical staff on insurance verification, documentation guidelines, and POS collections.",
    bullets: [
      "Standardized intake checklists to eliminate front-end demographic errors",
      "Patient financial counseling communication scripts",
      "Periodic refresher courses on evolving payer guidelines and billing rules"
    ]
  },
  {
    title: "New-Practice Start-Up Support",
    desc: "Turnkey operational setup for new healthcare practices, encompassing provider enrollment, EHR/PM configuration, fee schedule design, and billing workflows.",
    bullets: [
      "Initial Medicare, Medicaid, and commercial payer credentialing fast-track",
      "Clearinghouse gateway setup and practice management configuration",
      "Complete operational onboarding to ensure immediate cash flow"
    ]
  }
];

const patientHero = createSubPageHero(
  "Patient & Practice Services",
  "PATIENT-CENTRIC FINANCIAL CARE",
  "Patient & Practice",
  "Services",
  "Compassionate patient billing, transparent cost estimates, front-desk collection training, and flexible payment plans that protect provider-patient trust.",
  "Schedule Consultation"
);

const patientMetrics = createMetricsBar([
  { num: "+38%", label: "POS Collections Growth" },
  { num: "95%", label: "First-Call Resolution" },
  { num: "100%", label: "No Surprises Act Compliance" },
  { num: "<3%", label: "Patient Bad Debt Rate" }
]);

const patientGrid = createServicesGrid(
  "OFFICIAL OFFERINGS",
  "10 Core <span style=\"color:#179A9E;\">Patient & Practice Services</span>",
  "Preserving the doctor-patient relationship while accelerating practice collections.",
  patientServicesList,
  2
);

const patientCTA = createSubPageCTA(
  "Transform Your Practice's Patient Financial Experience",
  "Empower your front office, increase collections, and preserve patient relationships.",
  "Schedule Practice Consultation"
);

const patientCompletePage = [patientHero, patientMetrics, patientGrid, patientCTA];

saveTemplate('service-2-patient-practice-elementor', patientCompletePage, "Patient & Practice Services - Complete Page (100% Flexbox Container)");

// ============================================================================
// PAGE 4: TECHNOLOGY & SUPPORT
// ============================================================================
const techGroup1 = [
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
    desc: "Intuitive executive business intelligence dashboards monitoring essential RCM key performance indicators (KPIs), Days in A/R, first-pass clean claim rates, and payer trends.",
    bullets: [
      "Visual graphs of aging receivables (30, 60, 90, 120+ days)",
      "Net collection percentage and carrier denial breakdown",
      "Physician-by-physician productivity and revenue benchmarking"
    ]
  },
  {
    title: "EHR & Practice Management",
    desc: "Direct integration and workflow optimization across your existing Electronic Health Record (EHR) and Practice Management (PM) software without changing systems.",
    bullets: [
      "Seamless bridge with Epic, AthenaHealth, eClinicalWorks, Kareo, NextGen, and Cerner",
      "Automated demographic and charge capture synchronization",
      "Zero data migration downtime or clinical routine disruption"
    ]
  },
  {
    title: "HIPAA-Compliant Infrastructure",
    desc: "Enterprise-grade hosting and data storage architecture adhering strictly to HIPAA, HITECH, and Omnibus regulatory security standards.",
    bullets: [
      "End-to-end data encryption at rest and in transit (AES-256 / TLS 1.3)",
      "Immutable audit logging for all patient health information (PHI) access",
      "Routine automated compliance audits and vulnerability scanning"
    ]
  }
];

const techGroup2 = [
  {
    title: "Cybersecurity & Data Protection",
    desc: "Multi-layered defense safeguards protecting clinical and financial assets against malware, ransomware, phishing, and unauthorized intrusion.",
    bullets: [
      "Endpoint detection, firewall monitoring, and zero-trust access control",
      "Multi-Factor Authentication (MFA) across all administrative tools",
      "Continuous threat monitoring powered by parent IT group standards"
    ]
  },
  {
    title: "Backup & Disaster Recovery",
    desc: "Automated, redundant cloud backup architecture ensuring immediate failover and zero data loss in the event of hardware failure, outage, or cyber emergency.",
    bullets: [
      "Geo-redundant encrypted cloud backup snapshots",
      "Strict Recovery Point Objective (RPO) and Recovery Time Objective (RTO)",
      "Regular disaster recovery restoration drills and validation"
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

const techGroup3 = [
  {
    title: "Practice Website & Digital Presence",
    desc: "Modern, mobile-responsive practice websites engineered with online patient appointment scheduling, secure digital intake forms, and billing portals.",
    bullets: [
      "Mobile-optimized patient engagement design",
      "HIPAA-compliant online intake forms & appointment booking",
      "Direct integration with practice billing gateway"
    ]
  },
  {
    title: "Search Engine Optimization (SEO)",
    desc: "Local healthcare SEO strategies ensuring your clinical practice ranks at the top of Google searches when prospective patients search for your specialty.",
    bullets: [
      "Local Google Business Profile optimization and citation management",
      "Specialty-specific clinical content and procedure landing pages",
      "Organic patient acquisition and search visibility growth"
    ]
  },
  {
    title: "Social Media Management",
    desc: "Professional management of practice social media profiles to educate patients, promote clinical services, and build patient community engagement.",
    bullets: [
      "Healthcare-compliant educational posts and patient updates",
      "Active reputation management and community interaction",
      "Multi-platform presence across LinkedIn, Facebook, and Instagram"
    ]
  },
  {
    title: "Reputation & Practice Branding",
    desc: "Automated post-visit patient satisfaction surveys and positive review generation to elevate your clinic’s online reputation across Google and WebMD.",
    bullets: [
      "Automated SMS review requests sent following successful visits",
      "Proactive sentiment tracking to address patient dissatisfaction",
      "Consistent 5-star brand presence across top healthcare review directories"
    ]
  }
];

const techHero = createSubPageHero(
  "Technology & Support",
  "POWERED BY STELLECLOUD™",
  "Technology &",
  "Support",
  "Enterprise cloud infrastructure, automated claim scrubbers, bi-directional EHR integration, and dedicated IT support tailored for modern healthcare.",
  "Request Technology Demo"
);

const techMetrics = createMetricsBar([
  { num: "99.9%", label: "Cloud Uptime SLA" },
  { num: "256-Bit", label: "AES Data Encryption" },
  { num: "15+", label: "Major EHRs Integrated" },
  { num: "<15 Mins", label: "Helpdesk SLA Response" }
]);

const techGrid1 = createServicesGrid(
  "CORE CLOUD SYSTEMS",
  "Healthcare Technology & <span style=\"color:#179A9E;\">Infrastructure</span>",
  "Empowering providers with real-time transparency, automated scrubbing, and seamless EHR sync.",
  techGroup1,
  2
);

const techGrid2 = createServicesGrid(
  "DATA PROTECTION",
  "Security, Backup & <span style=\"color:#179A9E;\">Managed IT</span>",
  "Defending clinical assets against cyber threats while guaranteeing business continuity.",
  techGroup2,
  3
);

const techGrid3 = createServicesGrid(
  "PATIENT ACQUISITION",
  "Digital Marketing & <span style=\"color:#179A9E;\">Practice Growth</span>",
  "Expanding your patient volume with medical SEO, websites, and reputation management.",
  techGroup3,
  2
);

const techCTA = createSubPageCTA(
  "Modernize Your Healthcare Practice Technology Today",
  "Experience seamless EHR sync, real-time dashboards, and ironclad HIPAA compliance.",
  "Request StelleCloud Demo"
);

const techCompletePage = [techHero, techMetrics, techGrid1, techGrid2, techGrid3, techCTA];

saveTemplate('service-3-technology-support-elementor', techCompletePage, "Technology & Support - Complete Page (100% Flexbox Container)");

console.log("\nAll 3 Sub-Service Pages successfully generated!");
