module SettingsPage exposing (main)

import Browser
import Context exposing (Context)
import Html exposing (Html)
import Html.Attributes exposing (class)
import Html.Events exposing (onClick)
import Json.Decode as Decode exposing (Value)
import Result
import TheProcess exposing (TheProcess, Preview, ProcessData)

type PageModel
    = PageModel Context

type Model
    = Error String
    | Success PageModel

init : Value -> (Model, Cmd Msg)
init flags =
    Decode.decodeValue Context.decoder flags
        |> Result.map (\context -> Success (PageModel context))
        |> Result.withDefault (Error "Failed to parse flags")
        |> (\model -> (model, Cmd.none))


type Msg
    = UserClickedCreateProcess
    | UserUpdatedTitleField String
    | UserUpdatedDescriptionField String
    | UserSavedNewProcess ProcessData
    | ServerReturnedSaveResponse


update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
    case msg of
        UserClickedCreateProcess ->
            ( model, Cmd.none )
        UserUpdatedTitleField title ->
            ( model, Cmd.none )
        UserUpdatedDescriptionField description ->
            ( model, Cmd.none )
        UserSavedNewProcess newProcess ->
            ( model, Cmd.none )
        ServerReturnedSaveResponse ->
            ( model, Cmd.none )

view : Model -> Html Msg
view model =
    case model of
        Error error ->
            Html.div [] [ Html.text error ]

        Success (PageModel context) ->
            Html.div []
                [ Html.h1 [] [ Html.text "SpringBoard Settings" ]
                ]

subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none

main : Program Value Model Msg
main =
    Browser.element
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
