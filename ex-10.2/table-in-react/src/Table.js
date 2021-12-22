import React, { Component } from 'react'
import UserName from './UserName';
import UserOtherInfo from './UserOtherInfo';

export default class Table extends Component {
  render() {
    const user = [
      {
        id: 102,
        name: "João",
        email: "joao@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
      },

      {
        id: 77,
        name: "Amélia",
        email: "amelia@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
      }
    ];

    return (


      user.map(
        (elem) => (
          <div  key={elem.id} style={{marginTop: '20px', padding:'10px'}}>
            <UserName />
            <UserOtherInfo email={elem.email} id={elem.id} />
          </div>
        )
      )

    );
  }
}
