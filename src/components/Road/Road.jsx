import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import React from 'react';
import s from './Road.module.scss'


const API_KEY = process.env.REACT_APP_API_KEY

const defaultCenter = {
    lat: 51.625,
    lng: 38.971
};

export const Road = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY
    })

    return (
        <div className={s.roadContainer}>
            <div className={s.roadTextContainer}>
                <div className={s.roadText}>
                    <h2 className={s.roadTextHeader}>/ Как добраться</h2>
                    <div className={s.roadTextDescriptionContainer}>
                        <p className={s.roadTextDescription}>
                            Меловой карьер Белый колодец расположен в 12
                            километрах от черты города Воронежа. Доехать до него можно по
                            Курской трассе (P298).
                            Необходимо проехать пост ГИБДД, мост через р. Дон,
                            миновать поворот на г. Острогожск и проехать около 1,5–2 км.
                            Перед с. Девица вы увидите дорожный указатель «Спорткомплекс Белый колодец»,
                            повернуть налево.
                        </p>
                        <p className={s.roadTextDescription}>
                            В день концерта от площади Ленина до Белого колодца
                            и обратно будут ходить бесплатные фестивальные автобусы.
                            Расписание рейсов мы объявим ближе ко дню концерта.
                            Для личного автотранспорта в меловом карьере будет организована
                            бесплатная стоянка.
                        </p>
                    </div>
                </div>
            </div>
            <div className={s.mapContainer}>
                {/* { isLoaded ? <Map center={defaultCenter}/> : <h2>ХУЙ</h2>} */}
                <YMaps >
                    <Map className={s.mapYandex} defaultState={{ center: [51.628, 38.968], zoom: 15 }}>
                        <Placemark geometry={[51.628, 38.968]} />
                    </Map>
                    
                </YMaps>
            </div>
        </div>
    )
}

// const Map = ({center}) => {

//     const mapRef = React.useRef(undefined)

//     const containerStyle = {
//         width: '100%',
//         height: '100%'
//     };

//     const onLoad = React.useCallback(function callback(map) {
//         mapRef.current = map
//       }, [])
    
//     const onUnmount = React.useCallback(function callback(map) {
//         mapRef.current = undefined
//     }, [])

//     return (
//         <GoogleMap
//             mapContainerStyle={containerStyle}
//             center={center}
//             zoom={10}
//             onLoad={onLoad}
//             onUnmount={onUnmount}
//         >
//             { /* Child components, such as markers, info windows, etc. */ }
//             <></>
//         </GoogleMap>
//     )
// }