import React, { Component } from 'react';
import Image from './Image';
import UserProfile from './UserProfile';

const url = "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg"

const joao = {
  id: 102,
  name: "João",
  email: "joao@gmail.com",
  avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
};

const amelia = {
  id: 77,
  name: "Amélia",
  email: "amelia@gmail.com",
  avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
};

export default class App extends Component {
  render() {
    return (
      <main>
        <Image source={url} alternativeText='cute cat staring' />
        <UserProfile user={joao} />
        <UserProfile user={amelia} />
      </main>
    )
  }
}
