// ══════════════════════════════════════════════════════════
// SECTIONS DATA
// ══════════════════════════════════════════════════════════
const SECTIONS = [
  {
    id: 'brand', label: 'Brand & Identity', color: '#E3A728',
    pages: [
      { id: 'brand-kit', title: 'Brand Kit', dept: 'All Departments', owner: 'Ashley Hines',
        content: '<h2>Brand Overview</h2><p>Impact Home Team is a Maryland-based wholesale real estate investment company. Our brand communicates trust, professionalism, and speed \u2014 built for homeowners who need solutions, not complications. Every piece of communication your team produces should reflect this identity.</p><div class="callout amber"><div class="callout-icon">\u2605</div><div class="callout-body"><strong>Brand Mission Statement</strong>Helping Maryland homeowners solve problems with speed, respect, and transparency \u2014 while creating opportunity for investors to grow their portfolios.</div></div><h2>Color Palette</h2><p>Our palette is built around Amber and Crimson \u2014 warm, authoritative, and distinctive. Use these values precisely for print, digital, and presentations.</p><div class="swatch-row"><div class="swatch"><div class="swatch-color" style="background:#E3A728;"></div><div class="swatch-info"><div class="swatch-name">Impact Amber</div><div class="swatch-hex">#E3A728</div><div class="swatch-role">Primary \u00b7 CTAs \u00b7 Accents</div></div></div><div class="swatch"><div class="swatch-color" style="background:#C48E1F;"></div><div class="swatch-info"><div class="swatch-name">Amber Dark</div><div class="swatch-hex">#C48E1F</div><div class="swatch-role">Hover states \u00b7 Body links</div></div></div><div class="swatch"><div class="swatch-color" style="background:#FEF7E0;"></div><div class="swatch-info"><div class="swatch-name">Amber Pale</div><div class="swatch-hex">#FEF7E0</div><div class="swatch-role">Backgrounds \u00b7 Callouts</div></div></div><div class="swatch"><div class="swatch-color" style="background:#A52325;"></div><div class="swatch-info"><div class="swatch-name">Impact Crimson</div><div class="swatch-hex">#A52325</div><div class="swatch-role">Secondary accent \u00b7 Urgency</div></div></div><div class="swatch"><div class="swatch-color" style="background:#1A1A1A;"></div><div class="swatch-info"><div class="swatch-name">Charcoal Ink</div><div class="swatch-hex">#1A1A1A</div><div class="swatch-role">Headers \u00b7 Backgrounds</div></div></div><div class="swatch"><div class="swatch-color" style="background:#F5F4F1;"></div><div class="swatch-info"><div class="swatch-name">Cloud</div><div class="swatch-hex">#F5F4F1</div><div class="swatch-role">Page backgrounds</div></div></div></div><h2>Typography</h2><p>We use two typefaces. Always pull from Google Fonts when building digital assets.</p><div class="font-spec"><div class="display" style="font-family:\'DM Serif Display\',serif;">DM Serif Display</div><div class="meta">font-family: \'DM Serif Display\', Georgia, serif</div><div class="alphabet" style="font-family:\'DM Serif Display\',serif;">Aa Bb Cc \u2014 Headlines, Section Titles, Hero Text</div></div><div class="font-spec"><div class="display" style="font-family:\'DM Sans\',sans-serif;font-weight:400;">DM Sans</div><div class="meta">font-family: \'DM Sans\', system-ui, sans-serif \u00b7 Weights: 300, 400, 500, 600, 700</div><div class="alphabet" style="font-family:\'DM Sans\',sans-serif;">Aa Bb Cc \u2014 Body copy, labels, UI elements, all prose</div></div><h2>Logo Usage</h2><p>The Impact Home Team logo uses the lettermark \u201cI\u201d in our amber/gold color. Below are the approved usage contexts:</p><div class="logo-grid"><div class="logo-box"><div class="logo-preview" style="background:#1A1A1A;"><div class="logo-mark-lg" style="background:#E3A728;">I</div></div><div class="logo-label">\u2713 Dark background (primary use)</div></div><div class="logo-box"><div class="logo-preview" style="background:#fff;"><div class="logo-mark-lg" style="background:#1A1A1A;">I</div></div><div class="logo-label">\u2713 White/light background (reversed)</div></div><div class="logo-box"><div class="logo-preview" style="background:#E3A728;"><div class="logo-mark-lg" style="background:#1A1A1A;">I</div></div><div class="logo-label">\u2713 Amber background (event materials)</div></div><div class="logo-box"><div class="logo-preview" style="background:linear-gradient(135deg,#667eea,#764ba2);"><div style="font-size:32px;">\u2717</div></div><div class="logo-label">\u2717 Never on non-brand backgrounds</div></div></div><div class="callout blue"><div class="callout-icon">\u2139</div><div class="callout-body"><strong>Logo files</strong>All logo files (SVG, PNG, variations) are stored in the <a href="#">Brand Assets Google Drive folder</a>. Never recreate the logo from scratch \u2014 always pull from that folder.</div></div><h2>Voice &amp; Tone</h2><table class="data-table"><tr><th>We Are</th><th>We Are Not</th></tr><tr><td><strong>Direct</strong> \u2014 Get to the point. Sellers are stressed; don\'t waste their time.</td><td><strong>Pushy</strong> \u2014 No high-pressure tactics.</td></tr><tr><td><strong>Empathetic</strong> \u2014 Acknowledge their situation before presenting solutions.</td><td><strong>Transactional</strong> \u2014 Every interaction should feel human.</td></tr><tr><td><strong>Confident</strong> \u2014 We know our numbers and stand behind them.</td><td><strong>Arrogant</strong> \u2014 Humility closes more deals.</td></tr><tr><td><strong>Professional</strong> \u2014 Proper grammar, clean materials, on-brand everything.</td><td><strong>Corporate/Cold</strong> \u2014 We\'re a family business.</td></tr></table><h2>Brand Application Checklist</h2><p>Before sending any document, email, or presentation to an external party:</p><ul><li>\u2713 Uses Amber (#E3A728) and/or Crimson (#A52325) \u2014 not random colors</li><li>\u2713 DM Serif Display for headings, DM Sans for body</li><li>\u2713 Company name is always \u201cImpact Home Team\u201d \u2014 never shortened to \u201cIHT\u201d externally</li><li>\u2713 Contact info is current (sellyourmdhousenow.com)</li><li>\u2713 No clip art, generic stock photos, or off-brand fonts</li></ul>'
      },
      { id: 'credibility-packet', title: 'Credibility Packet', dept: 'Acquisitions', owner: 'Ashley Hines',
        content: '<h2>What Is the Credibility Packet?</h2><p>The credibility packet is a leave-behind document given to sellers after an in-person or virtual appointment. Its purpose is to answer remaining doubts, reinforce trust, and motivate the seller to sign \u2014 even if they didn\'t commit at the meeting.</p><div class="callout amber"><div class="callout-icon">\ud83c\udfaf</div><div class="callout-body"><strong>Primary Goal</strong>Move the seller from \u201cI need to think about it\u201d to \u201cI\'m ready to sign.\u201d Every section of this packet is designed to handle a specific objection.</div></div><h2>When to Use It</h2><ul><li>Leave a printed or digital copy at every in-person appointment</li><li>Send the PDF link via text/email within 1 hour after a virtual appointment</li><li>Reference specific sections when following up \u2014 \u201cYou\'ll see on page 2 why our timeline is flexible...\u201d</li></ul><h2>Packet Structure</h2><ol class="step-list"><li><div class="step-num">1</div><div class="step-content"><strong>Cover / Introduction</strong>Company name, tagline, and a human opening that acknowledges the seller\'s situation.</div></li><li><div class="step-num">2</div><div class="step-content"><strong>Who We Are</strong>8+ years of experience, family-owned, Maryland-focused. Photo of the team when possible.</div></li><li><div class="step-num">3</div><div class="step-content"><strong>How Our Process Works (3 Steps)</strong>Step 1: We make an offer. Step 2: You decide. Step 3: We close on your timeline. No repairs, no agents, no fees.</div></li><li><div class="step-num">4</div><div class="step-content"><strong>IHT vs. Traditional Sale Comparison</strong>Side-by-side table: repairs, commissions, timeline, certainty of close, closing costs. This is the highest-converting section.</div></li><li><div class="step-num">5</div><div class="step-content"><strong>What Sellers Say (Testimonials)</strong>2\u20133 real or representative testimonials. Focus on relief, speed, and professionalism.</div></li><li><div class="step-num">6</div><div class="step-content"><strong>Proof of Funds</strong>Current Kiavi or funding partner letter. Must be dated within the past 12 months.</div></li><li><div class="step-num">7</div><div class="step-content"><strong>Why Act Now</strong>Address the \u201cI need to think about it\u201d hesitation directly.</div></li><li><div class="step-num">8</div><div class="step-content"><strong>FAQ / Objection Handling</strong>Reframed as questions sellers actually ask.</div></li><li><div class="step-num">9</div><div class="step-content"><strong>Next Steps / CTA</strong>Clear call to action: \u201cSign today and we handle everything from here.\u201d</div></li></ol><h2>IHT vs. Traditional Sale</h2><table class="compare-table"><tr><th></th><th>Impact Home Team</th><th>Traditional Listing</th></tr><tr><td>Repairs Required</td><td class="check">\u2713 None \u2014 as-is</td><td class="cross">\u2717 Often $10K\u2013$40K+</td></tr><tr><td>Agent Commission</td><td class="check">\u2713 $0</td><td class="cross">\u2717 5\u20136% of sale price</td></tr><tr><td>Closing Costs</td><td class="check">\u2713 We cover them</td><td class="cross">\u2717 Seller pays 2\u20133%</td></tr><tr><td>Time to Close</td><td class="check">\u2713 2\u20134 weeks</td><td class="cross">\u2717 60\u201390+ days</td></tr><tr><td>Showings</td><td class="check">\u2713 None</td><td class="cross">\u2717 Multiple</td></tr><tr><td>Deal Falls Through Risk</td><td class="check">\u2713 Rare \u2014 cash buyers</td><td class="cross">\u2717 ~30% fall out</td></tr><tr><td>Flexibility on Closing Date</td><td class="check">\u2713 You set the date</td><td class="cross">\u2717 Buyer controls</td></tr></table><h2>Top Objections &amp; How to Handle Them</h2><div class="callout dark"><div class="callout-icon">\ud83d\udcac</div><div class="callout-body"><strong>\u201cI need to think about it.\u201d</strong>\u201cTotally understand \u2014 this is a big decision. What would need to be true for you to feel comfortable moving forward?\u201d</div></div><div class="callout dark"><div class="callout-icon">\ud83d\udcac</div><div class="callout-body"><strong>\u201cI think I can get more on the market.\u201d</strong>\u201cYou might be right \u2014 after repairs, commissions, and closing costs, what would you net? Let\'s do the math together.\u201d</div></div><div class="callout dark"><div class="callout-icon">\ud83d\udcac</div><div class="callout-body"><strong>\u201cI\'m going to call a few more buyers.\u201d</strong>\u201cAbsolutely \u2014 shop around, that\'s smart. Our offer is good for 48 hours.\u201d</div></div>'
      }
    ]
  },
  {
    id: 'lead-mgmt', label: 'Lead Management', color: '#2563EB',
    pages: [
      { id: 'lm-overview', title: 'Department Overview', dept: 'Lead Management', owner: 'Nicole',
        content: '<h2>Department Purpose</h2><p>Lead Management is the top of the funnel \u2014 the team responsible for receiving, qualifying, and routing every inbound seller inquiry to the right next step.</p><div class="stat-row"><div class="stat-box"><div class="num">15m</div><div class="label">Max first response time</div></div><div class="stat-box"><div class="num">3\u00d7</div><div class="label">Call attempts before drip</div></div><div class="stat-box"><div class="num">80%</div><div class="label">Pass rate to stay in role</div></div></div><h2>Key Responsibilities</h2><ul><li>Respond to all inbound leads within 15 minutes during business hours</li><li>Qualify leads using the 4 motivation screens (MIST: Motivation, Issue, Situation, Timeline)</li><li>Book appointments directly in GHL calendar</li><li>Maintain all lead records and stage updates in GHL</li><li>Manage follow-up sequences for non-converting leads</li></ul><h2>GHL Pipeline Stages</h2><table class="data-table"><tr><th>Stage</th><th>Definition</th><th>Next Action</th></tr><tr><td><span class="ghl-field">New Lead</span></td><td>Just received \u2014 not yet contacted</td><td>Call within 15 min</td></tr><tr><td><span class="ghl-field">Attempting Contact</span></td><td>Active outreach in progress</td><td>3 calls + text, add to drip</td></tr><tr><td><span class="ghl-field">Appointment Set</span></td><td>Seller agreed to meet</td><td>Hand to Acquisitions</td></tr><tr><td><span class="ghl-field">Long-Term Follow-Up</span></td><td>Not ready now, warm for later</td><td>Auto-drip, check in at 30/60/90 days</td></tr><tr><td><span class="ghl-field">Dead Lead</span></td><td>Opted out or not a fit</td><td>Tag reason, archive</td></tr></table>'
      },
      { id: 'lm-new-lead', title: 'New Lead Process', dept: 'Lead Management', owner: 'Nicole',
        content: '<h2>New Lead Response Protocol</h2><div class="callout crimson"><div class="callout-icon">\u23f1</div><div class="callout-body"><strong>15-Minute Rule</strong>All new leads must receive a first contact attempt within 15 minutes of coming in during business hours (9 AM \u2013 6 PM). Studies show response within 5 minutes increases contact rate by 100\u00d7.</div></div><ol class="step-list"><li><div class="step-num">1</div><div class="step-content"><strong>Check the campaign tag</strong> \u2014 What marketing source did this lead respond to?</div></li><li><div class="step-num">2</div><div class="step-content"><strong>Call immediately</strong> \u2014 First call attempt. Use the opening script. If they answer, screen using MIST.</div></li><li><div class="step-num">3</div><div class="step-content"><strong>If no answer:</strong> Send the intro text, call again in 30 minutes, call a third time 1 hour after that.</div></li><li><div class="step-num">4</div><div class="step-content"><strong>Log every call</strong> \u2014 Date, outcome, seller\'s stated situation, and next scheduled action.</div></li><li><div class="step-num">5</div><div class="step-content"><strong>If qualified:</strong> Book the appointment in GHL. Confirm the address, date/time, and send a confirmation text.</div></li></ol><h2>Booking an Appointment in GHL</h2><ol class="step-list"><li><div class="step-num">1</div><div class="step-content">In the contact record, click <strong>Appointments \u2192 New Appointment</strong></div></li><li><div class="step-num">2</div><div class="step-content">Select the correct calendar (In-Person or Virtual)</div></li><li><div class="step-num">3</div><div class="step-content">Set date, time, and assign to the acquisitions agent</div></li><li><div class="step-num">4</div><div class="step-content">Add appointment notes: property address, motivation level (1\u201310), any red flags</div></li><li><div class="step-num">5</div><div class="step-content">Move contact to <span class="ghl-field">Appointment Set</span> stage</div></li><li><div class="step-num">6</div><div class="step-content">Send confirmation text to seller</div></li></ol>'
      }
    ]
  },
  {
    id: 'acq', label: 'Acquisitions', color: '#E3A728',
    pages: [
      { id: 'acq-overview', title: 'Department Overview', dept: 'Acquisitions', owner: 'Joshua Hines',
        content: '<h2>Department Purpose</h2><p>Acquisitions is responsible for converting appointments into signed contracts. This requires mastery of property valuation (ARV and comps), offer structuring (MAO formula), in-person selling skills, and proper documentation of every deal.</p><h2>The Acquisitions Workflow</h2><ol class="step-list"><li><div class="step-num">1</div><div class="step-content"><strong>Review the appointment</strong> \u2014 Pull up GHL, review lead notes, research the address on SDAT.</div></li><li><div class="step-num">2</div><div class="step-content"><strong>Run preliminary comps</strong> \u2014 Know your ballpark ARV before the appointment.</div></li><li><div class="step-num">3</div><div class="step-content"><strong>Conduct the appointment</strong> \u2014 Walk the property, build rapport, screen motivation, present your offer.</div></li><li><div class="step-num">4</div><div class="step-content"><strong>Get the contract signed</strong> \u2014 Execute the purchase agreement on-site when possible.</div></li><li><div class="step-num">5</div><div class="step-content"><strong>Create the Google Drive property folder</strong> \u2014 Immediately after a signed contract.</div></li><li><div class="step-num">6</div><div class="step-content"><strong>Hand off to TC</strong> \u2014 With the Drive link in GHL.</div></li></ol>'
      },
      { id: 'acq-appointment', title: 'Appointment & Post-Appointment Process', dept: 'Acquisitions', owner: 'Joshua Hines',
        content: '<h2>Before the Appointment</h2><ul><li>Review all GHL notes from Lead Management</li><li>Pull the property on SDAT to confirm ownership, tax assessment, any liens</li><li>Run ballpark comps using BrightMLS</li><li>Bring the credibility packet</li></ul><h2>During the Appointment</h2><ol class="step-list"><li><div class="step-num">1</div><div class="step-content"><strong>Build rapport first</strong> \u2014 Ask about the property\'s history, acknowledge their situation.</div></li><li><div class="step-num">2</div><div class="step-content"><strong>Walk the property</strong> \u2014 Take photos of every room, exterior, roof, HVAC, electrical panel.</div></li><li><div class="step-num">3</div><div class="step-content"><strong>Present your offer</strong> \u2014 Walk through the investor math transparently.</div></li><li><div class="step-num">4</div><div class="step-content"><strong>Handle objections</strong> \u2014 Use the scripts in the credibility packet SOP.</div></li><li><div class="step-num">5</div><div class="step-content"><strong>Get the signature</strong> \u2014 If they agree, execute the purchase agreement now.</div></li></ol><h2>Post-Appointment: Signed Contract Protocol</h2><div class="callout amber"><div class="callout-icon">\ud83d\udcc1</div><div class="callout-body"><strong>Create the Google Drive Property Folder \u2014 First Thing</strong>Within 1 hour of getting a signed contract, create the property folder in Google Drive and add the link to the GHL deal record.</div></div><div class="workflow-card"><h4>Creating the Google Drive Property Folder</h4><ol class="step-list" style="margin:0"><li><div class="step-num">1</div><div class="step-content"><strong>Go to the IHT Deals folder in Google Drive</strong></div></li><li><div class="step-num">2</div><div class="step-content"><strong>Create a new subfolder</strong> \u2014 Name it: <code>[Street Address] \u2014 [Seller Last Name]</code></div></li><li><div class="step-num">3</div><div class="step-content"><strong>Add these files:</strong><ul style="margin-top:6px"><li>Signed Purchase Agreement (PDF)</li><li>Property Info Sheet (ARV, repairs estimate, MAO)</li><li>Comp report or screenshot</li><li>Property photos</li><li>Any seller disclosures</li></ul></div></li><li><div class="step-num">4</div><div class="step-content"><strong>Copy the folder link</strong> \u2014 Set to \u201cAnyone with the link can view\u201d</div></li><li><div class="step-num">5</div><div class="step-content"><strong>Paste the Drive link into GHL</strong></div></li><li><div class="step-num">6</div><div class="step-content"><strong>Move GHL stage to <span class="ghl-field">Under Contract</span></strong></div></li></ol></div><div class="callout green"><div class="callout-icon">\u2713</div><div class="callout-body"><strong>What the Drive Link Enables</strong>TC can order title without emailing you. Dispo can build the listing without asking for photos. One link = the entire deal file.</div></div>'
      },
      { id: 'acq-comping', title: 'Comping Properties & ARV', dept: 'Acquisitions', owner: 'Joshua Hines',
        content: '<h2>The Comping Framework</h2><p>ARV (After Repair Value) is the foundation of every offer. A wrong ARV = a wrong offer = a deal that can\'t be assigned or a loss.</p><h2>Comp Criteria</h2><table class="data-table"><tr><th>Criteria</th><th>Standard</th><th>Notes</th></tr><tr><td>Distance</td><td>Within 1 mile (0.5 mile preferred)</td><td>Expand only in rural areas</td></tr><tr><td>Sale Date</td><td>Last 6 months preferred, 12 months max</td><td>Flag anything older than 9 months</td></tr><tr><td>Square Footage</td><td>Within 15\u201320% of subject</td><td>Adjust if needed</td></tr><tr><td>Bed/Bath</td><td>Same or \u00b11 bed; same bath preferred</td><td>Apply market adjustment</td></tr><tr><td>Property Type</td><td>Same type (SFR, rowhome, semi-detached)</td><td>Never mix types</td></tr><tr><td>Condition</td><td>Renovated or retail condition only</td><td>Exclude REO, distressed, short sales</td></tr></table><h2>MAO Formula</h2><div class="callout amber"><div class="callout-icon">\ud83e\uddee</div><div class="callout-body"><strong>Maximum Allowable Offer = ARV \u00d7 70% \u2212 Estimated Repairs</strong>The 70% covers assignment fee, investor profit margin, holding costs, and closing costs. Never go above MAO without explicit approval from Ashley.</div></div><h2>Repair Estimation Guide</h2><table class="data-table"><tr><th>Item</th><th>Cosmetic</th><th>Moderate</th><th>Full Gut</th></tr><tr><td>Kitchen</td><td>$3K\u2013$8K</td><td>$15K\u2013$25K</td><td>$30K\u2013$50K</td></tr><tr><td>Bathroom</td><td>$2K\u2013$5K</td><td>$8K\u2013$15K</td><td>$18K\u2013$28K</td></tr><tr><td>Flooring (per 1K sq ft)</td><td>$2K\u2013$4K</td><td>$5K\u2013$8K</td><td>$10K\u2013$15K</td></tr><tr><td>Roof</td><td>Repair $2K\u2013$5K</td><td>\u2014</td><td>Replace $8K\u2013$18K</td></tr><tr><td>HVAC</td><td>Service $500\u2013$1K</td><td>\u2014</td><td>Replace $5K\u2013$12K</td></tr><tr><td>Electrical</td><td>Updates $1K\u2013$3K</td><td>Partial $5K\u2013$12K</td><td>Full rewire $15K\u2013$25K</td></tr><tr><td>Plumbing</td><td>Repairs $500\u2013$2K</td><td>Partial $5K\u2013$10K</td><td>Full repipe $12K\u2013$22K</td></tr><tr><td>Paint (interior)</td><td>$2K\u2013$5K</td><td>$4K\u2013$8K</td><td>$8K\u2013$15K</td></tr></table>'
      }
    ]
  },
  {
    id: 'dispo', label: 'Dispositions', color: '#16A34A',
    pages: [
      { id: 'dispo-overview', title: 'Department Overview', dept: 'Dispositions', owner: 'Ashley Hines',
        content: '<h2>Department Purpose</h2><p>Dispositions is responsible for marketing under-contract properties to qualified buyers, collecting offers, negotiating terms, executing assignment agreements, and coordinating with TC through to close.</p><div class="callout amber"><div class="callout-icon">\ud83d\udcc1</div><div class="callout-body"><strong>Step Zero: Pull the Google Drive Link from GHL</strong>Before building any listing or making any calls, open the deal in GHL and find the Google Drive folder link. Everything you need is in that folder.</div></div><h2>Dispo Workflow Overview</h2><ol class="step-list"><li><div class="step-num">1</div><div class="step-content"><strong>Pull the Drive folder from GHL</strong></div></li><li><div class="step-num">2</div><div class="step-content"><strong>Set the assignment fee target</strong> \u2014 Typical range: $5K\u2013$25K</div></li><li><div class="step-num">3</div><div class="step-content"><strong>Build the listing</strong></div></li><li><div class="step-num">4</div><div class="step-content"><strong>VIP blast first</strong> \u2014 24\u201348 hours of exclusivity</div></li><li><div class="step-num">5</div><div class="step-content"><strong>Broad marketing</strong></div></li><li><div class="step-num">6</div><div class="step-content"><strong>Collect and evaluate offers</strong></div></li><li><div class="step-num">7</div><div class="step-content"><strong>Execute assignment agreement</strong></div></li><li><div class="step-num">8</div><div class="step-content"><strong>Hand off to TC</strong></div></li></ol><div class="callout crimson"><div class="callout-icon">\u26a0</div><div class="callout-body"><strong>Verbal interest is not a deal.</strong>Continue marketing until you have a signed assignment agreement AND the EMD in escrow.</div></div>'
      },
      { id: 'dispo-listing', title: 'Building a Dispo Listing', dept: 'Dispositions', owner: 'Ashley Hines',
        content: '<h2>Starting From the Drive Folder</h2><p>Your listing starts with the property info sheet in the Google Drive folder.</p><ul><li>ARV (confirmed, not estimated)</li><li>Your purchase price</li><li>Repair estimate and scope</li><li>Key features and neighborhood comps</li><li>Photos (from Drive folder)</li></ul><h2>Listing Headline Formula</h2><div class="callout amber"><div class="callout-icon">\u270f</div><div class="callout-body"><strong>Lead with equity.</strong><br><br><strong>Format:</strong> ARV $[X] | Asking $[Y] | [City, State] | [Beds/Baths/Sq Ft]<br><strong>Example:</strong> ARV $285K | Asking $159K | Baltimore, MD | 3BD/1BA/1,200 sq ft</div></div><h2>Offer Evaluation Matrix</h2><table class="data-table"><tr><th>Criteria</th><th>Weight</th><th>What to Look For</th></tr><tr><td>Price</td><td>40%</td><td>Closest to or at asking</td></tr><tr><td>Certainty of Close</td><td>30%</td><td>Verified POF, proven closing history</td></tr><tr><td>Speed</td><td>20%</td><td>Close date relative to contract expiration</td></tr><tr><td>Relationship</td><td>10%</td><td>Prior closings with IHT</td></tr></table>'
      },
      { id: 'dispo-buyers', title: 'Buyer Management', dept: 'Dispositions', owner: 'Ashley Hines',
        content: '<h2>Buyer List Structure</h2><table class="data-table"><tr><th>Tier</th><th>Definition</th><th>How to Treat Them</th></tr><tr><td><strong>VIP</strong></td><td>Has closed with IHT or proven closers</td><td>First to hear about every deal. 24\u201348 hour exclusivity.</td></tr><tr><td><strong>Active</strong></td><td>Buys regularly, responds quickly</td><td>Included in all blasts.</td></tr><tr><td><strong>General</strong></td><td>Has expressed interest; hasn\'t closed</td><td>Included in broad blasts. Must submit POF.</td></tr></table><h2>Required Buyer Information</h2><ul><li>\u2713 Proof of Funds (dated within 60 days)</li><li>\u2713 Preferred property types and price range</li><li>\u2713 Typical close timeline</li><li>\u2713 EMD amount</li><li>\u2713 Contact info: name, phone, email, attorney/title contact</li></ul><h2>Adding Buyers to GHL</h2><p>Every buyer should be a contact in GHL tagged with: <span class="ghl-field">Buyer</span> + their tier tag.</p>'
      }
    ]
  },
  {
    id: 'tc', label: 'Transaction Coordination', color: '#7C3AED',
    pages: [
      { id: 'tc-overview', title: 'Department Overview', dept: 'Transaction Coordination', owner: 'Mike',
        content: '<h2>Department Purpose</h2><p>Transaction Coordination takes over once a seller has signed the purchase agreement. TC manages the deal from contract to close \u2014 coordinating with title, tracking deadlines, ensuring all documents are in order.</p><div class="callout blue"><div class="callout-icon">\ud83d\udccb</div><div class="callout-body"><strong>TC Starts From the Drive Link</strong>When a deal moves to <span class="ghl-field">Under Contract</span> in GHL, TC\'s first step is to open the Google Drive folder linked in the deal record.</div></div><h2>TC Responsibilities</h2><ul><li>Order title search within 24 hours of receiving a signed contract</li><li>Track all critical dates: inspection deadline, financing contingency, closing date</li><li>Coordinate with title company / closing attorney</li><li>Collect and verify buyer\'s assignment documents and EMD</li><li>Flag any title issues to acquisitions agent and Ashley</li><li>Ensure all parties have closing instructions 48 hours before closing</li><li>Document every update in GHL and the Drive folder</li></ul><h2>Slack Communication</h2><table class="data-table"><tr><th>Slack Channel</th><th>Purpose</th></tr><tr><td><strong>#transactions</strong></td><td>All TC deal updates and milestone notifications</td></tr><tr><td><strong>#deals-general</strong></td><td>Cross-department deal discussion</td></tr><tr><td><strong>#acquisitions</strong></td><td>Acquisitions team updates and comps</td></tr><tr><td><strong>#dispositions</strong></td><td>Dispo listings and buyer activity</td></tr><tr><td><strong>#team</strong></td><td>General company communication</td></tr></table><h2>Critical Dates Tracker</h2><ul><li><strong>Inspection Period Expiration</strong></li><li><strong>EMD Due Date</strong></li><li><strong>Financing Contingency (if any)</strong></li><li><strong>Closing Date</strong></li><li><strong>Assignment Agreement Deadline</strong></li></ul>'
      }
    ]
  },
  {
    id: 'policies', label: 'Company Policies', color: '#A52325',
    pages: [
      { id: 'pol-comms', title: 'Communication Standards', dept: 'All Departments', owner: 'Ashley Hines',
        content: '<h2>Response Time Standards</h2><table class="data-table"><tr><th>Channel</th><th>Internal Team</th><th>Sellers / Buyers</th></tr><tr><td>Slack</td><td>Within 2 hours during business hours</td><td>N/A</td></tr><tr><td>Text/GHL</td><td>Within 1 hour</td><td>Within 15 minutes (new leads)</td></tr><tr><td>Email</td><td>Same business day</td><td>Same business day</td></tr><tr><td>Phone call</td><td>Return within 2 hours</td><td>Return within 1 hour</td></tr></table><h2>Slack Channel Guide</h2><table class="data-table"><tr><th>Channel</th><th>Who Uses It</th><th>What Goes There</th></tr><tr><td>#team</td><td>Everyone</td><td>Company-wide announcements</td></tr><tr><td>#leads</td><td>Lead Management</td><td>New leads, hot prospects</td></tr><tr><td>#acquisitions</td><td>Acq team</td><td>Appointment notes, comp questions</td></tr><tr><td>#dispositions</td><td>Dispo + all</td><td>New listings, buyer interest</td></tr><tr><td>#transactions</td><td>TC + all</td><td>Deal milestones, title updates</td></tr><tr><td>#wins</td><td>Everyone</td><td>Closed deals, shoutouts</td></tr></table><h2>GHL Documentation Requirements</h2><ul><li>Every seller call gets a note logged within 30 minutes</li><li>Every stage change must reflect a real-world event</li><li>Every deal under contract must have the Google Drive folder link</li><li>No deal moves to <span class="ghl-field">Closed</span> without TC confirming</li></ul>'
      },
      { id: 'pol-training', title: 'Team Training', dept: 'All Departments', owner: 'Ashley Hines',
        content: '<h2>Training Requirements</h2><p>Every team member is required to pass the training quizzes before performing their role independently.</p><table class="data-table"><tr><th>Team Member</th><th>Required Quizzes</th><th>Pass Threshold</th></tr><tr><td>Nicole</td><td>Lead Manager Entry + Lead Management Deep Dive</td><td>80% on each</td></tr><tr><td>Joshua</td><td>Acquisitions Entry + Acquisitions Deep Dive + Deal Lifecycle</td><td>80% on each</td></tr><tr><td>Mike</td><td>TC Entry + TC Deep Dive + Deal Lifecycle</td><td>80% on each</td></tr><tr><td>Ted</td><td>All role entry quizzes + Tools &amp; Systems</td><td>80% on each</td></tr><tr><td>Ashley</td><td>All quizzes (admin)</td><td>80% on each</td></tr></table><h2>Re-certification</h2><ul><li>All team members re-take department quizzes every 6 months</li><li>Quizzes are updated when SOPs change</li><li>Scores are tracked in Google Sheets automatically</li></ul><h2>Onboarding New Team Members</h2><ol class="step-list"><li><div class="step-num">1</div><div class="step-content">Read the Operations Manual front to back</div></li><li><div class="step-num">2</div><div class="step-content">Shadow their department lead for 5 live interactions</div></li><li><div class="step-num">3</div><div class="step-content">Pass all required quizzes</div></li><li><div class="step-num">4</div><div class="step-content">Complete GHL orientation</div></li><li><div class="step-num">5</div><div class="step-content">Added to all relevant Slack channels by Ashley</div></li></ol>'
      }
    ]
  },
  {
    id: 'training', label: 'Training Portal', color: '#7C3AED',
    pages: [
      { id: 'training-home', title: 'Training Home', dept: 'All Departments', owner: 'Ashley Hines', content: '__TRAINING_HOME__' },
      { id: 'quiz-role-lead-manager', title: 'Lead Manager Entry Quiz', dept: 'Lead Management', owner: 'Nicole', content: '__QUIZ__role-lead-manager' },
      { id: 'quiz-role-acquisitions', title: 'Acquisitions Entry Quiz', dept: 'Acquisitions', owner: 'Joshua Hines', content: '__QUIZ__role-acquisitions' },
      { id: 'quiz-role-dispositions', title: 'Dispositions Entry Quiz', dept: 'Dispositions', owner: 'Ashley Hines', content: '__QUIZ__role-dispositions' },
      { id: 'quiz-role-tc', title: 'TC Entry Quiz', dept: 'Transaction Coordination', owner: 'Mike', content: '__QUIZ__role-tc' },
      { id: 'quiz-dept-lead-management', title: 'Lead Management Deep Dive', dept: 'Lead Management', owner: 'Nicole', content: '__QUIZ__dept-lead-management' },
      { id: 'quiz-dept-acquisitions', title: 'Acquisitions Deep Dive', dept: 'Acquisitions', owner: 'Joshua Hines', content: '__QUIZ__dept-acquisitions' },
      { id: 'quiz-dept-dispositions', title: 'Dispositions Deep Dive', dept: 'Dispositions', owner: 'Ashley Hines', content: '__QUIZ__dept-dispositions' },
      { id: 'quiz-dept-tc', title: 'TC Deep Dive', dept: 'Transaction Coordination', owner: 'Mike', content: '__QUIZ__dept-tc' },
      { id: 'quiz-dept-deal-lifecycle', title: 'Deal Lifecycle', dept: 'All Departments', owner: 'Ashley Hines', content: '__QUIZ__dept-deal-lifecycle' },
      { id: 'quiz-dept-tools-systems', title: 'Tools & Systems', dept: 'All Departments', owner: 'Ashley Hines', content: '__QUIZ__dept-tools-systems' }
    ]
  },
  {
    id: 'pipeline-ref', label: 'GHL Pipeline Reference', color: '#0EA5E9',
    pages: [
      { id: 'pipeline-why', title: 'Why Stage Changes Matter', dept: 'All Departments', owner: 'Ashley Hines',
        content: '<style>.pc-intro{margin-bottom:28px}.pc-intro p{color:var(--graphite);font-size:14px;line-height:1.7}.pc-why-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin:20px 0 28px}.pc-why-card{background:var(--white);border:1px solid var(--fog);border-left:4px solid var(--amber);border-radius:8px;padding:14px 16px}.pc-why-card h4{font-size:13px;font-weight:700;margin-bottom:4px;color:var(--ink)}.pc-why-card p{font-size:12px;color:var(--steel);line-height:1.5}.pc-scroll{overflow-x:auto;margin:0 -4px;padding-bottom:8px}.pc-grid{display:grid;grid-template-columns:repeat(6,minmax(170px,1fr));gap:10px;min-width:1060px;padding:4px}.pc-col{display:flex;flex-direction:column;gap:0}.pc-col-head{padding:10px 12px 8px;border-radius:8px 8px 0 0;margin-bottom:6px}.pc-col-head .pl-name{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:2px}.pc-col-head .pl-owner{font-size:11px;opacity:0.75}.pc-stage{background:var(--white);border:1px solid var(--fog);border-radius:7px;padding:9px 12px;margin-bottom:5px;cursor:pointer;transition:all 0.15s;position:relative}.pc-stage:hover{border-color:var(--amber);box-shadow:0 2px 8px rgba(227,167,40,0.15);transform:translateY(-1px)}.pc-stage.pc-active{border-color:var(--amber);background:var(--amber-pale)}.pc-stage.pc-handoff{border-left:3px solid #0EA5E9}.pc-stage.pc-win{border-left:3px solid #16A34A;background:#F0FFF4}.pc-stage.pc-dead{border-left:3px solid #DC2626;background:#FFF5F5}.pc-stage.pc-risk{border-left:3px solid #F59E0B;background:#FFFBEB}.pc-stage-name{font-size:12px;font-weight:600;color:var(--ink);line-height:1.3;display:flex;align-items:flex-start;gap:6px}.pc-badge{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;padding:1px 5px;border-radius:3px;white-space:nowrap;flex-shrink:0;margin-top:1px}.pc-badge-handoff{background:#DBEAFE;color:#1D4ED8}.pc-badge-win{background:#DCFCE7;color:#166534}.pc-badge-dead{background:#FEE2E2;color:#991B1B}.pc-badge-risk{background:#FEF3C7;color:#92400E}.pc-arrow{text-align:center;font-size:13px;color:var(--fog);margin:-1px 0 4px;line-height:1;user-select:none}.pc-detail{background:var(--white);border:1px solid var(--fog);border-radius:10px;margin-top:20px;overflow:hidden;min-height:100px}.pc-detail-empty{padding:28px;text-align:center;color:var(--silver);font-size:13px}.pc-detail-inner{padding:20px 22px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px;animation:pcFade 0.2s ease}@keyframes pcFade{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}.pc-detail-col h4{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:var(--steel);margin-bottom:8px;padding-bottom:5px;border-bottom:1px solid var(--fog)}.pc-detail-title{font-family:var(--font-serif);font-size:18px;color:var(--ink);margin-bottom:3px}.pc-detail-pipe{font-size:11px;color:var(--amber-dark);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:12px}.pc-detail-col ul{list-style:none;padding:0}.pc-detail-col li{font-size:12px;color:var(--graphite);line-height:1.5;padding:4px 0 4px 14px;position:relative;border-bottom:1px solid var(--fog)}.pc-detail-col li:last-child{border-bottom:none}.pc-detail-col li::before{content:"\u203A";position:absolute;left:0;color:var(--amber);font-weight:700}.pc-skip-box{background:#FFF5F5;border:1px solid #FECACA;border-radius:7px;padding:10px 14px;margin-top:4px;font-size:12px;color:#7F1D1D;line-height:1.5}.pc-skip-box strong{display:block;margin-bottom:3px;color:#DC2626;font-size:11px;text-transform:uppercase;letter-spacing:0.06em}.pc-legend{display:flex;gap:16px;flex-wrap:wrap;margin-bottom:16px;font-size:12px}.pc-legend-item{display:flex;align-items:center;gap:6px;color:var(--graphite)}.pc-legend-dot{width:10px;height:10px;border-radius:2px;flex-shrink:0}</style><div class="pc-intro"><p>Every stage change in GHL is a signal to the next person in the chain. When stages are skipped or left stale, work gets duplicated, deadlines get missed, and deals fall through gaps.</p></div><div class="pc-why-grid"><div class="pc-why-card"><h4>\ud83d\udeab Prevents Duplicate Outreach</h4><p>If a lead stays in \u201cProspects\u201d after an appointment is set, Nicole may call someone Joshua is already meeting with.</p></div><div class="pc-why-card"><h4>\ud83d\udd01 Triggers the Next Department</h4><p>TC watches for \u201cNew Deal!\u201d in their pipeline. No stage change = no TC action = missed title deadlines.</p></div><div class="pc-why-card"><h4>\ud83d\udcca Keeps Reporting Honest</h4><p>Your weekly metrics pull from GHL stage data. Stale stages mean your scorecard is lying.</p></div><div class="pc-why-card"><h4>\ud83d\uddc2\ufe0f One Source of Truth</h4><p>GHL stage + Drive folder link = the entire deal history.</p></div></div><div class="pc-legend"><div class="pc-legend-item"><div class="pc-legend-dot" style="background:#0EA5E9"></div> Handoff to next dept</div><div class="pc-legend-item"><div class="pc-legend-dot" style="background:#16A34A"></div> Win / Closed state</div><div class="pc-legend-item"><div class="pc-legend-dot" style="background:#DC2626"></div> Dead / end state</div><div class="pc-legend-item"><div class="pc-legend-dot" style="background:#F59E0B"></div> At-risk / needs attention</div></div><div class="pc-scroll"><div class="pc-grid" id="pc-grid"><div class="pc-col"><div class="pc-col-head" style="background:#EFF6FF;color:#1D4ED8;"><div class="pl-name">1) Leads Pipeline</div><div class="pl-owner">Owner: Nicole</div></div><div class="pc-stage" onclick="pcDetail(\'leads-prospects\')"><div class="pc-stage-name">Prospects</div></div><div class="pc-arrow">\u2193</div><div class="pc-stage" onclick="pcDetail(\'leads-redzones\')"><div class="pc-stage-name">Redzones</div></div><div class="pc-arrow">\u2193</div><div class="pc-stage" onclick="pcDetail(\'leads-priority\')"><div class="pc-stage-name">Priority Top 20%</div></div><div class="pc-arrow">\u2193</div><div class="pc-stage" onclick="pcDetail(\'leads-followup\')"><div class="pc-stage-name">Follow Up</div></div><div class="pc-arrow">\u2193</div><div class="pc-stage pc-handoff" onclick="pcDetail(\'leads-handoff\')"><div class="pc-stage-name">\u2192 Closer Pipeline <span class="pc-badge pc-badge-handoff">Handoff</span></div></div><div class="pc-arrow">\u2193</div><div class="pc-stage pc-dead" onclick="pcDetail(\'leads-not-md\')"><div class="pc-stage-name">Not MD Lead <span class="pc-badge pc-badge-dead">Out of Market</span></div></div><div class="pc-arrow">\u2193</div><div class="pc-stage" onclick="pcDetail(\'leads-ai-queue\')"><div class="pc-stage-name">AI Follow Up Queue</div></div><div class="pc-arrow">\u2193</div><div class="pc-stage" onclick="pcDetail(\'leads-ai-review\')"><div class="pc-stage-name">AI Review</div></div></div><div class="pc-col"><div class="pc-col-head" style="background:#FEF7E0;color:#92400E;"><div class="pl-name">3) Josh the Closer</div><div class="pl-owner">Owner: Joshua Hines</div></div><div class="pc-stage" onclick="pcDetail(\'josh-preoffer\')"><div class="pc-stage-name">Pre-offer</div></div><div class="pc-arrow">\u2193</div><div class="pc-stage pc-dead" onclick="pcDetail(\'josh-noreach\')"><div class="pc-stage-name">Cannot Confirm/Reach <span class="pc-badge pc-badge-dead">Stalled</span></div></div><div class="pc-arrow">\u2193</div><div class="pc-stage" onclick="pcDetail(\'josh-aptsched\')"><div class="pc-stage-name">Appointment Scheduled</div></div><div class="pc-arrow">\u2193</div><div class="pc-stage" onclick="pcDetail(\'josh-offered\')"><div class="pc-stage-name">Offered</div></div><div class="pc-arrow">\u2193</div><div class="pc-stage pc-risk" onclick="pcDetail(\'josh-1ydline\')"><div class="pc-stage-name">1 YD LINE <span class="pc-badge pc-badge-risk">Hot Deal</span></div></div><div class="pc-arrow">\u2193</div><div class="pc-stage" onclick="pcDetail(\'josh-ltfu\')"><div class="pc-stage-name">LTFU</div></div><div class="pc-arrow">\u2193</div><div class="pc-stage pc-win" onclick="pcDetail(\'josh-won\')"><div class="pc-stage-name">WON! <span class="pc-badge pc-badge-win">Signed</span></div></div></div><div class="pc-col"><div class="pc-col-head" style="background:#F5F3FF;color:#5B21B6;"><div class="pl-name">2) Mike the Closer</div><div class="pl-owner">Owner: Mike</div></div><div class="pc-stage" onclick="pcDetail(\'mike-aptsched\')"><div class="pc-stage-name">Appointment Scheduled</div></div><div class="pc-arrow">\u2193</div><div class="pc-stage" onclick="pcDetail(\'mike-offermade\')"><div class="pc-stage-name">Offer Made/Followup</div></div><div class="pc-arrow">\u2193</div><div class="pc-stage pc-risk" onclick="pcDetail(\'mike-1ydline\')"><div class="pc-stage-name">1 YD LINE <span class="pc-badge pc-badge-risk">Hot Deal</span></div></div><div class="pc-arrow">\u2193</div><div class="pc-stage pc-dead" onclick="pcDetail(\'mike-lostoffer\')"><div class="pc-stage-name">Lost Offer <span class="pc-badge pc-badge-dead">End State</span></div></div></div><div class="pc-col"><div class="pc-col-head" style="background:#F0FDF4;color:#166534;"><div class="pl-name">5) Transaction Coord.</div><div class="pl-owner">Owner: Mike / EP</div></div><div class="pc-stage pc-handoff" onclick="pcDetail(\'tc-newdeal\')"><div class="pc-stage-name">New Deal! <span class="pc-badge pc-badge-handoff">Triggered by Contract</span></div></div><div class="pc-arrow">\u2193</div><div class="pc-stage" onclick="pcDetail(\'tc-premark\')"><div class="pc-stage-name">Pre-Marketing / New File</div></div><div class="pc-arrow">\u2193</div><div class="pc-stage" onclick="pcDetail(\'tc-vip\')"><div class="pc-stage-name">Marketing Phase 1 (VIP)</div></div><div class="pc-arrow">\u2193</div><div class="pc-stage" onclick="pcDetail(\'tc-allbuyers\')"><div class="pc-stage-name">Marketing Phase 2 (All Buyers)</div></div><div class="pc-arrow">\u2193</div><div class="pc-stage" onclick="pcDetail(\'tc-retrade\')"><div class="pc-stage-name">Marketing Phase 3 (Retrade)</div></div><div class="pc-arrow">\u2193</div><div class="pc-stage pc-risk" onclick="pcDetail(\'tc-docusign\')"><div class="pc-stage-name">Ready for DocuSign B-C <span class="pc-badge pc-badge-risk">Action Req.</span></div></div><div class="pc-arrow">\u2193</div><div class="pc-stage" onclick="pcDetail(\'tc-bcassigned\')"><div class="pc-stage-name">B-C Assigned</div></div></div><div class="pc-col"><div class="pc-col-head" style="background:#F0FDF4;color:#166534;"><div class="pl-name">5) TC \u2014 Closing</div><div class="pl-owner">Owner: Mike / EP</div></div><div class="pc-stage" onclick="pcDetail(\'tc-extension\')"><div class="pc-stage-name">Extension Needed</div></div><div class="pc-arrow">\u2193</div><div class="pc-stage" onclick="pcDetail(\'tc-closingsched\')"><div class="pc-stage-name">Closing Scheduled</div></div><div class="pc-arrow">\u2193</div><div class="pc-stage pc-risk" onclick="pcDetail(\'tc-atrisk\')"><div class="pc-stage-name">AT RISK <span class="pc-badge pc-badge-risk">Escalate Now</span></div></div><div class="pc-arrow">\u2193</div><div class="pc-stage pc-win" onclick="pcDetail(\'tc-closed\')"><div class="pc-stage-name">Closed \u2014 Dispo Complete <span class="pc-badge pc-badge-win">Won</span></div></div><div class="pc-arrow">\u2193</div><div class="pc-stage" onclick="pcDetail(\'tc-impactbuying\')"><div class="pc-stage-name">IMPACT Buying</div></div><div class="pc-arrow">\u2193</div><div class="pc-stage pc-risk" onclick="pcDetail(\'tc-shortsale\')"><div class="pc-stage-name">Active Short Sale <span class="pc-badge pc-badge-risk">Long Timeline</span></div></div></div><div class="pc-col"><div class="pc-col-head" style="background:#FFF7ED;color:#9A3412;"><div class="pl-name">6) Dispo: Buyer Marketing</div><div class="pl-owner">Owner: Ashley</div></div><div class="pc-stage" onclick="pcDetail(\'dispo-general\')"><div class="pc-stage-name">General / Prospective Buyers</div></div><div class="pc-arrow">\u2193</div><div class="pc-stage" onclick="pcDetail(\'dispo-priority\')"><div class="pc-stage-name">Priority</div></div><div class="pc-arrow">\u2193</div><div class="pc-stage" onclick="pcDetail(\'dispo-prioritycomplete\')"><div class="pc-stage-name">Priority Complete</div></div><div class="pc-arrow">\u2193</div><div class="pc-stage pc-risk" onclick="pcDetail(\'dispo-vip\')"><div class="pc-stage-name">VIP <span class="pc-badge pc-badge-risk">First Look</span></div></div><div class="pc-arrow">\u2193</div><div class="pc-stage" onclick="pcDetail(\'dispo-commvip\')"><div class="pc-stage-name">Community VIP</div></div><div class="pc-arrow">\u2193</div><div class="pc-stage" onclick="pcDetail(\'dispo-offerreceived\')"><div class="pc-stage-name">Offer Received</div></div><div class="pc-arrow">\u2193</div><div class="pc-stage pc-dead" onclick="pcDetail(\'dispo-dead\')"><div class="pc-stage-name">Dead Buyer / Black Listed <span class="pc-badge pc-badge-dead">Remove</span></div></div><div class="pc-arrow">\u2193</div><div class="pc-stage" onclick="pcDetail(\'dispo-jv\')"><div class="pc-stage-name">JV Partners</div></div></div></div></div><div class="pc-detail" id="pc-detail"><div class="pc-detail-empty">\u2191 Click any stage above to see what it means, what it unlocks, and what goes wrong if it\'s skipped.</div></div>'
      }
    ]
  }
];

