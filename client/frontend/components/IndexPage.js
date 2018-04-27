import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  ListView
  } from 'react-native';
import { Card, BigButton, CardSection, OurSpinner } from './common';
import IndexButton from './common/IndexButton';
import { connect } from "react-redux";
import Swiper from 'react-native-swiper';
import { fetchItinerary } from "../actions/ItineraryActions";
import IndexItem from './IndexItem';


const ITINERARY = [
    {
        "breakfast": [
            {
                "id": "d1b66c3a2f01ebd555fef7403a35b0c21413820a",
                "name": "Massawa Restaurant SF",
                "formatted_phone_number": "(415) 621-4129",
                "formatted_address": "532 Green St, San Francisco, CA 94133, USA",
                "rating": 4.5,
                "website": null,
                "opening_hours": {
                    "open_now": false,
                    "periods": [
                        {
                            "close": {
                                "day": 0,
                                "time": "2200"
                            },
                            "open": {
                                "day": 0,
                                "time": "1000"
                            }
                        },
                        {
                            "close": {
                                "day": 1,
                                "time": "2200"
                            },
                            "open": {
                                "day": 1,
                                "time": "1100"
                            }
                        },
                        {
                            "close": {
                                "day": 2,
                                "time": "2200"
                            },
                            "open": {
                                "day": 2,
                                "time": "1100"
                            }
                        },
                        {
                            "close": {
                                "day": 3,
                                "time": "2200"
                            },
                            "open": {
                                "day": 3,
                                "time": "1100"
                            }
                        },
                        {
                            "close": {
                                "day": 4,
                                "time": "2200"
                            },
                            "open": {
                                "day": 4,
                                "time": "1100"
                            }
                        },
                        {
                            "close": {
                                "day": 5,
                                "time": "2300"
                            },
                            "open": {
                                "day": 5,
                                "time": "1100"
                            }
                        },
                        {
                            "close": {
                                "day": 6,
                                "time": "2300"
                            },
                            "open": {
                                "day": 6,
                                "time": "1000"
                            }
                        }
                    ],
                    "weekday_text": [
                        "Monday: 11:00 AM – 10:00 PM",
                        "Tuesday: 11:00 AM – 10:00 PM",
                        "Wednesday: 11:00 AM – 10:00 PM",
                        "Thursday: 11:00 AM – 10:00 PM",
                        "Friday: 11:00 AM – 11:00 PM",
                        "Saturday: 10:00 AM – 11:00 PM",
                        "Sunday: 10:00 AM – 10:00 PM"
                    ]
                },
                "price_level": 1,
                "geometry": {
                    "location": {
                        "lat": 37.7997559,
                        "lng": -122.4080046
                    },
                    "viewport": {
                        "northeast": {
                            "lat": 37.8010485802915,
                            "lng": -122.4066430697085
                        },
                        "southwest": {
                            "lat": 37.7983506197085,
                            "lng": -122.4093410302915
                        }
                    }
                },
                "date_time": {
                    "start": "08:00:00",
                    "end": "09:00:00"
                }
            },
            {
                "id": "ea42790c9eb25eca056df7426c2654948ff46631",
                "name": "Mama's On Washington Square",
                "formatted_phone_number": "(415) 362-6421",
                "formatted_address": "1701 Stockton St, San Francisco, CA 94133, USA",
                "rating": 4.3,
                "website": "http://www.mamas-sf.com/",
                "opening_hours": {
                    "open_now": true,
                    "periods": [
                        {
                            "close": {
                                "day": 0,
                                "time": "1500"
                            },
                            "open": {
                                "day": 0,
                                "time": "0800"
                            }
                        },
                        {
                            "close": {
                                "day": 2,
                                "time": "1500"
                            },
                            "open": {
                                "day": 2,
                                "time": "0800"
                            }
                        },
                        {
                            "close": {
                                "day": 3,
                                "time": "1500"
                            },
                            "open": {
                                "day": 3,
                                "time": "0800"
                            }
                        },
                        {
                            "close": {
                                "day": 4,
                                "time": "1500"
                            },
                            "open": {
                                "day": 4,
                                "time": "0800"
                            }
                        },
                        {
                            "close": {
                                "day": 5,
                                "time": "1500"
                            },
                            "open": {
                                "day": 5,
                                "time": "0800"
                            }
                        },
                        {
                            "close": {
                                "day": 6,
                                "time": "1500"
                            },
                            "open": {
                                "day": 6,
                                "time": "0800"
                            }
                        }
                    ],
                    "weekday_text": [
                        "Monday: Closed",
                        "Tuesday: 8:00 AM – 3:00 PM",
                        "Wednesday: 8:00 AM – 3:00 PM",
                        "Thursday: 8:00 AM – 3:00 PM",
                        "Friday: 8:00 AM – 3:00 PM",
                        "Saturday: 8:00 AM – 3:00 PM",
                        "Sunday: 8:00 AM – 3:00 PM"
                    ]
                },
                "price_level": 1,
                "geometry": {
                    "location": {
                        "lat": 37.8015323,
                        "lng": -122.4095835
                    },
                    "viewport": {
                        "northeast": {
                            "lat": 37.8028473802915,
                            "lng": -122.4081504697085
                        },
                        "southwest": {
                            "lat": 37.8001494197085,
                            "lng": -122.4108484302915
                        }
                    }
                },
                "date_time": {
                    "start": "08:00:00",
                    "end": "09:00:00"
                }
            }
        ],
        "lunch": [
            {
                "id": "4ed4ea5b449327af5104ac13b05bd0e3f78571ae",
                "name": "Naked Lunch",
                "formatted_phone_number": "(415) 577-4951",
                "formatted_address": "504 Broadway, San Francisco, CA 94133, USA",
                "rating": 4.2,
                "website": "http://www.nakedlunchsf.com/",
                "opening_hours": {
                    "open_now": false,
                    "periods": [
                        {
                            "close": {
                                "day": 0,
                                "time": "2100"
                            },
                            "open": {
                                "day": 0,
                                "time": "1100"
                            }
                        },
                        {
                            "close": {
                                "day": 2,
                                "time": "1400"
                            },
                            "open": {
                                "day": 2,
                                "time": "1130"
                            }
                        },
                        {
                            "close": {
                                "day": 2,
                                "time": "2200"
                            },
                            "open": {
                                "day": 2,
                                "time": "1630"
                            }
                        },
                        {
                            "close": {
                                "day": 3,
                                "time": "1400"
                            },
                            "open": {
                                "day": 3,
                                "time": "1130"
                            }
                        },
                        {
                            "close": {
                                "day": 3,
                                "time": "2200"
                            },
                            "open": {
                                "day": 3,
                                "time": "1630"
                            }
                        },
                        {
                            "close": {
                                "day": 4,
                                "time": "1400"
                            },
                            "open": {
                                "day": 4,
                                "time": "1130"
                            }
                        },
                        {
                            "close": {
                                "day": 5,
                                "time": "0000"
                            },
                            "open": {
                                "day": 4,
                                "time": "1630"
                            }
                        },
                        {
                            "close": {
                                "day": 5,
                                "time": "1400"
                            },
                            "open": {
                                "day": 5,
                                "time": "1130"
                            }
                        },
                        {
                            "close": {
                                "day": 6,
                                "time": "0000"
                            },
                            "open": {
                                "day": 5,
                                "time": "1630"
                            }
                        },
                        {
                            "close": {
                                "day": 0,
                                "time": "0000"
                            },
                            "open": {
                                "day": 6,
                                "time": "1100"
                            }
                        }
                    ],
                    "weekday_text": [
                        "Monday: Closed",
                        "Tuesday: 11:30 AM – 2:00 PM, 4:30 – 10:00 PM",
                        "Wednesday: 11:30 AM – 2:00 PM, 4:30 – 10:00 PM",
                        "Thursday: 11:30 AM – 2:00 PM, 4:30 PM – 12:00 AM",
                        "Friday: 11:30 AM – 2:00 PM, 4:30 PM – 12:00 AM",
                        "Saturday: 11:00 AM – 12:00 AM",
                        "Sunday: 11:00 AM – 9:00 PM"
                    ]
                },
                "price_level": 1,
                "geometry": {
                    "location": {
                        "lat": 37.7981263,
                        "lng": -122.4056787
                    },
                    "viewport": {
                        "northeast": {
                            "lat": 37.79941498029151,
                            "lng": -122.4043173697085
                        },
                        "southwest": {
                            "lat": 37.79671701970851,
                            "lng": -122.4070153302915
                        }
                    }
                },
                "date_time": {
                    "start": "12:30:00",
                    "end": "13:30:00"
                }
            },
            {
                "id": "0de636125776ff03ece55eecb386d4d4e30cd58b",
                "name": "Sens",
                "formatted_phone_number": "(415) 362-0645",
                "formatted_address": "4 Embarcadero Center, San Francisco, CA 94111, USA",
                "rating": 4.2,
                "website": "http://www.sens-sf.com/",
                "opening_hours": {
                    "open_now": false,
                    "periods": [
                        {
                            "close": {
                                "day": 1,
                                "time": "2200"
                            },
                            "open": {
                                "day": 1,
                                "time": "1130"
                            }
                        },
                        {
                            "close": {
                                "day": 2,
                                "time": "2200"
                            },
                            "open": {
                                "day": 2,
                                "time": "1130"
                            }
                        },
                        {
                            "close": {
                                "day": 3,
                                "time": "2200"
                            },
                            "open": {
                                "day": 3,
                                "time": "1130"
                            }
                        },
                        {
                            "close": {
                                "day": 4,
                                "time": "2200"
                            },
                            "open": {
                                "day": 4,
                                "time": "1130"
                            }
                        },
                        {
                            "close": {
                                "day": 5,
                                "time": "2200"
                            },
                            "open": {
                                "day": 5,
                                "time": "1130"
                            }
                        },
                        {
                            "close": {
                                "day": 6,
                                "time": "2200"
                            },
                            "open": {
                                "day": 6,
                                "time": "1730"
                            }
                        }
                    ],
                    "weekday_text": [
                        "Monday: 11:30 AM – 10:00 PM",
                        "Tuesday: 11:30 AM – 10:00 PM",
                        "Wednesday: 11:30 AM – 10:00 PM",
                        "Thursday: 11:30 AM – 10:00 PM",
                        "Friday: 11:30 AM – 10:00 PM",
                        "Saturday: 5:30 – 10:00 PM",
                        "Sunday: Closed"
                    ]
                },
                "price_level": null,
                "geometry": {
                    "location": {
                        "lat": 37.7949305,
                        "lng": -122.3958876
                    },
                    "viewport": {
                        "northeast": {
                            "lat": 37.7964331302915,
                            "lng": -122.3936347
                        },
                        "southwest": {
                            "lat": 37.7937351697085,
                            "lng": -122.3975751
                        }
                    }
                },
                "date_time": {
                    "start": "12:30:00",
                    "end": "13:30:00"
                }
            }
        ],
        "dinner": [
            {
                "id": "4f6526bc991f3013004dcffb384c5ffae02bb9bd",
                "name": "Bix",
                "formatted_phone_number": "(415) 433-6300",
                "formatted_address": "56 Gold St, San Francisco, CA 94133, USA",
                "rating": 4.3,
                "website": "http://www.bixrestaurant.com/",
                "opening_hours": {
                    "open_now": false,
                    "periods": [
                        {
                            "close": {
                                "day": 0,
                                "time": "2200"
                            },
                            "open": {
                                "day": 0,
                                "time": "1730"
                            }
                        },
                        {
                            "close": {
                                "day": 1,
                                "time": "2200"
                            },
                            "open": {
                                "day": 1,
                                "time": "1630"
                            }
                        },
                        {
                            "close": {
                                "day": 2,
                                "time": "2200"
                            },
                            "open": {
                                "day": 2,
                                "time": "1630"
                            }
                        },
                        {
                            "close": {
                                "day": 3,
                                "time": "2200"
                            },
                            "open": {
                                "day": 3,
                                "time": "1630"
                            }
                        },
                        {
                            "close": {
                                "day": 4,
                                "time": "2200"
                            },
                            "open": {
                                "day": 4,
                                "time": "1630"
                            }
                        },
                        {
                            "close": {
                                "day": 5,
                                "time": "2300"
                            },
                            "open": {
                                "day": 5,
                                "time": "1130"
                            }
                        },
                        {
                            "close": {
                                "day": 6,
                                "time": "2300"
                            },
                            "open": {
                                "day": 6,
                                "time": "1730"
                            }
                        }
                    ],
                    "weekday_text": [
                        "Monday: 4:30 – 10:00 PM",
                        "Tuesday: 4:30 – 10:00 PM",
                        "Wednesday: 4:30 – 10:00 PM",
                        "Thursday: 4:30 – 10:00 PM",
                        "Friday: 11:30 AM – 11:00 PM",
                        "Saturday: 5:30 – 11:00 PM",
                        "Sunday: 5:30 – 10:00 PM"
                    ]
                },
                "price_level": 3,
                "geometry": {
                    "location": {
                        "lat": 37.79687120000001,
                        "lng": -122.4029298
                    },
                    "viewport": {
                        "northeast": {
                            "lat": 37.79816768029151,
                            "lng": -122.4015700197085
                        },
                        "southwest": {
                            "lat": 37.79546971970851,
                            "lng": -122.4042679802915
                        }
                    }
                },
                "date_time": {
                    "start": "19:00:00",
                    "end": "20:30:00"
                }
            },
            {
                "id": "571ff24e697bce0789b774124d1b77e0951c3b2e",
                "name": "Quince",
                "formatted_phone_number": "(415) 775-8500",
                "formatted_address": "470 Pacific Ave, San Francisco, CA 94133, USA",
                "rating": 4.6,
                "website": "http://www.quincerestaurant.com/",
                "opening_hours": {
                    "open_now": false,
                    "periods": [
                        {
                            "close": {
                                "day": 1,
                                "time": "2100"
                            },
                            "open": {
                                "day": 1,
                                "time": "1730"
                            }
                        },
                        {
                            "close": {
                                "day": 2,
                                "time": "2100"
                            },
                            "open": {
                                "day": 2,
                                "time": "1730"
                            }
                        },
                        {
                            "close": {
                                "day": 3,
                                "time": "2100"
                            },
                            "open": {
                                "day": 3,
                                "time": "1730"
                            }
                        },
                        {
                            "close": {
                                "day": 4,
                                "time": "2100"
                            },
                            "open": {
                                "day": 4,
                                "time": "1730"
                            }
                        },
                        {
                            "close": {
                                "day": 5,
                                "time": "2130"
                            },
                            "open": {
                                "day": 5,
                                "time": "1700"
                            }
                        },
                        {
                            "close": {
                                "day": 6,
                                "time": "2130"
                            },
                            "open": {
                                "day": 6,
                                "time": "1700"
                            }
                        }
                    ],
                    "weekday_text": [
                        "Monday: 5:30 – 9:00 PM",
                        "Tuesday: 5:30 – 9:00 PM",
                        "Wednesday: 5:30 – 9:00 PM",
                        "Thursday: 5:30 – 9:00 PM",
                        "Friday: 5:00 – 9:30 PM",
                        "Saturday: 5:00 – 9:30 PM",
                        "Sunday: Closed"
                    ]
                },
                "price_level": 4,
                "geometry": {
                    "location": {
                        "lat": 37.7975863,
                        "lng": -122.4033932
                    },
                    "viewport": {
                        "northeast": {
                            "lat": 37.7989352802915,
                            "lng": -122.4020442197085
                        },
                        "southwest": {
                            "lat": 37.7962373197085,
                            "lng": -122.4047421802915
                        }
                    }
                },
                "date_time": {
                    "start": "19:00:00",
                    "end": "20:30:00"
                }
            }
        ]
    },
    {
        "bars": [
            {
                "id": "573269dd1abf36311a2911cea22c4cc1d081203a",
                "name": "Coqueta",
                "formatted_phone_number": "(415) 704-8866",
                "formatted_address": "Pier 5 The Embarcadero, San Francisco, CA 94111, USA",
                "rating": 4.3,
                "price_level": 3,
                "website": "http://www.coquetasf.com/",
                "opening_hours": {
                    "open_now": false,
                    "periods": [
                        {
                            "close": {
                                "day": 0,
                                "time": "1500"
                            },
                            "open": {
                                "day": 0,
                                "time": "1130"
                            }
                        },
                        {
                            "close": {
                                "day": 0,
                                "time": "2200"
                            },
                            "open": {
                                "day": 0,
                                "time": "1600"
                            }
                        },
                        {
                            "close": {
                                "day": 1,
                                "time": "2200"
                            },
                            "open": {
                                "day": 1,
                                "time": "1600"
                            }
                        },
                        {
                            "close": {
                                "day": 2,
                                "time": "1500"
                            },
                            "open": {
                                "day": 2,
                                "time": "1130"
                            }
                        },
                        {
                            "close": {
                                "day": 2,
                                "time": "2200"
                            },
                            "open": {
                                "day": 2,
                                "time": "1600"
                            }
                        },
                        {
                            "close": {
                                "day": 3,
                                "time": "1500"
                            },
                            "open": {
                                "day": 3,
                                "time": "1130"
                            }
                        },
                        {
                            "close": {
                                "day": 3,
                                "time": "2200"
                            },
                            "open": {
                                "day": 3,
                                "time": "1600"
                            }
                        },
                        {
                            "close": {
                                "day": 4,
                                "time": "1500"
                            },
                            "open": {
                                "day": 4,
                                "time": "1130"
                            }
                        },
                        {
                            "close": {
                                "day": 4,
                                "time": "2300"
                            },
                            "open": {
                                "day": 4,
                                "time": "1600"
                            }
                        },
                        {
                            "close": {
                                "day": 5,
                                "time": "1500"
                            },
                            "open": {
                                "day": 5,
                                "time": "1130"
                            }
                        },
                        {
                            "close": {
                                "day": 5,
                                "time": "2300"
                            },
                            "open": {
                                "day": 5,
                                "time": "1600"
                            }
                        },
                        {
                            "close": {
                                "day": 6,
                                "time": "1500"
                            },
                            "open": {
                                "day": 6,
                                "time": "1130"
                            }
                        },
                        {
                            "close": {
                                "day": 6,
                                "time": "2300"
                            },
                            "open": {
                                "day": 6,
                                "time": "1600"
                            }
                        }
                    ],
                    "weekday_text": [
                        "Monday: 4:00 – 10:00 PM",
                        "Tuesday: 11:30 AM – 3:00 PM, 4:00 – 10:00 PM",
                        "Wednesday: 11:30 AM – 3:00 PM, 4:00 – 10:00 PM",
                        "Thursday: 11:30 AM – 3:00 PM, 4:00 – 11:00 PM",
                        "Friday: 11:30 AM – 3:00 PM, 4:00 – 11:00 PM",
                        "Saturday: 11:30 AM – 3:00 PM, 4:00 – 11:00 PM",
                        "Sunday: 11:30 AM – 3:00 PM, 4:00 – 10:00 PM"
                    ]
                },
                "geometry": {
                    "location": {
                        "lat": 37.7984468,
                        "lng": -122.3964846
                    },
                    "viewport": {
                        "northeast": {
                            "lat": 37.7997397802915,
                            "lng": -122.3952415197085
                        },
                        "southwest": {
                            "lat": 37.7970418197085,
                            "lng": -122.3979394802915
                        }
                    }
                },
                "date_time": {}
            },
            {
                "id": "39e176e81120c1ec3b937c5cc3da56aa75d7fa07",
                "name": "Roka Akor",
                "formatted_phone_number": "(415) 362-8887",
                "formatted_address": "801 Montgomery St, San Francisco, CA 94133, USA",
                "rating": 4.6,
                "price_level": 4,
                "website": "http://www.rokaakor.com/san-francisco/location-hours/",
                "opening_hours": {
                    "open_now": false,
                    "periods": [
                        {
                            "close": {
                                "day": 0,
                                "time": "2200"
                            },
                            "open": {
                                "day": 0,
                                "time": "1730"
                            }
                        },
                        {
                            "close": {
                                "day": 1,
                                "time": "1430"
                            },
                            "open": {
                                "day": 1,
                                "time": "1130"
                            }
                        },
                        {
                            "close": {
                                "day": 1,
                                "time": "2200"
                            },
                            "open": {
                                "day": 1,
                                "time": "1730"
                            }
                        },
                        {
                            "close": {
                                "day": 2,
                                "time": "1430"
                            },
                            "open": {
                                "day": 2,
                                "time": "1130"
                            }
                        },
                        {
                            "close": {
                                "day": 2,
                                "time": "2200"
                            },
                            "open": {
                                "day": 2,
                                "time": "1730"
                            }
                        },
                        {
                            "close": {
                                "day": 3,
                                "time": "1430"
                            },
                            "open": {
                                "day": 3,
                                "time": "1130"
                            }
                        },
                        {
                            "close": {
                                "day": 3,
                                "time": "2200"
                            },
                            "open": {
                                "day": 3,
                                "time": "1730"
                            }
                        },
                        {
                            "close": {
                                "day": 4,
                                "time": "1430"
                            },
                            "open": {
                                "day": 4,
                                "time": "1130"
                            }
                        },
                        {
                            "close": {
                                "day": 4,
                                "time": "2200"
                            },
                            "open": {
                                "day": 4,
                                "time": "1730"
                            }
                        },
                        {
                            "close": {
                                "day": 5,
                                "time": "1430"
                            },
                            "open": {
                                "day": 5,
                                "time": "1130"
                            }
                        },
                        {
                            "close": {
                                "day": 5,
                                "time": "2300"
                            },
                            "open": {
                                "day": 5,
                                "time": "1730"
                            }
                        },
                        {
                            "close": {
                                "day": 6,
                                "time": "2300"
                            },
                            "open": {
                                "day": 6,
                                "time": "1730"
                            }
                        }
                    ],
                    "weekday_text": [
                        "Monday: 11:30 AM – 2:30 PM, 5:30 – 10:00 PM",
                        "Tuesday: 11:30 AM – 2:30 PM, 5:30 – 10:00 PM",
                        "Wednesday: 11:30 AM – 2:30 PM, 5:30 – 10:00 PM",
                        "Thursday: 11:30 AM – 2:30 PM, 5:30 – 10:00 PM",
                        "Friday: 11:30 AM – 2:30 PM, 5:30 – 11:00 PM",
                        "Saturday: 5:30 – 11:00 PM",
                        "Sunday: 5:30 – 10:00 PM"
                    ]
                },
                "geometry": {
                    "location": {
                        "lat": 37.7965376,
                        "lng": -122.4038625
                    },
                    "viewport": {
                        "northeast": {
                            "lat": 37.7979092302915,
                            "lng": -122.4023596697085
                        },
                        "southwest": {
                            "lat": 37.7952112697085,
                            "lng": -122.4050576302915
                        }
                    }
                },
                "date_time": {}
            }
        ]
    },
    {
        "nature": [
            {
                "id": "e405798c07a4b8c771343eda0780ebb90b811ad0",
                "name": "Ferry Park",
                "formatted_address": "100-178 Clay St, San Francisco, CA 94111, USA",
                "website": null,
                "geometry": {
                    "location": {
                        "lat": 37.7958309,
                        "lng": -122.3975164
                    },
                    "viewport": {
                        "northeast": {
                            "lat": 37.7969673302915,
                            "lng": -122.3961227697085
                        },
                        "southwest": {
                            "lat": 37.7942693697085,
                            "lng": -122.3988207302915
                        }
                    }
                },
                "date_time": {
                    "start": "14:30:00",
                    "end": "16:30:00"
                }
            },
            {
                "id": "bbda8fd7ab614977df1efd010aa649d2a189ed73",
                "name": "Levi's Plaza",
                "formatted_address": "1155 Battery St, San Francisco, CA 94111, USA",
                "website": "http://www.levi.com/US/en_US/",
                "geometry": {
                    "location": {
                        "lat": 37.8024468,
                        "lng": -122.4020911
                    },
                    "viewport": {
                        "northeast": {
                            "lat": 37.8038102802915,
                            "lng": -122.4006232197085
                        },
                        "southwest": {
                            "lat": 37.8011123197085,
                            "lng": -122.4033211802915
                        }
                    }
                },
                "date_time": {
                    "start": "14:30:00",
                    "end": "16:30:00"
                }
            }
        ]
    },
    {
        "arts": [
            {
                "id": "1cf2efd5112e19dbcbb4d67d78374c3553a2d985",
                "name": "Bank of California Museum",
                "formatted_phone_number": "(415) 291-4653",
                "formatted_address": "Bank of California Building, 400 California St, San Francisco, CA 94104, USA",
                "website": null,
                "geometry": {
                    "location": {
                        "lat": 37.79330059999999,
                        "lng": -122.4016318
                    },
                    "viewport": {
                        "northeast": {
                            "lat": 37.79450783029149,
                            "lng": -122.4002516697085
                        },
                        "southwest": {
                            "lat": 37.7918098697085,
                            "lng": -122.4029496302915
                        }
                    }
                },
                "opening_hours": {
                    "open_now": true,
                    "periods": [
                        {
                            "close": {
                                "day": 1,
                                "time": "1700"
                            },
                            "open": {
                                "day": 1,
                                "time": "0800"
                            }
                        },
                        {
                            "close": {
                                "day": 2,
                                "time": "1700"
                            },
                            "open": {
                                "day": 2,
                                "time": "0800"
                            }
                        },
                        {
                            "close": {
                                "day": 3,
                                "time": "1700"
                            },
                            "open": {
                                "day": 3,
                                "time": "0800"
                            }
                        },
                        {
                            "close": {
                                "day": 4,
                                "time": "1700"
                            },
                            "open": {
                                "day": 4,
                                "time": "0800"
                            }
                        },
                        {
                            "close": {
                                "day": 5,
                                "time": "1700"
                            },
                            "open": {
                                "day": 5,
                                "time": "0800"
                            }
                        }
                    ],
                    "weekday_text": [
                        "Monday: 8:00 AM – 5:00 PM",
                        "Tuesday: 8:00 AM – 5:00 PM",
                        "Wednesday: 8:00 AM – 5:00 PM",
                        "Thursday: 8:00 AM – 5:00 PM",
                        "Friday: 8:00 AM – 5:00 PM",
                        "Saturday: Closed",
                        "Sunday: Closed"
                    ]
                },
                "date_time": {
                    "start": "9:30:00",
                    "end": "12:00:00"
                }
            },
            {
                "id": "8a53dd455243cf2cef1a81689cdb46cd2d80272d",
                "name": "Beat Museum",
                "formatted_phone_number": "(415) 399-9626",
                "formatted_address": "540 Broadway, San Francisco, CA 94133, USA",
                "website": "http://www.kerouac.com/",
                "geometry": {
                    "location": {
                        "lat": 37.79806490000001,
                        "lng": -122.4062256
                    },
                    "viewport": {
                        "northeast": {
                            "lat": 37.7993494802915,
                            "lng": -122.4048634197085
                        },
                        "southwest": {
                            "lat": 37.7966515197085,
                            "lng": -122.4075613802915
                        }
                    }
                },
                "opening_hours": {
                    "open_now": false,
                    "periods": [
                        {
                            "close": {
                                "day": 0,
                                "time": "1900"
                            },
                            "open": {
                                "day": 0,
                                "time": "1000"
                            }
                        },
                        {
                            "close": {
                                "day": 1,
                                "time": "1900"
                            },
                            "open": {
                                "day": 1,
                                "time": "1000"
                            }
                        },
                        {
                            "close": {
                                "day": 2,
                                "time": "1900"
                            },
                            "open": {
                                "day": 2,
                                "time": "1000"
                            }
                        },
                        {
                            "close": {
                                "day": 3,
                                "time": "1900"
                            },
                            "open": {
                                "day": 3,
                                "time": "1000"
                            }
                        },
                        {
                            "close": {
                                "day": 4,
                                "time": "1900"
                            },
                            "open": {
                                "day": 4,
                                "time": "1000"
                            }
                        },
                        {
                            "close": {
                                "day": 5,
                                "time": "1900"
                            },
                            "open": {
                                "day": 5,
                                "time": "1000"
                            }
                        },
                        {
                            "close": {
                                "day": 6,
                                "time": "1900"
                            },
                            "open": {
                                "day": 6,
                                "time": "1000"
                            }
                        }
                    ],
                    "weekday_text": [
                        "Monday: 10:00 AM – 7:00 PM",
                        "Tuesday: 10:00 AM – 7:00 PM",
                        "Wednesday: 10:00 AM – 7:00 PM",
                        "Thursday: 10:00 AM – 7:00 PM",
                        "Friday: 10:00 AM – 7:00 PM",
                        "Saturday: 10:00 AM – 7:00 PM",
                        "Sunday: 10:00 AM – 7:00 PM"
                    ]
                },
                "date_time": {
                    "start": "9:30:00",
                    "end": "12:00:00"
                }
            }
        ]
    }
];



