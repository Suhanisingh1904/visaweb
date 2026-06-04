// ── COUNTRY DATA ──────────────────────────────────────────

const countries = [
  { code: 'US', name: 'United States',    flag: '🇺🇸', region: 'Americas',    visaType: 'visa-required',   badge: 'Visa Required',   fee: '$160',        duration: 'Up to 180 days', processing: '3–5 weeks',  docs: ['Valid passport (6+ months)', 'DS-160 form', 'Bank statements', 'Passport-size photos', 'Invitation letter if applicable'] },
  { code: 'GB', name: 'United Kingdom',   flag: '🇬🇧', region: 'Europe',      visaType: 'visa-required',   badge: 'Visa Required',   fee: '£115',        duration: 'Up to 180 days', processing: '3 weeks',    docs: ['Valid passport', 'UK visa application', 'Financial proof', 'Travel itinerary', 'Accommodation proof'] },
  { code: 'FR', name: 'France',           flag: '🇫🇷', region: 'Europe',      visaType: 'visa-required',   badge: 'Schengen Visa',   fee: '€80',         duration: 'Up to 90 days',  processing: '2–3 weeks',  docs: ['Valid passport', 'Schengen form', 'Travel insurance', 'Bank statements', 'Hotel bookings'] },
  { code: 'DE', name: 'Germany',          flag: '🇩🇪', region: 'Europe',      visaType: 'visa-required',   badge: 'Schengen Visa',   fee: '€80',         duration: 'Up to 90 days',  processing: '10–15 days', docs: ['Valid passport', 'Application form', 'Travel insurance', 'Bank statements', 'Employment letter'] },
  { code: 'IT', name: 'Italy',            flag: '🇮🇹', region: 'Europe',      visaType: 'visa-required',   badge: 'Schengen Visa',   fee: '€80',         duration: 'Up to 90 days',  processing: '2–3 weeks',  docs: ['Valid passport', 'Schengen form', 'Hotel bookings', 'Bank statements', 'Travel insurance'] },
  { code: 'ES', name: 'Spain',            flag: '🇪🇸', region: 'Europe',      visaType: 'visa-required',   badge: 'Schengen Visa',   fee: '€80',         duration: 'Up to 90 days',  processing: '2–3 weeks',  docs: ['Valid passport', 'Schengen form', 'Travel insurance', 'Proof of funds', 'Return ticket'] },
  { code: 'GR', name: 'Greece',           flag: '🇬🇷', region: 'Europe',      visaType: 'visa-required',   badge: 'Schengen Visa',   fee: '€80',         duration: 'Up to 90 days',  processing: '2–3 weeks',  docs: ['Valid passport', 'Schengen form', 'Travel insurance', 'Bank statements', 'Hotel bookings'] },
  { code: 'CH', name: 'Switzerland',      flag: '🇨🇭', region: 'Europe',      visaType: 'visa-required',   badge: 'Schengen Visa',   fee: '€80',         duration: 'Up to 90 days',  processing: '2–3 weeks',  docs: ['Valid passport', 'Schengen form', 'Travel insurance', 'Proof of funds', 'Accommodation proof'] },
  { code: 'TH', name: 'Thailand',         flag: '🇹🇭', region: 'Asia',        visaType: 'visa-on-arrival', badge: 'Visa on Arrival', fee: '฿2000',       duration: '30 days',        processing: 'On arrival', docs: ['Valid passport (6+ months)', 'Return flight ticket', 'Proof of funds', 'Passport photo', 'Arrival card'] },
  { code: 'JP', name: 'Japan',            flag: '🇯🇵', region: 'Asia',        visaType: 'visa-required',   badge: 'Visa Required',   fee: '¥3,000',      duration: 'Up to 90 days',  processing: '5–7 days',   docs: ['Valid passport', 'Visa application form', 'Itinerary', 'Bank statements', 'Sponsor letter if any'] },
  { code: 'SG', name: 'Singapore',        flag: '🇸🇬', region: 'Asia',        visaType: 'visa-e-visa',     badge: 'e-Visa',          fee: 'SGD 30',      duration: '30 days',        processing: '3–5 days',   docs: ['Valid passport', 'Online application', 'Travel itinerary', 'Accommodation proof', 'Return ticket'] },
  { code: 'KR', name: 'South Korea',      flag: '🇰🇷', region: 'Asia',        visaType: 'visa-required',   badge: 'Visa Required',   fee: '$45',         duration: 'Up to 90 days',  processing: '5–7 days',   docs: ['Valid passport', 'Application form', 'Bank statements', 'Employment letter', 'Itinerary'] },
  { code: 'CN', name: 'China',            flag: '🇨🇳', region: 'Asia',        visaType: 'visa-required',   badge: 'Visa Required',   fee: '$140',        duration: 'Up to 90 days',  processing: '4–7 days',   docs: ['Valid passport', 'Visa application form', 'Passport photo', 'Hotel booking', 'Return ticket'] },
  { code: 'NP', name: 'Nepal',            flag: '🇳🇵', region: 'Asia',        visaType: 'visa-on-arrival', badge: 'Visa on Arrival', fee: '$30–100',     duration: '15–90 days',     processing: 'On arrival', docs: ['Valid passport', 'Passport-size photo', 'USD cash for fee', 'Arrival form'] },
  { code: 'MV', name: 'Maldives',         flag: '🇲🇻', region: 'Asia',        visaType: 'visa-free',       badge: 'Visa Free',       fee: 'Free',        duration: '30 days',        processing: 'On arrival', docs: ['Valid passport (6+ months)', 'Return ticket', 'Hotel booking', 'Sufficient funds'] },
  { code: 'ID', name: 'Indonesia (Bali)', flag: '🇮🇩', region: 'Asia',        visaType: 'visa-on-arrival', badge: 'Visa on Arrival', fee: 'IDR 500,000', duration: '30 days',        processing: 'On arrival', docs: ['Valid passport (6+ months)', 'Return ticket', 'Cash for fee', 'Arrival form'] },
  { code: 'MY', name: 'Malaysia',         flag: '🇲🇾', region: 'Asia',        visaType: 'visa-free',       badge: 'Visa Free',       fee: 'Free',        duration: '30 days',        processing: 'On arrival', docs: ['Valid passport', 'Return ticket', 'Proof of funds', 'Accommodation details'] },
  { code: 'VN', name: 'Vietnam',          flag: '🇻🇳', region: 'Asia',        visaType: 'visa-e-visa',     badge: 'e-Visa',          fee: '$25',         duration: '90 days',        processing: '3 days',     docs: ['Valid passport (6+ months)', 'Online e-Visa', 'Passport photo', 'Return ticket'] },
  { code: 'AE', name: 'UAE (Dubai)',      flag: '🇦🇪', region: 'Middle East', visaType: 'visa-on-arrival', badge: 'Visa on Arrival', fee: 'Free',        duration: '14–30 days',     processing: 'On arrival', docs: ['Valid passport', 'Return ticket', 'Hotel reservation', 'Sufficient funds'] },
  { code: 'TR', name: 'Turkey',           flag: '🇹🇷', region: 'Middle East', visaType: 'visa-e-visa',     badge: 'e-Visa',          fee: '$50',         duration: '90 days',        processing: 'Online',     docs: ['Valid passport (6+ months)', 'Online e-Visa', 'Return ticket', 'Hotel booking'] },
  { code: 'SA', name: 'Saudi Arabia',     flag: '🇸🇦', region: 'Middle East', visaType: 'visa-e-visa',     badge: 'Tourist eVisa',   fee: 'SAR 300',     duration: '90 days',        processing: 'Online',     docs: ['Valid passport', 'Online application', 'Travel insurance', 'Return ticket'] },
  { code: 'CA', name: 'Canada',           flag: '🇨🇦', region: 'Americas',    visaType: 'visa-required',   badge: 'Visa Required',   fee: 'CAD 100',     duration: 'Up to 180 days', processing: '4–8 weeks',  docs: ['Valid passport', 'IMM 5257 form', 'Photographs', 'Financial documents', 'Purpose letter'] },
  { code: 'BR', name: 'Brazil',           flag: '🇧🇷', region: 'Americas',    visaType: 'visa-free',       badge: 'Visa Free',       fee: 'Free',        duration: '90 days',        processing: 'On arrival', docs: ['Valid passport', 'Return ticket', 'Proof of funds', 'Hotel booking'] },
  { code: 'MX', name: 'Mexico',           flag: '🇲🇽', region: 'Americas',    visaType: 'visa-free',       badge: 'Visa Free',       fee: 'Free',        duration: '180 days',       processing: 'On arrival', docs: ['Valid passport', 'Return ticket', 'Proof of funds', 'Accommodation'] },
  { code: 'AR', name: 'Argentina',        flag: '🇦🇷', region: 'Americas',    visaType: 'visa-free',       badge: 'Visa Free',       fee: 'Free',        duration: '90 days',        processing: 'On arrival', docs: ['Valid passport', 'Return ticket', 'Proof of funds'] },
  { code: 'AU', name: 'Australia',        flag: '🇦🇺', region: 'Oceania',     visaType: 'visa-e-visa',     badge: 'e-Visa (ETA)',    fee: 'AUD 20',      duration: 'Up to 90 days',  processing: '1–3 days',   docs: ['Valid passport', 'Online ETA', 'Return ticket', 'Sufficient funds'] },
  { code: 'NZ', name: 'New Zealand',      flag: '🇳🇿', region: 'Oceania',     visaType: 'visa-e-visa',     badge: 'NZeTA',           fee: 'NZD 23',      duration: '90 days',        processing: '72 hours',   docs: ['Valid passport', 'NZeTA online application', 'Return ticket', 'Funds proof'] },
  { code: 'ZA', name: 'South Africa',     flag: '🇿🇦', region: 'Africa',      visaType: 'visa-required',   badge: 'Visa Required',   fee: 'ZAR 425',     duration: '30 days',        processing: '1–2 weeks',  docs: ['Valid passport', 'Completed application', 'Bank statements', 'Return ticket', 'Yellow fever cert if applicable'] },
  { code: 'KE', name: 'Kenya',            flag: '🇰🇪', region: 'Africa',      visaType: 'visa-e-visa',     badge: 'e-Visa',          fee: '$51',         duration: '90 days',        processing: '3–5 days',   docs: ['Valid passport', 'Online e-Visa', 'Yellow fever certificate', 'Return ticket', 'Hotel booking'] },
  { code: 'EG', name: 'Egypt',            flag: '🇪🇬', region: 'Africa',      visaType: 'visa-on-arrival', badge: 'Visa on Arrival', fee: '$25',         duration: '30 days',        processing: 'On arrival', docs: ['Valid passport (6+ months)', 'USD cash for fee', 'Return ticket', 'Hotel booking'] },
  { code: 'MA', name: 'Morocco',          flag: '🇲🇦', region: 'Africa',      visaType: 'visa-free',       badge: 'Visa Free',       fee: 'Free',        duration: '90 days',        processing: 'On arrival', docs: ['Valid passport', 'Return ticket', 'Proof of funds', 'Accommodation details'] },
  { code: 'TZ', name: 'Tanzania',         flag: '🇹🇿', region: 'Africa',      visaType: 'visa-on-arrival', badge: 'Visa on Arrival', fee: '$50',         duration: '90 days',        processing: 'On arrival', docs: ['Valid passport', 'Passport photo', 'USD cash for fee', 'Yellow fever cert', 'Return ticket'] },
];

