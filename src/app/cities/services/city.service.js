class CityService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }

  get() {
    const deferred = this.$q.defer();
    deferred.resolve(cities);
    return deferred.promise;
  }

}

CityService.$inject = ['$http', '$q'];

export default CityService;

let cities = [
  {
    "id": 792680,
    "name": "Belgrade",
    "country": "RS",
    "coord": {
      "lon": 20.46513,
      "lat": 44.804008
    }
  },
  {
    "id": 790367,
    "name": "Gornji Milanovac",
    "country": "RS",
    "coord": {
      "lon": 20.450001,
      "lat": 44.033329
    }
  },
  {
    "id": 787893,
    "name": "Mladenovac",
    "country": "RS",
    "coord": {
      "lon": 20.699169,
      "lat": 44.43861
    }
  },
  {
    "id": 6356055,
    "name": "Barcelona",
    "country": "ES",
    "coord": {
      "lon": 2.12804,
      "lat": 41.399422
    }
  },
  {
    "id": 2643743,
    "name": "London",
    "country": "GB",
    "coord": {
      "lon": -0.12574,
      "lat": 51.50853
    }
  },
  {
    "id": 5128638,
    "name": "New York",
    "country": "US",
    "coord": {
      "lon": -75.499901,
      "lat": 43.000351
    }
  },
  {
    "id": 524901,
    "name": "Moscow",
    "country": "RU",
    "coord": {
      "lon": 37.615555,
      "lat": 55.75222
    }
  },
  {
    "id": 6359304,
    "name": "Madrid",
    "country": "ES",
    "coord": {
      "lon": -3.68275,
      "lat": 40.489349
    }
  },
  {
    "id": 2964574,
    "name": "Dublin",
    "country": "IE",
    "coord": {
      "lon": -6.26719,
      "lat": 53.34399
    }
  },
  {
    "id": 2179538,
    "name": "Wellington",
    "country": "NZ",
    "coord": {
      "lon": 174.766663,
      "lat": -41.283329
    }
  },
  {
    "id": 2759794,
    "name": "Amsterdam",
    "country": "NL",
    "coord": {
      "lon": 4.88969,
      "lat": 52.374031
    }
  },
  {
    "id": 2172517,
    "name": "Canberra",
    "country": "AU",
    "coord": {
      "lon": 149.128067,
      "lat": -35.283459
    }
  }
];
