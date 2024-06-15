from fastapi import FastAPI
from pydantic import BaseModel
from models.category import Category
app = FastAPI()

class Games(BaseModel):
    name: str

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/sell")
def get_game():
    return [{"name": "vikings"}]

@app.post("/sell")
def save_game(data: Games):
    print(data)

@app.get("/categories")
def categories():
    categories = Category.find_all()

    return categories