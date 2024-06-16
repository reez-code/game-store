from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from models.category import Category
from models.game import Game
from validation import GamesModel
app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins = ["*"], allow_credentials = True, allow_methods = ["*"], allow_headers = ["*"])


@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/categories")
def categories():
    categories = Category.find_all()

    return categories

@app.post("/sell")
def save_game(data:GamesModel):
    game = Game(data.name, data.image, data.price, data.category_id, data.description)
    game.save()
    return game.to_dict()




    
    




