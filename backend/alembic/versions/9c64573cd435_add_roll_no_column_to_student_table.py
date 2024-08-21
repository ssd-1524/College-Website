"""Add roll_no column to Student table

Revision ID: 9c64573cd435
Revises: 
Create Date: 2024-08-22 00:44:18.978234

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision: str = '9c64573cd435'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index('ix_Doctor_email', table_name='Doctor')
    op.drop_index('ix_Doctor_experience', table_name='Doctor')
    op.drop_index('ix_Doctor_id', table_name='Doctor')
    op.drop_index('ix_Doctor_name', table_name='Doctor')
    op.drop_index('ix_Doctor_qualification', table_name='Doctor')
    op.drop_table('Doctor')
    op.drop_index('ix_Medicine_id', table_name='Medicine')
    op.drop_index('ix_Medicine_name', table_name='Medicine')
    op.drop_index('ix_Medicine_price', table_name='Medicine')
    op.drop_index('ix_Medicine_quantity', table_name='Medicine')
    op.drop_table('Medicine')
    op.drop_index('ix_Student_email', table_name='Student')
    op.drop_index('ix_Student_hostel', table_name='Student')
    op.drop_index('ix_Student_id', table_name='Student')
    op.drop_index('ix_Student_name', table_name='Student')
    op.drop_index('ix_Student_room_no', table_name='Student')
    op.drop_table('Student')
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('Student',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('name', sa.VARCHAR(), autoincrement=False, nullable=True),
    sa.Column('email', sa.VARCHAR(), autoincrement=False, nullable=False),
    sa.Column('hostel', sa.VARCHAR(), autoincrement=False, nullable=True),
    sa.Column('room_no', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('hashed_password', sa.VARCHAR(), autoincrement=False, nullable=True),
    sa.Column('is_active', sa.BOOLEAN(), server_default=sa.text('true'), autoincrement=False, nullable=True),
    sa.Column('created_at', postgresql.TIMESTAMP(timezone=True), server_default=sa.text('now()'), autoincrement=False, nullable=True),
    sa.PrimaryKeyConstraint('id', name='Student_pkey')
    )
    op.create_index('ix_Student_room_no', 'Student', ['room_no'], unique=False)
    op.create_index('ix_Student_name', 'Student', ['name'], unique=False)
    op.create_index('ix_Student_id', 'Student', ['id'], unique=False)
    op.create_index('ix_Student_hostel', 'Student', ['hostel'], unique=False)
    op.create_index('ix_Student_email', 'Student', ['email'], unique=True)
    op.create_table('Medicine',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('name', sa.VARCHAR(), autoincrement=False, nullable=True),
    sa.Column('price', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('quantity', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('created_at', postgresql.TIMESTAMP(timezone=True), server_default=sa.text('now()'), autoincrement=False, nullable=True),
    sa.PrimaryKeyConstraint('id', name='Medicine_pkey')
    )
    op.create_index('ix_Medicine_quantity', 'Medicine', ['quantity'], unique=False)
    op.create_index('ix_Medicine_price', 'Medicine', ['price'], unique=False)
    op.create_index('ix_Medicine_name', 'Medicine', ['name'], unique=False)
    op.create_index('ix_Medicine_id', 'Medicine', ['id'], unique=False)
    op.create_table('Doctor',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('name', sa.VARCHAR(), autoincrement=False, nullable=True),
    sa.Column('qualification', sa.VARCHAR(), autoincrement=False, nullable=True),
    sa.Column('email', sa.VARCHAR(), autoincrement=False, nullable=False),
    sa.Column('experience', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('hashed_password', sa.VARCHAR(), autoincrement=False, nullable=True),
    sa.Column('is_active', sa.BOOLEAN(), server_default=sa.text('true'), autoincrement=False, nullable=True),
    sa.Column('created_at', postgresql.TIMESTAMP(timezone=True), server_default=sa.text('now()'), autoincrement=False, nullable=True),
    sa.PrimaryKeyConstraint('id', name='Doctor_pkey')
    )
    op.create_index('ix_Doctor_qualification', 'Doctor', ['qualification'], unique=False)
    op.create_index('ix_Doctor_name', 'Doctor', ['name'], unique=False)
    op.create_index('ix_Doctor_id', 'Doctor', ['id'], unique=False)
    op.create_index('ix_Doctor_experience', 'Doctor', ['experience'], unique=False)
    op.create_index('ix_Doctor_email', 'Doctor', ['email'], unique=True)
    # ### end Alembic commands ###
