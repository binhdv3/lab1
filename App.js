import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,TextInput } from 'react-native';
import { useState } from 'react';
import Products from './src/screens/Product-list/list-01';

export default function App() {

  const [status, setStatus] = useState(false);
  // khai báo list Products
  const listProducts = [
    {id:1, name: 'Mèo', mota: 'Rất là dễ thương',
    link_image:'https://tse1.mm.bing.net/th?id=OIP.eEYq9QD6WmzgmTElubNhIwHaHa&pid=Api&rs=1&c=1&qlt=95&w=100&h=100'},
    {id:2, name: 'Chó', mota: 'Trung thành',
    link_image: 'https://tse1.mm.bing.net/th?id=OIP.p5O-CNvf1cLkkF-InutfrQHaId&pid=Api&rs=1&c=1&qlt=95&w=105&h=120'},
    {id:2, name: 'Gấu', mota: 'Ăn cỏ',
    link_image:'https://tse1.mm.bing.net/th?id=OIP.DF1rBQQAhXdcvrZ35jqNvgHaE8&pid=Api&rs=1&c=1&qlt=95&w=174&h=116'},
    {id:2, name: 'Cá', mota: 'Hay chết đuối', 
    link_image:'https://tse1.mm.bing.net/th?id=OIP.zSMfEcWePi7sJE0I31XVXgHaE7&pid=Api&rs=1&c=1&qlt=95&w=150&h=99'}
  ];

  return (
    <View style={styles.container}>
      <Text>Họ tên: Đào Văn Bình</Text>
      <Text>MSV: PH26010</Text>
      <Button 
        title='Thêm mới'
        onPress = {() => setStatus(!status)}
      />
      { 
        status
        ?
          <>
            <View style={styles.layoutview1}>
              <TextInput style={styles.layout_textinput}>
               Tên
              </TextInput>
              <TextInput style={styles.layout_textinput}>
                Mô tả
              </TextInput>
             <TextInput style={styles.layout_textinput}>
               Link ảnh
              </TextInput>

              <Button 
                title='cancel'
                onPress = {() => setStatus(!status)}
              />
          
              <Button style = {styles.button}
                title='Save'
              />
            </View>
          </>
          :null
      }
      
      <View style={styles.layoutview2}>
          <Products 
            data = {listProducts}
          />
         
      </View>
      <StatusBar style="auto" />
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    marginLeft: 30,
    marginRight: 30,
  },

  button:{
    marginTop: 10,
  },
   
  layoutview1: {
    width: 300,
    height: 300,
    borderStyle: 'solid',
    borderColor: "#000000",
    borderWidth: 1,
    marginTop:20,
    alignItems: 'center',
    borderRadius: 10
  },

  layoutview2: {
    width: 300,
    height: 300,
    borderStyle: 'solid',
    borderColor: "#000000",
    borderWidth: 1,
    marginTop:20,
    padding:10,
    borderRadius: 10,
  },

  layout_textinput: {
    paddingLeft: 10,
    width: 200,
    height: 30,
    borderStyle: 'solid',
    borderColor: "#000000",
    borderWidth: 1,
    marginTop:20,
    borderRadius: 10
  }
});
