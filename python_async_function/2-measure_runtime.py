#!bin/usr/env python3
"""This module contains a coroutine."""

import asyncio
from typing import List
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """This function measures the total execution time for wait n."""
    tasks = asyncio.run(await_n(n, max_delay))
    start = time.perf_counter()
    asyncio.run(wait_n(n, max_delay))
    end = time.perf_counter()
    total_time = end - start
    return total_time / n

