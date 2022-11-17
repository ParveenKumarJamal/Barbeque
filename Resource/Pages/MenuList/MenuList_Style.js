import { StyleSheet } from 'react-native'

import { heightToDp, widthToDp } from '../../Utils/Responsive'

const Styles = StyleSheet.create({
    conrainer: {
        flex: 1,
        backgroundColor: '#fff'
    },
    MainView: {
        height: heightToDp('33')
    },
    TopView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: heightToDp('4')
    },
    FlexView: {
        flexDirection: 'row'
    },
    SearchBar: {
        width: widthToDp('78'),
        marginEnd: widthToDp('2'),
        height: heightToDp('5.5'),
        borderRadius: widthToDp('10'),
        flexDirection: 'row',
        backgroundColor: '#fff',
        elevation: 5,
        marginStart: widthToDp('7')
    },
    SearchIcon: {
        justifyContent: 'center',
        marginStart: widthToDp('2')
    },
    TextInputView: {
        width: widthToDp('75')
    },
    TextInput: {
        color: '#000'
    },
    MenuView: {
        borderWidth: 1,
        width: widthToDp('11'),
        backgroundColor: '#fff',
        borderRadius: widthToDp('15'),
        height: heightToDp('5.5'),
        justifyContent: 'center',
    },
    Menu: {
        alignItems: 'center'
    },
    BanerMainView: {
        alignItems: 'center',
        marginTop: heightToDp('2')
    },
    BanerView: {
        width: widthToDp('90'),
        height: heightToDp('18'),
        backgroundColor: '#fff',
        borderRadius: widthToDp('3'),
        elevation: 6
    },
    BanerImage: {
        height: heightToDp('18'),
        width: widthToDp('90')
    },
    RecomandedMain: {
        flexDirection: 'row',
        height: heightToDp('7'),
        justifyContent: 'space-between'
    },
    RecomandedView: {
        justifyContent: 'center',
        marginStart: widthToDp('5')
    },
    RecomandedText: {
        color: '#000',
        fontSize: widthToDp('4.5'),
        fontWeight: 'bold'
    },
    RecomandedListView: {
        flexDirection: 'row'
    },
    ListView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    ListImText: {
        marginStart: widthToDp('5'),
        marginTop: heightToDp('3')
    },
    ListImage: {
        height: heightToDp('3'),
        width: widthToDp('6')
    },
    ListTextView: {
        height: heightToDp('2.8'),
        justifyContent: 'center',
        marginTop: heightToDp('3'),
        marginStart: widthToDp('3'),
        width: widthToDp('19'),
        backgroundColor: 'rgb(234,113,60)',
        borderRadius: widthToDp('1.5')
    },
    ListText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: widthToDp('3.5')
    },
    ListNameView: {
        marginTop: heightToDp('1'),
        marginStart: widthToDp('5'),
        width: widthToDp('40')
    },
    ListNameText: {
        color: '#000',
        fontSize: widthToDp('3.7')
    },
    LogoMainView: {
        alignItems: 'center',
        marginStart: widthToDp('6')
    },
    LogoView: {
        marginTop: heightToDp('5'),
        width: widthToDp('45'),
        alignItems: 'center'
    },
    AddButton: {
        borderWidth: 1,
        width: widthToDp('25'),
        height: heightToDp('5'),
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: widthToDp('2'),
        backgroundColor: 'rgb(255,247,246)',
        borderColor: 'rgb(236,85,94)',
        flexDirection: 'row'
    },
    AddButtonText: {
        color: 'rgb(236,85,94)'
    },
    DecrementView: {
        bottom: heightToDp('0.7')
    },
    DecrementText: {
        color: 'rgb(236,85,94)',
        fontSize: widthToDp('8')
    },
    IncrementText:{
        color: '#000', 
        fontSize: widthToDp('6') 
    }
})

export default Styles