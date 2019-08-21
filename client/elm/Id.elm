module Id exposing (Id, toString, mock)

type Id
  = Id String

mock : Id
mock = Id "123456"

toString : Id -> String
toString (Id id) =
  id