module Context exposing (Context, decoder)

import Json.Decode as Decoder exposing (Decoder)

type alias Context =
    { url : String
    }

decoder : Decoder Context
decoder =
  Decoder.map Context
    (Decoder.field "url" Decoder.string)