(function() {
  'use strict';

  function formatCurrency(num) {
    return '$' + Math.round(num).toLocaleString('en-US');
  }

  // 1. ROI Calculator
  function initRoi() {
    var cards = document.querySelectorAll('.sm-roi-card');
    cards.forEach(function(card) {
      var slider = card.querySelector('.sm-roi-billing-slider');
      var display = card.querySelector('.sm-roi-billing-display');
      var specialty = card.querySelector('.sm-roi-specialty-select');
      var provider = card.querySelector('.sm-roi-provider-slider');
      var provDisplay = card.querySelector('.sm-roi-provider-display');
      var amount = card.querySelector('.sm-roi-amount');
      var arDays = card.querySelector('.sm-roi-ar-days');

      function calculate() {
        if (!slider || !amount) return;
        var bill = parseFloat(slider.value) || 120000;
        var spec = specialty ? specialty.value : 'internal-medicine';
        var prov = provider ? parseInt(provider.value, 10) : 3;

        if (display) display.textContent = formatCurrency(bill) + ' / mo';
        if (provDisplay) provDisplay.textContent = prov + (prov === 1 ? ' Provider' : ' Providers');

        var rate = (spec === 'orthopedics' || spec === 'surgery') ? 0.22 : 0.18;
        var recaptured = bill * 12 * rate;
        var days = 48 + Math.round(prov * 1.5);

        amount.textContent = formatCurrency(recaptured);
        if (arDays) arDays.innerHTML = days + 'd &rarr; <span style="color:#38D4D8;">26 days</span>';
      }

      if (slider) slider.addEventListener('input', calculate);
      if (specialty) specialty.addEventListener('change', calculate);
      if (provider) provider.addEventListener('input', calculate);
      calculate();
    });
  }

  // 2. FAQ Accordion
  function initFaq() {
    var items = document.querySelectorAll('.sm-faq-item');
    items.forEach(function(item) {
      var btn = item.querySelector('.sm-faq-btn');
      if (btn) {
        btn.addEventListener('click', function() {
          item.classList.toggle('is-open');
        });
      }
    });
  }

  // 3. Modal Popup
  function initModal() {
    var modal = document.getElementById('sm-consultation-modal');
    if (!modal) return;

    var triggers = document.querySelectorAll('[data-open-modal="consultation"]');
    triggers.forEach(function(trig) {
      trig.addEventListener('click', function(e) {
        e.preventDefault();
        modal.classList.add('is-active');
      });
    });

    var closes = modal.querySelectorAll('[data-close-modal]');
    closes.forEach(function(btn) {
      btn.addEventListener('click', function() {
        modal.classList.remove('is-active');
      });
    });

    var form = modal.querySelector('form');
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you! Your consultation request has been submitted. Our billing team will contact you within 24 hours.');
        modal.classList.remove('is-active');
      });
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    initRoi();
    initFaq();
    initModal();
  });
})();