// ══════════════════════════════════════════════════════════
// QUIZ DATA
// ══════════════════════════════════════════════════════════
var QUIZZES = {
  'role-lead-manager': { title: 'Lead Manager Role Entry', questions: [
    { q: 'What is the maximum time allowed to respond to a new inbound lead?', c: ['30 minutes','15 minutes','1 hour','2 hours'], a: 1, e: 'New leads must be contacted within 15 minutes to maximize conversion.' },
    { q: 'What does MIST stand for in the lead qualification framework?', c: ['Motivation, Interest, Situation, Timeline','Motivation, Issue, Situation, Timeline','Market, Intent, Sale, Timeline','Method, Issue, Stage, Time'], a: 1, e: 'MIST = Motivation, Issue, Situation, Timeline.' },
    { q: 'When a lead is not ready to sell but is not disqualified, which stage should they be moved to?', c: ['Dead Lead','Redzones','Long-Term Follow-Up','Priority Top 20%'], a: 2, e: 'Long-Term Follow-Up keeps warm leads in an automated nurture sequence.' },
    { q: 'What is the correct action when a lead is outside Maryland?', c: ['Continue working it','Move to Redzones','Tag as Not MD Lead and stop outreach','Refer to Joshua'], a: 2, e: 'Out-of-market leads are tagged Not MD Lead to clean the pipeline.' },
    { q: 'How many call attempts should be made before moving a lead to Long-Term Follow-Up?', c: ['1','2','3','5'], a: 2, e: 'Three call attempts plus a text within the first hour is the standard.' }
  ]},
  'role-acquisitions': { title: 'Acquisitions Role Entry', questions: [
    { q: 'What is the first thing an acquisitions agent should do when an appointment is confirmed?', c: ['Send the credibility packet','Run SDAT ownership lookup and preliminary comps','Call the seller back to confirm','Notify lead management'], a: 1, e: 'Pre-appointment research should begin immediately after confirmation.' },
    { q: 'What does MAO stand for?', c: ['Maximum Asking Offer','Maximum Allowable Offer','Minimum Acquisition Overhead','Market Adjusted Offer'], a: 1, e: 'MAO = Maximum Allowable Offer. ARV x 70% minus estimated repairs.' },
    { q: 'After a contract is signed, what must be created within 1 hour?', c: ['A title order','A Google Drive property folder with all docs','A listing in the TC pipeline','A Slack message'], a: 1, e: 'The Drive folder must be created and linked in GHL within 1 hour.' },
    { q: 'What comp criteria distance is standard for Maryland suburban properties?', c: ['0.25 miles','0.5 miles','1 mile','2 miles'], a: 1, e: '0.5 miles is the standard comp radius.' },
    { q: 'Where does the Google Drive folder link get pasted after the folder is created?', c: ['In the team Slack channel','In the GHL deal record notes or custom field','In an email to TC','In the Google Sheets tracker'], a: 1, e: 'The Drive folder link is pasted into the GHL deal record.' }
  ]},
  'role-dispositions': { title: 'Dispositions Role Entry', questions: [
    { q: 'What is the first step in the dispositions process after a deal goes under contract?', c: ['Send a blast to all buyers','Build the listing headline','Pull the Google Drive folder link from GHL','Call the top VIP buyer directly'], a: 2, e: 'Always start by pulling the Drive folder link from GHL.' },
    { q: 'In the offer evaluation matrix, what is the highest-weighted factor?', c: ['Speed of close','Buyer relationship','Price','Certainty of close'], a: 2, e: 'Price carries 40% of the evaluation weight.' },
    { q: 'Which buyer tier receives deal notifications first?', c: ['General buyers','Priority buyers','Community VIP','VIP buyers'], a: 3, e: 'VIP buyers get a 24-48 hour exclusivity window.' },
    { q: 'What should you continue doing until an EMD is physically received?', c: ['Marketing the deal to other buyers','Negotiating price with the seller','Ordering title','Requesting extensions'], a: 0, e: 'Never stop marketing until the EMD is collected.' },
    { q: 'What is the listing headline formula?', c: ['Address + ARV + Repair Estimate','ARV + Asking Price + Location hook','Price + Beds/Baths + Area','Seller Story + Property Condition + Price'], a: 1, e: 'The headline formula is ARV + Asking Price + Location.' }
  ]},
  'role-tc': { title: 'Transaction Coordinator Role Entry', questions: [
    { q: 'Within how many hours of receiving a new deal must TC order title?', c: ['12 hours','24 hours','48 hours','72 hours'], a: 1, e: 'Title must be ordered within 24 hours.' },
    { q: 'Where does TC find the signed contract and property documents for a new deal?', c: ['In the team Slack channel','In an email from the acquisitions agent','In the Google Drive folder linked in the GHL deal record','In the Google Sheets tracker'], a: 2, e: 'All deal documents are in the Google Drive folder.' },
    { q: 'What stage should TC move the deal to if a title issue is discovered?', c: ['Closing Scheduled','AT RISK (Title or Closing Issue)','Extension Needed','Dead Lead'], a: 1, e: 'AT RISK flags the deal for immediate review and escalation.' },
    { q: 'When should all closing documents be sent to all parties?', c: ['Day of closing','1 week before','48 hours before closing','When the buyer asks'], a: 2, e: '48 hours before closing ensures all parties have time to review.' },
    { q: 'Which Slack channel should TC use to post deal milestone updates?', c: ['#general','#wins','#transactions','#acquisitions'], a: 2, e: '#transactions is the dedicated channel for all TC deal milestones.' }
  ]},
  'dept-lead-management': { title: 'Lead Management Deep Dive', questions: [
    { q: 'What automation sequence runs when a lead is moved to Long-Term Follow-Up?', c: ['A one-time text','A 30/60/90-day drip sequence','A weekly email','Manual reminders only'], a: 1, e: 'LTFU triggers a 30/60/90-day automated drip.' },
    { q: 'What is the purpose of the AI Follow Up Queue stage?', c: ['To disqualify leads automatically','To route unresponsive leads to AI-managed outreach','To generate new leads','To score inbound calls'], a: 1, e: 'The AI queue handles ongoing touchpoints for exhausted leads.' },
    { q: 'What is the correct response if a seller already has an appointment but Nicole receives a new lead for the same number?', c: ['Call the seller again','Check GHL stage - if appointment is set, do not reach out','Send a text to introduce yourself','Assign to a second lead manager'], a: 1, e: 'Stage = ownership. If a closer already has the appointment, stop outreach.' },
    { q: 'What tag should be applied when a lead is permanently unresponsive?', c: ['LTFU','Redzone','Dead Lead','Not MD Lead'], a: 2, e: 'Dead Lead ends all outreach and automation.' },
    { q: 'What is the Redzones stage used for?', c: ['Leads with high ARV properties','Leads with signs of urgency: distress, estate, divorce, vacancy','Out-of-state leads','Leads from paid ads only'], a: 1, e: 'Redzones flags motivated sellers who need accelerated follow-up.' }
  ]},
  'dept-acquisitions': { title: 'Acquisitions Deep Dive', questions: [
    { q: 'What is the formula for Maximum Allowable Offer?', c: ['ARV x 65% + Repairs','ARV x 70% - Repairs','ARV - Repairs x 70%','ARV x 80% - Repairs'], a: 1, e: 'MAO = ARV x 70% minus estimated repairs.' },
    { q: 'What comp sale date range is acceptable for standard ARV analysis?', c: ['Last 30 days only','Last 3 months','Last 6 months','Last 12 months'], a: 2, e: '6 months is the standard comp window.' },
    { q: 'What four documents must be in the Google Drive folder before it is linked in GHL?', c: ['Contract, photos, POF, title report','Signed contract, property info sheet, comps, photos','Comps, repair estimate, photos, disclosure','Contract, ARV report, seller ID, photos'], a: 1, e: 'Signed contract + property info sheet + comps + photos are required.' },
    { q: 'What is the GHL stage after the Drive folder is linked?', c: ['Offered','Appointment Completed','Under Contract','WON!'], a: 2, e: 'Moving to Under Contract triggers both TC and Dispositions.' },
    { q: 'Which property condition metric most significantly affects the repair cost estimate?', c: ['Year built','Square footage','Overall condition scope (cosmetic vs gut)','Lot size'], a: 2, e: 'Overall condition scope drives the repair estimate more than any single line item.' }
  ]},
  'dept-dispositions': { title: 'Dispositions Deep Dive', questions: [
    { q: 'What are the three buyer tiers in the IHT buyer system?', c: ['Hot, Warm, Cold','VIP, Active, General','Priority, Standard, New','Tier 1, Tier 2, Tier 3'], a: 1, e: 'IHT uses VIP, Active, and General tiers.' },
    { q: 'What information must be collected before a buyer is upgraded to VIP?', c: ['Name and phone number only','Proof of funds, buy box details, and at least one completed transaction','A referral from an existing VIP','Minimum $500K purchase history'], a: 1, e: 'VIP requires verified POF, documented buy box, and closing track record.' },
    { q: 'What happens if a buyer backs out before the EMD is received?', c: ['The deal is dead','Immediately re-market - contract with seller is still active','Notify the seller and ask for an extension','Move to AT RISK in TC pipeline'], a: 1, e: 'Pre-EMD fallthrough means re-market immediately.' },
    { q: 'What must you include when sending a deal to the buyer list?', c: ['Seller name and motivation','ARV, asking price, repair estimate, photos, and address','Just the address and price','A link to the MLS listing'], a: 1, e: 'Every deal blast must include ARV, asking price, repair estimate, photos, and address.' },
    { q: 'What is the correct action if your primary buyer is negotiating but has not yet signed?', c: ['Stop marketing and wait','Keep marketing to backup buyers','Give them a 1-week exclusive','Reduce the price'], a: 1, e: 'Never stop marketing until the EMD is in hand.' }
  ]},
  'dept-tc': { title: 'TC Deep Dive', questions: [
    { q: 'What is the difference between the A-B contract and the B-C contract?', c: ['A-B is with the buyer; B-C is with the seller','A-B is the seller purchase contract; B-C is the assignment or buyer sale contract','They are the same document','A-B is verbal; B-C is written'], a: 1, e: 'A-B is IHT-to-seller. B-C is IHT-to-end-buyer.' },
    { q: 'What critical date must TC calendar immediately upon receiving a new deal?', c: ['The sellers birthday','The inspection period expiration date','The first scheduled showing','The MLS listing date'], a: 1, e: 'The inspection period expiration is the first critical deadline.' },
    { q: 'What does TC do if a title search reveals an open lien?', c: ['Close anyway','Ignore if under $5,000','Immediately escalate to Ashley and Acquisitions','Move to Closing Scheduled'], a: 2, e: 'Any title issue must be escalated immediately.' },
    { q: 'What is the maximum time between B-C signing and scheduling the closing?', c: ['2 weeks','Same business day or next day','1 week','3 business days'], a: 1, e: 'Closing should be scheduled same or next business day after B-C signing.' },
    { q: 'Which TC pipeline stage indicates urgent escalation to Ashley?', c: ['Extension Needed','Closing Scheduled','AT RISK (Title or Closing Issue)','B-C Assigned'], a: 2, e: 'AT RISK is the escalation flag.' }
  ]},
  'dept-deal-lifecycle': { title: 'Deal Lifecycle', questions: [
    { q: 'In what order do departments touch a deal?', c: ['Acq > LM > Dispo > TC','LM > Acq > TC + Dispo simultaneously','LM > Acq > Dispo > TC','TC > LM > Acq > Dispo'], a: 1, e: 'LM qualifies, Acq signs, TC and Dispo activate simultaneously.' },
    { q: 'What is the single document that serves as the handoff trigger from Acquisitions to both TC and Dispositions?', c: ['The MLS comp report','The signed A-B contract in the Google Drive folder, linked in GHL','A Slack notification','An email with the address'], a: 1, e: 'The Drive folder link in GHL is the official handoff.' },
    { q: 'What happens if the primary buyer falls through after B-C is signed but before closing?', c: ['The A-B contract automatically terminates','TC moves to AT RISK; Dispo immediately re-markets','The seller keeps the EMD','The deal is declared dead'], a: 1, e: 'AT RISK triggers in TC and immediate re-marketing in Dispo.' },
    { q: 'Which GHL pipeline stage officially marks a deal as complete?', c: ['B-C Assigned','WON! in the closer pipeline','Closed - Dispo Complete in the TC pipeline','Closing Scheduled'], a: 2, e: 'Closed - Dispo Complete is the official closed state.' },
    { q: 'What is the purpose of requiring the Drive folder link in GHL?', c: ['For MLS compliance','So anyone on the team can access all deal documents without asking','For Google Ads tracking','So the seller can review documents'], a: 1, e: 'The Drive link ensures zero-friction document access.' }
  ]},
  'dept-tools-systems': { title: 'Tools & Systems', questions: [
    { q: 'What is the primary CRM platform used by Impact Home Team?', c: ['HubSpot','Salesforce','GoHighLevel (GHL)','Podio'], a: 2, e: 'GoHighLevel (GHL) is the central CRM.' },
    { q: 'What Maryland state database is used to verify property ownership?', c: ['MLS / BrightMLS','Maryland iMAP','SDAT (State Department of Assessments and Taxation)','MD Court Records'], a: 2, e: 'SDAT is the authoritative source for Maryland property ownership.' },
    { q: 'Where are training quiz results automatically sent?', c: ['A shared Google Drive folder','The #training Slack channel','A Google Sheet via Apps Script webhook','An email to Ashley'], a: 2, e: 'Quiz results are piped to Google Sheets via Apps Script webhook.' },
    { q: 'What is the correct tool for finding recent comparable sales in Maryland?', c: ['Zillow only','BrightMLS / RESO API','Google Maps','SDAT only'], a: 1, e: 'BrightMLS provides accurate MLS-sourced comparable sales.' },
    { q: 'Which communication platform is used for all internal team coordination?', c: ['Email','Microsoft Teams','Slack','GHL conversations'], a: 2, e: 'Slack is the primary internal communication tool.' }
  ]}
};

