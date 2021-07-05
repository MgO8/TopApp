import React from 'react';
import { Button } from '../components';
import { Htag } from '../components/Htags/Htag';
import { P } from '../components/P/P';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Meow</Htag>
      <Button appearance='primary' arrow='right'>Button</Button>
      <Button appearance='ghost' arrow='down'>Button</Button>
      <P size='l'>Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно пользоваться дома или в дороге. Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять специалиста в душный офис. В этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в разных местах.</P>
    </>
  );
}
