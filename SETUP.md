# Setup-Anleitung — Local Business Website Template

## Was ist dieses Template?

Eine **branchenneutrale One-Page-Website** für lokale Dienstleister. Alle Inhalte werden zentral über eine Konfigurationsdatei gesteuert — ohne Routing, ohne CMS, ohne externe Abhängigkeiten.

Geeignet für z. B. Dienstleister, Beratungen, Studios und lokale Unternehmen mit festem Leistungsangebot.

**Technik:** React 19 · TypeScript · Vite · CSS Custom Properties (Theme über Config)

---

## Schnellstart pro Kunde

### 1. Projekt vorbereiten

```bash
npm install
npm run dev
```

Die Vorschau läuft unter `http://localhost:5173`.

### 2. Hauptkonfiguration anpassen

**Datei:** `src/config/businessConfig.ts`

Hier werden fast alle kundenspezifischen Inhalte gepflegt:

| Bereich | Config-Feld |
|---|---|
| Firmenname, Tagline, Logo | `identity` |
| Farben | `theme.colors` |
| Kontakt & Adresse | `contact` |
| WhatsApp | `whatsapp` |
| Google Maps | `maps` |
| Navigation | `navigation` |
| Hero (Headline, CTAs, Trust-Leiste) | `hero` |
| Leistungen | `services[]` |
| Über uns | `about` |
| Bewertungen | `reviews[]` |
| FAQ | `faq[]` |
| Öffnungszeiten | `openingHours` |
| SEO | `seo` |
| Sections ein/aus | `sections` |
| Section-Überschriften | `sectionHeadings` |

**Typen & Struktur:** `src/config/businessConfig.types.ts` (nur bei Bedarf anpassen)

### 3. Assets ersetzen

| Asset | Pfad | Zweck |
|---|---|---|
| Favicon | `public/favicon.svg` | Browser-Tab-Icon |
| OG-Image | `public/og-image.png` | Vorschau beim Teilen (Social Media) |
| Logo | `identity.logo.src` in Config | Header-Logo (z. B. `/logo.svg` in `public/`) |
| Hero-Bild | `hero.image` in Config | Optionales Bild im Hero (z. B. `/hero.jpg` in `public/`) |

**Hinweis:** Dateien in `public/` werden unter `/dateiname` referenziert (z. B. `src: '/logo.svg'`).

### 4. Sections aktivieren/deaktivieren

In `businessConfig.ts` unter `sections`:

```ts
sections: {
  hero: true,
  services: true,
  about: true,
  reviews: true,
  faq: true,
  openingHours: true,
  contact: true,
  map: true,
}
```

Auf `false` setzen, um einzelne Bereiche auszublenden.

### 5. Rechtliches ergänzen

**Dateien:** `src/components/legal/Imprint.tsx` · `src/components/legal/PrivacyPolicy.tsx`

Die Platzhaltertexte müssen vor Go-Live durch **vollständige, rechtlich geprüfte Texte** ersetzt werden — vom Kunden oder einer anerkannten Rechtsquelle (z. B. eRecht24, Anwalt).

> **Wichtig:** Dieses Template enthält keine fertigen Impressums- oder Datenschutztexte.

### 6. Build & Deployment

```bash
npm run build
```

Ausgabe in `dist/` — auf jeden Static Host deployen (Netlify, Vercel, IONOS, etc.).

---

## Checkliste — Kundendaten

Vor der Übergabe alle Punkte abhaken:

### Stammdaten
- [ ] Firmenname (`identity.name`)
- [ ] Tagline / Slogan (`identity.tagline`)
- [ ] Branche / Kategorie (`identity.industry` — intern, optional)
- [ ] Logo (`identity.logo` + Asset-Datei)
- [ ] Theme-Farben (`theme.colors`)

### Kontakt
- [ ] Telefonnummer (`contact.phone`)
- [ ] E-Mail (`contact.email`)
- [ ] Adresse: Straße, PLZ, Ort, Land (`contact.address`)
- [ ] WhatsApp-Nummer (`whatsapp.phone`, international ohne `+`)
- [ ] WhatsApp-Nachricht (`whatsapp.defaultMessage`)
- [ ] WhatsApp-Button-Label (`whatsapp.ctaLabel`)
- [ ] Social Links (`contact.social` — z. B. Instagram)