// ══════════════════════════════════════════════════════════
// PIPELINE REFERENCE DATA
// ══════════════════════════════════════════════════════════
var PC_DATA = {
  'leads-prospects': { name:'Prospects', pipe:'1) Leads Pipeline', means:['New inbound lead — initial qualification not yet done','Campaign source tag should be visible','Nicole owns this lead until it moves forward'], unlocks:['Qualification call to screen motivation','MIST screening begins','If qualified: moves to Priority or Redzones'], skip:'Lead sits uncalled. Missed response = dead opportunity within hours.' },
  'leads-redzones': { name:'Redzones', pipe:'1) Leads Pipeline', means:['Lead has a reason to move quickly — distress, estate, divorce, vacancy','Flagged for elevated priority','Should not sit here more than 24 hours'], unlocks:['Accelerated outreach cadence','Potential skip to appointment sooner','Team awareness of motivated seller'], skip:'High-motivation seller treated like a cold lead. They sign with someone else.' },
  'leads-priority': { name:'Priority Top 20%', pipe:'1) Leads Pipeline', means:['Top-tier lead based on motivation score','Has been pre-qualified — ready for appointment','Highest probability of converting'], unlocks:['Direct handoff to closer pipeline','Gets dedicated follow-up','Appointment booking triggered'], skip:'Best leads treated like average ones. Missed revenue.' },
  'leads-followup': { name:'Follow Up', pipe:'1) Leads Pipeline', means:['Lead contacted but needs nurturing','Automated or manual sequence in play','Not dead — still has potential'], unlocks:['30/60/90-day drip keeps lead warm','Returns to Priority if seller re-engages'], skip:'Warm leads go cold. Paid marketing dollars wasted.' },
  'leads-handoff': { name:'Closer Pipeline Handoff', pipe:'1) Leads to Closer', means:['Lead has appointment booked and confirmed','Lead Management job is done','Stage change signals Acquisitions'], unlocks:['Closer sees the appointment','Lead Management stops outreach','Pre-appointment research begins'], skip:'CRITICAL. Nicole may keep calling someone Joshua is meeting with. Trust breaks down.' },
  'leads-not-md': { name:'Not MD Lead', pipe:'1) Leads Pipeline', means:['Property outside Maryland','Lead will not convert for IHT'], unlocks:['Frees pipeline of unworkable leads','Improves conversion rate accuracy'], skip:'Out-of-market leads pollute your pipeline metrics.' },
  'leads-ai-queue': { name:'AI Follow Up Queue', pipe:'1) Leads Pipeline', means:['Lead routed to AI follow-up automation','Human outreach exhausted'], unlocks:['Continuous contact without manual labor','Re-engagement if seller responds'], skip:'AI sequence never runs. Lead goes completely cold.' },
  'leads-ai-review': { name:'AI Review', pipe:'1) Leads Pipeline', means:['AI flagged this lead for human review','Possible re-engagement signal'], unlocks:['Human takes over at the right moment','Re-qualifies with fresh context'], skip:'AI flags go unread. Seller responds and waits 3 days.' },
  'josh-preoffer': { name:'Pre-offer', pipe:'3) Josh the Closer', means:['Appointment completed — property walked','Comps run, repair estimate made','Offer not yet presented'], unlocks:['Final offer calculation','Appointment notes documented'], skip:'Deal sits in limbo. No follow-up task created.' },
  'josh-noreach': { name:'Cannot Confirm/Reach', pipe:'3) Josh the Closer', means:['Seller is now unresponsive','Could not confirm appointment','Risk of no-show'], unlocks:['Re-engagement attempt','Return to Leads if unresponsive after 3 attempts'], skip:'Agent drives to an appointment that will not happen.' },
  'josh-aptsched': { name:'Appointment Scheduled', pipe:'3) Josh the Closer', means:['Date and time confirmed','Property address verified','Materials prepared'], unlocks:['Pre-appointment SDAT research','Preliminary ARV and repair estimate'], skip:'Agent walks in blind — no comps, no research.' },
  'josh-offered': { name:'Offered', pipe:'3) Josh the Closer', means:['Formal offer presented','Seller is considering','Active follow-up window open'], unlocks:['24-hour follow-up task auto-set','Credibility packet reference during follow-up'], skip:'Seller has offer with no follow-up. Signs with next caller.' },
  'josh-1ydline': { name:'1 YD LINE', pipe:'3) Josh the Closer', means:['Seller very close to signing','Needs personal attention — not automation'], unlocks:['Escalated follow-up: call same day','Potential same-day close'], skip:'Hot deal goes cold because someone waited 48 hours.' },
  'josh-ltfu': { name:'LTFU', pipe:'3) Josh the Closer', means:['Seller said no or not yet — but relationship warm','Timeline 3 to 12 months'], unlocks:['Long-term nurture sequence','Quarterly check-in reminder'], skip:'Warm no treated as permanent no. Seller calls someone else.' },
  'josh-won': { name:'WON! Contract Signed', pipe:'3) Josh the Closer', means:['Purchase agreement signed','Drive folder must be created NOW','Drive link must be in GHL'], unlocks:['TC pipeline: New Deal! triggered','Dispositions begins listing prep','Clock starts on all deadlines'], skip:'MOST EXPENSIVE SKIP. TC does not know a contract exists. Deal lost.' },
  'mike-aptsched': { name:'Appointment Scheduled', pipe:'2) Mike the Closer', means:['Appointment confirmed','Pre-appointment research should begin','Lead Management has handed off'], unlocks:['Mike runs preliminary comps','Credibility packet prepared'], skip:'Mike shows up unprepared.' },
  'mike-offermade': { name:'Offer Made/Followup', pipe:'2) Mike the Closer', means:['Offer presented — awaiting decision','Follow-up cadence should begin within 24 hours'], unlocks:['Follow-up call task set','Objection scripts referenced'], skip:'No follow-up happens. Seller assumes Mike moved on.' },
  'mike-1ydline': { name:'1 YD LINE', pipe:'2) Mike the Closer', means:['Seller on verge of signing','Mike needs to call today'], unlocks:['Immediate personal call','Possible same-day close'], skip:'Hot deal goes cold in 24 hours.' },
  'mike-lostoffer': { name:'Lost Offer', pipe:'2) Mike the Closer', means:['Seller declined or went with someone else','Deal is over for now'], unlocks:['Accurate close-rate reporting','Reason data informs training'], skip:'No reason tagged. Same mistakes repeat.' },
  'tc-newdeal': { name:'New Deal!', pipe:'5) Transaction Coordination', means:['Signed A-B contract received — TC activated','Drive folder link should already be in GHL'], unlocks:['Title search ordered within 24 hours','All critical dates calendared','Dispositions also activated'], skip:'TC never knows a contract exists. Title not ordered. Deal collapses.' },
  'tc-premark': { name:'Pre-Marketing / New File', pipe:'5) Transaction Coordination', means:['TC has the file — Drive folder confirmed','Marketing materials being assembled','Title search in progress'], unlocks:['Dispositions can begin VIP blast prep','TC tracks inspection period'], skip:'Deal sits with no action. Marketing does not start.' },
  'tc-vip': { name:'Marketing Phase 1 (VIP)', pipe:'5) Transaction Coordination', means:['VIP buyer blast sent','24-48 hour exclusivity'], unlocks:['Fast-close VIP buyers can submit offers','Creates urgency'], skip:'VIP buyers see deal publicly posted first. Lose best buyers.' },
  'tc-allbuyers': { name:'Marketing Phase 2 (All Buyers)', pipe:'5) Transaction Coordination', means:['Full buyer list blast sent','Maximum exposure'], unlocks:['Competitive offer environment','Backup buyers identified'], skip:'Too small an audience. Fewer offers.' },
  'tc-retrade': { name:'Marketing Phase 3 (Retrade)', pipe:'5) Transaction Coordination', means:['Price adjustment — deal re-launched','Primary buyer fell through','Urgency critical'], unlocks:['Fresh blast at new price','New offer deadline'], skip:'No one re-markets. Contract expires.' },
  'tc-docusign': { name:'Ready for DocuSign B-C', pipe:'5) Transaction Coordination', means:['Buyer selected — assignment agreement ready','Waiting on buyer signature'], unlocks:['Once signed: moves to B-C Assigned','EMD collection confirmed'], skip:'DocuSign sits unsent. Buyer cools off.' },
  'tc-bcassigned': { name:'B-C Assigned', pipe:'5) Transaction Coordination', means:['Assignment agreement signed','EMD collected and in escrow','Both A-B and B-C fully executed'], unlocks:['Closing date confirmed','All parties receive instructions'], skip:'BC assigned but closing never scheduled.' },
  'tc-extension': { name:'Extension Needed', pipe:'5) TC — Closing', means:['Closing cannot happen on original date','Reason documented','Seller consent required'], unlocks:['Formal extension addendum drafted','New closing date negotiated'], skip:'Extension assumed but not documented. Seller thinks deal is dead.' },
  'tc-closingsched': { name:'Closing Scheduled', pipe:'5) TC — Closing', means:['Date, time, location confirmed','All docs sent 48 hours in advance'], unlocks:['No surprises on closing day','Parties can review docs'], skip:'Parties show up with wrong IDs or missing wire info.' },
  'tc-atrisk': { name:'AT RISK', pipe:'5) TC — Closing', means:['Critical problem: open lien, title defect, buyer failure','Deal may not close','Immediate escalation to Ashley required'], unlocks:['Ashley and Acquisitions agent looped in','Remediation options explored'], skip:'Issue known but not escalated. Contract expires.' },
  'tc-closed': { name:'Closed — Dispo Complete', pipe:'5) TC — Closing', means:['Both A-B and B-C funded and recorded','Assignment fee received','Deal officially complete'], unlocks:['GHL stage moved to Closed','Revenue logged','Win posted to #wins'], skip:'Deal shows as still open. Revenue not captured.' },
  'tc-impactbuying': { name:'IMPACT Buying', pipe:'5) TC — Closing', means:['IHT acquiring for own portfolio','Different process: IHT is the end buyer'], unlocks:['Internal buy-and-hold process begins','Different financing tracking'], skip:'Treated like a standard wholesale. Wrong process.' },
  'tc-shortsale': { name:'Active Short Sale', pipe:'5) TC — Closing', means:['Seller owes more than property is worth','Bank approval required','Extended timeline: 3 to 6 months'], unlocks:['Short sale packet submitted to lender','Regular lender follow-up cadence'], skip:'Wrong timeline expectations. Buyer walks.' },
  'dispo-general': { name:'General / Prospective Buyers', pipe:'6) Dispo: Buyer Marketing', means:['New buyer — not yet verified','Receives broad blast only'], unlocks:['Added to general email list','Buy box documented'], skip:'Buyer list never gets organized.' },
  'dispo-priority': { name:'Priority', pipe:'6) Dispo: Buyer Marketing', means:['Verified funds, clear buy box','Active — buying in 1-3 months'], unlocks:['Targeted deal alerts','Faster response rate'], skip:'Priority buyers treated like general. They leave.' },
  'dispo-prioritycomplete': { name:'Priority Complete', pipe:'6) Dispo: Buyer Marketing', means:['Priority buyer completed a transaction','Track record established'], unlocks:['Natural path to VIP','Testimonial opportunity'], skip:'Completed buyers fall back into general pile.' },
  'dispo-vip': { name:'VIP', pipe:'6) Dispo: Buyer Marketing', means:['Top-tier buyer — proven closer','Gets first look on every deal'], unlocks:['24-48 hour exclusivity window','Direct call on hot deals'], skip:'VIP buyers find out from general blast. They stop prioritizing IHT.' },
  'dispo-commvip': { name:'Community VIP', pipe:'6) Dispo: Buyer Marketing', means:['Active in broader REI community','Sends referrals and co-wholesale deals'], unlocks:['Community-level deal sharing','JV opportunity identification'], skip:'Community relationships treated as low-priority. Referral pipeline dries up.' },
  'dispo-offerreceived': { name:'Offer Received', pipe:'6) Dispo: Buyer Marketing', means:['Formal offer submitted','Being evaluated against other offers'], unlocks:['Offer matrix scoring','Counter or acceptance within 24 hours'], skip:'Offer sits unreviewed. Best buyer withdraws.' },
  'dispo-dead': { name:'Dead Buyer / Black Listed', pipe:'6) Dispo: Buyer Marketing', means:['Buyer tied up a deal and could not close','Never receive alerts again'], unlocks:['Protects team from repeat bad actors','Keeps list clean'], skip:'Bad buyer gets another deal. Same failure repeats.' },
  'dispo-jv': { name:'JV Partners', pipe:'6) Dispo: Buyer Marketing', means:['Joint venture partner','Different relationship than standard buyer'], unlocks:['Deal flow from their network','Capital partners for double-close'], skip:'JV relationships managed informally. Disputes arise.' }
};

