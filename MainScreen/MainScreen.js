
import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableOpacity } from 'react-native';

class MainScreen extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      minutes1: 5,
      minutes2: 5,
      timer1:5*1000*60,
      timer2:5*1000*60,
      t1paused:true,
      t2paused:true,
      date:Date.now()
    };
  }

  componentDidMount(){
    this.setState(()=> ({date:Date.now()}));
    this.interval = setInterval(
      () => {this.timerRun() },100);
  }
  timerRun(){
    if(this.state.timer1>0&&this.state.timer2>0){
      if(!this.state.t1paused){this.setState((prevState)=> ({ timer1: prevState.timer1 - (Date.now() - prevState.date)}))}
      if(!this.state.t2paused){this.setState((prevState)=> ({ timer2: prevState.timer2 - (Date.now() - prevState.date)}))}
    }
    if(this.state.timer1<0){
      this.setState((prevState)=> ({timer1:0}));
    }
    if(this.state.timer2<0){
      this.setState((prevState)=> ({timer2:0}));
    }
    this.setState(()=> ({date:Date.now()}))
  }
  componentDidUpdate(prevProps) {
    if (prevProps.route.params?.selection !== this.props.route.params?.selection) {
      const result = this.props.route.params?.selection;
      this.setState((prevState) =>({
          minutes1:result.minutes1,
          minutes2:result.minutes2
      }));
    }
  }
  
  componentWillUnmount(){
   clearInterval(this.interval);
  }

  render() {
    const { navigation } = this.props;
    return (
        <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          alignItems: "center",
        }}>

        <View style={[{
        transform: [
          { rotate: "180deg" }
        ]
        }]}>
          <TouchableOpacity onPress={() => {this.setState((prevState)=> ({ t1paused:true, t2paused:false}));}} style={{ width: 400, height: 270, marginTop: 10, backgroundColor: "#841584", justifyContent:"center"}}>
          <Text style={{textAlign:"center", color:"white"}}>{Math.floor(this.state.timer1/60000)}:{(Math.floor(this.state.timer1/1000)%60)}.{(this.state.timer1)%1000}</Text>
          </TouchableOpacity>
        </View>

        <View style={{
          flexDirection: 'row',
          justifyContent: "space-between",
          alignItems: "center"
          
        }}>
          <View>
            <TouchableOpacity onPress={() => {this.setState((prevState)=> ({ t1paused:true, t2paused:true }));}} style={{ width: 70, height: 70, backgroundColor: "#841584", justifyContent:"center"}}>
              <Text style={{textAlign:"center", color:"white"}}>Pause</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen', {selection: {minutes1:this.state.minutes1, minutes2:this.state.minutes2}})} style={{ width: 60, height: 40, marginHorizontal:80, backgroundColor: "#841584", justifyContent:"center"}}>
              <Text style={{textAlign:"center", color:"white"}}>Settings</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => {this.setState((prevState)=> ({ t1paused:true, t2paused:true, timer1:prevState.minutes1*60*1000, timer2:prevState.minutes2*60*1000 }));}} style={{ width: 70, height: 70, backgroundColor: "#841584", justifyContent:"center"}}>
              <Text style={{textAlign:"center", color:"white"}}>Reset</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View >
          <TouchableOpacity onPress={() => {this.setState((prevState)=> ({ t1paused:false, t2paused:true}));}} style={{ width: 400, height: 270, marginTop: 10, backgroundColor: "#841584", justifyContent:"center"}}>
            <Text style={{textAlign:"center", color:"white"}}>{Math.floor(this.state.timer2/60000)}:{(Math.floor(this.state.timer2/1000)%60)}.{(this.state.timer2)%1000}</Text>
          </TouchableOpacity>
        </View>

       </View>
    )
  }


}
export default MainScreen;