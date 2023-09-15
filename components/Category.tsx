import { Badge, Text, badgePropDefs } from '@radix-ui/themes';

interface Props {
  category: string;
}

export default function Category({ category }: Props) {
  return (
    <Badge
      key={category}
      color={getRandomBadgeColors(category)}
      size={'1'}
      radius={'full'}
      highContrast
      variant={'surface'}
    >
      <Text>{category}</Text>
    </Badge>
  );
}

const simpleHash = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash += str.charCodeAt(i);
  }
  return hash;
};
const getRandomBadgeColors = (category: string) => {
  const hashValue = simpleHash(category);
  return badgePropDefs.color.values[
    hashValue % badgePropDefs.color.values.length
  ];
};
