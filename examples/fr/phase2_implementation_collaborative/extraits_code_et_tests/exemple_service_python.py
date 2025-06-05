# examples/fr/phase2_implementation_collaborative/extraits_code_et_tests/exemple_service_python.py

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Dict, Optional
import uuid
from datetime import datetime, timezone

app = FastAPI(
    title="Exemple ProductService",
    description="Un microservice simple pour la gestion des produits.",
    version="1.0.0"
)

# Modèles de données (Pydantic)
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

# Base de données "in-memory" pour l'exemple
products_db: Dict[uuid.UUID, ProductInDB] = {}

@app.post("/products/", response_model=ProductInDB, status_code=201)
async def create_product(product: ProductCreate):
    """
    Crée un nouveau produit.
    """
    product_id = uuid.uuid4()
    now = datetime.now(timezone.utc)
    db_product = ProductInDB(product_id=product_id, created_at=now, **product.model_dump())
    products_db[product_id] = db_product
    return db_product

@app.get("/products/{product_id}", response_model=ProductInDB)
async def get_product(product_id: uuid.UUID):
    """
    Récupère les détails d'un produit par son ID.
    """
    if product_id not in products_db:
        raise HTTPException(status_code=404, detail="Product not found")
    return products_db[product_id]

@app.put("/products/{product_id}/stock", response_model=ProductInDB)
async def update_product_stock(product_id: uuid.UUID, new_stock: int):
    """
    Met à jour le stock d'un produit.
    """
    if product_id not in products_db:
        raise HTTPException(status_code=404, detail="Product not found")
    if new_stock < 0:
        raise HTTPException(status_code=400, detail="Stock cannot be negative")
    
    product = products_db[product_id]
    product.stock = new_stock
    products_db[product_id] = product # Mettre à jour l'entrée dans le dictionnaire
    return product

@app.get("/products/", response_model=List[ProductInDB])
async def list_products():
    """
    Liste tous les produits disponibles.
    """
    return list(products_db.values())

if __name__ == "__main__":
    import uvicorn
    # Exemple d'utilisation : uvicorn exemple_service_python:app --reload --port 8001
    # Pour exécuter cet exemple, vous aurez besoin d'installer FastAPI et Uvicorn:
    # pip install fastapi "uvicorn[standard]" pydantic
    print("Pour exécuter ce service, utilisez : uvicorn exemple_service_python:app --reload --port 8001")
    print("Accédez à http://localhost:8001/docs pour la documentation interactive.")