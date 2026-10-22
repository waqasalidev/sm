const fs = require('fs');
const path = require('path');

function createId() {
  return Math.random().toString(36).substring(2, 9);
}

const outDir = path.join(__dirname, 'elementor-editable-templates');

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
// STELLEMED CONSULTATION MODAL (100% Flexbox Container, 0 Sections, 0 Columns)
// Works with any button having href="#consultation" or href="#audit" or class .open-consultation
// ============================================================================

const consultationModalContainer = {
  id: createId(),
  elType: "container",
  isInner: false,
  settings: {
    content_width: "full",
    flex_direction: "column",
    padding: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: true },
    _margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: true },
    margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: true }
  },
  elements: [
    {
      id: createId(),
      elType: "widget",
      widgetType: "heading",
      settings: {
        title: `
<!-- STELLEMED CONSULTATION MODAL POPUP -->
<div id="sm-consultation-modal" class="sm-modal-backdrop" style="display:none; position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(12,35,64,0.75); backdrop-filter:blur(6px); -webkit-backdrop-filter:blur(6px); z-index:999999; align-items:center; justify-content:center; padding:16px; box-sizing:border-box;">
  
  <div class="sm-modal-box" style="position:relative; width:100%; max-width:680px; max-height:92vh; overflow-y:auto; background:#FFFFFF; border-radius:18px; box-shadow:0 25px 60px rgba(0,0,0,0.3); border:1px solid #E2E8F0; padding:32px 36px; box-sizing:border-box; font-family:'Plus Jakarta Sans',sans-serif;">
    
    <!-- Close Button -->
    <button type="button" id="sm-modal-close-btn" style="position:absolute; top:20px; right:20px; width:36px; height:36px; border-radius:50%; background:#F1F5F9; border:none; color:#64748B; font-size:18px; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all 0.2s; z-index:10;" onmouseover="this.style.background='#E2E8F0';this.style.color='#0C2340';" onmouseout="this.style.background='#F1F5F9';this.style.color='#64748B';">
      &times;
    </button>

    <!-- Modal Header -->
    <div style="margin-bottom:22px; padding-right:30px;">
      <div style="display:inline-flex; align-items:center; gap:6px; padding:4px 14px; background-color:#EAF8F8; border:1px solid #A7E8E9; border-radius:50px; color:#179A9E; font-size:11px; font-weight:800; letter-spacing:0.8px; text-transform:uppercase; margin-bottom:10px;">
        <i class="fas fa-shield-alt"></i> COMPLIMENTARY &bull; NO OBLIGATION
      </div>
      <h3 id="sm-modal-heading" style="margin:0 0 6px 0; font-size:26px; font-weight:800; color:#0C2340; line-height:1.25;">
        Book Your Free Practice Audit
      </h3>
      <p id="sm-modal-sub" style="margin:0; font-size:14px; color:#64748B; line-height:1.5;">
        Uncover hidden revenue leaks and discover how StelleMed optimizes your clinical cash flow.
      </p>
    </div>

    <!-- Modal Form -->
    <form id="sm-audit-form" onsubmit="event.preventDefault(); document.getElementById('sm-form-fields').style.display='none'; document.getElementById('sm-form-success').style.display='block';">
      <div id="sm-form-fields">
        <!-- Row 1: Name & Role -->
        <div style="display:flex; flex-wrap:wrap; gap:16px; margin-bottom:14px;">
          <div style="flex:1; min-width:260px;">
            <label style="display:block; font-size:12.5px; font-weight:700; color:#334155; margin-bottom:5px;">Full Name *</label>
            <input type="text" required placeholder="e.g. Dr. Sarah Jenkins" style="width:100%; padding:10px 14px; font-size:14px; border:1.5px solid #CBD5E1; border-radius:8px; outline:none; box-sizing:border-box; font-family:inherit; transition:border 0.2s;" onfocus="this.style.borderColor='#179A9E';" onblur="this.style.borderColor='#CBD5E1';">
          </div>
          <div style="flex:1; min-width:260px;">
            <label style="display:block; font-size:12.5px; font-weight:700; color:#334155; margin-bottom:5px;">Your Role</label>
            <select style="width:100%; padding:10px 14px; font-size:14px; border:1.5px solid #CBD5E1; border-radius:8px; outline:none; box-sizing:border-box; font-family:inherit; background:#FFFFFF; transition:border 0.2s;" onfocus="this.style.borderColor='#179A9E';" onblur="this.style.borderColor='#CBD5E1';">
              <option>Practice Administrator</option>
              <option>Physician / Practice Owner</option>
              <option>Office Manager</option>
              <option>Billing / RCM Director</option>
              <option>Clinical Executive</option>
            </select>
          </div>
        </div>

        <!-- Row 2: Practice Name & Email -->
        <div style="display:flex; flex-wrap:wrap; gap:16px; margin-bottom:14px;">
          <div style="flex:1; min-width:260px;">
            <label style="display:block; font-size:12.5px; font-weight:700; color:#334155; margin-bottom:5px;">Practice / Clinic Name *</label>
            <input type="text" required placeholder="e.g. Metro Health Partners" style="width:100%; padding:10px 14px; font-size:14px; border:1.5px solid #CBD5E1; border-radius:8px; outline:none; box-sizing:border-box; font-family:inherit; transition:border 0.2s;" onfocus="this.style.borderColor='#179A9E';" onblur="this.style.borderColor='#CBD5E1';">
          </div>
          <div style="flex:1; min-width:260px;">
            <label style="display:block; font-size:12.5px; font-weight:700; color:#334155; margin-bottom:5px;">Work Email *</label>
            <input type="email" required placeholder="doctor@practice.com" style="width:100%; padding:10px 14px; font-size:14px; border:1.5px solid #CBD5E1; border-radius:8px; outline:none; box-sizing:border-box; font-family:inherit; transition:border 0.2s;" onfocus="this.style.borderColor='#179A9E';" onblur="this.style.borderColor='#CBD5E1';">
          </div>
        </div>

        <!-- Row 3: Phone & Specialty -->
        <div style="display:flex; flex-wrap:wrap; gap:16px; margin-bottom:14px;">
          <div style="flex:1; min-width:260px;">
            <label style="display:block; font-size:12.5px; font-weight:700; color:#334155; margin-bottom:5px;">Direct Phone *</label>
            <input type="tel" required placeholder="(555) 000-0000" style="width:100%; padding:10px 14px; font-size:14px; border:1.5px solid #CBD5E1; border-radius:8px; outline:none; box-sizing:border-box; font-family:inherit; transition:border 0.2s;" onfocus="this.style.borderColor='#179A9E';" onblur="this.style.borderColor='#CBD5E1';">
          </div>
          <div style="flex:1; min-width:260px;">
            <label style="display:block; font-size:12.5px; font-weight:700; color:#334155; margin-bottom:5px;">Clinical Specialty</label>
            <select style="width:100%; padding:10px 14px; font-size:14px; border:1.5px solid #CBD5E1; border-radius:8px; outline:none; box-sizing:border-box; font-family:inherit; background:#FFFFFF; transition:border 0.2s;" onfocus="this.style.borderColor='#179A9E';" onblur="this.style.borderColor='#CBD5E1';">
              <option>Internal &amp; Family Medicine</option>
              <option>Cardiology &amp; Vascular</option>
              <option>Orthopedics &amp; Sports Medicine</option>
              <option>Pediatrics &amp; Adolescent Care</option>
              <option>General &amp; Ambulatory Surgery</option>
              <option>Mental &amp; Behavioral Health</option>
              <option>Urgent Care Centers</option>
              <option>Physical &amp; Occupational Therapy</option>
              <option>Other Medical Specialty</option>
            </select>
          </div>
        </div>

        <!-- Row 4: Monthly Volume & Preferred Date -->
        <div style="display:flex; flex-wrap:wrap; gap:16px; margin-bottom:14px;">
          <div style="flex:1; min-width:260px;">
            <label style="display:block; font-size:12.5px; font-weight:700; color:#334155; margin-bottom:5px;">Monthly Billing Volume</label>
            <select style="width:100%; padding:10px 14px; font-size:14px; border:1.5px solid #CBD5E1; border-radius:8px; outline:none; box-sizing:border-box; font-family:inherit; background:#FFFFFF; transition:border 0.2s;" onfocus="this.style.borderColor='#179A9E';" onblur="this.style.borderColor='#CBD5E1';">
              <option>&lt; $50,000 / month</option>
              <option>$50,000 - $100,000 / month</option>
              <option selected>$100,000 - $250,000 / month</option>
              <option>$250,000 - $500,000 / month</option>
              <option>$500,000+ / month</option>
            </select>
          </div>
          <div style="flex:1; min-width:260px;">
            <label style="display:block; font-size:12.5px; font-weight:700; color:#334155; margin-bottom:5px;">Preferred Consultation Date</label>
            <input type="date" style="width:100%; padding:10px 14px; font-size:14px; border:1.5px solid #CBD5E1; border-radius:8px; outline:none; box-sizing:border-box; font-family:inherit; background:#FFFFFF; transition:border 0.2s;" onfocus="this.style.borderColor='#179A9E';" onblur="this.style.borderColor='#CBD5E1';">
          </div>
        </div>

        <!-- Row 5: Notes -->
        <div style="margin-bottom:18px;">
          <label style="display:block; font-size:12.5px; font-weight:700; color:#334155; margin-bottom:5px;">Primary Billing Challenge / Notes</label>
          <textarea rows="2" placeholder="e.g. High denial rate on commercial claims, switching EHR, or legacy A/R recovery..." style="width:100%; padding:10px 14px; font-size:13.5px; border:1.5px solid #CBD5E1; border-radius:8px; outline:none; box-sizing:border-box; font-family:inherit; resize:vertical; transition:border 0.2s;" onfocus="this.style.borderColor='#179A9E';" onblur="this.style.borderColor='#CBD5E1';"></textarea>
        </div>

        <!-- Submit Button -->
        <button type="submit" style="width:100%; padding:14px 24px; background:#179A9E; color:#FFFFFF; border:none; border-radius:10px; font-size:15px; font-weight:700; font-family:inherit; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:8px; transition:background 0.2s;" onmouseover="this.style.background='#0F7B7E';" onmouseout="this.style.background='#179A9E';">
          <span>Request Confidential Practice Audit</span>
          <i class="fas fa-arrow-right"></i>
        </button>

        <!-- Trust Note -->
        <div style="display:flex; align-items:center; justify-content:center; gap:6px; margin-top:12px; font-size:11.5px; color:#94A3B8;">
          <i class="fas fa-lock" style="color:#179A9E;"></i>
          <span>256-Bit HIPAA Compliant SSL &bull; Strict Non-Disclosure Guaranteed</span>
        </div>
      </div>

      <!-- Success Confirmation (Shown upon submission) -->
      <div id="sm-form-success" style="display:none; text-align:center; padding:20px 10px;">
        <div style="width:60px; height:60px; border-radius:50%; background:#ECFDF5; color:#10B981; display:flex; align-items:center; justify-content:center; margin:0 auto 16px; font-size:30px;">
          <i class="fas fa-check-circle"></i>
        </div>
        <h4 style="margin:0 0 8px 0; font-size:22px; font-weight:800; color:#0C2340;">
          Audit Request Received!
        </h4>
        <p style="margin:0 0 20px 0; font-size:14px; color:#64748B; line-height:1.6;">
          Thank you for trusting StelleMed. A senior billing director will evaluate your specialty fee schedules and contact you within 24 business hours.
        </p>
        <button type="button" onclick="document.getElementById('sm-consultation-modal').style.display='none'; document.body.style.overflow='';" style="padding:10px 24px; background:#0C2340; color:#FFFFFF; border:none; border-radius:8px; font-size:14px; font-weight:700; cursor:pointer;">
          Close &amp; Return to Website
        </button>
      </div>
    </form>
  </div>
</div>

<!-- AUTO-BINDING SCRIPT: ANY BUTTON WITH #consultation, #audit, or .open-consultation OPENS THIS MODAL! -->
<script>
  (function() {
    function initSmModal() {
      var modal = document.getElementById('sm-consultation-modal');
      var closeBtn = document.getElementById('sm-modal-close-btn');

      function openModal(e) {
        if (e && e.preventDefault) e.preventDefault();
        if (modal) {
          modal.style.display = 'flex';
          document.body.style.overflow = 'hidden';
        }
      }

      function closeModal() {
        if (modal) {
          modal.style.display = 'none';
          document.body.style.overflow = '';
        }
      }

      // Robust Event Delegation: Catch clicks anywhere on the page (even dynamic/AJAX or nested icons)
      document.addEventListener('click', function(e) {
        var trigger = e.target.closest('a[href*="#consultation"], a[href*="#audit"], .open-consultation, [data-open="consultation"]');
        if (trigger) {
          e.preventDefault();
          openModal();
        }
      });

      if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
      }

      if (modal) {
        modal.addEventListener('click', function(e) {
          if (e.target === modal) {
            closeModal();
          }
        });
      }

      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.style.display === 'flex') {
          closeModal();
        }
      });
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initSmModal);
    } else {
      initSmModal();
    }
  })();
</script>
        `,
        header_size: "div",
        _margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: true },
        margin: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: true }
      }
    }
  ]
};

saveTemplate(
  'consultation-modal-elementor',
  consultationModalContainer,
  "StelleMed - Universal Practice Audit Consultation Modal (100% Flexbox Container)"
);

console.log("\nConsultation modal template successfully created!");
