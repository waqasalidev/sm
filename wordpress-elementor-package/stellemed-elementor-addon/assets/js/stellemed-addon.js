/**
 * StelleMed Elementor Addon - Core JavaScript
 * Handles real-time interactive calculations and UI toggles
 */

(function () {
  'use strict';

  function formatCurrency(num) {
    return '$' + Math.round(num).toLocaleString('en-US');
  }

  // 1. Initialize ROI Calculator
  function initRoiCalculator(scope) {
    var container = scope ? scope.querySelector('.sm-roi-card') : document.querySelector('.sm-roi-card');
    if (!container) return;

    var billingSlider = container.querySelector('.sm-roi-billing-slider');
    var billingDisplay = container.querySelector('.sm-roi-billing-display');
    var specialtySelect = container.querySelector('.sm-roi-specialty-select');
    var providerSlider = container.querySelector('.sm-roi-provider-slider');
    var providerDisplay = container.querySelector('.sm-roi-provider-display');
    var recoveredAmount = container.querySelector('.sm-roi-amount');
    var arDaysDisplay = container.querySelector('.sm-roi-ar-days');

    function updateCalculations() {
      if (!billingSlider || !recoveredAmount) return;

      var monthlyBilling = parseFloat(billingSlider.value) || 120000;
      var specialty = specialtySelect ? specialtySelect.value : 'internal-medicine';
      var providerCount = providerSlider ? parseInt(providerSlider.value, 10) : 3;

      // Update slider display labels
      if (billingDisplay) {
        billingDisplay.textContent = formatCurrency(monthlyBilling) + ' / mo';
      }
      if (providerDisplay) {
        providerDisplay.textContent = providerCount + (providerCount === 1 ? ' Provider' : ' Providers');
      }

      // Calculation logic
      var recoveryRate = (specialty === 'orthopedics' || specialty === 'surgery') ? 0.22 : 0.18;
      var annualRecaptured = monthlyBilling * 12 * recoveryRate;
      var currentArDays = 48 + Math.round(providerCount * 1.5);

      recoveredAmount.textContent = formatCurrency(annualRecaptured);

      if (arDaysDisplay) {
        arDaysDisplay.innerHTML = currentArDays + 'd &rarr; <span style="color:#38D4D8;">26 days</span>';
      }
    }

    if (billingSlider) billingSlider.addEventListener('input', updateCalculations);
    if (specialtySelect) specialtySelect.addEventListener('change', updateCalculations);
    if (providerSlider) providerSlider.addEventListener('input', updateCalculations);

    // Initial calculation run
    updateCalculations();
  }

  // 2. Initialize FAQ Accordion
  function initFaqAccordion(scope) {
    var root = scope || document;
    var faqItems = root.querySelectorAll('.sm-faq-item');
    if (!faqItems.length) return;

    faqItems.forEach(function (item) {
      var btn = item.querySelector('.sm-faq-btn');
      if (!btn) return;

      btn.addEventListener('click', function () {
        var isOpen = item.classList.contains('is-open');
        // Close siblings if desired or simply toggle
        item.classList.toggle('is-open', !isOpen);
      });
    });
  }

  // DOM Ready initialization
  document.addEventListener('DOMContentLoaded', function () {
    initRoiCalculator(document);
    initFaqAccordion(document);
  });

  // Elementor Frontend hooks (for live editor compatibility)
  if (window.elementorFrontend && window.elementorFrontend.hooks) {
    window.addEventListener('elementor/frontend/init', function () {
      window.elementorFrontend.hooks.addAction('frontend/element_ready/sm_roi_calculator.default', function ($scope) {
        initRoiCalculator($scope[0]);
      });
      window.elementorFrontend.hooks.addAction('frontend/element_ready/sm_faq.default', function ($scope) {
        initFaqAccordion($scope[0]);
      });
    });
  }
})();
