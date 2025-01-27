from fastapi import FastAPI
from app.db import engine, Base
from app import models
from app.routes import users  # Import the users route

# Create all tables
Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(users.router, prefix="/api", tags=["Users"])

@app.get("/")
def read_root():
    return {"message": "Welcome to the FastAPI backend for the e-commerce site!"}
