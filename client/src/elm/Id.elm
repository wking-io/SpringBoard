module Id exposing (Id, toString, mock, decoder)

import Json.Decode as Decode exposing (Decoder)

type Id
  = Id String

mock : Id
mock = Id "123456"

fromString : String -> Id
fromString string =
  Id string

decoder : Decoder Id
decoder =
  Decode.map fromString Decode.string 

toString : Id -> String
toString (Id id) =
  id