from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from models.category import Category
from models.game import Game
from models.users import User
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
    user = User(data.user_name, data.phone_number, data.email)
    user.save()
    game = Game(data.name, data.image, data.price, data.category_id, data.description, user.id)
    game.save()
    return game.to_dict()

@app.get("/sell")
def get_games():
    games = Game.find_all()
    return games


    
    




