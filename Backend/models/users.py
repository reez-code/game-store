from db import conn, cursor

class User:
    TABLE_NAME = "users"

    def __init__(self, name, phone_number, email):
        self.id = None
        self.name = name
        self.phone_number = phone_number
        self.email = email
    
    @classmethod
    def create_table(cls):
        sql = f"""
            CREATE TABLE IF NOT EXISTS {cls.TABLE_NAME}(
              id INTEGER PRIMARY K
              EY AUTOINCREMENTS,
              name TEXT NOT NULL,
              phone_number INTEGER NOT NULL,
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
        return self.to_dict()

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "phone_number": self.phone_number,
            "email": self.email
        }