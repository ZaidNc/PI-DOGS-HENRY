import axios from "axios";
// Acciones para interactuar con la api y actualizar el estado en consecuencia
// Cada acción genera una petición http y luego dispatch una acción para actualizar el estado

const ruta = "/";

// Accion para obtener todas las razas de perros desde el servidor
export function getDogs() {
  return async function (dispatch) {
    axios
      .get(`${ruta}dogs`)
      .then((respuesta) =>
        dispatch({
          type: "GET_DOGS",
          payload: respuesta.data,
        })
      )
      .catch((error) => console.log(error));
  };
}

// Accion para obtener razas de perros por nombre desde el servidor
export function getNameDogs(name) {
  return async function (dispatch) {
    try {
      var dogsByName = await axios.get(
        "/dogs?name=" + name
      );
      return dispatch({
        type: "GET_NAME_DOGS",
        payload: dogsByName.data,
      });
    } catch (error) {
      alert(
        "El Nombre ingresado no existe en la base de datos, prueba otro o agrega uno nuevo"
      );
      console.log(error);
    }
  };
}

// Otras acciones para filtrar, ordenar, crear y obtener detalles de razas de perros
export function getTemperaments() {
  return async function (dispatch) {
    var temp = await axios.get("/temperaments", {});
    console.log(temp.data);
    return dispatch({ type: "GET_TEMPERAMENTS", payload: temp.data });
  };
}

export function filterDogsByTemperaments(payload) {
  return {
    type: "FILTER_BY_TEMPERAMENTS",
    payload,
  };
}

//filtra los dogs entre los creados y los que estan vienen de la api
export function filterCreated(payload) {
  return {
    type: "FILTER_CREATED",
    payload,
  };
}

export function postDogs(payload) {
  return async function (dispatch) {
    const response = await axios.post("/dogs", payload);
    console.log(response);
    return response;
  };
}

export function orderByName(payload) {
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
}

export function orderByWeight(payload) {
  return {
    type: "ORDER_BY_WEIGHT",
    payload,
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get("/dogs/" + id);
      return dispatch({
        type: "GET_DETAILS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
