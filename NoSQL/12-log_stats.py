#!/usr/bin/env python3
"""Log stats"""
from pymongo import MongoClient

# Client
client = MongoClient('mongodb://127.0.0.1:27017')

# Database
db = client.logs
collection = db.ngnix

# Get total logs
total_logs = collection.count_documents({})
# Get methods
methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
methods_count = {method: collection.count_documents({"method": method}) for method in methods}
# Get status check
status_counts = collection.count_documents({"method": "GET", "path": "/status"})
# Print
print(f"{total_logs} logs")
print("Methods:")
for methods in methods:
    print(f"\tmethod {methods}: {methods_count[methods]}")
print(f"{status_counts} status check")
