from fastapi import FastAPI, Depends, HTTPException, status
from typing import Optional
from fastapi.middleware.cors import CORSMiddleware 
import models
import database
from sqlalchemy.orm import Session
from pydantic import BaseModel


models.database.Base.metadata.create_all(bind=database.engine)


class Doctor(BaseModel):
    name: str
    email: str
    qualification: str
    experience: int


class Student(BaseModel):
    name: str
    email: str
    hostel: str
    room_no: int


class Medicine(BaseModel):
    name: str
    price: float
    quantity: int


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Replace with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post('/doctor')
def create_doctor(request: Doctor, db: Session = Depends(database.get_db)):
    new_doctor = models.Doctor_Info(**dict(request))
    db.add(new_doctor)
    db.commit()
    db.refresh(new_doctor)
    return new_doctor

@app.post('/student')
def create_student(request: Student, db: Session = Depends(database.get_db)):
    new_student = models.Student_Info(**dict(request))
    db.add(new_student)
    db.commit()
    db.refresh(new_student)
    return new_student


@app.get('/doctor/{id}')
def get_doctor(id: int, db: Session = Depends(database.get_db)):
    doctor = db.query(models.Doctor_Info).filter(models.Doctor_Info.id == id).first()
    if doctor is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, 
            detail=f"Doctor with id {id} not found"
            )
    return doctor


@app.get('/student/{id}')
def get_student(id: int, db: Session = Depends(database.get_db)):
    student = db.query(models.Student_Info).filter(models.Student_Info.id == id).first()
    if student is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, 
            detail=f"Student with id {id} not found"
            )
    return student


@app.delete('/doctor/{id}')
def delete_doctor(id: int, db: Session = Depends(database.get_db)):
    doctor = db.query(models.Doctor_Info).filter(models.Doctor_Info.id == id).first()
    if doctor is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, 
            detail=f"Doctor with id {id} not found"
            )
    db.delete(doctor)
    db.commit()
    return {"message": "Doctor deleted successfully"}


@app.delete('/student/{id}')
def delete_student(id: int, db: Session = Depends(database.get_db)):
    student = db.query(models.Student_Info).filter(models.Student_Info.id == id).first()
    if student is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, 
            detail=f"Student with id {id} not found"
            )
    db.delete(student)
    db.commit()
    return {"message": "Student deleted successfully"}


@app.put('/doctor/{id}')
def update_doctor(id: int, request: Doctor, db: Session = Depends(database.get_db)):
    doctor = db.query(models.Doctor_Info).filter(models.Doctor_Info.id == id).first()
    if doctor is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, 
            detail=f"Doctor with id {id} not found"
            )
    db.query(models.Doctor_Info).filter(models.Doctor_Info.id == id).update(**dict(request))
    db.commit()
    return {"message": "Doctor updated successfully"}


@app.put('/student/{id}')
def update_student(id: int, request: Student, db: Session = Depends(database.get_db)):
    student = db.query(models.Student_Info).filter(models.Student_Info.id == id).first()
    if student is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, 
            detail=f"Student with id {id} not found"
            )
    db.query(models.Student_Info).filter(models.Student_Info.id == id).update(**dict(request))
    db.commit()
    return {"message": "Student updated successfully"}


@app.post('/medicine')
def create_medicine(request: Medicine, db: Session = Depends(database.get_db)):
    new_medicine = models.Medicine(**dict(request))
    db.add(new_medicine)
    db.commit()
    db.refresh(new_medicine)
    return new_medicine


@app.get('/medicine/{id}')
def get_medicine(id: int, db: Session = Depends(database.get_db)):
    medicine = db.query(models.Medicine).filter(models.Medicine.id == id).first()
    if medicine is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, 
            detail=f"Medicine with id {id} not found"
            )
    return medicine


@app.delete('/medicine/{id}')
def delete_medicine(id: int, db: Session = Depends(database.get_db)):
    medicine = db.query(models.Medicine).filter(models.Medicine.id == id).first()
    if medicine is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, 
            detail=f"Medicine with id {id} not found"
            )
    db.delete(medicine)
    db.commit()
    return {"message": "Medicine deleted successfully"}


@app.put('/medicine/{id}')
def update_medicine(id: int, request: Medicine, db: Session = Depends(database.get_db)):
    medicine = db.query(models.Medicine).filter(models.Medicine.id == id).first()
    if medicine is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, 
            detail=f"Medicine with id {id} not found"
            )
    db.query(models.Medicine).filter(models.Medicine.id == id).update(**dict(request))
    db.commit()
    return {"message": "Medicine updated successfully"}


@app.get('/medicine/{name}')
def get_medicine_by_name(name: str, db: Session = Depends(database.get_db)):
    medicine = db.query(models.Medicine).filter(models.Medicine.name == name).first()
    if medicine is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, 
            detail=f"Medicine with name {name} not found"
            )
    return medicine