function pcDetail(id) {
  var d = PC_DATA[id];
  if (!d) return;
  document.querySelectorAll('.pc-stage').forEach(function(el) { el.classList.remove('pc-active'); });
  event.currentTarget.classList.add('pc-active');
  var meansHTML = d.means.map(function(m) { return '<li>' + m + '</li>'; }).join('');
  var unlocksHTML = d.unlocks.map(function(u) { return '<li>' + u + '</li>'; }).join('');
  document.getElementById('pc-detail').innerHTML =
    '<div class="pc-detail-inner">' +
      '<div class="pc-detail-col">' +
        '<div class="pc-detail-title">' + d.name + '</div>' +
        '<div class="pc-detail-pipe">' + d.pipe + '</div>' +
        '<h4>What This Stage Means</h4>' +
        '<ul>' + meansHTML + '</ul>' +
      '</div>' +
      '<div class="pc-detail-col">' +
        '<h4>What It Unlocks</h4>' +
        '<ul>' + unlocksHTML + '</ul>' +
      '</div>' +
      '<div class="pc-detail-col">' +
        '<h4>If This Stage Is Skipped</h4>' +
        '<div class="pc-skip-box"><strong>\u26a0 Consequence</strong><br>' + d.skip + '</div>' +
      '</div>' +
    '</div>';
}

