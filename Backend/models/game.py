from db import conn, cursor
from models.category import Category
from models.users import User
class Game:
    TABLE_NAME = "games"
    def __init__(self, name, image, price, category_id, description, user_id=None):
        self.id = None
        self.name =  name
        self.image = image
        self.price = price
        self.category_id = category_id
        self.description = description
        self.user_id = user_id
        self.category = None
        self.user = None
      

    @classmethod
    def find_all(cls):
        sql = """
            SELECT games.*, categories.*, users.* 
            FROM games
            LEFT JOIN categories
            ON games.category_id = categories.id
            LEFT JOIN users
            ON games.user_id = users.id
            """
        rows = cursor.execute(sql).fetchall()
        

        return [
             cls.row_to_instance(row).to_dict() for row in rows
        ]
          
    @classmethod
    def row_to_instance(cls, row):
        if row == None:
              return None
        game = cls(row[1], row[2], row[3], row[4], row[5], row[6])
        game.id = row[0] 
        
        category = Category(row[8])
        category.id = row[7]

        user = User(row[10], row[11], row[12])
        user.id = row[9]

        game.category = category.to_dict()
        game.user = user.to_dict()
        
        return game
    
    @classmethod
    def create_table(cls):
        sql = f"""
           CREATE TABLE IF NOT EXISTS {cls.TABLE_NAME} (
               id INTEGER PRIMARY KEY AUTOINCREMENT,
               name TEXT NOT NULL,
               image VARCHAR NOT NULL,
               price INTEGER NOT NULL,
               category_id INTEGER NOT NULL REFERENCES categories(id),
               description VARCHAR NOT NULL,
               user_id INTEGER REFERENCES users(id)
           )
        """
        cursor.execute(sql)
        conn.commit()
        print("Game table created successfully")

    def save(self):
        sql = f"""
            INSERT INTO {self.TABLE_NAME} (name, image, price, category_id, description, user_id)
            VALUES (?, ?, ?, ?, ?, ?)
        """
        cursor.execute(sql, (self.name, self.image, self.price, self.category_id, self.description, self.user_id))
        conn.commit()
        self.id = cursor.lastrowid
        return self

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "image": self.image,
            "price": self.price,
            "category": self.category,
            "description": self.description,
            "user": self.user
        }
    
    
    @classmethod
    def drop_table(cls):
            sql = f"""
                  DROP TABLE {cls.TABLE_NAME}
            """
            cursor.execute(sql)
            conn.commit

# Game.drop_table()

# Game.create_table()
# turismo = Game("Gran Turismo 7", "https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Gran_Turismo_7_cover_art.jpg/220px-Gran_Turismo_7_cover_art.jpg", 8000, 10, "Gran Turismo 7 is a 2022 racing simulation video game developed by Polyphony Digital and published by Sony Interactive Entertainment. The game is the eighth main installment and the thirteenth overall in the Gran Turismo series.It was released for the PlayStation 4 and PlayStation 5. Gran Turismo 7 also features virtual reality support compatible with PlayStation VR2 through a free in-game update.", 3)
# turismo.save()

# horizon = Game("Horizon Forbidden West", "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Horizon_Forbidden_West_cover_art.jpg/220px-Horizon_Forbidden_West_cover_art.jpg", 8000, 3, "Horizon Forbidden West is a 2022 action role-playing game developed by Guerrilla Games and published by Sony Interactive Entertainment. The sequel to Horizon Zero Dawn (2017), the game is set in a post-apocalyptic version of the Western United States, recovering from the aftermath of an extinction event caused by a rogue robot swarm. The player, assuming control of Aloy, must venture into the Forbidden West to find the source of a mysterious plague that kills all it infects. The player can explore the open world and complete quests using ranged and melee weapons against machine creatures and hostile rebels. Forbidden West introduced new gameplay mechanics to the franchise, such as new traversal tools, underwater exploration, and expanded melee combat.", 3)
# horizon.save()