const fs = require('fs');
const path = require('path');

function createId() {
  return Math.random().toString(36).substring(2, 9);
}

// Section 10: Practice Revenue Recovery Calculator
const calculatorSection = {
  version: "0.4",
  title: "Practice Revenue Recovery Estimator - Interactive ROI Calculator (100% Flexbox Container)",
  type: "container",
  content: [
    {
      id: createId(),
      elType: "container",
      isInner: false,
      settings: {
        content_width: "boxed",
        boxed_width: {
          unit: "px",
          size: 1220,
          sizes: []
        },
        flex_direction: "column",
        flex_align_items: "center",
        flex_gap: {
          unit: "px",
          size: 0,
          column: "0",
          row: "0"
        },
        background_background: "classic",
        background_color: "#081D30",
        padding: {
          unit: "px",
          top: "85",
          right: "20",
          bottom: "85",
          left: "20",
          isLinked: false
        },
        padding_tablet: {
          unit: "px",
          top: "65",
          right: "20",
          bottom: "65",
          left: "20",
          isLinked: false
        },
        padding_mobile: {
          unit: "px",
          top: "45",
          right: "16",
          bottom: "45",
          left: "16",
          isLinked: false
        }
      },
      elements: [
        // Section Header
        {
          id: createId(),
          elType: "container",
          isInner: true,
          settings: {
            content_width: "full",
            width: {
              unit: "px",
              size: 820,
              sizes: []
            },
            width_tablet: {
              unit: "%",
              size: 100,
              sizes: []
            },
            width_mobile: {
              unit: "%",
              size: 100,
              sizes: []
            },
            flex_direction: "column",
            flex_align_items: "center",
            margin: {
              unit: "px",
              top: "0",
              right: "auto",
              bottom: "44",
              left: "auto",
              isLinked: false
            }
          },
          elements: [
            // Pill
            {
              id: createId(),
              elType: "widget",
              widgetType: "heading",
              settings: {
                title: `<span style="display:inline-flex;align-items:center;gap:6px;padding:6px 16px;background-color:rgba(23,154,158,0.15);border:1px solid rgba(23,154,158,0.4);border-radius:50px;color:#179A9E;font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;"><i class=\"fas fa-calculator\"></i> PRACTICE REVENUE RECOVERY ESTIMATOR</span>`,
                header_size: "span",
                align: "center",
                title_color: "#179A9E",
                margin: {
                  unit: "px",
                  top: "0",
                  right: "0",
                  bottom: "16",
                  left: "0",
                  isLinked: false
                }
              }
            },
            // Title
            {
              id: createId(),
              elType: "widget",
              widgetType: "heading",
              settings: {
                title: "Calculate Your Practice's <span style=\"color:#179A9E;\">Lost Revenue Recovery</span>",
                header_size: "h2",
                align: "center",
                title_color: "#FFFFFF",
                typography_typography: "custom",
                typography_font_family: "Plus Jakarta Sans",
                typography_font_size: {
                  unit: "px",
                  size: 40
                },
                typography_font_size_tablet: {
                  unit: "px",
                  size: 32
                },
                typography_font_size_mobile: {
                  unit: "px",
                  size: 28
                },
                typography_font_weight: "800",
                typography_line_height: {
                  unit: "em",
                  size: 1.2
                },
                typography_letter_spacing: {
                  unit: "px",
                  size: -0.5
                },
                margin: {
                  unit: "px",
                  top: "0",
                  right: "0",
                  bottom: "14",
                  left: "0",
                  isLinked: false
                }
              }
            },
            // Subtitle
            {
              id: createId(),
              elType: "widget",
              widgetType: "text-editor",
              settings: {
                editor: "<p style=\"margin:0;font-size:16px;color:#94A3B8;line-height:1.6;text-align:center;\">Average US practices lose 15% to 25% of legitimate billings to unresolved claim denials, coding inaccuracies, and delayed payer follow-ups. See how much StelleMed can recapture.</p>",
                typography_typography: "custom",
                typography_font_family: "Plus Jakarta Sans",
                typography_font_size: {
                  unit: "px",
                  size: 16
                },
                typography_font_weight: "400",
                text_color: "#94A3B8"
              }
            }
          ]
        },
        // Outer Calculator Card Container (Dark Navy Box matching media_1792570740270.png)
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
            flex_align_items: "stretch",
            flex_gap: {
              unit: "px",
              size: 40,
              column: "40",
              row: "32"
            },
            background_background: "classic",
            background_color: "#0B2236",
            border_border: "solid",
            border_width: {
              unit: "px",
              top: "1",
              right: "1",
              bottom: "1",
              left: "1",
              isLinked: true
            },
            border_color: "rgba(255, 255, 255, 0.08)",
            border_radius: {
              unit: "px",
              top: "20",
              right: "20",
              bottom: "20",
              left: "20",
              isLinked: true
            },
            padding: {
              unit: "px",
              top: "40",
              right: "40",
              bottom: "40",
              left: "40",
              isLinked: true
            },
            padding_mobile: {
              unit: "px",
              top: "24",
              right: "20",
              bottom: "24",
              left: "20",
              isLinked: true
            }
          },
          elements: [
            // Left Half: Calculator Interactive Inputs
            {
              id: createId(),
              elType: "container",
              isInner: true,
              settings: {
                content_width: "full",
                width: {
                  unit: "%",
                  size: 52,
                  sizes: []
                },
                width_tablet: {
                  unit: "%",
                  size: 100,
                  sizes: []
                },
                width_mobile: {
                  unit: "%",
                  size: 100,
                  sizes: []
                },
                flex_direction: "column",
                flex_justify_content: "center",
                flex_gap: {
                  unit: "px",
                  size: 24,
                  column: "24",
                  row: "24"
                }
              },
              elements: [
                // Input 1: Current Monthly Practice Billings
                {
                  id: createId(),
                  elType: "container",
                  isInner: true,
                  settings: {
                    content_width: "full",
                    flex_direction: "column",
                    flex_gap: {
                      unit: "px",
                      size: 8,
                      column: "8",
                      row: "8"
                    }
                  },
                  elements: [
                    {
                      id: createId(),
                      elType: "container",
                      isInner: true,
                      settings: {
                        content_width: "full",
                        flex_direction: "row",
                        flex_justify_content: "space-between",
                        flex_align_items: "center"
                      },
                      elements: [
                        {
                          id: createId(),
                          elType: "widget",
                          widgetType: "heading",
                          settings: {
                            title: "Current Monthly Practice Billings",
                            header_size: "span",
                            title_color: "#FFFFFF",
                            typography_typography: "custom",
                            typography_font_family: "Plus Jakarta Sans",
                            typography_font_size: {
                              unit: "px",
                              size: 14.5
                            },
                            typography_font_weight: "600"
                          }
                        },
                        {
                          id: createId(),
                          elType: "widget",
                          widgetType: "heading",
                          settings: {
                            title: "<span id=\"calc-billings-val\" style=\"color:#179A9E;font-size:16px;font-weight:700;\">$120,000 / mo</span>",
                            header_size: "span",
                            align: "right"
                          }
                        }
                      ]
                    },
                    // Interactive Slider
                    {
                      id: createId(),
                      elType: "widget",
                      widgetType: "html",
                      settings: {
                        html: `<input type="range" id="billing-range" min="30000" max="1000000" step="10000" value="120000" style="width:100%;height:6px;background:#1E3A52;border-radius:5px;accent-color:#179A9E;cursor:pointer;" oninput="updateStelleCalc(this.value, null, null)">
                        <div style="display:flex;justify-content:space-between;color:#64748B;font-size:11px;margin-top:4px;">
                          <span>$30k/mo</span>
                          <span>$500k/mo</span>
                          <span>$1M+/mo</span>
                        </div>`
                      }
                    }
                  ]
                },
                // Input 2: Primary Medical Specialty
                {
                  id: createId(),
                  elType: "container",
                  isInner: true,
                  settings: {
                    content_width: "full",
                    flex_direction: "column",
                    flex_gap: {
                      unit: "px",
                      size: 8,
                      column: "8",
                      row: "8"
                    }
                  },
                  elements: [
                    {
                      id: createId(),
                      elType: "widget",
                      widgetType: "heading",
                      settings: {
                        title: "Primary Medical Specialty",
                        header_size: "span",
                        title_color: "#FFFFFF",
                        typography_typography: "custom",
                        typography_font_family: "Plus Jakarta Sans",
                        typography_font_size: {
                          unit: "px",
                          size: 14.5
                        },
                        typography_font_weight: "600"
                      }
                    },
                    {
                      id: createId(),
                      elType: "widget",
                      widgetType: "html",
                      settings: {
                        html: `<select id="calc-specialty-select" style="width:100%;padding:12px 16px;background:#0D2A42;border:1px solid #1E3A52;border-radius:10px;color:#FFFFFF;font-size:14px;outline:none;" onchange="updateStelleCalc(null, this.value, null)">
                          <option value="1.18">Internal Medicine / Primary Care</option>
                          <option value="1.22">Cardiology & Vascular</option>
                          <option value="1.20">Orthopedics & Sports Medicine</option>
                          <option value="1.17">Mental Health & Psychiatry</option>
                          <option value="1.24">General & Ambulatory Surgery</option>
                          <option value="1.19">Pediatrics & Family Care</option>
                          <option value="1.21">Other Multi-Disciplinary Care</option>
                        </select>`
                      }
                    }
                  ]
                },
                // Input 3: Number of Billing Providers
                {
                  id: createId(),
                  elType: "container",
                  isInner: true,
                  settings: {
                    content_width: "full",
                    flex_direction: "column",
                    flex_gap: {
                      unit: "px",
                      size: 8,
                      column: "8",
                      row: "8"
                    }
                  },
                  elements: [
                    {
                      id: createId(),
                      elType: "container",
                      isInner: true,
                      settings: {
                        content_width: "full",
                        flex_direction: "row",
                        flex_justify_content: "space-between",
                        flex_align_items: "center"
                      },
                      elements: [
                        {
                          id: createId(),
                          elType: "widget",
                          widgetType: "heading",
                          settings: {
                            title: "Number of Billing Providers",
                            header_size: "span",
                            title_color: "#FFFFFF",
                            typography_typography: "custom",
                            typography_font_family: "Plus Jakarta Sans",
                            typography_font_size: {
                              unit: "px",
                              size: 14.5
                            },
                            typography_font_weight: "600"
                          }
                        },
                        {
                          id: createId(),
                          elType: "widget",
                          widgetType: "heading",
                          settings: {
                            title: "<span id=\"calc-providers-val\" style=\"color:#179A9E;font-size:16px;font-weight:700;\">3 Providers</span>",
                            header_size: "span",
                            align: "right"
                          }
                        }
                      ]
                    },
                    {
                      id: createId(),
                      elType: "widget",
                      widgetType: "html",
                      settings: {
                        html: `<input type="range" id="provider-range" min="1" max="25" step="1" value="3" style="width:100%;height:6px;background:#1E3A52;border-radius:5px;accent-color:#179A9E;cursor:pointer;" oninput="updateStelleCalc(null, null, this.value)">
                        <div style="display:flex;justify-content:space-between;color:#64748B;font-size:11px;margin-top:4px;">
                          <span>1 Provider</span>
                          <span>10 Providers</span>
                          <span>25+ Providers</span>
                        </div>`
                      }
                    }
                  ]
                }
              ]
            },
            // Right Half: Results Card
            {
              id: createId(),
              elType: "container",
              isInner: true,
              settings: {
                content_width: "full",
                width: {
                  unit: "%",
                  size: 43,
                  sizes: []
                },
                width_tablet: {
                  unit: "%",
                  size: 100,
                  sizes: []
                },
                width_mobile: {
                  unit: "%",
                  size: 100,
                  sizes: []
                },
                flex_direction: "column",
                flex_align_items: "flex-start",
                flex_gap: {
                  unit: "px",
                  size: 0,
                  column: "0",
                  row: "0"
                },
                background_background: "classic",
                background_color: "#0E2B43",
                border_border: "solid",
                border_width: {
                  unit: "px",
                  top: "1",
                  right: "1",
                  bottom: "1",
                  left: "1",
                  isLinked: true
                },
                border_color: "rgba(23, 154, 158, 0.4)",
                border_radius: {
                  unit: "px",
                  top: "16",
                  right: "16",
                  bottom: "16",
                  left: "16",
                  isLinked: true
                },
                padding: {
                  unit: "px",
                  top: "32",
                  right: "28",
                  bottom: "32",
                  left: "28",
                  isLinked: true
                }
              },
              elements: [
                // Tag
                {
                  id: createId(),
                  elType: "widget",
                  widgetType: "heading",
                  settings: {
                    title: "ESTIMATED ANNUAL REVENUE RECAPTURED",
                    header_size: "span",
                    title_color: "#94A3B8",
                    typography_typography: "custom",
                    typography_font_family: "Plus Jakarta Sans",
                    typography_font_size: {
                      unit: "px",
                      size: 11
                    },
                    typography_font_weight: "800",
                    typography_letter_spacing: {
                      unit: "px",
                      size: 0.8
                    },
                    margin: {
                      unit: "px",
                      top: "0",
                      right: "0",
                      bottom: "8",
                      left: "0",
                      isLinked: false
                    }
                  }
                },
                // Recaptured Number
                {
                  id: createId(),
                  elType: "widget",
                  widgetType: "heading",
                  settings: {
                    title: "<span id=\"calc-annual-recaptured\">$259,200</span>",
                    header_size: "h2",
                    title_color: "#179A9E",
                    typography_typography: "custom",
                    typography_font_family: "Plus Jakarta Sans",
                    typography_font_size: {
                      unit: "px",
                      size: 42
                    },
                    typography_font_weight: "800",
                    typography_line_height: {
                      unit: "em",
                      size: 1.1
                    },
                    margin: {
                      unit: "px",
                      top: "0",
                      right: "0",
                      bottom: "8",
                      left: "0",
                      isLinked: false
                    }
                  }
                },
                // Subtitle
                {
                  id: createId(),
                  elType: "widget",
                  widgetType: "heading",
                  settings: {
                    title: "*Based on average 18% – 22% denial recovery & underpayment audits",
                    header_size: "span",
                    title_color: "#64748B",
                    typography_typography: "custom",
                    typography_font_family: "Plus Jakarta Sans",
                    typography_font_size: {
                      unit: "px",
                      size: 11.5
                    },
                    typography_font_weight: "400",
                    margin: {
                      unit: "px",
                      top: "0",
                      right: "0",
                      bottom: "20",
                      left: "0",
                      isLinked: false
                    }
                  }
                },
                // Metrics Row (A/R reduction & clean claims)
                {
                  id: createId(),
                  elType: "container",
                  isInner: true,
                  settings: {
                    content_width: "full",
                    flex_direction: "row",
                    flex_justify_content: "space-between",
                    flex_align_items: "center",
                    border_border: "solid",
                    border_width: {
                      unit: "px",
                      top: "1",
                      right: "0",
                      bottom: "1",
                      left: "0",
                      isLinked: false
                    },
                    border_color: "rgba(255, 255, 255, 0.08)",
                    padding: {
                      unit: "px",
                      top: "14",
                      right: "0",
                      bottom: "14",
                      left: "0",
                      isLinked: false
                    },
                    margin: {
                      unit: "px",
                      top: "0",
                      right: "0",
                      bottom: "18",
                      left: "0",
                      isLinked: false
                    }
                  },
                  elements: [
                    {
                      id: createId(),
                      elType: "container",
                      isInner: true,
                      settings: {
                        content_width: "full",
                        flex_direction: "column"
                      },
                      elements: [
                        {
                          id: createId(),
                          elType: "widget",
                          widgetType: "heading",
                          settings: {
                            title: "A/R Days Reduction",
                            header_size: "span",
                            title_color: "#64748B",
                            typography_typography: "custom",
                            typography_font_family: "Plus Jakarta Sans",
                            typography_font_size: {
                              unit: "px",
                              size: 11
                            },
                            typography_font_weight: "600"
                          }
                        },
                        {
                          id: createId(),
                          elType: "widget",
                          widgetType: "heading",
                          settings: {
                            title: "53d → <span style=\"color:#179A9E;\">26 days</span>",
                            header_size: "span",
                            title_color: "#FFFFFF",
                            typography_typography: "custom",
                            typography_font_family: "Plus Jakarta Sans",
                            typography_font_size: {
                              unit: "px",
                              size: 15
                            },
                            typography_font_weight: "700"
                          }
                        }
                      ]
                    },
                    {
                      id: createId(),
                      elType: "container",
                      isInner: true,
                      settings: {
                        content_width: "full",
                        flex_direction: "column"
                      },
                      elements: [
                        {
                          id: createId(),
                          elType: "widget",
                          widgetType: "heading",
                          settings: {
                            title: "Target Clean Claims",
                            header_size: "span",
                            title_color: "#64748B",
                            typography_typography: "custom",
                            typography_font_family: "Plus Jakarta Sans",
                            typography_font_size: {
                              unit: "px",
                              size: 11
                            },
                            typography_font_weight: "600"
                          }
                        },
                        {
                          id: createId(),
                          elType: "widget",
                          widgetType: "heading",
                          settings: {
                            title: "<span style=\"color:#179A9E;\">98.5%</span>",
                            header_size: "span",
                            title_color: "#179A9E",
                            typography_typography: "custom",
                            typography_font_family: "Plus Jakarta Sans",
                            typography_font_size: {
                              unit: "px",
                              size: 15
                            },
                            typography_font_weight: "700"
                          }
                        }
                      ]
                    }
                  ]
                },
                // Bullets
                {
                  id: createId(),
                  elType: "widget",
                  widgetType: "icon-list",
                  settings: {
                    icon_list: [
                      {
                        text: "Elimination of payer denial backlogs",
                        selected_icon: {
                          value: "far fa-check-circle",
                          library: "fa-regular"
                        }
                      },
                      {
                        text: "Real-time EHR clearinghouse claim validation",
                        selected_icon: {
                          value: "far fa-check-circle",
                          library: "fa-regular"
                        }
                      }
                    ],
                    icon_color: "#179A9E",
                    icon_size: {
                      unit: "px",
                      size: 13
                    },
                    space_between: {
                      unit: "px",
                      size: 8
                    },
                    text_color: "#94A3B8",
                    typography_typography: "custom",
                    typography_font_family: "Plus Jakarta Sans",
                    typography_font_size: {
                      unit: "px",
                      size: 12.5
                    },
                    typography_font_weight: "500",
                    margin: {
                      unit: "px",
                      top: "0",
                      right: "0",
                      bottom: "22",
                      left: "0",
                      isLinked: false
                    }
                  }
                },
                // Button
                {
                  id: createId(),
                  elType: "widget",
                  widgetType: "button",
                  settings: {
                    text: "Claim Your Detailed Practice Audit",
                    link: {
                      url: "#contact",
                      is_external: false,
                      nofollow: false
                    },
                    align: "justify",
                    button_type: "default",
                    selected_icon: {
                      value: "fas fa-arrow-right",
                      library: "fa-solid"
                    },
                    icon_align: "right",
                    icon_indent: {
                      unit: "px",
                      size: 8
                    },
                    background_color: "#179A9E",
                    button_text_color: "#FFFFFF",
                    background_hover_color: "#0F7B7E",
                    hover_color: "#FFFFFF",
                    border_radius: {
                      unit: "px",
                      top: "10",
                      right: "10",
                      bottom: "10",
                      left: "10",
                      isLinked: true
                    },
                    padding: {
                      unit: "px",
                      top: "13",
                      right: "18",
                      bottom: "13",
                      left: "18",
                      isLinked: false
                    },
                    typography_typography: "custom",
                    typography_font_family: "Plus Jakarta Sans",
                    typography_font_size: {
                      unit: "px",
                      size: 13.5
                    },
                    typography_font_weight: "700"
                  }
                },
                // Calculator Engine Script
                {
                  id: createId(),
                  elType: "widget",
                  widgetType: "html",
                  settings: {
                    html: `<script>
                      function updateStelleCalc(billVal, specMult, provVal) {
                        const billInput = document.getElementById('billing-range');
                        const provInput = document.getElementById('provider-range');
                        const specSelect = document.getElementById('calc-specialty-select');
                        
                        const bill = billVal ? Number(billVal) : Number(billInput.value);
                        const prov = provVal ? Number(provVal) : Number(provInput.value);
                        const mult = specMult ? Number(specMult) : Number(specSelect.value);
                        
                        document.getElementById('calc-billings-val').innerText = '$' + bill.toLocaleString() + ' / mo';
                        document.getElementById('calc-providers-val').innerText = prov + (prov === 1 ? ' Provider' : ' Providers');
                        
                        const annualRecaptured = Math.round(bill * 12 * 0.18 * mult);
                        document.getElementById('calc-annual-recaptured').innerText = '$' + annualRecaptured.toLocaleString();
                      }
                    </script>`
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

const outDir = path.join(__dirname, 'elementor-editable-templates');
fs.writeFileSync(
  path.join(outDir, 'practice-revenue-recovery-calculator-elementor.json'),
  JSON.stringify(calculatorSection, null, 2),
  'utf8'
);

fs.writeFileSync(
  path.join(outDir, 'practice-revenue-recovery-calculator-plain-text.json'),
  JSON.stringify(calculatorSection),
  'utf8'
);

console.log('Successfully generated Section 10 (ROI Calculator) with 100% Flexbox Containers!');
