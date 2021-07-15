import { GetStaticProps } from 'next';
import React from 'react';
import { Button, Htag, P, Rating, Tag } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';

function Home({ menu }: HomeProps): JSX.Element {
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
      <ul>
        {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
      </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number;
}