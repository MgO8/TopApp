import React from 'react';
import { Button, Htag, P, Rating, Tag } from '../components';

export default function Home(): JSX.Element {
  const [rating, setRating] = React.useState<number>(1);
  return (
    <>
      <Htag tag='h1'>Meow</Htag>
      <Button
        appearance='primary'
        arrow='right'
      >
        Button
      </Button>
      <Button
        appearance='ghost'
        arrow='down'
      >
        Button
      </Button>
      <P size='l'>Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно пользоваться дома или в дороге. Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять специалиста в душный офис. В этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в разных местах.</P>
      <Tag
        color='green'
        size='m'
      >
        Meow
      </Tag>
      <Tag
        color='red'
        size='s'
      >
        Meow
      </Tag>
      <Tag
        color='ghost'
        size='m'
      >
        Meow
      </Tag>
      <Tag
        color='primary'
        size='m'
      >
        Meow
      </Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}
