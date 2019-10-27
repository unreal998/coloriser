import {BODY_COLOR, HEADER_COLOR, TEXT_COLOR} from "../constants/fastEditiongConstants";

export function changeHeaderColor(newColor) {
    return({
      type: HEADER_COLOR,
      newColor
    })
}

export function changeBodyColor(newColor) {
    return({
        type: BODY_COLOR,
        newColor
    })
}

export function changeTextColor(newColor) {
    return({
        type: TEXT_COLOR,
        newColor
    })
}