class IndexPage extends React.Component {
  constructor(props){
    super(props);
    this.pickMe = this.pickMe.bind(this);

  }

  componentDidMount(){
    this.props.fetchItinerary(this.props.itineraryParams);
  }

  pickMe(place){
    this.props.navigator.push({
      name: 'Show',
      passProps: {
          place
        },
    });
  }


  render() {
    if (this.props.loading){
      return (
        <OurSpinner size="large"/>
      );
    }

    let photoLinks = [
      require("../images/Food.jpg"),
      require("../images/Nightlife.jpg"),
      require("../images/Nature.jpg"),
      require("../images/Culture.jpg")
      ];
    let keys = [
      ["breakfast", "lunch", "dinner"],
      ["bars"],
      ["nature"],
      ["arts"]
    ];

    const places = [];

    const mapPlaces = (itinerary) => {
      ITINERARY.forEach( (place, idx) => {
        keys[idx].forEach( key => {
          if (Object.keys(itinerary[idx][String(key)]) === 0) { return; }
          places.push(
            <IndexItem
              itinerary={itinerary[idx][String(key)]}
              imgUrl={photoLinks[idx]}
              navigator = {this.props.navigator}/>
          );
        });
      });
    };

    mapPlaces(this.props.itinerary);

    return (
      <ScrollView>
        <Card>
          {places}
        </Card>
      </ScrollView>
    );
  }
}

const styles = {
  titleStyle: {
    color: '#FE5D26'
  }, spinnerStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
};

const mapStateToProps = (state, ownProps) => {
  console.log(state.itinerary)
  return {
    itinerary: state.itinerary,
    loading: state.loading.loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchItinerary: (itineraryParams) => dispatch(fetchItinerary(itineraryParams))
});
//
export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