// ══════════════════════════════════════════════════════════
// APP STATE & RENDER
// ══════════════════════════════════════════════════════════
var currentPage = null;

function init() { renderSidebar(); renderHome(); }

function renderSidebar() {
  var sb = document.getElementById('sidebar');
  var html = '';
  SECTIONS.forEach(function(sec) {
    html += '<div class="sidebar-section"><div class="sidebar-section-header" onclick="toggleSection(\'' + sec.id + '\', this)"><div class="dot" style="background:' + sec.color + '"></div><span>' + sec.label + '</span><span class="arrow">\u25be</span></div><div class="sidebar-pages" id="sec-pages-' + sec.id + '">';
    sec.pages.forEach(function(p) {
      html += '<a class="sidebar-page ' + (currentPage === p.id ? 'active' : '') + '" onclick="showPage(\'' + sec.id + '\',\'' + p.id + '\')">' + p.title + '</a>';
    });
    html += '</div></div>';
  });
  sb.innerHTML = html;
}

function toggleSection(secId, el) {
  var pages = document.getElementById('sec-pages-' + secId);
  pages.classList.toggle('hidden');
  el.classList.toggle('collapsed');
}

function renderHome() {
  currentPage = null;
  var area = document.getElementById('content-area');
  var html = '<div class="home-hero"><h1>Impact Home Team<br><span>Operations Manual</span></h1><p>The complete guide to how we operate \u2014 from brand standards to closing the deal.</p></div><div class="home-grid">';
  SECTIONS.forEach(function(sec) {
    html += '<div class="home-card" style="border-top-color:' + sec.color + '" onclick="showPage(\'' + sec.id + '\',\'' + sec.pages[0].id + '\')"><div class="dept-dot" style="background:' + sec.color + '"></div><h3>' + sec.label + '</h3><p>' + sec.pages[0].dept + '</p><div class="pages-count">' + sec.pages.length + ' page' + (sec.pages.length !== 1 ? 's' : '') + '</div></div>';
  });
  html += '</div>';
  area.innerHTML = html;
}

