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
// STELLEMED NAVBAR & TOPBAR (Matching media_1792640473878.png Exactly)
// 100% Flexbox Containers (0 Columns, 0 Sections)
// ============================================================================

// 1. TOP UTILITY STRIP CONTAINER
const topBarContainer = {
  id: createId(),
  elType: "container",
  isInner: true,
  settings: {
    content_width: "full",
    background_background: "classic",
    background_color: "#EBF7F7",
    border_border: "solid",
    border_width: { unit: "px", top: "0", right: "0", bottom: "1", left: "0", isLinked: false },
    border_color: "#D6EEEE",
    padding: { unit: "px", top: "8", right: "20", bottom: "8", left: "20", isLinked: false }
  },
  elements: [
    {
      id: createId(),
      elType: "container",
      isInner: true,
      settings: {
        content_width: "boxed",
        boxed_width: { unit: "px", size: 1220, sizes: [] },
        flex_direction: "row",
        flex_wrap: "wrap",
        flex_justify_content: "space-between",
        flex_align_items: "center",
        flex_gap: { unit: "px", size: 12, column: "12", row: "8" }
      },
      elements: [
        // Left Side: Dot + Shield + Trusted Medical Billing + Divider + HIPAA text
        {
          id: createId(),
          elType: "widget",
          widgetType: "heading",
          settings: {
            title: `<div style="display:inline-flex;align-items:center;flex-wrap:wrap;gap:8px;font-size:12px;font-family:'Plus Jakarta Sans',sans-serif;">
              <span style="display:inline-flex;align-items:center;gap:6px;color:#179A9E;font-weight:700;">
                <span style="display:inline-block;width:7px;height:7px;background-color:#179A9E;border-radius:50%;"></span>
                <i class="fas fa-shield-alt" style="font-size:12px;"></i>
                <span>Trusted Medical Billing &amp; Healthcare Solutions</span>
              </span>
              <span style="color:#CBD5E1;margin:0 4px;">|</span>
              <span style="color:#64748B;font-weight:500;">HIPAA Compliant Infrastructure Powered by StelleCloud™</span>
            </div>`,
            header_size: "div",
            _margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false },
            margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false }
          }
        },
        // Right Side: Email + Divider + Phone + Client Login Button
        {
          id: createId(),
          elType: "widget",
          widgetType: "heading",
          settings: {
            title: `<div style="display:inline-flex;align-items:center;gap:14px;font-size:12px;font-family:'Plus Jakarta Sans',sans-serif;">
              <a href="mailto:info@stellemed.com" style="display:inline-flex;align-items:center;gap:6px;color:#1E293B;font-weight:600;text-decoration:none;">
                <i class="far fa-envelope" style="color:#179A9E;font-size:13px;"></i>
                <span>info@stellemed.com</span>
              </a>
              <span style="color:#CBD5E1;">|</span>
              <a href="tel:15169797418" style="display:inline-flex;align-items:center;gap:6px;color:#1E293B;font-weight:600;text-decoration:none;">
                <i class="fas fa-phone-alt" style="color:#179A9E;font-size:12px;"></i>
                <span>+1 (516) 979-7418</span>
              </a>
              <a href="#login" style="display:inline-flex;align-items:center;gap:6px;background-color:#0C2340;color:#FFFFFF;font-weight:700;font-size:12px;padding:6px 14px;border-radius:6px;text-decoration:none;margin-left:4px;transition:background-color 0.2s;">
                <i class="fas fa-lock" style="font-size:11px;"></i>
                <span>Client Login</span>
              </a>
            </div>`,
            header_size: "div",
            align: "right",
            _margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false },
            margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false }
          }
        }
      ]
    }
  ]
};

