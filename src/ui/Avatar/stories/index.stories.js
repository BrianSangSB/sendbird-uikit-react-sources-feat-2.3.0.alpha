import React from 'react';
import Avatar from '../index';

export default { title: 'UI Components/Avatar' };

const src = 'https://avatars3.githubusercontent.com/u/46333979?s=460&v=4';
const src1 = 'https://avatars1.githubusercontent.com/u/1384313?s=460&v=4';
const src2 = 'https://avatars2.githubusercontent.com/u/11382805?s=460&v=4';
const src3 = '';

export const defaultAvatar = () => <Avatar />;

export const basicAvatar = () => <Avatar src={src} />;
export const basicAvatarWithDiamensions = () => <Avatar src={src} height="100px" width="100px" />;

export const oneSourceInArray = () => <Avatar src={[src]} />;
export const twoSourceInArray = () => <Avatar src={[src, src1]} />;
export const threeSourceInArray = () => <Avatar src={[src, src1, src2]} />;
export const fourOrMoreSourceInArray = () => <Avatar src={[src, src1, src2, src3]} />;

export const emptySourceInArray = () => [
  <Avatar src={['']} />,
  <br></br>,
  <Avatar src={['', '']} />,
  <br></br>,
  <Avatar src={['', '', '']} />,
  <br></br>,
  <Avatar src={['', '', '', '']} />,
];
