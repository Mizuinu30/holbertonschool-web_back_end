#!/usr/bin/env python3
""" This module contains a coroutine."""


import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """ This a coroutine that takes in two arguments."""
    tasks = [asyncio.create_task(wait_random(max_delay)) for i in range(n)]
    delay = []
    for future in asyncio.as_completed(tasks):
        delay.append(await future)
    return delay
