import { Letters, assertStringLowerCaseLetter } from "./Letters";

type Trie = {
  insert: (word: string) => void;
  search: (word: string) => boolean;
  startsWith: (prefix: string) => boolean;
};

type TrieNode<Letter extends Letters = Letters> = {
  value: Letter | null;
  children: { [K in Letters]?: TrieNode<K> };
  isEndOfWord: boolean;
};

const insertWordIntoNode = (node: TrieNode, word: string): void => {
  const isEndOfWord = word.length === 1;
  const firstLetter = word[0];

  assertStringLowerCaseLetter(firstLetter);

  const childNode = node.children[firstLetter];

  if (childNode) {
    if (isEndOfWord) {
      childNode.isEndOfWord = true;
    } else {
      insertWordIntoNode(childNode, word.slice(1));
    }
  } else {
    const newNode: TrieNode = {
      value: firstLetter,
      children: {},
      isEndOfWord,
    };
    (node.children[firstLetter] as any) = newNode;

    if (!isEndOfWord) insertWordIntoNode(newNode, word.slice(1));
  }
};

const nodeSearch = (node: TrieNode, word: string, exact: boolean): boolean => {
  const firstLetter = word[0];

  assertStringLowerCaseLetter(firstLetter);

  const childNode = node.children[firstLetter];

  if (!childNode) return false;

  if (word.length === 1) return exact ? childNode.isEndOfWord : true;

  return nodeSearch(childNode, word.slice(1), exact);
};

function assertEmptyWord(word: string): void {
  if (word.length === 0) throw new Error("Word was an empty string!");
}

export const createTrie = (): Trie => {
  const rootNode: TrieNode = { value: null, children: {}, isEndOfWord: false };

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