function showPage(secId, pageId) {
  var sec = SECTIONS.find(function(s) { return s.id === secId; });
  var page = sec.pages.find(function(p) { return p.id === pageId; });
  currentPage = pageId;
  document.querySelectorAll('.sidebar-page').forEach(function(el) { el.classList.remove('active'); });
  document.querySelectorAll('.sidebar-page').forEach(function(el) {
    if (el.getAttribute('onclick') && el.getAttribute('onclick').indexOf(pageId) !== -1) el.classList.add('active');
  });
  var area = document.getElementById('content-area');
  if (pageId === 'training-home') { area.innerHTML = renderTrainingHome(); window.scrollTo({top:0,behavior:'smooth'}); return; }
  if (page.content && page.content.indexOf('__QUIZ__') === 0) {
    var quizKey = page.content.replace('__QUIZ__', '');
    area.innerHTML = renderQuizPage(quizKey, page.title, sec.color);
    window.scrollTo({top:0,behavior:'smooth'}); return;
  }
  area.innerHTML = '<div class="page-header"><div class="page-dept-tag" style="background:' + sec.color + '22;color:' + sec.color + '">' + page.dept + '</div><h1>' + page.title + '</h1><div class="page-meta"><span><strong>Owner:</strong> ' + page.owner + '</span><span><strong>Department:</strong> ' + page.dept + '</span></div></div><div class="prose">' + page.content + '</div>';
  window.scrollTo({top:0,behavior:'smooth'});
}

