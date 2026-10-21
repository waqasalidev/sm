const fs = require('fs');
const path = require('path');

function createId() {
  return Math.random().toString(36).substring(2, 9);
}

// Header & Navbar Template
const headerTemplate = {
  version: "0.4",
  title: "StelleMed - Global Header & Sticky Navbar (100% Flexbox Container)",
  type: "container",
  content: [
    {
      id: createId(),
      elType: "container",
      isInner: false,
      settings: {
        content_width: "full",
        flex_direction: "column",
        flex_gap: { unit: "px", size: 0, column: "0", row: "0" },
        padding: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: true },
        background_background: "classic",
        background_color: "#FFFFFF",
        box_shadow_box_shadow_type: "yes",
        box_shadow_box_shadow: { horizontal: 0, vertical: 4, blur: 20, spread: -5, color: "rgba(12, 35, 64, 0.06)" }
      },
      elements: [
        // TopBar Container
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
            background_background: "classic",
            background_color: "#0C2340",
            padding: { unit: "px", top: "8", right: "20", bottom: "8", left: "20", isLinked: false }
          },
          elements: [
            // Left: Compliance text
            {
              id: createId(),
              elType: "widget",
              widgetType: "heading",
              settings: {
                title: "<span style=\"display:inline-flex;align-items:center;gap:6px;color:#94A3B8;font-size:12px;font-weight:600;\"><i class=\"fas fa-shield-alt\" style=\"color:#179A9E;\"></i> HIPAA Compliant Infrastructure • Powered by StelleCloud™</span>",
                header_size: "span"
              }
            },
            // Right: Contact & Portal
            {
              id: createId(),
              elType: "widget",
              widgetType: "heading",
              settings: {
                title: "<span style=\"display:inline-flex;align-items:center;gap:16px;color:#94A3B8;font-size:12px;font-weight:600;\"><a href=\"mailto:info@stellemed.com\" style=\"color:#CBD5E1;text-decoration:none;\"><i class=\"far fa-envelope\" style=\"color:#179A9E;margin-right:5px;\"></i>info@stellemed.com</a><span style=\"color:#334155;\">|</span><a href=\"tel:15169797418\" style=\"color:#CBD5E1;text-decoration:none;\"><i class=\"fas fa-phone-alt\" style=\"color:#179A9E;margin-right:5px;\"></i>+1 (516) 979-7418</a><span style=\"color:#334155;\">|</span><a href=\"#login\" style=\"color:#38D4D8;text-decoration:none;\"><i class=\"fas fa-lock\" style=\"margin-right:5px;\"></i>Client Login</a></span>",
                header_size: "span",
                align: "right"
              }
            }
          ]
        },
        // Main Navbar Container
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
            padding: { unit: "px", top: "16", right: "20", bottom: "16", left: "20", isLinked: false }
          },
          elements: [
            // Brand Logo
            {
              id: createId(),
              elType: "widget",
              widgetType: "heading",
              settings: {
                title: "<a href=\"/\" style=\"display:inline-flex;align-items:center;gap:8px;text-decoration:none;\"><span style=\"font-size:24px;font-weight:800;color:#0C2340;letter-spacing:-0.5px;\">Stelle<span style=\"color:#179A9E;\">Med</span></span></a>",
                header_size: "span"
              }
            },
            // Nav Menu Links
            {
              id: createId(),
              elType: "widget",
              widgetType: "heading",
              settings: {
                title: "<nav style=\"display:inline-flex;align-items:center;gap:28px;font-size:14.5px;font-weight:600;\"><a href=\"/\" style=\"color:#0C2340;text-decoration:none;\">Home</a><a href=\"/about\" style=\"color:#475569;text-decoration:none;\">About Us</a><a href=\"/services\" style=\"color:#475569;text-decoration:none;\">Services</a><a href=\"/specialties\" style=\"color:#475569;text-decoration:none;\">Specialties</a><a href=\"/calculator\" style=\"color:#475569;text-decoration:none;\">ROI Estimator</a><a href=\"/contact\" style=\"color:#475569;text-decoration:none;\">Contact</a></nav>",
                header_size: "span"
              }
            },
            // Action Button
            {
              id: createId(),
              elType: "widget",
              widgetType: "button",
              settings: {
                text: "Book Free Consultation",
                link: { url: "#contact", is_external: false, nofollow: false },
                selected_icon: { value: "fas fa-arrow-right", library: "fa-solid" },
                icon_align: "right",
                icon_indent: { unit: "px", size: 8 },
                background_color: "#179A9E",
                button_text_color: "#FFFFFF",
                background_hover_color: "#0F7B7E",
                hover_color: "#FFFFFF",
                border_radius: { unit: "px", top: "10", right: "10", bottom: "10", left: "10", isLinked: true },
                padding: { unit: "px", top: "12", right: "20", bottom: "12", left: "20", isLinked: false },
                typography_typography: "custom",
                typography_font_family: "Plus Jakarta Sans",
                typography_font_size: { unit: "px", size: 13.5 },
                typography_font_weight: "700"
              }
            }
          ]
        }
      ]
    }
  ]
};

