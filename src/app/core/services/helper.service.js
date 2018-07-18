class HelperService {
  constructor() {
  }

  getItemByProp(value, array, prop) {
    let match = array.filter((item) => {
      return item[prop] === parseInt(value);
    });
    match = match.length > 0 ? match[0] : undefined;

    return match;
  }

}

HelperService.$inject = [];

export default HelperService;
