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
// REUSABLE BUILDERS (Zero Column, Zero Section - 100% Flexbox Containers)
// ============================================================================

// 1. Universal Hero Header Builder (No Collisions!)
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
          title: `<nav style="font-size:13.5px;font-weight:600;color:#64748B;display:inline-block;margin-bottom:12px;"><a href="/" style="color:#64748B;text-decoration:none;">Home</a> <span style="margin:0 8px;color:#94A3B8;">&gt;</span> <a href="/services" style="color:#64748B;text-decoration:none;">Services</a> <span style="margin:0 8px;color:#94A3B8;">&gt;</span> <span style="color:#179A9E;">${breadcrumbCurrent}</span></nav>`,
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
          title: `<div style="display:inline-flex;align-items:center;gap:6px;padding:6px 18px;background-color:#EAF8F8;border:1px solid #A7E8E9;border-radius:50px;color:#179A9E;font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;margin-bottom:14px;line-height:1.4;"><i class="fas fa-shield-alt" style="font-size:12px;"></i> ${eyebrow}</div>`,
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
          title: `${titlePrefix} <span style="color:#179A9E;">${titleHighlight}</span>`,
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
      // Description
      {
        id: createId(),
        elType: "widget",
        widgetType: "text-editor",
        settings: {
          editor: `<p style="margin:0 auto;max-width:760px;font-size:16.5px;color:#4A5568;line-height:1.7;text-align:center;">${desc}</p>`,
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

// 2. Universal Metrics Floating Bar Builder
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
      _margin: { unit: "px", top: "-30", right: "auto", bottom: "40", left: "auto", isLinked: false },
      margin: { unit: "px", top: "-30", right: "auto", bottom: "40", left: "auto", isLinked: false },
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
          flex_gap: { unit: "px", size: 4, column: "4", row: "4" },
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
              align: "center",
              title_color: "#0C2340",
              typography_typography: "custom",
              typography_font_family: "Plus Jakarta Sans",
              typography_font_size: { unit: "px", size: 30 },
              typography_font_weight: "800",
              typography_line_height: { unit: "em", size: 1.2 },
              _margin: { unit: "px", top: "0", right: "0", bottom: "4", left: "0", isLinked: false },
              margin: { unit: "px", top: "0", right: "0", bottom: "4", left: "0", isLinked: false }
            }
          },
          {
            id: createId(),
            elType: "widget",
            widgetType: "heading",
            settings: {
              title: s.label,
              header_size: "div",
              align: "center",
              title_color: "#64748B",
              typography_typography: "custom",
              typography_font_family: "Plus Jakarta Sans",
              typography_font_size: { unit: "px", size: 13 },
              typography_font_weight: "600",
              _margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false },
              margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false }
            }
          }
        ]
      };
    })
  };
}

