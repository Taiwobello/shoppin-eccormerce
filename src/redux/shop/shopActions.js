import { TOGGLE_ACTIVE, TOGGLE_CATEGORY} from "./shopTypes"
export const toggleCategory = (category) => {
    return {
        type: TOGGLE_CATEGORY,
        payload: category
    }
}

export const toggleActive = (category) => {
    return {
        type: TOGGLE_ACTIVE,
        payload: category
    }
}

