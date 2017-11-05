/**
 * Created by zyj on 2017/11/1.
 */
import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'

class Header extends  Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <View style={styles.header}>
        <Text>买菜网</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    height: 30
  }
})

export default Header