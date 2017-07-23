export interface OptionType {
  id: number,
  name: string,
  presentation: string,
  position: number
}

export interface OptionValue {
  id: number,
  name: string,
  presentation: string,
  option_type_id: number,
  option_type_name: string
}
