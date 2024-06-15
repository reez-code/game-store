from db import cursor, conn

class Review:
    TABLE_NAME = "reviews"

    def __init__(self, review, game_id, user_id):
        self.id = None
        self.review = review
        self.game_id = game_id
        self.user_id = user_id
    
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

        