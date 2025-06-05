graph TD
    subgraph "E-Commerce Order System"
        A[API Gateway] --> B(OrderService)
        B --> C(PaymentService)
        B -- "publish OrderCreatedEvent" --> D(Event Bus)
        C -- "publish PaymentProcessedEvent" --> D
        D --> E(InventoryService)
        D --> F(NotificationService)
        B -- "reads from" --> G(Orders DB)
        H(ProductService) -- "reads from" --> I(Products DB)
        C -- "reads from" --> J(Payments DB)
        H -- "publishes ProductEvents" --> D
    end