import React from 'react';
import { FlatList, StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';

export default class SelectionScreen extends React.Component {
    render() {
        return (
            <View style={styles.outsideContainer}>
                <FlatList
                    data={[
                        { id: 1, name: 'Barack Obama', avatar: 'https://i.imgur.com/VOuhiDX.jpg' },
                        { id: 2, name: 'Michael Jordan', avatar: 'https://i.imgur.com/5UXY6FY.jpg' }
                    ]}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() =>
                            this.props.navigation.navigate('ChatScreen', {
                                botName: item.name, botId: item.id, avatar: item.avatar,
                                name: this.props.route.params.name, id: this.props.route.params.id,
                            })}>
                            <View style={styles.profile}>
                                <View style={styles.leftContainer}>
                                    <Image source={{ uri: item.avatar }} style={styles.avatar} />
                                    <View style={styles.midContainer}>
                                        <Text style={styles.agentName}>{item.name}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    outsideContainer: {
        flex: 1,
        alignItems: 'baseline',
        justifyContent: 'center',
    },
    container: {
        flexDirection: 'row',
        padding: 10,
        width: "100%",
        justifyContent: 'space-between',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    profile: {
        padding: 10,
        margin: 5
    },
    leftContainer: {
        flexDirection: 'row',
    },
    midContainer: {
        // flexDirection: 'row',
        // alignItems: 'center',
        // paddingVertical: 5,
        justifyContent: 'space-around',
    },
    agentName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 15,
    },
});
