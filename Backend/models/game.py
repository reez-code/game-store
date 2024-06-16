from db import conn, cursor
class Game:
    TABLE_NAME = "games"
    def __init__(self, name, image, price, category_id, description):
        self.id = None
        self.name =  name
        self.image = image
        self.price = price
        self.category_id = category_id
        self.description = description
        self.category = None
      
        

    @classmethod
    def create_table(cls):
        sql = f"""
           CREATE TABLE IF NOT EXISTS {cls.TABLE_NAME} (
               id INTEGER PRIMARY KEY AUTOINCREMENT,
               name TEXT NOT NULL,
               image VARCHAR NOT NULL,
               price INTEGER NOT NULL,
               category_id INTEGER NOT NULL REFERENCES categories(id),
               description VARCHAR NOT NULL
           )
        """
        cursor.execute(sql)
        conn.commit()
        print("Game table created successfully")

    def save(self):
        sql = f"""
            INSERT INTO {self.TABLE_NAME} (name, image, price, category_id, description)
            VALUES (?, ?, ?, ?, ?)
        """
        cursor.execute(sql, (self.name, self.image, self.price, self.category_id, self.description))
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
        }
    
    
    @classmethod
    def drop_table(cls):
            sql = f"""
                  DROP TABLE {
                        cls.TABLE_NAME}
            """
            cursor.execute(sql)
            conn.commit

# Game.drop_table()

# Game.create_table()
