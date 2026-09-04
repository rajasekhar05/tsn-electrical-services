// Shared footer — injected so every page stays in sync
document.addEventListener('DOMContentLoaded', function () {
  var mount = document.getElementById('site-footer');
  if (!mount) return;

  mount.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <strong style="font-family:var(--font-display);text-transform:uppercase;color:#fff;letter-spacing:.03em;font-size:1.05rem;">TSN Electrical &amp; Service</strong>
          <p style="margin-top:12px;">Supplier and service support partner for mechanical, electrical, industrial tools and maintenance consumables.</p>
        </div>
        <div>
          <h4>Navigate</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="products.html">Products</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4>Supply Lines</h4>
          <ul>
            <li><a href="products.html#mechanical">Mechanical Items</a></li>
            <li><a href="products.html#electrical">Electrical Items</a></li>
            <li><a href="products.html#cromwell">Cromwell Products</a></li>
            <li><a href="products.html#stanley">Stanley Tools</a></li>
          </ul>
        </div>
        <div>
          <h4>Reach Us</h4>
          <ul>
            <li><a href="tel:+919538818140">+91 95388 18140</a></li>
            <li><a href="tel:+919968620580">+91 99686 20580</a></li>
            <li><a href="mailto:tharaktsnespvtltd@gmail.com">tharaktsnespvtltd@gmail.com</a></li>
            <li><span>Bellary, Karnataka</span></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; <span id="year"></span> TSN Electrical and Service Private Limited. All rights reserved.</span>
        <span>DNo 192/42, Ward No 35, 1st Cross, Rama Nagar, Bellary Cantonment, Bellary, Bellary- 583104, Karnataka</span>
      </div>
    </div>
  `;

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
