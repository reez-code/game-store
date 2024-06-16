from pydantic import BaseModel
class GamesModel(BaseModel):
    name: str
    image: str
    price: int
    category_id: int
    description: str
