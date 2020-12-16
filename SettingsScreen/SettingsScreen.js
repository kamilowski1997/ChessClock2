import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableOpacity, TextInput } from 'react-native';
class SettingsScreen extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      minutes1:null,
      minutes2:null
    };
  }
  render() {
    const { navigation, route } = this.props;
    const { minutes1, minutes2} = this.props.route.params;
    return (
        <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}>

          <View style={{ }}>
            <Text style={{textAlign:"left", color:"gray", fontSize:18, fontWeight:"bold"}}>Time for players in minutes:</Text>
          </View>

          <View style={{
            flexDirection: 'row',
            justifyContent: "space-between",
            alignItems: "center"
            
          }}>
            <View>
                <Text style={{textAlign:"center", color:"gray"}}>Player 1: </Text>
            </View>
            <View>
              <TextInput 
                onChangeText={(minutes1) => {
                  this.setState({minutes1})}}
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, width:70}}
              />
            </View>
          </View>

          <View style={{
            flexDirection: 'row',
            justifyContent: "space-between",
            alignItems: "center"
            
          }}>
            <View>
                <Text style={{textAlign:"center", color:"gray"}}>Player 2: </Text>
            </View>
            <View>
              <TextInput 
                onChangeText={(minutes2) => {
                  this.setState({minutes2})}}
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, width:70 }}
              />
            </View>
          </View>
          
          
          <View >
            <TouchableOpacity onPress={() => {navigation.navigate('MainScreen', {selection: {minutes1:this.state.minutes1, minutes2:this.state.minutes2} });} } style={{ width: 100, height: 50, marginTop: 10, backgroundColor: "#841584", justifyContent:"center", alignSelf:"flex-end"}}>
              <Text style={{textAlign:"center", color:"white"}}>Ok</Text>
            </TouchableOpacity>
          </View>

       </View>
    )
  }
}
  export default SettingsScreen;