// ── VISA FEE DATA ──────────────────────────────────────────

const visaFees = {
  'US': { min: 160,    max: 160,    currency: 'USD', note: 'Non-refundable application fee' },
  'GB': { min: 115,    max: 115,    currency: 'GBP', note: 'Standard visitor visa fee' },
  'FR': { min: 80,     max: 80,     currency: 'EUR', note: 'Schengen short-stay visa' },
  'DE': { min: 80,     max: 80,     currency: 'EUR', note: 'Schengen short-stay visa' },
  'IT': { min: 80,     max: 80,     currency: 'EUR', note: 'Schengen short-stay visa' },
  'ES': { min: 80,     max: 80,     currency: 'EUR', note: 'Schengen short-stay visa' },
  'GR': { min: 80,     max: 80,     currency: 'EUR', note: 'Schengen short-stay visa' },
  'CH': { min: 80,     max: 80,     currency: 'EUR', note: 'Schengen short-stay visa' },
  'TH': { min: 2000,   max: 2000,   currency: 'THB', note: 'Paid in cash on arrival' },
  'JP': { min: 3000,   max: 3000,   currency: 'JPY', note: 'Single entry tourist visa' },
  'SG': { min: 30,     max: 30,     currency: 'SGD', note: 'e-Visa online application' },
  'KR': { min: 45,     max: 60,     currency: 'USD', note: 'Single / multiple entry' },
  'CN': { min: 140,    max: 185,    currency: 'USD', note: 'Single / double entry' },
  'NP': { min: 30,     max: 125,    currency: 'USD', note: '15 / 30 / 90 day options' },
  'MV': { min: 0,      max: 0,      currency: 'USD', note: 'Free visa on arrival' },
  'ID': { min: 500000, max: 500000, currency: 'IDR', note: 'Paid in cash on arrival' },
  'MY': { min: 0,      max: 0,      currency: 'USD', note: 'Free — visa not required' },
  'VN': { min: 25,     max: 25,     currency: 'USD', note: 'e-Visa online application' },
  'AE': { min: 0,      max: 0,      currency: 'USD', note: 'Free visa on arrival' },
  'TR': { min: 50,     max: 50,     currency: 'USD', note: 'e-Visa online application' },
  'SA': { min: 300,    max: 300,    currency: 'SAR', note: 'Tourist e-Visa (online)' },
  'CA': { min: 100,    max: 100,    currency: 'CAD', note: 'Temporary Resident Visa' },
  'BR': { min: 0,      max: 0,      currency: 'USD', note: 'Free — visa not required' },
  'MX': { min: 0,      max: 0,      currency: 'USD', note: 'Free — visa not required' },
  'AR': { min: 0,      max: 0,      currency: 'USD', note: 'Free — visa not required' },
  'AU': { min: 20,     max: 20,     currency: 'AUD', note: 'ETA online application' },
  'NZ': { min: 23,     max: 23,     currency: 'NZD', note: 'NZeTA online application' },
  'ZA': { min: 425,    max: 425,    currency: 'ZAR', note: 'Standard visitor visa' },
  'KE': { min: 51,     max: 51,     currency: 'USD', note: 'e-Visa online application' },
  'EG': { min: 25,     max: 25,     currency: 'USD', note: 'Paid in cash on arrival' },
  'MA': { min: 0,      max: 0,      currency: 'USD', note: 'Free — visa not required' },
  'TZ': { min: 50,     max: 100,    currency: 'USD', note: 'Single / multiple entry' },
};

