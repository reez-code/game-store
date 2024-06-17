from db import conn, cursor
from models.users import User
from models.game import Game
class Purchase:
    TABLE_NAME = "purchases"
    def __init__(self, user_id, game_id):
        self.id = None
        self.user_id = user_id
        self.game_id = game_id
        self.user = None
        self.game = None
    
    @classmethod
    def create_table(cls):
        sql = f"""
        CREATE TABLE IF NOT EXISTS {cls.TABLE_NAME}(
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              user_id INTEGER NOT NULL REFERENCES users(id),
              game_id INTEGER NOT NULL REFERENCES games(id)
              )
        """
        cursor.execute(sql)
        conn.commit()

        print("purchases table created")
    
    @classmethod
    def find_all(cls):
        sql = """
         SELECT purchases.*, users.*, games.*
         FROM purchases
         LEFT JOIN users
         ON purchases.user_id = users.id
         LEFT JOIN games
         ON purchases.game_id = games.id
        """
        rows = cursor.execute(sql).fetchall()

        return [
             cls.row_to_instance(row).to_dict() for row in rows
        ]
    
    @classmethod
    def row_to_instance(cls, row):
        if row == None:
            return None
        
        purchase = Purchase(row[1], row[2])
        purchase.id = row[0]

        user = User(row[4], row[5], row[6])
        user.id = row[3]

        game = Game(row[8], row[9], row[10], row[11], row[12], row[13])
        game.id = row[7]

        purchase.user = user.to_dict()
        purchase.game = game.to_dict()

        return purchase


    def save(self):
        sql = f"""
            INSERT INTO {self.TABLE_NAME} (user_id, game_id)
            VALUES (?, ?)
        """
        cursor.execute(sql, (self.user_id, self.game_id))
        conn.commit()

        self.id = cursor.lastrowid
        return self
    
    def to_dict(self):
        return {
            "id": self.id,
            "user": self.user,
            "game": self.game
        }
    

# Purchase.create_table()