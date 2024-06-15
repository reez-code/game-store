from pydantic import BaseModel
class GamesModel(BaseModel):
    name: str
    image: str
    price: int
    category: int
    description: str

class UserModel(BaseModel):
    user_name: str
    phone_number: str
    email: str