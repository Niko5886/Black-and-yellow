---
name: Nymerix Core
colors:
  surface: '#fbf8ff'
  surface-dim: '#dad9e3'
  surface-bright: '#fbf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f2fd'
  surface-container: '#eeedf7'
  surface-container-high: '#e8e7f1'
  surface-container-highest: '#e3e1ec'
  on-surface: '#1a1b22'
  on-surface-variant: '#444748'
  inverse-surface: '#2f3038'
  inverse-on-surface: '#f1effa'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed01b'
  on-secondary-container: '#6f5900'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1a1c1d'
  on-tertiary-container: '#838485'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#ffe083'
  secondary-fixed-dim: '#eec200'
  on-secondary-fixed: '#231b00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#e2e2e3'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1d'
  on-tertiary-fixed-variant: '#454748'
  background: '#fbf8ff'
  on-background: '#1a1b22'
  surface-variant: '#e3e1ec'
typography:
  display:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style
The design system for Nymerix is built on a foundation of "Technical Precision with Human Approachability." It targets enterprise clients and startups seeking high-end web development and strategic consulting. 

The aesthetic follows a **Modern Corporate** style: high-density information layouts paired with expansive white space to ensure clarity. The interface avoids unnecessary decoration, instead using the brand's signature yellow as a high-contrast beacon for user flow and conversion. The emotional response should be one of absolute reliability, technological edge, and meticulous attention to detail.

## Colors
The palette is intentionally restrained to maximize the impact of the brand yellow.
- **Primary (#1A1A1A):** Used for typography, iconography, and high-emphasis backgrounds. It provides a "deep charcoal" foundation that feels more sophisticated than pure black.
- **Accent (#FACC15):** The "Strategic Yellow." Reserved exclusively for Primary CTAs, active states, and critical highlights.
- **Surfaces:** A hierarchy of whites and light grays (#FAFAFA, #F4F4F5) differentiates content sections without relying on heavy borders.
- **Status:** Standard semantic colors (Success: Green, Error: Red) should be desaturated to align with the professional tone.

## Typography
Inter is utilized across all levels to maintain a systematic, utilitarian feel. The hierarchy relies on **strong weight contrast**—pairing heavy headlines (Bold/ExtraBold) with light, airy body text. 

For display and large headlines, negative letter-spacing is applied to create a tighter, "tech-editorial" look. Labels and utility text use increased letter-spacing and uppercase styling to distinguish them from narrative content.

## Layout & Spacing
The layout follows a **12-column fluid grid** for desktop, transitioning to a **4-column grid** for mobile. 

- **Vertical Rhythm:** Use a strict 8px base unit. Section spacing should be generous (80px+) to evoke a high-end, premium consulting feel.
- **Grid:** On desktop, a 1280px max-width container is centered. Gutters are fixed at 24px to ensure breathing room between technical data points or service cards.
- **Safe Zones:** Content margins should be 24px on mobile and 48px on tablet to maintain a "frame" around the interface.

## Elevation & Depth
Depth is achieved through **Tonal Layering** and **Soft Ambient Shadows**. 
- **Level 0 (Background):** Pure White (#FFFFFF).
- **Level 1 (Surface):** Off-white (#FAFAFA) used for cards or secondary sections to create subtle separation.
- **Level 2 (Float):** Used for navigation bars and dropdowns. These use a very soft, highly diffused shadow (e.g., `0px 4px 20px rgba(0,0,0,0.04)`) to appear as if hovering slightly above the surface.
- **Interactions:** Avoid heavy shadows on buttons; use color shifts or subtle scale transforms (98%) to indicate a press.

## Shapes
The shape language is "Soft-Modern." A standard radius of **8px** is applied to buttons, input fields, and small components. Larger containers, such as feature cards or modal windows, use a **12px to 16px** radius. This balance ensures the UI feels contemporary and approachable without losing the professional structure of a consulting firm.

## Components
- **Buttons:** 
  - *Primary:* Brand Yellow background with Charcoal text. 8px radius. No border.
  - *Secondary:* Charcoal background with White text or Ghost style with a 1px Charcoal border.
- **Input Fields:** 1px border (#E4E4E7), 8px radius. Active state uses a 2px Brand Yellow border.
- **Cards:** White background with a subtle 1px border (#F4F4F5) or a Level 1 shadow. 12px corner radius.
- **Chips/Tags:** Small, 4px radius, using Light Gray (#F4F4F5) backgrounds and Charcoal text for metadata.
- **Progress Indicators:** Use the Brand Yellow for the fill color to highlight project status or process steps.
- **Service Cards:** Special "Hover" state component that shifts from a subtle border to a Level 2 shadow with a small yellow accent bar at the top.