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
        print(rows)

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
