# Senior UI/UX Specification

This document is an example of UI/UX specification, co-created with the AI Architect Agent. It serves as a detailed guide for designing and implementing the user interface and user experience.

## 1. General Design and User Experience Principles

*   **Simplicity and Clarity First:** The interface must be intuitive, easy to understand and use, even for new users.
*   **Immediate and Omnipresent User Feedback:** Every interaction must be accompanied by clear visual or textual feedback.
*   **Inflexible Consistency:** Interface elements, behaviors, and styles must be uniform throughout the application.
*   **Universal Accessibility:** Designed to be usable by everyone, including people with disabilities (WCAG AA minimum compliance).

## 2. Personas and Key User Journeys

### Persona: Solo Developer (Marc, 35 years old)

*   **Goal:** Plan and track his development projects efficiently.
*   **Frustrations:** Lack of clarity in specifications, difficulty anticipating risks.
*   **User Journey (Example: Creating a New Specification):**
    1.  Marc logs into the platform.
    2.  He navigates to the "My Projects" section.
    3.  He clicks on "Create New Specification."
    4.  He interacts with the AI Architect Agent to define requirements.
    5.  He validates and saves the specification.

## 3. Descriptive or Annotated Wireframes

### Screen: Order Summary and Address Selection (SCREEN-CHECKOUT-ADDRESS)

*   **Description:** This screen allows the user to review their cart, select or add a shipping address, and view the total amount before proceeding to payment.
*   **Structure:**
    1.  **Header:** Title "Step 2/3: Shipping and Summary." Clickable breadcrumb to return to the cart.
    2.  **"Your Addresses" Section:**
        *   Display of saved addresses as selectable cards.
        *   "Add New Address" button.
        *   Add/Edit Address Form (if activated).
    3.  **"Order Summary" Section:**
        *   List of cart items.
        *   Cost breakdown (subtotal, shipping fees, tax, total).
    4.  **Action Area:** "Continue to Payment" button, "Return to Cart" link.

## 4. Detailed Specifications for Each Interface and Reusable Component

### Component: Primary Action Button (BTN-PRIMARY-SUBMIT)

*   **Type:** Button
*   **Content/Label:** "Continue to Payment"
*   **Appearance (States):**
    *   **Normal:**
        *   Background Color: `#007BFF` (Primary Blue)
        *   Text Color: `#FFFFFF` (White)
        *   Border: `none`
        *   Box Shadow: `0px 2px 5px rgba(0, 123, 255, 0.2)`
        *   Typography: `Arial, sans-serif`, Size `16px`, Weight `600`
        *   Padding: `12px 24px`
        *   Border-radius: `4px`
    *   **Hover:**
        *   Background Color: `#0056B3` (Darker Blue)
        *   Box Shadow: `0px 4px 8px rgba(0, 123, 255, 0.3)`
        *   Transition: `background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out`
    *   **Focus:**
        *   Border: `2px solid #80BDFF` (Light Blue for outline)
        *   Box Shadow: `0px 0px 0px 0.2rem rgba(0, 123, 255, 0.25)`
    *   **Active:**
        *   Background Color: `#004085` (Even Darker Blue)
        *   Box Shadow: `inset 0px 1px 3px rgba(0, 0, 0, 0.2)`
    *   **Disabled:**
        *   Background Color: `#CCCCCC` (Light Gray)
        *   Text Color: `#666666` (Dark Gray)
        *   Cursor: `not-allowed`

### Component: Address Card (COMPONENT-ADDRESS-CARD)

*   **Description:** Displays a saved shipping address.
*   **Appearance (States):**
    *   **Normal:**
        *   Background: `#F8F9FA` (Very Light Gray)
        *   Border: `1px solid #E9ECEF` (Light Gray)
        *   Padding: `16px`
        *   Border-radius: `8px`
    *   **Selected:**
        *   Background: `#E0F7FA` (Very Light Blue)
        *   Border: `2px solid #00BCD4` (Turquoise Blue)
        *   Box Shadow: `0px 0px 8px rgba(0, 188, 212, 0.2)`

## 5. Accessibility Guidelines (a11y)

*   **Target WCAG Level:** AA minimum.
*   **Keyboard Navigation:** All interactive elements must be accessible and usable via keyboard navigation (Tab, Enter, Space). Tab order must be logical.
*   **Text Alternatives:** All non-decorative images must have a descriptive `alt` attribute.
*   **ARIA Attributes:** Correct use of ARIA roles, states, and properties to improve semantics for assistive technologies (e.g., `aria-label`, `aria-describedby`, `role="alert"`).
*   **Color Contrasts:** Ensure sufficient contrast between text and its background (minimum ratio of 4.5:1 for normal text, 3:1 for large text).

## 6. Design System / Detailed Graphic and Interactive Charter

### Color Palette

*   **Primary:** `#007BFF` (Blue)
*   **Secondary:** `#6C757D` (Gray)
*   **Success:** `#28A745` (Green)
*   **Error:** `#DC3545` (Red)
*   **Warning:** `#FFC107` (Yellow)
*   **Neutrals:** `#FFFFFF` (White), `#F8F9FA` (Very Light Gray), `#E9ECEF` (Light Gray), `#343A40` (Dark Gray), `#000000` (Black)

### Typography Scale

*   **Font Families:** `Arial, sans-serif` (for body text), `Roboto, sans-serif` (for headings)
*   **Typography Scale (Examples):**
    *   `H1`: `48px`, `font-weight: 700`, `line-height: 1.2`
    *   `H2`: `36px`, `font-weight: 600`, `line-height: 1.3`
    *   `P` (Paragraph): `16px`, `font-weight: 400`, `line-height: 1.5`
    *   `Small Text`: `12px`, `font-weight: 400`, `line-height: 1.4`

### Spacing Principles and Layout Grid

*   **Base Unit:** `8px` (all spacings (padding, margin) will be multiples of 8px).
*   **Gutters:** `24px` between columns.
*   **Responsive Grid:** Use a 12-column grid with breakpoints for mobile, tablet, and desktop.

## 7. Revision History

| Version | Date       | Author    | Revision Description                                     |
| :------ | :--------- | :-------- | :------------------------------------------------------- |
| 1.0     | 2025-06-10 | Kilo Code | Initial document creation based on AI discussions        |