// ── TRAINING HOME ──
function renderTrainingHome() {
  var quizList = [
    { key:'role-lead-manager', label:'Lead Manager Entry', dept:'Lead Management', pageId:'quiz-role-lead-manager' },
    { key:'role-acquisitions', label:'Acquisitions Entry', dept:'Acquisitions', pageId:'quiz-role-acquisitions' },
    { key:'role-dispositions', label:'Dispositions Entry', dept:'Dispositions', pageId:'quiz-role-dispositions' },
    { key:'role-tc', label:'TC Entry', dept:'Transaction Coordination', pageId:'quiz-role-tc' },
    { key:'dept-lead-management', label:'Lead Management Deep Dive', dept:'Lead Management', pageId:'quiz-dept-lead-management' },
    { key:'dept-acquisitions', label:'Acquisitions Deep Dive', dept:'Acquisitions', pageId:'quiz-dept-acquisitions' },
    { key:'dept-dispositions', label:'Dispositions Deep Dive', dept:'Dispositions', pageId:'quiz-dept-dispositions' },
    { key:'dept-tc', label:'TC Deep Dive', dept:'Transaction Coordination', pageId:'quiz-dept-tc' },
    { key:'dept-deal-lifecycle', label:'Deal Lifecycle', dept:'All Departments', pageId:'quiz-dept-deal-lifecycle' },
    { key:'dept-tools-systems', label:'Tools & Systems', dept:'All Departments', pageId:'quiz-dept-tools-systems' }
  ];
  var deptColors = {'Lead Management':'#2563EB','Acquisitions':'#16a34a','Dispositions':'#E3A728','Transaction Coordination':'#7C3AED','All Departments':'#A52325'};
  var cards = quizList.map(function(q) {
    var qz = QUIZZES[q.key]; var n = qz ? qz.questions.length : 0; var pass = qz ? Math.ceil(n*0.8) : 0;
    var c = deptColors[q.dept] || '#555';
    return '<div class="tq-card" onclick="showPage(\'training\',\'' + q.pageId + '\')" style="border-top:3px solid ' + c + ';"><div class="tq-card-dept" style="color:' + c + ';">' + q.dept + '</div><div class="tq-card-title">' + q.label + '</div><div class="tq-card-meta">' + n + ' questions \u00b7 Pass: ' + pass + '/' + n + '</div><div class="tq-card-cta">Start Quiz \u2192</div></div>';
  }).join('');
  return '<div class="page-header"><div class="page-dept-tag" style="background:#7C3AED22;color:#7C3AED;">All Departments</div><h1>Training Portal</h1><div class="page-meta"><span><strong>Owner:</strong> Ashley Hines</span><span><strong>Pass threshold:</strong> 80%</span></div></div><div class="prose"><div style="background:#F5F3FF;border:1px solid #DDD6FE;border-radius:8px;padding:14px 18px;margin-bottom:24px;"><strong style="color:#5B21B6;">\ud83d\udccb Instructions</strong><p style="margin:6px 0 0;font-size:13px;color:#4C1D95;">Complete the quizzes required for your role. You must score 80% or higher to pass.</p></div><div class="tq-grid">' + cards + '</div></div>';
}

