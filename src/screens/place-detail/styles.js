import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  image:{
    height:"40%",
    minHeight:220,
    width:"100%",
  },
  location:{
    margin:20,
    width:"90%",
    maxWidth:320,
    backgroundColor:colors.white,
    shadowColor:colors.black,
    shadowOpacity:0.26,
    shadowOffset:{widht:0,height:2},
    shadowRadius:8,
    elevation:5,
    borderRadius:10,
  },
  addressContainer: {
    padding:20,
  },
  address:{
    color:colors.primary,
    textAlign:"center",

  },
  map:{
    height:220,
  }
});