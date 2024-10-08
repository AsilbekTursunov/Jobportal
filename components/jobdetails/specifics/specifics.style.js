import { StyleSheet } from 'react-native'

import { COLORS, FONT, SIZES } from '../../../constants'

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.large,
    backgroundColor: '#FFF',
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
    
  },
  title: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    fontFamily: FONT.bold,
  },
  pointsContainer: {
    marginVertical: SIZES.small,
    paddingRight: SIZES.small/2,
  },
  pointWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginVertical: SIZES.small / 1.25,
  },
  pointDot: {
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: COLORS.gray2,
    marginTop: 6,
  },
  pointText: {
    width: '100%',
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    fontFamily: FONT.regular,
    marginLeft: SIZES.small/2, 
    textAlign:'justify',
    flex: 1,
    flexDirection: 'column', 
  },
})

export default styles