// ── QUIZ ENGINE ──
var quizState = {};

function renderQuizPage(key, title, color) {
  var qz = QUIZZES[key]; if (!qz) return '<p>Quiz not found.</p>';
  quizState[key] = quizState[key] || { current:0, answers:{}, submitted:false, name:'' };
  var st = quizState[key];
  if (st.submitted) return renderQuizResults(key, color);
  var q = qz.questions[st.current]; var total = qz.questions.length;
  var pct = Math.round((st.current/total)*100);
  var choices = q.c.map(function(ch,i) {
    var sel = st.answers[st.current] === i;
    return '<div class="qz-choice ' + (sel?'selected':'') + '" onclick="quizSelect(\'' + key + '\',' + i + ')"><div class="qz-choice-letter">' + ['A','B','C','D'][i] + '</div><div class="qz-choice-text">' + ch + '</div></div>';
  }).join('');
  var answered = st.answers[st.current] !== undefined;
  var isLast = st.current === total-1;
  var nameField = st.current === 0 ? '<div style="margin-bottom:20px;"><label style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--steel);display:block;margin-bottom:6px;">Your Name (for results)</label><input id="qz-name-' + key + '" class="adm-input" style="max-width:280px;" placeholder="First Last" value="' + (st.name||'') + '" oninput="quizState[\'' + key + '\'].name=this.value"></div>' : '';
  return '<div class="page-header"><div class="page-dept-tag" style="background:' + color + '22;color:' + color + ';">Quiz</div><h1>' + title + '</h1><div class="page-meta"><span><strong>Question:</strong> ' + (st.current+1) + ' of ' + total + '</span><span><strong>Pass:</strong> ' + Math.ceil(total*0.8) + '/' + total + ' correct</span></div></div><div class="prose"><div class="qz-progress-wrap"><div class="qz-progress-bar"><div class="qz-progress-fill" style="width:' + pct + '%;background:' + color + ';"></div></div><span class="qz-progress-label">' + pct + '% complete</span></div>' + nameField + '<div class="qz-card"><div class="qz-q-num" style="color:' + color + ';">Question ' + (st.current+1) + '</div><div class="qz-q-text">' + q.q + '</div><div class="qz-choices">' + choices + '</div></div><div class="qz-nav">' + (st.current > 0 ? '<button class="qz-btn qz-btn-ghost" onclick="quizNav(\'' + key + '\',-1)">\u2190 Back</button>' : '<span></span>') + (isLast ? '<button class="qz-btn qz-btn-submit" ' + (!answered?'disabled':'') + ' onclick="quizSubmit(\'' + key + '\')">Submit Quiz</button>' : '<button class="qz-btn qz-btn-next" ' + (!answered?'disabled':'') + ' onclick="quizNav(\'' + key + '\',1)">Next \u2192</button>') + '</div></div>';
}

function quizSelect(key, idx) {
  var st = quizState[key]; if (!st || st.submitted) return;
  st.answers[st.current] = idx;
  var sec = SECTIONS.find(function(s){return s.id==='training';});
  var page = sec.pages.find(function(p){return p.content==='__QUIZ__'+key;});
  if (page) showPage('training', page.id);
}

function quizNav(key, dir) {
  var st = quizState[key]; if (!st) return;
  st.current = Math.max(0, Math.min(QUIZZES[key].questions.length-1, st.current+dir));
  var sec = SECTIONS.find(function(s){return s.id==='training';});
  var page = sec.pages.find(function(p){return p.content==='__QUIZ__'+key;});
  if (page) showPage('training', page.id);
}

function quizSubmit(key) {
  var st = quizState[key]; var qz = QUIZZES[key]; if (!st || !qz) return;
  st.submitted = true;
  var correct = 0;
  qz.questions.forEach(function(q,i) { if (st.answers[i] === q.a) correct++; });
  st.score = correct; st.total = qz.questions.length;
  st.pass = correct >= Math.ceil(qz.questions.length * 0.8);
  var payload = { name: st.name||'Anonymous', quiz: qz.title, score: correct, total: qz.questions.length, passed: st.pass, pct: Math.round((correct/qz.questions.length)*100), timestamp: new Date().toISOString() };
  var WEBHOOK = 'https://script.google.com/macros/s/AKfycbxVBaVCKmXyJkNDxMgO6KoiGAVLLtDnjIcQMZ3vy6OEfDaP3bSmME3zN3bV3VbXuXA/exec';
  fetch(WEBHOOK, { method:'POST', mode:'no-cors', headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload) }).catch(function(){});
  var sec = SECTIONS.find(function(s){return s.id==='training';});
  var page = sec.pages.find(function(p){return p.content==='__QUIZ__'+key;});
  if (page) showPage('training', page.id);
}

function renderQuizResults(key, color) {
  var qz = QUIZZES[key]; var st = quizState[key];
  var pct = Math.round((st.score/st.total)*100); var pass = st.pass;
  var review = qz.questions.map(function(q,i) {
    var userAns = st.answers[i]; var correct = userAns === q.a;
    return '<div class="qz-review-item ' + (correct?'correct':'wrong') + '"><div class="qz-review-q">' + (i+1) + '. ' + q.q + '</div><div class="qz-review-row"><span class="qz-review-badge ' + (correct?'badge-correct':'badge-wrong') + '">' + (correct?'\u2713 Correct':'\u2717 Wrong') + '</span>' + (!correct ? '<span class="qz-review-yours">Your answer: ' + (q.c[userAns]||'skipped') + '</span>' : '') + '<span class="qz-review-correct">Correct: ' + q.c[q.a] + '</span></div>' + (!correct ? '<div class="qz-review-exp">' + (q.e||'') + '</div>' : '') + '</div>';
  }).join('');
  return '<div class="page-header"><div class="page-dept-tag" style="background:' + (pass?'#dcfce7':'#fee2e2') + ';color:' + (pass?'#16a34a':'#dc2626') + ';">' + (pass?'\u2713 PASSED':'\u2717 NOT PASSED') + '</div><h1>' + qz.title + '</h1><div class="page-meta"><span><strong>Score:</strong> ' + st.score + '/' + st.total + ' (' + pct + '%)</span><span><strong>Required:</strong> ' + Math.ceil(st.total*0.8) + '/' + st.total + '</span></div></div><div class="prose"><div class="qz-result-hero" style="border-color:' + (pass?'#16a34a':'#dc2626') + ';"><div class="qz-result-pct" style="color:' + (pass?'#16a34a':'#dc2626') + ';">' + pct + '%</div><div class="qz-result-msg">' + (pass?'\ud83c\udf89 Great work! You passed.':'Keep studying \u2014 review the answers below and retake when ready.') + '</div><div style="display:flex;gap:10px;justify-content:center;margin-top:16px;"><button class="qz-btn" style="background:#7C3AED;color:#fff;" onclick="showPage(\'training\',\'training-home\')">\u2190 All Quizzes</button><button class="qz-btn qz-btn-ghost" onclick="quizRetake(\'' + key + '\')">Retake Quiz</button></div></div><h3 style="margin:24px 0 12px;font-size:15px;">Answer Review</h3><div class="qz-review">' + review + '</div></div>';
}

function quizRetake(key) {
  quizState[key] = { current:0, answers:{}, submitted:false, name: quizState[key]?.name || '' };
  var sec = SECTIONS.find(function(s){return s.id==='training';});
  var page = sec.pages.find(function(p){return p.content==='__QUIZ__'+key;});
  if (page) showPage('training', page.id);
}

function handleSearch(val) {
  if (!val.trim()) { renderSidebar(); return; }
  var q = val.toLowerCase(); var sb = document.getElementById('sidebar');
  var html = ''; var found = 0;
  SECTIONS.forEach(function(sec) {
    sec.pages.forEach(function(p) {
      var text = (p.title + p.content).toLowerCase();
      if (text.indexOf(q) !== -1) {
        if (found === 0) html += '<div style="padding:12px 18px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:var(--steel);">Search Results</div>';
        html += '<a class="sidebar-page" onclick="showPage(\'' + sec.id + '\',\'' + p.id + '\')">' + p.title + '</a>';
        found++;
      }
    });
  });
  if (!found) html = '<div style="padding:12px 18px;font-size:13px;color:var(--steel);">No results found</div>';
  sb.innerHTML = html;
}

// ══════════════════════════════════════════════════════════
// ADMIN PANEL
// ══════════════════════════════════════════════════════════
var ADM_PASSWORD = 'iht2026admin';
var admAuthenticated = false;
var admCurrentPanel = 'content';
var admCurrentPage = null;
var admCurrentQuiz = 'role-lead-manager';
var admDirtyPages = {};
var admDirtyQuizzes = false;

function openAdminLogin() {
  document.getElementById('admin-overlay').classList.add('active');
  document.getElementById('adm-login-screen').style.display = '';
  document.getElementById('adm-main-screen').style.display = 'none';
  setTimeout(function() { document.getElementById('adm-pw-input').focus(); }, 100);
}

function closeAdmin() {
  if (admDirtyPages && Object.keys(admDirtyPages).length > 0 || admDirtyQuizzes) {
    if (!confirm('You have unsaved changes. Close anyway?')) return;
  }
  document.getElementById('admin-overlay').classList.remove('active');
  document.getElementById('adm-pw-input').value = '';
  admAuthenticated = false;
}

function admLogin() {
  var pw = document.getElementById('adm-pw-input').value;
  if (pw === ADM_PASSWORD) {
    admAuthenticated = true;
    document.getElementById('adm-login-screen').style.display = 'none';
    document.getElementById('adm-main-screen').style.display = 'flex';
    admNav('content');
  } else {
    document.getElementById('adm-login-error').style.display = 'block';
    document.getElementById('adm-pw-input').value = '';
    document.getElementById('adm-pw-input').focus();
  }
}

function admNav(panel) {
  admCurrentPanel = panel;
  document.querySelectorAll('.adm-nav-item').forEach(function(el) { el.classList.remove('active'); });
  var navEl = document.getElementById('adm-nav-' + panel);
  if (navEl) navEl.classList.add('active');
  var area = document.getElementById('adm-content-area');
  if (panel === 'content') area.innerHTML = '<div class="adm-card"><div class="adm-card-head"><h3>Page Content Editor</h3></div><div class="adm-card-body"><p>Select a page to edit from the dropdown, modify its HTML content, and save. Changes are stored in memory \u2014 use Export to make them permanent.</p></div></div>';
  else if (panel === 'quizzes') area.innerHTML = '<div class="adm-card"><div class="adm-card-head"><h3>Quiz Question Editor</h3></div><div class="adm-card-body"><p>Edit quiz questions from the Quiz Manager. Changes sync to export.</p></div></div>';
  else if (panel === 'aigen') area.innerHTML = '<div class="adm-card"><div class="adm-card-head"><h3>AI Question Generator</h3></div><div class="adm-card-body"><p>Paste SOP text to generate quiz questions with Claude.</p></div></div>';
  else if (panel === 'export') area.innerHTML = '<div class="adm-card"><div class="adm-card-head"><h3>Export &amp; Sync</h3></div><div class="adm-card-body"><p>Copy updated content JSON to sync with source files.</p></div></div>';
}

function admSaveAll() {
  Object.keys(admDirtyPages).forEach(function(pid) {
    SECTIONS.forEach(function(sec) {
      sec.pages.forEach(function(p) { if (p.id === pid) p.content = admDirtyPages[pid]; });
    });
  });
  admDirtyPages = {}; admDirtyQuizzes = false;
  admToast('All changes saved to memory.', 'success');
}

function admToast(msg, type) {
  var t = document.getElementById('adm-toast'); if (!t) return;
  t.textContent = msg;
  t.className = 'adm-toast show ' + (type || '');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(function() { t.className = 'adm-toast'; }, 3000);
}

init();
