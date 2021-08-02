//base request query to mars rover api
export const getRoverData = async (roverType, params) => {
  //create base url
  let url = new URL(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverType}/photos`
  );

  //setup params with api key
  params.api_key = process.env.REACT_APP_MARS_API_KEY;

  //formal request url
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

  //handle data
  let response = await fetch(url);
  return response.json();
};

//query data via page parameter
export const getRoverDataByPage = async (id, earth_date, rover) => {
  return await getRoverData(rover, { earth_date, page: id });
};

//query data via camera parameter
export const getRoverDataByCamera = async (camera, earth_date, rover) => {
  // handle camera params
  let params = { earth_date };
  if (camera !== "All") params.camera = camera;

  return await getRoverData(rover, params);
};
