#!/usr/bin/env python3
""" 9. Insert a document in Python"""


from pymongo import MongoClient
from bson import ObjectId

def insert_school(mongo_collection, **kwargs):
    """
    Insert a new document in a collection based on kwargs.

    :param mongo_collection: pymongo collection object
    :param kwargs: keyword arguments that make up the document to insert
    :return: The new document's _id
    """
    if not kwargs:
        print("No data provided to insert.")
        return None

    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id

