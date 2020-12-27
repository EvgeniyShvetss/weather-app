import { SELECT_SELECTED } from "./types"

const INIT_STATE = {
  select: [
    { value: "kiev", text: "Киев" },
    { value: "kharkov", text: "Харьков" },
    { value: "odessa", text: "Одесса" },
    { value: "dnepr", text: "Днепр" },
    { value: "zaporizhzhia", text: "Запорожье" },
    { value: "lvov", text: "Львов" },
    { value: "doneck", text: "Донецк" },
    { value: "Kryvyi Rih", text: "Кривой Рог" },
    { value: "sevastopol", text: "Севастополь" },
    { value: "mariupol", text: "Мариуполь" },
    { value: "luhansk", text: "Луганск" },
    { value: "vinitsa", text: "Винница" },
    { value: "kherson", text: "Херсон" },
  ],
}

// eslint-disable-next-line import/prefer-default-export
export const selectReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SELECT_SELECTED:
      return {
        ...state,
      }
    default:
      return state
  }
}
