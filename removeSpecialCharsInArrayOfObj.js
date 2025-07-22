const data = {
  "employees1": [
    {
      "firstName": "John <Doe>",
      "lastName": "Doe / Smith",
      "designation": "Software Engineer {Frontend}",
      "address": {
        "street": "123 > Main St",
        "city": "New York / Manhattan",
        "state": "NY <North>",
        "zipCode": "10001",
        "country": "USA"
      }
    },
    {
      "firstName": "Jane > Smith",
      "lastName": "Smith {Jones}",
      "designation": "Product Manager / Owner",
      "address": {
        "street": "456 Elm {Apt 5}",
        "city": "San Francisco > Bay Area",
        "state": "CA / West",
        "zipCode": "94107",
        "country": "USA"
      }
    }
  ],
  "employees2": {
      "firstName": "John <Doe>",
      "lastName": "Doe / Smith",
      "designation": "Software Engineer {Frontend}",
      "address": {
        "street": "123 > Main St",
        "city": "New York / Manhattan",
        "state": "NY <North>",
        "zipCode": "10001",
        "country": "USA"
      }
    },
    "employee3": "Doe / Smith"
}

  function cleanObjectStringsWithReduce(obj) {
    if (typeof obj === 'string') {
      return obj.replace(/[^a-zA-Z0-9 ]/g, '');
    }
  
    if (Array.isArray(obj)) {
      return obj.map(cleanObjectStringsWithReduce);
    }
  
    if (typeof obj === 'object' && obj !== null) {
      return Object.entries(obj).reduce((acc, [key, value]) => {
        acc[key] = cleanObjectStringsWithReduce(value);
        return acc;
      }, {});
    }
  
    return obj;
  }

  //Latest

  function sanitizeStrings(obj) {
    if (Array.isArray(obj)) return obj.map(sanitizeStrings);
    else if (typeof obj === 'object' && obj !== null) {
      return Object.fromEntries(
        Object.entries(obj).map(([k, v]) => [k, sanitizeStrings(v)])
      );
    } else if (typeof obj === 'string') {
      return obj.replace(/[^a-zA-Z0-9 ]/g, '');
    }
    return obj;
  }
  