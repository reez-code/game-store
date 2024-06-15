from db import cursor, conn

class Review:
    TABLE_NAME = "reviews"

    def __init__(self, review, game_id, user_id):
        self.id = None
        self.review = review
        self.game_id = game_id
        self.user_id = user_id
        self.game = None
        self.user = None
    
    @classmethod
    def create_table(cls):
        sql = f"""
           CREATE TABLE IF NOT EXISTS {cls.TABLE_NAME}(
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              review TEXT NOT NULL,
              game_id INTEGER NOT NULL REFERENCES games(id)
              user_id INTEGER NOT NULL REFERENCES users(id)
           )
        """
        cursor.execute(sql)
        conn.commit()

        print("Review Table is created.")
    
       
    def save(self):
        sql = f"""
            INSERT INTO {self.TABLE_NAME} (review, game_id, user_id)
            VALUES (?, ?, ?)
        """
        cursor.execute(sql, (self.review, self.game_id, self.user_id))
        conn.commit()

        self.id = cursor.lastrowid

        return self.to_dict()
    
    def to_dict(self):
        return {
            "id": self.id,
            "review": self.review,
            "game": self.game,
            "user": self.user
        }