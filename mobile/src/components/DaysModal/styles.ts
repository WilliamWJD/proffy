import { StyleSheet } from 'react-native'

//#9871f5

const styles = StyleSheet.create({
  daysList:{
    flex:1,
    backgroundColor:'#8257e5',
    padding:10,
  },

  dayListItem:{
    paddingVertical:25,
    backgroundColor:'#9871f5',
    marginBottom:10,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
  },

  dayListItemText:{
    fontSize:16,
    fontFamily:'Archivo_700Bold',
    color:'#fff',
  },

  footer:{
    backgroundColor:'#8257e5',
    paddingVertical:15,
    justifyContent:'center',
    alignItems:'center',
  },

  buttonCancel:{
    borderWidth:2,
    borderColor:'#9871f5',
    borderRadius:15,
    padding:10,
  },

  buttonCancelText:{
    color:'#fff',
    fontFamily:'Archivo_700Bold',
  }

})

export default styles;