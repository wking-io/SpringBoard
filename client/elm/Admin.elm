module Main exposing (main)

import Browser
import Html exposing (Html, button, div, text)
import Html.Events exposing (onClick)


type alias Model = Bool


init : () -> ( Model, Cmd Msg)
init () =
    (True, Cmd.none)


type Msg
    = Hello
    | Goodbye


update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
    case msg of
        Hello ->
            ( True, Cmd.none )

        Goodbye ->
            ( False, Cmd.none )

say : Bool -> List (Html Msg)
say hello =
  if hello then
    [ Html.p [] [ Html.text "Hello there friend!"] 
    , Html.button [ onClick Goodbye ] [ Html.text "Say goodbye 👋"]
    ]
  else
    [ Html.p [] [ Html.text "See you later!"] 
    , Html.button [ onClick Hello ] [ Html.text "Say hello 👋"]
    ]

view : Model -> Html Msg
view model =
    div []
        [ Html.h1 [] [ Html.text "SpringBoard" ]
        , div [] (say model)
        ]

subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none

main : Program () Model Msg
main =
    Browser.element
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
