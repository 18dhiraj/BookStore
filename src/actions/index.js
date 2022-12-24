export const bookss = (data) => {

    return {
        type: "ALL_BOOKS",
        payload: data
    }
}

export const addcart = (data) => {


    return {
        type: "ADD__CART",

        payload: {

            id: new Date().getDate().toString(),
            data: data
        }
    }
}


export const detailes = (data) => {

    return {
        type: "DETAILES",
        payload: {
            id: new Date().getDate().toString(),
            data: data
        }
    }
}