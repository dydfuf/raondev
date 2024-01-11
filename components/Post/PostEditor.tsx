'use client';

import { parseMarkdownMetadata } from '@/utils/parseMarkdownMetadata';
import { Box, Flex } from '@radix-ui/themes';
import { useState } from 'react';
import Post from '../Post';
import readingTime from 'reading-time';

interface Props {
  createPost: ({
    title,
    category,
    description,
    content,
  }: {
    title: string;
    category: string;
    description: string;
    content: string;
  }) => Promise<void>;
}

export default function PostEditor({ createPost }: Props) {
  const [value, setValue] = useState('');

  const { title, category, description, content } =
    parseMarkdownMetadata(value);

  const stats = readingTime(content);

  const props = {
    post: content ?? '',
    metadata: {
      title: title ?? '',
      category: category ?? '',
      description: description ?? '',
    },
    prev: '',
    next: '',
    stats,
  };

  return (
    <Flex direction={'column'} className="w-full h-full">
      <button
        onClick={() => {
          if (title && category && description && content) {
            createPost({
              title: title,
              category: category,
              description: description,
              content: content,
            });
          }
        }}
      >
        Create
      </button>
      <Flex className="w-full h-full">
        <Box className="bg-white w-full h-full">
          <textarea
            className="border p-2 w-full h-full"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </Box>
        <Box className="bg-yellow w-full h-full">
          <Post {...props} />
        </Box>
      </Flex>
    </Flex>
  );
}
