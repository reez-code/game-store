from db import conn, cursor

class User:
    TABLE_NAME = "users"
    user_id = None
    def __init__(self, name, phone_number, email):
        self.id = None
        self.name = name
        self.phone_number = phone_number
        self.email = email
    
    @classmethod
    def create_table(cls):
        sql = f"""
            CREATE TABLE IF NOT EXISTS {cls.TABLE_NAME}(
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name TEXT NOT NULL,
              phone_number TEXT NOT NULL,
              email TEXT NOT NULL
            )
        """
        cursor.execute(sql)
        conn.commit()
    
    def save(self):
        sql = f"""
            INSERT INTO {self.TABLE_NAME} (name, phone_number, email)
            VALUES (?, ?, ?)
        """
        cursor.execute(sql, (self.name, self.phone_number, self.email))
        conn.commit()

        self.id = cursor.lastrowid
        self.user_id = cursor.lastrowid
        return self.to_dict()

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "phone_number": self.phone_number,
            "email": self.email
        }
    
    @classmethod
    def drop_table(cls):
            sql = f"""
                  DROP TABLE { cls.TABLE_NAME}
            """
            cursor.execute(sql)
            conn.commit
    
# User.create_table()

# # User.drop_table()
# the_game_vault = User("TheGameVault", "0710010020", "game_vault@gmail.com")
