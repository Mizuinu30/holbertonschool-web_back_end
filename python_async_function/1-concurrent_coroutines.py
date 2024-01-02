#!/usr/bin/env python3
""" This module contains a coroutine."""


import asyncio
from typing import List


wait_random = __import__('0-basic_async_syntax').wait_random

async def wait_n(n: int, max_delay: int) -> List[float]:
    """ This a coroutine that takes in two arguments."""
    tasks = [wait_random(max_delay) for _ in range(n)]
    delays = []
    for future in asyncio.as_completed(tasks):
        delays = await future
        delays.append(delays)
    return delays
