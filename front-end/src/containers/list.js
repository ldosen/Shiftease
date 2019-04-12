import './Calendar.css';
import React from "react";
import dateFns from "date-fns";
import { List, ListItem } from 'react-native-elements'

const list = [
    {
      name: 'Ramsha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Manager'
    },
    {
      name: 'Ramsha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Barista'
    },


  renderEmployees({ item }) {
    <ListItem
      roundAvatar
      title={item.name}
      subtitle={item.subtitle}
      avatar={{uri:item.avatar_url}}
  ]