import PostEditor from '@/components/Post/PostEditor';
import { prismaClient } from '@/utils/prismaClient';
import { Flex } from '@radix-ui/themes';

export default function CreatePostPage() {
  const createPost = async ({
    title,
    category,
    description,
    content,
  }: {
    title: string;
    category: string;
    description: string;
    content: string;
  }) => {
    'use server';

    const post = await prismaClient.post.create({
      data: {
        title,
        category,
        description,
        content,
      },
    });
  };

  return (
    <Flex className="w-full h-full">
      <PostEditor createPost={createPost} />
    </Flex>
  );
}
