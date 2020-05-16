import { createTrie } from ".";

describe("Trie", () => {
  it("should handle leetcode example", () => {
    const trie = createTrie();

    trie.insert("apple");
    expect(trie.search("apple")).toBe(true);
    expect(trie.search("app")).toBe(false);
    expect(trie.startsWith("app")).toBe(true);
    trie.insert("app");
    expect(trie.search("app")).toBe(true);
  });

  describe("Inserting", () => {
    it("should insert without throwing errors", () => {
      const trie = createTrie();
      trie.insert("test");
      trie.insert("testing");
      trie.insert("banana");
      trie.insert("team");
    });
    it("can handle inserting the same word twice", () => {
      const trie = createTrie();
      trie.insert("apple");
      trie.insert("apple");
    });
  });

  describe("Searching", () => {
    const trie = createTrie();
    trie.insert("test");
    trie.insert("testing");
    trie.insert("wow");

    describe("Exact search", () => {
      it("can find inserted words", () => {
        expect(trie.search("test")).toBe(true);
        expect(trie.search("testing")).toBe(true);
        expect(trie.search("wow")).toBe(true);
      });

      it("should return false if searching for a non-existent word", () => {
        expect(trie.search("banana")).toBe(false);
      });

      it("should return false if searching for the first part of an existing word", () => {
        expect(trie.search("te")).toBe(false);
      });

      it("should return false if searching for more than an existing word", () => {
        expect(trie.search("testingmore")).toBe(false);
      });
    });

    describe("Prefix search", () => {
      it("can find words that start with the provided string", () => {
        expect(trie.startsWith("te")).toBe(true);
        expect(trie.startsWith("testin")).toBe(true);
        expect(trie.startsWith("w")).toBe(true);
      });
      it("can find words that are also an exact match", () => {
        expect(trie.startsWith("test")).toBe(true);
        expect(trie.startsWith("testing")).toBe(true);
        expect(trie.startsWith("wow")).toBe(true);
      });
      it("returns false for strings that aren't contained in the trie", () => {
        expect(trie.startsWith("banana")).toBe(false);
        expect(trie.startsWith("testingmore")).toBe(false);
        expect(trie.startsWith("d")).toBe(false);
      });
    });
  });

  describe("Validation", () => {
    it.each([[""], ["A"], [" "], ["!"]])(
      "should error when '%s's are passed to any of the functions",
      (input) => {
        const trie = createTrie();
        expect(() => trie.insert(input)).toThrow();
        expect(() => trie.search(input)).toThrow();
        expect(() => trie.startsWith(input)).toThrow();
      }
    );
  });
});