// Approximate USD conversion rates
const toUSD = {
  USD: 1, GBP: 1.27, EUR: 1.08, THB: 0.028, JPY: 0.0067,
  SGD: 0.74, CAD: 0.73, AUD: 0.65, NZD: 0.60,
  SAR: 0.27, ZAR: 0.054, IDR: 0.000062
};

// ── ELIGIBILITY DATA ───────────────────────────────────────

const eligibilityDB = {
  'IN': {
    'US': { type: 'not-eligible', status: 'Visa Required',          desc: 'Indian passport holders require a B-1/B-2 tourist visa for the US. You must attend an interview at the US Embassy. Processing takes 3–6 weeks.',   tags: ['B1/B2 Visa', 'Embassy Interview', '$160 Fee', 'Valid up to 10 years'] },
    'GB': { type: 'not-eligible', status: 'Visa Required',          desc: 'A UK Standard Visitor Visa is required. Apply online at least 3 weeks before travel. Valid for 6 months.',                                           tags: ['Standard Visitor Visa', '£115 Fee', 'Online Application', '6 Month Validity'] },
    'FR': { type: 'not-eligible', status: 'Schengen Visa Required', desc: 'A Schengen visa is required to enter France. Apply at the French Embassy or Consulate.',                                                             tags: ['Schengen Type C', '€80 Fee', '90 days per 180 days', 'Travel Insurance Required'] },
    'DE': { type: 'not-eligible', status: 'Schengen Visa Required', desc: 'A Schengen visa is required to enter Germany. Apply at the German Embassy or Consulate.',                                                            tags: ['Schengen Type C', '€80 Fee', '10–15 Days Processing', 'Bank Statements Required'] },
    'GR': { type: 'not-eligible', status: 'Schengen Visa Required', desc: 'A Schengen visa is required to enter Greece. Apply at the Greek Embassy or Consulate.',                                                              tags: ['Schengen Type C', '€80 Fee', '90 days per 180 days', 'Travel Insurance Required'] },
    'CH': { type: 'not-eligible', status: 'Schengen Visa Required', desc: 'A Schengen visa is required to enter Switzerland. Apply at the Swiss Embassy or Consulate.',                                                         tags: ['Schengen Type C', '€80 Fee', '90 days per 180 days', 'Travel Insurance Required'] },
    'TH': { type: 'on-arrival',   status: 'Visa on Arrival',        desc: 'Indian passport holders get a Visa on Arrival in Thailand valid for 30 days. Fee is ฿2000 payable in cash at the airport.',                         tags: ['30 Days Stay', '฿2000 Fee', 'Airport Processing', 'Extendable for +30 days'] },
    'AE': { type: 'on-arrival',   status: 'Visa on Arrival — Free', desc: 'Indian passport holders receive a free Visa on Arrival in the UAE valid for 14 days (extendable to 30 days).',                                       tags: ['14–30 Days', 'Free', 'On Arrival', 'All UAE Airports'] },
    'NP': { type: 'eligible',     status: 'No Visa Required',       desc: 'Indian citizens do not require a visa to visit Nepal. You can stay with a valid Indian passport or voter ID card.',                                  tags: ['No Visa', 'Unlimited Stay', 'Indian Passport or Voter ID', 'Free Entry'] },
    'MV': { type: 'eligible',     status: 'Visa Free',              desc: 'Indian passport holders get a free 30-day visa on arrival in the Maldives. No prior application needed.',                                            tags: ['30 Days Free', 'No Application', 'On Arrival', 'Extendable'] },
    'SG': { type: 'not-eligible', status: 'Visa Required',          desc: 'Indian nationals need to apply for a Singapore Tourist e-Visa online. Processing takes 3–5 working days.',                                          tags: ['e-Visa Required', 'SGD 30 Fee', '3–5 Days Processing', '30 Day Stay'] },
    'JP': { type: 'not-eligible', status: 'Visa Required',          desc: 'Indian passport holders need a Japan Tourist Visa. Apply at the Japanese Embassy with financial documents and itinerary.',                           tags: ['Sticker Visa', '¥3000 Fee', '5–7 Days Processing', 'Bank Statements Required'] },
    'CA': { type: 'not-eligible', status: 'Visa Required',          desc: 'A Temporary Resident Visa (TRV) is required for Canada. Apply online via IRCC. Processing can take 4–8 weeks.',                                     tags: ['TRV Required', 'CAD 100 Fee', 'Biometrics Required', '4–8 Weeks Processing'] },
    'AU': { type: 'not-eligible', status: 'Visa Required',          desc: 'Indian passport holders need an Australian Tourist Visa (subclass 600). Apply online; processing takes 1–4 weeks.',                                 tags: ['Visitor Visa 600', 'AUD 190 Fee', 'Online Application', 'Multiple Entry Possible'] },
    'ID': { type: 'on-arrival',   status: 'Visa on Arrival',        desc: 'Indian passport holders are eligible for Visa on Arrival in Indonesia. Valid for 30 days, extendable once.',                                        tags: ['30 Days', 'IDR 500,000 Fee', 'Extendable', 'All Major Airports'] },
    'TR': { type: 'eligible',     status: 'e-Visa Available',       desc: 'Indian passport holders can apply for a Turkish e-Visa online before travel. Cost is $50, valid 180 days.',                                         tags: ['e-Visa', '$50 Fee', 'Online Application', '180 Days Validity'] },
    'EG': { type: 'on-arrival',   status: 'Visa on Arrival',        desc: 'Indian passport holders can get a Visa on Arrival in Egypt. Fee is $25 USD, paid in cash at the airport.',                                          tags: ['$25 Fee', '30 Days', 'Cash Payment', 'On Arrival'] },
    'KE': { type: 'on-arrival',   status: 'e-Visa Required',        desc: 'Indian passport holders need a Kenyan e-Visa. Apply online before travel. Fee is $51.',                                                             tags: ['e-Visa', '$51 Fee', 'Apply Online', '90 Days Stay'] },
  },
  'US': {
    'FR': { type: 'eligible',   status: 'Visa Free (Schengen)',   desc: 'US passport holders can travel to France and all Schengen countries visa-free for up to 90 days.',      tags: ['90 Days Free', 'No Visa', 'All 27 Schengen Countries', 'Stamp on Entry'] },
    'GR': { type: 'eligible',   status: 'Visa Free (Schengen)',   desc: 'US passport holders can visit Greece visa-free for up to 90 days as part of the Schengen area.',        tags: ['90 Days Free', 'No Visa', 'Schengen Area', 'Stamp on Entry'] },
    'CH': { type: 'eligible',   status: 'Visa Free (Schengen)',   desc: 'US passport holders can visit Switzerland visa-free for up to 90 days as part of the Schengen area.',   tags: ['90 Days Free', 'No Visa', 'Schengen Area', 'Stamp on Entry'] },
    'TH': { type: 'eligible',   status: 'Visa Free',              desc: 'US citizens can enter Thailand visa-free for up to 30 days.',                                           tags: ['30 Days Free', 'No Application', 'Return Ticket Required', 'Extendable'] },
    'AE': { type: 'eligible',   status: 'Visa on Arrival — Free', desc: 'US passport holders receive a free 30-day Visa on Arrival in UAE.',                                    tags: ['30 Days', 'Free', 'On Arrival', 'All UAE Ports'] },
    'JP': { type: 'eligible',   status: 'Visa Free',              desc: 'US citizens can visit Japan visa-free for up to 90 days for tourism or business.',                     tags: ['90 Days Free', 'No Visa', 'Stamp on Arrival', 'Tourism and Business'] },
    'GB': { type: 'eligible',   status: 'Visa Free',              desc: 'US passport holders can visit the UK visa-free for up to 6 months.',                                   tags: ['6 Months Free', 'No Visa', 'Return Ticket Advised', 'Stamp on Arrival'] },
    'AU': { type: 'eligible',   status: 'ETA Required (Free)',    desc: 'US citizens need an Electronic Travel Authority (ETA) — free, processed in minutes.',                 tags: ['ETA Required', 'Free', 'Instant Approval', '12 Months / Multiple Entry'] },
    'SG': { type: 'eligible',   status: 'Visa Free',              desc: 'US passport holders can visit Singapore visa-free for up to 30 days.',                                 tags: ['30 Days Free', 'No Visa', 'Stamp on Arrival', 'Extendable'] },
    'CA': { type: 'eligible',   status: 'Visa Free',              desc: 'US citizens do not need a visa for Canada. Present your passport at the border.',                      tags: ['Visa Free', 'No Application', 'Unlimited Entries'] },
    'MV': { type: 'eligible',   status: 'Visa Free',              desc: 'US citizens receive a free 30-day tourist visa on arrival in the Maldives.',                           tags: ['30 Days', 'Free', 'On Arrival', 'Extendable'] },
    'NP': { type: 'on-arrival', status: 'Visa on Arrival',        desc: 'US citizens can get a visa on arrival at Kathmandu airport. Options for 15, 30, or 90 days.',         tags: ['Visa on Arrival', '$30–$125', 'Kathmandu Airport', 'Multiple Options'] },
    'ID': { type: 'eligible',   status: 'Visa Free',              desc: 'US passport holders can visit Indonesia visa-free for up to 30 days.',                                 tags: ['30 Days Free', 'No Visa', 'Stamp on Arrival'] },
    'TR': { type: 'eligible',   status: 'e-Visa Required',        desc: 'US citizens need a Turkish e-Visa. Apply online, costs $50, valid 180 days.',                         tags: ['e-Visa', '$50', 'Online', '180 Days'] },
    'EG': { type: 'on-arrival', status: 'Visa on Arrival',        desc: 'US citizens can get a Visa on Arrival in Egypt for $25.',                                              tags: ['$25', '30 Days', 'On Arrival', 'Cash Payment'] },
    'KE': { type: 'on-arrival', status: 'e-Visa Required',        desc: 'US passport holders need a Kenyan e-Visa ($51). Apply online.',                                        tags: ['e-Visa', '$51', 'Online Application', '90 Days'] },
  },
  'GB': {
    'US': { type: 'eligible',   status: 'ESTA Required',         desc: 'UK citizens need an ESTA to enter the US. Apply online for $14. Valid 2 years.',                      tags: ['ESTA Required', '$14 Fee', '2 Year Validity', '90 Days Per Visit'] },
    'TH': { type: 'eligible',   status: 'Visa Free',             desc: 'UK passport holders can enter Thailand visa-free for up to 30 days.',                                 tags: ['30 Days Free', 'No Visa', 'Stamp on Arrival', 'Extendable'] },
    'AE': { type: 'eligible',   status: 'Visa Free',             desc: 'UK citizens receive a free 30-day Visa on Arrival in the UAE.',                                       tags: ['30 Days', 'Free', 'On Arrival', 'All UAE'] },
    'GR': { type: 'eligible',   status: 'Visa Free',             desc: 'UK passport holders can visit Greece visa-free for up to 90 days.',                                   tags: ['90 Days', 'Visa Free', 'No Visa Needed'] },
    'CH': { type: 'eligible',   status: 'Visa Free',             desc: 'UK passport holders can visit Switzerland visa-free for up to 90 days.',                              tags: ['90 Days', 'Visa Free', 'No Visa Needed'] },
    'JP': { type: 'eligible',   status: 'Visa Free',             desc: 'UK passport holders can visit Japan visa-free for up to 90 days.',                                    tags: ['90 Days', 'Visa Free', 'Stamp on Arrival'] },
    'SG': { type: 'eligible',   status: 'Visa Free',             desc: 'UK citizens can visit Singapore visa-free for up to 30 days.',                                        tags: ['30 Days', 'Visa Free', 'No Application', 'Extendable'] },
    'CA': { type: 'eligible',   status: 'eTA Required',          desc: 'UK citizens need a Canadian eTA — costs CAD 7, valid 5 years.',                                       tags: ['eTA Required', 'CAD 7', '5 Year Validity', 'Multiple Entries'] },
    'AU': { type: 'eligible',   status: 'eVisitor Visa (Free)',  desc: 'UK passport holders can apply for a free Australian eVisitor visa online, valid 12 months.',          tags: ['eVisitor Visa', 'Free', '12 Month Validity', '3 Months Per Entry'] },
    'NP': { type: 'on-arrival', status: 'Visa on Arrival',       desc: 'UK citizens can get a visa on arrival in Nepal at Kathmandu airport.',                               tags: ['Visa on Arrival', '$30–$125', 'Kathmandu Airport'] },
    'MV': { type: 'eligible',   status: 'Visa Free',             desc: 'UK citizens receive a free 30-day tourist visa on arrival in the Maldives.',                          tags: ['30 Days', 'Free', 'On Arrival', 'Extendable'] },
    'ID': { type: 'eligible',   status: 'Visa Free',             desc: 'UK citizens can visit Indonesia visa-free for up to 30 days.',                                        tags: ['30 Days', 'Visa Free'] },
    'TR': { type: 'eligible',   status: 'e-Visa Required',       desc: 'UK citizens can apply for a Turkish e-Visa online for $50.',                                          tags: ['e-Visa', '$50', 'Online', '180 Days'] },
    'EG': { type: 'on-arrival', status: 'Visa on Arrival',       desc: 'UK citizens can get a Visa on Arrival in Egypt for $25.',                                             tags: ['$25', '30 Days', 'On Arrival'] },
  }
};

