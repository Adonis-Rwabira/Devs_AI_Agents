# EXAMPLE: Developer Agent Action Plan

This document details specific instructions and tasks for the AI Developer Agent (Kilo Code in "Senior Collaborative Full-Stack Developer" mode) to guide project implementation.

## General Context

*   **Project:** AI-Augmented Task Management Platform.
*   **Current Phase:** Collaborative Implementation (Phase 2).
*   **Reference Documents:**
    *   `MASTER_REQUIREMENTS_SPECIFICATION.md`
    *   `SENIOR_ARCHITECTURE_DESIGN.md`
    *   `SENIOR_UIUX_SPECIFICATION.md`
    *   `SENIOR_DATABASE_SCHEMA.md`
*   **Agent Objective:** Assist the human developer in translating specifications into high-quality, tested, and maintainable code.

## General Directives for the Agent

1.  **Prioritize Code Quality:** Produce clean, readable, modular code that adheres to best practices (SOLID, DRY, KISS).
2.  **Adherence to Specifications:** Implement features and designs exactly as specified in the planning documents. In case of ambiguity, request clarification.
3.  **Integrated Tests:** Write unit and integration tests for each developed component or feature.
4.  **Internal Documentation:** Add relevant comments in the code and update technical documentation as needed.
5.  **Error Handling:** Implement robust error handling, with clear messages and appropriate logging mechanisms.
6.  **Security:** Apply security-by-design principles at every stage of development.
7.  **Communication:** Report any issues, blockers, or deviations from the plan.

## Detailed Tasks by Service / Component

### Task 1: `OrderService` Implementation (Backend)

*   **Description:** Develop the order management microservice.
*   **Specification Reference:** `MASTER_REQUIREMENTS_SPECIFICATION.md` (Section 5, F-ORDER-001 to F-ORDER-005), `SENIOR_ARCHITECTURE_DESIGN.md` (Section 4, OrderService).
*   **Sub-tasks:**
    1.  **Python project initialization:** Create `order_service/` directory, initialize Poetry, add dependencies (FastAPI, SQLAlchemy, psycopg2, kafka-python).
    2.  **Data models:** Create SQLAlchemy models for `Order` and `OrderItem` based on `SENIOR_DATABASE_SCHEMA.md` (Tables `tbl_orders`, `tbl_order_items`).
    3.  **REST Endpoints:** Implement the following endpoints in `main.py`:
        *   `POST /orders`: Order creation. Validate input data with Pydantic.
        *   `GET /orders/{order_id}`: Retrieve order by ID.
        *   `PUT /orders/{order_id}/status`: Update order status.
    4.  **Business logic:**
        *   When creating an order, check product availability via `ProductService` (synchronous call or via event if architecture allows).
        *   Publish an `OrderCreatedEvent` to the Kafka topic `orders.created` after database persistence.
    5.  **Unit tests:** Write tests for each endpoint and business logic function.
    6.  **Error handling:** Implement error handlers for invalid requests, not found resources, and internal server errors.

### Task 2: `ProductService` Implementation (Backend)

*   **Description:** Develop the product management microservice.
*   **Specification Reference:** `MASTER_REQUIREMENTS_SPECIFICATION.md` (Section 5, F-PRODUCT-001 to F-PRODUCT-003), `SENIOR_ARCHITECTURE_DESIGN.md` (Section 4, ProductService).
*   **Sub-tasks:**
    1.  **Python project initialization:** Create `product_service/` directory, initialize Poetry, add dependencies.
    2.  **Data models:** Create SQLAlchemy model for `Product` based on `SENIOR_DATABASE_SCHEMA.md` (Table `tbl_products`).
    3.  **REST Endpoints:** Implement the following endpoints:
        *   `GET /products/{product_id}`: Retrieve product by ID.
        *   `PUT /products/{product_id}/stock`: Update product stock.
    4.  **Unit tests:** Write tests for endpoints and stock logic.

### Task 3: Frontend Development (Base Components)

*   **Description:** Develop the basic React components for the user interface.
*   **Specification Reference:** `SENIOR_UIUX_SPECIFICATION.md` (Sections 3, 4, 6).
*   **Sub-tasks:**
    1.  **React project initialization:** Create `frontend/` directory, initialize a React project with Vite/Create React App, install TypeScript, Tailwind CSS.
    2.  **Design System:** Implement global styles, color palette, typography, and spacing defined in section 6 of `SENIOR_UIUX_SPECIFICATION.md`.
    3.  **Reusable components:** Develop the following components respecting detailed specifications (appearance, states, interactions):
        *   `Button.tsx` (for `BTN-PRIMARY-SUBMIT` and other variants).
        *   `AddressCard.tsx` (for `COMPONENT-ADDRESS-CARD`).
        *   `Input.tsx` (for form fields).
    4.  **Unit tests (Jest/React Testing Library):** Write tests to ensure components render correctly and respond to interactions.

### Task 4: Frontend/Backend Integration (Order Flow)

*   **Description:** Connect the frontend to backend services for the order creation flow.
*   **Specification Reference:** `MASTER_REQUIREMENTS_SPECIFICATION.md` (F-ORDER-001), `SENIOR_ARCHITECTURE_DESIGN.md` (Sequence Diagram), `SENIOR_UIUX_SPECIFICATION.md` (SCREEN-CHECKOUT-ADDRESS).
*   **Sub-tasks:**
    1.  **Cart Page:** Display selected products and allow quantity modification.
    2.  **Address Page:**
        *   Retrieve user's saved addresses (if applicable) via an API.
        *   Allow selection of an existing address or adding a new one.
        *   Display dynamic order summary.
    3.  **Payment Page:**
        *   Send order and address details to `OrderService`.
        *   Handle `PaymentService` response (success/failure).
        *   Display confirmation or error messages to the user.
    4.  **State Management:** Use React Query or Redux Toolkit to manage application states and API calls.

## Revision History

| Version | Date       | Author    | Revision Description                                     |
| :------ | :--------- | :-------- | :------------------------------------------------------- |
| 1.0     | 2025-06-10 | Kilo Code | Initial creation of the Developer Agent action plan      |