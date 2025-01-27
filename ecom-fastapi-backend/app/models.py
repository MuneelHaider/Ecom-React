from sqlalchemy import Column, Integer, String, Float, Boolean, Enum, ForeignKey, Text, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime
from app.db import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)
    profile_photo = Column(String, nullable=True)
    role = Column(Enum("customer", "admin", name="user_roles"), default="customer", nullable=False)
    reset_password_token = Column(String, nullable=True)
    reset_token_expires = Column(DateTime, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    is_active = Column(Boolean, default=True)

    orders = relationship("Order", back_populates="user")
    reviews = relationship("Review", back_populates="user")


class Admin(Base):
    __tablename__ = "admins"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)


class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    company = Column(String, nullable=False)
    category = Column(Enum("sneakers", "heels", "flats", "sandals", name="product_categories"), nullable=False)
    color = Column(String, nullable=True)
    img_path = Column(String, nullable=True)
    reviews = Column(Integer, default=0)
    rating = Column(Float, default=0.0)
    prev_price = Column(Float, nullable=False)
    new_price = Column(Float, nullable=False)
    stock_quantity = Column(Integer, default=0)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    order_items = relationship("OrderItem", back_populates="product")
    reviews = relationship("Review", back_populates="product")


class Inventory(Base):
    __tablename__ = "inventory"

    id = Column(Integer, primary_key=True, index=True)
    product_id = Column(Integer, ForeignKey("products.id"))
    stock_change = Column(Integer, nullable=False)
    reason = Column(Enum("sale", "restock", "return", name="inventory_reasons"), nullable=False)
    admin_id = Column(Integer, ForeignKey("admins.id"))
    created_at = Column(DateTime, default=datetime.utcnow)


class Order(Base):
    __tablename__ = "orders"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    total_price = Column(Float, nullable=False)
    status = Column(Enum("pending", "shipped", "completed", "cancelled", name="order_statuses"), default="pending")
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    user = relationship("User", back_populates="orders")
    order_items = relationship("OrderItem", back_populates="order")


class OrderItem(Base):
    __tablename__ = "order_items"

    id = Column(Integer, primary_key=True, index=True)
    order_id = Column(Integer, ForeignKey("orders.id"))
    product_id = Column(Integer, ForeignKey("products.id"))
    quantity = Column(Integer, nullable=False)
    price = Column(Float, nullable=False)

    order = relationship("Order", back_populates="order_items")
    product = relationship("Product", back_populates="order_items")


class Review(Base):
    __tablename__ = "reviews"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    product_id = Column(Integer, ForeignKey("products.id"))
    rating = Column(Integer, nullable=False)
    comment = Column(Text, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    user = relationship("User", back_populates="reviews")
    product = relationship("Product", back_populates="reviews")


class Log(Base):
    __tablename__ = "logs"

    id = Column(Integer, primary_key=True, index=True)
    activity_type = Column(Enum("login", "update", "delete", "create", name="log_activities"), nullable=False)
    description = Column(Text, nullable=False)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=True)
    admin_id = Column(Integer, ForeignKey("admins.id"), nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
