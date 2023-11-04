export type ResponseType = {
  ok: boolean,
  result: {
    message_id: number,
    from: {
      id: number,
      is_bot: boolean,
      first_name: string,
      username: string
    },
    chat: {
      id: number,
      title: string,
      type: string,
      all_members_are_administrators: boolean
    },
    date: number,
    text: string
  }
}
