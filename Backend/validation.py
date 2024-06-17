from pydantic import BaseModel
class GamesModel(BaseModel):
    user_name: str
    phone_number: str
    email: str
    name: str
    image: str
    price: int
    category_id: int
    description: str


