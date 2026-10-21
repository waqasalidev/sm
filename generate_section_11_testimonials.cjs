const fs = require('fs');
const path = require('path');

function createId() {
  return Math.random().toString(36).substring(2, 9);
}

const testimonialsData = [
  {
    quote: "Having one dedicated account manager instead of an impersonal support queue changed everything for our practice. They actually know our providers, understand our specialty, and turn claims around in days.",
    metric: "REDUCED A/R DAYS FROM 54 TO 26 DAYS",
    name: "Maria Lopez",
    title: "Practice Administrator • Summit Regional Medical Group",
    specialty: "Multi-Specialty Care",
    avatar: "https://raw.githubusercontent.com/waqasalidev/sm/main/src/assets/stellemed-physician.png"
  },
  {
    quote: "Patient billing used to consume hours of our front-desk staff's time every single day. With StelleMed and StelleCloud handling patient statements and digital collections, our staff can focus 100% on patients in the waiting room.",
    metric: "CLEAN CLAIM RATE STEADY AT 98.6%",
    name: "Dr. Sarah Bennett, MD",
    title: "Medical Director • Coastal Orthopedic & Spine Center",
    specialty: "Orthopedic Surgery",
    avatar: "https://raw.githubusercontent.com/waqasalidev/sm/main/src/assets/stellemed-physician.png"
  },
  {
    quote: "We used to spend hours every week on hold with commercial payers fighting over trivial modifier rejections. Our StelleMed account specialist tackles appeals aggressively and recovers funds we had written off.",
    metric: "99% PAYER CONTRACT COMPLIANCE",
    name: "Lisa Alvarez",
    title: "Billing Coordinator • Harborview Cardiology Associates",
    specialty: "Cardiology",
    avatar: "https://raw.githubusercontent.com/waqasalidev/sm/main/src/assets/stellemed-physician.png"
  },
  {
    quote: "The monthly reports finally gave our executive team a transparent, clear picture of where our revenue was going — and where denials were getting stuck. StelleMed cleaned up our aging A/R in under 60 days.",
    metric: "+22% INCREASE IN MONTHLY COLLECTIONS",
    name: "David Chen, MHA",
    title: "Chief Operating Officer • Apex Family Medicine Network",
    specialty: "Primary Care & Pediatrics",
    avatar: "https://raw.githubusercontent.com/waqasalidev/sm/main/src/assets/stellemed-physician.png"
  }
];

