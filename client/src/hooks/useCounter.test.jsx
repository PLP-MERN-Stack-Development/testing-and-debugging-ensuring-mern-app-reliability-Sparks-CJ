import { renderHook, act } from '@testing-library/react';
import useCounter from './useCounter';

describe('useCounter hook', () => {
  it('should initialize counter with default value', () => {
    const { result } = renderHook(() => useCounter(5));
    expect(result.current.count).toBe(5);
  });

  it('should increment counter', () => {
    const { result } = renderHook(() => useCounter(0));
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });

  it('should decrement counter', () => {
    const { result } = renderHook(() => useCounter(2));
    act(() => result.current.decrement());
    expect(result.current.count).toBe(1);
  });
});
