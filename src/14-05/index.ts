import { assertStringLowerCaseLetter } from "./Letters";

type Trie = {
  insert: (word: string) => void;
  search: (word: string) => boolean;
  startsWith: (prefix: string) => boolean;
};

type TrieNode = {
  value?: string;
  children: { [letter: string]: TrieNode };
  isEndOfWord?: boolean;
};

const insertWordIntoNode = (node: TrieNode, word: string): void => {
  let currentNode = node;
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    assertStringLowerCaseLetter(letter);
    if (!(letter in currentNode.children)) {
      currentNode.children[letter] = {
        children: {},
      };
    }
    if (!word[i + 1]) currentNode.children[letter].isEndOfWord = true;

    currentNode = currentNode.children[letter];
  }
};

const nodeSearch = (node: TrieNode, word: string, exact: boolean): boolean => {
  let currentNode = node;
  for (const letter of word) {
    assertStringLowerCaseLetter(letter);
    if (letter in currentNode.children) {
      currentNode = currentNode.children[letter];
    } else return false;
  }

  if (exact) {
    return Boolean(currentNode.isEndOfWord);
  }
  return true;
};

function assertEmptyWord(word: string): void {
  if (word.length === 0) throw new Error("Word was an empty string!");
}

export const createTrie = (): Trie => {
  const rootNode: TrieNode = { children: {} };

  const insert: Trie["insert"] = (word) => {
    assertEmptyWord(word);
    insertWordIntoNode(rootNode, word);
  };
  const search: Trie["search"] = (word) => {
    assertEmptyWord(word);
    return nodeSearch(rootNode, word, true);
  };
  const startsWith: Trie["startsWith"] = (prefix) => {
    assertEmptyWord(prefix);
    return nodeSearch(rootNode, prefix, false);
  };

  return {
    insert,
    search,
    startsWith,
  };
};