// Interactive Testimonial Carousel inside Flexbox Container
const testimonialsSection = {
  version: "0.4",
  title: "Trusted by Healthcare Providers Nationwide - Client Reviews (100% Flexbox Container)",
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
        background_color: "#F8FBFC",
        padding: {
          unit: "px",
          top: "80",
          right: "20",
          bottom: "80",
          left: "20",
          isLinked: false
        },
        padding_tablet: {
          unit: "px",
          top: "60",
          right: "20",
          bottom: "60",
          left: "20",
          isLinked: false
        },
        padding_mobile: {
          unit: "px",
          top: "40",
          right: "16",
          bottom: "40",
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
              bottom: "48",
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
                title: `<span style="display:inline-flex;align-items:center;gap:6px;padding:6px 16px;background-color:#EAF8F8;border:1px solid #A7E8E9;border-radius:50px;color:#179A9E;font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;"><i class=\"fas fa-heart\"></i> HEALTHCARE PROVIDER FEEDBACK</span>`,
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
                title: "Trusted by Healthcare <span style=\"color:#179A9E;\">Providers Nationwide</span>",
                header_size: "h2",
                align: "center",
                title_color: "#0C2340",
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
                editor: "<p style=\"margin:0;font-size:16px;color:#4A5568;line-height:1.6;text-align:center;\">Discover how independent practices, medical groups, and clinics across the United States partner with StelleMed to conquer billing complexity.</p>",
                typography_typography: "custom",
                typography_font_family: "Plus Jakarta Sans",
                typography_font_size: {
                  unit: "px",
                  size: 16
                },
                typography_font_weight: "400",
                text_color: "#4A5568"
              }
            }
          ]
        },
        // Testimonials Card Container
        {
          id: createId(),
          elType: "container",
          isInner: true,
          settings: {
            content_width: "full",
            width: {
              unit: "px",
              size: 840,
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
            background_background: "classic",
            background_color: "#FFFFFF",
            border_border: "solid",
            border_width: {
              unit: "px",
              top: "1",
              right: "1",
              bottom: "1",
              left: "1",
              isLinked: true
            },
            border_color: "#E2E8F0",
            border_radius: {
              unit: "px",
              top: "20",
              right: "20",
              bottom: "20",
              left: "20",
              isLinked: true
            },
            box_shadow_box_shadow_type: "yes",
            box_shadow_box_shadow: {
              horizontal: 0,
              vertical: 12,
              blur: 35,
              spread: -5,
              color: "rgba(12, 35, 64, 0.06)"
            },
            padding: {
              unit: "px",
              top: "36",
              right: "40",
              bottom: "36",
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
            },
            margin: {
              unit: "px",
              top: "0",
              right: "auto",
              bottom: "30",
              left: "auto",
              isLinked: false
            }
          },
          elements: [
            // Top Row: 5 Gold Stars + Metric Pill
            {
              id: createId(),
              elType: "container",
              isInner: true,
              settings: {
                content_width: "full",
                flex_direction: "row",
                flex_justify_content: "space-between",
                flex_align_items: "center",
                margin: {
                  unit: "px",
                  top: "0",
                  right: "0",
                  bottom: "20",
                  left: "0",
                  isLinked: false
                }
              },
              elements: [
                // Stars
                {
                  id: createId(),
                  elType: "widget",
                  widgetType: "heading",
                  settings: {
                    title: "<span style=\"color:#F59E0B;font-size:18px;letter-spacing:3px;\">★★★★★</span>",
                    header_size: "span"
                  }
                },
                // Metric Tag
                {
                  id: createId(),
                  elType: "widget",
                  widgetType: "heading",
                  settings: {
                    title: `<span id=\"testi-metric\" style=\"display:inline-block;padding:5px 12px;background-color:#EAF8F8;color:#179A9E;border-radius:50px;font-size:11px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;\">${testimonialsData[0].metric}</span>`,
                    header_size: "span",
                    align: "right"
                  }
                }
              ]
            },
            // Quote Text
            {
              id: createId(),
              elType: "widget",
              widgetType: "heading",
              settings: {
                title: `<p id=\"testi-quote\" style=\"margin:0;font-style:italic;color:#0C2340;font-size:17px;line-height:1.65;font-weight:600;\">“${testimonialsData[0].quote}”</p>`,
                header_size: "div",
                typography_typography: "custom",
                typography_font_family: "Plus Jakarta Sans",
                margin: {
                  unit: "px",
                  top: "0",
                  right: "0",
                  bottom: "24",
                  left: "0",
                  isLinked: false
                }
              }
            },
            // Divider Line
            {
              id: createId(),
              elType: "widget",
              widgetType: "divider",
              settings: {
                color: "#E2E8F0",
                width: {
                  unit: "%",
                  size: 100
                },
                gap: {
                  unit: "px",
                  size: 1
                },
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
            // Author Row
            {
              id: createId(),
              elType: "container",
              isInner: true,
              settings: {
                content_width: "full",
                flex_direction: "row",
                flex_align_items: "center",
                flex_gap: {
                  unit: "px",
                  size: 14,
                  column: "14",
                  row: "14"
                }
              },
              elements: [
                // Avatar image
                {
                  id: createId(),
                  elType: "container",
                  isInner: true,
                  settings: {
                    content_width: "full",
                    width: {
                      unit: "px",
                      size: 48,
                      sizes: []
                    },
                    min_height: {
                      unit: "px",
                      size: 48
                    },
                    border_radius: {
                      unit: "px",
                      top: "50",
                      right: "50",
                      bottom: "50",
                      left: "50",
                      isLinked: true
                    },
                    overflow: "hidden"
                  },
                  elements: [
                    {
                      id: createId(),
                      elType: "widget",
                      widgetType: "image",
                      settings: {
                        image: {
                          url: testimonialsData[0].avatar
                        },
                        image_size: "thumbnail"
                      }
                    }
                  ]
                },
                // Author info
                {
                  id: createId(),
                  elType: "container",
                  isInner: true,
                  settings: {
                    content_width: "full",
                    flex_direction: "column",
                    flex_align_items: "flex-start",
                    flex_gap: {
                      unit: "px",
                      size: 2,
                      column: "2",
                      row: "2"
                    }
                  },
                  elements: [
                    {
                      id: createId(),
                      elType: "widget",
                      widgetType: "heading",
                      settings: {
                        title: `<span id=\"testi-name\">${testimonialsData[0].name}</span>`,
                        header_size: "h4",
                        title_color: "#0C2340",
                        typography_typography: "custom",
                        typography_font_family: "Plus Jakarta Sans",
                        typography_font_size: {
                          unit: "px",
                          size: 15
                        },
                        typography_font_weight: "700"
                      }
                    },
                    {
                      id: createId(),
                      elType: "widget",
                      widgetType: "heading",
                      settings: {
                        title: `<span id=\"testi-title\">${testimonialsData[0].title}</span>`,
                        header_size: "span",
                        title_color: "#179A9E",
                        typography_typography: "custom",
                        typography_font_family: "Plus Jakarta Sans",
                        typography_font_size: {
                          unit: "px",
                          size: 12.5
                        },
                        typography_font_weight: "600"
                      }
                    },
                    {
                      id: createId(),
                      elType: "widget",
                      widgetType: "heading",
                      settings: {
                        title: `<span id=\"testi-specialty\">${testimonialsData[0].specialty}</span>`,
                        header_size: "span",
                        title_color: "#64748B",
                        typography_typography: "custom",
                        typography_font_family: "Plus Jakarta Sans",
                        typography_font_size: {
                          unit: "px",
                          size: 12
                        },
                        typography_font_weight: "400"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        // Navigation Buttons (< ••• >)
        {
          id: createId(),
          elType: "widget",
          widgetType: "html",
          settings: {
            html: `<div style="display:flex;align-items:center;justify-content:center;gap:14px;margin-bottom:16px;">
              <button onclick="prevTestimonial()" aria-label="Previous" style="width:36px;height:36px;border-radius:50%;border:1px solid #CBD5E1;background:#FFFFFF;color:#0C2340;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;font-size:14px;transition:all 0.2s;">&#10094;</button>
              <div id="testi-dots" style="display:flex;align-items:center;gap:6px;">
                <span style="width:20px;height:7px;border-radius:4px;background:#179A9E;cursor:pointer;" onclick="setTestimonial(0)"></span>
                <span style="width:7px;height:7px;border-radius:50%;background:#CBD5E1;cursor:pointer;" onclick="setTestimonial(1)"></span>
                <span style="width:7px;height:7px;border-radius:50%;background:#CBD5E1;cursor:pointer;" onclick="setTestimonial(2)"></span>
                <span style="width:7px;height:7px;border-radius:50%;background:#CBD5E1;cursor:pointer;" onclick="setTestimonial(3)"></span>
              </div>
              <button onclick="nextTestimonial()" aria-label="Next" style="width:36px;height:36px;border-radius:50%;border:1px solid #CBD5E1;background:#FFFFFF;color:#0C2340;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;font-size:14px;transition:all 0.2s;">&#10095;</button>
            </div>
            <script>
              const testiData = ${JSON.stringify(testimonialsData)};
              let currentTestiIdx = 0;
              function updateTestiUI() {
                const item = testiData[currentTestiIdx];
                document.getElementById('testi-metric').innerText = item.metric;
                document.getElementById('testi-quote').innerText = '“' + item.quote + '”';
                document.getElementById('testi-name').innerText = item.name;
                document.getElementById('testi-title').innerText = item.title;
                document.getElementById('testi-specialty').innerText = item.specialty;
                const dots = document.getElementById('testi-dots').children;
                for (let i = 0; i < dots.length; i++) {
                  if (i === currentTestiIdx) {
                    dots[i].style.width = '20px';
                    dots[i].style.borderRadius = '4px';
                    dots[i].style.background = '#179A9E';
                  } else {
                    dots[i].style.width = '7px';
                    dots[i].style.borderRadius = '50%';
                    dots[i].style.background = '#CBD5E1';
                  }
                }
              }
              function prevTestimonial() {
                currentTestiIdx = (currentTestiIdx - 1 + testiData.length) % testiData.length;
                updateTestiUI();
              }
              function nextTestimonial() {
                currentTestiIdx = (currentTestiIdx + 1) % testiData.length;
                updateTestiUI();
              }
              function setTestimonial(idx) {
                currentTestiIdx = idx;
                updateTestiUI();
              }
            </script>`
          }
        },
        // Subtext below
        {
          id: createId(),
          elType: "widget",
          widgetType: "heading",
          settings: {
            title: "<i class=\"fas fa-info-circle\"></i> Illustrative client case scenarios representing common healthcare provider workflows and results.",
            header_size: "span",
            align: "center",
            title_color: "#94A3B8",
            typography_typography: "custom",
            typography_font_family: "Plus Jakarta Sans",
            typography_font_size: {
              unit: "px",
              size: 11.5
            },
            typography_font_weight: "400"
          }
        }
      ]
    }
  ]
};

const outDir = path.join(__dirname, 'elementor-editable-templates');
fs.writeFileSync(
  path.join(outDir, 'trusted-by-healthcare-providers-elementor.json'),
  JSON.stringify(testimonialsSection, null, 2),
  'utf8'
);

fs.writeFileSync(
  path.join(outDir, 'trusted-by-healthcare-providers-plain-text.json'),
  JSON.stringify(testimonialsSection),
  'utf8'
);

console.log('Successfully generated Section 11 (Testimonials Slider) with 100% Flexbox Containers!');
