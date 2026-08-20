import unittest
from src.main import app

class BookstoreTestCase(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True

    def test_get_books(self):
        """Test the /api/books endpoint"""
        response = self.app.get('/api/books')
        self.assertEqual(response.status_code, 200)

if __name__ == '__main__':
    unittest.main()
