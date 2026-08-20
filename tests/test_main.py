import unittest
from src.main import app

class TestMain(unittest.TestCase):
    
    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True

    def test_get_books(self):
        response = self.app.get('/books')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'Here you will get the book list.', response.data)

if __name__ == '__main__':
    unittest.main()