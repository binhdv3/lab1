import { FlatList,StyleSheet,Text,View,Image } from "react-native";

const ProductItem = (props) => {
    const item = props.item;
    return (
        <>
            <Image 
                style={styles.image} 
                source={
                    { uri: item.link_image }
                } 
            />

            <Text style = {styles.text}>Name: {item.name}</Text>
            <Text style = {styles.text}>Mota: {item.mota}</Text>
        </>
    )

}

const Products = (props) => {
    const list = props.data;
    return (
        <>
            <FlatList
                data={list}
                renderItem = {(item) => <ProductItem item={item.item} />}
                keyExtractor={(item) => item.id}
            />
        </>
    )
}

export default Products

const styles = StyleSheet.create({
    text:{
        fontSize: 20,
        fontStyle: 'italic',
        color: 'black',
    },

    image:{
        width: 100,
        height: 100,
    }
});