// ── ELIGIBILITY CHECKER ────────────────────────────────────

function getEligibility(from, to) {
  if (from === to) {
    return {
      type: 'eligible',
      status: 'Same Country — No Visa Needed',
      desc: 'This is your home country. No visa is required.',
      tags: ['Home Country', 'No Visa', 'Unrestricted']
    };
  }
  const fromData = eligibilityDB[from];
  if (fromData && fromData[to]) return fromData[to];
  return {
    type: 'on-arrival',
    status: 'Please Check Embassy',
    desc: 'We do not have specific data for this combination. Please check the official embassy website of the destination country for accurate requirements.',
    tags: ['Check Embassy', 'Allow 4–6 Weeks', 'Official Source Recommended']
  };
}

function checkEligibility() {
  const from = document.getElementById('fromCountry').value;
  const to   = document.getElementById('toCountry').value;
  if (!from || !to) {
    alert('Please select both your passport country and destination.');
    return;
  }
  const result = getEligibility(from, to);
  const box    = document.getElementById('resultBox');
  box.className     = 'result-box ' + result.type;
  box.style.display = 'block';
  document.getElementById('resultStatus').textContent = result.status;
  document.getElementById('resultDesc').textContent   = result.desc;
  document.getElementById('resultTags').innerHTML =
    result.tags.map(tag => `<span class="rtag">${tag}</span>`).join('');
}

