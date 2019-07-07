var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "icons/marker_home.png",
            "spawnMarker2x": "icons/marker_home_2x.png",
            "queryMarker": "icons/marker_location.png",
            "queryMarker2x": "icons/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "Otaco Falandaum's Map - overworld",
        "Otaco Falandaum's Map - end"
    ],
    "map": {
        "debug": true,
        "cacheTag": "1562448590",
        "north_direction": "lower-left",
        "center": [
            -314,
            67,
            94
        ],
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Overworld Daytime",
            "zoomLevels": 9,
            "defaultZoom": 1,
            "maxZoom": 9,
            "path": "survivalday",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Otaco Falandaum's Map - overworld",
            "last_rendertime": 1562448205,
            "imgextension": "webp",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "minZoom": 0,
            "spawn": [
                -92,
                96,
                252
            ],
            "north_direction": 0
        },
        {
            "name": "The End",
            "zoomLevels": 7,
            "defaultZoom": 1,
            "maxZoom": 7,
            "path": "survivalthenend",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Otaco Falandaum's Map - end",
            "last_rendertime": 1562444522,
            "imgextension": "webp",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        }
    ]
};