// Footer Template
const footerTemplate = {
  version: "0.4",
  title: "StelleMed - Global Footer (100% Flexbox Container)",
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
        flex_gap: { unit: "px", size: 0, column: "0", row: "0" },
        background_background: "classic",
        background_color: "#081D30",
        padding: { unit: "px", top: "80", right: "20", bottom: "40", left: "20", isLinked: false }
      },
      elements: [
        // 4 Columns Grid Container
        {
          id: createId(),
          elType: "container",
          isInner: true,
          settings: {
            content_width: "full",
            flex_direction: "row",
            flex_wrap: "wrap",
            flex_justify_content: "space-between",
            flex_align_items: "flex-start",
            flex_gap: { unit: "px", size: 30, column: "30", row: "30" },
            margin: { unit: "px", top: "0", right: "0", bottom: "48", left: "0", isLinked: false }
          },
          elements: [
            // Col 1: Brand Info
            {
              id: createId(),
              elType: "container",
              isInner: true,
              settings: {
                content_width: "full",
                width: { unit: "%", size: 28, sizes: [] },
                width_tablet: { unit: "%", size: 48, sizes: [] },
                width_mobile: { unit: "%", size: 100, sizes: [] },
                flex_direction: "column",
                flex_gap: { unit: "px", size: 12, column: "12", row: "12" }
              },
              elements: [
                {
                  id: createId(),
                  elType: "widget",
                  widgetType: "heading",
                  settings: {
                    title: "<span style=\"font-size:24px;font-weight:800;color:#FFFFFF;letter-spacing:-0.5px;\">Stelle<span style=\"color:#179A9E;\">Med</span></span>",
                    header_size: "h3"
                  }
                },
                {
                  id: createId(),
                  elType: "widget",
                  widgetType: "text-editor",
                  settings: {
                    editor: "<p style=\"margin:0;font-size:13.5px;color:#94A3B8;line-height:1.6;\">Full-spectrum medical billing and revenue cycle management engineered to elevate practice collections, eliminate denials, and preserve clinical autonomy across all 50 states.</p>",
                    text_color: "#94A3B8"
                  }
                },
                {
                  id: createId(),
                  elType: "widget",
                  widgetType: "heading",
                  settings: {
                    title: "<p style=\"margin:8px 0 0;font-size:13px;color:#CBD5E1;\"><i class=\"fas fa-map-marker-alt\" style=\"color:#179A9E;margin-right:8px;\"></i>1111 Elm Street, Suite 400, Dallas, TX 75201<br /><i class=\"fas fa-phone-alt\" style=\"color:#179A9E;margin-right:8px;margin-top:8px;\"></i>+1 (516) 979-7418<br /><i class=\"far fa-envelope\" style=\"color:#179A9E;margin-right:8px;margin-top:8px;\"></i>info@stellemed.com</p>",
                    header_size: "div"
                  }
                }
              ]
            },
            // Col 2: Services Links
            {
              id: createId(),
              elType: "container",
              isInner: true,
              settings: {
                content_width: "full",
                width: { unit: "%", size: 20, sizes: [] },
                width_tablet: { unit: "%", size: 48, sizes: [] },
                width_mobile: { unit: "%", size: 100, sizes: [] },
                flex_direction: "column",
                flex_gap: { unit: "px", size: 10, column: "10", row: "10" }
              },
              elements: [
                {
                  id: createId(),
                  elType: "widget",
                  widgetType: "heading",
                  settings: {
                    title: "Core Services",
                    header_size: "h4",
                    title_color: "#FFFFFF",
                    typography_typography: "custom",
                    typography_font_family: "Plus Jakarta Sans",
                    typography_font_size: { unit: "px", size: 16 },
                    typography_font_weight: "700"
                  }
                },
                {
                  id: createId(),
                  elType: "widget",
                  widgetType: "icon-list",
                  settings: {
                    icon_list: [
                      { text: "Insurance & Payer Services" },
                      { text: "Patient & Practice Billing" },
                      { text: "Technology & Support" },
                      { text: "Provider Credentialing" },
                      { text: "Denial Management & Appeals" }
                    ],
                    icon_color: "#179A9E",
                    text_color: "#94A3B8",
                    space_between: { unit: "px", size: 10 },
                    typography_font_size: { unit: "px", size: 13.5 }
                  }
                }
              ]
            },
            // Col 3: Specialties
            {
              id: createId(),
              elType: "container",
              isInner: true,
              settings: {
                content_width: "full",
                width: { unit: "%", size: 20, sizes: [] },
                width_tablet: { unit: "%", size: 48, sizes: [] },
                width_mobile: { unit: "%", size: 100, sizes: [] },
                flex_direction: "column",
                flex_gap: { unit: "px", size: 10, column: "10", row: "10" }
              },
              elements: [
                {
                  id: createId(),
                  elType: "widget",
                  widgetType: "heading",
                  settings: {
                    title: "Specialties",
                    header_size: "h4",
                    title_color: "#FFFFFF",
                    typography_typography: "custom",
                    typography_font_family: "Plus Jakarta Sans",
                    typography_font_size: { unit: "px", size: 16 },
                    typography_font_weight: "700"
                  }
                },
                {
                  id: createId(),
                  elType: "widget",
                  widgetType: "icon-list",
                  settings: {
                    icon_list: [
                      { text: "Internal & Family Medicine" },
                      { text: "Cardiology & Vascular" },
                      { text: "Orthopedics & Spine" },
                      { text: "Mental & Behavioral Health" },
                      { text: "View All 28 Specialties" }
                    ],
                    icon_color: "#179A9E",
                    text_color: "#94A3B8",
                    space_between: { unit: "px", size: 10 },
                    typography_font_size: { unit: "px", size: 13.5 }
                  }
                }
              ]
            },
            // Col 4: Credentials & Trust
            {
              id: createId(),
              elType: "container",
              isInner: true,
              settings: {
                content_width: "full",
                width: { unit: "%", size: 24, sizes: [] },
                width_tablet: { unit: "%", size: 48, sizes: [] },
                width_mobile: { unit: "%", size: 100, sizes: [] },
                flex_direction: "column",
                flex_gap: { unit: "px", size: 10, column: "10", row: "10" }
              },
              elements: [
                {
                  id: createId(),
                  elType: "widget",
                  widgetType: "heading",
                  settings: {
                    title: "Compliance & Security",
                    header_size: "h4",
                    title_color: "#FFFFFF",
                    typography_typography: "custom",
                    typography_font_family: "Plus Jakarta Sans",
                    typography_font_size: { unit: "px", size: 16 },
                    typography_font_weight: "700"
                  }
                },
                {
                  id: createId(),
                  elType: "widget",
                  widgetType: "text-editor",
                  settings: {
                    editor: "<p style=\"margin:0;font-size:13px;color:#94A3B8;line-height:1.6;\">100% HIPAA Compliant with signed Business Associate Agreements. 256-bit AES encryption across all clearinghouse connections.</p>",
                    text_color: "#94A3B8"
                  }
                },
                {
                  id: createId(),
                  elType: "widget",
                  widgetType: "button",
                  settings: {
                    text: "Request Practice Audit",
                    link: { url: "#contact", is_external: false, nofollow: false },
                    selected_icon: { value: "fas fa-arrow-right", library: "fa-solid" },
                    icon_align: "right",
                    background_color: "#179A9E",
                    button_text_color: "#FFFFFF",
                    border_radius: { unit: "px", top: "10", right: "10", bottom: "10", left: "10", isLinked: true },
                    padding: { unit: "px", top: "10", right: "16", bottom: "10", left: "16", isLinked: false },
                    typography_font_size: { unit: "px", size: 13 },
                    typography_font_weight: "700"
                  }
                }
              ]
            }
          ]
        },
        // Copyright Bar
        {
          id: createId(),
          elType: "container",
          isInner: true,
          settings: {
            content_width: "full",
            flex_direction: "row",
            flex_direction_tablet: "column",
            flex_direction_mobile: "column",
            flex_justify_content: "space-between",
            flex_align_items: "center",
            flex_gap: { unit: "px", size: 16, column: "16", row: "12" },
            border_border: "solid",
            border_width: { unit: "px", top: "1", right: "0", bottom: "0", left: "0", isLinked: false },
            border_color: "rgba(255, 255, 255, 0.08)",
            padding: { unit: "px", top: "24", right: "0", bottom: "0", left: "0", isLinked: false }
          },
          elements: [
            {
              id: createId(),
              elType: "widget",
              widgetType: "heading",
              settings: {
                title: "© 2026 StelleMed LLC. All Rights Reserved. HIPAA Compliant Healthcare RCM.",
                header_size: "span",
                title_color: "#64748B",
                typography_font_size: { unit: "px", size: 12.5 }
              }
            },
            {
              id: createId(),
              elType: "widget",
              widgetType: "heading",
              settings: {
                title: "<span style=\"display:inline-flex;gap:20px;font-size:12.5px;\"><a href=\"#privacy\" style=\"color:#64748B;text-decoration:none;\">Privacy Policy</a><a href=\"#terms\" style=\"color:#64748B;text-decoration:none;\">Terms of Service</a><a href=\"#baa\" style=\"color:#64748B;text-decoration:none;\">Business Associate Agreement</a></span>",
                header_size: "span",
                align: "right"
              }
            }
          ]
        }
      ]
    }
  ]
};

const outDir = path.join(__dirname, 'elementor-editable-templates');
fs.writeFileSync(path.join(outDir, 'header-navbar-elementor.json'), JSON.stringify(headerTemplate, null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'header-navbar-plain-text.json'), JSON.stringify(headerTemplate), 'utf8');

fs.writeFileSync(path.join(outDir, 'footer-elementor.json'), JSON.stringify(footerTemplate, null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'footer-plain-text.json'), JSON.stringify(footerTemplate), 'utf8');

console.log('Successfully generated Header & Footer with 100% Flexbox Containers!');