// ── COST CALCULATOR ────────────────────────────────────────

function calculateCost() {
  const dest      = document.getElementById('costDestination').value;
  const travelers = parseInt(document.getElementById('costTravelers').value) || 1;

  if (!dest) {
    alert('Please select a destination country.');
    return;
  }

  const fee       = visaFees[dest];
  const country   = countries.find(c => c.code === dest);
  const resultEl  = document.getElementById('costResult');

  if (!fee || !country) {
    resultEl.style.display = 'block';
    resultEl.innerHTML = '<p style="color:#888; padding:1rem;">No fee data available for this country.</p>';
    return;
  }

  const minTotal = fee.min * travelers;
  const maxTotal = fee.max * travelers;
  const rate     = toUSD[fee.currency] || 1;
  const minUSD   = (minTotal * rate).toFixed(0);
  const maxUSD   = (maxTotal * rate).toFixed(0);

  // Format fee per person
  let feePerPerson = '';
  if (fee.min === 0) {
    feePerPerson = '<span class="cost-free">Free</span>';
  } else if (fee.min === fee.max) {
    feePerPerson = `<strong>${fee.currency} ${fee.min.toLocaleString()}</strong>`;
  } else {
    feePerPerson = `<strong>${fee.currency} ${fee.min.toLocaleString()} – ${fee.max.toLocaleString()}</strong>`;
  }

  // Format total
  let totalDisplay = '';
  if (fee.min === 0) {
    totalDisplay = '<span class="cost-free">Free — No visa fee</span>';
  } else {
    const totalStr = minTotal === maxTotal
      ? `${fee.currency} ${minTotal.toLocaleString()}`
      : `${fee.currency} ${minTotal.toLocaleString()} – ${maxTotal.toLocaleString()}`;
    const usdStr = minUSD === maxUSD
      ? `≈ USD $${minUSD}`
      : `≈ USD $${minUSD} – $${maxUSD}`;
    totalDisplay = `<strong>${totalStr}</strong><br/><span class="cost-usd">${usdStr}</span>`;
  }

  resultEl.style.display = 'block';
  resultEl.innerHTML = `
    <div class="cost-header">
      <span class="cost-flag">${country.flag}</span>
      <span class="cost-country-name">${country.name}</span>
      <span class="visa-badge ${country.visaType}">${country.badge}</span>
    </div>
    <div class="cost-grid">
      <div class="cost-item">
        <div class="cost-label">Visa Fee (per person)</div>
        <div class="cost-value">${feePerPerson}</div>
      </div>
      <div class="cost-item">
        <div class="cost-label">Number of Travellers</div>
        <div class="cost-value"><strong>${travelers}</strong></div>
      </div>
      <div class="cost-item">
        <div class="cost-label">Total Estimated Cost</div>
        <div class="cost-value">${totalDisplay}</div>
      </div>
      <div class="cost-item">
        <div class="cost-label">Note</div>
        <div class="cost-value">${fee.note}</div>
      </div>
    </div>
    <div class="cost-disclaimer">
      * Fees are estimates only. Always verify on the official embassy website before travelling.
    </div>
  `;
}

