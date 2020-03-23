const GET_ACTIVE_PRODUCT = "GET_ACTIVE_PRODUCT";
const GET_MAX_VALUE_PRICE = "GET_MAX_VALUE_PRICE";
const CHANGE_ACTIVE_FILTER = "CHANGE_ACTIVE_FILTER";

let initiate = {
    catalogItem: [
        {
            id: '00001',
            title: 'Автоматический выключатель 10A',
            vendor: 'ABB',
            pack: 100,
            price: 1500,
            img: 'https://cdn.etm.ru/ipro/432/small_ad12.png'
        },
        {
            id: '00002',
            title: 'Автоматический выключатель 20A',
            vendor: 'ABB',
            pack: 100,
            price: 1500,
            img: 'https://cdn.etm.ru/ipro/27/small_mcb_bms411c16.jpg'
        },
        {
            id: '00003',
            title: 'Корпус металлический',
            vendor: 'ABB',
            pack: 1,
            price: 6800,
            img: 'https://cdn.etm.ru/ipro/432/small_mkm14-n-12-31-zl.png'
        }
        ,
        {
            id: '00004',
            title: 'Корпус пластиковый',
            vendor: 'IEK',
            pack: 1,
            price: 1200,
            img: 'https://cdn.etm.ru/ipro/138/small_dec5b91cde24dc3c3f7d9272194f38d5.jpg'
        }
        ,
        {
            id: '00005',
            title: 'Шина медная МТ 60х8',
            vendor: 'DKC',
            pack: 1,
            price: 1200,
            img: 'https://cdn.etm.ru/ipro/138/small_06f7875801de85d01e2a0c94637db558.jpg'
        }
        ,
        {
            id: '00006',
            title: 'DLP Кабель-канал 105x50',
            vendor: 'DKC',
            pack: 1,
            price: 350,
            img: 'https://cdn.etm.ru/ipro/10000072/small_20190405-18818.jpg'

        }
        ,
        {
            id: '00007',
            title: 'DLP Кабель-канал 80x50',
            vendor: 'DKC',
            pack: 1,
            price: 300,
            img: 'https://cdn.etm.ru/ipro/10000072/small_20190405-18735.jpg'

        }
        ,
        {
            id: '00008',
            title: 'ЭТЮД Выключатель одноклавишный',
            vendor: 'Schneider Electric',
            pack: 1,
            price: 85,
            img:'https://cdn.etm.ru/ipro/164/small_bc10-005b.jpg'

        }
        ,
        {
            id: '00009',
            title: 'Контактор E 12А катушка управления 220В',
            vendor: 'Schneider Electric',
            pack: 1,
            price: 3800,
            img:'https://cdn.etm.ru/ipro/164/small_lc1e1210m5.jpg'

        }
        ,
        {
            id: '00010',
            title: 'Лоток для систем освещения',
            vendor: 'Schneider Electric',
            pack: 1,
            price: 1859,
            img:'https://cdn.etm.ru/ipro/164/small_734514.jpg'

        }

    ],
    activeProduct:{},
    filterValuePrice:10000,
    OffOnFilter:true
}

const catalogReducer = (state = initiate, action) => {
    switch (action.type) {
        case GET_ACTIVE_PRODUCT:{
            return{
                ...state,
                activeProduct:action.activeProduct
            }
        };

        case GET_MAX_VALUE_PRICE:{
            return{
                ...state,
                filterValuePrice: action.valuePrice
            }
        };

        case CHANGE_ACTIVE_FILTER:{
            return{
                ...state,
                OffOnFilter: action.filterValue
            }
        };



        default:
            return state;
    }
}

export const getActiveProduct = (activeProduct) =>({"type":GET_ACTIVE_PRODUCT,activeProduct});
export const getMaxValuePrice = (valuePrice) =>({"type":GET_MAX_VALUE_PRICE,valuePrice});
export const getFilterValue = (filterValue) =>({"type":CHANGE_ACTIVE_FILTER,filterValue});


export default catalogReducer