#!/usr/bin/env python3
""" This module contains the function element_length """


from typing import List, Tuple


def element_length(lst: List[str]) -> List[Tuple[str, int]]:
    """ This function takes a list lst of strings and returns a list of
    tuples, each tuple having a string and an int. The string of the tuple"""
    return [(i, len(i)) for i in lst]
