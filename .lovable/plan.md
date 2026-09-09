# RIK Serviss single-page landing page

## Goal
Build one polished, scrollable company page that positions RIK Serviss as an autonomous smart-infrastructure platform, with the pedestrian crossing system presented as the first deployed solution.

## Page structure
- Sticky navigation with the supplied RIK logo, smooth-scroll links, and a consultation CTA
- Full-width opening section centered on the RIK platform proposition and a bespoke connected-city visual
- Platform section explaining the four-part system: sensing, solar power, LoRa connectivity, and centralized monitoring
- Flagship deployment section for the smart pedestrian crossing, including operating flow and outcome metrics
- Additional application areas showing the platform can extend beyond crossings
- Monitoring section with a realistic operations dashboard preview and status indicators
- Trust/value section for cities and road authorities, followed by a strong contact CTA
- Compact footer with the supplied logo and section links

## Visual direction
- Use the specified navy, cyan, white, slate, and restrained status colors as semantic design tokens
- Bold modern sans-serif headings, compact uppercase labels, generous spacing, crisp borders, subtle grid/network texture
- Rounded cards with restrained shadows, cyan focus glows, and lightweight fade/slide reveals
- Create an original visual language from schematic roads, sensor nodes, signal paths, and dashboard details rather than generic stock imagery

## Implementation details
- Keep everything on `/` with accessible anchor navigation and native smooth scrolling
- Store the uploaded logo through the project asset flow and reference it in the header and footer
- Use reusable React sections and Lucide icons; keep interactions lightweight and responsive
- Add route-specific metadata and accessible labels/alt text
- Respect reduced-motion preferences
- Verify build status and inspect the rendered page at desktop and mobile widths
