#!/usr/bin/env python3
""" This module contains a coroutine."""


import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> list:
    tasks = [wait_random(max_delay) for _ in range(n)]
    completed_tasks = []
    for future in asyncio.as_completed(tasks):
        result = await future
        completed_tasks.append(result)
    return completed_tasks
