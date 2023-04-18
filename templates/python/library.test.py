"""
To run this test:

python3 library.test.py
"""

import library

import unittest

class TestSum(unittest.TestCase):
    def test_basic(self):
        self.assertEqual(library.sum(1,1), 2);

if __name__ == '__main__':
    unittest.main()
