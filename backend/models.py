from sqlalchemy import Boolean, Column, Integer, String, Decimal
from sqlalchemy.sql.expression import null, text
import database
from sqlalchemy.sql.sqltypes import TIMESTAMP


class Doctor_Info(database.Base):
    __tablename__="Doctor"
    id = Column(Integer, primary_key=True, index=True, nullable=False)
    name = Column(String, index=True)
    qualification = Column(String, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    experience = Column(Integer, index=True)
    hashed_password = Column(String)
    is_active = Column(Boolean, server_default='TRUE')
    created_at = Column(TIMESTAMP(timezone=True), server_default=text('now()'))


class Student_Info(database.Base):
    __tablename__="Student"
    id = Column(Integer, primary_key=True, index=True, nullable=False)
    name = Column(String, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hostel = Column(String, index=True)
    room_no = Column(Integer, index=True)
    hashed_password = Column(String)
    is_active = Column(Boolean, server_default='TRUE')
    created_at = Column(TIMESTAMP(timezone=True), server_default=text('now()'))


class Medicine(database):
    __tablename__="Medicine"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    price = Column(Decimal, index=True)
    quantity = Column(Integer, index=True)
    created_at = Column(TIMESTAMP(timezone=True), server_default=text('now()'))
