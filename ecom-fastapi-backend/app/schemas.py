from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional


class UserCreate(BaseModel):
    first_name: str
    last_name: str
    email: EmailStr
    password: str


class UserResponse(BaseModel):
    id: int
    first_name: str
    last_name: str
    email: str
    role: str
    created_at: datetime

    class Config:
        from_attributes = True

