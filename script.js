(async function () {
    const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = ymaps3;
    const map = new YMap(
        document.getElementById('map'),
        {
            location: {
                center: [28.596606, 59.365661],
                zoom: 14,
                mode: 'vector'
            }
        }
    );

    map.addChild(new YMapDefaultSchemeLayer({
        customization: [
            {
                "tags": "country",
                "elements": "geometry.fill",
                "stylers": [
                    {
                        "color": "#0b0d0e"
                    },
                    {
                        "opacity": 0.8,
                        "zoom": 0
                    },
                    {
                        "opacity": 0.8,
                        "zoom": 1
                    },
                    {
                        "opacity": 0.8,
                        "zoom": 2
                    },
                    {
                        "opacity": 0.8,
                        "zoom": 3
                    },
                    {
                        "opacity": 0.8,
                        "zoom": 4
                    },
                    {
                        "opacity": 1,
                        "zoom": 5
                    },
                    {
                        "opacity": 1,
                        "zoom": 6
                    },
                    {
                        "opacity": 1,
                        "zoom": 7
                    },
                    {
                        "opacity": 1,
                        "zoom": 8
                    },
                    {
                        "opacity": 1,
                        "zoom": 9
                    },
                    {
                        "opacity": 1,
                        "zoom": 10
                    },
                    {
                        "opacity": 1,
                        "zoom": 11
                    },
                    {
                        "opacity": 1,
                        "zoom": 12
                    },
                    {
                        "opacity": 1,
                        "zoom": 13
                    },
                    {
                        "opacity": 1,
                        "zoom": 14
                    },
                    {
                        "opacity": 1,
                        "zoom": 15
                    },
                    {
                        "opacity": 1,
                        "zoom": 16
                    },
                    {
                        "opacity": 1,
                        "zoom": 17
                    },
                    {
                        "opacity": 1,
                        "zoom": 18
                    },
                    {
                        "opacity": 1,
                        "zoom": 19
                    },
                    {
                        "opacity": 1,
                        "zoom": 20
                    },
                    {
                        "opacity": 1,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": "country",
                "elements": "geometry.outline",
                "stylers": [
                    {
                        "color": "#2e3338"
                    },
                    {
                        "opacity": 0.15,
                        "zoom": 0
                    },
                    {
                        "opacity": 0.15,
                        "zoom": 1
                    },
                    {
                        "opacity": 0.15,
                        "zoom": 2
                    },
                    {
                        "opacity": 0.15,
                        "zoom": 3
                    },
                    {
                        "opacity": 0.15,
                        "zoom": 4
                    },
                    {
                        "opacity": 0.15,
                        "zoom": 5
                    },
                    {
                        "opacity": 0.25,
                        "zoom": 6
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 7
                    },
                    {
                        "opacity": 0.47,
                        "zoom": 8
                    },
                    {
                        "opacity": 0.44,
                        "zoom": 9
                    },
                    {
                        "opacity": 0.41,
                        "zoom": 10
                    },
                    {
                        "opacity": 0.38,
                        "zoom": 11
                    },
                    {
                        "opacity": 0.35,
                        "zoom": 12
                    },
                    {
                        "opacity": 0.33,
                        "zoom": 13
                    },
                    {
                        "opacity": 0.3,
                        "zoom": 14
                    },
                    {
                        "opacity": 0.28,
                        "zoom": 15
                    },
                    {
                        "opacity": 0.25,
                        "zoom": 16
                    },
                    {
                        "opacity": 0.25,
                        "zoom": 17
                    },
                    {
                        "opacity": 0.25,
                        "zoom": 18
                    },
                    {
                        "opacity": 0.25,
                        "zoom": 19
                    },
                    {
                        "opacity": 0.25,
                        "zoom": 20
                    },
                    {
                        "opacity": 0.25,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": "region",
                "elements": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000",
                        "opacity": 0.5,
                        "zoom": 0
                    },
                    {
                        "color": "#000000",
                        "opacity": 0.5,
                        "zoom": 1
                    },
                    {
                        "color": "#000000",
                        "opacity": 0.5,
                        "zoom": 2
                    },
                    {
                        "color": "#000000",
                        "opacity": 0.5,
                        "zoom": 3
                    },
                    {
                        "color": "#000000",
                        "opacity": 0.5,
                        "zoom": 4
                    },
                    {
                        "color": "#000000",
                        "opacity": 0.5,
                        "zoom": 5
                    },
                    {
                        "color": "#000000",
                        "opacity": 1,
                        "zoom": 6
                    },
                    {
                        "color": "#000000",
                        "opacity": 1,
                        "zoom": 7
                    },
                    {
                        "color": "#0b0d0e",
                        "opacity": 1,
                        "zoom": 8
                    },
                    {
                        "color": "#0b0d0e",
                        "opacity": 1,
                        "zoom": 9
                    },
                    {
                        "color": "#0b0d0e",
                        "opacity": 1,
                        "zoom": 10
                    },
                    {
                        "color": "#0b0d0e",
                        "opacity": 1,
                        "zoom": 11
                    },
                    {
                        "color": "#0b0d0e",
                        "opacity": 1,
                        "zoom": 12
                    },
                    {
                        "color": "#0b0d0e",
                        "opacity": 1,
                        "zoom": 13
                    },
                    {
                        "color": "#0b0d0e",
                        "opacity": 1,
                        "zoom": 14
                    },
                    {
                        "color": "#0b0d0e",
                        "opacity": 1,
                        "zoom": 15
                    },
                    {
                        "color": "#0b0d0e",
                        "opacity": 1,
                        "zoom": 16
                    },
                    {
                        "color": "#0b0d0e",
                        "opacity": 1,
                        "zoom": 17
                    },
                    {
                        "color": "#0b0d0e",
                        "opacity": 1,
                        "zoom": 18
                    },
                    {
                        "color": "#0b0d0e",
                        "opacity": 1,
                        "zoom": 19
                    },
                    {
                        "color": "#0b0d0e",
                        "opacity": 1,
                        "zoom": 20
                    },
                    {
                        "color": "#0b0d0e",
                        "opacity": 1,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": "region",
                "elements": "geometry.outline",
                "stylers": [
                    {
                        "color": "#2e3338"
                    },
                    {
                        "opacity": 0.15,
                        "zoom": 0
                    },
                    {
                        "opacity": 0.15,
                        "zoom": 1
                    },
                    {
                        "opacity": 0.15,
                        "zoom": 2
                    },
                    {
                        "opacity": 0.15,
                        "zoom": 3
                    },
                    {
                        "opacity": 0.15,
                        "zoom": 4
                    },
                    {
                        "opacity": 0.15,
                        "zoom": 5
                    },
                    {
                        "opacity": 0.25,
                        "zoom": 6
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 7
                    },
                    {
                        "opacity": 0.47,
                        "zoom": 8
                    },
                    {
                        "opacity": 0.44,
                        "zoom": 9
                    },
                    {
                        "opacity": 0.41,
                        "zoom": 10
                    },
                    {
                        "opacity": 0.38,
                        "zoom": 11
                    },
                    {
                        "opacity": 0.35,
                        "zoom": 12
                    },
                    {
                        "opacity": 0.33,
                        "zoom": 13
                    },
                    {
                        "opacity": 0.3,
                        "zoom": 14
                    },
                    {
                        "opacity": 0.28,
                        "zoom": 15
                    },
                    {
                        "opacity": 0.25,
                        "zoom": 16
                    },
                    {
                        "opacity": 0.25,
                        "zoom": 17
                    },
                    {
                        "opacity": 0.25,
                        "zoom": 18
                    },
                    {
                        "opacity": 0.25,
                        "zoom": 19
                    },
                    {
                        "opacity": 0.25,
                        "zoom": 20
                    },
                    {
                        "opacity": 0.25,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": {
                    "any": "admin",
                    "none": [
                        "country",
                        "region",
                        "locality",
                        "district",
                        "address"
                    ]
                },
                "elements": "geometry.fill",
                "stylers": [
                    {
                        "color": "#0b0d0e"
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 0
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 1
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 2
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 3
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 4
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 5
                    },
                    {
                        "opacity": 1,
                        "zoom": 6
                    },
                    {
                        "opacity": 1,
                        "zoom": 7
                    },
                    {
                        "opacity": 1,
                        "zoom": 8
                    },
                    {
                        "opacity": 1,
                        "zoom": 9
                    },
                    {
                        "opacity": 1,
                        "zoom": 10
                    },
                    {
                        "opacity": 1,
                        "zoom": 11
                    },
                    {
                        "opacity": 1,
                        "zoom": 12
                    },
                    {
                        "opacity": 1,
                        "zoom": 13
                    },
                    {
                        "opacity": 1,
                        "zoom": 14
                    },
                    {
                        "opacity": 1,
                        "zoom": 15
                    },
                    {
                        "opacity": 1,
                        "zoom": 16
                    },
                    {
                        "opacity": 1,
                        "zoom": 17
                    },
                    {
                        "opacity": 1,
                        "zoom": 18
                    },
                    {
                        "opacity": 1,
                        "zoom": 19
                    },
                    {
                        "opacity": 1,
                        "zoom": 20
                    },
                    {
                        "opacity": 1,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": {
                    "any": "admin",
                    "none": [
                        "country",
                        "region",
                        "locality",
                        "district",
                        "address"
                    ]
                },
                "elements": "geometry.outline",
                "stylers": [
                    {
                        "color": "#2e3338"
                    },
                    {
                        "opacity": 0.15,
                        "zoom": 0
                    },
                    {
                        "opacity": 0.15,
                        "zoom": 1
                    },
                    {
                        "opacity": 0.15,
                        "zoom": 2
                    },
                    {
                        "opacity": 0.15,
                        "zoom": 3
                    },
                    {
                        "opacity": 0.15,
                        "zoom": 4
                    },
                    {
                        "opacity": 0.15,
                        "zoom": 5
                    },
                    {
                        "opacity": 0.25,
                        "zoom": 6
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 7
                    },
                    {
                        "opacity": 0.47,
                        "zoom": 8
                    },
                    {
                        "opacity": 0.44,
                        "zoom": 9
                    },
                    {
                        "opacity": 0.41,
                        "zoom": 10
                    },
                    {
                        "opacity": 0.38,
                        "zoom": 11
                    },
                    {
                        "opacity": 0.35,
                        "zoom": 12
                    },
                    {
                        "opacity": 0.33,
                        "zoom": 13
                    },
                    {
                        "opacity": 0.3,
                        "zoom": 14
                    },
                    {
                        "opacity": 0.28,
                        "zoom": 15
                    },
                    {
                        "opacity": 0.25,
                        "zoom": 16
                    },
                    {
                        "opacity": 0.25,
                        "zoom": 17
                    },
                    {
                        "opacity": 0.25,
                        "zoom": 18
                    },
                    {
                        "opacity": 0.25,
                        "zoom": 19
                    },
                    {
                        "opacity": 0.25,
                        "zoom": 20
                    },
                    {
                        "opacity": 0.25,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": {
                    "any": "landcover",
                    "none": "vegetation"
                },
                "stylers": [
                    {
                        "hue": "#32383e"
                    }
                ]
            },
            {
                "tags": "vegetation",
                "elements": "geometry",
                "stylers": [
                    {
                        "color": "#49525a",
                        "opacity": 0.1,
                        "zoom": 0
                    },
                    {
                        "color": "#49525a",
                        "opacity": 0.1,
                        "zoom": 1
                    },
                    {
                        "color": "#49525a",
                        "opacity": 0.1,
                        "zoom": 2
                    },
                    {
                        "color": "#49525a",
                        "opacity": 0.1,
                        "zoom": 3
                    },
                    {
                        "color": "#49525a",
                        "opacity": 0.1,
                        "zoom": 4
                    },
                    {
                        "color": "#49525a",
                        "opacity": 0.1,
                        "zoom": 5
                    },
                    {
                        "color": "#49525a",
                        "opacity": 0.2,
                        "zoom": 6
                    },
                    {
                        "color": "#32383e",
                        "opacity": 0.3,
                        "zoom": 7
                    },
                    {
                        "color": "#32383e",
                        "opacity": 0.4,
                        "zoom": 8
                    },
                    {
                        "color": "#32383e",
                        "opacity": 0.6,
                        "zoom": 9
                    },
                    {
                        "color": "#32383e",
                        "opacity": 0.8,
                        "zoom": 10
                    },
                    {
                        "color": "#32383e",
                        "opacity": 1,
                        "zoom": 11
                    },
                    {
                        "color": "#32383e",
                        "opacity": 1,
                        "zoom": 12
                    },
                    {
                        "color": "#32383e",
                        "opacity": 1,
                        "zoom": 13
                    },
                    {
                        "color": "#2e3339",
                        "opacity": 1,
                        "zoom": 14
                    },
                    {
                        "color": "#292e33",
                        "opacity": 1,
                        "zoom": 15
                    },
                    {
                        "color": "#292e33",
                        "opacity": 1,
                        "zoom": 16
                    },
                    {
                        "color": "#292e33",
                        "opacity": 1,
                        "zoom": 17
                    },
                    {
                        "color": "#292e33",
                        "opacity": 1,
                        "zoom": 18
                    },
                    {
                        "color": "#292e33",
                        "opacity": 1,
                        "zoom": 19
                    },
                    {
                        "color": "#292e33",
                        "opacity": 1,
                        "zoom": 20
                    },
                    {
                        "color": "#292e33",
                        "opacity": 1,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": "park",
                "elements": "geometry",
                "stylers": [
                    {
                        "color": "#32383e",
                        "opacity": 0.1,
                        "zoom": 0
                    },
                    {
                        "color": "#32383e",
                        "opacity": 0.1,
                        "zoom": 1
                    },
                    {
                        "color": "#32383e",
                        "opacity": 0.1,
                        "zoom": 2
                    },
                    {
                        "color": "#32383e",
                        "opacity": 0.1,
                        "zoom": 3
                    },
                    {
                        "color": "#32383e",
                        "opacity": 0.1,
                        "zoom": 4
                    },
                    {
                        "color": "#32383e",
                        "opacity": 0.1,
                        "zoom": 5
                    },
                    {
                        "color": "#32383e",
                        "opacity": 0.2,
                        "zoom": 6
                    },
                    {
                        "color": "#32383e",
                        "opacity": 0.3,
                        "zoom": 7
                    },
                    {
                        "color": "#32383e",
                        "opacity": 0.4,
                        "zoom": 8
                    },
                    {
                        "color": "#32383e",
                        "opacity": 0.6,
                        "zoom": 9
                    },
                    {
                        "color": "#32383e",
                        "opacity": 0.8,
                        "zoom": 10
                    },
                    {
                        "color": "#32383e",
                        "opacity": 1,
                        "zoom": 11
                    },
                    {
                        "color": "#32383e",
                        "opacity": 1,
                        "zoom": 12
                    },
                    {
                        "color": "#32383e",
                        "opacity": 1,
                        "zoom": 13
                    },
                    {
                        "color": "#2e3339",
                        "opacity": 1,
                        "zoom": 14
                    },
                    {
                        "color": "#292e33",
                        "opacity": 1,
                        "zoom": 15
                    },
                    {
                        "color": "#292e33",
                        "opacity": 0.9,
                        "zoom": 16
                    },
                    {
                        "color": "#292e33",
                        "opacity": 0.8,
                        "zoom": 17
                    },
                    {
                        "color": "#292e33",
                        "opacity": 0.7,
                        "zoom": 18
                    },
                    {
                        "color": "#292e33",
                        "opacity": 0.7,
                        "zoom": 19
                    },
                    {
                        "color": "#292e33",
                        "opacity": 0.7,
                        "zoom": 20
                    },
                    {
                        "color": "#292e33",
                        "opacity": 0.7,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": "national_park",
                "elements": "geometry",
                "stylers": [
                    {
                        "color": "#32383e",
                        "opacity": 0.1,
                        "zoom": 0
                    },
                    {
                        "color": "#32383e",
                        "opacity": 0.1,
                        "zoom": 1
                    },
                    {
                        "color": "#32383e",
                        "opacity": 0.1,
                        "zoom": 2
                    },
                    {
                        "color": "#32383e",
                        "opacity": 0.1,
                        "zoom": 3
                    },
                    {
                        "color": "#32383e",
                        "opacity": 0.1,
                        "zoom": 4
                    },
                    {
                        "color": "#32383e",
                        "opacity": 0.1,
                        "zoom": 5
                    },
                    {
                        "color": "#32383e",
                        "opacity": 0.2,
                        "zoom": 6
                    },
                    {
                        "color": "#32383e",
                        "opacity": 0.3,
                        "zoom": 7
                    },
                    {
                        "color": "#32383e",
                        "opacity": 0.4,
                        "zoom": 8
                    },
                    {
                        "color": "#32383e",
                        "opacity": 0.6,
                        "zoom": 9
                    },
                    {
                        "color": "#32383e",
                        "opacity": 0.8,
                        "zoom": 10
                    },
                    {
                        "color": "#32383e",
                        "opacity": 1,
                        "zoom": 11
                    },
                    {
                        "color": "#32383e",
                        "opacity": 1,
                        "zoom": 12
                    },
                    {
                        "color": "#32383e",
                        "opacity": 1,
                        "zoom": 13
                    },
                    {
                        "color": "#2e3339",
                        "opacity": 1,
                        "zoom": 14
                    },
                    {
                        "color": "#292e33",
                        "opacity": 1,
                        "zoom": 15
                    },
                    {
                        "color": "#292e33",
                        "opacity": 0.7,
                        "zoom": 16
                    },
                    {
                        "color": "#292e33",
                        "opacity": 0.7,
                        "zoom": 17
                    },
                    {
                        "color": "#292e33",
                        "opacity": 0.7,
                        "zoom": 18
                    },
                    {
                        "color": "#292e33",
                        "opacity": 0.7,
                        "zoom": 19
                    },
                    {
                        "color": "#292e33",
                        "opacity": 0.7,
                        "zoom": 20
                    },
                    {
                        "color": "#292e33",
                        "opacity": 0.7,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": "cemetery",
                "elements": "geometry",
                "stylers": [
                    {
                        "color": "#32383e",
                        "zoom": 0
                    },
                    {
                        "color": "#32383e",
                        "zoom": 1
                    },
                    {
                        "color": "#32383e",
                        "zoom": 2
                    },
                    {
                        "color": "#32383e",
                        "zoom": 3
                    },
                    {
                        "color": "#32383e",
                        "zoom": 4
                    },
                    {
                        "color": "#32383e",
                        "zoom": 5
                    },
                    {
                        "color": "#32383e",
                        "zoom": 6
                    },
                    {
                        "color": "#32383e",
                        "zoom": 7
                    },
                    {
                        "color": "#32383e",
                        "zoom": 8
                    },
                    {
                        "color": "#32383e",
                        "zoom": 9
                    },
                    {
                        "color": "#32383e",
                        "zoom": 10
                    },
                    {
                        "color": "#32383e",
                        "zoom": 11
                    },
                    {
                        "color": "#32383e",
                        "zoom": 12
                    },
                    {
                        "color": "#32383e",
                        "zoom": 13
                    },
                    {
                        "color": "#2e3339",
                        "zoom": 14
                    },
                    {
                        "color": "#292e33",
                        "zoom": 15
                    },
                    {
                        "color": "#292e33",
                        "zoom": 16
                    },
                    {
                        "color": "#292e33",
                        "zoom": 17
                    },
                    {
                        "color": "#292e33",
                        "zoom": 18
                    },
                    {
                        "color": "#292e33",
                        "zoom": 19
                    },
                    {
                        "color": "#292e33",
                        "zoom": 20
                    },
                    {
                        "color": "#292e33",
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": "sports_ground",
                "elements": "geometry",
                "stylers": [
                    {
                        "color": "#3d454c",
                        "opacity": 0,
                        "zoom": 0
                    },
                    {
                        "color": "#3d454c",
                        "opacity": 0,
                        "zoom": 1
                    },
                    {
                        "color": "#3d454c",
                        "opacity": 0,
                        "zoom": 2
                    },
                    {
                        "color": "#3d454c",
                        "opacity": 0,
                        "zoom": 3
                    },
                    {
                        "color": "#3d454c",
                        "opacity": 0,
                        "zoom": 4
                    },
                    {
                        "color": "#3d454c",
                        "opacity": 0,
                        "zoom": 5
                    },
                    {
                        "color": "#3d454c",
                        "opacity": 0,
                        "zoom": 6
                    },
                    {
                        "color": "#3d454c",
                        "opacity": 0,
                        "zoom": 7
                    },
                    {
                        "color": "#3d454c",
                        "opacity": 0,
                        "zoom": 8
                    },
                    {
                        "color": "#3d454c",
                        "opacity": 0,
                        "zoom": 9
                    },
                    {
                        "color": "#3d454c",
                        "opacity": 0,
                        "zoom": 10
                    },
                    {
                        "color": "#3d454c",
                        "opacity": 0,
                        "zoom": 11
                    },
                    {
                        "color": "#3d454c",
                        "opacity": 0,
                        "zoom": 12
                    },
                    {
                        "color": "#3d454c",
                        "opacity": 0,
                        "zoom": 13
                    },
                    {
                        "color": "#394047",
                        "opacity": 0,
                        "zoom": 14
                    },
                    {
                        "color": "#343b41",
                        "opacity": 0.5,
                        "zoom": 15
                    },
                    {
                        "color": "#333a40",
                        "opacity": 1,
                        "zoom": 16
                    },
                    {
                        "color": "#32393f",
                        "opacity": 1,
                        "zoom": 17
                    },
                    {
                        "color": "#32393e",
                        "opacity": 1,
                        "zoom": 18
                    },
                    {
                        "color": "#31383d",
                        "opacity": 1,
                        "zoom": 19
                    },
                    {
                        "color": "#30373c",
                        "opacity": 1,
                        "zoom": 20
                    },
                    {
                        "color": "#2f363b",
                        "opacity": 1,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": "terrain",
                "elements": "geometry",
                "stylers": [
                    {
                        "hue": "#40474f"
                    },
                    {
                        "opacity": 0.3,
                        "zoom": 0
                    },
                    {
                        "opacity": 0.3,
                        "zoom": 1
                    },
                    {
                        "opacity": 0.3,
                        "zoom": 2
                    },
                    {
                        "opacity": 0.3,
                        "zoom": 3
                    },
                    {
                        "opacity": 0.3,
                        "zoom": 4
                    },
                    {
                        "opacity": 0.35,
                        "zoom": 5
                    },
                    {
                        "opacity": 0.4,
                        "zoom": 6
                    },
                    {
                        "opacity": 0.6,
                        "zoom": 7
                    },
                    {
                        "opacity": 0.8,
                        "zoom": 8
                    },
                    {
                        "opacity": 0.9,
                        "zoom": 9
                    },
                    {
                        "opacity": 1,
                        "zoom": 10
                    },
                    {
                        "opacity": 1,
                        "zoom": 11
                    },
                    {
                        "opacity": 1,
                        "zoom": 12
                    },
                    {
                        "opacity": 1,
                        "zoom": 13
                    },
                    {
                        "opacity": 1,
                        "zoom": 14
                    },
                    {
                        "opacity": 1,
                        "zoom": 15
                    },
                    {
                        "opacity": 1,
                        "zoom": 16
                    },
                    {
                        "opacity": 1,
                        "zoom": 17
                    },
                    {
                        "opacity": 1,
                        "zoom": 18
                    },
                    {
                        "opacity": 1,
                        "zoom": 19
                    },
                    {
                        "opacity": 1,
                        "zoom": 20
                    },
                    {
                        "opacity": 1,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": "geographic_line",
                "elements": "geometry",
                "stylers": [
                    {
                        "color": "#a5adb6"
                    }
                ]
            },
            {
                "tags": "land",
                "elements": "geometry",
                "stylers": [
                    {
                        "color": "#40474f",
                        "zoom": 0
                    },
                    {
                        "color": "#40474f",
                        "zoom": 1
                    },
                    {
                        "color": "#40474f",
                        "zoom": 2
                    },
                    {
                        "color": "#40474f",
                        "zoom": 3
                    },
                    {
                        "color": "#40474f",
                        "zoom": 4
                    },
                    {
                        "color": "#3e454c",
                        "zoom": 5
                    },
                    {
                        "color": "#3c424a",
                        "zoom": 6
                    },
                    {
                        "color": "#394047",
                        "zoom": 7
                    },
                    {
                        "color": "#373d44",
                        "zoom": 8
                    },
                    {
                        "color": "#373d44",
                        "zoom": 9
                    },
                    {
                        "color": "#373d44",
                        "zoom": 10
                    },
                    {
                        "color": "#373d44",
                        "zoom": 11
                    },
                    {
                        "color": "#373d44",
                        "zoom": 12
                    },
                    {
                        "color": "#373d44",
                        "zoom": 13
                    },
                    {
                        "color": "#353b41",
                        "zoom": 14
                    },
                    {
                        "color": "#32383e",
                        "zoom": 15
                    },
                    {
                        "color": "#32383e",
                        "zoom": 16
                    },
                    {
                        "color": "#31373d",
                        "zoom": 17
                    },
                    {
                        "color": "#31373d",
                        "zoom": 18
                    },
                    {
                        "color": "#31363d",
                        "zoom": 19
                    },
                    {
                        "color": "#30363c",
                        "zoom": 20
                    },
                    {
                        "color": "#30353c",
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": "residential",
                "elements": "geometry",
                "stylers": [
                    {
                        "color": "#40474f",
                        "opacity": 0.5,
                        "zoom": 0
                    },
                    {
                        "color": "#40474f",
                        "opacity": 0.5,
                        "zoom": 1
                    },
                    {
                        "color": "#40474f",
                        "opacity": 0.5,
                        "zoom": 2
                    },
                    {
                        "color": "#40474f",
                        "opacity": 0.5,
                        "zoom": 3
                    },
                    {
                        "color": "#40474f",
                        "opacity": 0.5,
                        "zoom": 4
                    },
                    {
                        "color": "#40474f",
                        "opacity": 0.5,
                        "zoom": 5
                    },
                    {
                        "color": "#40474f",
                        "opacity": 0.5,
                        "zoom": 6
                    },
                    {
                        "color": "#40474f",
                        "opacity": 0.5,
                        "zoom": 7
                    },
                    {
                        "color": "#40474f",
                        "opacity": 0.5,
                        "zoom": 8
                    },
                    {
                        "color": "#40474f",
                        "opacity": 0.5,
                        "zoom": 9
                    },
                    {
                        "color": "#40474f",
                        "opacity": 0.5,
                        "zoom": 10
                    },
                    {
                        "color": "#40474f",
                        "opacity": 0.5,
                        "zoom": 11
                    },
                    {
                        "color": "#40474f",
                        "opacity": 0.5,
                        "zoom": 12
                    },
                    {
                        "color": "#40474f",
                        "opacity": 1,
                        "zoom": 13
                    },
                    {
                        "color": "#3c424a",
                        "opacity": 1,
                        "zoom": 14
                    },
                    {
                        "color": "#373d44",
                        "opacity": 1,
                        "zoom": 15
                    },
                    {
                        "color": "#363c43",
                        "opacity": 1,
                        "zoom": 16
                    },
                    {
                        "color": "#353b42",
                        "opacity": 1,
                        "zoom": 17
                    },
                    {
                        "color": "#353b41",
                        "opacity": 1,
                        "zoom": 18
                    },
                    {
                        "color": "#343a40",
                        "opacity": 1,
                        "zoom": 19
                    },
                    {
                        "color": "#33393f",
                        "opacity": 1,
                        "zoom": 20
                    },
                    {
                        "color": "#32383e",
                        "opacity": 1,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": "locality",
                "elements": "geometry",
                "stylers": [
                    {
                        "color": "#40474f",
                        "zoom": 0
                    },
                    {
                        "color": "#40474f",
                        "zoom": 1
                    },
                    {
                        "color": "#40474f",
                        "zoom": 2
                    },
                    {
                        "color": "#40474f",
                        "zoom": 3
                    },
                    {
                        "color": "#40474f",
                        "zoom": 4
                    },
                    {
                        "color": "#40474f",
                        "zoom": 5
                    },
                    {
                        "color": "#40474f",
                        "zoom": 6
                    },
                    {
                        "color": "#40474f",
                        "zoom": 7
                    },
                    {
                        "color": "#40474f",
                        "zoom": 8
                    },
                    {
                        "color": "#40474f",
                        "zoom": 9
                    },
                    {
                        "color": "#40474f",
                        "zoom": 10
                    },
                    {
                        "color": "#40474f",
                        "zoom": 11
                    },
                    {
                        "color": "#40474f",
                        "zoom": 12
                    },
                    {
                        "color": "#40474f",
                        "zoom": 13
                    },
                    {
                        "color": "#3c424a",
                        "zoom": 14
                    },
                    {
                        "color": "#373d44",
                        "zoom": 15
                    },
                    {
                        "color": "#363c43",
                        "zoom": 16
                    },
                    {
                        "color": "#353b42",
                        "zoom": 17
                    },
                    {
                        "color": "#353b41",
                        "zoom": 18
                    },
                    {
                        "color": "#343a40",
                        "zoom": 19
                    },
                    {
                        "color": "#33393f",
                        "zoom": 20
                    },
                    {
                        "color": "#32383e",
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": {
                    "any": "structure",
                    "none": [
                        "building",
                        "fence"
                    ]
                },
                "elements": "geometry",
                "stylers": [
                    {
                        "opacity": 0.9
                    },
                    {
                        "color": "#40474f",
                        "zoom": 0
                    },
                    {
                        "color": "#40474f",
                        "zoom": 1
                    },
                    {
                        "color": "#40474f",
                        "zoom": 2
                    },
                    {
                        "color": "#40474f",
                        "zoom": 3
                    },
                    {
                        "color": "#40474f",
                        "zoom": 4
                    },
                    {
                        "color": "#40474f",
                        "zoom": 5
                    },
                    {
                        "color": "#40474f",
                        "zoom": 6
                    },
                    {
                        "color": "#40474f",
                        "zoom": 7
                    },
                    {
                        "color": "#40474f",
                        "zoom": 8
                    },
                    {
                        "color": "#40474f",
                        "zoom": 9
                    },
                    {
                        "color": "#40474f",
                        "zoom": 10
                    },
                    {
                        "color": "#40474f",
                        "zoom": 11
                    },
                    {
                        "color": "#40474f",
                        "zoom": 12
                    },
                    {
                        "color": "#40474f",
                        "zoom": 13
                    },
                    {
                        "color": "#3c424a",
                        "zoom": 14
                    },
                    {
                        "color": "#373d44",
                        "zoom": 15
                    },
                    {
                        "color": "#363c43",
                        "zoom": 16
                    },
                    {
                        "color": "#353b42",
                        "zoom": 17
                    },
                    {
                        "color": "#353b41",
                        "zoom": 18
                    },
                    {
                        "color": "#343a40",
                        "zoom": 19
                    },
                    {
                        "color": "#33393f",
                        "zoom": 20
                    },
                    {
                        "color": "#32383e",
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": "building",
                "elements": "geometry.fill",
                "stylers": [
                    {
                        "color": "#434a51"
                    },
                    {
                        "opacity": 0.7,
                        "zoom": 0
                    },
                    {
                        "opacity": 0.7,
                        "zoom": 1
                    },
                    {
                        "opacity": 0.7,
                        "zoom": 2
                    },
                    {
                        "opacity": 0.7,
                        "zoom": 3
                    },
                    {
                        "opacity": 0.7,
                        "zoom": 4
                    },
                    {
                        "opacity": 0.7,
                        "zoom": 5
                    },
                    {
                        "opacity": 0.7,
                        "zoom": 6
                    },
                    {
                        "opacity": 0.7,
                        "zoom": 7
                    },
                    {
                        "opacity": 0.7,
                        "zoom": 8
                    },
                    {
                        "opacity": 0.7,
                        "zoom": 9
                    },
                    {
                        "opacity": 0.7,
                        "zoom": 10
                    },
                    {
                        "opacity": 0.7,
                        "zoom": 11
                    },
                    {
                        "opacity": 0.7,
                        "zoom": 12
                    },
                    {
                        "opacity": 0.7,
                        "zoom": 13
                    },
                    {
                        "opacity": 0.7,
                        "zoom": 14
                    },
                    {
                        "opacity": 0.7,
                        "zoom": 15
                    },
                    {
                        "opacity": 0.9,
                        "zoom": 16
                    },
                    {
                        "opacity": 0.6,
                        "zoom": 17
                    },
                    {
                        "opacity": 0.6,
                        "zoom": 18
                    },
                    {
                        "opacity": 0.6,
                        "zoom": 19
                    },
                    {
                        "opacity": 0.6,
                        "zoom": 20
                    },
                    {
                        "opacity": 0.6,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": "building",
                "elements": "geometry.outline",
                "stylers": [
                    {
                        "color": "#555e67"
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 0
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 1
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 2
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 3
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 4
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 5
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 6
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 7
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 8
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 9
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 10
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 11
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 12
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 13
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 14
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 15
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 16
                    },
                    {
                        "opacity": 1,
                        "zoom": 17
                    },
                    {
                        "opacity": 1,
                        "zoom": 18
                    },
                    {
                        "opacity": 1,
                        "zoom": 19
                    },
                    {
                        "opacity": 1,
                        "zoom": 20
                    },
                    {
                        "opacity": 1,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": {
                    "any": "urban_area",
                    "none": [
                        "residential",
                        "industrial",
                        "cemetery",
                        "park",
                        "medical",
                        "sports_ground",
                        "beach",
                        "construction_site"
                    ]
                },
                "elements": "geometry",
                "stylers": [
                    {
                        "color": "#40474f",
                        "opacity": 1,
                        "zoom": 0
                    },
                    {
                        "color": "#40474f",
                        "opacity": 1,
                        "zoom": 1
                    },
                    {
                        "color": "#40474f",
                        "opacity": 1,
                        "zoom": 2
                    },
                    {
                        "color": "#40474f",
                        "opacity": 1,
                        "zoom": 3
                    },
                    {
                        "color": "#40474f",
                        "opacity": 1,
                        "zoom": 4
                    },
                    {
                        "color": "#40474f",
                        "opacity": 1,
                        "zoom": 5
                    },
                    {
                        "color": "#40474f",
                        "opacity": 1,
                        "zoom": 6
                    },
                    {
                        "color": "#40474f",
                        "opacity": 1,
                        "zoom": 7
                    },
                    {
                        "color": "#40474f",
                        "opacity": 1,
                        "zoom": 8
                    },
                    {
                        "color": "#40474f",
                        "opacity": 1,
                        "zoom": 9
                    },
                    {
                        "color": "#40474f",
                        "opacity": 1,
                        "zoom": 10
                    },
                    {
                        "color": "#40474f",
                        "opacity": 1,
                        "zoom": 11
                    },
                    {
                        "color": "#40474f",
                        "opacity": 1,
                        "zoom": 12
                    },
                    {
                        "color": "#40474f",
                        "opacity": 1,
                        "zoom": 13
                    },
                    {
                        "color": "#3b4148",
                        "opacity": 1,
                        "zoom": 14
                    },
                    {
                        "color": "#353a41",
                        "opacity": 1,
                        "zoom": 15
                    },
                    {
                        "color": "#2f343a",
                        "opacity": 0.67,
                        "zoom": 16
                    },
                    {
                        "color": "#292e33",
                        "opacity": 0.33,
                        "zoom": 17
                    },
                    {
                        "color": "#292e33",
                        "opacity": 0,
                        "zoom": 18
                    },
                    {
                        "color": "#292e33",
                        "opacity": 0,
                        "zoom": 19
                    },
                    {
                        "color": "#292e33",
                        "opacity": 0,
                        "zoom": 20
                    },
                    {
                        "color": "#292e33",
                        "opacity": 0,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": "poi",
                "elements": "label.icon",
                "stylers": [
                    {
                        "color": "#171a1c"
                    },
                    {
                        "secondary-color": "#8f99a3"
                    },
                    {
                        "tertiary-color": "#505962"
                    }
                ]
            },
            {
                "tags": "poi",
                "elements": "label.text.fill",
                "stylers": [
                    {
                        "color": "#94999e"
                    }
                ]
            },
            {
                "tags": "poi",
                "elements": "label.text.outline",
                "stylers": [
                    {
                        "color": "#171a1c"
                    },
                    {
                        "opacity": 0.5
                    }
                ]
            },
            {
                "tags": "outdoor",
                "elements": "label.icon",
                "stylers": [
                    {
                        "color": "#171a1c"
                    },
                    {
                        "secondary-color": "#8f99a3"
                    },
                    {
                        "tertiary-color": "#505962"
                    }
                ]
            },
            {
                "tags": "outdoor",
                "elements": "label.text.fill",
                "stylers": [
                    {
                        "color": "#94999e"
                    }
                ]
            },
            {
                "tags": "outdoor",
                "elements": "label.text.outline",
                "stylers": [
                    {
                        "color": "#171a1c"
                    },
                    {
                        "opacity": 0.5
                    }
                ]
            },
            {
                "tags": "park",
                "elements": "label.icon",
                "stylers": [
                    {
                        "color": "#171a1c"
                    },
                    {
                        "secondary-color": "#8f99a3"
                    },
                    {
                        "tertiary-color": "#505962"
                    }
                ]
            },
            {
                "tags": "park",
                "elements": "label.text.fill",
                "stylers": [
                    {
                        "color": "#94999e"
                    }
                ]
            },
            {
                "tags": "park",
                "elements": "label.text.outline",
                "stylers": [
                    {
                        "color": "#171a1c"
                    },
                    {
                        "opacity": 0.5
                    }
                ]
            },
            {
                "tags": "cemetery",
                "elements": "label.icon",
                "stylers": [
                    {
                        "color": "#171a1c"
                    },
                    {
                        "secondary-color": "#8f99a3"
                    },
                    {
                        "tertiary-color": "#505962"
                    }
                ]
            },
            {
                "tags": "cemetery",
                "elements": "label.text.fill",
                "stylers": [
                    {
                        "color": "#94999e"
                    }
                ]
            },
            {
                "tags": "cemetery",
                "elements": "label.text.outline",
                "stylers": [
                    {
                        "color": "#171a1c"
                    },
                    {
                        "opacity": 0.5
                    }
                ]
            },
            {
                "tags": "beach",
                "elements": "label.icon",
                "stylers": [
                    {
                        "color": "#171a1c"
                    },
                    {
                        "secondary-color": "#8f99a3"
                    },
                    {
                        "tertiary-color": "#505962"
                    }
                ]
            },
            {
                "tags": "beach",
                "elements": "label.text.fill",
                "stylers": [
                    {
                        "color": "#94999e"
                    }
                ]
            },
            {
                "tags": "beach",
                "elements": "label.text.outline",
                "stylers": [
                    {
                        "color": "#171a1c"
                    },
                    {
                        "opacity": 0.5
                    }
                ]
            },
            {
                "tags": "medical",
                "elements": "label.icon",
                "stylers": [
                    {
                        "color": "#171a1c"
                    },
                    {
                        "secondary-color": "#8f99a3"
                    },
                    {
                        "tertiary-color": "#505962"
                    }
                ]
            },
            {
                "tags": "medical",
                "elements": "label.text.fill",
                "stylers": [
                    {
                        "color": "#94999e"
                    }
                ]
            },
            {
                "tags": "medical",
                "elements": "label.text.outline",
                "stylers": [
                    {
                        "color": "#171a1c"
                    },
                    {
                        "opacity": 0.5
                    }
                ]
            },
            {
                "tags": "shopping",
                "elements": "label.icon",
                "stylers": [
                    {
                        "color": "#171a1c"
                    },
                    {
                        "secondary-color": "#8f99a3"
                    },
                    {
                        "tertiary-color": "#505962"
                    }
                ]
            },
            {
                "tags": "shopping",
                "elements": "label.text.fill",
                "stylers": [
                    {
                        "color": "#94999e"
                    }
                ]
            },
            {
                "tags": "shopping",
                "elements": "label.text.outline",
                "stylers": [
                    {
                        "color": "#171a1c"
                    },
                    {
                        "opacity": 0.5
                    }
                ]
            },
            {
                "tags": "commercial_services",
                "elements": "label.icon",
                "stylers": [
                    {
                        "color": "#171a1c"
                    },
                    {
                        "secondary-color": "#8f99a3"
                    },
                    {
                        "tertiary-color": "#505962"
                    }
                ]
            },
            {
                "tags": "commercial_services",
                "elements": "label.text.fill",
                "stylers": [
                    {
                        "color": "#94999e"
                    }
                ]
            },
            {
                "tags": "commercial_services",
                "elements": "label.text.outline",
                "stylers": [
                    {
                        "color": "#171a1c"
                    },
                    {
                        "opacity": 0.5
                    }
                ]
            },
            {
                "tags": "food_and_drink",
                "elements": "label.icon",
                "stylers": [
                    {
                        "color": "#171a1c"
                    },
                    {
                        "secondary-color": "#8f99a3"
                    },
                    {
                        "tertiary-color": "#505962"
                    }
                ]
            },
            {
                "tags": "food_and_drink",
                "elements": "label.text.fill",
                "stylers": [
                    {
                        "color": "#94999e"
                    }
                ]
            },
            {
                "tags": "food_and_drink",
                "elements": "label.text.outline",
                "stylers": [
                    {
                        "color": "#171a1c"
                    },
                    {
                        "opacity": 0.5
                    }
                ]
            },
            {
                "tags": "road",
                "elements": "label.icon",
                "types": "point",
                "stylers": [
                    {
                        "color": "#171a1c"
                    },
                    {
                        "secondary-color": "#8f99a3"
                    },
                    {
                        "tertiary-color": "#505962"
                    }
                ]
            },
            {
                "tags": "road",
                "elements": "label.text.fill",
                "types": "point",
                "stylers": [
                    {
                        "color": "#8f99a3"
                    }
                ]
            },
            {
                "tags": "entrance",
                "elements": "label.icon",
                "stylers": [
                    {
                        "color": "#171a1c"
                    },
                    {
                        "secondary-color": "#8f99a3"
                    }
                ]
            },
            {
                "tags": "locality",
                "elements": "label.icon",
                "stylers": [
                    {
                        "color": "#171a1c"
                    },
                    {
                        "secondary-color": "#8f99a3"
                    }
                ]
            },
            {
                "tags": "country",
                "elements": "label.text.fill",
                "stylers": [
                    {
                        "opacity": 0.8
                    },
                    {
                        "color": "#73808c"
                    }
                ]
            },
            {
                "tags": "country",
                "elements": "label.text.outline",
                "stylers": [
                    {
                        "color": "#171a1c"
                    },
                    {
                        "opacity": 0.5
                    }
                ]
            },
            {
                "tags": "region",
                "elements": "label.text.fill",
                "stylers": [
                    {
                        "color": "#73808c"
                    },
                    {
                        "opacity": 0.8
                    }
                ]
            },
            {
                "tags": "region",
                "elements": "label.text.outline",
                "stylers": [
                    {
                        "color": "#171a1c"
                    },
                    {
                        "opacity": 0.5
                    }
                ]
            },
            {
                "tags": "district",
                "elements": "label.text.fill",
                "stylers": [
                    {
                        "color": "#73808c"
                    },
                    {
                        "opacity": 0.8
                    }
                ]
            },
            {
                "tags": "district",
                "elements": "label.text.outline",
                "stylers": [
                    {
                        "color": "#171a1c"
                    },
                    {
                        "opacity": 0.5
                    }
                ]
            },
            {
                "tags": {
                    "any": "admin",
                    "none": [
                        "country",
                        "region",
                        "locality",
                        "district",
                        "address"
                    ]
                },
                "elements": "label.text.fill",
                "stylers": [
                    {
                        "color": "#73808c"
                    }
                ]
            },
            {
                "tags": {
                    "any": "admin",
                    "none": [
                        "country",
                        "region",
                        "locality",
                        "district",
                        "address"
                    ]
                },
                "elements": "label.text.outline",
                "stylers": [
                    {
                        "color": "#171a1c"
                    },
                    {
                        "opacity": 0.5
                    }
                ]
            },
            {
                "tags": "locality",
                "elements": "label.text.fill",
                "stylers": [
                    {
                        "color": "#94999e",
                        "zoom": 0
                    },
                    {
                        "color": "#94999e",
                        "zoom": 1
                    },
                    {
                        "color": "#94999e",
                        "zoom": 2
                    },
                    {
                        "color": "#94999e",
                        "zoom": 3
                    },
                    {
                        "color": "#94999e",
                        "zoom": 4
                    },
                    {
                        "color": "#969ba0",
                        "zoom": 5
                    },
                    {
                        "color": "#989da2",
                        "zoom": 6
                    },
                    {
                        "color": "#9a9fa4",
                        "zoom": 7
                    },
                    {
                        "color": "#9da2a6",
                        "zoom": 8
                    },
                    {
                        "color": "#9fa4a8",
                        "zoom": 9
                    },
                    {
                        "color": "#a1a6aa",
                        "zoom": 10
                    },
                    {
                        "color": "#a1a6aa",
                        "zoom": 11
                    },
                    {
                        "color": "#a1a6aa",
                        "zoom": 12
                    },
                    {
                        "color": "#a1a6aa",
                        "zoom": 13
                    },
                    {
                        "color": "#a1a6aa",
                        "zoom": 14
                    },
                    {
                        "color": "#a1a6aa",
                        "zoom": 15
                    },
                    {
                        "color": "#a1a6aa",
                        "zoom": 16
                    },
                    {
                        "color": "#a1a6aa",
                        "zoom": 17
                    },
                    {
                        "color": "#a1a6aa",
                        "zoom": 18
                    },
                    {
                        "color": "#a1a6aa",
                        "zoom": 19
                    },
                    {
                        "color": "#a1a6aa",
                        "zoom": 20
                    },
                    {
                        "color": "#a1a6aa",
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": "locality",
                "elements": "label.text.outline",
                "stylers": [
                    {
                        "color": "#171a1c"
                    },
                    {
                        "opacity": 0.5
                    }
                ]
            },
            {
                "tags": "road",
                "elements": "label.text.fill",
                "types": "polyline",
                "stylers": [
                    {
                        "color": "#94999e"
                    }
                ]
            },
            {
                "tags": "road",
                "elements": "label.text.outline",
                "types": "polyline",
                "stylers": [
                    {
                        "color": "#171a1c"
                    },
                    {
                        "opacity": 0.5
                    }
                ]
            },
            {
                "tags": "road",
                "elements": "geometry.fill.pattern",
                "types": "polyline",
                "stylers": [
                    {
                        "scale": 1
                    },
                    {
                        "color": "#61666b"
                    }
                ]
            },
            {
                "tags": "road",
                "elements": "label.text.fill",
                "types": "point",
                "stylers": [
                    {
                        "color": "#94999e"
                    }
                ]
            },
            {
                "tags": "structure",
                "elements": "label.text.fill",
                "stylers": [
                    {
                        "color": "#73808c"
                    },
                    {
                        "opacity": 0.5
                    }
                ]
            },
            {
                "tags": "structure",
                "elements": "label.text.outline",
                "stylers": [
                    {
                        "color": "#171a1c"
                    },
                    {
                        "opacity": 0.5
                    }
                ]
            },
            {
                "tags": "entrance",
                "elements": "label.text.fill",
                "stylers": [
                    {
                        "color": "#73808c"
                    },
                    {
                        "opacity": 1
                    }
                ]
            },
            {
                "tags": "entrance",
                "elements": "label.text.outline",
                "stylers": [
                    {
                        "color": "#171a1c"
                    },
                    {
                        "opacity": 0.5
                    }
                ]
            },
            {
                "tags": "address",
                "elements": "label.text.fill",
                "stylers": [
                    {
                        "color": "#73808c"
                    },
                    {
                        "opacity": 0.9,
                        "zoom": 0
                    },
                    {
                        "opacity": 0.9,
                        "zoom": 1
                    },
                    {
                        "opacity": 0.9,
                        "zoom": 2
                    },
                    {
                        "opacity": 0.9,
                        "zoom": 3
                    },
                    {
                        "opacity": 0.9,
                        "zoom": 4
                    },
                    {
                        "opacity": 0.9,
                        "zoom": 5
                    },
                    {
                        "opacity": 0.9,
                        "zoom": 6
                    },
                    {
                        "opacity": 0.9,
                        "zoom": 7
                    },
                    {
                        "opacity": 0.9,
                        "zoom": 8
                    },
                    {
                        "opacity": 0.9,
                        "zoom": 9
                    },
                    {
                        "opacity": 0.9,
                        "zoom": 10
                    },
                    {
                        "opacity": 0.9,
                        "zoom": 11
                    },
                    {
                        "opacity": 0.9,
                        "zoom": 12
                    },
                    {
                        "opacity": 0.9,
                        "zoom": 13
                    },
                    {
                        "opacity": 0.9,
                        "zoom": 14
                    },
                    {
                        "opacity": 0.9,
                        "zoom": 15
                    },
                    {
                        "opacity": 0.9,
                        "zoom": 16
                    },
                    {
                        "opacity": 1,
                        "zoom": 17
                    },
                    {
                        "opacity": 1,
                        "zoom": 18
                    },
                    {
                        "opacity": 1,
                        "zoom": 19
                    },
                    {
                        "opacity": 1,
                        "zoom": 20
                    },
                    {
                        "opacity": 1,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": "address",
                "elements": "label.text.outline",
                "stylers": [
                    {
                        "color": "#171a1c"
                    },
                    {
                        "opacity": 0.5
                    }
                ]
            },
            {
                "tags": "landscape",
                "elements": "label.text.fill",
                "stylers": [
                    {
                        "color": "#73808c",
                        "opacity": 1,
                        "zoom": 0
                    },
                    {
                        "color": "#73808c",
                        "opacity": 1,
                        "zoom": 1
                    },
                    {
                        "color": "#73808c",
                        "opacity": 1,
                        "zoom": 2
                    },
                    {
                        "color": "#73808c",
                        "opacity": 1,
                        "zoom": 3
                    },
                    {
                        "color": "#73808c",
                        "opacity": 0.5,
                        "zoom": 4
                    },
                    {
                        "color": "#73808c",
                        "opacity": 0.5,
                        "zoom": 5
                    },
                    {
                        "color": "#73808c",
                        "opacity": 0.5,
                        "zoom": 6
                    },
                    {
                        "color": "#73808c",
                        "opacity": 0.5,
                        "zoom": 7
                    },
                    {
                        "color": "#73808c",
                        "opacity": 0.5,
                        "zoom": 8
                    },
                    {
                        "color": "#73808c",
                        "opacity": 0.5,
                        "zoom": 9
                    },
                    {
                        "color": "#73808c",
                        "opacity": 0.5,
                        "zoom": 10
                    },
                    {
                        "color": "#73808c",
                        "opacity": 0.5,
                        "zoom": 11
                    },
                    {
                        "color": "#73808c",
                        "opacity": 0.5,
                        "zoom": 12
                    },
                    {
                        "color": "#73808c",
                        "opacity": 0.5,
                        "zoom": 13
                    },
                    {
                        "color": "#73808c",
                        "opacity": 0.5,
                        "zoom": 14
                    },
                    {
                        "color": "#73808c",
                        "opacity": 0.5,
                        "zoom": 15
                    },
                    {
                        "color": "#73808c",
                        "opacity": 0.5,
                        "zoom": 16
                    },
                    {
                        "color": "#73808c",
                        "opacity": 0.5,
                        "zoom": 17
                    },
                    {
                        "color": "#73808c",
                        "opacity": 0.5,
                        "zoom": 18
                    },
                    {
                        "color": "#73808c",
                        "opacity": 0.5,
                        "zoom": 19
                    },
                    {
                        "color": "#73808c",
                        "opacity": 0.5,
                        "zoom": 20
                    },
                    {
                        "color": "#73808c",
                        "opacity": 0.5,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": "landscape",
                "elements": "label.text.outline",
                "stylers": [
                    {
                        "color": "#171a1c"
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 0
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 1
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 2
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 3
                    },
                    {
                        "opacity": 0,
                        "zoom": 4
                    },
                    {
                        "opacity": 0,
                        "zoom": 5
                    },
                    {
                        "opacity": 0,
                        "zoom": 6
                    },
                    {
                        "opacity": 0,
                        "zoom": 7
                    },
                    {
                        "opacity": 0,
                        "zoom": 8
                    },
                    {
                        "opacity": 0,
                        "zoom": 9
                    },
                    {
                        "opacity": 0,
                        "zoom": 10
                    },
                    {
                        "opacity": 0,
                        "zoom": 11
                    },
                    {
                        "opacity": 0,
                        "zoom": 12
                    },
                    {
                        "opacity": 0,
                        "zoom": 13
                    },
                    {
                        "opacity": 0,
                        "zoom": 14
                    },
                    {
                        "opacity": 0,
                        "zoom": 15
                    },
                    {
                        "opacity": 0,
                        "zoom": 16
                    },
                    {
                        "opacity": 0,
                        "zoom": 17
                    },
                    {
                        "opacity": 0,
                        "zoom": 18
                    },
                    {
                        "opacity": 0,
                        "zoom": 19
                    },
                    {
                        "opacity": 0,
                        "zoom": 20
                    },
                    {
                        "opacity": 0,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": "water",
                "elements": "label.text.fill",
                "stylers": [
                    {
                        "color": "#6c7c8e"
                    },
                    {
                        "opacity": 0.8
                    }
                ]
            },
            {
                "tags": "water",
                "elements": "label.text.outline",
                "types": "polyline",
                "stylers": [
                    {
                        "color": "#171a1c"
                    },
                    {
                        "opacity": 0.2
                    }
                ]
            },
            {
                "tags": {
                    "any": "road_1",
                    "none": "is_tunnel"
                },
                "elements": "geometry.fill",
                "stylers": [
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 0
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 1
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 2
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 3
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 4
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 5
                    },
                    {
                        "color": "#606b76",
                        "scale": 2.64,
                        "zoom": 6
                    },
                    {
                        "color": "#606b76",
                        "scale": 2.84,
                        "zoom": 7
                    },
                    {
                        "color": "#606b76",
                        "scale": 3.13,
                        "zoom": 8
                    },
                    {
                        "color": "#606b76",
                        "scale": 3.55,
                        "zoom": 9
                    },
                    {
                        "color": "#606b76",
                        "scale": 3.21,
                        "zoom": 10
                    },
                    {
                        "color": "#606b76",
                        "scale": 2.72,
                        "zoom": 11
                    },
                    {
                        "color": "#606b76",
                        "scale": 2.35,
                        "zoom": 12
                    },
                    {
                        "color": "#606b76",
                        "scale": 2.02,
                        "zoom": 13
                    },
                    {
                        "color": "#5f6974",
                        "scale": 1.81,
                        "zoom": 14
                    },
                    {
                        "color": "#5d6873",
                        "scale": 1.69,
                        "zoom": 15
                    },
                    {
                        "color": "#5c6671",
                        "scale": 1.66,
                        "zoom": 16
                    },
                    {
                        "color": "#5b656f",
                        "scale": 1.31,
                        "zoom": 17
                    },
                    {
                        "color": "#59636d",
                        "scale": 1.08,
                        "zoom": 18
                    },
                    {
                        "color": "#58616c",
                        "scale": 0.93,
                        "zoom": 19
                    },
                    {
                        "color": "#56606a",
                        "scale": 0.84,
                        "zoom": 20
                    },
                    {
                        "color": "#555e68",
                        "scale": 0.8,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": {
                    "any": "road_1"
                },
                "elements": "geometry.outline",
                "stylers": [
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 0
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 1
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 2
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 3
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 4
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.9,
                        "zoom": 5
                    },
                    {
                        "color": "#2e3338",
                        "scale": 1.96,
                        "zoom": 6
                    },
                    {
                        "color": "#2e3338",
                        "scale": 1.96,
                        "zoom": 7
                    },
                    {
                        "color": "#2e3338",
                        "scale": 2.02,
                        "zoom": 8
                    },
                    {
                        "color": "#2e3338",
                        "scale": 2.16,
                        "zoom": 9
                    },
                    {
                        "color": "#2e3338",
                        "scale": 2.16,
                        "zoom": 10
                    },
                    {
                        "color": "#2e3338",
                        "scale": 2.04,
                        "zoom": 11
                    },
                    {
                        "color": "#2e3338",
                        "scale": 1.93,
                        "zoom": 12
                    },
                    {
                        "color": "#2e3338",
                        "scale": 1.8,
                        "zoom": 13
                    },
                    {
                        "color": "#2e3338",
                        "scale": 1.71,
                        "zoom": 14
                    },
                    {
                        "color": "#2e3338",
                        "scale": 1.68,
                        "zoom": 15
                    },
                    {
                        "color": "#2e3338",
                        "scale": 1.7,
                        "zoom": 16
                    },
                    {
                        "color": "#2e3338",
                        "scale": 1.38,
                        "zoom": 17
                    },
                    {
                        "color": "#2e3338",
                        "scale": 1.15,
                        "zoom": 18
                    },
                    {
                        "color": "#2e3338",
                        "scale": 1,
                        "zoom": 19
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.91,
                        "zoom": 20
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.87,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": {
                    "any": "road_2",
                    "none": "is_tunnel"
                },
                "elements": "geometry.fill",
                "stylers": [
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 0
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 1
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 2
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 3
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 4
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 5
                    },
                    {
                        "color": "#606b76",
                        "scale": 2.64,
                        "zoom": 6
                    },
                    {
                        "color": "#606b76",
                        "scale": 2.84,
                        "zoom": 7
                    },
                    {
                        "color": "#606b76",
                        "scale": 3.13,
                        "zoom": 8
                    },
                    {
                        "color": "#606b76",
                        "scale": 3.55,
                        "zoom": 9
                    },
                    {
                        "color": "#606b76",
                        "scale": 3.21,
                        "zoom": 10
                    },
                    {
                        "color": "#606b76",
                        "scale": 2.72,
                        "zoom": 11
                    },
                    {
                        "color": "#606b76",
                        "scale": 2.35,
                        "zoom": 12
                    },
                    {
                        "color": "#606b76",
                        "scale": 2.02,
                        "zoom": 13
                    },
                    {
                        "color": "#5f6974",
                        "scale": 1.81,
                        "zoom": 14
                    },
                    {
                        "color": "#5d6873",
                        "scale": 1.69,
                        "zoom": 15
                    },
                    {
                        "color": "#5c6671",
                        "scale": 1.66,
                        "zoom": 16
                    },
                    {
                        "color": "#5b656f",
                        "scale": 1.31,
                        "zoom": 17
                    },
                    {
                        "color": "#59636d",
                        "scale": 1.08,
                        "zoom": 18
                    },
                    {
                        "color": "#58616c",
                        "scale": 0.93,
                        "zoom": 19
                    },
                    {
                        "color": "#56606a",
                        "scale": 0.84,
                        "zoom": 20
                    },
                    {
                        "color": "#555e68",
                        "scale": 0.8,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": {
                    "any": "road_2"
                },
                "elements": "geometry.outline",
                "stylers": [
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 0
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 1
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 2
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 3
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 4
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.9,
                        "zoom": 5
                    },
                    {
                        "color": "#2e3338",
                        "scale": 1.96,
                        "zoom": 6
                    },
                    {
                        "color": "#2e3338",
                        "scale": 1.96,
                        "zoom": 7
                    },
                    {
                        "color": "#2e3338",
                        "scale": 2.02,
                        "zoom": 8
                    },
                    {
                        "color": "#2e3338",
                        "scale": 2.16,
                        "zoom": 9
                    },
                    {
                        "color": "#2e3338",
                        "scale": 2.16,
                        "zoom": 10
                    },
                    {
                        "color": "#2e3338",
                        "scale": 2.04,
                        "zoom": 11
                    },
                    {
                        "color": "#2e3338",
                        "scale": 1.93,
                        "zoom": 12
                    },
                    {
                        "color": "#2e3338",
                        "scale": 1.8,
                        "zoom": 13
                    },
                    {
                        "color": "#2e3338",
                        "scale": 1.71,
                        "zoom": 14
                    },
                    {
                        "color": "#2e3338",
                        "scale": 1.68,
                        "zoom": 15
                    },
                    {
                        "color": "#2e3338",
                        "scale": 1.7,
                        "zoom": 16
                    },
                    {
                        "color": "#2e3338",
                        "scale": 1.38,
                        "zoom": 17
                    },
                    {
                        "color": "#2e3338",
                        "scale": 1.15,
                        "zoom": 18
                    },
                    {
                        "color": "#2e3338",
                        "scale": 1,
                        "zoom": 19
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.91,
                        "zoom": 20
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.87,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": {
                    "any": "road_3",
                    "none": "is_tunnel"
                },
                "elements": "geometry.fill",
                "stylers": [
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 0
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 1
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 2
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 3
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 4
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 5
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 6
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 7
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 8
                    },
                    {
                        "color": "#606b76",
                        "scale": 2.23,
                        "zoom": 9
                    },
                    {
                        "color": "#606b76",
                        "scale": 2.33,
                        "zoom": 10
                    },
                    {
                        "color": "#606b76",
                        "scale": 1.49,
                        "zoom": 11
                    },
                    {
                        "color": "#606b76",
                        "scale": 1.48,
                        "zoom": 12
                    },
                    {
                        "color": "#606b76",
                        "scale": 1.23,
                        "zoom": 13
                    },
                    {
                        "color": "#5f6974",
                        "scale": 1.06,
                        "zoom": 14
                    },
                    {
                        "color": "#5d6873",
                        "scale": 0.96,
                        "zoom": 15
                    },
                    {
                        "color": "#5c6671",
                        "scale": 0.92,
                        "zoom": 16
                    },
                    {
                        "color": "#5b656f",
                        "scale": 0.81,
                        "zoom": 17
                    },
                    {
                        "color": "#59636d",
                        "scale": 0.75,
                        "zoom": 18
                    },
                    {
                        "color": "#58616c",
                        "scale": 0.73,
                        "zoom": 19
                    },
                    {
                        "color": "#56606a",
                        "scale": 0.75,
                        "zoom": 20
                    },
                    {
                        "color": "#555e68",
                        "scale": 0.8,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": {
                    "any": "road_3"
                },
                "elements": "geometry.outline",
                "stylers": [
                    {
                        "color": "#606b76",
                        "scale": 1.03,
                        "zoom": 0
                    },
                    {
                        "color": "#606b76",
                        "scale": 1.03,
                        "zoom": 1
                    },
                    {
                        "color": "#606b76",
                        "scale": 1.03,
                        "zoom": 2
                    },
                    {
                        "color": "#606b76",
                        "scale": 1.03,
                        "zoom": 3
                    },
                    {
                        "color": "#606b76",
                        "scale": 1.03,
                        "zoom": 4
                    },
                    {
                        "color": "#606b76",
                        "scale": 1.03,
                        "zoom": 5
                    },
                    {
                        "color": "#606b76",
                        "scale": 1.03,
                        "zoom": 6
                    },
                    {
                        "color": "#606b76",
                        "scale": 1.03,
                        "zoom": 7
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.83,
                        "zoom": 8
                    },
                    {
                        "color": "#2e3338",
                        "scale": 2.71,
                        "zoom": 9
                    },
                    {
                        "color": "#2e3338",
                        "scale": 1.76,
                        "zoom": 10
                    },
                    {
                        "color": "#2e3338",
                        "scale": 1.31,
                        "zoom": 11
                    },
                    {
                        "color": "#2e3338",
                        "scale": 1.37,
                        "zoom": 12
                    },
                    {
                        "color": "#2e3338",
                        "scale": 1.21,
                        "zoom": 13
                    },
                    {
                        "color": "#2e3338",
                        "scale": 1.1,
                        "zoom": 14
                    },
                    {
                        "color": "#2e3338",
                        "scale": 1.02,
                        "zoom": 15
                    },
                    {
                        "color": "#2e3338",
                        "scale": 1,
                        "zoom": 16
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.88,
                        "zoom": 17
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.81,
                        "zoom": 18
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.79,
                        "zoom": 19
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.81,
                        "zoom": 20
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.87,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": {
                    "any": "road_4",
                    "none": "is_tunnel"
                },
                "elements": "geometry.fill",
                "stylers": [
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 0
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 1
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 2
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 3
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 4
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 5
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 6
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 7
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 8
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 9
                    },
                    {
                        "color": "#606b76",
                        "scale": 1.5,
                        "zoom": 10
                    },
                    {
                        "color": "#606b76",
                        "scale": 1.12,
                        "zoom": 11
                    },
                    {
                        "color": "#606b76",
                        "scale": 1.25,
                        "zoom": 12
                    },
                    {
                        "color": "#606b76",
                        "scale": 1.05,
                        "zoom": 13
                    },
                    {
                        "color": "#5f6974",
                        "scale": 0.93,
                        "zoom": 14
                    },
                    {
                        "color": "#5d6873",
                        "scale": 0.86,
                        "zoom": 15
                    },
                    {
                        "color": "#5c6671",
                        "scale": 1.02,
                        "zoom": 16
                    },
                    {
                        "color": "#5b656f",
                        "scale": 0.88,
                        "zoom": 17
                    },
                    {
                        "color": "#59636d",
                        "scale": 0.79,
                        "zoom": 18
                    },
                    {
                        "color": "#58616c",
                        "scale": 0.76,
                        "zoom": 19
                    },
                    {
                        "color": "#56606a",
                        "scale": 0.76,
                        "zoom": 20
                    },
                    {
                        "color": "#555e68",
                        "scale": 0.8,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": {
                    "any": "road_4"
                },
                "elements": "geometry.outline",
                "stylers": [
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 0
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 1
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 2
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 3
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 4
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 5
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 6
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 7
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 8
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.72,
                        "zoom": 9
                    },
                    {
                        "color": "#2e3338",
                        "scale": 1.22,
                        "zoom": 10
                    },
                    {
                        "color": "#2e3338",
                        "scale": 1.04,
                        "zoom": 11
                    },
                    {
                        "color": "#2e3338",
                        "scale": 1.17,
                        "zoom": 12
                    },
                    {
                        "color": "#2e3338",
                        "scale": 1.06,
                        "zoom": 13
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.97,
                        "zoom": 14
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.92,
                        "zoom": 15
                    },
                    {
                        "color": "#2e3338",
                        "scale": 1.09,
                        "zoom": 16
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.95,
                        "zoom": 17
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.86,
                        "zoom": 18
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.82,
                        "zoom": 19
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.82,
                        "zoom": 20
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.86,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": {
                    "any": "road_5",
                    "none": "is_tunnel"
                },
                "elements": "geometry.fill",
                "stylers": [
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 0
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 1
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 2
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 3
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 4
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 5
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 6
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 7
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 8
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 9
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 10
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 11
                    },
                    {
                        "color": "#606b76",
                        "scale": 1.11,
                        "zoom": 12
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.84,
                        "zoom": 13
                    },
                    {
                        "color": "#5f6974",
                        "scale": 0.72,
                        "zoom": 14
                    },
                    {
                        "color": "#5d6873",
                        "scale": 0.84,
                        "zoom": 15
                    },
                    {
                        "color": "#5c6671",
                        "scale": 0.97,
                        "zoom": 16
                    },
                    {
                        "color": "#5b656f",
                        "scale": 0.83,
                        "zoom": 17
                    },
                    {
                        "color": "#59636d",
                        "scale": 0.75,
                        "zoom": 18
                    },
                    {
                        "color": "#58616c",
                        "scale": 0.73,
                        "zoom": 19
                    },
                    {
                        "color": "#56606a",
                        "scale": 0.74,
                        "zoom": 20
                    },
                    {
                        "color": "#555e68",
                        "scale": 0.8,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": {
                    "any": "road_5"
                },
                "elements": "geometry.outline",
                "stylers": [
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 0
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 1
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 2
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 3
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 4
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 5
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 6
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 7
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 8
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 9
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 10
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.4,
                        "zoom": 11
                    },
                    {
                        "color": "#2e3338",
                        "scale": 1.03,
                        "zoom": 12
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.88,
                        "zoom": 13
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.79,
                        "zoom": 14
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.91,
                        "zoom": 15
                    },
                    {
                        "color": "#2e3338",
                        "scale": 1.05,
                        "zoom": 16
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.9,
                        "zoom": 17
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.82,
                        "zoom": 18
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.79,
                        "zoom": 19
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.81,
                        "zoom": 20
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.86,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": {
                    "any": "road_6",
                    "none": "is_tunnel"
                },
                "elements": "geometry.fill",
                "stylers": [
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 0
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 1
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 2
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 3
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 4
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 5
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 6
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 7
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 8
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 9
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 10
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 11
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 12
                    },
                    {
                        "color": "#606b76",
                        "scale": 2,
                        "zoom": 13
                    },
                    {
                        "color": "#5f6974",
                        "scale": 1.13,
                        "zoom": 14
                    },
                    {
                        "color": "#5d6873",
                        "scale": 1.11,
                        "zoom": 15
                    },
                    {
                        "color": "#5c6671",
                        "scale": 1.16,
                        "zoom": 16
                    },
                    {
                        "color": "#5b656f",
                        "scale": 0.93,
                        "zoom": 17
                    },
                    {
                        "color": "#59636d",
                        "scale": 0.8,
                        "zoom": 18
                    },
                    {
                        "color": "#58616c",
                        "scale": 0.75,
                        "zoom": 19
                    },
                    {
                        "color": "#56606a",
                        "scale": 0.75,
                        "zoom": 20
                    },
                    {
                        "color": "#555e68",
                        "scale": 0.8,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": {
                    "any": "road_6"
                },
                "elements": "geometry.outline",
                "stylers": [
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 0
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 1
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 2
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 3
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 4
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 5
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 6
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 7
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 8
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 9
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 10
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 11
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 12
                    },
                    {
                        "color": "#2e3338",
                        "scale": 1.49,
                        "zoom": 13
                    },
                    {
                        "color": "#2e3338",
                        "scale": 1.09,
                        "zoom": 14
                    },
                    {
                        "color": "#2e3338",
                        "scale": 1.13,
                        "zoom": 15
                    },
                    {
                        "color": "#2e3338",
                        "scale": 1.22,
                        "zoom": 16
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.99,
                        "zoom": 17
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.87,
                        "zoom": 18
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.82,
                        "zoom": 19
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.82,
                        "zoom": 20
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.86,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": {
                    "any": "road_7",
                    "none": "is_tunnel"
                },
                "elements": "geometry.fill",
                "stylers": [
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 0
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 1
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 2
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 3
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 4
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 5
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 6
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 7
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 8
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 9
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 10
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 11
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 12
                    },
                    {
                        "color": "#606b76",
                        "scale": 0,
                        "zoom": 13
                    },
                    {
                        "color": "#5f6974",
                        "scale": 0.8,
                        "zoom": 14
                    },
                    {
                        "color": "#5d6873",
                        "scale": 0.69,
                        "zoom": 15
                    },
                    {
                        "color": "#5c6671",
                        "scale": 0.78,
                        "zoom": 16
                    },
                    {
                        "color": "#5b656f",
                        "scale": 0.71,
                        "zoom": 17
                    },
                    {
                        "color": "#59636d",
                        "scale": 0.69,
                        "zoom": 18
                    },
                    {
                        "color": "#58616c",
                        "scale": 0.7,
                        "zoom": 19
                    },
                    {
                        "color": "#56606a",
                        "scale": 0.74,
                        "zoom": 20
                    },
                    {
                        "color": "#555e68",
                        "scale": 0.8,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": {
                    "any": "road_7"
                },
                "elements": "geometry.outline",
                "stylers": [
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 0
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 1
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 2
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 3
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 4
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 5
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 6
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 7
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 8
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 9
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 10
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 11
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 12
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 13
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.84,
                        "zoom": 14
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.77,
                        "zoom": 15
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.84,
                        "zoom": 16
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.78,
                        "zoom": 17
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.75,
                        "zoom": 18
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.76,
                        "zoom": 19
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.79,
                        "zoom": 20
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.86,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": {
                    "any": "road_minor",
                    "none": "is_tunnel"
                },
                "elements": "geometry.fill",
                "stylers": [
                    {
                        "color": "#3e454c"
                    },
                    {
                        "scale": 0,
                        "zoom": 0
                    },
                    {
                        "scale": 0,
                        "zoom": 1
                    },
                    {
                        "scale": 0,
                        "zoom": 2
                    },
                    {
                        "scale": 0,
                        "zoom": 3
                    },
                    {
                        "scale": 0,
                        "zoom": 4
                    },
                    {
                        "scale": 0,
                        "zoom": 5
                    },
                    {
                        "scale": 0,
                        "zoom": 6
                    },
                    {
                        "scale": 0,
                        "zoom": 7
                    },
                    {
                        "scale": 0,
                        "zoom": 8
                    },
                    {
                        "scale": 0,
                        "zoom": 9
                    },
                    {
                        "scale": 0,
                        "zoom": 10
                    },
                    {
                        "scale": 0,
                        "zoom": 11
                    },
                    {
                        "scale": 0,
                        "zoom": 12
                    },
                    {
                        "scale": 0,
                        "zoom": 13
                    },
                    {
                        "scale": 0,
                        "zoom": 14
                    },
                    {
                        "scale": 0,
                        "zoom": 15
                    },
                    {
                        "scale": 0.8,
                        "zoom": 16
                    },
                    {
                        "scale": 0.8,
                        "zoom": 17
                    },
                    {
                        "scale": 0.8,
                        "zoom": 18
                    },
                    {
                        "scale": 0.8,
                        "zoom": 19
                    },
                    {
                        "scale": 0.8,
                        "zoom": 20
                    },
                    {
                        "scale": 0.8,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": {
                    "any": "road_minor"
                },
                "elements": "geometry.outline",
                "stylers": [
                    {
                        "opacity": 0
                    }
                ]
            },
            {
                "tags": {
                    "any": "road_unclassified",
                    "none": "is_tunnel"
                },
                "elements": "geometry.fill",
                "stylers": [
                    {
                        "color": "#3e454c"
                    },
                    {
                        "scale": 0,
                        "zoom": 0
                    },
                    {
                        "scale": 0,
                        "zoom": 1
                    },
                    {
                        "scale": 0,
                        "zoom": 2
                    },
                    {
                        "scale": 0,
                        "zoom": 3
                    },
                    {
                        "scale": 0,
                        "zoom": 4
                    },
                    {
                        "scale": 0,
                        "zoom": 5
                    },
                    {
                        "scale": 0,
                        "zoom": 6
                    },
                    {
                        "scale": 0,
                        "zoom": 7
                    },
                    {
                        "scale": 0,
                        "zoom": 8
                    },
                    {
                        "scale": 0,
                        "zoom": 9
                    },
                    {
                        "scale": 0,
                        "zoom": 10
                    },
                    {
                        "scale": 0,
                        "zoom": 11
                    },
                    {
                        "scale": 0,
                        "zoom": 12
                    },
                    {
                        "scale": 0,
                        "zoom": 13
                    },
                    {
                        "scale": 0,
                        "zoom": 14
                    },
                    {
                        "scale": 0,
                        "zoom": 15
                    },
                    {
                        "scale": 0.8,
                        "zoom": 16
                    },
                    {
                        "scale": 0.8,
                        "zoom": 17
                    },
                    {
                        "scale": 0.8,
                        "zoom": 18
                    },
                    {
                        "scale": 0.8,
                        "zoom": 19
                    },
                    {
                        "scale": 0.8,
                        "zoom": 20
                    },
                    {
                        "scale": 0.8,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": {
                    "any": "road_unclassified"
                },
                "elements": "geometry.outline",
                "stylers": [
                    {
                        "opacity": 0
                    }
                ]
            },
            {
                "tags": {
                    "all": "is_tunnel",
                    "none": "path"
                },
                "elements": "geometry.fill",
                "stylers": [
                    {
                        "color": "#454c55",
                        "zoom": 0
                    },
                    {
                        "color": "#454c55",
                        "zoom": 1
                    },
                    {
                        "color": "#454c55",
                        "zoom": 2
                    },
                    {
                        "color": "#454c55",
                        "zoom": 3
                    },
                    {
                        "color": "#454c55",
                        "zoom": 4
                    },
                    {
                        "color": "#454c55",
                        "zoom": 5
                    },
                    {
                        "color": "#454c55",
                        "zoom": 6
                    },
                    {
                        "color": "#454c55",
                        "zoom": 7
                    },
                    {
                        "color": "#454c55",
                        "zoom": 8
                    },
                    {
                        "color": "#454c55",
                        "zoom": 9
                    },
                    {
                        "color": "#454c55",
                        "zoom": 10
                    },
                    {
                        "color": "#454c55",
                        "zoom": 11
                    },
                    {
                        "color": "#454c55",
                        "zoom": 12
                    },
                    {
                        "color": "#454c55",
                        "zoom": 13
                    },
                    {
                        "color": "#40474f",
                        "zoom": 14
                    },
                    {
                        "color": "#3b4249",
                        "zoom": 15
                    },
                    {
                        "color": "#3a4148",
                        "zoom": 16
                    },
                    {
                        "color": "#3a4047",
                        "zoom": 17
                    },
                    {
                        "color": "#394047",
                        "zoom": 18
                    },
                    {
                        "color": "#383f46",
                        "zoom": 19
                    },
                    {
                        "color": "#383e45",
                        "zoom": 20
                    },
                    {
                        "color": "#373d44",
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": {
                    "all": "path",
                    "none": "is_tunnel"
                },
                "elements": "geometry.fill",
                "stylers": [
                    {
                        "color": "#171a1c"
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 0
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 1
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 2
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 3
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 4
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 5
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 6
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 7
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 8
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 9
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 10
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 11
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 12
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 13
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 14
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 15
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 16
                    },
                    {
                        "opacity": 1,
                        "zoom": 17
                    },
                    {
                        "opacity": 1,
                        "zoom": 18
                    },
                    {
                        "opacity": 1,
                        "zoom": 19
                    },
                    {
                        "opacity": 1,
                        "zoom": 20
                    },
                    {
                        "opacity": 1,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": {
                    "all": "path",
                    "none": "is_tunnel"
                },
                "elements": "geometry.outline",
                "stylers": [
                    {
                        "opacity": 0.7
                    },
                    {
                        "color": "#40474f",
                        "zoom": 0
                    },
                    {
                        "color": "#40474f",
                        "zoom": 1
                    },
                    {
                        "color": "#40474f",
                        "zoom": 2
                    },
                    {
                        "color": "#40474f",
                        "zoom": 3
                    },
                    {
                        "color": "#40474f",
                        "zoom": 4
                    },
                    {
                        "color": "#40474f",
                        "zoom": 5
                    },
                    {
                        "color": "#40474f",
                        "zoom": 6
                    },
                    {
                        "color": "#40474f",
                        "zoom": 7
                    },
                    {
                        "color": "#40474f",
                        "zoom": 8
                    },
                    {
                        "color": "#40474f",
                        "zoom": 9
                    },
                    {
                        "color": "#40474f",
                        "zoom": 10
                    },
                    {
                        "color": "#40474f",
                        "zoom": 11
                    },
                    {
                        "color": "#40474f",
                        "zoom": 12
                    },
                    {
                        "color": "#40474f",
                        "zoom": 13
                    },
                    {
                        "color": "#3c424a",
                        "zoom": 14
                    },
                    {
                        "color": "#373d44",
                        "zoom": 15
                    },
                    {
                        "color": "#363c43",
                        "zoom": 16
                    },
                    {
                        "color": "#353b42",
                        "zoom": 17
                    },
                    {
                        "color": "#353b41",
                        "zoom": 18
                    },
                    {
                        "color": "#343a40",
                        "zoom": 19
                    },
                    {
                        "color": "#33393f",
                        "zoom": 20
                    },
                    {
                        "color": "#32383e",
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": "road_construction",
                "elements": "geometry.fill",
                "stylers": [
                    {
                        "color": "#606b76"
                    }
                ]
            },
            {
                "tags": "road_construction",
                "elements": "geometry.outline",
                "stylers": [
                    {
                        "color": "#171a1c",
                        "zoom": 0
                    },
                    {
                        "color": "#171a1c",
                        "zoom": 1
                    },
                    {
                        "color": "#171a1c",
                        "zoom": 2
                    },
                    {
                        "color": "#171a1c",
                        "zoom": 3
                    },
                    {
                        "color": "#171a1c",
                        "zoom": 4
                    },
                    {
                        "color": "#171a1c",
                        "zoom": 5
                    },
                    {
                        "color": "#171a1c",
                        "zoom": 6
                    },
                    {
                        "color": "#171a1c",
                        "zoom": 7
                    },
                    {
                        "color": "#171a1c",
                        "zoom": 8
                    },
                    {
                        "color": "#171a1c",
                        "zoom": 9
                    },
                    {
                        "color": "#171a1c",
                        "zoom": 10
                    },
                    {
                        "color": "#171a1c",
                        "zoom": 11
                    },
                    {
                        "color": "#171a1c",
                        "zoom": 12
                    },
                    {
                        "color": "#171a1c",
                        "zoom": 13
                    },
                    {
                        "color": "#2e3338",
                        "zoom": 14
                    },
                    {
                        "color": "#171a1c",
                        "zoom": 15
                    },
                    {
                        "color": "#131617",
                        "zoom": 16
                    },
                    {
                        "color": "#0f1113",
                        "zoom": 17
                    },
                    {
                        "color": "#0c0d0e",
                        "zoom": 18
                    },
                    {
                        "color": "#080909",
                        "zoom": 19
                    },
                    {
                        "color": "#040405",
                        "zoom": 20
                    },
                    {
                        "color": "#000000",
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": {
                    "any": "ferry"
                },
                "stylers": [
                    {
                        "color": "#404954"
                    }
                ]
            },
            {
                "tags": "transit_location",
                "elements": "label.icon",
                "stylers": [
                    {
                        "saturation": -1
                    },
                    {
                        "opacity": 0,
                        "zoom": 0
                    },
                    {
                        "opacity": 0,
                        "zoom": 1
                    },
                    {
                        "opacity": 0,
                        "zoom": 2
                    },
                    {
                        "opacity": 0,
                        "zoom": 3
                    },
                    {
                        "opacity": 0,
                        "zoom": 4
                    },
                    {
                        "opacity": 0,
                        "zoom": 5
                    },
                    {
                        "opacity": 0,
                        "zoom": 6
                    },
                    {
                        "opacity": 0,
                        "zoom": 7
                    },
                    {
                        "opacity": 0,
                        "zoom": 8
                    },
                    {
                        "opacity": 0,
                        "zoom": 9
                    },
                    {
                        "opacity": 0,
                        "zoom": 10
                    },
                    {
                        "opacity": 0,
                        "zoom": 11
                    },
                    {
                        "opacity": 0,
                        "zoom": 12
                    },
                    {
                        "opacity": 1,
                        "zoom": 13
                    },
                    {
                        "opacity": 1,
                        "zoom": 14
                    },
                    {
                        "opacity": 1,
                        "zoom": 15
                    },
                    {
                        "opacity": 1,
                        "zoom": 16
                    },
                    {
                        "opacity": 1,
                        "zoom": 17
                    },
                    {
                        "opacity": 1,
                        "zoom": 18
                    },
                    {
                        "opacity": 1,
                        "zoom": 19
                    },
                    {
                        "opacity": 1,
                        "zoom": 20
                    },
                    {
                        "opacity": 1,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": "transit_location",
                "elements": "label.text",
                "stylers": [
                    {
                        "opacity": 0,
                        "zoom": 0
                    },
                    {
                        "opacity": 0,
                        "zoom": 1
                    },
                    {
                        "opacity": 0,
                        "zoom": 2
                    },
                    {
                        "opacity": 0,
                        "zoom": 3
                    },
                    {
                        "opacity": 0,
                        "zoom": 4
                    },
                    {
                        "opacity": 0,
                        "zoom": 5
                    },
                    {
                        "opacity": 0,
                        "zoom": 6
                    },
                    {
                        "opacity": 0,
                        "zoom": 7
                    },
                    {
                        "opacity": 0,
                        "zoom": 8
                    },
                    {
                        "opacity": 0,
                        "zoom": 9
                    },
                    {
                        "opacity": 0,
                        "zoom": 10
                    },
                    {
                        "opacity": 0,
                        "zoom": 11
                    },
                    {
                        "opacity": 0,
                        "zoom": 12
                    },
                    {
                        "opacity": 1,
                        "zoom": 13
                    },
                    {
                        "opacity": 1,
                        "zoom": 14
                    },
                    {
                        "opacity": 1,
                        "zoom": 15
                    },
                    {
                        "opacity": 1,
                        "zoom": 16
                    },
                    {
                        "opacity": 1,
                        "zoom": 17
                    },
                    {
                        "opacity": 1,
                        "zoom": 18
                    },
                    {
                        "opacity": 1,
                        "zoom": 19
                    },
                    {
                        "opacity": 1,
                        "zoom": 20
                    },
                    {
                        "opacity": 1,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": "transit_location",
                "elements": "label.text.fill",
                "stylers": [
                    {
                        "color": "#8aa1a8"
                    }
                ]
            },
            {
                "tags": "transit_location",
                "elements": "label.text.outline",
                "stylers": [
                    {
                        "color": "#171a1c"
                    }
                ]
            },
            {
                "tags": "transit_schema",
                "elements": "geometry.fill",
                "stylers": [
                    {
                        "color": "#8aa1a8"
                    },
                    {
                        "scale": 0.7
                    },
                    {
                        "opacity": 0.6,
                        "zoom": 0
                    },
                    {
                        "opacity": 0.6,
                        "zoom": 1
                    },
                    {
                        "opacity": 0.6,
                        "zoom": 2
                    },
                    {
                        "opacity": 0.6,
                        "zoom": 3
                    },
                    {
                        "opacity": 0.6,
                        "zoom": 4
                    },
                    {
                        "opacity": 0.6,
                        "zoom": 5
                    },
                    {
                        "opacity": 0.6,
                        "zoom": 6
                    },
                    {
                        "opacity": 0.6,
                        "zoom": 7
                    },
                    {
                        "opacity": 0.6,
                        "zoom": 8
                    },
                    {
                        "opacity": 0.6,
                        "zoom": 9
                    },
                    {
                        "opacity": 0.6,
                        "zoom": 10
                    },
                    {
                        "opacity": 0.6,
                        "zoom": 11
                    },
                    {
                        "opacity": 0.6,
                        "zoom": 12
                    },
                    {
                        "opacity": 0.6,
                        "zoom": 13
                    },
                    {
                        "opacity": 0.6,
                        "zoom": 14
                    },
                    {
                        "opacity": 0.5,
                        "zoom": 15
                    },
                    {
                        "opacity": 0.4,
                        "zoom": 16
                    },
                    {
                        "opacity": 0.4,
                        "zoom": 17
                    },
                    {
                        "opacity": 0.4,
                        "zoom": 18
                    },
                    {
                        "opacity": 0.4,
                        "zoom": 19
                    },
                    {
                        "opacity": 0.4,
                        "zoom": 20
                    },
                    {
                        "opacity": 0.4,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": "transit_schema",
                "elements": "geometry.outline",
                "stylers": [
                    {
                        "opacity": 0
                    }
                ]
            },
            {
                "tags": "transit_line",
                "elements": "geometry.fill.pattern",
                "stylers": [
                    {
                        "color": "#7a8386"
                    },
                    {
                        "opacity": 0,
                        "zoom": 0
                    },
                    {
                        "opacity": 0,
                        "zoom": 1
                    },
                    {
                        "opacity": 0,
                        "zoom": 2
                    },
                    {
                        "opacity": 0,
                        "zoom": 3
                    },
                    {
                        "opacity": 0,
                        "zoom": 4
                    },
                    {
                        "opacity": 0,
                        "zoom": 5
                    },
                    {
                        "opacity": 0,
                        "zoom": 6
                    },
                    {
                        "opacity": 0,
                        "zoom": 7
                    },
                    {
                        "opacity": 0,
                        "zoom": 8
                    },
                    {
                        "opacity": 0,
                        "zoom": 9
                    },
                    {
                        "opacity": 0,
                        "zoom": 10
                    },
                    {
                        "opacity": 0,
                        "zoom": 11
                    },
                    {
                        "opacity": 0,
                        "zoom": 12
                    },
                    {
                        "opacity": 1,
                        "zoom": 13
                    },
                    {
                        "opacity": 1,
                        "zoom": 14
                    },
                    {
                        "opacity": 1,
                        "zoom": 15
                    },
                    {
                        "opacity": 1,
                        "zoom": 16
                    },
                    {
                        "opacity": 1,
                        "zoom": 17
                    },
                    {
                        "opacity": 1,
                        "zoom": 18
                    },
                    {
                        "opacity": 1,
                        "zoom": 19
                    },
                    {
                        "opacity": 1,
                        "zoom": 20
                    },
                    {
                        "opacity": 1,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": "transit_line",
                "elements": "geometry.fill",
                "stylers": [
                    {
                        "color": "#7a8386"
                    },
                    {
                        "scale": 0.4
                    },
                    {
                        "opacity": 0,
                        "zoom": 0
                    },
                    {
                        "opacity": 0,
                        "zoom": 1
                    },
                    {
                        "opacity": 0,
                        "zoom": 2
                    },
                    {
                        "opacity": 0,
                        "zoom": 3
                    },
                    {
                        "opacity": 0,
                        "zoom": 4
                    },
                    {
                        "opacity": 0,
                        "zoom": 5
                    },
                    {
                        "opacity": 0,
                        "zoom": 6
                    },
                    {
                        "opacity": 0,
                        "zoom": 7
                    },
                    {
                        "opacity": 0,
                        "zoom": 8
                    },
                    {
                        "opacity": 0,
                        "zoom": 9
                    },
                    {
                        "opacity": 0,
                        "zoom": 10
                    },
                    {
                        "opacity": 0,
                        "zoom": 11
                    },
                    {
                        "opacity": 0,
                        "zoom": 12
                    },
                    {
                        "opacity": 1,
                        "zoom": 13
                    },
                    {
                        "opacity": 1,
                        "zoom": 14
                    },
                    {
                        "opacity": 1,
                        "zoom": 15
                    },
                    {
                        "opacity": 1,
                        "zoom": 16
                    },
                    {
                        "opacity": 1,
                        "zoom": 17
                    },
                    {
                        "opacity": 1,
                        "zoom": 18
                    },
                    {
                        "opacity": 1,
                        "zoom": 19
                    },
                    {
                        "opacity": 1,
                        "zoom": 20
                    },
                    {
                        "opacity": 1,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": "water",
                "elements": "geometry",
                "stylers": [
                    {
                        "color": "#2a3037",
                        "zoom": 0
                    },
                    {
                        "color": "#2a3037",
                        "zoom": 1
                    },
                    {
                        "color": "#2a3037",
                        "zoom": 2
                    },
                    {
                        "color": "#2a3037",
                        "zoom": 3
                    },
                    {
                        "color": "#2a3037",
                        "zoom": 4
                    },
                    {
                        "color": "#2a3037",
                        "zoom": 5
                    },
                    {
                        "color": "#2a3037",
                        "zoom": 6
                    },
                    {
                        "color": "#2a3037",
                        "zoom": 7
                    },
                    {
                        "color": "#292e35",
                        "zoom": 8
                    },
                    {
                        "color": "#272d33",
                        "zoom": 9
                    },
                    {
                        "color": "#262b31",
                        "zoom": 10
                    },
                    {
                        "color": "#252a30",
                        "zoom": 11
                    },
                    {
                        "color": "#24292f",
                        "zoom": 12
                    },
                    {
                        "color": "#23282e",
                        "zoom": 13
                    },
                    {
                        "color": "#22272d",
                        "zoom": 14
                    },
                    {
                        "color": "#21262b",
                        "zoom": 15
                    },
                    {
                        "color": "#20242a",
                        "zoom": 16
                    },
                    {
                        "color": "#1f2329",
                        "zoom": 17
                    },
                    {
                        "color": "#1e2227",
                        "zoom": 18
                    },
                    {
                        "color": "#1d2126",
                        "zoom": 19
                    },
                    {
                        "color": "#1c1f24",
                        "zoom": 20
                    },
                    {
                        "color": "#1b1e23",
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": "water",
                "elements": "geometry",
                "types": "polyline",
                "stylers": [
                    {
                        "opacity": 0.4,
                        "zoom": 0
                    },
                    {
                        "opacity": 0.4,
                        "zoom": 1
                    },
                    {
                        "opacity": 0.4,
                        "zoom": 2
                    },
                    {
                        "opacity": 0.4,
                        "zoom": 3
                    },
                    {
                        "opacity": 0.6,
                        "zoom": 4
                    },
                    {
                        "opacity": 0.8,
                        "zoom": 5
                    },
                    {
                        "opacity": 1,
                        "zoom": 6
                    },
                    {
                        "opacity": 1,
                        "zoom": 7
                    },
                    {
                        "opacity": 1,
                        "zoom": 8
                    },
                    {
                        "opacity": 1,
                        "zoom": 9
                    },
                    {
                        "opacity": 1,
                        "zoom": 10
                    },
                    {
                        "opacity": 1,
                        "zoom": 11
                    },
                    {
                        "opacity": 1,
                        "zoom": 12
                    },
                    {
                        "opacity": 1,
                        "zoom": 13
                    },
                    {
                        "opacity": 1,
                        "zoom": 14
                    },
                    {
                        "opacity": 1,
                        "zoom": 15
                    },
                    {
                        "opacity": 1,
                        "zoom": 16
                    },
                    {
                        "opacity": 1,
                        "zoom": 17
                    },
                    {
                        "opacity": 1,
                        "zoom": 18
                    },
                    {
                        "opacity": 1,
                        "zoom": 19
                    },
                    {
                        "opacity": 1,
                        "zoom": 20
                    },
                    {
                        "opacity": 1,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": "bathymetry",
                "elements": "geometry",
                "stylers": [
                    {
                        "hue": "#2a3037"
                    }
                ]
            },
            {
                "tags": {
                    "any": [
                        "industrial",
                        "construction_site"
                    ]
                },
                "elements": "geometry",
                "stylers": [
                    {
                        "color": "#3c4249",
                        "zoom": 0
                    },
                    {
                        "color": "#3c4249",
                        "zoom": 1
                    },
                    {
                        "color": "#3c4249",
                        "zoom": 2
                    },
                    {
                        "color": "#3c4249",
                        "zoom": 3
                    },
                    {
                        "color": "#3c4249",
                        "zoom": 4
                    },
                    {
                        "color": "#3c4249",
                        "zoom": 5
                    },
                    {
                        "color": "#3c4249",
                        "zoom": 6
                    },
                    {
                        "color": "#3c4249",
                        "zoom": 7
                    },
                    {
                        "color": "#3c4249",
                        "zoom": 8
                    },
                    {
                        "color": "#3c4249",
                        "zoom": 9
                    },
                    {
                        "color": "#3c4249",
                        "zoom": 10
                    },
                    {
                        "color": "#3c4249",
                        "zoom": 11
                    },
                    {
                        "color": "#3c4249",
                        "zoom": 12
                    },
                    {
                        "color": "#3c4249",
                        "zoom": 13
                    },
                    {
                        "color": "#383d44",
                        "zoom": 14
                    },
                    {
                        "color": "#33383e",
                        "zoom": 15
                    },
                    {
                        "color": "#32373d",
                        "zoom": 16
                    },
                    {
                        "color": "#31363c",
                        "zoom": 17
                    },
                    {
                        "color": "#31363b",
                        "zoom": 18
                    },
                    {
                        "color": "#30353a",
                        "zoom": 19
                    },
                    {
                        "color": "#2f3439",
                        "zoom": 20
                    },
                    {
                        "color": "#2e3338",
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": {
                    "any": "transit",
                    "none": [
                        "transit_location",
                        "transit_line",
                        "transit_schema",
                        "is_unclassified_transit"
                    ]
                },
                "elements": "geometry",
                "stylers": [
                    {
                        "color": "#3c4249",
                        "zoom": 0
                    },
                    {
                        "color": "#3c4249",
                        "zoom": 1
                    },
                    {
                        "color": "#3c4249",
                        "zoom": 2
                    },
                    {
                        "color": "#3c4249",
                        "zoom": 3
                    },
                    {
                        "color": "#3c4249",
                        "zoom": 4
                    },
                    {
                        "color": "#3c4249",
                        "zoom": 5
                    },
                    {
                        "color": "#3c4249",
                        "zoom": 6
                    },
                    {
                        "color": "#3c4249",
                        "zoom": 7
                    },
                    {
                        "color": "#3c4249",
                        "zoom": 8
                    },
                    {
                        "color": "#3c4249",
                        "zoom": 9
                    },
                    {
                        "color": "#3c4249",
                        "zoom": 10
                    },
                    {
                        "color": "#3c4249",
                        "zoom": 11
                    },
                    {
                        "color": "#3c4249",
                        "zoom": 12
                    },
                    {
                        "color": "#3c4249",
                        "zoom": 13
                    },
                    {
                        "color": "#383d44",
                        "zoom": 14
                    },
                    {
                        "color": "#33383e",
                        "zoom": 15
                    },
                    {
                        "color": "#32373d",
                        "zoom": 16
                    },
                    {
                        "color": "#31363c",
                        "zoom": 17
                    },
                    {
                        "color": "#31363b",
                        "zoom": 18
                    },
                    {
                        "color": "#30353a",
                        "zoom": 19
                    },
                    {
                        "color": "#2f3439",
                        "zoom": 20
                    },
                    {
                        "color": "#2e3338",
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": "fence",
                "elements": "geometry.fill",
                "stylers": [
                    {
                        "color": "#454c54"
                    },
                    {
                        "opacity": 0.75,
                        "zoom": 0
                    },
                    {
                        "opacity": 0.75,
                        "zoom": 1
                    },
                    {
                        "opacity": 0.75,
                        "zoom": 2
                    },
                    {
                        "opacity": 0.75,
                        "zoom": 3
                    },
                    {
                        "opacity": 0.75,
                        "zoom": 4
                    },
                    {
                        "opacity": 0.75,
                        "zoom": 5
                    },
                    {
                        "opacity": 0.75,
                        "zoom": 6
                    },
                    {
                        "opacity": 0.75,
                        "zoom": 7
                    },
                    {
                        "opacity": 0.75,
                        "zoom": 8
                    },
                    {
                        "opacity": 0.75,
                        "zoom": 9
                    },
                    {
                        "opacity": 0.75,
                        "zoom": 10
                    },
                    {
                        "opacity": 0.75,
                        "zoom": 11
                    },
                    {
                        "opacity": 0.75,
                        "zoom": 12
                    },
                    {
                        "opacity": 0.75,
                        "zoom": 13
                    },
                    {
                        "opacity": 0.75,
                        "zoom": 14
                    },
                    {
                        "opacity": 0.75,
                        "zoom": 15
                    },
                    {
                        "opacity": 0.75,
                        "zoom": 16
                    },
                    {
                        "opacity": 0.45,
                        "zoom": 17
                    },
                    {
                        "opacity": 0.45,
                        "zoom": 18
                    },
                    {
                        "opacity": 0.45,
                        "zoom": 19
                    },
                    {
                        "opacity": 0.45,
                        "zoom": 20
                    },
                    {
                        "opacity": 0.45,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": "medical",
                "elements": "geometry",
                "stylers": [
                    {
                        "color": "#3c4249",
                        "zoom": 0
                    },
                    {
                        "color": "#3c4249",
                        "zoom": 1
                    },
                    {
                        "color": "#3c4249",
                        "zoom": 2
                    },
                    {
                        "color": "#3c4249",
                        "zoom": 3
                    },
                    {
                        "color": "#3c4249",
                        "zoom": 4
                    },
                    {
                        "color": "#3c4249",
                        "zoom": 5
                    },
                    {
                        "color": "#3c4249",
                        "zoom": 6
                    },
                    {
                        "color": "#3c4249",
                        "zoom": 7
                    },
                    {
                        "color": "#3c4249",
                        "zoom": 8
                    },
                    {
                        "color": "#3c4249",
                        "zoom": 9
                    },
                    {
                        "color": "#3c4249",
                        "zoom": 10
                    },
                    {
                        "color": "#3c4249",
                        "zoom": 11
                    },
                    {
                        "color": "#3c4249",
                        "zoom": 12
                    },
                    {
                        "color": "#3c4249",
                        "zoom": 13
                    },
                    {
                        "color": "#383d44",
                        "zoom": 14
                    },
                    {
                        "color": "#33383e",
                        "zoom": 15
                    },
                    {
                        "color": "#32373d",
                        "zoom": 16
                    },
                    {
                        "color": "#31363c",
                        "zoom": 17
                    },
                    {
                        "color": "#31363b",
                        "zoom": 18
                    },
                    {
                        "color": "#30353a",
                        "zoom": 19
                    },
                    {
                        "color": "#2f3439",
                        "zoom": 20
                    },
                    {
                        "color": "#2e3338",
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": "beach",
                "elements": "geometry",
                "stylers": [
                    {
                        "color": "#3c4249",
                        "opacity": 0.3,
                        "zoom": 0
                    },
                    {
                        "color": "#3c4249",
                        "opacity": 0.3,
                        "zoom": 1
                    },
                    {
                        "color": "#3c4249",
                        "opacity": 0.3,
                        "zoom": 2
                    },
                    {
                        "color": "#3c4249",
                        "opacity": 0.3,
                        "zoom": 3
                    },
                    {
                        "color": "#3c4249",
                        "opacity": 0.3,
                        "zoom": 4
                    },
                    {
                        "color": "#3c4249",
                        "opacity": 0.3,
                        "zoom": 5
                    },
                    {
                        "color": "#3c4249",
                        "opacity": 0.3,
                        "zoom": 6
                    },
                    {
                        "color": "#3c4249",
                        "opacity": 0.3,
                        "zoom": 7
                    },
                    {
                        "color": "#3c4249",
                        "opacity": 0.3,
                        "zoom": 8
                    },
                    {
                        "color": "#3c4249",
                        "opacity": 0.3,
                        "zoom": 9
                    },
                    {
                        "color": "#3c4249",
                        "opacity": 0.3,
                        "zoom": 10
                    },
                    {
                        "color": "#3c4249",
                        "opacity": 0.3,
                        "zoom": 11
                    },
                    {
                        "color": "#3c4249",
                        "opacity": 0.3,
                        "zoom": 12
                    },
                    {
                        "color": "#3c4249",
                        "opacity": 0.65,
                        "zoom": 13
                    },
                    {
                        "color": "#383d44",
                        "opacity": 1,
                        "zoom": 14
                    },
                    {
                        "color": "#33383e",
                        "opacity": 1,
                        "zoom": 15
                    },
                    {
                        "color": "#32373d",
                        "opacity": 1,
                        "zoom": 16
                    },
                    {
                        "color": "#31363c",
                        "opacity": 1,
                        "zoom": 17
                    },
                    {
                        "color": "#31363b",
                        "opacity": 1,
                        "zoom": 18
                    },
                    {
                        "color": "#30353a",
                        "opacity": 1,
                        "zoom": 19
                    },
                    {
                        "color": "#2f3439",
                        "opacity": 1,
                        "zoom": 20
                    },
                    {
                        "color": "#2e3338",
                        "opacity": 1,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": {
                    "all": [
                        "is_tunnel",
                        "path"
                    ]
                },
                "elements": "geometry.fill",
                "stylers": [
                    {
                        "color": "#272b30"
                    },
                    {
                        "opacity": 0.3
                    }
                ]
            },
            {
                "tags": {
                    "all": [
                        "is_tunnel",
                        "path"
                    ]
                },
                "elements": "geometry.outline",
                "stylers": [
                    {
                        "opacity": 0
                    }
                ]
            },
            {
                "tags": "road_limited",
                "elements": "geometry.fill",
                "stylers": [
                    {
                        "color": "#171a1c"
                    },
                    {
                        "scale": 0,
                        "zoom": 0
                    },
                    {
                        "scale": 0,
                        "zoom": 1
                    },
                    {
                        "scale": 0,
                        "zoom": 2
                    },
                    {
                        "scale": 0,
                        "zoom": 3
                    },
                    {
                        "scale": 0,
                        "zoom": 4
                    },
                    {
                        "scale": 0,
                        "zoom": 5
                    },
                    {
                        "scale": 0,
                        "zoom": 6
                    },
                    {
                        "scale": 0,
                        "zoom": 7
                    },
                    {
                        "scale": 0,
                        "zoom": 8
                    },
                    {
                        "scale": 0,
                        "zoom": 9
                    },
                    {
                        "scale": 0,
                        "zoom": 10
                    },
                    {
                        "scale": 0,
                        "zoom": 11
                    },
                    {
                        "scale": 0,
                        "zoom": 12
                    },
                    {
                        "scale": 0.1,
                        "zoom": 13
                    },
                    {
                        "scale": 0.2,
                        "zoom": 14
                    },
                    {
                        "scale": 0.3,
                        "zoom": 15
                    },
                    {
                        "scale": 0.5,
                        "zoom": 16
                    },
                    {
                        "scale": 0.6,
                        "zoom": 17
                    },
                    {
                        "scale": 0.69,
                        "zoom": 18
                    },
                    {
                        "scale": 0.7,
                        "zoom": 19
                    },
                    {
                        "scale": 0.74,
                        "zoom": 20
                    },
                    {
                        "scale": 0.8,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": "road_limited",
                "elements": "geometry.outline",
                "stylers": [
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 0
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 1
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 2
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 3
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 4
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 5
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 6
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 7
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 8
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 9
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 10
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 11
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.9,
                        "zoom": 12
                    },
                    {
                        "color": "#606b76",
                        "scale": 0.1,
                        "zoom": 13
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.2,
                        "zoom": 14
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.3,
                        "zoom": 15
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.5,
                        "zoom": 16
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.6,
                        "zoom": 17
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.75,
                        "zoom": 18
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.76,
                        "zoom": 19
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.79,
                        "zoom": 20
                    },
                    {
                        "color": "#2e3338",
                        "scale": 0.86,
                        "zoom": 21
                    }
                ]
            },
            {
                "tags": "transit_stop",
                "elements": "label.icon",
                "stylers": [
                    {
                        "color": "#171a1c"
                    },
                    {
                        "secondary-color": "#8aa1a8"
                    },
                    {
                        "tertiary-color": "#505962"
                    }
                ]
            },
            {
                "tags": {
                    "any": [
                        "transit"
                    ]
                },
                "elements": [
                    "label.icon",
                    "label.text"
                ],
                "stylers": {
                    "visibility": "off"
                }
            },
            {
                "tags": {
                    "any": [
                        "outdoor",
                        "park",
                        "cemetery",
                        "medical"
                    ]
                },
                "elements": "label",
                "stylers": {
                    "visibility": "off"
                }
            },
            {
                "tags": {
                    "any": "poi",
                    "none": [
                        "outdoor",
                        "park",
                        "cemetery",
                        "medical"
                    ]
                },
                "stylers": {
                    "visibility": "off"
                }
            },
            {
                "tags": {
                    "any": "road"
                },
                "types": "point",
                "stylers": {
                    "visibility": "off"
                }
            },
            {
                "tags": {
                    "any": [
                        "food_and_drink",
                        "shopping",
                        "commercial_services"
                    ]
                },
                "stylers": {
                    "visibility": "off"
                }
            },
            {
                "tags": {
                    "any": [
                        "traffic_light"
                    ]
                },
                "stylers": {
                    "visibility": "off"
                }
            },
            {
                "tags": {
                    "any": [
                        "entrance"
                    ]
                },
                "stylers": {
                    "visibility": "off"
                }
            },
            {
                "tags": {
                    "any": [
                        "road"
                    ],
                    "none": [
                        "road_1",
                        "road_2",
                        "road_3",
                        "road_4",
                        "road_5",
                        "road_6",
                        "road_7"
                    ]
                },
                "elements": "label.icon",
                "stylers": {
                    "visibility": "off"
                }
            },
            {
                "tags": {
                    "any": [
                        "transit"
                    ]
                },
                "stylers": {
                    "visibility": "off"
                }
            },
            {
                "tags": {
                    "any": "landcover",
                    "none": "vegetation"
                },
                "stylers": {
                    "visibility": "off"
                }
            }
        ]
    }));
    map.addChild(new YMapDefaultFeaturesLayer());

    // добавляем loader для пакета, где указываем из какого CDN загружать
    ymaps3.import.registerCdn('https://cdn.jsdelivr.net/npm/{package}', [
        '@yandex/ymaps3-default-ui-theme@0.0.19'
    ]);

    // после этого можем импортировать компоненты из пакета в проект
    const { YMapDefaultMarker } = await ymaps3.import('@yandex/ymaps3-default-ui-theme');
    map.addChild(
        new YMapDefaultMarker({
            coordinates: [28.596606, 59.365661],
            title: 'Наш адрес',
            subtitle: 'ул. Пушкина д. 26',
            color: "orange"
        })
    );
})();

emailjs.init("Ne9DUhSlhsSeh3FS-");
document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Отключаем стандартное поведение формы
    form.reset();
    openMessage();

    // Отправка формы через EmailJS
    emailjs.sendForm('service_r35i1zp', 'template_c9ye3xd', this)
        .then(function () {
            console.log('Сообщение успешно отправлено!');
        }, function (error) {
            console.log('Ошибка отправки: ' + JSON.stringify(error));
        });
});

const message = document.getElementById('message')
const body = document.getElementsByTagName('body')[0];
const openMessage = () => {
    message.classList.add('active')
    body.classList.add('active')
}

const messageBtn = document.getElementById('message__button')
const closeMessage = () => {
    message.classList.remove('active')
    body.classList.remove('active')
}
messageBtn.addEventListener('click', closeMessage)