### Inhalte
- [ ] Hero: Headline, Subline, Trust-Leiste (`hero`)
- [ ] Hero-Bild (`hero.image`, optional)
- [ ] Leistungen mit Titel, Beschreibung, Preis (`services[]`)
- [ ] Über uns (`about`)
- [ ] Bewertungen (`reviews[]`)
- [ ] FAQ (`faq[]`)
- [ ] Öffnungszeiten (`openingHours`)
- [ ] Section-Überschriften (`sectionHeadings`)

### Externe Dienste
- [ ] Google Maps Embed-URL (`maps.embedUrl`)
- [ ] Google Maps Link (`maps.linkUrl`, optional)
- [ ] Navigation-Menüpunkte (`navigation[]`)

### SEO & Assets
- [ ] SEO Title (`seo.title`)
- [ ] SEO Description (`seo.description`)
- [ ] SEO Keywords (`seo.keywords`, optional)
- [ ] OG-Image (`seo.ogImage` + `public/og-image.png`)
- [ ] Favicon (`public/favicon.svg`)

### Rechtliches
- [ ] Impressum vollständig (`Imprint.tsx` oder spätere Config-Erweiterung)
- [ ] Datenschutzerklärung vollständig (`PrivacyPolicy.tsx`)
- [ ] Rechtstexte rechtlich geprüft

---

## Go-Live-Check

Vor Veröffentlichung:

1. **Build erfolgreich**
   ```bash
   npm run build
   ```
   Keine TypeScript-Fehler.

2. **Mobile Ansicht prüfen**
   - Header: Logo, Menü, CTA lesbar?
   - Hero: Texte und Trust-Leiste ohne Überlappung?
   - Alle Sections scrollbar und lesbar?

3. **Links testen**
   - Navigation springt zu korrekten Ankern?
   - Sticky Header verdeckt keine Section-Titel?

4. **WhatsApp testen**
   - Header-CTA, Hero-CTA und Contact-CTA öffnen korrekte Nummer?
   - Vorausgefüllte Nachricht korrekt?

5. **Maps testen**
   - Karte zeigt richtigen Standort?
   - Embed lädt auf Mobile und Desktop?

6. **Impressum & Datenschutz prüfen**
   - Footer-Links springen zu `#impressum` / `#datenschutz`?
   - Keine Platzhaltertexte mehr sichtbar?
   - Alle Pflichtangaben vorhanden?

7. **SEO prüfen**
   - Browser-Tab zeigt korrekten Titel?
   - Meta-Description gesetzt (DevTools → Elements → `<head>`)?

---

## Typischer Workflow (15–60 Min.)

```
1. businessConfig.ts mit Kundendaten füllen
2. Logo, Favicon, OG-Image, Hero-Bild ersetzen
3. Theme-Farben an Kunden-Branding anpassen
4. Legal-Texte einpflegen
5. npm run build
6. Go-Live-Check durchführen
7. dist/ deployen
```

---

## Hilfreiche Dateien

| Datei | Zweck |
|---|---|
| `src/config/businessConfig.ts` | **Hauptanpassungsdatei** |
| `src/config/businessConfig.types.ts` | TypeScript-Typen |
| `src/App.tsx` | Section-Toggles (über Config) |
| `src/theme/tokens.css` | CSS-Variablen (Fallbacks) |
| `index.html` | HTML-Grundgerüst |

---

## Support-Hinweise

- **Farben ändern:** nur `theme.colors` in `businessConfig.ts` — werden automatisch als CSS-Variablen gesetzt.
- **Section fehlt:** `sections.xyz` auf `true` prüfen und zugehörige Daten (z. B. `services[]`) befüllen.
- **WhatsApp funktioniert nicht:** Nummer ohne `+` und Leerzeichen (`493012345678`).
- **Maps falsch:** Embed-URL direkt aus Google Maps → „Karte einbetten“ kopieren.