// 3. Workflow Steps Sequence Banner Builder
function createSequenceBanner(eyebrow, title, steps) {
  return {
    id: createId(),
    elType: "container",
    isInner: false,
    settings: {
      content_width: "boxed",
      boxed_width: { unit: "px", size: 1220, sizes: [] },
      flex_direction: "column",
      flex_align_items: "center",
      flex_gap: { unit: "px", size: 24, column: "24", row: "24" },
      background_background: "classic",
      background_color: "#FFFFFF",
      border_border: "solid",
      border_width: { unit: "px", top: "1", right: "1", bottom: "1", left: "1", isLinked: true },
      border_color: "#E2E8F0",
      border_radius: { unit: "px", top: "20", right: "20", bottom: "20", left: "20", isLinked: true },
      padding: { unit: "px", top: "40", right: "24", bottom: "40", left: "24", isLinked: false },
      _margin: { unit: "px", top: "10", right: "auto", bottom: "40", left: "auto", isLinked: false },
      margin: { unit: "px", top: "10", right: "auto", bottom: "40", left: "auto", isLinked: false }
    },
    elements: [
      {
        id: createId(),
        elType: "widget",
        widgetType: "heading",
        settings: {
          title: `<div style="display:inline-flex;align-items:center;gap:6px;padding:5px 16px;background-color:#EAF8F8;border:1px solid #A7E8E9;border-radius:50px;color:#179A9E;font-size:11.5px;font-weight:800;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px;line-height:1.4;">${eyebrow}</div>`,
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
          title: title,
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
      // Steps Container
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
          flex_gap: { unit: "px", size: 12, column: "12", row: "12" }
        },
        elements: steps.flatMap((step, idx) => {
          const stepCard = {
            id: createId(),
            elType: "container",
            isInner: true,
            settings: {
              content_width: "full",
              flex_direction: "row",
              flex_align_items: "center",
              flex_gap: { unit: "px", size: 10, column: "10", row: "10" },
              background_background: "classic",
              background_color: "#F8FAFC",
              border_border: "solid",
              border_width: { unit: "px", top: "1", right: "1", bottom: "1", left: "1", isLinked: true },
              border_color: "#E2E8F0",
              border_radius: { unit: "px", top: "10", right: "10", bottom: "10", left: "10", isLinked: true },
              padding: { unit: "px", top: "10", right: "16", bottom: "10", left: "14", isLinked: false }
            },
            elements: [
              {
                id: createId(),
                elType: "widget",
                widgetType: "heading",
                settings: {
                  title: `<span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;background-color:#179A9E;color:#FFFFFF;border-radius:50%;font-size:12px;font-weight:800;">${idx + 1}</span>`,
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
                  typography_font_size: { unit: "px", size: 13.5 },
                  typography_font_weight: "700",
                  _margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false },
                  margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false }
                }
              }
            ]
          };

          if (idx < steps.length - 1) {
            const arrowWidget = {
              id: createId(),
              elType: "widget",
              widgetType: "icon",
              settings: {
                selected_icon: { value: "fas fa-arrow-right", library: "fa-solid" },
                view: "default",
                primary_color: "#94A3B8",
                size: { unit: "px", size: 14 },
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
}

// 4. Six Checks Quality Assurance Section Builder
function createSixChecksSection() {
  const checks = [
    { title: "Demographic & Insurance Validation", desc: "Patient identity, subscriber policy details, active coverage status, and primary/secondary coordination verified." },
    { title: "Prior Authorization & Referral Clearance", desc: "Prior authorization numbers, pre-certifications, and referral limits matched directly against planned CPT codes." },
    { title: "Certified Medical Coding & Modifiers", desc: "AAPC/AHIMA certified coders verify ICD-10 to CPT pairing, LCD/NCD coverage policies, and modifier logic (25, 59)." },
    { title: "Payer-Specific Scrubbing Rules", desc: "Dynamic clearinghouse validation across 3,000,000+ real-time payer edits before electronic claim transmission." },
    { title: "Fee Schedule & Contract Compliance", desc: "Line-item billed charges validated against contracted payer allowable fee schedules to prevent underpayment." },
    { title: "Timely Filing & Fast EDI Dispatch", desc: "Guaranteed electronic 837 claim file dispatch within 24–48 hours, fully audited against carrier timely filing deadlines." }
  ];

  return {
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
      background_color: "#F8FAFC",
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
          title: `<div style="display:inline-flex;align-items:center;gap:6px;padding:6px 18px;background-color:#EAF8F8;border:1px solid #A7E8E9;border-radius:50px;color:#179A9E;font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;margin-bottom:14px;line-height:1.4;"><i class="fas fa-check-double"></i> PRE-SUBMISSION PROTOCOL</div>`,
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
          title: "Six Checks Pre-Submission <span style=\"color:#179A9E;\">Quality Assurance</span>",
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
          editor: `<p style="margin:0 auto;max-width:740px;font-size:16px;color:#4A5568;line-height:1.65;text-align:center;">Every single claim passes our rigorous six-tier quality control protocol before ever reaching a commercial or government clearinghouse.</p>`,
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
        elements: checks.map((c, idx) => ({
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
              widgetType: "heading",
              settings: {
                title: `<span style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;background-color:#EAF8F8;border:1px solid #A7E8E9;color:#179A9E;border-radius:50%;font-size:13px;font-weight:800;margin-bottom:8px;">0${idx + 1}</span>`,
                header_size: "div",
                _margin: { unit: "px", top: "0", right: "0", bottom: "6", left: "0", isLinked: false },
                margin: { unit: "px", top: "0", right: "0", bottom: "6", left: "0", isLinked: false }
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
}

// 5. Universal Services Cards Grid Builder (No Overlaps!)
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
        flex_gap: { unit: "px", size: 12, column: "12", row: "12" },
        background_background: "classic",
        background_color: "#FFFFFF",
        border_border: "solid",
        border_width: { unit: "px", top: "1", right: "1", bottom: "1", left: "1", isLinked: true },
        border_color: "#E2E8F0",
        border_radius: { unit: "px", top: "16", right: "16", bottom: "16", left: "16", isLinked: true },
        box_shadow_box_shadow_type: "yes",
        box_shadow_box_shadow: { horizontal: 0, vertical: 4, blur: 16, spread: -2, color: "rgba(12, 35, 64, 0.04)" },
        padding: { unit: "px", top: "28", right: "26", bottom: "28", left: "26", isLinked: true },
        _margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false },
        margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false }
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
            typography_font_size: { unit: "px", size: 19 },
            typography_font_weight: "700",
            typography_line_height: { unit: "em", size: 1.25 },
            _margin: { unit: "px", top: "0", right: "0", bottom: "10", left: "0", isLinked: false },
            margin: { unit: "px", top: "0", right: "0", bottom: "10", left: "0", isLinked: false }
          }
        },
        // Description
        {
          id: createId(),
          elType: "widget",
          widgetType: "text-editor",
          settings: {
            editor: `<p style="margin:0;font-size:14.5px;color:#4A5568;line-height:1.65;">${s.desc}</p>`,
            text_color: "#4A5568",
            _margin: { unit: "px", top: "0", right: "0", bottom: "16", left: "0", isLinked: false },
            margin: { unit: "px", top: "0", right: "0", bottom: "16", left: "0", isLinked: false }
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
            icon_size: { unit: "px", size: 14 },
            space_between: { unit: "px", size: 9 },
            text_color: "#334155",
            typography_typography: "custom",
            typography_font_family: "Plus Jakarta Sans",
            typography_font_size: { unit: "px", size: 13.5 },
            typography_font_weight: "500",
            _margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false },
            margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false }
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
      flex_gap: { unit: "px", size: 16, column: "16", row: "16" },
      padding: { unit: "px", top: "50", right: "20", bottom: "60", left: "20", isLinked: false }
    },
    elements: [
      {
        id: createId(),
        elType: "widget",
        widgetType: "heading",
        settings: {
          title: `<div style="display:inline-flex;align-items:center;gap:6px;padding:6px 18px;background-color:#EAF8F8;border:1px solid #A7E8E9;border-radius:50px;color:#179A9E;font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;margin-bottom:14px;line-height:1.4;">${sectionEyebrow}</div>`,
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
          title: sectionTitle,
          header_size: "h2",
          align: "center",
          title_color: "#0C2340",
          typography_typography: "custom",
          typography_font_family: "Plus Jakarta Sans",
          typography_font_size: { unit: "px", size: 36 },
          typography_font_size_tablet: { unit: "px", size: 30 },
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
          editor: `<p style="margin:0 auto;max-width:760px;font-size:16px;color:#4A5568;line-height:1.65;text-align:center;">${sectionDesc}</p>`,
          text_color: "#4A5568",
          _margin: { unit: "px", top: "0", right: "0", bottom: "36", left: "0", isLinked: false },
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
          flex_gap: { unit: "px", size: 24, column: "24", row: "24" }
        },
        elements: cards
      }
    ]
  };
}

// 6. Universal Sub-Page CTA Banner Builder
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
      flex_gap: { unit: "px", size: 14, column: "14", row: "14" },
      background_background: "classic",
      background_color: "#081D30",
      border_radius: { unit: "px", top: "20", right: "20", bottom: "20", left: "20", isLinked: true },
      padding: { unit: "px", top: "60", right: "24", bottom: "60", left: "24", isLinked: false },
      _margin: { unit: "px", top: "30", right: "auto", bottom: "40", left: "auto", isLinked: false },
      margin: { unit: "px", top: "30", right: "auto", bottom: "40", left: "auto", isLinked: false }
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
          editor: `<p style="margin:0 auto;max-width:680px;font-size:16px;color:#94A3B8;line-height:1.65;text-align:center;">${desc}</p>`,
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
// PAGE 2: INSURANCE & PAYER SERVICES (All 10 Official Booklet Services)
// ============================================================================

const insHero = createSubPageHero(
  "Insurance & Payer Services",
  "OFFICIAL BOOKLET SERVICES",
  "Insurance &",
  "Payer Services",
  "From upfront eligibility verification to clean claim submission, certified coding, aggressive appeals, and aged A/R recovery — we manage the complete payer revenue cycle.",
  "Request Payer Billing Audit"
);

const insMetrics = createMetricsBar([
  { num: "98%", label: "Clean Claim Submission" },
  { num: "24-48h", label: "EDI Dispatch Turnaround" },
  { num: "50+", label: "Clearinghouse Interfaces" },
  { num: "85%+", label: "Disputed Overturn Rate" }
]);

const insSequence = createSequenceBanner(
  "OFFICIAL BOOKLET WORKFLOW",
  "Insurance / Payer Revenue Cycle Sequence",
  [
    "Patient Visit",
    "Eligibility & Auth",
    "Medical Coding",
    "Claim Submission",
    "Denials & Appeals",
    "Payer Payment",
    "Practice Paid"
  ]
);

const insSixChecks = createSixChecksSection();

const insGroup1 = [
  {
    title: "Eligibility & Benefits Verification",
    desc: "Verify patient active coverage, primary/secondary policy status, co-pays, deductibles, and pre-existing condition rules prior to scheduled visits to prevent claim rejections.",
    bullets: [
      "Real-time automated clearinghouse inquiries (270/271)",
      "Detailed breakdown of copays, co-insurance, and out-of-pocket maximums",
      "Elimination of inactive insurance write-offs at the front desk"
    ]
  },
  {
    title: "Prior Authorization & Precertification",
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
  }
];

const insGroup2 = [
  {
    title: "Certified Medical Coding",
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
    title: "Clearinghouse Claim Submission",
    desc: "Electronic batch scrub and dispatch of 837P and 837I clearinghouse claim files within 24–48 hours of clinical care.",
    bullets: [
      "Direct clearinghouse transmission across 50+ payer connections",
      "Electronic validation against 3M+ dynamic payer rule edits",
      "Same-day resolution of clearinghouse front-end format errors"
    ]
  }
];

const insGroup3 = [
  {
    title: "Payment Posting & Remit Reconciliation",
    desc: "Daily posting of Electronic Remittance Advices (ERAs) and manual Explanation of Benefits (EOBs) payments, contractual adjustments, and copays.",
    bullets: [
      "Same-day reconciliation of electronic bank deposits against posted funds",
      "Line-item posting of allowable amounts, deductibles, and copayments",
      "Accurate secondary and tertiary payer claim balance rollover"
    ]
  },
  {
    title: "Denial Management & Clinical Appeals",
    desc: "Aggressive categorization, root-cause investigation, correction, and formal clinical appeal submission for all denied or rejected claims.",
    bullets: [
      "Never writing off legitimate clinical revenue",
      "Clinical appeal letters with medical record documentation",
      "Payer denial tracking and prevention of repetitive billing errors"
    ]
  },
  {
    title: "Insurance Aging A/R Follow-Up",
    desc: "Systematic aging accounts receivable tracking at 30, 60, 90, and 120+ days to hold insurance carriers accountable until full reimbursement is recovered.",
    bullets: [
      "Dedicated work-queues prioritizing high-dollar and aged claims",
      "Direct phone escalations with payer supervisors and claims adjusters",
      "Resolution of unpaid, stalled, or lost insurance balances"
    ]
  },
  {
    title: "Remittance Reconciliation & Underpayment Audits",
    desc: "Auditing payer remits against contracted fee schedules to catch underpayments, silent contractual recoupments, and incorrect allowable calculations.",
    bullets: [
      "Automated detection of payer payment discrepancies",
      "Audit of bundled line-item denials and contract violations",
      "Immediate escalation of incorrect payer fee reductions"
    ]
  }
];

const insGrid1 = createServicesGrid(
  "FRONT-END & PRE-BILLING",
  "Patient Intake & <span style=\"color:#179A9E;\">Credentialing</span>",
  "Eliminating claim errors before care is delivered through strict upfront payer verification.",
  insGroup1,
  3
);

const insGrid2 = createServicesGrid(
  "MID-CYCLE OPERATIONS",
  "Certified Coding & <span style=\"color:#179A9E;\">Claim Generation</span>",
  "Translating clinical documentation into clean, fully compliant electronic claim batches.",
  insGroup2,
  3
);

const insGrid3 = createServicesGrid(
  "BACK-END RECOVERY",
  "Payment Posting, Appeals & <span style=\"color:#179A9E;\">A/R Recovery</span>",
  "Auditing payer reimbursements, winning clinical appeals, and clearing aging accounts.",
  insGroup3,
  2
);

const insCTA = createSubPageCTA(
  "Let’s Recover Your Stalled Payer Revenue",
  "Schedule an initial consultation to meet your dedicated billing team and learn how we optimize your clean claim rate.",
  "Request Practice Audit"
);

// Save Section-by-Section for Service 1
saveTemplate('service-1-sec-1-hero-elementor', insHero, "Insurance & Payer - 1. Hero Banner (100% Flexbox Container)");
saveTemplate('service-1-sec-2-metrics-bar-elementor', insMetrics, "Insurance & Payer - 2. Metrics Bar (100% Flexbox Container)");
saveTemplate('service-1-sec-3-workflow-sequence-elementor', insSequence, "Insurance & Payer - 3. 7-Step Sequence (100% Flexbox Container)");
saveTemplate('service-1-sec-4-six-checks-qa-elementor', insSixChecks, "Insurance & Payer - 4. Six Checks QA (100% Flexbox Container)");
saveTemplate('service-1-sec-5-frontend-services-elementor', insGrid1, "Insurance & Payer - 5. Front-End Services (100% Flexbox Container)");
saveTemplate('service-1-sec-6-midrcm-services-elementor', insGrid2, "Insurance & Payer - 6. Mid-RCM Coding & Claims (100% Flexbox Container)");
saveTemplate('service-1-sec-7-backend-services-elementor', insGrid3, "Insurance & Payer - 7. Back-End Denial & AR (100% Flexbox Container)");
saveTemplate('service-1-sec-8-cta-banner-elementor', insCTA, "Insurance & Payer - 8. CTA Banner (100% Flexbox Container)");

// Complete Page for Service 1
const insuranceCompletePage = [insHero, insMetrics, insSequence, insSixChecks, insGrid1, insGrid2, insGrid3, insCTA];
saveTemplate('service-1-insurance-payer-elementor', insuranceCompletePage, "Insurance & Payer Services - Complete Page (100% Flexbox Container)");

// ============================================================================
// PAGE 3: PATIENT & PRACTICE SERVICES
// ============================================================================

const patientHero = createSubPageHero(
  "Patient & Practice Services",
  "PATIENT FINANCIAL CARE & PRACTICE WORKFLOW",
  "Patient &",
  "Practice Services",
  "Protect patient relationships, increase point-of-service collections, and modernize clinical operations with transparent estimates and front-desk coaching.",
  "Schedule Patient Workflow Audit"
);

const patientMetrics = createMetricsBar([
  { num: "+38%", label: "POS Collections" },
  { num: "95%", label: "First-Call Resolution" },
  { num: "100%", label: "GFE Compliance" },
  { num: "2.4x", label: "Statement Response Speed" }
]);

const patientSequence = createSequenceBanner(
  "PATIENT FINANCIAL WORKFLOW",
  "Patient Financial Experience Sequence",
  [
    "Upfront Estimate (GFE)",
    "Clinical Encounter",
    "Clear Mobile Statement",
    "Digital Checkout",
    "Empathetic Resolution"
  ]
);

const patientGroup1 = [
  {
    title: "Good Faith Estimates (GFE) & Cost Transparency",
    desc: "Calculate and deliver clear, itemized Good Faith Estimates to uninsured and self-pay patients prior to scheduled care, ensuring full No Surprises Act compliance.",
    bullets: [
      "Automated cost calculation based on scheduled CPT codes",
      "Clear itemization of diagnostic, professional, and facility fees",
      "Protection against federal arbitration and compliance penalties"
    ]
  },
  {
    title: "Bilingual Patient Billing Helpline",
    desc: "Courteous, knowledgeable billing specialists handle patient inquiries with empathy, answering statement questions and setting up structured payment plans.",
    bullets: [
      "95%+ first-call issue resolution rate",
      "Bilingual English and Spanish telephone support",
      "Zero hold times with prompt call-back routing"
    ]
  },
  {
    title: "Paperless Digital Statements & Text-to-Pay",
    desc: "Modern digital billing delivered straight to patient smartphones via SMS text and encrypted email links with instant credit card, Apple Pay, and HSA checkout.",
    bullets: [
      "Instant 1-click mobile payment portal without login friction",
      "Automated reminder sequences reducing statement aging",
      "Significant reduction in paper print, envelope, and postage costs"
    ]
  },
  {
    title: "Patient Payment Plans & Financial Hardship",
    desc: "Establish customized, practice-approved installment plans and hardship discount policies to recover out-of-pocket balances without alienating patients.",
    bullets: [
      "Automated recurring credit card installment processing",
      "Structured financial hardship evaluation workflows",
      "Ethical, compliant recovery protecting patient goodwill"
    ]
  }
];

const patientGroup2 = [
  {
    title: "Front-Desk Intake & POS Collection Scripts",
    desc: "Empower your administrative front-desk team with proven scripts, intake checklists, and payment workflows to collect deductibles and copays at check-in.",
    bullets: [
      "Polite, professional phrasing for collecting past-due balances",
      "Intake checklists ensuring demographic accuracy",
      "Point-of-service credit card capture on file protocols"
    ]
  },
  {
    title: "Provider Clinical Documentation Coaching",
    desc: "One-on-one coaching for physicians, nurse practitioners, and PAs to optimize chart documentation, ensuring maximum legal coding levels without audit risk.",
    bullets: [
      "Evaluation and Management (E/M) medical decision-making guidance",
      "Specialty-specific documentation templates to justify high-complexity codes",
      "Identification of under-documented and missed reimbursable services"
    ]
  },
  {
    title: "Practice Fee Schedule Optimization",
    desc: "Comprehensive review of practice chargemasters against regional commercial fee schedules to ensure your cash rates and billed charges are not leaving money on the table.",
    bullets: [
      "Regional geographic conversion factor benchmarking",
      "Identification of charges below contracted payer allowable rates",
      "Annual fee schedule updates reflecting new CPT and RVU weights"
    ]
  },
  {
    title: "Monthly RCM Executive Reviews & KPI Reporting",
    desc: "Monthly deep-dive reviews with practice leadership analyzing days in A/R, net collection ratios, denial trends, and physician productivity.",
    bullets: [
      "Executive summary slide deck delivered every 30 days",
      "Actionable recommendations to plug operational revenue leaks",
      "Direct access to your dedicated senior RCM account executive"
    ]
  }
];

const patientGrid1 = createServicesGrid(
  "PATIENT FINANCIAL EXPERIENCE",
  "Transparent Billing & <span style=\"color:#179A9E;\">Support</span>",
  "Empathetic, clear financial communication that builds patient trust while accelerating out-of-pocket collections.",
  patientGroup1,
  2
);

const patientGrid2 = createServicesGrid(
  "PRACTICE WORKFLOW EFFICIENCY",
  "Staff Training & <span style=\"color:#179A9E;\">Operations</span>",
  "Optimizing practice operations from the front desk to the executive suite for maximum efficiency.",
  patientGroup2,
  2
);

const patientCTA = createSubPageCTA(
  "Elevate Your Patient Financial Experience Today",
  "Empower your staff, reduce billing complaints, and increase point-of-service collections with StelleMed.",
  "Talk to a Practice Consultant"
);

// Save Section-by-Section for Service 2
saveTemplate('service-2-sec-1-hero-elementor', patientHero, "Patient & Practice - 1. Hero Banner (100% Flexbox Container)");
saveTemplate('service-2-sec-2-metrics-bar-elementor', patientMetrics, "Patient & Practice - 2. Metrics Bar (100% Flexbox Container)");
saveTemplate('service-2-sec-3-patient-sequence-elementor', patientSequence, "Patient & Practice - 3. Sequence Banner (100% Flexbox Container)");
saveTemplate('service-2-sec-4-patient-financial-care-elementor', patientGrid1, "Patient & Practice - 4. Patient Financial Care (100% Flexbox Container)");
saveTemplate('service-2-sec-5-practice-workflows-elementor', patientGrid2, "Patient & Practice - 5. Practice Workflows (100% Flexbox Container)");
saveTemplate('service-2-sec-6-cta-banner-elementor', patientCTA, "Patient & Practice - 6. CTA Banner (100% Flexbox Container)");

// Complete Page for Service 2
const patientCompletePage = [patientHero, patientMetrics, patientSequence, patientGrid1, patientGrid2, patientCTA];
saveTemplate('service-2-patient-practice-elementor', patientCompletePage, "Patient & Practice Services - Complete Page (100% Flexbox Container)");

// ============================================================================
// PAGE 4: TECHNOLOGY & SUPPORT (Powered by StelleCloud™)
// ============================================================================

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
  { num: "50+", label: "Major EHRs Integrated" },
  { num: "<15 Mins", label: "Helpdesk SLA Response" }
]);

const techGatewayBanner = {
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
    border_border: "solid",
    border_width: { unit: "px", top: "1", right: "1", bottom: "1", left: "1", isLinked: true },
    border_color: "#E2E8F0",
    border_radius: { unit: "px", top: "20", right: "20", bottom: "20", left: "20", isLinked: true },
    padding: { unit: "px", top: "40", right: "24", bottom: "40", left: "24", isLinked: false },
    _margin: { unit: "px", top: "10", right: "auto", bottom: "40", left: "auto", isLinked: false },
    margin: { unit: "px", top: "10", right: "auto", bottom: "40", left: "auto", isLinked: false }
  },
  elements: [
    {
      id: createId(),
      elType: "widget",
      widgetType: "heading",
      settings: {
        title: `<div style="display:inline-flex;align-items:center;gap:6px;padding:5px 16px;background-color:#EAF8F8;border:1px solid #A7E8E9;border-radius:50px;color:#179A9E;font-size:11.5px;font-weight:800;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px;line-height:1.4;"><i class="fas fa-server"></i> INTEROPERABILITY ENGINE</div>`,
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
        title: "StelleCloud™ Architecture & Security Gateway",
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
        flex_gap: { unit: "px", size: 14, column: "14", row: "14" }
      },
      elements: [
        { label: "Bi-Directional HL7/FHIR Engine", icon: "fas fa-sync-alt" },
        { label: "Real-Time 3M+ Scrubbing Rules", icon: "fas fa-filter" },
        { label: "Automated 835 Remit Auto-Poster", icon: "fas fa-file-invoice-dollar" },
        { label: "SOC-2 Type II & HIPAA Certified", icon: "fas fa-lock" }
      ].map(badge => ({
        id: createId(),
        elType: "container",
        isInner: true,
        settings: {
          content_width: "full",
          flex_direction: "row",
          flex_align_items: "center",
          flex_gap: { unit: "px", size: 10, column: "10", row: "10" },
          background_background: "classic",
          background_color: "#F8FAFC",
          border_border: "solid",
          border_width: { unit: "px", top: "1", right: "1", bottom: "1", left: "1", isLinked: true },
          border_color: "#E2E8F0",
          border_radius: { unit: "px", top: "10", right: "10", bottom: "10", left: "10", isLinked: true },
          padding: { unit: "px", top: "12", right: "18", bottom: "12", left: "16", isLinked: false }
        },
        elements: [
          {
            id: createId(),
            elType: "widget",
            widgetType: "icon",
            settings: {
              selected_icon: { value: badge.icon, library: "fa-solid" },
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
              title: badge.label,
              header_size: "div",
              title_color: "#0C2340",
              typography_typography: "custom",
              typography_font_family: "Plus Jakarta Sans",
              typography_font_size: { unit: "px", size: 13.5 },
              typography_font_weight: "700"
            }
          }
        ]
      }))
    }
  ]
};

const techGroup1 = [
  {
    title: "Bi-Directional EHR Integration",
    desc: "Seamless two-way data synchronization with leading EHRs including Epic, Cerner, AthenaHealth, eClinicalWorks, Kareo, NextGen, and 50+ specialty platforms.",
    bullets: [
      "No manual double-entry of patient demographics or clinical charges",
      "Real-time schedule synchronization and appointment check-in feeds",
      "Direct write-back of payment receipts and clearinghouse statuses into your EHR"
    ]
  },
  {
    title: "StelleCloud™ Automated Claim Scrubber",
    desc: "Enterprise clearinghouse rules engine testing every charge against 3M+ payer-specific rules before EDI file generation, catching modifier errors and unbundled codes.",
    bullets: [
      "Real-time identification of LCD/NCD coverage conflicts",
      "Automatic application of specialty billing rules and modifier logic",
      "Immediate alert dashboard showing root cause before submission"
    ]
  },
  {
    title: "Real-Time Executive Dashboards & BI Analytics",
    desc: "Interactive web and mobile business intelligence dashboards providing transparent, up-to-the-minute visibility into practice financial performance.",
    bullets: [
      "Track Days in A/R, First-Pass Clean Claim Rate, and Net Collections",
      "Physician and provider level productivity and RVU comparisons",
      "Automated weekly and monthly performance reports sent to your email"
    ]
  },
  {
    title: "Automated ERA (835) Auto-Posting",
    desc: "Automated ingestion and line-item reconciliation of electronic remittance files, eliminating hours of manual billing clerk data entry.",
    bullets: [
      "Instant matching of electronic bank deposits against payer remits",
      "Automated secondary billing trigger upon primary claim adjudication",
      "Zero human error in contractual write-offs and allowable adjustments"
    ]
  }
];

const techGroup2 = [
  {
    title: "HIPAA Security Auditing & Compliance",
    desc: "Comprehensive technical safeguards protecting electronic protected health information (ePHI) across network perimeters, endpoints, and cloud databases.",
    bullets: [
      "Annual HIPAA Risk Assessments and technical vulnerability scans",
      "Role-based access control (RBAC) and multi-factor authentication (MFA)",
      "Strict Business Associate Agreement (BAA) execution with all vendors"
    ]
  },
  {
    title: "Automated Encrypted Off-Site Backups",
    desc: "Continuous, automated backups of clinical databases and billing files encrypted with AES-256 and stored across redundant geographic cloud centers.",
    bullets: [
      "Immutable snapshot backups protecting against ransomware encryption",
      "Point-in-time database restoration with guaranteed RPO under 1 hour",
      "Annual disaster recovery and failover simulation drills"
    ]
  },
  {
    title: "24/7 Healthcare IT Helpdesk Support",
    desc: "Dedicated medical IT specialists providing rapid technical support for clinic hardware, printers, scanners, EHR interfaces, and workstations.",
    bullets: [
      "Under 15-minute SLA response time for critical clinic tickets",
      "Remote screen-share troubleshooting for provider workstations",
      "Proactive patch management and antivirus endpoint protection"
    ]
  }
];

const techGroup3 = [
  {
    title: "Medical Website Design & Development",
    desc: "Modern, ADA-compliant, mobile-optimized medical websites engineered to convert prospective patients into scheduled appointments.",
    bullets: [
      "Online appointment booking and digital patient intake forms",
      "Fast load speeds optimized for Google Core Web Vitals",
      "HIPAA-compliant secure form submissions and patient communication"
    ]
  },
  {
    title: "Local Healthcare SEO & Google Maps Optimization",
    desc: "Targeted search engine optimization to rank your practice at the top of local search results and Google Maps for high-value specialty keywords.",
    bullets: [
      "Google Business Profile optimization and weekly clinical updates",
      "Specialty procedure content creation and medical schema markup",
      "Targeted citation building across authoritative healthcare directories"
    ]
  },
  {
    title: "Reputation & 5-Star Review Generation",
    desc: "Automated post-visit patient satisfaction surveys and positive review generation to elevate your clinic’s online reputation across Google and WebMD.",
    bullets: [
      "Automated SMS review requests sent following successful visits",
      "Proactive sentiment tracking to address patient dissatisfaction",
      "Consistent 5-star brand presence across top healthcare review directories"
    ]
  }
];

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
  3
);

