#!/usr/bin/env python3
"""Log stats"""
from pymongo import MongoClient


client = MongoClient('mongodb://127.0.0.1:27017')
db = client.logs
collection = db.ngnix

# Get total logs
total_logs = collection.count_documents({})

methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
methods_count = {method: collection.count_documents({"method": method}) for method in methods}

status_counts = collection.count_documents({"method": "GET", "path": "/status"})

print(f"{total_logs} logs")
print("Methods:")
for methods in methods:
    print(f"\tmethod {methods}: {methods_count[methods]}")
print(f"{status_counts} status check")
