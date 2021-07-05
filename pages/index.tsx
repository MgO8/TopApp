import React from 'react';
import { Button } from '../components';
import { Htag } from '../components/Htags/Htag';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Meow</Htag>
      <Button appearance='primary' arrow='right'>Button</Button>
      <Button appearance='ghost' arrow='right'>Button</Button>
    </>
  );
}
