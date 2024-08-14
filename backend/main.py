from fastapi import FastAPI, Depends, HTTPException, status
from typing import Optional
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


app = FastAPI()


@app.post('/doctor')
def create_doctor(request: Doctor, db: Session = Depends(database.get_db)):
    new_doctor = models.Doctor_Info(name=request.name, email=request.email, qualification=request.qualification, experience=request.experience)
    db.add(new_doctor)
    db.commit()
    db.refresh(new_doctor)
    return new_doctor

@app.post('/student')
def create_student(request: Student, db: Session = Depends(database.get_db)):
    new_student = models.Student_Info(name=request.name, email=request.email, hostel=request.hostel, room_no=request.room_no)
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