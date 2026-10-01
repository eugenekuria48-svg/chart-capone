# Chart Capone — Premium Trading Education Website

Production-ready static website for Chart Capone (Trade · Learn · Grow).

## Structure

- `index.html` — Homepage
- `pages/` — About, Education, Services, VIP, Market Insights, Live Examples, Mentorship, Account Management, Contact, FAQ, Risk Disclosure, Privacy, Terms
- `css/styles.css` — Design system (black / metallic gold / silver)
- `js/main.js` — Navbar, mobile menu, FAQ accordion, form handlers
- `images/` — Logo and reference imagery from brand assets

## Brand

- Colors: #050505, #0A0A0A, #111111, #C9A227, #E7C45A, #F4F4F4
- Typography: Playfair Display (headings) + Inter (body)
- Logo: official Chart Capone mark (do not replace)

## How to run

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Next steps for production

1. Replace placeholder contact details
2. Connect forms to backend / email
3. Connect payment (Stripe etc.) for $100 signals / $150 mentorship
4. Add real market insights CMS
5. Implement auth + member dashboard + trading journal when ready
6. Legal review of Risk / Terms / Privacy for jurisdiction
7. Optimize images (WebP) and add OG images

## Design principles applied

- Premium financial aesthetic (not generic SaaS)
- No fake testimonials or performance claims
- Educational examples clearly labeled
- Strong risk disclaimers
- Fully responsive (desktop → mobile)
- Sticky nav with gold accents
- Consistent design system across all pages