// 2. MAIN NAVBAR CONTAINER
const mainNavBarContainer = {
  id: createId(),
  elType: "container",
  isInner: true,
  settings: {
    content_width: "full",
    background_background: "classic",
    background_color: "#FFFFFF",
    box_shadow_box_shadow_type: "yes",
    box_shadow_box_shadow: { horizontal: 0, vertical: 4, blur: 20, spread: -5, color: "rgba(12, 35, 64, 0.05)" },
    padding: { unit: "px", top: "14", right: "20", bottom: "14", left: "20", isLinked: false }
  },
  elements: [
    {
      id: createId(),
      elType: "container",
      isInner: true,
      settings: {
        content_width: "boxed",
        boxed_width: { unit: "px", size: 1220, sizes: [] },
        flex_direction: "row",
        flex_justify_content: "space-between",
        flex_align_items: "center",
        flex_gap: { unit: "px", size: 20, column: "20", row: "16" }
      },
      elements: [
        // Left: Logo (Navy Square Icon + "StelleMed" + "HEALTHCARE BILLING SOLUTIONS")
        {
          id: createId(),
          elType: "container",
          isInner: true,
          settings: {
            content_width: "full",
            width: { unit: "px", size: 280, sizes: [] },
            flex_direction: "row",
            flex_align_items: "center",
            flex_gap: { unit: "px", size: 12, column: "12", row: "12" }
          },
          elements: [
            {
              id: createId(),
              elType: "widget",
              widgetType: "heading",
              settings: {
                title: `<a href="/" style="display:inline-flex;align-items:center;gap:12px;text-decoration:none;">
                  <div style="width:42px;height:42px;background:#0C2340;border-radius:10px;display:flex;align-items:center;justify-content:center;color:#179A9E;font-size:20px;flex-shrink:0;box-shadow:0 3px 8px rgba(12,35,64,0.15);">
                    <i class="fas fa-heartbeat"></i>
                  </div>
                  <div style="display:flex;flex-direction:column;">
                    <span style="font-size:23px;font-weight:800;color:#0C2340;letter-spacing:-0.5px;line-height:1.1;font-family:'Plus Jakarta Sans',sans-serif;">Stelle<span style="color:#179A9E;">Med</span></span>
                    <span style="font-size:9px;font-weight:700;color:#94A3B8;letter-spacing:1.5px;text-transform:uppercase;font-family:'Plus Jakarta Sans',sans-serif;margin-top:2px;">HEALTHCARE BILLING SOLUTIONS</span>
                  </div>
                </a>`,
                header_size: "div",
                _margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false },
                margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false }
              }
            }
          ]
        },
        // Center: Navigation Menu Links (Home active pill, Services ⌵, About Us, Resources ⌵, Contact)
        {
          id: createId(),
          elType: "container",
          isInner: true,
          settings: {
            content_width: "full",
            flex_direction: "row",
            flex_align_items: "center",
            flex_justify_content: "center",
            flex_gap: { unit: "px", size: 24, column: "24", row: "14" }
          },
          elements: [
            {
              id: createId(),
              elType: "widget",
              widgetType: "heading",
              settings: {
                title: `<nav style="display:inline-flex;align-items:center;gap:26px;font-family:'Plus Jakarta Sans',sans-serif;">
                  <a href="/" style="display:inline-block;padding:7px 18px;background-color:#EAF8F8;border-radius:8px;color:#179A9E;font-size:14.5px;font-weight:700;text-decoration:none;">Home</a>
                  <a href="/services" style="display:inline-flex;align-items:center;gap:4px;color:#0C2340;font-size:14.5px;font-weight:700;text-decoration:none;transition:color 0.2s;">
                    <span>Services</span>
                    <i class="fas fa-chevron-down" style="font-size:10.5px;color:#0C2340;margin-top:1px;"></i>
                  </a>
                  <a href="/about" style="color:#0C2340;font-size:14.5px;font-weight:700;text-decoration:none;transition:color 0.2s;">About Us</a>
                  <a href="/resources" style="display:inline-flex;align-items:center;gap:4px;color:#0C2340;font-size:14.5px;font-weight:700;text-decoration:none;transition:color 0.2s;">
                    <span>Resources</span>
                    <i class="fas fa-chevron-down" style="font-size:10.5px;color:#0C2340;margin-top:1px;"></i>
                  </a>
                  <a href="/contact" style="color:#0C2340;font-size:14.5px;font-weight:700;text-decoration:none;transition:color 0.2s;">Contact</a>
                </nav>`,
                header_size: "div",
                align: "center",
                _margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false },
                margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false }
              }
            }
          ]
        },
        // Right: "Get Started →" CTA Button
        {
          id: createId(),
          elType: "widget",
          widgetType: "button",
          settings: {
            text: "Get Started",
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
            padding: { unit: "px", top: "12", right: "24", bottom: "12", left: "24", isLinked: false },
            typography_typography: "custom",
            typography_font_family: "Plus Jakarta Sans",
            typography_font_size: { unit: "px", size: 14.5 },
            typography_font_weight: "700",
            _margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false },
            margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: false }
          }
        }
      ]
    }
  ]
};

// 3. MASTER HEADER TEMPLATE (TopBar + Main Navbar together)
const masterHeader = {
  id: createId(),
  elType: "container",
  isInner: false,
  settings: {
    content_width: "full",
    flex_direction: "column",
    flex_gap: { unit: "px", size: 0, column: "0", row: "0" },
    padding: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: true }
  },
  elements: [
    topBarContainer,
    mainNavBarContainer
  ]
};

// Save files
saveTemplate(
  'header-navbar-elementor', 
  masterHeader, 
  "StelleMed - Global TopBar & Sticky Navbar (100% Flexbox Container)"
);

saveTemplate(
  'header-topbar-elementor', 
  topBarContainer, 
  "StelleMed - Header Top Utility Strip (100% Flexbox Container)"
);

saveTemplate(
  'header-main-nav-elementor', 
  mainNavBarContainer, 
  "StelleMed - Main Navigation Bar (100% Flexbox Container)"
);

console.log("\nHeader & Navbar templates successfully generated matching media_1792640473878.png!");
