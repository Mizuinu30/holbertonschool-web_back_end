#!/usr/bin/env python3
""" 8. List all documents in Python"""


from pymongo import MongoClient

def list_all(mongo_collection):
    """
    List all documents in the specified pymongo collection object.

    :param mongo_collection: Pymongo collection object
    :return: List of documents in the collection, or an empty list if no documents are found
    """
    try:
        # Fetch all documents in the collection
        documents = list(mongo_collection.find())
        return documents
    except Exception as e:
        print(f"An error occurred: {e}")
        return []
