import { readFile, writeFile } from 'node:fs/promises';

export async function getStoredPosts() {
  try {
    const rawFileContent = await readFile('posts.json', { encoding: 'utf-8' });
    const data = JSON.parse(rawFileContent);
    return data.posts ?? [];
  } catch (error) {
    console.error('Error reading or parsing posts.json:', error);
    return [];
  }
}

export async function storePosts(posts) {
  try {
    await writeFile(
      'posts.json',
      JSON.stringify({ posts: posts || [] }, null, 2)
    );
  } catch (error) {
    console.error('Error writing to posts.json:', error);
  }
}
