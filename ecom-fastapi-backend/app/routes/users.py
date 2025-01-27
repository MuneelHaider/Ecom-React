from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db import get_db
from app.models import User
from app.schemas import UserCreate, UserResponse
from datetime import datetime
from app.utils.utils import hash_password

router = APIRouter()

from app.dependencies import get_current_user

@router.get("/users/me", response_model=UserResponse)
def get_me(current_user: User = Depends(get_current_user)):
    return current_user

@router.post("/users/", response_model=UserResponse)
def create_new_user(user: UserCreate, db: Session = Depends(get_db)):

    existing_user = db.query(User).filter(User.email == user.email).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    hashed_password = hash_password(user.password)

    new_user = User(
        first_name=user.first_name,
        last_name=user.last_name,
        email=user.email,
        password=hashed_password,  
        role="customer",
        created_at=datetime.utcnow(),
        updated_at=datetime.utcnow(),
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user