// ── COUNTRY GRID ───────────────────────────────────────────

let currentRegion = 'all';

function renderCountries(list) {
  const grid = document.getElementById('countryGrid');
  if (!list.length) {
    grid.innerHTML = '<p style="color:#888;">No countries found.</p>';
    return;
  }
  grid.innerHTML = list.map(c => `
    <div class="country-card" onclick="openModal('${c.code}')">
      <div class="country-flag">${c.flag}</div>
      <div class="country-name">${c.name}</div>
      <div class="country-region">${c.region}</div>
      <span class="visa-badge ${c.visaType}">${c.badge}</span>
      <div class="country-detail">Stay: ${c.duration}</div>
    </div>
  `).join('');
}

function filterByRegion(region, btn) {
  currentRegion = region;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  applyFilters();
}

function filterCountries() {
  applyFilters();
}

function applyFilters() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  let list = countries;
  if (currentRegion !== 'all') list = list.filter(c => c.region === currentRegion);
  if (query) list = list.filter(c =>
    c.name.toLowerCase().includes(query) ||
    c.region.toLowerCase().includes(query)
  );
  renderCountries(list);
}

// ── MODAL ──────────────────────────────────────────────────

function openModal(code) {
  const c = countries.find(x => x.code === code);
  if (!c) return;
  document.getElementById('mFlag').textContent   = c.flag;
  document.getElementById('mName').textContent   = c.name;
  document.getElementById('mRegion').textContent = c.region;
  document.getElementById('mInfoGrid').innerHTML = `
    <div class="modal-info-item">
      <div class="modal-info-label">Visa Type</div>
      <div class="modal-info-value"><span class="visa-badge ${c.visaType}">${c.badge}</span></div>
    </div>
    <div class="modal-info-item">
      <div class="modal-info-label">Fee</div>
      <div class="modal-info-value">${c.fee}</div>
    </div>
    <div class="modal-info-item">
      <div class="modal-info-label">Max Stay</div>
      <div class="modal-info-value">${c.duration}</div>
    </div>
    <div class="modal-info-item">
      <div class="modal-info-label">Processing</div>
      <div class="modal-info-value">${c.processing}</div>
    </div>
  `;
  document.getElementById('mDocs').innerHTML =
    c.docs.map(doc => `<div class="doc-item">${doc}</div>`).join('');
  document.getElementById('modalOverlay').classList.add('open');
}

function closeModal(event) {
  if (event.target === document.getElementById('modalOverlay')) closeModalBtn();
}

function closeModalBtn() {
  document.getElementById('modalOverlay').classList.remove('open');
}

// ── INIT ───────────────────────────────────────────────────

renderCountries(countries);