const techCTA = createSubPageCTA(
  "Modernize Your Healthcare Practice Technology Today",
  "Experience seamless EHR sync, real-time dashboards, and ironclad HIPAA compliance with StelleCloud.",
  "Request StelleCloud Demo"
);

// Save Section-by-Section for Service 3
saveTemplate('service-3-sec-1-hero-elementor', techHero, "Technology & Support - 1. Hero Banner (100% Flexbox Container)");
saveTemplate('service-3-sec-2-metrics-bar-elementor', techMetrics, "Technology & Support - 2. Metrics Bar (100% Flexbox Container)");
saveTemplate('service-3-sec-3-architecture-gateway-elementor', techGatewayBanner, "Technology & Support - 3. Architecture Gateway (100% Flexbox Container)");
saveTemplate('service-3-sec-4-cloud-systems-elementor', techGrid1, "Technology & Support - 4. Core Cloud Systems (100% Flexbox Container)");
saveTemplate('service-3-sec-5-security-it-elementor', techGrid2, "Technology & Support - 5. Security & Managed IT (100% Flexbox Container)");
saveTemplate('service-3-sec-6-patient-acquisition-elementor', techGrid3, "Technology & Support - 6. Patient Acquisition (100% Flexbox Container)");
saveTemplate('service-3-sec-7-cta-banner-elementor', techCTA, "Technology & Support - 7. CTA Banner (100% Flexbox Container)");

// Complete Page for Service 3
const techCompletePage = [techHero, techMetrics, techGatewayBanner, techGrid1, techGrid2, techGrid3, techCTA];
saveTemplate('service-3-technology-support-elementor', techCompletePage, "Technology & Support Services - Complete Page (100% Flexbox Container)");

console.log("\nAll 3 Sub-Service Pages section-by-section and complete pages successfully generated!");
