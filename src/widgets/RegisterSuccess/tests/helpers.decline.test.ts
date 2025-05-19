import { describe, it, expect } from 'vitest';
import { decline } from '../model';

describe('decline', () => {
  it('should returns singular form for count === 1', () => {
    const declensions = ['word', 'words'];
    const result = decline(declensions, 1);
    expect(result).toBe('word');
  });

  it('should returns plural form for count === 0', () => {
    const declensions = ['word', 'words'];
    const result = decline(declensions, 0);
    expect(result).toBe('words');
  });

  it('should returns plural form for count > 1', () => {
    const declensions = ['word', 'words'];
    const result = decline(declensions, 2);
    expect(result).toBe('words');
  });

  it('should work with irregular plural forms', () => {
    const declensions = ['child', 'children'];
    const result = decline(declensions, 5);
    expect(result).toBe('children');
  });

  it('should work with words ending in "y"', () => {
    const declensions = ['city', 'cities'];
    const result = decline(declensions, 3);
    expect(result).toBe('cities');
  });

  it('should work with words ending in "s", "ch", etc.', () => {
    const declensions = ['box', 'boxes'];
    const result = decline(declensions, 2);
    expect(result).toBe('boxes');
  });

  it('should work with uncountable nouns', () => {
    const declensions = ['sheep', 'sheep'];
    const result = decline(declensions, 10);
    expect(result).toBe('sheep');
  });
});
