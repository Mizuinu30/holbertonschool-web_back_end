#!/usr/bin/env python3
"""Change school topics"""


from pymongo import MongoClient

def update_topics(mongo_collection, name, topics):
    """
    Update the topics of a school document based on the school name.

    :param mongo_collection: pymongo collection object
    :param name: String, the school name to update
    :param topics: List of strings, the list of topics approached in the school
    :return: None
    """
    if not name or not topics:
        print("Name and topics must be provided.")
        return

    result = mongo_collection.update_one({"name": name}, {"$set": {"topics": topics}})
    if result.matched_count == 0:
        print(f"No documents found with the name '{name}'.")
    else:
        print(f"Updated {result.matched_count} document(s).")