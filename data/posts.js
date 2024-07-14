import { readFile, writeFile } from 'node:fs/promises';

async function getStoredPosts() {
  const rawFileContent = await readFile('posts.json', { encoding: 'utf-8' }),
    data = JSON.parse(rawFileContent),
    storedPosts = data.posts ?? [];
  return storedPosts;
}

function storePosts(posts) {
  return writeFile('posts.json', JSON.stringify({ posts: posts || [] }));
}

const _getStoredPosts = getStoredPosts;
export { _getStoredPosts as getStoredPosts };
const _storePosts = storePosts;
export { _storePosts as storePosts };
