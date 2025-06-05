# examples/en/phase2_collaborative_implementation/code_snippets_and_tests/example_python_service.py

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Dict, Optional
import uuid
from datetime import datetime, timezone

app = FastAPI(
    title="Example ProductService",
    description="A simple microservice for product management.",
    version="1.0.0"
)

# Data Models (Pydantic)
class ProductBase(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    stock: int

class ProductCreate(ProductBase):
    pass

class ProductInDB(ProductBase):
    product_id: uuid.UUID
    created_at: datetime

    class Config:
        from_attributes = True

# In-memory database for the example
products_db: Dict[uuid.UUID, ProductInDB] = {}

@app.post("/products/", response_model=ProductInDB, status_code=201)
async def create_product(product: ProductCreate):
    """
    Creates a new product.
    """
    product_id = uuid.uuid4()
    now = datetime.now(timezone.utc)
    db_product = ProductInDB(product_id=product_id, created_at=now, **product.model_dump())
    products_db[product_id] = db_product
    return db_product

@app.get("/products/{product_id}", response_model=ProductInDB)
async def get_product(product_id: uuid.UUID):
    """
    Retrieves product details by its ID.
    """
    if product_id not in products_db:
        raise HTTPException(status_code=404, detail="Product not found")
    return products_db[product_id]

@app.put("/products/{product_id}/stock", response_model=ProductInDB)
async def update_product_stock(product_id: uuid.UUID, new_stock: int):
    """
    Updates the stock of a product.
    """
    if product_id not in products_db:
        raise HTTPException(status_code=404, detail="Product not found")
    if new_stock < 0:
        raise HTTPException(status_code=400, detail="Stock cannot be negative")
    
    product = products_db[product_id]
    product.stock = new_stock
    products_db[product_id] = product # Update the entry in the dictionary
    return product

@app.get("/products/", response_model=List[ProductInDB])
async def list_products():
    """
    Lists all available products.
    """
    return list(products_db.values())

if __name__ == "__main__":
    import uvicorn
    # Example usage: uvicorn example_python_service:app --reload --port 8001
    # To run this example, you will need to install FastAPI and Uvicorn:
    # pip install fastapi "uvicorn[standard]" pydantic
    print("To run this service, use: uvicorn example_python_service:app --reload --port 8001")
    print("Access http://localhost:8001/docs for interactive documentation.")