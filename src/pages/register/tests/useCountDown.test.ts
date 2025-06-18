import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useCountDown } from '../model';
import { ONE_SECOND } from '../model';

describe('useCountDown', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should return the init value', () => {
    const { result } = renderHook(() => useCountDown(10));
    expect(result.current.counter).toBe(10);
  });

  it('should decrease the counter by one every second', async () => {
    const { result } = renderHook(() => useCountDown(3));

    const countDownPromise = result.current.startCountDown();
    expect(result.current.counter).toBe(3);

    act(() => {
      vi.advanceTimersByTime(ONE_SECOND);
    });
    expect(result.current.counter).toBe(2);

    act(() => {
      vi.advanceTimersByTime(ONE_SECOND);
    });
    expect(result.current.counter).toBe(1);

    act(() => {
      vi.advanceTimersByTime(ONE_SECOND);
    });
    expect(result.current.counter).toBe(0);

    await expect(countDownPromise).resolves.toBeUndefined();
  });

  it('should not decrease counter below 0', async () => {
    const { result } = renderHook(() => useCountDown(1));

    result.current.startCountDown();

    act(() => {
      vi.advanceTimersByTime(ONE_SECOND);
    });
    expect(result.current.counter).toBe(0);

    act(() => {
      vi.advanceTimersByTime(ONE_SECOND);
    });
    expect(result.current.counter).toBe(0);
  });
});
